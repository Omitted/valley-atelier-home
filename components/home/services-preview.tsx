import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { ArrowRight } from "lucide-react";

import { services } from "@/lib/data";

export function ServicesPreview() {
    return (
        <Section className="bg-secondary/20">
            <Container>
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div className="max-w-xl">
                        <span className="text-xs font-medium tracking-[0.2em] text-muted-foreground uppercase mb-4 block">
                            Our Expertise
                        </span>
                        <h2 className="text-3xl md:text-4xl font-heading font-light tracking-tight">
                            Selected disciplines of craft.
                        </h2>
                    </div>
                    <Link
                        href="/services"
                        className="group flex items-center text-sm font-medium uppercase tracking-wider text-muted-foreground hover:text-primary transition-colors pb-1 border-b border-transparent hover:border-primary"
                    >
                        View all services
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service) => (
                        <Link
                            key={service.slug}
                            href={`/services/${service.slug}`}
                            className="group flex flex-col justify-between p-8 bg-background border border-border/40 hover:border-primary/20 hover:shadow-lg transition-all duration-500 aspect-[4/5] md:aspect-auto md:h-80"
                        >
                            <div>
                                <h3 className="text-xl font-heading font-light mb-3 text-primary group-hover:text-primary/80 transition-colors">
                                    {service.title}
                                </h3>
                                <p className="text-sm text-muted-foreground leading-relaxed line-clamp-4">
                                    {service.description}
                                </p>
                            </div>
                            <div className="mt-8 flex justify-end">
                                <span className="h-8 w-8 rounded-full border border-border/50 flex items-center justify-center text-muted-foreground group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all duration-300">
                                    <ArrowRight className="h-4 w-4" />
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>
            </Container>
        </Section>
    );
}
