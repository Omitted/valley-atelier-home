import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { ApplyForm } from "@/components/apply/apply-form";

export const metadata = {
    title: "Apply | Valley Atelier Home",
    description: "Start your project with us.",
};

export default function ApplyPage() {
    return (
        <main className="pt-24 min-h-screen bg-secondary/10">
            <Section>
                <Container>
                    <div className="text-center mb-12">
                        <h1 className="text-4xl md:text-5xl font-heading font-light tracking-tight mb-4">
                            Start a Project
                        </h1>
                        <p className="text-muted-foreground max-w-lg mx-auto">
                            Please tell us about your vision. We reviewing new inquiries weekly.
                        </p>
                    </div>

                    <ApplyForm />
                </Container>
            </Section>
        </main>
    );
}
