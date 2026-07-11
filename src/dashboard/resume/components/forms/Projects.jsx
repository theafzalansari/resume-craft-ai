import React, {useContext, useEffect, useState} from "react";
import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";
import {Button} from "@/components/ui/button";
import {LoaderCircle} from "lucide-react";
import {ResumeInfoContext} from "@/context/ResumeInfoContext.jsx";
import GlobalApi from "../../../../../service/GlobalApi.js";
import {useParams} from "react-router-dom";
import {toast} from "sonner";

const formField = {
    name: "",
    description: "",
    techStack: "",
    startDate: "",
    endDate: ""
};

const Projects = ({enabledNext}) => {
    const [projectsList, setProjectsList] = useState([
        {...formField}
    ]);
    const [loading, setLoading] = useState(false);
    const [dataLoaded, setDataLoaded] = useState(false);

    const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);
    const params = useParams();

    const isFormEmpty = projectsList.every((item) =>
        Object.values(item).every((value) => !value)
    );

    useEffect(() => {
        if (resumeInfo?.projects?.length) {
            setProjectsList(resumeInfo.projects);
            setDataLoaded(true);
        }
    }, [resumeInfo]);

    const handleChange = (index, event) => {
        enabledNext(false);

        const {name, value} = event.target;
        const newEntries = [...projectsList];

        newEntries[index] = {
            ...newEntries[index],
            [name]: value
        };

        setProjectsList(newEntries);
    };

    const AddNewProject = () => {
        enabledNext(false);

        setProjectsList([
            ...projectsList,
            {...formField}
        ]);
    };

    const RemoveProject = () => {
        enabledNext(false);

        if (projectsList.length > 1) {
            setProjectsList(
                projectsList.slice(0, -1)
            );
        }
    };

    const onSave = () => {
        setLoading(true);

        const data = {
            data: {
                projects: projectsList.map(({ id, ...rest }) => rest)
            }
        };

        console.log("Sending Projects:", data);

        GlobalApi.UpdateResumeDetail(params.resumeid, data).then(
            (res) => {
                console.log(res);
                setLoading(false);
                enabledNext(true);
                toast.success("Details updated successfully.");
            },
            (error) => {
                console.error("Project Save Error:", error.response?.data);
                setLoading(false);
                enabledNext(false);
                toast.error("Error updating project details.");
            }
        );
    };

    useEffect(() => {
        if (!dataLoaded) return;

        setResumeInfo((prevResumeInfo) => ({
            ...prevResumeInfo,
            projects: projectsList
        }));
    }, [projectsList,dataLoaded, setResumeInfo]);

    return (
        <div className="p-5 shadow-lg rounded-lg border-t-primary border-t-4 mt-10">
            <h2 className="font-bold text-lg">
                Projects
            </h2>

            <p>Add Your best projects</p>

            {projectsList.map((item, index) => (
                <div
                    key={index}
                    className="grid grid-cols-2 gap-3 border p-3 my-5 rounded-lg"
                >
                    <div className="col-span-2">
                        <label className="text-xs">
                            Project Name
                        </label>

                        <Input
                            name="name"
                            value={item.name}
                            onChange={(event) =>
                                handleChange(index, event)
                            }
                        />
                    </div>

                    <div className="col-span-2">
                        <label className="text-xs">
                            Description
                        </label>

                        <Textarea
                            name="description"
                            value={item.description}
                            onChange={(event) =>
                                handleChange(index, event)
                            }
                        />
                    </div>

                    <div className="col-span-2">
                        <label className="text-xs">
                            Tech Stack
                        </label>

                        <Input
                            name="techStack"
                            value={item.techStack}
                            placeholder="React, Node.js, Express, MongoDB"
                            onChange={(event) =>
                                handleChange(index, event)
                            }
                        />

                        <p className="text-xs text-gray-500 mt-1">
                            Separate technologies using commas
                        </p>
                    </div>

                    <div>
                        <label className="text-xs">
                            Start Date
                        </label>

                        <Input
                            type="date"
                            name="startDate"
                            value={item.startDate}
                            onChange={(event) =>
                                handleChange(index, event)
                            }
                        />
                    </div>

                    <div>
                        <label className="text-xs">
                            End Date
                        </label>

                        <Input
                            type="date"
                            name="endDate"
                            value={item.endDate}
                            onChange={(event) =>
                                handleChange(index, event)
                            }
                        />
                    </div>
                </div>
            ))}

            <div className="flex justify-between">
                <div className="flex gap-2">
                    <Button
                        variant="outline"
                        onClick={AddNewProject}
                        className="text-primary"
                    >
                        + Add More Project
                    </Button>

                    <Button
                        variant="outline"
                        onClick={RemoveProject}
                        className="text-primary"
                        disabled={projectsList.length === 1}
                    >
                        - Remove Project
                    </Button>
                </div>

                <Button
                    disabled={loading || isFormEmpty}
                    onClick={onSave}
                >
                    {loading ? (
                        <LoaderCircle className="animate-spin"/>
                    ) : (
                        "Save"
                    )}
                </Button>
            </div>
        </div>
    );
};

export default Projects;