import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import FormSection from "@/dashboard/resume/components/FormSection.jsx";
import ResumePreview from "@/dashboard/resume/components/ResumePreview.jsx";
import { ResumeInfoContext } from "@/context/ResumeInfoContext.jsx";
import dummy from "@/data/dummy.jsx";
import GlobalApi from "../../../../../service/GlobalApi.js";

const EditResume = () => {
    const params = useParams();
    const [resumeInfo, setResumeInfo] = useState();

    useEffect(() => {
        if (params.resumeid) {
            GetResumeInfo();
        }
    }, [params.resumeid]);

    const GetResumeInfo = async () => {
        try {
            const res = await GlobalApi.GetResumeById(params.resumeid);

            console.log("Resume:", res.data.data);

            setResumeInfo(res.data.data);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <ResumeInfoContext.Provider value={{ resumeInfo, setResumeInfo }}>
            <div className="grid grid-cols-1 md:grid-cols-2 p-10 gap-10">
                {/* Form Section */}
                <FormSection />

                {/* Preview Section */}
                <ResumePreview />
            </div>
        </ResumeInfoContext.Provider>
    );
};

export default EditResume;