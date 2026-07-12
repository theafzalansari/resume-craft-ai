import React from "react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { UserButton, useUser } from "@clerk/react";
import { FileText } from "lucide-react";

const Header = () => {
    const { isSignedIn } = useUser();
    const location = useLocation();

    const isHomePage = location.pathname === "/";

    const navLinks = [
        { href: "#features", label: "Features" },
        { href: "#how-it-works", label: "How It Works" },
        { href: "#cta", label: "Get Started" },
    ];

    return (
        <header className="sticky top-0 z-50 bg-background/70 backdrop-blur-xl border-b border-border/60 supports-[backdrop-filter]:bg-background/60">
            <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3.5">

                {/* Logo */}
                <Link to="/" className="flex items-center gap-2.5 group">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-fuchsia-500 to-sky-500 flex items-center justify-center shadow-sm transition-transform duration-300 group-hover:scale-105 group-hover:rotate-3">
                        <FileText className="w-4.5 h-4.5 text-white" strokeWidth={2} />
                    </div>
                    <span className="text-lg font-semibold tracking-tight">
                        ResumeCraft <span className="text-primary">AI</span>
                    </span>
                </Link>

                {/* Nav */}
                {isHomePage && (
                    <nav className="hidden md:flex items-center gap-1 text-sm font-medium">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className="relative px-3.5 py-2 rounded-md text-muted-foreground hover:text-foreground transition-colors duration-200 hover:bg-muted/60"
                            >
                                {link.label}
                            </a>
                        ))}
                    </nav>
                )}

                {/* Auth actions */}
                {isSignedIn ? (
                    <div className="flex gap-3 items-center">
                        {!isHomePage && (
                            <Link to="/dashboard">
                                <Button variant="outline" size="sm" className="shadow-sm">
                                    Dashboard
                                </Button>
                            </Link>
                        )}
                        <div className="ring-2 ring-border/60 rounded-full transition-all hover:ring-primary/40">
                            <UserButton />
                        </div>
                    </div>
                ) : (
                    <Link to="/auth/sign-in">
                        <Button size="sm" className="shadow-sm hover:shadow-md transition-shadow px-5">
                            Get Started
                        </Button>
                    </Link>
                )}
            </div>
        </header>
    );
};

export default Header;