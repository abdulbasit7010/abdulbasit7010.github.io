"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Moon, Palette, Sun } from "lucide-react";

const ACCENTS = [
  { id: "violet", swatch: "linear-gradient(135deg,#a78bfa,#f472b6)" },
  { id: "emerald", swatch: "linear-gradient(135deg,#34d399,#22d3ee)" },
  { id: "amber", swatch: "linear-gradient(135deg,#fbbf24,#f87171)" },
  { id: "sky", swatch: "linear-gradient(135deg,#38bdf8,#818cf8)" },
] as const;

// Theme lives on <html data-theme / data-accent>; React just mirrors it.
function subscribe(cb: () => void) {
  const mo = new MutationObserver(cb);
  mo.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme", "data-accent"] });
  return () => mo.disconnect();
}

function apply(key: "theme" | "accent", value: string) {
  document.documentElement.dataset[key] = value;
  try {
    localStorage.setItem(key, value);
  } catch {}
}

export default function ThemeControls() {
  const theme = useSyncExternalStore(
    subscribe,
    () => document.documentElement.dataset.theme ?? "dark",
    () => "dark"
  );
  const accent = useSyncExternalStore(
    subscribe,
    () => document.documentElement.dataset.accent ?? "violet",
    () => "violet"
  );
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const close = (e: MouseEvent) => {
      if (!ref.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, [open]);

  const toggleTheme = () => apply("theme", theme === "dark" ? "light" : "dark");
  const pickAccent = (id: string) => apply("accent", id);

  return (
    <div className="flex items-center gap-1" ref={ref}>
      <div className="relative">
        <button
          onClick={() => setOpen((o) => !o)}
          aria-label="Change accent color"
          aria-expanded={open}
          className="grid h-9 w-9 place-items-center rounded-full text-muted transition hover:bg-accent-soft hover:text-fg"
        >
          <Palette className="h-4 w-4" />
        </button>
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -6, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -6, scale: 0.95 }}
              transition={{ duration: 0.15 }}
              className="glass absolute right-0 top-12 flex gap-2 rounded-full p-2 shadow-xl"
            >
              {ACCENTS.map((a) => (
                <button
                  key={a.id}
                  onClick={() => pickAccent(a.id)}
                  aria-label={`${a.id} accent`}
                  className={`h-6 w-6 rounded-full transition hover:scale-110 ${
                    accent === a.id ? "ring-2 ring-fg ring-offset-2 ring-offset-bg" : ""
                  }`}
                  style={{ background: a.swatch }}
                />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <button
        onClick={toggleTheme}
        aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
        className="grid h-9 w-9 place-items-center rounded-full text-muted transition hover:bg-accent-soft hover:text-fg"
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={theme}
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: 90, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </motion.span>
        </AnimatePresence>
      </button>
    </div>
  );
}
