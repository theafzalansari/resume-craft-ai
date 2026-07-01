import React from 'react'
import { Button } from "@/components/ui/button";
import {SignIn} from "@clerk/react";

const SignInPage = () => {
    return (
        <div className='flex justify-center my-20 items-center'>
            <SignIn></SignIn>
        </div>
    )
}
export default SignInPage
