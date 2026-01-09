import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { services } from "@/lib/data";

interface Props {
    params: {
        slug: string;
    };
}

// Generate static params for all services
export function generateStaticParams() {
    return services.map((service) => ({
        slug: service.slug,
    }));
}

export function generateMetadata({ params }: Props) {
    const service = services.find((s) => s.slug === params.slug);
    if (!service) return { title: "Service Not Found" };
    return {
        title: `${service.title} | Valley Atelier Home`,
        description: service.description,
    };
}

export default function ServiceDetailPage({ params }: Props) {
    const service = services.find((s) => s.slug === params.slug);

    if (!service) {
        notFound();
    }

    return (
        <main className="pt-24 min-h-screen">
            <Section>
                <Container>
                    <div className="max-w-4xl mx-auto">
                        <Link
                            href="/services"
                            className="text-sm font-medium tracking-wide text-muted-foreground uppercase hover:text-primary transition-colors mb-8 inline-block"
                        >
                            ← Back to Services
                        </Link>

                        <h1 className="text-5xl md:text-7xl font-heading font-light tracking-tight mb-8">
                            {service.title}
                        </h1>

                        <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-12">
                            {service.fullDescription}
                        </p>

                        <div className="aspect-video w-full bg-muted mb-16 relative overflow-hidden rounded-sm">
                            <div className="absolute inset-0 bg-gradient-to-tr from-background/10 to-background/5" />
                            <div className="absolute inset-0 flex items-center justify-center text-muted-foreground/30 font-light text-xl">
                                Service Image Placeholder
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
                            <div>
                                <h3 className="text-xl font-medium mb-6">Capabilities</h3>
                                <ul className="space-y-4">
                                    {service.features.map(f => (
                                        <li key={f} className="flex items-start text-muted-foreground">
                                            <span className="mr-4 mt-2 h-px w-4 bg-primary/50 block" />
                                            {f}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-xl font-medium mb-6">Our Approach</h3>
                                <p className="text-muted-foreground leading-relaxed mb-6">
                                    Every {service.title.toLowerCase()} project begins with an on-site consultation to understand mechanical constraints and aesthetic goals. We handle everything from procurement to final programming.
                                </p>
                            </div>
                        </div>

                        <div className="border-t border-border/20 pt-12 flex flex-col items-center text-center">
                            <h2 className="text-3xl font-heading font-light mb-6">Ready to discuss your project?</h2>
                            <Button size="lg" asChild>
                                <Link href="/apply">Start Consultation</Link>
                            </Button>
                        </div>
                    </div>
                </Container>
            </Section>
        </main>
    );
}
