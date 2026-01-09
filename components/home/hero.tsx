import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-background">
            {/* Abstract Background Placeholder */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-secondary via-background to-background opacity-70" />
            </div>

            <Container className="relative z-10 flex flex-col items-center text-center max-w-4xl">
                <span className="text-sm font-medium tracking-[0.2em] text-muted-foreground uppercase mb-6 animate-fade-in-up">
                    North Alabama &middot; Tennessee Valley
                </span>

                <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-light tracking-tight text-primary mb-8 leading-[1.1]">
                    Curated upgrades. <br />
                    <span className="text-muted-foreground">Impeccable installation.</span>
                </h1>

                <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed">
                    Valley Atelier Home is a passion-driven studio focused on craftsmanship and client experience.
                    We personally select projects, procure components, and complete installation to a meticulous standard.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                    <Button size="lg" asChild className="min-w-[180px]">
                        <Link href="/apply">Apply for a project</Link>
                    </Button>
                    <Button size="lg" variant="outline" asChild className="min-w-[180px]">
                        <Link href="/services">View services</Link>
                    </Button>
                </div>
            </Container>
        </section>
    );
}
