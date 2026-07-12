import React, { useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";

import PersonalDetail from "@/dashboard/resume/components/forms/PersonalDetail.jsx";
import Summary from "@/dashboard/resume/components/forms/Summary.jsx";
import Experience from "@/dashboard/resume/components/forms/Experience.jsx";
import Education from "@/dashboard/resume/components/forms/Education.jsx";
import Skills from "@/dashboard/resume/components/forms/Skills.jsx";
import Projects from "@/dashboard/resume/components/forms/Projects.jsx";

import { Button } from "@/components/ui/button";
import {
    ArrowLeft,
    ArrowRight,
    Home,
    LayoutGridIcon,
} from "lucide-react";
import ThemeColor from "@/dashboard/resume/components/ThemeColor.jsx";

const FormSection = () => {
    const { resumeid } = useParams();

    const [activeFormIndex, setActiveFormIndex] = useState(1);
    const [enableNext, setEnableNext] = useState(false);

    return (
        <div>

            {/* Top Buttons */}
            <div className="flex justify-between items-center">

                <div className="flex gap-3">

                    <Link to="/dashboard">
                        <Button size="sm">
                            <Home />
                        </Button>
                    </Link>
                    <ThemeColor />


                </div>

                <div className="flex gap-2">

                    {activeFormIndex > 1 && (
                        <Button
                            size="sm"
                            variant="outline"
                            onClick={() =>
                                setActiveFormIndex(activeFormIndex - 1)
                            }
                        >
                            <ArrowLeft />
                        </Button>
                    )}

                    <Button
                        size="sm"
                        className="flex gap-2"
                        disabled={!enableNext}
                        onClick={() =>
                            setActiveFormIndex(activeFormIndex + 1)
                        }
                    >
                        Next
                        <ArrowRight />
                    </Button>

                </div>

            </div>

            {/* Forms */}

            {activeFormIndex === 1 ? (
                <PersonalDetail enabledNext={setEnableNext} />
            ) : activeFormIndex === 2 ? (
                <Summary enabledNext={setEnableNext} />
            ) : activeFormIndex === 3 ? (
                <Experience enabledNext={setEnableNext} />
            ) : activeFormIndex === 4 ? (
                <Education enabledNext={setEnableNext} />
            ) : activeFormIndex === 5 ? (
                <Skills enabledNext={setEnableNext} />
            ) : activeFormIndex === 6 ? (
                <Projects enabledNext={setEnableNext} />
            ) : activeFormIndex === 7 ? (
                <Navigate to={`/my-resume/${resumeid}/view`} />
            ) : null}

        </div>
    );
};

export default FormSection;