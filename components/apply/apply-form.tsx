"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Check, ChevronRight, ChevronLeft } from "lucide-react";

type Step = "fit" | "details" | "contact" | "success";

interface FormData {
    // Step 1: Fit
    serviceArea: string;
    projectCategory: string;
    timeline: string;
    investment: string;
    // Step 2: Details
    address: string;
    notes: string;
    // Step 3: Contact
    name: string;
    email: string;
    phone: string;
    consent: boolean;
}

export function ApplyForm() {
    const [step, setStep] = useState<Step>("fit");
    const [formData, setFormData] = useState<FormData>({
        serviceArea: "",
        projectCategory: "",
        timeline: "",
        investment: "",
        address: "",
        notes: "",
        name: "",
        email: "",
        phone: "",
        consent: false,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.checked }));
    };

    const nextStep = () => {
        if (step === "fit") setStep("details");
        else if (step === "details") setStep("contact");
        else if (step === "contact") setStep("success");
    };

    const prevStep = () => {
        if (step === "details") setStep("fit");
        else if (step === "contact") setStep("details");
    };

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        const payload = {
            fit: {
                serviceArea: formData.serviceArea,
                projectType: formData.projectCategory,
                timeline: formData.timeline,
                budget: formData.investment,
            },
            details: {
                address: formData.address,
                notes: formData.notes,
            },
            contact: {
                name: formData.name,
                email: formData.email,
                phone: formData.phone,
            },
        };

        try {
            const response = await fetch('/api/apply', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            });

            if (response.ok) {
                setStep("success");
            } else {
                alert("Something went wrong. Please try again.");
            }
        } catch (error) {
            console.error(error);
            alert("Error submitting form.");
        } finally {
            setIsSubmitting(false);
        }
    };

    if (step === "success") {
        return (
            <div className="text-center animate-in fade-in zoom-in duration-500 max-w-lg mx-auto py-12 border border-border/20 p-8 rounded-lg bg-secondary/5">
                <div className="h-16 w-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-6">
                    <Check className="h-8 w-8" />
                </div>
                <h2 className="text-3xl font-heading font-light mb-4">Application Received.</h2>
                <p className="text-muted-foreground leading-relaxed mb-8">
                    Thanks—if it’s a match, we’ll reach out with next steps. If not, we’ll let you know promptly and, when possible, suggest an alternative.
                </p>
                <Button variant="outline" onClick={() => window.location.href = '/'}>Return Home</Button>
            </div>
        );
    }

    return (
        <div className="max-w-xl mx-auto border border-border/20 p-6 md:p-10 rounded-lg bg-background shadow-sm">
            <div className="flex justify-between items-center mb-8 text-xs font-medium uppercase tracking-widest text-muted-foreground">
                <span className={cn(step === "fit" && "text-primary")}>01 Fit</span>
                <span className="h-px w-8 bg-border/40" />
                <span className={cn(step === "details" && "text-primary")}>02 Details</span>
                <span className="h-px w-8 bg-border/40" />
                <span className={cn(step === "contact" && "text-primary")}>03 Contact</span>
            </div>

            <form onSubmit={handleSubmit}>
                {step === "fit" && (
                    <div className="space-y-6 animate-in slide-in-from-right duration-300">
                        <h2 className="text-2xl font-light">Let's check the fit.</h2>

                        <div className="space-y-2">
                            <label className="text-sm font-medium">Service Area</label>
                            <select
                                name="serviceArea"
                                value={formData.serviceArea}
                                onChange={handleChange}
                                className="w-full h-11 px-3 rounded-md border border-input bg-background/50 focus:outline-none focus:ring-1 focus:ring-ring"
                                required
                            >
                                <option value="" disabled>Select your location</option>
                                <option value="Huntsville">Huntsville / Madison</option>
                                <option value="Decatur">Decatur / Athens</option>
                                <option value="Guntersville">Guntersville</option>
                                <option value="Shoals">The Shoals</option>
                                <option value="Other">Other (North AL/TN Valley)</option>
                            </select>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium">Project Category</label>
                            <select
                                name="projectCategory"
                                value={formData.projectCategory}
                                onChange={handleChange}
                                className="w-full h-11 px-3 rounded-md border border-input bg-background/50 focus:outline-none focus:ring-1 focus:ring-ring"
                                required
                            >
                                <option value="" disabled>What are you looking for?</option>
                                <option value="Shades">Motorized Shades</option>
                                <option value="Doors">Custom Doors</option>
                                <option value="Gates">Driveway Gates</option>
                                <option value="Special">Special Project</option>
                                <option value="Multiple">Multiple Categories</option>
                            </select>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium">Timeline</label>
                            <select
                                name="timeline"
                                value={formData.timeline}
                                onChange={handleChange}
                                className="w-full h-11 px-3 rounded-md border border-input bg-background/50 focus:outline-none focus:ring-1 focus:ring-ring"
                                required
                            >
                                <option value="" disabled>When do you need this?</option>
                                <option value="ASAP">As soon as possible (Rush)</option>
                                <option value="1-3">1-3 Months</option>
                                <option value="3-6">3-6 Months</option>
                                <option value="6+">6+ Months (Planning phase)</option>
                            </select>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium">Investment Range</label>
                            <select
                                name="investment"
                                value={formData.investment}
                                onChange={handleChange}
                                className="w-full h-11 px-3 rounded-md border border-input bg-background/50 focus:outline-none focus:ring-1 focus:ring-ring"
                                required
                            >
                                <option value="" disabled>Anticipated budget</option>
                                <option value="5-10k">$5k - $10k</option>
                                <option value="10-25k">$10k - $25k</option>
                                <option value="25-50k">$25k - $50k</option>
                                <option value="50k+">$50k+</option>
                            </select>
                        </div>

                        <div className="flex justify-end pt-4">
                            <Button type="button" onClick={nextStep} disabled={!formData.serviceArea}>
                                Next Step <ChevronRight className="ml-2 h-4 w-4" />
                            </Button>
                        </div>
                    </div>
                )}

                {step === "details" && (
                    <div className="space-y-6 animate-in slide-in-from-right duration-300">
                        <h2 className="text-2xl font-light">Project details.</h2>

                        <div className="space-y-2">
                            <label className="text-sm font-medium">Property Address</label>
                            <input
                                type="text"
                                name="address"
                                value={formData.address}
                                onChange={handleChange}
                                placeholder="Street Address, City"
                                className="w-full h-11 px-3 rounded-md border border-input bg-background/50 focus:outline-none focus:ring-1 focus:ring-ring"
                                required
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium">Notes & Vision</label>
                            <textarea
                                name="notes"
                                value={formData.notes}
                                onChange={handleChange}
                                placeholder="What outcome are you aiming for? Any specific constraints?"
                                className="w-full min-h-[120px] p-3 rounded-md border border-input bg-background/50 focus:outline-none focus:ring-1 focus:ring-ring"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium">Photos / Plans (Optional)</label>
                            <div className="border-2 border-dashed border-border/50 rounded-md p-6 text-center text-sm text-muted-foreground hover:bg-secondary/10 cursor-pointer transition-colors">
                                Click to upload relevant files
                            </div>
                        </div>

                        <div className="flex justify-between pt-4">
                            <Button type="button" variant="ghost" onClick={prevStep}>
                                <ChevronLeft className="mr-2 h-4 w-4" /> Back
                            </Button>
                            <Button type="button" onClick={nextStep} disabled={!formData.address}>
                                Next Step <ChevronRight className="ml-2 h-4 w-4" />
                            </Button>
                        </div>
                    </div>
                )}

                {step === "contact" && (
                    <div className="space-y-6 animate-in slide-in-from-right duration-300">
                        <h2 className="text-2xl font-light">Contact & Confirm.</h2>

                        <div className="space-y-2">
                            <label className="text-sm font-medium">Name</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full h-11 px-3 rounded-md border border-input bg-background/50 focus:outline-none focus:ring-1 focus:ring-ring"
                                required
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label className="text-sm font-medium">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full h-11 px-3 rounded-md border border-input bg-background/50 focus:outline-none focus:ring-1 focus:ring-ring"
                                    required
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium">Phone</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="w-full h-11 px-3 rounded-md border border-input bg-background/50 focus:outline-none focus:ring-1 focus:ring-ring"
                                    required
                                />
                            </div>
                        </div>

                        <div className="flex items-start gap-3 mt-6 p-4 bg-muted/30 rounded-md">
                            <input
                                type="checkbox"
                                name="consent"
                                checked={formData.consent}
                                onChange={handleCheckboxChange}
                                className="mt-1"
                                required
                            />
                            <label className="text-sm text-muted-foreground leading-snug">
                                I understand Valley Atelier Home selectively accepts projects based on fit and schedule. Submitting this form does not guarantee acceptance.
                            </label>
                        </div>

                        <div className="flex justify-between pt-4">
                            <Button type="button" variant="ghost" onClick={prevStep}>
                                <ChevronLeft className="mr-2 h-4 w-4" /> Back
                            </Button>
                            <Button type="submit" disabled={!formData.consent || !formData.name || !formData.email || isSubmitting}>
                                {isSubmitting ? "Sending..." : "Submit Application"}
                            </Button>
                        </div>
                    </div>
                )}
            </form>
        </div>
    );
}
