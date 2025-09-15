import ProjectCard from "../components/ProjectCard";
import { motion } from "framer-motion";

const projects = [
    {
        title: "Multiplayer Game Server",
        image: "assets/ArcadeBob.png",
        madeWith: ["JavaScript", "Node.js", "Socket.IO", "React", "Tailwind"],
        description:
            "Multiplayer server where players can create or join lobbies, with the host controlling game selection and spectating ability for non-players.",
        liveUrl: "https://arcadebob.com",
        repoUrl: "https://github.com/B0th3r/Multiplayer-Game-Server",
    },
    {
        title: "OKB Portal",
        image: "",
        madeWith: ["JavaScript", "MySQL", "PHP", "AWS", "Apache"],
        description:
            "Medical web application built for the OKB Hope Foundation to streamline patient care. The portal provides role-based access for patients, doctors, nurses, lab technicians, and pharmacists. The portal has features such as visit tracking, vitals entry, lab orders with results, and secure prescription fulfillment. I was solely responsible for designing, developing, and deploying both the backend and frontend. The live portal is available, though access requires authorized credentials.",
        liveUrl: "https://okbhopehub.org",
        gallery:
            [
                { type: "video", src: "assets/OKB-Walkthrough.mp4", poster: "assets/OKB-Login.png" },
                { type: "video", src: "assets/OKB-PatientWalkthrough.mp4", poster: "assets/OKB-PatientPortal.png" },
            ],
    },
];

export default function Projects() {
    return (
        <section
            id="projects"
            className="relative py-24"
        >
            <div className="max-w-6xl mx-auto px-6">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center text-4xl md:text-5xl font-extrabold tracking-tight mb-14"
                >
                    My <span className="bg-gradient-to-r from-yellow-300 via-amber-300 to-rose-300 bg-clip-text text-transparent">Work</span>
                </motion.h2>

                <div className="mt-14 space-y-20">
                    {projects.map((p) => (
                        <ProjectCard key={p.title} {...p} />
                    ))}
                </div>
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="mt-14 text-center text-sm text-zinc-400"
                >
                    Looking for details? Ask me about specific projects or deliverables.
                </motion.div>
            </div>


        </section>
    );
}
