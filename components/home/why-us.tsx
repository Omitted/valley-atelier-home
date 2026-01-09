import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Check } from "lucide-react";

const pillars = [
    {
        title: "Curated Selection",
        description: "We don't offer everything. We offer the best. Every product is vetted for quality, longevity, and aesthetic value.",
    },
    {
        title: "Measurement Precision",
        description: "Fit is everything. We use advanced digital measurement tools to ensure millimeter-accurate specifications.",
    },
    {
        title: "Install Finish",
        description: "The difference is in the details. Clean lines, hidden wiring, and surfaces left spotless upon completion.",
    },
];

export function WhyUs() {
    return (
        <Section>
            <Container>
                <div className="flex flex-col md:flex-row gap-12 md:gap-24">
                    <div className="md:w-1/3">
                        <h2 className="text-3xl md:text-4xl font-heading font-light tracking-tight mb-6">
                            Why we are different.
                        </h2>
                        <p className="text-muted-foreground">
                            In an industry of volume, we choose value. Our approach is slower, quieter, and focused entirely on the outcome.
                        </p>
                    </div>

                    <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-12">
                        {pillars.map((pillar) => (
                            <div key={pillar.title} className="flex flex-col gap-4">
                                <div className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center text-primary">
                                    <Check className="h-5 w-5" />
                                </div>
                                <h3 className="text-xl font-medium">{pillar.title}</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    {pillar.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </Section>
    );
}
