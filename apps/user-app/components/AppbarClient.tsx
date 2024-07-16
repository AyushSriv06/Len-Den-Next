"use client"
import { Appbar } from "@repo/ui/appbar"
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation"

export function AppbarClient() {
    const router = useRouter();
    const session = useSession();

    return ( <div>
        <Appbar onSignin={signIn} onSignout={async() => {
            await signOut()
            router.push("/api/auth/signin")
        }} user={session.data?.user}></Appbar>
        </div>
    )
}