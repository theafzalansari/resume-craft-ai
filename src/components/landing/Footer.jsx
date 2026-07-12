import { Heart, FileText } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <footer id="footer" className="border-t bg-background">

            <div className="container mx-auto px-6 py-14">

                <div className="grid gap-10 md:grid-cols-3">

                    {/* Brand */}

                    <div>

                        <div className="flex items-center gap-2">

                            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">

                                <FileText className="w-5 h-5 text-white" />

                            </div>

                            <h2 className="text-2xl font-bold">
                                ResumeCraft AI
                            </h2>

                        </div>

                        <p className="mt-4 text-muted-foreground leading-7">

                            AI-powered resume builder designed to help
                            students and professionals create beautiful,
                            ATS-friendly resumes effortlessly.

                        </p>

                    </div>

                    {/* Quick Links */}

                    <div>

                        <h3 className="font-semibold text-lg mb-4">
                            Quick Links
                        </h3>

                        <div className="flex flex-col gap-3 text-muted-foreground">

                            <a
                                href="#hero"
                                className="hover:text-primary transition-colors"
                            >
                                Home
                            </a>

                            <a
                                href="#features"
                                className="hover:text-primary transition-colors"
                            >
                                Features
                            </a>

                            <a
                                href="#how-it-works"
                                className="hover:text-primary transition-colors"
                            >
                                How It Works
                            </a>

                            <a
                                href="#cta"
                                className="hover:text-primary transition-colors"
                            >
                                Get Started
                            </a>

                        </div>

                    </div>

                    {/* Social */}

                    <div>

                        <h3 className="font-semibold text-lg mb-4">
                            Connect
                        </h3>

                        <div className="flex gap-4">

                            <a
                                href="https://github.com/theafzalansari"
                                target="_blank"
                                rel="noreferrer"
                                className="w-11 h-11 rounded-xl border flex items-center justify-center hover:bg-primary hover:text-white transition"
                            >
                                <FaGithub className="w-5 h-5" />
                            </a>

                            <a
                                href="https://www.linkedin.com/in/afzal-ansari-312942370/"
                                target="_blank"
                                rel="noreferrer"
                                className="w-11 h-11 rounded-xl border flex items-center justify-center hover:bg-primary hover:text-white transition"
                            >
                                <FaLinkedin className="w-5 h-5" />
                            </a>

                        </div>

                    </div>

                </div>

                {/* Bottom */}

                <div className="border-t mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">

                    <p className="text-sm text-muted-foreground">

                        © {new Date().getFullYear()} ResumeCraft AI.
                        All rights reserved.

                    </p>

                    <p className="flex items-center gap-2 text-sm text-muted-foreground">

                        Made with

                        <Heart
                            className="w-4 h-4 text-red-500 fill-red-500"
                        />

                        by Afzal Ansari

                    </p>

                </div>

            </div>

        </footer>
    );
};

export default Footer;