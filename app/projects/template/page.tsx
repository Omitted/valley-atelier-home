import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
    title: "Case Study | Valley Atelier Home",
    description: "A detailed look at a recent installation.",
};

export default function CaseStudyTemplate() {
    return (
        <main className="pt-24">
            <Section>
                <Container>
                    <Link href="/projects" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-8">
                        <ArrowLeft className="mr-2 h-4 w-4" /> Back to Projects
                    </Link>

                    <span className="text-xs font-medium tracking-[0.2em] uppercase text-muted-foreground block mb-4">
                        Guntersville, AL
                    </span>
                    <h1 className="text-4xl md:text-6xl font-heading font-light tracking-tight mb-8">
                        Lakeside Automation
                    </h1>

                    <p className="text-xl md:text-2xl leading-relaxed text-muted-foreground max-w-4xl mb-16">
                        A complete retro-fit of a 1980s lake house, integrating Lutron Palladiom shades and a custom pivot entry door to modernize the aesthetic without compromising the view.
                    </p>

                    {/* Main Hero Image */}
                    <div className="aspect-[21/9] bg-muted w-full mb-16 rounded-sm relative overflow-hidden block">
                        <Image
                            src="/images/lake.png"
                            alt="Lakeside automation project hero"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
                        <div className="md:col-span-1">
                            <h3 className="text-sm font-medium uppercase tracking-widest mb-4">Scope</h3>
                            <ul className="space-y-2 text-muted-foreground">
                                <li>Motorized Shading (12 zones)</li>
                                <li>Custom Steel Pivot Door</li>
                                <li>Lighting Control System</li>
                            </ul>
                        </div>
                        <div className="md:col-span-2">
                            <h2 className="text-2xl font-light mb-6">The Challenge</h2>
                            <p className="text-muted-foreground leading-relaxed mb-6">
                                The clients wanted to preserve the original timber framing while introducing modern conveniences. The primary challenge was concealing the shading pockets in a ceiling with no cavity space.
                            </p>
                            <h2 className="text-2xl font-light mb-6">The Solution</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                We designed custom valances that mimicked the existing beam structure, hiding the roller mechanisms in plain sight. The result is a system that disappears when not in use.
                            </p>
                        </div>
                    </div>

                    {/* Gallery Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
                        <div className="aspect-square bg-muted relative rounded-sm"><div className="absolute inset-0 flex items-center justify-center text-muted-foreground/30">Detail Shot 1</div></div>
                        <div className="aspect-square bg-muted relative rounded-sm"><div className="absolute inset-0 flex items-center justify-center text-muted-foreground/30">Detail Shot 2</div></div>
                    </div>

                    <div className="border-t border-border/20 pt-12 text-center">
                        <h2 className="text-3xl font-light mb-8">Have a similar project in mind?</h2>
                        <Button size="lg" asChild>
                            <Link href="/apply">Start Conversation</Link>
                        </Button>
                    </div>
                </Container>
            </Section>
        </main>
    );
}
