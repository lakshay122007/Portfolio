import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"

export function Footer() {
    return (
        <footer className="border-t border-border bg-background/50 backdrop-blur-sm py-8 mt-20">
            <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="text-sm text-muted-foreground">
                    © {new Date().getFullYear()} Lakshay Goyal. All rights reserved.
                </div>

                <div className="flex items-center gap-6">
                    <Link href="https://github.com/lakshaygoyal" target="_blank" className="text-muted-foreground hover:text-neon-cyan transition-colors">
                        <Github className="h-5 w-5" />
                    </Link>
                    <Link href="https://linkedin.com/in/lakshaygoyal" target="_blank" className="text-muted-foreground hover:text-neon-cyan transition-colors">
                        <Linkedin className="h-5 w-5" />
                    </Link>
                    <Link href="mailto:contact@lakshaygoyal.com" className="text-muted-foreground hover:text-neon-cyan transition-colors">
                        <Mail className="h-5 w-5" />
                    </Link>
                </div>
            </div>
        </footer>
    )
}
