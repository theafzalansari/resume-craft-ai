import React from 'react'
import PersonalDetail from "@/dashboard/resume/components/forms/PersonalDetail.jsx";
import {Button} from "@/components/ui/button";
import {ArrowLeft, ArrowRight, LayoutGridIcon} from "lucide-react";
import {useState} from "react";
import Summary from "@/dashboard/resume/components/forms/Summary.jsx";
import Experience from "@/dashboard/resume/components/forms/Experience.jsx";
import Education from "@/dashboard/resume/components/forms/Education.jsx";
import Skills from "@/dashboard/resume/components/forms/Skills.jsx";
import Projects from "@/dashboard/resume/components/forms/Projects.jsx";
import {Navigate, useParams} from "react-router-dom";

const FormSection = () => {
    const {resumeid} = useParams();
    const [activeFormIndex, setActiveFormIndex] = useState(1);

    const [enableNext, setEnableNext] = useState(false);

    return (
        <div>

            <div className='flex justify-between items-center'>
                <Button variant="outline" size="sm" className="flex gap-2"> <LayoutGridIcon/> Theme</Button>
                <div className="flex gap-2">

                    {activeFormIndex > 1 && <Button size="sm"
                                                    onClick={() => setActiveFormIndex(activeFormIndex - 1)}
                    > <ArrowLeft/> </Button>}

                    <Button
                        disabled={!enableNext}
                        className='flex gap-2' size="sm"
                        onClick={() => setActiveFormIndex(activeFormIndex + 1)}
                    >Next <ArrowRight/></Button>
                </div>
            </div>

            {/*Personal Detail*/}
            {activeFormIndex == 1 ? <PersonalDetail enabledNext={(v) => setEnableNext(v)}/>
                : activeFormIndex == 2 ? <Summary enabledNext={(v) => setEnableNext(v)}/>
                    : activeFormIndex == 3 ? <Experience enabledNext={(v) => setEnableNext(v)}/>
                        : activeFormIndex == 4 ? <Education enabledNext={(v) => setEnableNext(v)}/>
                            :activeFormIndex == 5 ? <Skills enabledNext={(v) => setEnableNext(v)}/>
                                : activeFormIndex==6 ? <Projects enabledNext={(v) => setEnableNext(v)}/>
                                    : activeFormIndex==7? <Navigate to={'/my-resume/'+resumeid+'/view'}/>:null
            }


            {/*Projects*/}

        </div>
    )
}
export default FormSection
