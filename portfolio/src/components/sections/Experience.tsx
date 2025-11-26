"use client"

import { motion } from "framer-motion"
import { Briefcase } from "lucide-react"
import experienceData from "@/data/experience.json"

export function Experience() {
    return (
        <section id="experience" className="py-20">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience</h2>
                    <p className="text-muted-foreground">My professional journey</p>
                </motion.div>

                <div className="max-w-3xl mx-auto relative">
                    {/* Vertical Line */}
                    <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2 hidden md:block" />

                    <div className="space-y-12">
                        {experienceData.map((item, index) => (
                            <motion.div
                                key={item.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                                    }`}
                            >
                                {/* Timeline Dot */}
                                <div className="absolute left-0 md:left-1/2 top-0 w-4 h-4 rounded-full bg-neon-cyan border-4 border-background -translate-x-[5px] md:-translate-x-1/2 z-10" />

                                <div className="flex-1 ml-8 md:ml-0">
                                    <div className={`p-6 rounded-2xl bg-card border border-border hover:border-neon-cyan/50 transition-colors ${index % 2 === 0 ? "md:text-left" : "md:text-right"
                                        }`}>
                                        <div className={`flex items-center gap-2 mb-2 ${index % 2 === 0 ? "md:justify-start" : "md:justify-end"
                                            }`}>
                                            <Briefcase className="w-4 h-4 text-neon-cyan" />
                                            <span className="text-sm text-neon-cyan font-medium">{item.period}</span>
                                        </div>
                                        <h3 className="text-xl font-bold mb-1">{item.role}</h3>
                                        <h4 className="text-lg text-muted-foreground mb-4">{item.company}</h4>
                                        <p className="text-muted-foreground text-sm leading-relaxed">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>

                                <div className="flex-1 hidden md:block" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
