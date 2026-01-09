import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

export const metadata = {
    title: "FAQ | Valley Atelier Home",
    description: "Common questions about our services and process.",
};

const faqs = [
    {
        q: "What areas do you serve?",
        a: "We primarily serve North Alabama including Huntsville, Madison, Decatur, Athens, and the Tennessee Valley area. We occasionally consider projects further afield depending on scope."
    },
    {
        q: "Do you sell products directly?",
        a: "Yes. We are authorized dealers for the premium brands we install. This ensures warranty coverage and seamless integration. We generally do not install customer-supplied materials to ensure quality control."
    },
    {
        q: "What is your typical lead time?",
        a: "Because we curate custom manufacturing, lead times vary by product. Custom shades often take 4-6 weeks; custom doors can take 10-14 weeks. We will provide a specific timeline during your consultation."
    },
    {
        q: "Do you work with builders and architects?",
        a: "Absolutely. We often partner with design professionals during the planning phase to ensure proper blocking, wiring, and structural preparation for our installations."
    }
];

export default function FaqPage() {
    return (
        <main className="pt-24">
            <Section>
                <Container className="max-w-3xl">
                    <h1 className="text-5xl md:text-6xl font-heading font-light tracking-tight mb-16">
                        Questions
                    </h1>

                    <div className="space-y-6">
                        {faqs.map((faq, i) => (
                            <details key={i} className="group border-b border-border/20 pb-6 cursor-pointer">
                                <summary className="flex justify-between items-center font-medium text-lg list-none focus:outline-none">
                                    {faq.q}
                                    <span className="transform transition-transform group-open:rotate-45 text-muted-foreground">+</span>
                                </summary>
                                <p className="mt-4 text-muted-foreground leading-relaxed animate-in fade-in slide-in-from-top-2 duration-300">
                                    {faq.a}
                                </p>
                            </details>
                        ))}
                    </div>
                </Container>
            </Section>
        </main>
    );
}
