import React from 'react'
import {Notebook} from "lucide-react";
import {Link} from "react-router-dom";

const ResumeCardItem = ({resume}) => {
    return (
        <Link to={`/dashboard/resume/`+resume.documentId+"/edit"}>
            <div className='p-14 border-t-[10px]

          bg-gradient-to-r from-red-500 to-sky-500

             flex items-center justify-center h-[280px] border border-primary rounded-lg hover:scale-100 transition-all hover:shadow-md shadow-primary'>
                {/*<Notebook/>*/}
                <img src="/cv.png"  width={80} height={80} />
            </div>
            <h3 className='text-center my-2'>{resume.title}</h3>
        </Link>
    )
}
export default ResumeCardItem
