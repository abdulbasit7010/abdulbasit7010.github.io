import { ArrowUpRight, Award, Bot, Cloud, Code2, Database, GraduationCap, Mail, Server, Sparkles } from "lucide-react";
import { awards, education, experience, profile, projects, skills } from "@/data/profile";
import Reveal from "./Reveal";
import SpotlightCard from "./SpotlightCard";
import { GithubIcon, LinkedinIcon } from "./icons";

function SectionHeading({ eyebrow, title, sub }: { eyebrow: string; title: string; sub?: string }) {
  return (
    <Reveal className="mb-12 max-w-2xl">
      <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-accent">{eyebrow}</p>
      <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
      {sub && <p className="mt-4 leading-relaxed text-muted">{sub}</p>}
    </Reveal>
  );
}

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-border bg-bg-elev/60 px-2.5 py-1 font-mono text-[11px] text-muted">
      {children}
    </span>
  );
}

/* ---------------- About ---------------- */
export function About() {
  const pillars = [
    { icon: Code2, title: "Frontend", text: "Angular, Next.js, React, Vue" },
    { icon: Server, title: "Backend", text: "Node.js, NestJS, REST, .NET" },
    { icon: Bot, title: "AI & Agents", text: "MCP, tool-calling, LangGraph" },
    { icon: Cloud, title: "Cloud", text: "AWS EKS, Lambda, CI/CD" },
  ];
  return (
    <section id="about" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-24">
      <SectionHeading eyebrow="About" title="I build software from the database to the deploy pipeline." />
      <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
        <Reveal>
          <SpotlightCard className="h-full p-8">
            <p className="text-lg leading-relaxed">{profile.summary}</p>
            <ul className="mt-6 space-y-3">
              {profile.about.map((a) => (
                <li key={a} className="flex gap-3 text-muted">
                  <Sparkles className="mt-1 h-4 w-4 shrink-0 text-accent" />
                  <span>{a}</span>
                </li>
              ))}
            </ul>
          </SpotlightCard>
        </Reveal>
        <div className="grid grid-cols-2 gap-4">
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.07}>
              <SpotlightCard className="h-full p-5">
                <div className="mb-4 grid h-10 w-10 place-items-center rounded-xl bg-accent-soft text-accent">
                  <p.icon className="h-5 w-5" />
                </div>
                <h3 className="font-medium">{p.title}</h3>
                <p className="mt-1 text-sm text-muted">{p.text}</p>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Experience ---------------- */
export function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-24">
      <SectionHeading eyebrow="Experience" title="Where I've worked" />
      <div className="relative">
        <div className="absolute top-2 bottom-2 left-[7px] w-px bg-gradient-to-b from-accent via-border to-transparent md:left-[calc(220px+7px)]" />
        <div className="space-y-12">
          {experience.map((job, i) => (
            <Reveal key={job.company} delay={i * 0.1}>
              <div className="relative grid gap-4 pl-8 md:grid-cols-[220px_1fr] md:gap-10 md:pl-0">
                <div className="md:pt-6 md:text-right md:pr-10">
                  <p className="font-mono text-xs text-accent">{job.period}</p>
                  <p className="mt-1 text-sm text-subtle">{job.location}</p>
                </div>
                <span className="absolute top-1.5 left-0 h-[15px] w-[15px] rounded-full border-2 border-accent bg-bg md:top-7 md:left-[220px]" />
                <SpotlightCard className="p-7 md:ml-6">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-xl font-semibold tracking-tight">{job.company}</h3>
                    {job.tag && (
                      <span className="rounded-full bg-accent-soft px-2 py-0.5 text-[11px] font-medium text-accent">
                        {job.tag}
                      </span>
                    )}
                  </div>
                  <p className="mt-0.5 text-muted">{job.role}</p>
                  <ul className="mt-5 space-y-2.5">
                    {job.highlights.map((h) => (
                      <li key={h} className="flex gap-3 text-[15px] leading-relaxed text-muted">
                        <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                        {h}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {job.stack.map((s) => (
                      <Chip key={s}>{s}</Chip>
                    ))}
                  </div>
                </SpotlightCard>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Projects ---------------- */
export function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-24">
      <SectionHeading
        eyebrow="Selected work"
        title="Projects I've built and led"
        sub="Enterprise platforms, AI tooling and products for clients in finance, mobility, telecom and education."
      />
      <div className="grid gap-5 md:grid-cols-6">
        {projects.map((p, i) => (
          <Reveal key={p.title} delay={(i % 3) * 0.08} className={p.featured ? "md:col-span-3" : "md:col-span-2"}>
            <SpotlightCard className="group flex h-full flex-col p-7">
              <div className="flex items-start justify-between gap-4">
                <p className="font-mono text-xs uppercase tracking-wider text-accent">{p.client}</p>
                <ArrowUpRight className="h-5 w-5 text-subtle transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
              </div>
              <h3 className={`mt-3 font-semibold tracking-tight ${p.featured ? "text-2xl" : "text-lg"}`}>{p.title}</h3>
              <p className="mt-3 flex-1 text-[15px] leading-relaxed text-muted">{p.description}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <Chip key={t}>{t}</Chip>
                ))}
              </div>
            </SpotlightCard>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ---------------- Skills ---------------- */
export function Skills() {
  const icons = [Code2, Server, Bot, Cloud, Database];
  const all = skills.flatMap((s) => s.items);
  return (
    <section id="skills" className="scroll-mt-24 py-24">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading eyebrow="Toolbox" title="Skills and technologies" />
      </div>

      <div className="mask-fade-x mb-14 overflow-hidden">
        <div className="flex w-max animate-marquee gap-3 hover:[animation-play-state:paused]">
          {[...all, ...all].map((s, i) => (
            <span key={i} className="glass whitespace-nowrap rounded-full px-4 py-2 text-sm">
              {s}
            </span>
          ))}
        </div>
      </div>

      <div className="mx-auto grid max-w-6xl gap-4 px-5 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((g, i) => {
          const Icon = icons[i % icons.length];
          return (
            <Reveal key={g.group} delay={i * 0.06}>
              <SpotlightCard className="h-full p-6">
                <div className="mb-4 flex items-center gap-3">
                  <div className="grid h-9 w-9 place-items-center rounded-xl bg-accent-soft text-accent">
                    <Icon className="h-4 w-4" />
                  </div>
                  <h3 className="font-medium">{g.group}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {g.items.map((s) => (
                    <Chip key={s}>{s}</Chip>
                  ))}
                </div>
              </SpotlightCard>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

/* ---------------- Recognition ---------------- */
export function Recognition() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-24">
      <SectionHeading eyebrow="Recognition" title="Awards, certifications and education" />
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {awards.map((a, i) => (
          <Reveal key={a.title} delay={i * 0.06}>
            <SpotlightCard className="h-full p-6">
              <Award className="h-6 w-6 text-accent" />
              <h3 className="mt-4 font-semibold tracking-tight">{a.title}</h3>
              <p className="mt-1 font-mono text-xs text-subtle">{a.org}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted">{a.detail}</p>
            </SpotlightCard>
          </Reveal>
        ))}
        <Reveal delay={0.2}>
          <SpotlightCard className="h-full p-6">
            <GraduationCap className="h-6 w-6 text-accent" />
            <h3 className="mt-4 font-semibold tracking-tight">{education.degree}</h3>
            <p className="mt-1 font-mono text-xs text-subtle">{education.period}</p>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              {education.school} · {education.detail}
            </p>
          </SpotlightCard>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- Contact ---------------- */
export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-24">
      <Reveal>
        <div className="relative overflow-hidden rounded-[2rem] border border-border p-10 text-center sm:p-16">
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute -top-24 left-1/2 h-72 w-[36rem] -translate-x-1/2 rounded-full bg-accent opacity-20 blur-[100px]" />
            <div className="bg-grid absolute inset-0 opacity-60" />
          </div>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">Contact</p>
          <h2 className="mx-auto mt-4 max-w-2xl text-4xl font-semibold tracking-tight sm:text-5xl">
            Let&apos;s build something <span className="text-gradient">great</span> together.
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-muted">
            I&apos;m open to full stack and AI engineering roles, collaborations and interesting problems. My inbox is
            always open.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 rounded-full bg-fg px-6 py-3 text-sm font-medium text-bg transition hover:opacity-90"
            >
              <Mail className="h-4 w-4" /> {profile.email}
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="glass inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium transition hover:border-accent/50"
            >
              <GithubIcon className="h-4 w-4" /> GitHub
            </a>
            {profile.linkedin && (
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="glass inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium transition hover:border-accent/50"
              >
                <LinkedinIcon className="h-4 w-4" /> LinkedIn
              </a>
            )}
            {profile.resumeUrl && (
              <a
                href={profile.resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="glass inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium transition hover:border-accent/50"
              >
                Resume <ArrowUpRight className="h-4 w-4" />
              </a>
            )}
          </div>
        </div>
      </Reveal>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 border-t border-border px-5 py-10 text-sm text-subtle sm:flex-row">
      <p>© {new Date().getFullYear()} {profile.name}</p>
      <p>Built with Next.js, Tailwind CSS and Motion.</p>
    </footer>
  );
}
