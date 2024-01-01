import Link from "next/link";
import Image from "next/image";

export const Logo = () => {
    return (
        <Link href="/">
            <div className="flex items-center gap-x-4 hover:opacity-75 transition">
                <div className="bg-white rounded-full p-1 mr-12 shrink-0 lg:mr-0 lg:shrink">
                    <Image src="/spooky.svg" alt="Twitch" height="32" width="32" />
                </div>

                <div className="hidden lg:block">
                    <p className="text-lg font-semibold tracking-tight">
                        Twitch Clone
                    </p>

                    <p className="text-xs text-muted-foreground">
                        Let&apos;s play
                    </p>
                </div>
            </div>
        </Link>
    );
};