import React from 'react'

const ProjectsPreview = ({resumeInfo}) => {
    return (
        <div className='my-6'>
            <h2 className='text-center font-bold text-sm mb-2'
                style={{
                    color: resumeInfo?.themeColor
                }}
            >Projects</h2>

            <hr style={{
                borderColor:resumeInfo?.themeColor
            }}/>

            {resumeInfo?.projects.map((item, index) => (
                <div key={index} className='my-5'>
                    <h2 className='text-sm font-bold'
                    style={{
                        color: resumeInfo?.themeColor
                    }}
                    >{item.name}</h2>
                    <h2 className='text-xs flex justify-between'>{item?.description}
                    <span>{item.startDate} - {item.endDate}</span>
                    </h2>
                    <p className="text-xs my-2 font-semibold">
                        Tech Stack: {item?.techStack?.join(" • ")}
                    </p>
                </div>
            ))}

        </div>
    )
}
export default ProjectsPreview
