import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { Button } from "@/components/ui/button";

const NotFoundPage = () => {
    return (
        <div className="h-full flex flex-col space-y-4 items-center justify-center text-muted-foreground">
            <h1 className="text-4xl">
                404
            </h1>

            <p className="">
                We couldn&apos;t find the page you were looking for.
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
 
export default NotFoundPage;