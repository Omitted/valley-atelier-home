import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import Link from "next/link";

export const metadata = {
    title: "Projects | Valley Atelier Home",
    description: "A selection of our recent work in North Alabama.",
};

export default function ProjectsPage() {
    return (
        <main className="pt-24">
            <Section>
                <Container>
                    <div className="flex flex-col md:flex-row justify-between items-end mb-24">
                        <h1 className="text-5xl md:text-7xl font-heading font-light tracking-tight">
                            Recent Work
                        </h1>
                        <p className="md:text-right text-muted-foreground max-w-sm">
                            Selected case studies demonstrating our commitment to precision and craft.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
                        {[1, 2, 3, 4, 5, 6].map((i) => (
                            <Link key={i} href="#" className="group block cursor-default">
                                <div className="aspect-[4/3] bg-muted relative mb-6 overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-br from-neutral-200 to-neutral-300 group-hover:scale-105 transition-transform duration-700" />
                                    <div className="absolute inset-0 flex items-center justify-center text-muted-foreground/30 font-light text-lg opacity-0 group-hover:opacity-100 transition-opacity">
                                        Project Image {i}
                                    </div>
                                </div>
                                <div className="flex justify-between items-baseline">
                                    <h2 className="text-xl font-medium text-foreground">Project Name {i}</h2>
                                    <span className="text-sm text-muted-foreground uppercase tracking-widest">Location, AL</span>
                                </div>
                                <p className="mt-2 text-muted-foreground line-clamp-2">
                                    Brief description of the project scope and outcome. A few lines to give context to the imagery.
                                </p>
                            </Link>
                        ))}
                    </div>
                </Container>
            </Section>
        </main>
    );
}
