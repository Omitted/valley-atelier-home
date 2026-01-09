import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import Image from "next/image";

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
                    <Link href="/projects/template" className="aspect-[4/3] bg-muted relative group overflow-hidden block">
                        <Image
                            src="/images/lake.png"
                            alt="Lakeside automation"
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                        <div className="absolute bottom-6 left-6 text-white">
                            <h3 className="text-lg font-medium drop-shadow-md">Lakeside Automation</h3>
                            <p className="text-sm opacity-90 drop-shadow-md">Guntersville, AL</p>
                        </div>
                    </Link>
                    <div className="aspect-[4/3] bg-muted relative group overflow-hidden">
                        <Image
                            src="/images/door.png"
                            alt="Mountain Brook Entry"
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                        <div className="absolute bottom-6 left-6 text-white">
                            <h3 className="text-lg font-medium drop-shadow-md">Mountain Brook Entry</h3>
                            <p className="text-sm opacity-90 drop-shadow-md">Birmingham, AL</p>
                        </div>
                    </div>
                </div>
            </Container>
        </Section>
    );
}
