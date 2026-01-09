import Link from "next/link";
import { Container } from "@/components/ui/container";

export function Footer() {
    return (
        <footer className="bg-secondary/30 border-t border-border/10 py-16 md:py-24">
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                    <div className="md:col-span-2">
                        <h3 className="text-lg font-heading font-medium uppercase tracking-tight mb-4">
                            Valley Atelier Home
                        </h3>
                        <p className="max-w-xs text-muted-foreground">
                            Curated upgrades. Impeccable installation.
                            Serving North Alabama and the Tennessee Valley.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-medium mb-4">Studio</h4>
                        <div className="flex flex-col gap-3 text-sm text-muted-foreground">
                            <Link href="/services" className="hover:text-primary transition-colors">Services</Link>
                            <Link href="/process" className="hover:text-primary transition-colors">Process</Link>
                            <Link href="/projects" className="hover:text-primary transition-colors">Projects</Link>
                            <Link href="/about" className="hover:text-primary transition-colors">About</Link>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-medium mb-4">Support</h4>
                        <div className="flex flex-col gap-3 text-sm text-muted-foreground">
                            <Link href="/faq" className="hover:text-primary transition-colors">FAQ</Link>
                            <Link href="/apply" className="hover:text-primary transition-colors">Contact</Link>
                            <Link href="/apply" className="hover:text-primary transition-colors">Apply for a Project</Link>
                        </div>
                    </div>
                </div>

                <div className="mt-16 pt-8 border-t border-border/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
                    <p>&copy; {new Date().getFullYear()} Valley Atelier Home. All rights reserved.</p>
                    <div className="flex gap-4">
                        <Link href="/privacy" className="hover:text-primary">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-primary">Terms of Service</Link>
                    </div>
                </div>
            </Container>
        </footer>
    );
}
