import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";

export function CtaBand() {
    return (
        <Section className="py-32 md:py-40 bg-background border-t border-border/10">
            <Container className="text-center">
                <h2 className="text-4xl md:text-6xl font-heading font-light tracking-tight mb-8">
                    Curated upgrades. <br />
                    Impeccable installation.
                </h2>

                <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-12">
                    We are currently accepting projects for late 2026.
                    <br />Secure your place in our schedule.
                </p>

                <Button size="lg" asChild className="h-14 px-10 text-lg">
                    <Link href="/apply">Apply for a project</Link>
                </Button>
            </Container>
        </Section>
    );
}
