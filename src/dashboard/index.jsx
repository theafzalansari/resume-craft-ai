import React, {useEffect, useState} from 'react'
import AddResume from "@/dashboard/components/AddResume.jsx";
import GlobalApi from "../../service/GlobalApi.js";
import { useUser } from "@clerk/react"
import ResumeCardItem from "@/dashboard/components/ResumeCardItem.jsx";

const Dashboard = () => {
    const { user } = useUser();
    const [resumeList, setResumeList] = useState([]);

    useEffect(() => {
        user&&GetResumesList()
    },[user])

    /**
     * Used to get users resume list
     */
    const GetResumesList=()=>{
        GlobalApi.GetUserResume(user?.primaryEmailAddress?.emailAddress).then(res=>{
            setResumeList(res.data.data);
        })
    }

    return (
        <div className="p-10 md:px-20 lg:px-32">
            <h2 className='font-bold text-5xl'>
                My Resume
            </h2>
            <p className='text-md'>
                Start creating AI resume for your next Job role
            </p>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5
            mt-10 gap-5'>
                <AddResume />
                {resumeList.length>0&&resumeList.map((resume, index) => (
                    <ResumeCardItem resume={resume} key={index} />
                ))}
            </div>
        </div>
    )
}
export default Dashboard
