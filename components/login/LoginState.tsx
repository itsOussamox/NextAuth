import { ExclamationTriangleIcon } from "@radix-ui/react-icons";
import { FcApproval } from "react-icons/fc";

export function FormError({message}:  {message: string | undefined}) {
    if (!message) return null;
    return (
        <div className="bg-destructive/15 p-3 rounded-md flex items-center
        gap-x-2 text-sm text-destructive">
            <ExclamationTriangleIcon className="h-full"/>
            <span>{message}</span>
        </div>
    )
}

export function FormSuccess({message}:  {message: string | undefined}) {
    if (!message) return null;
    return (
        <div className="bg-emerald-500/15 p-3 rounded-md flex items-center
        gap-x-2 text-sm text-emerald-500">
            <FcApproval className="h-full"/>
            <span>{message}</span>
        </div>
    )
}