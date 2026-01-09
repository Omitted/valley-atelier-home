import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { services } from "@/lib/data";
import { ArrowRight } from "lucide-react";

export const metadata = {
    title: "Services | Valley Atelier Home",
    description: "Our curated disciplines: Motorized Shades, Custom Doors, Driveway Gates, and Special Projects.",
};

export default function ServicesPage() {
    return (
        <main className="pt-24">
            <Section className="bg-background">
                <Container>
                    <span className="text-sm font-medium tracking-[0.2em] text-muted-foreground uppercase mb-6 block">
                        Our Expertise
                    </span>
                    <h1 className="text-5xl md:text-7xl font-heading font-light tracking-tight mb-16 max-w-4xl">
                        Disciplines of craft.
                    </h1>

                    <div className="grid grid-cols-1 gap-12">
                        {services.map((service, index) => (
                            <Link
                                key={service.slug}
                                href={`/services/${service.slug}`}
                                className="group border-t border-border/40 pt-12 hover:bg-secondary/10 transition-colors duration-500 rounded-lg p-6 -mx-6"
                            >
                                <div className="flex flex-col md:flex-row gap-8 justify-between md:items-start">
                                    <div className="md:w-1/4">
                                        <span className="text-xs font-medium text-muted-foreground">0{index + 1}</span>
                                        <h2 className="text-3xl font-heading font-light mt-2 group-hover:text-primary transition-colors">{service.title}</h2>
                                    </div>
                                    <div className="md:w-1/2">
                                        <p className="text-lg text-muted-foreground leading-relaxed max-w-xl group-hover:text-foreground transition-colors">
                                            {service.fullDescription}
                                        </p>
                                        <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-8">
                                            {service.features.map(f => (
                                                <li key={f} className="text-sm text-foreground/70 flex items-center">
                                                    <span className="w-1 h-1 bg-primary rounded-full mr-3" />
                                                    {f}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="md:w-1/6 flex justify-end md:justify-end items-start pt-2">
                                        <span className="h-10 w-10 rounded-full border border-border flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all duration-300">
                                            <ArrowRight className="h-4 w-4" />
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </Container>
            </Section>
        </main>
    );
}
