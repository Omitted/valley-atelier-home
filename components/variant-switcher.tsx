"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";

export function VariantSwitcher() {
    const [isWarm, setIsWarm] = React.useState(false);

    React.useEffect(() => {
        if (isWarm) {
            document.body.classList.add("theme-warm");
        } else {
            document.body.classList.remove("theme-warm");
        }
    }, [isWarm]);

    return (
        <div className="fixed bottom-6 right-6 z-50 bg-background/80 backdrop-blur border border-border rounded-full p-1 flex gap-1 shadow-lg">
            <Button
                variant={!isWarm ? "default" : "ghost"}
                size="sm"
                onClick={() => setIsWarm(false)}
                className="rounded-full h-8 px-3 text-xs"
            >
                Cold / Minimal
            </Button>
            <Button
                variant={isWarm ? "default" : "ghost"}
                size="sm"
                onClick={() => setIsWarm(true)}
                className="rounded-full h-8 px-3 text-xs"
            >
                Warm / Organic
            </Button>
        </div>
    );
}
