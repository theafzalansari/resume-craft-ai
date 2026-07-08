import React, {useContext, useEffect, useState} from 'react'
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {ResumeInfoContext} from "@/context/ResumeInfoContext.jsx";
import GlobalApi from "../../../../../service/GlobalApi.js";
import {useParams} from "react-router-dom";
import {toast} from "sonner";
import {Brain, LoaderIcon} from "lucide-react";

const Summary = ({enabledNext}) => {

    const params = useParams();
    const {resumeInfo, setResumeInfo} = useContext(ResumeInfoContext);
    const [summary, setSummary] = useState();
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        summary && setResumeInfo({
            ...resumeInfo,
            summary:summary
        });
    }, [summary])

    const onSave=(e)=>{
        e.preventDefault();
        setLoading(true)

        const data = {
            data: {
                summary:summary
            },
        }
        GlobalApi.UpdateResumeDetail(params?.resumeid, data).then((res) => {
            console.log(res);
            enabledNext(true);
            setLoading(false);
            toast("Details Updated successfully.");

        }, (error)=>{
            setLoading(false);
        })

    }

    return (
        <div>
            <div className='p-5 shadow-lg rounded-lg border-t-primary border-t-4 mt-10'>
                <h2 className='font-bold text-lg'>Summary</h2>
                <p>Add Summary for your job title</p>

                <form className='mt-7' onSubmit={onSave}>
                    <div className='flex justify-between items-end'>
                        <label>Add Summary</label>
                        <Button variant="outline" type='button' size="sm" className="border-primary text-primary flex gap-2"> <Brain className='h-4 w-4'/> Generate from AI</Button>
                    </div>

                    <Textarea className='mt-5 ' required
                    onChange={(e) => setSummary(e.target.value)}
                    />

                    <div className='mt-2 flex justify-end'>
                        <Button type="submit"
                                disabled={loading}
                        >{loading?<LoaderIcon className="animate-spin"/>:'Save'}</Button>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default Summary
