import { motion, useReducedMotion } from "framer-motion";


const experiences = [
    {
        role: "Full Stack Developer Intern",
        company: "OKB Hope Foundation",
        period: "Jan 2025 — Sept 2025",
        description: [
            "Deployed a medical web portal used by patients, doctors, and pharmacists.",
            "Implemented features including role-based access, visit tracking, vitals entry, and prescription management.",
        ],
        link: "#projects",
        ctatitle: "View the portal",
        openInNewTab: false,
    },
    {
        role: "Computer Science Graduate",
        company: "Virginia State University",
        period: "Graduted May 2025",
        description: [
            "Bachelor's degree in Computer Science.",
            "Participated in VSU hackathons and clubs",
        ],
        link: null,
    },
    {
        role: "Publication: Facial Recognition Research",
        company: "Virginia State University",
        period: "Published August 2024",
        description: [
            "Published a systematic review on facial recognition methods.",
            "This paper explores the advancements and societal impacts of facial recognition systems, highlighting both their benefits and the ethical challenges they raise.",
        ],
        link: "https://ieeexplore.ieee.org/abstract/document/10703753",
        ctatitle: "View my paper",
        openInNewTab: true,
    },
];

const container = {
    hidden: { opacity: 0 },
    show: (delayBase = 0) => ({
        opacity: 1,
        transition: {
            staggerChildren: 0.12,
            delayChildren: delayBase,
        },
    }),
};

const item = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.18, 0.8, 0.22, 1] } },
};

export default function Experience() {
    const prefersReducedMotion = useReducedMotion();

    return (
        <section
            id="experience"
            aria-label="Experience timeline"
            className="py-24 text-white"
        >
            <div className="max-w-5xl mx-auto px-6">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center text-4xl md:text-5xl font-extrabold tracking-tight mb-14"
                >
                    My <span className="bg-gradient-to-r from-yellow-300 via-amber-300 to-rose-300 bg-clip-text text-transparent">Experience</span>
                </motion.h2>
                <motion.ol
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-80px" }}
                    className="relative pl-8"
                >
                    <div
                        aria-hidden
                        className="pointer-events-none absolute left-3 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-zinc-700/70 to-transparent"
                    />

                    {experiences.map((exp, i) => (
                        <motion.li
                            key={`${exp.role}-${i}`}
                            variants={item}
                            className="relative mb-12 last:mb-0"
                        >
                            <span
                                className="absolute -left-6.5 -top-1 inline-flex h-3.5 w-3.5 items-center justify-center"
                                aria-hidden
                            >
                                <span className="absolute inline-block h-3.5 w-3.5 rounded-full bg-yellow-300 shadow-[0_0_16px_rgba(250,204,21,0.8)]" />
                                <motion.span
                                    initial={{ scale: prefersReducedMotion ? 1 : 0.8, opacity: 0.7 }}
                                    whileInView={{ scale: 1.15, opacity: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1.6, repeat: prefersReducedMotion ? 0 : Infinity, repeatType: "loop" }}
                                    className="absolute inline-block h-5 w-5 rounded-full border border-yellow-300/60"
                                />
                            </span>

                            <motion.div
                                whileHover={prefersReducedMotion ? {} : { y: -2 }}
                                className="group rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-5 md:p-6 shadow-[0_8px_24px_rgba(0,0,0,0.25)] transition"
                            >
                                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-2">
                                    <h3 className="text-xl md:text-2xl font-semibold leading-tight">
                                        {exp.role}
                                    </h3>
                                    <div className="h-1 w-1 rounded-full bg-white/30" />
                                    <p className="text-sm md:text-base text-yellow-300/90 font-medium">
                                        {exp.company}
                                    </p>
                                </div>

                                <p className="mt-1 text-xs md:text-sm text-zinc-400">{exp.period}</p>

                                <ul className="mt-4 space-y-2">
                                    {exp.description.map((d, j) => (
                                        <li key={j} className="flex gap-3 text-zinc-300 leading-relaxed">
                                            <span aria-hidden className="mt-1 inline-block h-4 w-4 shrink-0 rounded-full ring-1 ring-white/20">
                                                <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4">
                                                    <path d="M5 10.5l3 3 7-7" stroke="currentColor" strokeWidth="2" className="text-yellow-300" />
                                                </svg>
                                            </span>
                                            <span>{d}</span>
                                        </li>
                                    ))}
                                </ul>

                                <div className="mt-5 h-px w-full bg-gradient-to-r from-transparent via-yellow-300/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                                {exp.link ? (
                                    <div className="mt-4">
                                        <a
                                            href={exp.link}
                                            {...(exp.openInNewTab ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                                            className="inline-flex items-center gap-2 text-sm text-yellow-300/90 hover:text-yellow-200 focus:outline-none focus:ring-2 focus:ring-yellow-300/40 rounded-lg px-1"
                                        >
                                            {exp.ctatitle}
                                            <svg
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                className="h-4 w-4"
                                                aria-hidden
                                            >
                                                <path d="M7 17L17 7M17 7H9M17 7v8" stroke="currentColor" strokeWidth="2" />
                                            </svg>
                                        </a>
                                    </div>
                                ) : null}
                            </motion.div>
                        </motion.li>
                    ))}
                </motion.ol>
            </div>
        </section>
    );
}
