import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> { }

export function Section({ className, children, ...props }: SectionProps) {
    return (
        <section
            className={cn("py-24 md:py-32", className)}
            {...props}
        >
            {children}
        </section>
    );
}
