import { Card, CardHeader, CardFooter,
    CardTitle, CardDescription,
    CardContent} from '@/components/ui/card';
import { Poppins } from "next/font/google"
import Social from './Social';
import Link from 'next/link';

const font = Poppins({
    subsets: ["latin"],
    weight: ["600"],
})
interface CardWrapperProps {
    children: React.ReactNode;
    headerLabel: string;
    backButtonLabel: string;
    backButtonHref: string;
    showSocial?: boolean;
}

export default function CardWrapper
({children, headerLabel, backButtonLabel, backButtonHref, showSocial}: CardWrapperProps){
    return (
        <Card className='w-[400px] shadow-xl'>
            <CardHeader>
                <CardTitle className={font.className}>{headerLabel}</CardTitle>
                <CardDescription>Welcome Back.</CardDescription>
            </CardHeader>
            <CardContent>
                {children}
            </CardContent>
            {showSocial && (
                <CardFooter>
                <Social />
                </CardFooter>
            )}
            <CardFooter className='justify-center items-center flex-col'>
                <Link href={backButtonHref} className='text-sm hover:underline '>{backButtonLabel}</Link>
            </CardFooter>
        </Card>
    );
}