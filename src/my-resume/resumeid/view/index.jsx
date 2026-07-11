import React, {useState, useEffect} from 'react'
import Header from "@/components/custom/Header.jsx";
import { Button } from "@/components/ui/button";
import ResumePreview from "@/dashboard/resume/components/ResumePreview.jsx";
import {ResumeInfoContext} from "@/context/ResumeInfoContext.jsx";
import GlobalApi from "../../../../service/GlobalApi.js";
import {useParams} from "react-router-dom";

const ViewResume = () => {
    const [resumeInfo, setResumeInfo] = useState();
    const {resumeid} = useParams()

    useEffect(() => {
        GetResumeInfo();
    },[])

    const GetResumeInfo = () => {
        GlobalApi.GetResumeById(resumeid).then((res) => {
            console.log(res.data.data);
            setResumeInfo(res.data.data);
        })
    }

    return (
        <ResumeInfoContext.Provider value={{resumeInfo, setResumeInfo}}>
        <div>
            <Header/>
            <div className='my-10 mx-2 md:mx-20 lg:mx-36'>
                <h2 className="text-center text-2xl font-medium">
                    Congrats  😍 ! Your Ultimate AI generated Resume is ready !!</h2>

                <p className="text-center text-gray-400">Now you are ready to download ⬇️ your resume and can share  a unique resume url
                </p>

                <div className="flex justify-between px-44 my-10">
                    <Button>Download</Button>
                    <Button>Share</Button>
                </div>

                <div>
                    {resumeInfo && <ResumePreview />}
                </div>

            </div>
        </div>
        </ResumeInfoContext.Provider>
    )
}
export default ViewResume
