import { Button } from "./button";

interface AppbarProps {
    user?: {
        name?: string | null;
    },
    onSignin: any,
    onSignout: any
}

export const Appbar = ({
    user,
    onSignin,
    onSignout
}: AppbarProps) => {
    return <div className="flex justify-between border-b  border-slate-300 px-4 ">
 <div className="text-2xl pt-3 font-bold text-blue-600">
                <span className="text-blue-800">Le</span>
                <span className="text-blue-500">N-</span>
                <span className="text-blue-800">de</span>
                <span className="text-blue-500">N</span>
            </div>
        <div className="flex flex-col justify-center pt-2">
            <Button onClick={user ? onSignout : onSignin}>{user ? "Logout" : "Login"}</Button>
        </div>
    </div>
}