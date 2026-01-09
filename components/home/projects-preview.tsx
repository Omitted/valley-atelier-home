import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";

export function ProjectsPreview() {
    return (
        <Section>
            <Container>
                <div className="flex flex-col items-center text-center mb-16">
                    <span className="text-xs font-medium tracking-[0.2em] text-muted-foreground uppercase mb-4">
                        Recent Work
                    </span>
                    <h2 className="text-3xl md:text-4xl font-heading font-light tracking-tight mb-6">
                        Distinctive transformations.
                    </h2>
                    <Button variant="outline" asChild>
                        <Link href="/projects">View all projects</Link>
                    </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="aspect-[4/3] bg-muted relative group overflow-hidden">
                        {/* Placeholder for project image */}
                        <div className="absolute inset-0 bg-gradient-to-br from-neutral-200 to-neutral-300 group-hover:scale-105 transition-transform duration-700" />
                        <div className="absolute bottom-6 left-6">
                            <h3 className="text-lg font-medium text-slate-800">Lakeside automation</h3>
                            <p className="text-sm text-slate-600">Guntersville, AL</p>
                        </div>
                    </div>
                    <div className="aspect-[4/3] bg-muted relative group overflow-hidden">
                        {/* Placeholder for project image */}
                        <div className="absolute inset-0 bg-gradient-to-br from-slate-200 to-slate-300 group-hover:scale-105 transition-transform duration-700" />
                        <div className="absolute bottom-6 left-6">
                            <h3 className="text-lg font-medium text-slate-800">Mountain Brook Entry</h3>
                            <p className="text-sm text-slate-600">Birmingham, AL</p>
                        </div>
                    </div>
                </div>
            </Container>
        </Section>
    );
}
