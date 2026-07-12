import {
    Brain,
    FileText,
    Eye,
    Palette,
    Download,
    ShieldCheck,
} from "lucide-react";

const features = [
    {
        icon: Brain,
        title: "AI Resume Generation",
        description:
            "Generate professional summaries and work experience instantly using AI.",
    },
    {
        icon: FileText,
        title: "ATS Friendly",
        description:
            "Create resumes optimized for Applicant Tracking Systems used by top companies.",
    },
    {
        icon: Eye,
        title: "Live Preview",
        description:
            "Watch your resume update in real-time while editing every section.",
    },
    {
        icon: Palette,
        title: "Theme Customization",
        description:
            "Personalize your resume with multiple modern color themes.",
    },
    {
        icon: Download,
        title: "One Click Download",
        description:
            "Download your polished resume instantly as a clean printable PDF.",
    },
    {
        icon: ShieldCheck,
        title: "Secure Cloud Storage",
        description:
            "Your resumes are safely stored so you can edit them anytime.",
    },
];

const Features = () => {
    return (
        <section id="features" className="py-24 bg-muted/30">

            <div className="container mx-auto px-6">

                <div className="text-center max-w-3xl mx-auto">

                    <h2 className="text-4xl font-bold">
                        Everything You Need To Build
                        <span className="block text-primary">
                            The Perfect Resume
                        </span>
                    </h2>

                    <p className="mt-5 text-muted-foreground text-lg">
                        ResumeCraft AI provides everything you need to build,
                        customize and download professional resumes in minutes.
                    </p>

                </div>

                <div className="grid gap-8 mt-16 md:grid-cols-2 lg:grid-cols-3">

                    {features.map((feature, index) => {
                        const Icon = feature.icon;

                        return (
                            <div
                                key={index}
                                className="group rounded-2xl border bg-background p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                            >

                                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110">

                                    <Icon
                                        className="w-7 h-7 text-primary"
                                        strokeWidth={1.8}
                                    />

                                </div>

                                <h3 className="text-xl font-semibold mb-3">
                                    {feature.title}
                                </h3>

                                <p className="text-muted-foreground leading-7">
                                    {feature.description}
                                </p>

                            </div>
                        );
                    })}

                </div>

            </div>

        </section>
    );
};

export default Features;