import React, {useEffect, useState} from 'react'
import {useParams} from "react-router-dom";
import FormSection from "@/dashboard/resume/components/FormSection.jsx";
import ResumePreview from "@/dashboard/resume/components/ResumePreview.jsx";
import {ResumeInfoContext} from "@/context/ResumeInfoContext.jsx";
import dummy from "@/data/dummy.jsx";

const EditResume = () => {
    const params=useParams();
    const [resumeInfo, setResumeInfo] = useState();
    useEffect(()=>{
            setResumeInfo(dummy);
    },[])

    return (

        <ResumeInfoContext.Provider value={{resumeInfo, setResumeInfo}}>

        <div className='grid grid-cols-1 md:grid-cols-2 p-10 gap-10'>
            {/* Form Section */}
                <FormSection/>
            {/* Preview Section */}
                <ResumePreview/>
        </div>

        </ResumeInfoContext.Provider>
    )
}
export default EditResume
