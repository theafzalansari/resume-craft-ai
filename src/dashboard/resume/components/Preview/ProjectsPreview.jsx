import React from "react";

const ProjectsPreview = ({ resumeInfo }) => {
    return (
        <div className="my-6">
            <h2
                className="text-center font-bold text-sm mb-2"
                style={{ color: resumeInfo?.themeColor }}
            >
                Projects
            </h2>

            <hr
                style={{
                    borderColor: resumeInfo?.themeColor,
                }}
            />

            {resumeInfo?.projects?.map((project, index) => (
                <div key={index} className="my-3">
                    <h2
                        className="font-bold text-sm"
                        style={{ color: resumeInfo?.themeColor }}
                    >
                        {project.name}
                    </h2>

                    <p className="text-xs">
                        {project.startDate} - {project.endDate}
                    </p>

                    <p className="text-xs mt-1">
                        {project.description}
                    </p>

                    <p className="text-xs mt-1">
                        <span className="font-bold">
                            Tech Stack:{" "}
                        </span>
                        {project.techStack}
                    </p>
                </div>
            ))}
        </div>
    );
};

export default ProjectsPreview;