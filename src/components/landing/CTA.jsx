import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CTA = () => {
    return (
        <section id="cta" className="py-24">

            <div className="container mx-auto px-6">

                <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-primary via-violet-600 to-indigo-700 px-10 py-20 text-center text-white shadow-2xl">

                    {/* Background Blur */}

                    <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-white/10 blur-3xl" />

                    <div className="absolute -bottom-24 -right-24 w-80 h-80 rounded-full bg-cyan-400/20 blur-3xl" />

                    {/* Content */}

                    <div className="relative z-10 max-w-3xl mx-auto">

                        <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-sm">

                            <Sparkles className="w-4 h-4" />

                            Build smarter with AI

                        </div>

                        <h2 className="mt-8 text-4xl md:text-5xl font-bold leading-tight">

                            Ready To Build Your
                            <br />

                            Dream Resume?

                        </h2>

                        <p className="mt-6 text-lg text-white/80 leading-8">

                            Join thousands of students and professionals
                            creating ATS-friendly resumes in minutes with
                            ResumeCraft AI.

                        </p>

                        <Link to="/dashboard">

                            <Button
                                size="lg"
                                variant="secondary"
                                className="mt-10 gap-2 shadow-lg hover:scale-105 transition-transform"
                            >
                                Start Building

                                <ArrowRight className="w-4 h-4" />

                            </Button>

                        </Link>

                    </div>

                </div>

            </div>

        </section>
    );
};

export default CTA;