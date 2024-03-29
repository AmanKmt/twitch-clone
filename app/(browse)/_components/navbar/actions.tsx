import { SignInButton, UserButton, currentUser } from "@clerk/nextjs";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Airplay } from "lucide-react";

export const Actions = async () => {
    const user = await currentUser();

    return (
        <div className="flex items-center justify-end gap-x-2 ml-4 lg:ml-0">
            {!user && (
                <SignInButton>
                    <Button>
                        Sign In
                    </Button>
                </SignInButton>
            )}

            {!!user && (
                <div className="flex items-center gap-x-4">
                    <Button size="sm" variant="ghost" className="text-muted-foreground hover:text-primary transition" asChild>
                        <Link href={`/u/${user.username}`}>
                            <Airplay className="h-5 w-5 lg:mr-2" />

                            <span className="hidden lg:block">
                                Stream
                            </span>
                        </Link>
                    </Button>

                    <UserButton afterSignOutUrl="/" />
                </div>
            )}
        </div>
    );
};