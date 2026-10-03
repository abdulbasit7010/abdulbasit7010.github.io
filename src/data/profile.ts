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
  rotatingRoles: [
    "enterprise web platforms",
    "AI developer tooling",
    "agentic workflows with MCP",
    "cloud-native deployments",
  ],
  summary:
    "Full Stack Engineer with 5+ years building enterprise web applications for Fortune 500 and global clients. I own features end to end, from the data layer and API through containerized AWS deployment and GitHub-triggered CI/CD. These days I'm building AI developer tooling: an Azure DevOps extension that uses LLM tool-calling, MCP connections, custom skills and guardrails.",
  about: [
    "I work across the whole stack: Angular, Next.js, Node.js, NestJS and OutSystems, backed by SQL Server and well-designed REST APIs.",
    "I've been named Person of the PI at S&P Global twice for automation platforms that were adopted company-wide.",
    "I mentor junior developers, lead code reviews, and run technical workshops.",
  ],
};

export const stats = [
  { value: "5+", label: "Years shipping production software" },
  { value: "2×", label: "Person of the PI at S&P Global" },
  { value: "30m → 2m", label: "Deploy time after CI/CD automation" },
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
      "Built and shipped three enterprise platforms end to end with Angular, Next.js, Node.js and OutSystems, each with a responsive UI over scalable REST APIs.",
      "Built an Azure DevOps extension that connects an external LLM through tool-calling and MCP, with custom skills, guardrails and prompt strategies so the model only takes scoped, validated actions.",
      "Designed multi-step agent workflows in LangGraph with agent-to-agent handoffs and state carried across steps.",
      "Deployed containerized workloads on AWS EKS with EC2, ALB/NLB and Route 53 for high-availability delivery.",
      "Automated build and release with GitHub-triggered CI/CD, cutting deploy time from 30 minutes to under 2.",
      "Tuned SQL Server performance with indexing and execution-plan analysis on multi-million-row datasets.",
      "Led code reviews, mentored four junior developers and ran OutSystems workshops.",
    ],
    stack: ["Angular", "Next.js", "NestJS", "OutSystems", "AWS EKS", "LangGraph", "MCP", "SQL Server"],
  },
  {
    company: "Mercurial Minds Ltd.",
    role: "Software Engineer",
    period: "Mar 2021 — Apr 2023",
    location: "Islamabad, Pakistan",
    highlights: [
      "Delivered full-stack apps for international clients in telecom, mobility and e-learning.",
      "Designed RESTful APIs in NestJS and Node.js with server-side pagination, validation and secure endpoints for large datasets.",
      "Deployed on AWS using Lambda for event-driven processing, S3 for storage and EC2 for compute.",
      "Built reporting and analytics modules with D3.js and Highcharts, including CSV and PDF export pipelines.",
      "Improved front-end performance with lazy loading, throttling, caching and rendering optimizations.",
    ],
    stack: ["Angular", "React", "Vue.js", "TypeScript", "NestJS", "AWS Lambda", "D3.js", "Redux"],
  },
];

export type Project = {
  title: string;
  client: string;
  description: string;
  tags: string[];
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: "AI Assistant for Azure DevOps",
    client: "S&P Global",
    description:
      "An Azure DevOps extension that brings an LLM into developer workflows. It uses tool-calling and MCP connections, custom skills and guardrails so the model performs scoped, validated actions. Multi-step flows are orchestrated with LangGraph.",
    tags: ["LLM Tool Calling", "MCP", "LangGraph", "Guardrails"],
    featured: true,
  },
  {
    title: "Org-wide Automation Platforms",
    client: "S&P Global",
    description:
      "A company-wide time-tracking app and a fully automated employee onboarding platform that replaced manual processes. Both were adopted across the organization and earned two Person of the PI awards.",
    tags: ["OutSystems", "REST", "SQL Server"],
    featured: true,
  },
  {
    title: "Safety & Monitoring Platform",
    client: "Uber Brazil",
    description:
      "Led frontend development of an admin portal with live and recorded video access, advanced configuration and secure preference management for driver and passenger safety.",
    tags: ["MEAN Stack", "Angular", "Video"],
  },
  {
    title: "USSD Management Portals",
    client: "GLO · Africa",
    description:
      "A suite of telecom portals (Admin, Service Builder, Campaign Manager and Reporting) with visual USSD tree building, automated campaigns and D3 analytics.",
    tags: ["Angular", "D3.js", "RBAC"],
  },
  {
    title: "Online Learning & Video Platform",
    client: "MTA",
    description:
      "An end-to-end e-learning product with React and Vue portals on Node.js, plus custom video sessions, Lambda media processing and subscriptions.",
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
    detail: "For the enterprise time-tracking system and the automated onboarding platform.",
  },
  { title: "Bronze Spot Award", org: "S&P Global · Q3 2024", detail: "For high-impact delivery." },
  { title: "OutSystems Associate Reactive Developer", org: "Certification", detail: "Reactive web development on OutSystems." },
];

export const education = {
  degree: "BS Computer Science",
  school: "University of Engineering and Technology, Taxila",
  period: "2016 — 2020",
  detail: "CGPA 3.44 / 4.00",
};
