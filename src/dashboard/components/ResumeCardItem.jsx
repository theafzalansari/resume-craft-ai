import React from 'react'
import {Notebook} from "lucide-react";
import {Link} from "react-router-dom";

const ResumeCardItem = ({resume}) => {
    return (
        <Link to={`/dashboard/resume/`+resume.documentId+"/edit"}>
            <div className='p-14 bg-secondary flex items-center justify-center h-[280px] border border-primary rounded-lg hover:scale-100 transition-all hover:shadow-md shadow-primary'>
                <Notebook/>
            </div>
            <h3 className='text-center my-2'>{resume.title}</h3>
        </Link>
    )
}
export default ResumeCardItem
