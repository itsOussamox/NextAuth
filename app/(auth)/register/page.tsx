import CardWrapper from "@/components/login/CardWrapper";
import RegisterForm from "@/components/login/RegisterForm";

export default function RegisterPage() {
    return (
        <div className="w-full h-full flex items-center justify-center">
            <CardWrapper
                headerLabel={'🔒Register AUTH'}
                backButtonLabel={'Already have an account? Login here.'}
                backButtonHref={'/login'}
                showSocial={false}
            >
                <RegisterForm />
            </CardWrapper>
        </div>
    )
}