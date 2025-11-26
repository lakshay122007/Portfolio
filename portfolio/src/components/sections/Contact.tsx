"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Send, Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Contact() {
    const [isSubmitting, setIsSubmitting] = React.useState(false)
    const [isSuccess, setIsSuccess] = React.useState(false)

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setIsSubmitting(true)

        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1500))

        setIsSubmitting(false)
        setIsSuccess(true)
        e.currentTarget.reset()

        setTimeout(() => setIsSuccess(false), 3000)
    }

    return (
        <section id="contact" className="py-20 bg-secondary/30">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="max-w-4xl mx-auto"
                >
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
                        <p className="text-muted-foreground">Have a project in mind or just want to say hi?</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12">
                        <div className="space-y-8">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-neon-cyan/10 flex items-center justify-center text-neon-cyan">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg">Email Me</h3>
                                    <a href="mailto:contact@lakshaygoyal.com" className="text-muted-foreground hover:text-neon-cyan transition-colors">
                                        contact@lakshaygoyal.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-neon-purple/10 flex items-center justify-center text-neon-purple">
                                    <Linkedin className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg">LinkedIn</h3>
                                    <a href="https://linkedin.com/in/lakshaygoyal" target="_blank" className="text-muted-foreground hover:text-neon-purple transition-colors">
                                        Connect with me
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-background border border-border flex items-center justify-center">
                                    <Github className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg">GitHub</h3>
                                    <a href="https://github.com/lakshaygoyal" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
                                        Check my code
                                    </a>
                                </div>
                            </div>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-6 bg-card p-8 rounded-2xl border border-border">
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-sm font-medium">Name</label>
                                <input
                                    id="name"
                                    required
                                    className="w-full px-4 py-2 rounded-md bg-background border border-input focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan outline-none transition-all"
                                    placeholder="Your Name"
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium">Email</label>
                                <input
                                    id="email"
                                    type="email"
                                    required
                                    className="w-full px-4 py-2 rounded-md bg-background border border-input focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan outline-none transition-all"
                                    placeholder="your@email.com"
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium">Message</label>
                                <textarea
                                    id="message"
                                    required
                                    rows={4}
                                    className="w-full px-4 py-2 rounded-md bg-background border border-input focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan outline-none transition-all resize-none"
                                    placeholder="Your message..."
                                />
                            </div>

                            <Button type="submit" className="w-full" disabled={isSubmitting}>
                                {isSubmitting ? (
                                    "Sending..."
                                ) : isSuccess ? (
                                    "Message Sent!"
                                ) : (
                                    <>
                                        Send Message <Send className="ml-2 h-4 w-4" />
                                    </>
                                )}
                            </Button>
                        </form>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
