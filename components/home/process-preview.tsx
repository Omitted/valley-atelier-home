import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";

const steps = [
    { number: "01", title: "Apply" },
    { number: "02", title: "Consult" },
    { number: "03", title: "Review" },
    { number: "04", title: "Procure" },
    { number: "05", title: "Install" },
    { number: "06", title: "Walkthrough" },
];

export function ProcessPreview() {
    return (
        <Section className="bg-primary text-primary-foreground">
            <Container>
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <h2 className="text-3xl md:text-4xl font-heading font-light tracking-tight">
                        The Process
                    </h2>
                    <Button variant="link" className="text-primary-foreground" asChild>
                        <Link href="/process">Read full details</Link>
                    </Button>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
                    {steps.map((step) => (
                        <div key={step.number} className="flex flex-col gap-4 group">
                            <span className="text-4xl font-light text-primary-foreground/30 group-hover:text-primary-foreground/60 transition-colors">
                                {step.number}
                            </span>
                            <h3 className="text-lg font-medium tracking-wide">
                                {step.title}
                            </h3>
                            <div className="h-[1px] w-full bg-primary-foreground/20 group-hover:bg-primary-foreground/50 transition-colors" />
                        </div>
                    ))}
                </div>
            </Container>
        </Section>
    );
}
