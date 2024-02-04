'use client'
import CardWrapper from '@/components/login/CardWrapper';
import LoginForm from '@/components/login/LoginForm';
import { Button } from '@/components/ui/button';
import React, { useState } from 'react';

const LoginPage: React.FC = () => {
    return (
        <div className='w-full h-full flex items-center justify-center'>
            <CardWrapper
                headerLabel={'🔒Login AUTH'}
                backButtonLabel={'Dont have an account? Register here.'}
                backButtonHref={'/register'}
                showSocial
            >
            <LoginForm />
            </CardWrapper>
        </div>

    );
};

export default LoginPage;