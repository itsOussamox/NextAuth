import { FcGoogle } from 'react-icons/fc'
import { FaGithub } from 'react-icons/fa'
import { Button } from '../ui/button'
import { Si42 } from "react-icons/si";
export default function Social() {
    return (
        <div className="w-full h-full flex-col">
            <p className="text-center text-white">Or sign in with</p>
            <div className="w-full flex justify-center gap-x-2 mt-2">
                <Button variant={"secondary"} className="w-1/2">
                    <FcGoogle className="w-full h-full" />
                </Button>

                <Button variant={"secondary"} className="w-1/2">
                    <FaGithub className="w-full h-full" />
                </Button>

                <Button variant={"secondary"} className="w-1/2">
                    <Si42 className="w-full h-full" />
                </Button>
            </div>
        </div>
    )

}