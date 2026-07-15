// import { useEffect, useState } from "react";

// const skills = [
//     { name: "Node.js", category: "Backend" },
//     { name: "Hono.js", category: "Backend" },
//     { name: "Express", category: "Backend" },
//     { name: "REST APIs", category: "Backend" },
//     { name: "Django", category: "Backend" },
//     { name: "PostgreSQL", category: "Database" },
//     { name: "Drizzle ORM", category: "Database" },
//     { name: "React.js", category: "Frontend" },
//     { name: "Tailwind CSS", category: "Frontend" },
//     { name: "WebRTC", category: "Integrations" },
//     { name: "LiveKit", category: "Integrations" },
//     { name: "AWS S3", category: "Integrations" },
//     { name: "VideoSDK", category: "Integrations" },
//     { name: "QStash", category: "Integrations" },
//     { name: "Deepgram", category: "Integrations" },
//     { name: "Gemini AI", category: "Integrations" },
//     { name: "Python", category: "Languages" },
//     { name: "JavaScript", category: "Languages" },
//     { name: "Git", category: "Tools" },
//     { name: "NestJS", category: "Backend" },
//     { name: "GraphQL", category: "Backend" },
//     { name: "Prisma", category: "Database" },
//     { name: "Next.js", category: "Frontend" },
//     { name: "Zod", category: "Tools" },
//     { name: "JWT", category: "Tools" },
// ];

// const projects = [
//     {
//         title: "Real-Time AI Interview Platform",
//         desc: "Full-stack AI-powered interview platform enabling real-time, bidirectional voice interviews via WebRTC and Google Gemini 2.5 Flash Native Audio API. Integrated LiveKit Agents SDK for low-latency (<500ms) AI voice orchestration, built an in-memory transcription pipeline publishing structured JSON to AWS S3, and configured LiveKit Egress for cloud MP4 recording. Features a responsive React + Tailwind frontend with live agent state feedback (listening, speaking, processing).",
//         stack: ["Node.js", "Express", "React.js", "WebRTC", "LiveKit", "Gemini AI", "AWS S3", "Tailwind CSS"],
//         tag: "AI · WebRTC · Full Stack",
//     },
//     {
//         title: "Interview Management & Proctoring Platform",
//         desc: "End-to-end interview scheduling system with VideoSDK-based live proctoring, Deepgram speech-to-text transcription, Gemini AI candidate scoring, and QStash-managed async job queues.",
//         stack: ["Node.js", "Hono.js", "PostgreSQL", "VideoSDK", "Deepgram", "Gemini AI", "QStash"],
//         tag: "AI · Backend",
//     },
//     {
//         title: "PlateSync - Food Ordering Application",
//         desc: "Full-stack food ordering monorepo with complete Role-Based Access Control (RBAC) across all 5 core functions — view restaurants, create orders, checkout, cancel orders, and manage payment methods. Implemented bonus Re-BAC with country-scoped access restricting Managers and Members to their region while Admin retains global visibility. Features a GraphQL API built with NestJS code-first schema generation, and a responsive Next.js 14 frontend with role-aware UI.",
//         stack: ["NestJS", "GraphQL", "Prisma", "Next.js", "Apollo Client", "Tailwind CSS", "JWT"],
//         tag: "Full Stack · RBAC",
//     },
//     {
//         title: "SessionSync - Mentorship Platform",
//         desc: "Full-stack mentorship platform with a Node.js/Express REST API and React + Vite frontend. Features JWT-based authentication, role-based access control for PARENT and MENTOR roles, lesson and session management, booking system, and Google Gemini AI-powered LLM text summarization. Includes Zod validation, in-memory rate limiting on the LLM endpoint (10 req/min), and a fully relational PostgreSQL schema via Drizzle ORM.",
//         stack: ["Node.js", "Express", "PostgreSQL", "Drizzle ORM", "Gemini AI", "React.js", "Zod", "JWT"],
//         tag: "Full Stack · AI",
//     },
//     {
//         title: "IoT Motor Monitoring & Control System",
//         desc: "Real-time backend platform to remotely monitor and control industrial motors via mobile apps using gateway-based communication with reliable state management.",
//         stack: ["Node.js", "PostgreSQL", "REST APIs", "IoT"],
//         tag: "IoT · Backend",
//     },
//     {
//         title: "Automated Paper Evaluation",
//         desc: "NLP-based answer grading system using NLTK and SpaCy to automatically evaluate written responses with consistent, unbiased scoring — reducing manual evaluation effort.",
//         stack: ["Python", "NLTK", "SpaCy", "NLP"],
//         tag: "NLP · Major Project",
//     },
//     {
//         title: "Restaurant Review Prediction",
//         desc: "Sentiment classification model using Python, Scikit-learn, and TensorFlow to predict positive/negative reviews and surface actionable business insights.",
//         stack: ["Python", "TensorFlow", "Scikit-learn"],
//         tag: "ML · NLP",
//     },
//     {
//         title: "Multimedia Data Compression using CNN",
//         desc: "CNN-based image compression model to optimize storage and transmission of multimedia data across social media platforms.",
//         stack: ["Python", "TensorFlow", "Deep Learning"],
//         tag: "Deep Learning · Minor Project",
//     },
// ];

// export default function Portfolio() {
//     const [visible, setVisible] = useState(false);

//     useEffect(() => {
//         setTimeout(() => setVisible(true), 100);
//     }, []);

//     const scrollTo = (id: string) => {
//         document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
//     };

//     return (
//         <div className="min-h-screen bg-[#0f0f0f] text-[#e8e4dc] font-sans">
//             <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=DM+Sans:wght@300;400;500&display=swap');
//         * { box-sizing: border-box; }
//         body { margin: 0; }
//         .playfair { font-family: 'Playfair Display', serif; }
//         .dm-sans { font-family: 'DM Sans', sans-serif; }
//         .fade-in { opacity: 0; transform: translateY(24px); animation: fadeUp 0.7s forwards; }
//         @keyframes fadeUp { to { opacity: 1; transform: translateY(0); } }
//         .delay-1 { animation-delay: 0.1s; }
//         .delay-2 { animation-delay: 0.2s; }
//         .delay-3 { animation-delay: 0.3s; }
//         .delay-4 { animation-delay: 0.4s; }
//         .card-hover { transition: transform 0.2s ease, box-shadow 0.2s ease; }
//         .card-hover:hover { transform: translateY(-3px); box-shadow: 0 12px 40px rgba(0,0,0,0.4); }
//         .nav-link { transition: color 0.2s; cursor: pointer; }
//         .nav-link:hover { color: #c9a96e; }
//         .gold { color: #c9a96e; }
//         .gold-border { border-color: #c9a96e; }
//         .gold-bg { background-color: #c9a96e; }
//         .divider { height: 1px; background: linear-gradient(to right, transparent, #c9a96e44, transparent); }
//         .tag-pill { font-size: 11px; letter-spacing: 0.08em; text-transform: uppercase; }
//         .skill-chip { transition: background 0.15s, color 0.15s; }
//         .skill-chip:hover { background: #c9a96e22 !important; color: #c9a96e !important; }
//         .featured-badge { font-size: 10px; letter-spacing: 0.12em; text-transform: uppercase; }
//       `}</style>

//             {/* NAV */}
//             <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0f0f0f] border-b border-[#ffffff0f]">
//                 <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center dm-sans">
//                     <span className="playfair text-lg font-semibold tracking-wide gold">PK</span>
//                     <div className="flex gap-8 text-sm text-[#aaa]">
//                         {["about", "experience", "projects", "contact"].map((s) => (
//                             <span key={s} className="nav-link capitalize" onClick={() => scrollTo(s)}>{s}</span>
//                         ))}
//                     </div>
//                 </div>
//             </nav>

//             {/* HERO */}
//             <section className="min-h-screen flex flex-col justify-center max-w-6xl mx-auto px-6 pt-24">
//                 <div className={`${visible ? "fade-in" : "opacity-0"}`}>
//                     <p className="dm-sans text-sm tracking-[0.2em] uppercase gold mb-6 delay-1 fade-in">Backend Developer</p>
//                     <h1 className="playfair text-7xl font-bold leading-none mb-6 delay-2 fade-in" style={{ letterSpacing: '-0.02em' }}>
//                         Priyanka<br />
//                         <span style={{ WebkitTextStroke: '1px #c9a96e', color: 'transparent' }}>Kommani</span>
//                     </h1>
//                     <p className="dm-sans text-lg text-[#888] max-w-xl leading-relaxed mb-10 delay-3 fade-in">
//                         Building scalable APIs, real-time systems, and AI-powered backends.<br />
//                         1+ year of production experience · Node.js · PostgreSQL · AI Integrations
//                     </p>
//                     <div className="flex gap-4 delay-4 fade-in">
//                         <span
//                             onClick={() => scrollTo("contact")}
//                             className="gold-bg text-[#0f0f0f] px-6 py-3 text-sm dm-sans font-medium tracking-wide hover:opacity-90 transition"
//                             style={{ borderRadius: '2px', cursor: 'pointer' }}>
//                             Get In Touch
//                         </span>
//                         <a href="https://github.com/priyankakommani" target="_blank" rel="noreferrer"
//                             className="border gold-border gold px-6 py-3 text-sm dm-sans font-medium tracking-wide hover:bg-[#c9a96e15] transition"
//                             style={{ borderRadius: '2px' }}>
//                             GitHub →
//                         </a>
//                     </div>
//                 </div>

//                 <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
//                     <span className="dm-sans text-xs tracking-widest uppercase text-[#888]">scroll</span>
//                     <div className="w-px h-10 bg-[#c9a96e]"></div>
//                 </div>
//             </section>

//             <div className="divider mx-6"></div>

//             {/* ABOUT */}
//             <section id="about" className="max-w-6xl mx-auto px-6 py-24">
//                 <div className="grid md:grid-cols-2 gap-16 items-start">
//                     <div>
//                         <p className="dm-sans text-xs tracking-[0.2em] uppercase gold mb-4">About</p>
//                         <h2 className="playfair text-4xl font-semibold mb-8 leading-tight">Crafting backends<br />that scale.</h2>
//                         <p className="dm-sans text-[#aaa] leading-relaxed mb-6">
//                             Backend Developer with 1.5 years of professional experience
//                             at Orotron, designing APIs, architecting databases, and integrating complex third-party
//                             services into production systems.
//                         </p>
//                         <p className="dm-sans text-[#aaa] leading-relaxed mb-8">
//                             I specialize in building reliable, high-performance server-side applications and have
//                             hands-on experience with AI-powered platforms, real-time WebRTC systems, and IoT backends.
//                             I also have frontend exposure with React.js and Tailwind CSS.
//                         </p>
//                         <div className="grid grid-cols-3 gap-4 pt-4 border-t border-[#ffffff0f]">
//                             {[["B.Tech CSE", "IIIT Srikakulam", "CGPA 9.0"], ["Experience", "1+ Years", "Production"], ["Location", "Eluru, AP", "India"]].map(([title, val, sub]) => (
//                                 <div key={title}>
//                                     <p className="dm-sans text-xs text-[#555] uppercase tracking-widest mb-1">{title}</p>
//                                     <p className="dm-sans text-sm font-medium text-[#e8e4dc]">{val}</p>
//                                     <p className="dm-sans text-xs text-[#666]">{sub}</p>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>

//                     <div>
//                         <p className="dm-sans text-xs tracking-[0.2em] uppercase gold mb-6">Tech Stack</p>
//                         <div className="flex flex-wrap gap-2">
//                             {skills.map((skill) => (
//                                 <span key={skill.name}
//                                     className="skill-chip dm-sans text-xs px-3 py-1.5 rounded-sm border border-[#ffffff0f] text-[#aaa] bg-[#ffffff05] cursor-default">
//                                     {skill.name}
//                                 </span>
//                             ))}
//                         </div>
//                     </div>
//                 </div>
//             </section>

//             <div className="divider mx-6"></div>

//             {/* EXPERIENCE */}
//             <section id="experience" className="max-w-6xl mx-auto px-6 py-24">
//                 <p className="dm-sans text-xs tracking-[0.2em] uppercase gold mb-4">Experience</p>
//                 <h2 className="playfair text-4xl font-semibold mb-14">Where I've worked.</h2>

//                 <div className="relative pl-6 border-l border-[#ffffff0f]">
//                     {[
//                         {
//                             role: "Backend Developer ",
//                             company: "Orotron",
//                             period: "2024 – Present",
//                             points: [
//                                 "Designed and maintained scalable backend systems using Node.js and Hono.js for core product features.",
//                                 "Architected PostgreSQL schemas and wrote optimized queries using Drizzle ORM for business-critical operations.",
//                                 "Delivered reliable REST APIs in collaboration with frontend and product teams, contributing to faster feature releases.",
//                             ]
//                         },
//                     ].map((exp, i) => (
//                         <div key={i} className="mb-12 relative">
//                             <div className="absolute -left-[29px] top-1.5 w-3 h-3 rounded-full gold-bg border-2 border-[#0f0f0f]"></div>
//                             <div className="flex flex-wrap justify-between items-start mb-3">
//                                 <div>
//                                     <h3 className="playfair text-xl font-semibold">{exp.role}</h3>
//                                     <p className="dm-sans text-sm gold">{exp.company}</p>
//                                 </div>
//                                 <span className="dm-sans text-xs text-[#555] tracking-widest uppercase mt-1">{exp.period}</span>
//                             </div>
//                             <ul className="space-y-2">
//                                 {exp.points.map((p, j) => (
//                                     <li key={j} className="dm-sans text-sm text-[#888] flex gap-3">
//                                         <span className="gold mt-1 shrink-0">—</span>
//                                         <span>{p}</span>
//                                     </li>
//                                 ))}
//                             </ul>
//                         </div>
//                     ))}
//                 </div>
//             </section>

//             <div className="divider mx-6"></div>

//             {/* PROJECTS */}
//             <section id="projects" className="max-w-6xl mx-auto px-6 py-24">
//                 <p className="dm-sans text-xs tracking-[0.2em] uppercase gold mb-4">Projects</p>
//                 <h2 className="playfair text-4xl font-semibold mb-14">Things I've built.</h2>

//                 <div className="grid md:grid-cols-2 gap-6">
//                     {projects.map((project, i) => (
//                         <div key={i}
//                             className={`card-hover bg-[#161616] border p-7 ${i === 0 ? "md:col-span-2 border-[#c9a96e22]" : "border-[#ffffff08]"}`}
//                             style={{ borderRadius: '4px' }}>
//                             <div className="flex justify-between items-start mb-4">
//                                 <span className="tag-pill dm-sans text-[#555] tracking-widest">{project.tag}</span>
//                                 {i === 0 && (
//                                     <span className="featured-badge dm-sans px-2.5 py-1 border border-[#c9a96e33] gold" style={{ borderRadius: '2px' }}>
//                                         Featured
//                                     </span>
//                                 )}
//                             </div>
//                             <h3 className="playfair text-xl font-semibold mb-3">{project.title}</h3>
//                             <p className="dm-sans text-sm text-[#777] leading-relaxed mb-5">{project.desc}</p>
//                             <div className="flex flex-wrap gap-2 pt-4 border-t border-[#ffffff06]">
//                                 {project.stack.map((s) => (
//                                     <span key={s} className="dm-sans text-xs text-[#555] bg-[#ffffff04] border border-[#ffffff08] px-2.5 py-1" style={{ borderRadius: '2px' }}>
//                                         {s}
//                                     </span>
//                                 ))}
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </section>

//             <div className="divider mx-6"></div>

//             {/* CONTACT */}
//             <section id="contact" className="max-w-6xl mx-auto px-6 py-24 text-center">
//                 <p className="dm-sans text-xs tracking-[0.2em] uppercase gold mb-4">Contact</p>
//                 <h2 className="playfair text-5xl font-semibold mb-6">Let's connect.</h2>
//                 <p className="dm-sans text-[#666] mb-12 max-w-md mx-auto">
//                     Open to backend, full-stack, and software engineering roles. Feel free to reach out.
//                 </p>
//                 <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
//                     <a href="mailto:priyankakommani@gmail.com"
//                         className="gold-bg text-[#0f0f0f] px-8 py-3.5 text-sm dm-sans font-medium tracking-wide hover:opacity-90 transition"
//                         style={{ borderRadius: '2px' }}>
//                         priyankakommani@gmail.com
//                     </a>
//                     <a href="https://github.com/priyankakommani" target="_blank" rel="noreferrer"
//                         className="border gold-border gold px-8 py-3.5 text-sm dm-sans font-medium hover:bg-[#c9a96e10] transition"
//                         style={{ borderRadius: '2px' }}>
//                         GitHub
//                     </a>
//                     <a href="https://www.linkedin.com/in/priyanka-kommani-668315244" target="_blank" rel="noreferrer"
//                         className="border border-[#ffffff15] text-[#888] px-8 py-3.5 text-sm dm-sans font-medium hover:border-[#c9a96e44] hover:text-[#c9a96e] transition"
//                         style={{ borderRadius: '2px' }}>
//                         LinkedIn
//                     </a>
//                 </div>
//                 <p className="dm-sans text-xs text-[#333] tracking-widest uppercase">
//                     Priyanka Kommani · Eluru, AP · 8374412944
//                 </p>
//             </section>
//         </div>
//     );
// }

import { useEffect, useState } from "react";

const skills = [
    { name: "Node.js", category: "Backend" },
    { name: "Hono.js", category: "Backend" },
    { name: "NestJS", category: "Backend" },
    { name: "Express", category: "Backend" },
    { name: "REST APIs", category: "Backend" },
    { name: "GraphQL", category: "Backend" },
    { name: "WebSockets", category: "Backend" },
    { name: "Gemini", category: "AI / LLM" },
    { name: "Anthropic", category: "AI / LLM" },
    { name: "OpenAI-compatible", category: "AI / LLM" },
    { name: "RAG", category: "AI / LLM" },
    { name: "pgvector", category: "AI / LLM" },
    { name: "Prompt Engineering", category: "AI / LLM" },
    { name: "PostgreSQL", category: "Database" },
    { name: "Drizzle ORM", category: "Database" },
    { name: "Prisma", category: "Database" },
    { name: "Redis", category: "Database" },
    { name: "MongoDB", category: "Database" },
    { name: "Next.js 14", category: "Frontend" },
    { name: "React.js", category: "Frontend" },
    { name: "Tailwind CSS", category: "Frontend" },
    { name: "WebRTC", category: "Integrations" },
    { name: "LiveKit", category: "Integrations" },
    { name: "AWS S3", category: "Integrations" },
    { name: "VideoSDK", category: "Integrations" },
    { name: "QStash", category: "Integrations" },
    { name: "BullMQ", category: "Integrations" },
    { name: "Deepgram", category: "Integrations" },
    { name: "Stripe", category: "Integrations" },
    { name: "Razorpay", category: "Integrations" },
    { name: "Python", category: "Languages" },
    { name: "TypeScript", category: "Languages" },
    { name: "JavaScript", category: "Languages" },
    { name: "SQL", category: "Languages" },
    { name: "Git", category: "Tools" },
    { name: "Docker", category: "Tools" },
    { name: "JWT", category: "Tools" },
    { name: "Zod", category: "Tools" },
];

const stats = [
    { value: "1.5 yrs", label: "Sole backend ownership" },
    { value: "55+", label: "Routes shipped on Aigrad" },
    { value: "<500ms", label: "Real-time AI response latency" },
    { value: "37k", label: "Lines of production code (Aigrad)" },
];

const projects = [
    {
        title: "Aigrad — AI-Powered Learning Platform",
        desc: "RAG-powered learning platform built solo, end to end: a 55-route Next.js 14 frontend (App Router, TanStack Query, dark mode) and a NestJS backend (40+ controllers, ~37k LOC) on PostgreSQL/Drizzle. Engineered a RAG pipeline over pgvector and Gemini for grounded AI tutor answers with video-timestamp citations, a real-time agentic coding lab over Socket.IO, async embedding jobs via Redis/BullMQ, and Stripe + Razorpay payments with webhook-driven fulfillment.",
        stack: ["Next.js 14", "NestJS", "PostgreSQL", "pgvector", "Gemini", "Redis", "BullMQ", "Stripe"],
        tag: "AI · RAG · Full Stack",
        badge: "Flagship Build",
        note: "Full-stack AI engineering engagement",
    },
    {
        title: "AI Full-Stack App Generator",
        desc: "A multi-stage LLM pipeline that turns a natural-language prompt into a complete, working Next.js 14 + TypeScript + Tailwind application: intent classification → decomposition → data-model extraction → streamed codegen. Provider-agnostic model routing across Anthropic, Gemini, and OpenAI-compatible APIs, with JSON-schema-validated output guardrails, a validate-and-repair loop (tsc/eslint), and per-plan token budgeting to bound edits and cost.",
        stack: ["TypeScript", "Next.js 14", "Anthropic", "Gemini", "Drizzle ORM"],
        tag: "AI · LLM Pipelines",
        badge: "Flagship Build",
        note: "Full-stack AI engineering engagement",
    },
    {
        title: "Real-Time AI Interview Platform",
        desc: "Full-stack AI interview platform enabling real-time, bidirectional voice interviews via WebRTC and Gemini 2.5 Flash Native Audio. Integrated LiveKit Agents SDK for sub-500ms AI voice orchestration, built an in-memory transcription pipeline publishing structured JSON to AWS S3, and configured LiveKit Egress for cloud MP4 recording. Responsive React + Tailwind frontend with live agent-state feedback.",
        stack: ["Node.js", "Express", "React.js", "WebRTC", "LiveKit", "Gemini", "AWS S3"],
        tag: "AI · WebRTC · Full Stack",
        github: "https://github.com/priyankakommani/livekit-live-api",
    },
    {
        title: "Interview Management & Proctoring Platform",
        desc: "End-to-end interview scheduling system with VideoSDK-based live proctoring, Deepgram speech-to-text transcription, Gemini AI candidate scoring, and QStash-managed async job queues over a multi-table PostgreSQL schema.",
        stack: ["Node.js", "Hono.js", "PostgreSQL", "VideoSDK", "Deepgram", "Gemini"],
        tag: "AI · Backend",
    },
    {
        title: "PlateSync — Food Ordering with RBAC",
        desc: "Full-stack food ordering platform with RBAC across 5 permission levels, plus country-scoped Re-BAC restricting Managers and Members to their region while Admin retains global visibility. Code-first GraphQL API in NestJS with JWT guards and role decorators, and a role-aware Next.js 14 + Apollo Client frontend.",
        stack: ["NestJS", "GraphQL", "Prisma", "Next.js 14", "Apollo Client", "JWT"],
        tag: "Full Stack · RBAC",
        github: "https://github.com/priyankakommani/food-ordering-application",
    },
    {
        title: "SessionSync — Mentorship Platform",
        desc: "Dual-role (PARENT / MENTOR) platform with Gemini AI session summarization, in-memory rate limiting (10 req/min per IP) on the LLM endpoint, strict Zod validation, and a relational PostgreSQL schema via Drizzle ORM.",
        stack: ["Node.js", "Express", "PostgreSQL", "Drizzle ORM", "Gemini", "React.js"],
        tag: "Full Stack · AI",
        github: "https://github.com/priyankakommani/Mentora-Paltform",
    },
    {
        title: "Automated Paper Evaluation",
        desc: "NLP-based answer grading system using NLTK and SpaCy to automatically evaluate written responses with consistent, unbiased scoring — final-year major project.",
        stack: ["Python", "NLTK", "SpaCy", "NLP"],
        tag: "NLP · Major Project",
    },
    {
        title: "Restaurant Review Prediction",
        desc: "Sentiment classification model using Python, Scikit-learn, and TensorFlow to predict positive/negative reviews and surface actionable business insights.",
        stack: ["Python", "TensorFlow", "Scikit-learn"],
        tag: "ML · NLP",
    },
];

export default function Portfolio() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        setTimeout(() => setVisible(true), 100);
    }, []);

    const scrollTo = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <div className="min-h-screen bg-[#0f0f0f] text-[#e8e4dc] font-sans">
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=DM+Sans:wght@300;400;500&display=swap');
        * { box-sizing: border-box; }
        body { margin: 0; }
        .playfair { font-family: 'Playfair Display', serif; }
        .dm-sans { font-family: 'DM Sans', sans-serif; }
        .fade-in { opacity: 0; transform: translateY(24px); animation: fadeUp 0.7s forwards; }
        @keyframes fadeUp { to { opacity: 1; transform: translateY(0); } }
        .delay-1 { animation-delay: 0.1s; }
        .delay-2 { animation-delay: 0.2s; }
        .delay-3 { animation-delay: 0.3s; }
        .delay-4 { animation-delay: 0.4s; }
        .delay-5 { animation-delay: 0.5s; }
        .card-hover { transition: transform 0.2s ease, box-shadow 0.2s ease; }
        .card-hover:hover { transform: translateY(-3px); box-shadow: 0 12px 40px rgba(0,0,0,0.4); }
        .nav-link { transition: color 0.2s; cursor: pointer; }
        .nav-link:hover { color: #c9a96e; }
        .gold { color: #c9a96e; }
        .gold-border { border-color: #c9a96e; }
        .gold-bg { background-color: #c9a96e; }
        .divider { height: 1px; background: linear-gradient(to right, transparent, #c9a96e44, transparent); }
        .tag-pill { font-size: 11px; letter-spacing: 0.08em; text-transform: uppercase; }
        .skill-chip { transition: background 0.15s, color 0.15s; }
        .skill-chip:hover { background: #c9a96e22 !important; color: #c9a96e !important; }
        .featured-badge { font-size: 10px; letter-spacing: 0.12em; text-transform: uppercase; }
        .stat-num { font-variant-numeric: tabular-nums; }
      `}</style>

            {/* NAV */}
            <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0f0f0f] border-b border-[#ffffff0f]">
                <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center dm-sans">
                    <span className="playfair text-lg font-semibold tracking-wide gold">PK</span>
                    <div className="flex gap-8 text-sm text-[#aaa]">
                        {["about", "experience", "projects", "contact"].map((s) => (
                            <span key={s} className="nav-link capitalize" onClick={() => scrollTo(s)}>{s}</span>
                        ))}
                    </div>
                </div>
            </nav>

            {/* HERO */}
            <section className="min-h-screen flex flex-col justify-center max-w-6xl mx-auto px-6 pt-24 relative">
                <div className={`${visible ? "fade-in" : "opacity-0"}`}>
                    <p className="dm-sans text-sm tracking-[0.2em] uppercase gold mb-6 delay-1 fade-in">
                        Software Engineer · Backend &amp; AI Systems
                    </p>
                    <h1 className="playfair text-7xl font-bold leading-none mb-6 delay-2 fade-in" style={{ letterSpacing: '-0.02em' }}>
                        Priyanka<br />
                        <span style={{ WebkitTextStroke: '1px #c9a96e', color: 'transparent' }}>Kommani</span>
                    </h1>
                    <p className="dm-sans text-lg text-[#888] max-w-xl leading-relaxed mb-10 delay-3 fade-in">
                        I build production backends, and the AI systems layered on top of them —
                        RAG pipelines, real-time voice AI, and full-stack platforms, shipped solo, end to end.<br />
                        1.5 years · Node.js · PostgreSQL · LLM Integrations
                    </p>
                    <div className="flex gap-4 mb-16 delay-4 fade-in">
                        <span
                            onClick={() => scrollTo("contact")}
                            className="gold-bg text-[#0f0f0f] px-6 py-3 text-sm dm-sans font-medium tracking-wide hover:opacity-90 transition"
                            style={{ borderRadius: '2px', cursor: 'pointer' }}>
                            Get In Touch
                        </span>
                        <a href="https://github.com/priyankakommani" target="_blank" rel="noreferrer"
                            className="border gold-border gold px-6 py-3 text-sm dm-sans font-medium tracking-wide hover:bg-[#c9a96e15] transition"
                            style={{ borderRadius: '2px' }}>
                            GitHub →
                        </a>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-[#ffffff0f] delay-5 fade-in">
                        {stats.map((s) => (
                            <div key={s.label}>
                                <p className="playfair stat-num text-3xl font-semibold gold mb-1">{s.value}</p>
                                <p className="dm-sans text-xs text-[#777] leading-snug">{s.label}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
                    <span className="dm-sans text-xs tracking-widest uppercase text-[#888]">scroll</span>
                    <div className="w-px h-10 bg-[#c9a96e]"></div>
                </div>
            </section>

            <div className="divider mx-6"></div>

            {/* ABOUT */}
            <section id="about" className="max-w-6xl mx-auto px-6 py-24">
                <div className="grid md:grid-cols-2 gap-16 items-start">
                    <div>
                        <p className="dm-sans text-xs tracking-[0.2em] uppercase gold mb-4">About</p>
                        <h2 className="playfair text-4xl font-semibold mb-8 leading-tight">Backends that scale.<br />AI that ships.</h2>
                        <p className="dm-sans text-[#aaa] leading-relaxed mb-6">
                            Software Engineer with 1.5 years as the sole backend owner at an early-stage startup —
                            designing PostgreSQL schemas, shipping production REST APIs in Node.js and Hono.js, and
                            integrating real-time AI infrastructure (LiveKit, Deepgram, Gemini) into live systems used
                            by real users.
                        </p>
                        <p className="dm-sans text-[#aaa] leading-relaxed mb-8">
                            Alongside that, I've taken on full-stack AI engineering work end to end: a RAG-powered
                            learning platform with 55 routes and a 40+ controller backend built solo, and an LLM
                            pipeline that generates complete full-stack applications from a single prompt. I care
                            about AI features that ship as reliable, deployed products — not demos.
                        </p>
                        <div className="grid grid-cols-3 gap-4 pt-4 border-t border-[#ffffff0f]">
                            {[["B.Tech CSE", "IIIT Srikakulam", "CGPA 9.0"], ["Experience", "1.5 Years", "Production"], ["Location", "Eluru, AP", "India"]].map(([title, val, sub]) => (
                                <div key={title}>
                                    <p className="dm-sans text-xs text-[#555] uppercase tracking-widest mb-1">{title}</p>
                                    <p className="dm-sans text-sm font-medium text-[#e8e4dc]">{val}</p>
                                    <p className="dm-sans text-xs text-[#666]">{sub}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div>
                        <p className="dm-sans text-xs tracking-[0.2em] uppercase gold mb-6">Tech Stack</p>
                        <div className="flex flex-wrap gap-2">
                            {skills.map((skill) => (
                                <span key={skill.name}
                                    className="skill-chip dm-sans text-xs px-3 py-1.5 rounded-sm border border-[#ffffff0f] text-[#aaa] bg-[#ffffff05] cursor-default">
                                    {skill.name}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <div className="divider mx-6"></div>

            {/* EXPERIENCE */}
            <section id="experience" className="max-w-6xl mx-auto px-6 py-24">
                <p className="dm-sans text-xs tracking-[0.2em] uppercase gold mb-4">Experience</p>
                <h2 className="playfair text-4xl font-semibold mb-14">Where I've worked.</h2>

                <div className="relative pl-6 border-l border-[#ffffff0f]">
                    {[
                        {
                            role: "Software Engineer",
                            company: "Orotron",
                            period: "Nov 2024 – Mar 2026",
                            points: [
                                "Sole backend owner; designed and shipped production REST APIs (Node.js, Hono.js) powering all core product features.",
                                "Modelled multi-table PostgreSQL schemas with Drizzle ORM and optimised critical queries on business-critical flows.",
                                "Built end-to-end integrations with AWS S3, LiveKit, VideoSDK, and Deepgram, supporting concurrent live AI sessions.",
                                "Owned backend delivery from schema design to production deployment on tight startup timelines, coordinating directly with frontend and product to ship releases.",
                            ]
                        },
                    ].map((exp, i) => (
                        <div key={i} className="mb-12 relative">
                            <div className="absolute -left-[29px] top-1.5 w-3 h-3 rounded-full gold-bg border-2 border-[#0f0f0f]"></div>
                            <div className="flex flex-wrap justify-between items-start mb-3">
                                <div>
                                    <h3 className="playfair text-xl font-semibold">{exp.role}</h3>
                                    <p className="dm-sans text-sm gold">{exp.company}</p>
                                </div>
                                <span className="dm-sans text-xs text-[#555] tracking-widest uppercase mt-1">{exp.period}</span>
                            </div>
                            <ul className="space-y-2">
                                {exp.points.map((p, j) => (
                                    <li key={j} className="dm-sans text-sm text-[#888] flex gap-3">
                                        <span className="gold mt-1 shrink-0">—</span>
                                        <span>{p}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </section>

            <div className="divider mx-6"></div>

            {/* PROJECTS */}
            <section id="projects" className="max-w-6xl mx-auto px-6 py-24">
                <p className="dm-sans text-xs tracking-[0.2em] uppercase gold mb-4">Projects</p>
                <h2 className="playfair text-4xl font-semibold mb-14">Things I've built.</h2>

                <div className="grid md:grid-cols-2 gap-6">
                    {projects.map((project, i) => (
                        <div key={i}
                            className={`card-hover bg-[#161616] border p-7 ${i === 0 ? "md:col-span-2 border-[#c9a96e33]" : "border-[#ffffff08]"}`}
                            style={{ borderRadius: '4px' }}>
                            <div className="flex justify-between items-start mb-4">
                                <span className="tag-pill dm-sans text-[#555] tracking-widest">{project.tag}</span>
                                {project.badge && (
                                    <span className="featured-badge dm-sans px-2.5 py-1 border border-[#c9a96e33] gold" style={{ borderRadius: '2px' }}>
                                        {project.badge}
                                    </span>
                                )}
                            </div>
                            <h3 className="playfair text-xl font-semibold mb-1">{project.title}</h3>
                            {project.note && (
                                <p className="dm-sans text-xs text-[#666] italic mb-3">{project.note}</p>
                            )}
                            <p className="dm-sans text-sm text-[#777] leading-relaxed mb-5">{project.desc}</p>
                            <div className="flex flex-wrap gap-2 pt-4 border-t border-[#ffffff06]">
                                {project.stack.map((s) => (
                                    <span key={s} className="dm-sans text-xs text-[#555] bg-[#ffffff04] border border-[#ffffff08] px-2.5 py-1" style={{ borderRadius: '2px' }}>
                                        {s}
                                    </span>
                                ))}
                            </div>
                            {project.github && (
                                <a href={project.github} target="_blank" rel="noreferrer"
                                    className="dm-sans text-xs gold inline-block mt-4 hover:opacity-80 transition">
                                    View on GitHub →
                                </a>
                            )}
                        </div>
                    ))}
                </div>
            </section>

            <div className="divider mx-6"></div>

            {/* CONTACT */}
            <section id="contact" className="max-w-6xl mx-auto px-6 py-24 text-center">
                <p className="dm-sans text-xs tracking-[0.2em] uppercase gold mb-4">Contact</p>
                <h2 className="playfair text-5xl font-semibold mb-6">Let's connect.</h2>
                <p className="dm-sans text-[#666] mb-12 max-w-md mx-auto">
                    Open to backend, full-stack, and AI/ML engineering roles. Feel free to reach out.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                    <a href="mailto:priyankakommani@gmail.com"
                        className="gold-bg text-[#0f0f0f] px-8 py-3.5 text-sm dm-sans font-medium tracking-wide hover:opacity-90 transition"
                        style={{ borderRadius: '2px' }}>
                        priyankakommani@gmail.com
                    </a>
                    <a href="https://github.com/priyankakommani" target="_blank" rel="noreferrer"
                        className="border gold-border gold px-8 py-3.5 text-sm dm-sans font-medium hover:bg-[#c9a96e10] transition"
                        style={{ borderRadius: '2px' }}>
                        GitHub
                    </a>
                    <a href="https://www.linkedin.com/in/priyanka-kommani-668315244" target="_blank" rel="noreferrer"
                        className="border border-[#ffffff15] text-[#888] px-8 py-3.5 text-sm dm-sans font-medium hover:border-[#c9a96e44] hover:text-[#c9a96e] transition"
                        style={{ borderRadius: '2px' }}>
                        LinkedIn
                    </a>
                </div>
                <p className="dm-sans text-xs text-[#333] tracking-widest uppercase">
                    Priyanka Kommani · Eluru, AP · 8374412944
                </p>
            </section>
        </div>
    );
}