'use client'

import Link from "next/link";
import { ArrowLeft, ServerCrash } from "lucide-react";

import { Button } from "@/components/ui/button";

const ErrorPage = () => {
    return (
        <div className="h-full flex flex-col space-y-4 items-center justify-center text-muted-foreground">
            <p className="">
                Something went wrong !
            </p>

            <Button variant="secondary" asChild>
                <Link href="/">
                    <ArrowLeft className="h-4 w-4 mr-1" />
                    Back
                </Link>
            </Button>
        </div>
    );
};
 
export default ErrorPage;