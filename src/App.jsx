import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Experience from "./sections/Experience";
import Contact from "./sections/Contact";

export default function Portfolio() {

    const roles = ["Full Stack Dev", "Problem Solver"];
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % roles.length);
        }, 2500);
        return () => clearInterval(interval);
    }, []);

    return (

        <div className="font-sans">
            <section className="h-screen flex flex-col justify-center items-center text-center text-white relative overflow-hidden">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="text-5xl font-extrabold mb-4"
                >
                    Hello, I'm <span className="text-yellow-300">Keshawn Bryant</span>
                </motion.h2>

                <motion.p
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-xl mb-6 opacity-90"
                >
                    {roles[index]}
                </motion.p>

                <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    href="#projects"
                    className="px-6 py-3 bg-white text-indigo-700 font-semibold rounded-lg shadow"
                >
                    View My Work
                </motion.a>
            </section>
            <section id="projects" className="py-20">
                <Projects />

            </section>
            <section id="skills">
                <Skills />
            </section>
            <section id="experience">
                <Experience />
            </section>
            <section id="contact">
                <Contact />
            </section>

        </div>
    );
}
