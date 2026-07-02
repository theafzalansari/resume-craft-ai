import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom'
import {UserButton, useUser} from "@clerk/react";

const Header = () => {
    const { user, isSignedIn } = useUser();
    return (
        <div className="flex items-center justify-between px-6 py-4 shadow-md">
            <img
                src="/logo.svg"
                alt="ResumeCraft AI"
                className="h-10 w-auto"
            />
            {isSignedIn ?
                <div className="flex gap-2 items-center">
                    <Button variant="outline">Dashboard</Button>
                    <UserButton />
                </div> :
                <Link to={'/auth/sign-in'}>
                    <Button className="cursor-pointer">Get Started</Button>
                </Link>
            }

        </div>
    );
};

export default Header;