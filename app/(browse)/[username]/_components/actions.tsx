'use client'

import { toast } from "sonner";
import { useTransition } from "react";

import { Button } from "@/components/ui/button";
import { onFollow, onUnfollow } from "@/actions/follow";
import { onBlock, onUnblock } from "@/actions/block";

interface ActionsProps {
    isFollowing: boolean;
    userId: string;
};

export const Actions = ({ isFollowing, userId }: ActionsProps) => {
    const [isPending, startTransition] = useTransition();

    const handleFollow = () => {
        startTransition(() => {
            onFollow(userId).then((data) => {
                toast.success(`Your are now following ${data.following.username}`);
            }).catch(() => {
                toast.error("Something went wrong");
            })
        })
    };

    const handleUnfollow = () => {
        startTransition(() => {
            onUnfollow(userId).then((data) => {
                toast.success(`Your have unfollowed ${data.following.username}`);
            }).catch(() => {
                toast.error("Something went wrong");
            })
        })
    };

    const onClick = () => {
        if (isFollowing) {
            handleUnfollow();
        } else {
            handleFollow();
        }
    };

    const handleBlock = () => {
        startTransition(() => {
            onUnblock(userId).then((data) => {
                toast.success(`unBlocked the user ${data.blocked.username}`);
            }).catch(() => {
                toast.error("Something went wrong");
            });
        });
    };

    return (
        <>
            <Button disabled={isPending} variant={isFollowing ? "secondary" : "primary"} onClick={onClick}>
                {isFollowing ? "Following" : "Follow"}
            </Button>

            <Button onClick={handleBlock} disabled={isPending}>
                Unblock
            </Button>
        </>
    );
};