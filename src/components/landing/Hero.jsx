import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
    return (
        <section id="hero" className="relative overflow-hidden">

            {/* Background Blur */}
            <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-violet-500/20 blur-[120px]" />
            <div className="absolute bottom-0 -right-32 h-96 w-96 rounded-full bg-cyan-500/20 blur-[120px]" />

            <div className="relative container mx-auto px-4 sm:px-6 py-16 sm:py-20 lg:py-32">

                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

                    {/* LEFT */}
                    <div>

                        <div className="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm mb-6 bg-background">
                            <Sparkles className="w-4 h-4 text-primary" />
                            AI Powered Resume Builder
                        </div>

                        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight">

                            Build Your Dream Resume

                            <span className="block bg-gradient-to-r from-primary to-violet-600 bg-clip-text text-transparent">
                                With Artificial Intelligence.
                            </span>

                        </h1>

                        <p className="mt-6 sm:mt-8 text-base sm:text-lg text-muted-foreground leading-7 sm:leading-8 max-w-xl">

                            Create ATS-friendly resumes in minutes.
                            Generate professional summaries, work experiences,
                            customize themes, preview instantly and download
                            beautiful resumes with one click.

                        </p>

                        <div className="flex mt-8 sm:mt-10">

                            <Link to="/dashboard" className="w-full sm:w-auto">

                                <Button
                                    size="lg"
                                    className="gap-2 w-full sm:w-auto"
                                >
                                    Get Started
                                    <ArrowRight className="w-4 h-4" />
                                </Button>

                            </Link>

                        </div>

                    </div>

                    {/* RIGHT */}
                    <div className="relative flex justify-center">

                        {/* Resume Card */}

                        <div className="w-full max-w-[420px] rounded-3xl bg-white shadow-2xl border p-6 sm:p-8 rotate-2 hover:rotate-0 transition duration-300">

                            <h2 className="text-2xl font-bold">
                                Afzal Ansari
                            </h2>

                            <p className="text-muted-foreground">
                                Full Stack Developer
                            </p>

                            <hr className="my-5" />

                            <div className="space-y-3">

                                <div className="h-3 bg-gray-200 rounded-full w-full" />

                                <div className="h-3 bg-gray-200 rounded-full w-5/6" />

                                <div className="h-3 bg-gray-200 rounded-full w-3/4" />

                            </div>

                            <div className="mt-8">

                                <h3 className="font-semibold mb-3">
                                    Experience
                                </h3>

                                <div className="space-y-3">

                                    <div className="h-2 bg-gray-200 rounded-full" />

                                    <div className="h-2 bg-gray-200 rounded-full w-4/5" />

                                    <div className="h-2 bg-gray-200 rounded-full w-2/3" />

                                </div>

                            </div>

                            <div className="mt-8">

                                <h3 className="font-semibold mb-3">
                                    Skills
                                </h3>

                                <div className="flex gap-2 flex-wrap">

                                    <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm">
                                        React
                                    </span>

                                    <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm">
                                        Node.js
                                    </span>

                                    <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm">
                                        Tailwind
                                    </span>

                                </div>

                            </div>

                        </div>

                        {/* Floating Cards */}

                        <div className="hidden sm:block absolute -top-6 -right-8 rounded-xl bg-white shadow-lg border px-4 py-2 animate-bounce">

                            ✨ AI Generated

                        </div>

                        <div className="hidden sm:block absolute top-1/2 -left-8 rounded-xl bg-white shadow-lg border px-4 py-2">

                            ✅ ATS Friendly

                        </div>

                        <div className="hidden sm:block absolute -bottom-6 right-4 rounded-xl bg-white shadow-lg border px-4 py-2">

                            🎨 20+ Themes

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
};

export default Hero;