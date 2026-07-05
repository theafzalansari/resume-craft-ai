import React, {useContext} from 'react'
import {ResumeInfoContext} from "@/context/ResumeInfoContext.jsx";

function ResumePreview() {
    const {resumeInfo,setResumeInfo}=useContext(ResumeInfoContext);
}

const ResumePreview = () => {
    return (
        <div>
            {/*Personal Details*/}

            {/*Summary*/}

            {/*Professional Experience*/}

            {/*Educational Details*/}

            {/*Skills*/}
        </div>
    )
}
export default ResumePreview
