"use client";

import * as React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Navbar() {
    const [isScrolled, setIsScrolled] = React.useState(false);

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                isScrolled
                    ? "bg-background/80 backdrop-blur-md py-4 border-b border-border/10"
                    : "bg-transparent py-6"
            )}
        >
            <Container className="flex items-center justify-between">
                <Link
                    href="/"
                    className="text-lg font-heading tracking-tight font-medium uppercase"
                >
                    Valley Atelier
                    <span className="block text-[10px] tracking-widest text-muted-foreground">Home</span>
                </Link>

                <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
                    <Link href="/services" className="text-secondary-foreground/80 hover:text-primary transition-colors">
                        Services
                    </Link>
                    <Link href="/process" className="text-secondary-foreground/80 hover:text-primary transition-colors">
                        Process
                    </Link>
                    <Link href="/projects" className="text-secondary-foreground/80 hover:text-primary transition-colors">
                        Projects
                    </Link>
                    <Link href="/about" className="text-secondary-foreground/80 hover:text-primary transition-colors">
                        About
                    </Link>
                </nav>

                <div className="flex items-center gap-4">
                    <Button asChild variant="outline" className="hidden md:inline-flex">
                        <Link href="/apply">Apply</Link>
                    </Button>

                    {/* Mobile Menu Trigger would go here */}
                </div>
            </Container>
        </header>
    );
}
