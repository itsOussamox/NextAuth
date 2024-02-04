import { Button } from "@/components/ui/button";
import { Poppins } from "next/font/google";
import Link from "next/link";

const font = Poppins({
    subsets: ['latin'],
    weight: ['600'],
});

function HomeLogin(){
    return (
        <div>
            <div className="flex flex-col items-center justify-center h-[60vh] w-[40vw] bg-white/[0.1] rounded-[5%] outline outline-1 outline-white/[.2]
            gap-y-6">
                <h1 className={"text-white text-center font-semibold text-3xl " + font.className}>🔒NEXT AUTH</h1>
                <p className="text-white text-center ">A simple authentication using Next.</p>
                <Link href={"/login"}><Button variant={'secondary'}>Sign In</Button></Link>
            </div>
        </div>
    );
}
export default function Home() {
  return (
    <main className="h-full w-full flex flex-col items-center justify-center">
      <HomeLogin />
    </main>
  );
}
