"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { ArrowRight, Mail, MapPin } from "lucide-react";
import { profile, stats } from "@/data/profile";
import { GithubIcon, LinkedinIcon } from "./icons";

function useTypewriter(words: string[], speed = 55, pause = 1600) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[index % words.length];
    if (!deleting && text === word) {
      const t = setTimeout(() => setDeleting(true), pause);
      return () => clearTimeout(t);
    }
    if (deleting && text === "") {
      const t = setTimeout(() => {
        setDeleting(false);
        setIndex((i) => i + 1);
      }, 250);
      return () => clearTimeout(t);
    }
    const t = setTimeout(
      () => setText(deleting ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1)),
      deleting ? speed / 2 : speed
    );
    return () => clearTimeout(t);
  }, [text, deleting, index, words, speed, pause]);

  return text;
}

const TERMINAL_LINES = [
  { t: "user", text: "Create a PR summary and link work items" },
  { t: "agent", text: "planning → 3 steps" },
  { t: "tool", text: "mcp.azure_devops.get_pull_request(id: 4821)" },
  { t: "ok", text: "✓ 14 files · 2 work items found" },
  { t: "tool", text: "guardrail.validate(scope: \"repo:read\")" },
  { t: "ok", text: "✓ action allowed" },
  { t: "tool", text: "mcp.azure_devops.update_pr_description()" },
  { t: "ok", text: "✓ done in 2.4s" },
];

function AgentTerminal() {
  const [shown, setShown] = useState(0);
  useEffect(() => {
    if (shown >= TERMINAL_LINES.length) {
      const t = setTimeout(() => setShown(0), 3500);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => setShown((s) => s + 1), shown === 0 ? 600 : 700);
    return () => clearTimeout(t);
  }, [shown]);

  const color: Record<string, string> = {
    user: "text-fg",
    agent: "text-accent",
    tool: "text-muted",
    ok: "text-emerald-500 dark:text-emerald-400",
  };
  const prefix: Record<string, string> = { user: "❯", agent: "◆", tool: "→", ok: " " };

  return (
    <div className="glass relative overflow-hidden rounded-2xl shadow-2xl shadow-accent/10">
      <div className="flex items-center gap-2 border-b border-border px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-red-400/80" />
        <span className="h-3 w-3 rounded-full bg-yellow-400/80" />
        <span className="h-3 w-3 rounded-full bg-green-400/80" />
        <span className="ml-3 font-mono text-xs text-subtle">devops-agent — mcp</span>
      </div>
      <div className="h-[260px] space-y-2 p-5 font-mono text-[12.5px] leading-relaxed">
        {TERMINAL_LINES.slice(0, shown).map((l, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -6 }}
            animate={{ opacity: 1, x: 0 }}
            className={`flex gap-2 ${color[l.t]}`}
          >
            <span className="w-3 shrink-0 text-subtle">{prefix[l.t]}</span>
            <span className="break-all">{l.text}</span>
          </motion.div>
        ))}
        <div className="flex gap-2">
          <span className="w-3 text-subtle">❯</span>
          <span className="inline-block h-4 w-2 animate-blink bg-accent" />
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  const outcome = useTypewriter(profile.outcomes);

  return (
    <section id="top" className="relative overflow-hidden pt-36 pb-20 sm:pt-44">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="bg-grid mask-fade-b absolute inset-0" />
        <div className="animate-aurora absolute -top-40 left-1/4 h-[520px] w-[520px] rounded-full bg-accent opacity-25 blur-[120px]" />
        <div
          className="animate-aurora absolute -top-20 right-[10%] h-[420px] w-[420px] rounded-full bg-accent-2 opacity-20 blur-[120px]"
          style={{ animationDelay: "-6s" }}
        />
      </div>

      <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 lg:grid-cols-[1.25fr_1fr]">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="glass mb-7 inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs text-muted"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            Open to new opportunities
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl font-semibold tracking-tighter sm:text-6xl lg:text-7xl"
          >
            Hi, I&apos;m <span className="text-gradient">{profile.shortName}</span>.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="mt-5 text-xl text-muted sm:text-2xl"
          >
            I turn
            <br className="sm:hidden" />{" "}
            <span className="font-medium text-fg">{outcome}</span>
            <span className="ml-0.5 inline-block h-6 w-[2px] translate-y-1 animate-blink bg-accent" />
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-6 max-w-xl leading-relaxed text-muted"
          >
            {profile.intro}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-fg px-5 py-3 text-sm font-medium text-bg transition hover:opacity-90"
            >
              See the problems I&apos;ve solved
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="glass inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium transition hover:border-accent/50"
            >
              <Mail className="h-4 w-4" /> Get in touch
            </a>
            <div className="ml-1 flex items-center gap-1">
              <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="grid h-10 w-10 place-items-center rounded-full text-muted transition hover:bg-accent-soft hover:text-fg">
                <GithubIcon className="h-5 w-5" />
              </a>
              {profile.linkedin && (
                <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="grid h-10 w-10 place-items-center rounded-full text-muted transition hover:bg-accent-soft hover:text-fg">
                  <LinkedinIcon className="h-5 w-5" />
                </a>
              )}
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-6 flex items-center gap-1.5 text-sm text-subtle"
          >
            <MapPin className="h-3.5 w-3.5" /> {profile.location}
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30, rotateX: 8 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="hidden sm:block"
        >
          <AgentTerminal />
        </motion.div>
      </div>

      <div className="mx-auto mt-20 max-w-6xl px-5">
      <div className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-border bg-border md:grid-cols-4">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 + i * 0.08 }}
            className="bg-bg p-6"
          >
            <div className="text-2xl font-semibold tracking-tight sm:text-3xl">{s.value}</div>
            <div className="mt-1 text-sm text-muted">{s.label}</div>
          </motion.div>
        ))}
      </div>
      </div>
    </section>
  );
}
