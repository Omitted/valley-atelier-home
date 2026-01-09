import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

export function Testimonials() {
    return (
        <Section className="bg-secondary/20">
            <Container className="text-center max-w-3xl">
                <blockquote className="text-2xl md:text-3xl font-heading font-light leading-normal italic mb-8">
                    &ldquo;The level of precision Valley Atelier brought to our home automation project was unlike anything we&apos;ve experienced. It feels less like technology and more like architecture.&rdquo;
                </blockquote>
                <cite className="not-italic text-sm font-medium tracking-wide text-muted-foreground uppercase">
                    &mdash; Private Client, Huntsville
                </cite>
            </Container>
        </Section>
    );
}
