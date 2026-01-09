import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

export const metadata = {
    title: "Process | Valley Atelier Home",
    description: "Our meticulously defined 6-step workflow.",
};

const steps = [
    {
        number: "01",
        title: "Apply",
        description: "We start with a preliminary review of your request to ensure we are the right fit for your scope and timeline."
    },
    {
        number: "02",
        title: "Consult",
        description: "A site walkthrough or virtual consultation to gather detailed measurements and understand the architectural context."
    },
    {
        number: "03",
        title: "Review",
        description: "We provide a comprehensive proposal including exact specifications, timelines, and investment requirements."
    },
    {
        number: "04",
        title: "Procure",
        description: "Components are ordered and received at our facility for inspection before they ever reach your home."
    },
    {
        number: "05",
        title: "Install",
        description: "Our installation team executes the project with white-glove care, respecting your home and schedule."
    },
    {
        number: "06",
        title: "Walkthrough",
        description: "We demonstrate full functionality and ensure you are completely satisfied with the operation and finish."
    },
];

export default function ProcessPage() {
    return (
        <main className="pt-24">
            <Section>
                <Container>
                    <div className="max-w-3xl mb-24">
                        <h1 className="text-5xl md:text-7xl font-heading font-light tracking-tight mb-8">
                            The Process
                        </h1>
                        <p className="text-xl text-muted-foreground leading-relaxed">
                            Great results are not accidental. They are the product of a disciplined workflow that prioritizes planning over speed.
                        </p>
                    </div>

                    <div className="space-y-24">
                        {steps.map((step) => (
                            <div key={step.number} className="grid grid-cols-1 md:grid-cols-12 gap-8 border-t border-border/20 pt-12">
                                <div className="md:col-span-2 text-4xl font-light text-muted-foreground/40">{step.number}</div>
                                <div className="md:col-span-4 text-2xl font-medium">{step.title}</div>
                                <div className="md:col-span-6 text-lg text-muted-foreground leading-relaxed">{step.description}</div>
                            </div>
                        ))}
                    </div>
                </Container>
            </Section>
        </main>
    );
}
