'use client'

import { useState } from "react";

import { CopyButton } from "./copy-button";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Eye, EyeOff } from "lucide-react";

interface KeyCardProps {
    value: string | null;
};

export const KeyCard = ({ value }: KeyCardProps) => {
    const [show, setShow] = useState(false);

    return (
        <div className="rounded-xl bg-muted p-6">
            <div className="flex items-start gap-x-10">
                <p className="font-medium shrink-0">
                    Stream Key
                </p>

                <div className="space-y-2 w-full">
                    <div className="w-full flex items-center gap-x-2">
                        <Input value={value || ""} type={show ? "text" : "password"} disabled placeholder="Stream Key" />
                        <CopyButton value={value || ""} />

                        <Button size="sm" variant="outline" onClick={() => setShow(!show)}>
                            {show ? <Eye className="h-5 w-5" /> : <EyeOff className="h-5 w-5" />}
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};