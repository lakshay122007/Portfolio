"use client"

import { motion } from "framer-motion"
import { GraduationCap, BookOpen } from "lucide-react"

export function About() {
    return (
        <section id="about" className="py-20 bg-secondary/30">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="max-w-4xl mx-auto"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">About Me</h2>

                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                I&apos;m a tech enthusiast exploring full-stack development, AI/ML, and building creative digital projects.
                                Currently pursuing my BTech in Computer Science Engineering with a specialization in AI & ML.
                            </p>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                My journey involves deep diving into Python and Machine Learning while also mastering modern web technologies.
                                My future goal is to become an AI engineer and build industry-level applications that solve real-world problems.
                            </p>
                        </div>

                        <div className="grid gap-4">
                            <div className="p-6 rounded-2xl bg-card border border-border hover:border-neon-cyan/50 transition-colors">
                                <GraduationCap className="w-8 h-8 text-neon-cyan mb-4" />
                                <h3 className="font-bold text-xl mb-2">Education</h3>
                                <p className="text-muted-foreground">BTech CSE (AI & ML)</p>
                                <p className="text-sm text-muted-foreground mt-1">Current Student</p>
                            </div>

                            <div className="p-6 rounded-2xl bg-card border border-border hover:border-neon-purple/50 transition-colors">
                                <BookOpen className="w-8 h-8 text-neon-purple mb-4" />
                                <h3 className="font-bold text-xl mb-2">Learning</h3>
                                <p className="text-muted-foreground">Python + Machine Learning</p>
                                <p className="text-sm text-muted-foreground mt-1">Focusing on Foundations</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
