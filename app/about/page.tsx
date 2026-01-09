import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

export const metadata = {
    title: "About | Valley Atelier Home",
    description: "Passion-driven craftsmanship.",
};

export default function AboutPage() {
    return (
        <main className="pt-24">
            <Section>
                <Container>
                    <div className="flex flex-col md:flex-row gap-16 md:gap-32">
                        <div className="md:w-1/2">
                            <h1 className="text-5xl md:text-7xl font-heading font-light tracking-tight mb-12">
                                Intentional work.
                            </h1>
                            <div className="aspect-square bg-muted relative overflow-hidden mb-12">
                                <div className="absolute inset-0 bg-gradient-to-br from-neutral-200 to-neutral-300" />
                                <div className="absolute inset-0 flex items-center justify-center text-muted-foreground/30 font-light text-xl">
                                    Portrait / Studio Image
                                </div>
                            </div>
                        </div>
                        <div className="md:w-1/2 flex flex-col justify-center space-y-8">
                            <h2 className="text-2xl font-medium">Valley Atelier Home was founded on a simple principle: better is possible.</h2>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                In a market often dominated by speed and standardization, we take the opposite approach. We believe that the installation of premium home components—whether automated shades, custom doors, or intricate entry systems—requires the same level of care as their manufacture.
                            </p>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                We are a small, dedicated team serving North Alabama and the Tennessee Valley. We limit our project volume to ensure every client receives our full attention.
                            </p>
                            <div className="pt-8 border-t border-border/20">
                                <h3 className="text-sm font-medium uppercase tracking-widest text-muted-foreground mb-4">Service Area</h3>
                                <p className="text-foreground">Huntsville &middot; Madison &middot; Decatur &middot; Guntersville &middot; The Shoals</p>
                            </div>
                        </div>
                    </div>
                </Container>
            </Section>
        </main>
    );
}
