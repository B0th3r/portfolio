import { Mail, Linkedin, Github } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
    return (
        <section id="contact" className="py-24 text-white">
            <div className="max-w-4xl mx-auto text-center px-6">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center text-4xl md:text-5xl font-extrabold tracking-tight mb-14"
                >
                    Let's <span className="bg-gradient-to-r from-yellow-300 via-amber-300 to-rose-300 bg-clip-text text-transparent">Connect</span>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-lg text-gray-300 mb-10"
                >
                    Got a project, opportunity, or just want to say hey?
                    Reach out and let's talk.
                </motion.p>

                <div className="flex flex-wrap justify-center gap-6">
                    <motion.a
                        href="mailto:bryantk1215@gmail.com"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 px-6 py-3 rounded-lg bg-yellow-300 text-gray-900 font-semibold shadow-md hover:bg-yellow-400 transition"
                    >
                        <Mail className="w-5 h-5" />
                        Email Me
                    </motion.a>
                    <motion.a
                        href="https://www.linkedin.com/in/keshawn-bryant-8798671b5"
                        target="_blank"
                        rel="noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 px-6 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white font-medium hover:border-yellow-300 transition"
                    >
                        <Linkedin className="w-5 h-5" />
                        LinkedIn
                    </motion.a>

                    <motion.a
                        href="https://github.com/B0th3r"
                        target="_blank"
                        rel="noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 px-6 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white font-medium hover:border-yellow-300 transition"
                    >
                        <Github className="w-5 h-5" />
                        GitHub
                    </motion.a>
                </div>
            </div>
        </section>
    );
}
