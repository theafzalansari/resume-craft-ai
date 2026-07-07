import React, {useContext} from 'react'
import {ResumeInfoContext} from "@/context/ResumeInfoContext.jsx";
import PersonalDetailPreview from "@/dashboard/resume/components/Preview/PersonalDetailPreview.jsx";
import SummaryPreview from "@/dashboard/resume/components/Preview/SummaryPreview.jsx";
import ExperiencePreview from "@/dashboard/resume/components/Preview/ExperiencePreview.jsx";
import EducationalPreview from "@/dashboard/resume/components/Preview/EducationalPreview.jsx";
import SkillsPreview from "@/dashboard/resume/components/Preview/SkillsPreview.jsx";
import ProjectsPreview from "@/dashboard/resume/components/Preview/ProjectsPreview.jsx";

function ResumePreview() {
    const {resumeInfo, setResumeInfo} = useContext(ResumeInfoContext);

    return (
        <div className='shadow-lg h-full p-14 border-t-[20px]'
             style={{
                 borderColor: resumeInfo?.themeColor
             }}
        >
            {/*Personal Details*/}
            <PersonalDetailPreview resumeInfo={resumeInfo}/>
            {/*Summary*/}
            <SummaryPreview resumeInfo={resumeInfo}/>
            {/*Professional Experience*/}
            <ExperiencePreview resumeInfo={resumeInfo}/>
            {/*Educational Details*/}
            <EducationalPreview resumeInfo={resumeInfo}/>
            {/*Skills*/}
            <SkillsPreview resumeInfo={resumeInfo}/>
            {/*Projects*/}
            <ProjectsPreview resumeInfo={resumeInfo}/>
        </div>
    )
}

export default ResumePreview
