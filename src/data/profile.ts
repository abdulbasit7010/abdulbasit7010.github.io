// All portfolio content lives here. Edit this file to update the site.

export const profile = {
  name: "Malik Abdul Basit",
  shortName: "Abdul Basit",
  role: "Full Stack Engineer",
  location: "Islamabad, Pakistan",
  email: "abdulbasit.cs111@gmail.com",
  github: "https://github.com/abdulbasit7010",
  linkedin: "", // e.g. "https://www.linkedin.com/in/your-handle" — hidden while empty
  resumeUrl: "", // e.g. "/resume.pdf" (put the file in /public) — hidden while empty
  // Used for the page meta description and social previews.
  headline:
    "Full Stack Engineer who turns slow, manual and fragile processes into software that whole organizations rely on, from enterprise automation platforms to safe AI tooling for developers.",
  // Completes the hero line "I turn …"
  outcomes: [
    "manual processes into company-wide platforms",
    "30-minute releases into 2-minute deploys",
    "LLMs into safe, scoped developer tools",
    "multi-million-row tables into fast queries",
  ],
  intro:
    "For over five years I've been the engineer teams bring in when a process is slow, manual or risky. At S&P Global that has meant replacing manual onboarding and time tracking with platforms the entire company now uses, and giving developers an AI assistant that can act inside Azure DevOps without ever stepping outside its permissions.",
  summary:
    "Most of the software I've shipped started as a complaint: onboarding that depended on manual hand-offs, releases that tied up an engineer for half an hour, reports that struggled against multi-million-row tables. I find out where the time and risk actually go, then own the fix end to end, from the schema and API through the interface to the pipeline that ships it.",
  about: [
    "I diagnose before I build, which is why the same toolkit of Angular, Next.js, NestJS, OutSystems and SQL Server has solved very different problems for finance, telecom, mobility and education clients.",
    "I build for adoption rather than for the demo, and two internal platforms I delivered were rolled out company-wide at S&P Global, each earning a Person of the PI award.",
    "I make sure knowledge doesn't sit with one person by leading code reviews, mentoring four junior developers and running OutSystems workshops for the wider team.",
  ],
};

export const stats = [
  { value: "5+", label: "Years solving production problems" },
  { value: "2×", label: "Person of the PI for company-wide platforms" },
  { value: "30m → 2m", label: "Release time after automating CI/CD" },
  { value: "~30", label: "Reusable OutSystems modules architected" },
];

export type Experience = {
  company: string;
  tag?: string;
  role: string;
  period: string;
  location: string;
  highlights: string[];
  stack: string[];
};

export const experience: Experience[] = [
  {
    company: "S&P Global",
    tag: "Fortune 500",
    role: "Full Stack Engineer",
    period: "Apr 2023 — Present",
    location: "Islamabad, Pakistan",
    highlights: [
      "Replaced manual internal processes with three enterprise platforms built in Angular, Next.js, Node.js and OutSystems, owning each one from the REST APIs through to the responsive UI.",
      "Made it safe to let an LLM act on developers' behalf by building an Azure DevOps extension in which every MCP tool call is constrained by custom skills, guardrails and prompt strategies.",
      "Orchestrated multi-step agent workflows in LangGraph, carrying state between agents so complex requests finish without a human stitching the steps together.",
      "Cut release time from 30 minutes to under 2 by moving build and deploy onto GitHub-triggered CI/CD, freeing engineers from babysitting releases.",
      "Kept services highly available by running containerized workloads on AWS EKS behind ALB/NLB load balancing and Route 53 routing.",
      "Resolved performance bottlenecks on multi-million-row SQL Server datasets through targeted indexing and execution-plan analysis.",
      "Raised the team's bar by leading code reviews, mentoring four junior developers and running OutSystems workshops.",
    ],
    stack: ["Angular", "Next.js", "NestJS", "OutSystems", "AWS EKS", "LangGraph", "MCP", "SQL Server"],
  },
  {
    company: "Mercurial Minds Ltd.",
    role: "Software Engineer",
    period: "Mar 2021 — Apr 2023",
    location: "Islamabad, Pakistan",
    highlights: [
      "Delivered full-stack products for international clients in telecom, mobility and e-learning, taking each from requirements to production.",
      "Made very large datasets usable through the API by designing NestJS and Node.js endpoints with server-side pagination, validation and secured access.",
      "Moved heavy processing off the request path with event-driven AWS Lambda functions, backed by S3 storage and EC2 compute.",
      "Turned raw operational data into decisions with D3.js and Highcharts reporting modules, including CSV and PDF export pipelines.",
      "Made data-heavy interfaces feel fast through lazy loading, throttling, caching and rendering optimizations.",
    ],
    stack: ["Angular", "React", "Vue.js", "TypeScript", "NestJS", "AWS Lambda", "D3.js", "Redux"],
  },
];

export type Project = {
  title: string;
  client: string;
  problem: string;
  solution: string;
  impact: string;
  tags: string[];
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: "AI Assistant for Azure DevOps",
    client: "S&P Global",
    problem:
      "Developers lost time to repetitive Azure DevOps chores like writing PR summaries and linking work items, yet giving an LLM write access to company repositories was too risky to allow.",
    solution:
      "An Azure DevOps extension that connects an LLM through tool-calling and MCP, with custom skills and LangGraph workflows for multi-step tasks, where every action passes guardrails that check scope and validate inputs before anything is written.",
    impact: "Routine DevOps work is delegated to an assistant that can only take scoped, validated actions.",
    tags: ["LLM Tool Calling", "MCP", "LangGraph", "Guardrails"],
    featured: true,
  },
  {
    title: "Org-wide Automation Platforms",
    client: "S&P Global",
    problem:
      "Time tracking and employee onboarding depended on manual hand-offs that were slow to run, easy to get wrong and difficult to scale across a global workforce.",
    solution:
      "Two OutSystems platforms backed by REST APIs and SQL Server, a company-wide time-tracking system and a fully automated onboarding workflow, both built on reusable modules.",
    impact: "Adopted across the whole organization and recognized with two Person of the PI awards.",
    tags: ["OutSystems", "REST", "SQL Server"],
    featured: true,
  },
  {
    title: "Safety & Monitoring Platform",
    client: "Uber Brazil",
    problem:
      "Safety teams needed one place to review live and recorded trip video and manage rider and driver safety settings without exposing sensitive data.",
    solution:
      "Led frontend development of a MEAN-stack admin portal with live and recorded video access, advanced configuration and secure preference management.",
    impact: "Safety operators gained a single, secure console for monitoring and incident review.",
    tags: ["MEAN Stack", "Angular", "Video"],
  },
  {
    title: "USSD Management Portals",
    client: "GLO · Africa",
    problem:
      "Launching or changing a USSD service or marketing campaign required engineering effort every time, which slowed down the business teams who owned them.",
    solution:
      "Four portals covering Admin, Service Builder, Campaign Manager and Reporting, with a visual USSD tree builder, automated campaigns, role-based access and D3 analytics.",
    impact: "Business teams design services, run campaigns and track results without waiting on engineering.",
    tags: ["Angular", "D3.js", "RBAC"],
  },
  {
    title: "Online Learning & Video Platform",
    client: "MTA",
    problem:
      "The client wanted to take its teaching online but needed live sessions, media processing and paid subscriptions to work together as one product.",
    solution:
      "React and Vue portals on Node.js with custom video sessions, AWS Lambda pipelines for media processing and subscription management.",
    impact: "A complete learning business, covering delivery, content and revenue, running on one platform.",
    tags: ["React", "Vue.js", "AWS Lambda"],
  },
];

export const skills: { group: string; items: string[] }[] = [
  {
    group: "Frontend",
    items: ["Angular", "React", "Next.js", "Vue.js", "TypeScript", "JavaScript", "Redux", "Angular Material", "D3.js", "Highcharts", "HTML5", "CSS3"],
  },
  { group: "Backend", items: ["Node.js", "NestJS", "REST API Design", ".NET", "OutSystems"] },
  {
    group: "AI & Agents",
    items: ["LLM Tool Calling", "Model Context Protocol", "Prompt Engineering", "Agent Guardrails", "LangGraph", "A2A Orchestration", "Azure DevOps Extensions"],
  },
  {
    group: "Cloud & DevOps",
    items: ["AWS EKS", "EC2", "S3", "Lambda", "ALB / NLB", "Route 53", "Docker", "Kubernetes", "GitHub Actions", "CI/CD"],
  },
  { group: "Data", items: ["SQL Server", "Query Optimization", "Indexing", "Stored Procedures"] },
];

export const awards = [
  {
    title: "Person of the PI ×2",
    org: "S&P Global",
    detail: "Awarded for the enterprise time-tracking system and the automated onboarding platform, both adopted company-wide.",
  },
  { title: "Bronze Spot Award", org: "S&P Global · Q3 2024", detail: "Recognized for high-impact delivery." },
  { title: "OutSystems Associate Reactive Developer", org: "Certification", detail: "Reactive web development on OutSystems." },
];

export const education = {
  degree: "BS Computer Science",
  school: "University of Engineering and Technology, Taxila",
  period: "2016 — 2020",
  detail: "CGPA 3.44 / 4.00",
};
