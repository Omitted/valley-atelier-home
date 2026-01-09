import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import Link from "next/link";
import Image from "next/image";

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
                        {[
                            {
                                id: 1,
                                title: "Lakeside Automation",
                                location: "Guntersville, AL",
                                image: "/images/lake.jpg",
                                description: "Full home integration including motorized shades, lighting control, and HVAC automation for a modern lake house."
                            },
                            {
                                id: 2,
                                title: "Mountain Brook Entry",
                                location: "Birmingham, AL",
                                image: "/images/door.jpg",
                                description: "Custom pivot door automation with bio-metric access control and integrated architectural lighting."
                            },
                            {
                                id: 3,
                                title: "Estate Security",
                                location: "Huntsville, AL",
                                image: "/images/gate.jpg",
                                description: "Automated driveway gate and perimeter security integration for a private 10-acre estate."
                            },
                            {
                                id: 4,
                                title: "Hidden Library",
                                location: "Madison, AL",
                                image: "/images/special.jpg",
                                description: "Secret door automation disguised as a bookshelf, revealing a private lounge and workspace."
                            }
                        ].map((project) => (
                            <Link key={project.id} href="/projects/template" className="group block">
                                <div className="aspect-[4/3] bg-muted relative mb-6 overflow-hidden rounded-sm">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
                                </div>
                                <div className="flex justify-between items-baseline">
                                    <h2 className="text-xl font-medium text-foreground">{project.title}</h2>
                                    <span className="text-sm text-muted-foreground uppercase tracking-widest">{project.location}</span>
                                </div>
                                <p className="mt-2 text-muted-foreground line-clamp-2">
                                    {project.description}
                                </p>
                            </Link>
                        ))}
                    </div>
                </Container>
            </Section>
        </main>
    );
}
