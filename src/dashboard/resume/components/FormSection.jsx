import React from 'react'
import PersonalDetail from "@/dashboard/resume/components/forms/PersonalDetail.jsx";
import {Button} from "@/components/ui/button";
import {ArrowLeft, ArrowRight, LayoutGridIcon} from "lucide-react";
import {useState} from "react";

const FormSection = () => {

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
            {activeFormIndex==1? <PersonalDetail enabledNext={(v)=>setEnableNext(v)} /> : null}

            {/*Summary*/}

            {/*Experience*/}

            {/*Education*/}

            {/*Skills*/}

            {/*Projects*/}

        </div>
    )
}
export default FormSection
