import React, { useState, useEffect } from 'react'
import Header from "@/components/custom/Header.jsx";
import { Button } from "@/components/ui/button";
import ResumePreview from "@/dashboard/resume/components/ResumePreview.jsx";
import { ResumeInfoContext } from "@/context/ResumeInfoContext.jsx";
import GlobalApi from "../../../../service/GlobalApi.js";
import { useParams } from "react-router-dom";
import { Download, Share2, PartyPopper } from "lucide-react";

const ViewResume = () => {
    const [resumeInfo, setResumeInfo] = useState();
    const { resumeid } = useParams();

    useEffect(() => {
        GetResumeInfo();
    }, []);

    const GetResumeInfo = () => {
        GlobalApi.GetResumeById(resumeid).then((res) => {
            console.log(res.data.data);
            setResumeInfo(res.data.data);
        });
    };

    const HandleDownload = () => {
        window.print();
    };

    const handleShare = async () => {
        if (navigator.share) {
            try {
                await navigator.share({
                    title: "My Resume",
                    text: "Check out my resume!",
                    url: window.location.href,
                });
            } catch (err) {
                console.log(err);
            }
        } else {
            navigator.clipboard.writeText(window.location.href);
            alert("Link copied!");
        }
    };

    return (
        <ResumeInfoContext.Provider value={{ resumeInfo, setResumeInfo }}>
            <div id="no-print">
                <Header />

                <div className="min-h-[calc(100vh-80px)] bg-gradient-to-b from-primary/5 via-background to-background">
                    <div className="max-w-2xl mx-auto px-6 pt-16 pb-10 text-center">

                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-6 animate-in zoom-in duration-500">
                            <PartyPopper className="w-8 h-8 text-primary" strokeWidth={1.75} />
                        </div>

                        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-3">
                            Congrats! Your resume is ready
                        </h2>

                        <p className="text-muted-foreground text-base leading-relaxed max-w-md mx-auto">
                            Your AI-crafted resume is polished and ready to go. Download it now or share a unique link with anyone.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-10">
                            <Button
                                onClick={HandleDownload}
                                size="lg"
                                className="w-full sm:w-auto gap-2 shadow-sm hover:shadow-md transition-shadow"
                            >
                                <Download className="w-4 h-4" />
                                Download Resume
                            </Button>

                            <Button
                                onClick={handleShare}
                                variant="outline"
                                size="lg"
                                className="w-full sm:w-auto gap-2"
                            >
                                <Share2 className="w-4 h-4" />
                                Share Resume
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Single source of truth — visible on screen AND used for print */}
            <div id="print-area" className="max-w-4xl mx-auto px-4 pb-16">
                <div className="rounded-2xl border border-border/60 bg-card shadow-sm p-2 md:p-4 print:border-none print:shadow-none print:p-0 print:rounded-none">
                    {resumeInfo && <ResumePreview />}
                </div>
            </div>
        </ResumeInfoContext.Provider>
    );
};

export default ViewResume;