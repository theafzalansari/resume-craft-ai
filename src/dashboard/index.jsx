import React from 'react'
import AddResume from "@/dashboard/components/AddResume.jsx";

const Dashboard = () => {
    return (
        <div className="p-10 md:px-20 lg:px-32">
            <h2 className='font-bold text-5xl'>
                My Resume
            </h2>
            <p className='text-md'>
                Start creating AI resume for your next Job role
            </p>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5
            mt-10'>
                <AddResume />
            </div>
        </div>
    )
}
export default Dashboard
