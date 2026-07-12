import {
    UserRound,
    Brain,
    Palette,
    Download,
    ArrowDown,
} from "lucide-react";

const steps = [
    {
        icon: UserRound,
        title: "Fill Your Details",
        description:
            "Enter your personal information, education, skills, projects and experience.",
    },
    {
        icon: Brain,
        title: "Generate With AI",
        description:
            "Let AI create professional summaries and work experience tailored for your resume.",
    },
    {
        icon: Palette,
        title: "Customize",
        description:
            "Choose your favorite theme color and preview every change in real time.",
    },
    {
        icon: Download,
        title: "Download Resume",
        description:
            "Export your resume instantly as a clean, ATS-friendly PDF ready to apply.",
    },
];

const HowItWorks = () => {
    return (
        <section id="how-it-works" className="py-24">

            <div className="container mx-auto px-6">

                <div className="text-center max-w-3xl mx-auto">

                    <h2 className="text-4xl font-bold">
                        Create Your Resume
                        <span className="block text-primary">
                            In 4 Simple Steps
                        </span>
                    </h2>

                    <p className="mt-5 text-muted-foreground text-lg">
                        Building a professional resume has never been easier.
                        Just follow these simple steps.
                    </p>

                </div>

                <div className="mt-20">

                    <div className="grid md:grid-cols-4 gap-10">

                        {steps.map((step, index) => {
                            const Icon = step.icon;

                            return (
                                <div
                                    key={index}
                                    className="relative text-center group"
                                >

                                    {/* Circle */}

                                    <div className="mx-auto w-20 h-20 rounded-full bg-primary text-white flex items-center justify-center shadow-lg transition-all duration-300 group-hover:scale-110">

                                        <Icon
                                            className="w-9 h-9"
                                            strokeWidth={1.8}
                                        />

                                    </div>

                                    {/* Arrow */}

                                    {index !== steps.length - 1 && (
                                        <div className="hidden md:block absolute top-10 left-full -translate-x-5">
                                            <ArrowDown className="rotate-[-90deg] text-primary/40" />
                                        </div>
                                    )}

                                    {/* Step Number */}

                                    <div className="mt-5 inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-semibold">
                                        {index + 1}
                                    </div>

                                    <h3 className="mt-4 text-xl font-semibold">
                                        {step.title}
                                    </h3>

                                    <p className="mt-3 text-muted-foreground leading-7">
                                        {step.description}
                                    </p>

                                </div>
                            );
                        })}

                    </div>

                </div>

            </div>

        </section>
    );
};

export default HowItWorks;