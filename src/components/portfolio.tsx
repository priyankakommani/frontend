import { useEffect, useRef, useState, type ReactNode } from "react";

const RESUME_URL = "/Priyanka_Kommani_Resume.pdf";
const EMAIL = "priyankakommani@gmail.com";
const GITHUB = "https://github.com/priyankakommani";
const LINKEDIN = "https://www.linkedin.com/in/priyanka-kommani-668315244";

const skillGroups: { title: string; items: string[] }[] = [
    { title: "Backend", items: ["Node.js", "TypeScript", "Express", "NestJS", "Hono.js", "REST APIs", "GraphQL", "WebSockets"] },
    { title: "Frontend", items: ["React.js", "Next.js 14", "Tailwind CSS", "TanStack Query"] },
    { title: "Data", items: ["PostgreSQL", "Drizzle ORM", "Prisma", "Redis", "MongoDB", "BullMQ"] },
    { title: "AI / LLM", items: ["Gemini", "Anthropic", "OpenAI APIs", "RAG", "pgvector", "LiveKit Agents"] },
    { title: "Cloud & Tools", items: ["AWS S3", "Docker", "GitHub Actions", "Git", "JWT", "Zod"] },
    { title: "Integrations", items: ["Zerodha Kite", "Upstox", "Zoho Payments", "UPI Autopay", "Stripe", "Razorpay", "Deepgram"] },
];

const stats = [
    { value: "1.5+ yrs", label: "Shipping production software" },
    { value: "7", label: "Broker APIs integrated" },
    { value: "9", label: "Google Play releases" },
    { value: "<500ms", label: "Real-time AI voice latency" },
];

const experience = [
    {
        role: "MERN Stack Developer",
        company: "Growsin Private Limited · Fintech",
        period: "Sep 2026 – Present",
        points: [
            "Build the Growsin investment-research product end to end: Hono.js + PostgreSQL (Drizzle ORM) backend, Next.js landing pages and mobile-app features; shipped 9 releases to Google Play.",
            "Integrated stock-order execution with 7 broker APIs behind one broker layer; Zerodha Kite Connect basket orders and Upstox run live in production.",
            "Built subscription billing on Zoho Payments with opt-in UPI Autopay and webhook-driven access grants.",
            "Built KYC onboarding with CVL KRA PAN verification and automatic fallback to Digio Aadhaar eSign during upstream outages, released behind feature flags.",
        ],
    },
    {
        role: "Software Engineer",
        company: "Orotron",
        period: "Nov 2024 – Mar 2026",
        points: [
            "Sole backend owner: designed and shipped the production REST APIs (Node.js, Hono.js) behind every core feature.",
            "Modelled multi-table PostgreSQL schemas with Drizzle ORM and optimised queries on business-critical flows.",
            "Built real-time integrations with LiveKit, VideoSDK, Deepgram and AWS S3 for live AI interview and proctoring sessions, with Gemini-based candidate scoring.",
            "Owned delivery from schema design to production deployment, working directly with frontend and product.",
        ],
    },
];

type Project = {
    title: string;
    tag: string;
    summary: string;
    highlights: string[];
    stack: string[];
    live?: string;
    github?: string;
    privateNote?: string;
    featured?: boolean;
    badge?: string;
};

const projects: Project[] = [
    {
        title: "Aigrad — AI-Powered Learning Platform",
        tag: "AI · RAG · Full Stack",
        summary: "A learning platform with an AI tutor that answers from course content and cites the exact video timestamp. Built solo, end to end.",
        highlights: [
            "55-route Next.js 14 frontend and a NestJS backend (40+ controllers, ~37k LOC) on PostgreSQL + Drizzle",
            "RAG pipeline on pgvector + Gemini, with embedding jobs running on Redis + BullMQ",
            "Real-time coding lab over Socket.IO; Stripe + Razorpay payments with webhook fulfilment",
        ],
        stack: ["Next.js 14", "NestJS", "PostgreSQL", "pgvector", "Gemini", "Redis", "BullMQ", "Stripe"],
        privateNote: "Client project · code is private",
        featured: true,
        badge: "Featured",
    },
    {
        title: "Interview Management & Proctoring Platform",
        tag: "AI · Backend · Production",
        summary: "A client's interview product I owned the backend for at Orotron: scheduling, live proctoring and AI scoring, used by real candidates.",
        highlights: [
            "Live proctored interviews with VideoSDK, and speech-to-text transcription via Deepgram",
            "Gemini-based candidate scoring, with async jobs managed through QStash",
            "Multi-table PostgreSQL schema behind Node.js + Hono.js REST APIs",
        ],
        stack: ["Node.js", "Hono.js", "PostgreSQL", "Drizzle ORM", "VideoSDK", "Deepgram", "Gemini", "QStash"],
        privateNote: "Client project built at Orotron · code is private",
        featured: true,
        badge: "In Production",
    },
    {
        title: "Settle — Travel Expense Reimbursement",
        tag: "Full Stack · Workflow Automation",
        summary: "Turns an employee's post-trip inbox into a policy-checked expense claim and tracks it from Draft to Paid.",
        highlights: [
            "Parses raw .eml emails and receipt images (OCR), removing duplicates and promo noise",
            "Config-driven policy engine, approval routing up the reporting chain, strict state machine",
            "JWT auth, role-scoped analytics and a full audit log",
        ],
        stack: ["TypeScript", "Hono", "PostgreSQL", "Drizzle ORM", "React 18", "Tesseract.js", "Zod"],
        live: "https://settle-six-mu.vercel.app/",
        github: "https://github.com/priyankakommani/settle",
    },
    {
        title: "AI Full-Stack App Generator",
        tag: "AI · LLM Pipelines",
        summary: "Type a prompt, get a complete working Next.js + TypeScript + Tailwind app.",
        highlights: [
            "Multi-stage pipeline: intent → decomposition → data model → streamed code generation",
            "Model routing across Anthropic, Gemini and OpenAI-compatible APIs with JSON-schema guardrails",
            "tsc/eslint validate-and-repair loop and per-plan token budgets to control cost",
        ],
        stack: ["TypeScript", "Next.js 14", "Anthropic", "Gemini", "Drizzle ORM"],
        privateNote: "Client project · code is private",
    },
    {
        title: "Real-Time AI Interview Platform",
        tag: "AI · WebRTC · Personal Project",
        summary: "Built on my own time to go further with real-time voice AI: live two-way interviews with an AI interviewer that answers in under half a second.",
        highlights: [
            "LiveKit Agents + Gemini 2.5 Flash native audio over WebRTC, sub-500 ms responses",
            "Transcripts stream as structured JSON to AWS S3, with MP4 recordings via LiveKit Egress",
            "React + Tailwind frontend with live agent-state feedback",
        ],
        stack: ["Node.js", "Express", "React.js", "LiveKit", "Gemini", "AWS S3"],
        live: "https://livekit-live-api.vercel.app/",
        github: "https://github.com/priyankakommani/livekit-live-api",
    },
    {
        title: "PlateSync — Food Ordering with RBAC",
        tag: "Full Stack · Access Control",
        summary: "Food ordering platform where what you can see and do depends on your role and your country.",
        highlights: [
            "RBAC across 5 permission levels, plus country-scoped access for managers and members",
            "Code-first GraphQL API in NestJS with JWT guards and role decorators",
            "Role-aware Next.js 14 + Apollo Client frontend",
        ],
        stack: ["NestJS", "GraphQL", "Prisma", "Next.js 14", "Apollo Client", "JWT"],
        github: "https://github.com/priyankakommani/food-ordering-application",
    },
];

const NAV = ["about", "experience", "projects", "contact"] as const;

/** Fades content up the first time it scrolls into view. Shows immediately if the browser can't observe. */
function Reveal({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) {
    const ref = useRef<HTMLDivElement>(null);
    const [shown, setShown] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el || typeof IntersectionObserver === "undefined") {
            setShown(true);
            return;
        }
        const io = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setShown(true);
                    io.disconnect();
                }
            },
            { threshold: 0.12 },
        );
        io.observe(el);
        return () => io.disconnect();
    }, []);

    return (
        <div ref={ref} className={`reveal ${shown ? "is-shown" : ""} ${className}`} style={{ transitionDelay: `${delay}ms` }}>
            {children}
        </div>
    );
}

function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
    return (
        <Reveal>
            <p className="dm-sans text-xs tracking-[0.2em] uppercase gold mb-4">{eyebrow}</p>
            <h2 className="playfair text-3xl md:text-4xl font-semibold mb-12 md:mb-14 leading-tight">{title}</h2>
        </Reveal>
    );
}

export default function Portfolio() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 16);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

    return (
        <div className="min-h-screen bg-[#0f0f0f] text-[#ece8e0] font-sans">
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=DM+Sans:wght@300;400;500&display=swap');
        * { box-sizing: border-box; }
        body { margin: 0; }
        html { scroll-padding-top: 72px; }
        .playfair { font-family: 'Playfair Display', serif; }
        .dm-sans { font-family: 'DM Sans', sans-serif; }
        .gold { color: #d4b57c; }
        .gold-border { border-color: #c9a96e; }
        .gold-bg { background-color: #c9a96e; }
        .divider { height: 1px; background: linear-gradient(to right, transparent, #c9a96e44, transparent); }
        .reveal { opacity: 0; transform: translateY(20px); transition: opacity .7s ease, transform .7s ease; }
        .reveal.is-shown { opacity: 1; transform: none; }
        .card { transition: transform .25s ease, border-color .25s ease, box-shadow .25s ease; }
        .card:hover { transform: translateY(-4px); border-color: #c9a96e55; box-shadow: 0 16px 48px rgba(0,0,0,.45); }
        .chip { transition: background .15s, color .15s, border-color .15s; }
        .chip:hover { background: #c9a96e1f; color: #d4b57c; border-color: #c9a96e44; }
        .btn { transition: opacity .2s, background .2s, transform .2s; }
        .btn:hover { transform: translateY(-1px); }
        .link-u { background: linear-gradient(currentColor, currentColor) 0 100% / 0 1px no-repeat; transition: background-size .25s; }
        .link-u:hover { background-size: 100% 1px; }
        .pulse { box-shadow: 0 0 0 0 rgba(74,222,128,.6); animation: pulse 2s infinite; }
        @keyframes pulse { 70% { box-shadow: 0 0 0 8px rgba(74,222,128,0); } 100% { box-shadow: 0 0 0 0 rgba(74,222,128,0); } }
        .hero-glow { background: radial-gradient(600px circle at 15% 30%, #c9a96e14, transparent 60%); }
        @media (prefers-reduced-motion: reduce) {
          .reveal { opacity: 1; transform: none; transition: none; }
          .card, .btn, .pulse { transition: none; animation: none; }
          html { scroll-behavior: auto; }
        }
      `}</style>

            {/* NAV */}
            <nav className={`fixed top-0 inset-x-0 z-50 transition-colors ${scrolled ? "bg-[#0f0f0fe6] backdrop-blur border-b border-[#ffffff12]" : "bg-transparent"}`}>
                <div className="max-w-6xl mx-auto px-5 md:px-6 py-4 flex justify-between items-center dm-sans">
                    <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="playfair text-lg font-semibold tracking-wide gold" aria-label="Back to top">
                        PK
                    </button>
                    <div className="flex items-center gap-4 md:gap-8 text-xs md:text-sm text-[#b5b0a8]">
                        {NAV.map((s) => (
                            <button key={s} onClick={() => scrollTo(s)} className="capitalize hover:text-[#d4b57c] transition-colors hidden sm:inline">
                                {s}
                            </button>
                        ))}
                        <a href={RESUME_URL} target="_blank" rel="noreferrer" className="btn border gold-border gold px-3 py-1.5 rounded-sm hover:bg-[#c9a96e15]">
                            Resume
                        </a>
                    </div>
                </div>
            </nav>

            {/* HERO */}
            <section className="hero-glow min-h-screen flex flex-col justify-center max-w-6xl mx-auto px-5 md:px-6 pt-28 pb-16 relative">
                <Reveal>
                    <p className="dm-sans inline-flex items-center gap-2 text-xs md:text-sm text-[#cfcac2] border border-[#ffffff14] rounded-full px-3 py-1 mb-6">
                        <span className="pulse inline-block w-2 h-2 rounded-full bg-green-400" />
                        Open to full-time, contract &amp; freelance work
                    </p>
                </Reveal>
                <Reveal delay={80}>
                    <p className="dm-sans text-xs md:text-sm tracking-[0.2em] uppercase gold mb-5">Software Engineer · Full Stack, Backend &amp; AI</p>
                </Reveal>
                <Reveal delay={160}>
                    <h1 className="playfair text-5xl sm:text-6xl md:text-7xl font-bold leading-none mb-6" style={{ letterSpacing: "-0.02em" }}>
                        Priyanka
                        <br />
                        <span style={{ WebkitTextStroke: "1px #c9a96e", color: "transparent" }}>Kommani</span>
                    </h1>
                </Reveal>
                <Reveal delay={240}>
                    <p className="dm-sans text-base md:text-lg text-[#b5b0a8] max-w-xl leading-relaxed mb-10">
                        I build production software end to end: fintech apps with live broker trading and UPI Autopay, real-time voice AI, RAG pipelines and
                        full-stack platforms with Node.js, TypeScript and PostgreSQL.
                    </p>
                </Reveal>
                <Reveal delay={320}>
                    <div className="flex flex-wrap gap-3 md:gap-4 mb-14">
                        <a href={RESUME_URL} target="_blank" rel="noreferrer" className="btn gold-bg text-[#0f0f0f] px-6 py-3 text-sm dm-sans font-medium tracking-wide rounded-sm hover:opacity-90">
                            Download Resume ↓
                        </a>
                        <button onClick={() => scrollTo("projects")} className="btn border gold-border gold px-6 py-3 text-sm dm-sans font-medium tracking-wide rounded-sm hover:bg-[#c9a96e15]">
                            View Projects →
                        </button>
                        <a href={GITHUB} target="_blank" rel="noreferrer" className="btn border border-[#ffffff20] text-[#cfcac2] px-6 py-3 text-sm dm-sans font-medium rounded-sm hover:border-[#c9a96e66]">
                            GitHub
                        </a>
                    </div>
                </Reveal>
                <Reveal delay={400}>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 pt-8 border-t border-[#ffffff12]">
                        {stats.map((s) => (
                            <div key={s.label}>
                                <p className="playfair text-2xl md:text-3xl font-semibold gold mb-1" style={{ fontVariantNumeric: "tabular-nums" }}>
                                    {s.value}
                                </p>
                                <p className="dm-sans text-xs text-[#a19c94] leading-snug">{s.label}</p>
                            </div>
                        ))}
                    </div>
                </Reveal>
            </section>

            <div className="divider mx-6" />

            {/* ABOUT */}
            <section id="about" className="max-w-6xl mx-auto px-5 md:px-6 py-20 md:py-24">
                <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
                    <div>
                        <SectionHeading eyebrow="About" title="Backends that scale. AI that ships." />
                        <Reveal>
                            <p className="dm-sans text-[#b5b0a8] leading-relaxed mb-5">
                                At <span className="text-[#ece8e0]">Growsin</span>, a fintech startup, I build a live investment-research app on Google Play: in-app
                                stock ordering through broker APIs, Zoho Payments with UPI Autopay, and KYC onboarding.
                            </p>
                            <p className="dm-sans text-[#b5b0a8] leading-relaxed mb-5">
                                Before that I was the sole backend owner at <span className="text-[#ece8e0]">Orotron</span>, shipping REST APIs and real-time AI
                                infrastructure (LiveKit, Deepgram, Gemini) used by real users.
                            </p>
                            <p className="dm-sans text-[#b5b0a8] leading-relaxed mb-8">
                                I care about software that keeps working in production: clear business rules, permissions checked on the server, and AI features
                                that are reliable, not demos.
                            </p>
                        </Reveal>
                        <Reveal>
                            <div className="grid grid-cols-3 gap-4 pt-5 border-t border-[#ffffff12]">
                                {[
                                    ["Education", "B.Tech CSE", "IIIT Srikakulam · 9.0"],
                                    ["Experience", "1.5+ years", "Production"],
                                    ["Location", "Visakhapatnam", "Andhra Pradesh, India"],
                                ].map(([title, val, sub]) => (
                                    <div key={title}>
                                        <p className="dm-sans text-[11px] text-[#8f8a82] uppercase tracking-widest mb-1">{title}</p>
                                        <p className="dm-sans text-sm font-medium text-[#ece8e0]">{val}</p>
                                        <p className="dm-sans text-xs text-[#a19c94]">{sub}</p>
                                    </div>
                                ))}
                            </div>
                        </Reveal>
                    </div>

                    <div>
                        <Reveal>
                            <p className="dm-sans text-xs tracking-[0.2em] uppercase gold mb-6 md:mt-2">Tech Stack</p>
                        </Reveal>
                        <div className="space-y-5">
                            {skillGroups.map((g, i) => (
                                <Reveal key={g.title} delay={i * 60}>
                                    <p className="dm-sans text-[11px] uppercase tracking-widest text-[#8f8a82] mb-2">{g.title}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {g.items.map((s) => (
                                            <span key={s} className="chip dm-sans text-xs px-3 py-1.5 rounded-sm border border-[#ffffff14] text-[#cfcac2] bg-[#ffffff06] cursor-default">
                                                {s}
                                            </span>
                                        ))}
                                    </div>
                                </Reveal>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <div className="divider mx-6" />

            {/* EXPERIENCE */}
            <section id="experience" className="max-w-6xl mx-auto px-5 md:px-6 py-20 md:py-24">
                <SectionHeading eyebrow="Experience" title="Where I've worked." />
                <div className="relative pl-6 border-l border-[#ffffff14]">
                    {experience.map((exp) => (
                        <Reveal key={exp.company} className="mb-12 last:mb-0 relative">
                            <div className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full gold-bg border-2 border-[#0f0f0f]" />
                            <div className="flex flex-wrap justify-between items-start gap-2 mb-3">
                                <div>
                                    <h3 className="playfair text-xl font-semibold">{exp.role}</h3>
                                    <p className="dm-sans text-sm gold">{exp.company}</p>
                                </div>
                                <span className="dm-sans text-xs text-[#a19c94] tracking-widest uppercase mt-1">{exp.period}</span>
                            </div>
                            <ul className="space-y-2">
                                {exp.points.map((p) => (
                                    <li key={p} className="dm-sans text-sm text-[#b5b0a8] leading-relaxed flex gap-3">
                                        <span className="gold mt-0.5 shrink-0">—</span>
                                        <span>{p}</span>
                                    </li>
                                ))}
                            </ul>
                        </Reveal>
                    ))}
                </div>
            </section>

            <div className="divider mx-6" />

            {/* PROJECTS */}
            <section id="projects" className="max-w-6xl mx-auto px-5 md:px-6 py-20 md:py-24">
                <SectionHeading eyebrow="Projects" title="Things I've built." />
                <div className="grid md:grid-cols-2 gap-6">
                    {projects.map((p, i) => (
                        <Reveal key={p.title} delay={(i % 2) * 80} className={p.featured ? "md:col-span-2" : ""}>
                            <article
                                className={`card h-full flex flex-col bg-[#161616] border p-6 md:p-7 rounded ${p.featured ? "border-[#c9a96e40]" : "border-[#ffffff10]"}`}>
                                <div className="flex justify-between items-start gap-3 mb-4">
                                    <span className="dm-sans text-[11px] uppercase tracking-widest text-[#a19c94]">{p.tag}</span>
                                    {p.badge && (
                                        <span className="dm-sans text-[10px] uppercase tracking-[0.12em] px-2.5 py-1 border border-[#c9a96e44] gold rounded-sm shrink-0">
                                            {p.badge}
                                        </span>
                                    )}
                                </div>
                                <h3 className="playfair text-xl font-semibold mb-2">{p.title}</h3>
                                <p className="dm-sans text-sm text-[#cfcac2] leading-relaxed mb-4">{p.summary}</p>
                                <ul className={`space-y-1.5 mb-5 ${p.featured ? "md:grid md:grid-cols-3 md:gap-6 md:space-y-0" : ""}`}>
                                    {p.highlights.map((h) => (
                                        <li key={h} className="dm-sans text-[13px] text-[#a19c94] leading-relaxed flex gap-2.5">
                                            <span className="gold shrink-0">›</span>
                                            <span>{h}</span>
                                        </li>
                                    ))}
                                </ul>
                                <div className="mt-auto">
                                    <div className="flex flex-wrap gap-2 pt-4 border-t border-[#ffffff0c]">
                                        {p.stack.map((s) => (
                                            <span key={s} className="dm-sans text-xs text-[#a19c94] bg-[#ffffff06] border border-[#ffffff10] px-2.5 py-1 rounded-sm">
                                                {s}
                                            </span>
                                        ))}
                                    </div>
                                    <div className="flex flex-wrap items-center gap-5 mt-4 dm-sans text-xs">
                                        {p.live && (
                                            <a href={p.live} target="_blank" rel="noreferrer" className="link-u gold">
                                                Live Demo →
                                            </a>
                                        )}
                                        {p.github && (
                                            <a href={p.github} target="_blank" rel="noreferrer" className="link-u gold">
                                                View Code →
                                            </a>
                                        )}
                                        {p.privateNote && <span className="text-[#8f8a82] italic">{p.privateNote}</span>}
                                    </div>
                                </div>
                            </article>
                        </Reveal>
                    ))}
                </div>
                <Reveal>
                    <p className="dm-sans text-sm text-[#a19c94] mt-10 text-center">
                        More on{" "}
                        <a href={GITHUB} target="_blank" rel="noreferrer" className="link-u gold">
                            GitHub →
                        </a>
                    </p>
                </Reveal>
            </section>

            <div className="divider mx-6" />

            {/* CONTACT */}
            <section id="contact" className="max-w-6xl mx-auto px-5 md:px-6 py-20 md:py-24 text-center">
                <Reveal>
                    <p className="dm-sans text-xs tracking-[0.2em] uppercase gold mb-4">Contact</p>
                    <h2 className="playfair text-4xl md:text-5xl font-semibold mb-6">Let's build something.</h2>
                    <p className="dm-sans text-[#b5b0a8] mb-10 max-w-md mx-auto leading-relaxed">
                        Open to backend, full-stack and AI engineering roles: full-time, contract or freelance.
                    </p>
                </Reveal>
                <Reveal delay={100}>
                    <div className="flex flex-col sm:flex-row flex-wrap gap-3 md:gap-4 justify-center mb-14">
                        <a href={`mailto:${EMAIL}`} className="btn gold-bg text-[#0f0f0f] px-7 py-3.5 text-sm dm-sans font-medium tracking-wide rounded-sm hover:opacity-90">
                            {EMAIL}
                        </a>
                        <a href={LINKEDIN} target="_blank" rel="noreferrer" className="btn border gold-border gold px-7 py-3.5 text-sm dm-sans font-medium rounded-sm hover:bg-[#c9a96e10]">
                            LinkedIn
                        </a>
                        <a href={GITHUB} target="_blank" rel="noreferrer" className="btn border border-[#ffffff20] text-[#cfcac2] px-7 py-3.5 text-sm dm-sans font-medium rounded-sm hover:border-[#c9a96e66]">
                            GitHub
                        </a>
                        <a href={RESUME_URL} target="_blank" rel="noreferrer" className="btn border border-[#ffffff20] text-[#cfcac2] px-7 py-3.5 text-sm dm-sans font-medium rounded-sm hover:border-[#c9a96e66]">
                            Resume ↓
                        </a>
                    </div>
                </Reveal>
                <p className="dm-sans text-xs text-[#8f8a82] tracking-widest uppercase">Priyanka Kommani · Visakhapatnam, India · © {new Date().getFullYear()}</p>
            </section>
        </div>
    );
}
