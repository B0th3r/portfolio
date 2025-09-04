import { motion } from "framer-motion";
import { useState } from "react";
import { Code, Database, Layout, Cloud } from "lucide-react";

const skills = [
    { name: "Languages", icon: <Code className="w-8 h-8" />, items: ["JavaScript", "PHP", "SQL", "Python"] },
    { name: "Frameworks & Libraries", icon: <Layout className="w-8 h-8" />, items: ["React", "Tailwind", "Express"] },
    { name: "Backend & Databases", icon: <Database className="w-8 h-8" />, items: ["Node.js", "MySQL"] },
    { name: "Cloud & DevOps", icon: <Cloud className="w-8 h-8" />, items: ["AWS", "Docker", "Linux", "Git"] },
];

export default function Skills() {
    const [hovered, setHovered] = useState(null);
    return (
        <section id="skills" className="py-20 text-white relative">
            <div className="max-w-6xl mx-auto px-6">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center text-4xl md:text-5xl font-extrabold tracking-tight mb-14"
                >
                    My <span className="bg-gradient-to-r from-yellow-300 via-amber-300 to-rose-300 bg-clip-text text-transparent">Skills</span>
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skills.map((skill, i) => (
                        <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            whileHover={{ scale: 1.05 }}
                            className="bg-gray-800 rounded-2xl shadow-lg p-6 cursor-pointer border border-gray-700 hover:border-yellow-300 transition"
                            onMouseEnter={() => setHovered(i)}
                            onMouseLeave={() => setHovered(null)}
                        >
                            <div className="flex items-center gap-3 mb-4 text-yellow-300">
                                {skill.icon}
                                <h3 className="text-2xl font-semibold">{skill.name}</h3>
                            </div>
                            <ul className="space-y-2">
                                {skill.items.map((item, j) => (
                                    <motion.li
                                        key={j}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: hovered === i ? 1 : 0.7 }}
                                        transition={{ duration: 0.3 }}
                                        className="text-gray-300 hover:text-white text-lg"
                                    >
                                        {item}
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
