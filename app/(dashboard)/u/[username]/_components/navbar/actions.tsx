import Link from "next/link";
import { LogOut } from "lucide-react";
import { SignInButton, UserButton, currentUser } from "@clerk/nextjs";

import { Button } from "@/components/ui/button";
import { Hint } from "@/components/hint";

export const Actions = () => {
    return (
        <div className="flex items-center justify-end gap-x-2">
            <Hint label="Exit">
                <Button size="sm" variant="ghost" className="text-muted-foreground hover:text-primary" asChild>
                    <Link href="/">
                        <LogOut className="h-5 w-5 mr-2" />
                    </Link>
                </Button>
            </Hint>

            <UserButton afterSignOutUrl="/" />
        </div>
    );
};