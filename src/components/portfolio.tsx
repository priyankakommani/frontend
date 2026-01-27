export default function Portfolio() {
    const skills = [
        "Node.js",
        "Hono.js",
        "PostgreSQL",
        "Drizzle ORM",
        "REST APIs",
        "React",
        "Tailwind",
        "VideoSDK",
        "OpenAI",
        "Python",
    ];

    const projects = [
        {
            title: "Interview Management & Proctoring Platform",
            desc: "End-to-end interview system with scheduling, VideoSDK proctoring, AI-based scoring, and workflow-driven multi-interview selection.",
            stack: "Node.js • Hono • PostgreSQL • Drizzle • VideoSDK • AI",
        },
        {
            title: "IoT Motor Monitoring & Control System",
            desc: "Backend platform to remotely monitor and control motors via mobile apps using gateway-based real-time communication.",
            stack: "Node.js • PostgreSQL • REST APIs • IoT Gateways",
        },
        {
            title: "Restaurant Review Prediction",
            desc: "ML model for sentiment analysis of reviews using NLP techniques.",
            stack: "Python • TensorFlow • Scikit-learn • NLP",
        },
        {
            title: "Automated Paper Evaluation",
            desc: "NLP-based system to automatically grade written answers.",
            stack: "Python • NLTK • SpaCy",
        },
    ];

    return (
        <div className="min-h-screen bg-gray-50 text-gray-800">

            {/* HERO */}
            <section className="text-center py-24 bg-blue-600 text-white">
                <h1 className="text-5xl font-bold mb-4">Priyanka Kommani</h1>
                <p className="text-xl">
                    Backend Developer | Node.js | PostgreSQL | APIs | AI | IoT
                </p>
                <p className="mt-4 text-sm opacity-90">
                    Building scalable systems & real-world backend solutions
                </p>
            </section>


            {/* ABOUT */}
            <section className="max-w-5xl mx-auto px-6 py-16">
                <h2 className="text-3xl font-semibold mb-6">About Me</h2>
                <p className="text-lg leading-relaxed">
                    Backend Developer with 1.5 years of experience designing scalable APIs and
                    server-side applications using Node.js (Hono.js), PostgreSQL, and Drizzle ORM.
                    Experienced in AI-powered platforms, VideoSDK integrations, and IoT-based
                    systems. Passionate about building reliable, high-performance backend
                    architectures and collaborating with teams to deliver impactful solutions.
                </p>
            </section>


            {/* SKILLS */}
            <section className="bg-white py-16">
                <h2 className="text-3xl font-semibold text-center mb-10">Tech Stack</h2>

                <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
                    {skills.map((skill) => (
                        <span
                            key={skill}
                            className="px-4 py-2 bg-blue-100 text-blue-800 rounded-2xl text-sm font-medium shadow-sm"
                        >
                            {skill}
                        </span>
                    ))}
                </div>
            </section>


            {/* PROJECTS */}
            <section className="max-w-6xl mx-auto px-6 py-16">
                <h2 className="text-3xl font-semibold text-center mb-10">Projects</h2>

                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project, i) => (
                        <div
                            key={i}
                            className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition"
                        >
                            <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                            <p className="text-gray-600 mb-4">{project.desc}</p>
                            <p className="text-sm text-blue-600 font-medium">{project.stack}</p>
                        </div>
                    ))}
                </div>
            </section>


            {/* CONTACT */}
            <section className="text-center py-14 bg-gray-100">
                <h2 className="text-2xl font-semibold mb-4">Contact</h2>
                <p>Email: priyankakommani@gmail.com</p>
                <p>Phone: 8374412944</p>
                <p>
                    GitHub:{" "}
                    <a
                        href="https://github.com/priyankakommani"
                        className="text-blue-600 underline"
                        target="_blank"
                        rel="noreferrer"
                    >
                        github.com/priyankakommani
                    </a>
                </p>
            </section>
        </div>
    );
}
