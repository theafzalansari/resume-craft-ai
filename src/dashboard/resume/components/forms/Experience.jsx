import React, { useContext, useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import RichTextEditor from "@/dashboard/resume/components/RichTextEditor.jsx";
import { ResumeInfoContext } from "@/context/ResumeInfoContext.jsx";
import { LoaderCircle } from "lucide-react";
import { useParams } from "react-router-dom";
import GlobalApi from "../../../../../service/GlobalApi.js";
import { toast } from "sonner";

const formField = {
    title: "",
    companyName: "",
    city: "",
    state: "",
    startDate: "",
    endDate: "",
    workSummery: "",
};

const Experience = ({ enabledNext }) => {
    const [loading, setLoading] = useState(false);
    const params = useParams();

    const [experienceList, setExperienceList] = useState([{ ...formField }]);

    const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);

    const isFormEmpty =
        !experienceList ||
        experienceList.every((item) =>
            Object.values(item).every((value) => !value)
        );

    const [dataLoaded, setDataLoaded] = useState(false);

    useEffect(() => {
        if (!dataLoaded && resumeInfo?.experience) {
            setExperienceList(resumeInfo.experience);
            setDataLoaded(true);
        }
    }, [resumeInfo, dataLoaded]);

    const handleChange = (index, event) => {
        enabledNext(false);

        const { name, value } = event.target;

        const newEntries = [...experienceList];

        newEntries[index] = {
            ...newEntries[index],
            [name]: value,
        };

        setExperienceList(newEntries);
    };

    const handleRichTextEditor = (event, name, index) => {
        enabledNext(false);

        const newEntries = [...experienceList];

        newEntries[index] = {
            ...newEntries[index],
            [name]: event.target.value,
        };

        setExperienceList(newEntries);
    };

    const AddNewExperience = () => {
        enabledNext(false);

        setExperienceList([
            ...experienceList,
            { ...formField }
        ]);
    };

    const RemoveExperience = () => {
        enabledNext(false);

        if (experienceList.length > 1) {
            setExperienceList(experienceList.slice(0, -1));
        }
    };

    const onSave = () => {
        setLoading(true);

        const data = {
            data: {
                experience: experienceList,
            },
        };

        GlobalApi.UpdateResumeDetail(params.resumeid, data).then(
            (res) => {
                console.log(res);
                setLoading(false);
                enabledNext(true);
                toast.success("Details updated successfully.");
            },
            (error) => {
                console.error(error);
                setLoading(false);
                enabledNext(false);
                toast.error("Error updating resume details.");
            }
        );
    };

    useEffect(() => {
        if (!dataLoaded) return;

        setResumeInfo((prevResumeInfo) => ({
            ...prevResumeInfo,
            experience: experienceList,
        }));
    }, [experienceList, dataLoaded]);

    return (
        <div>
            <div className="p-5 shadow-lg rounded-lg border-t-primary border-t-4 mt-10">
                <h2 className="font-bold text-lg">
                    Professional Experience
                </h2>

                <p>Add Your previous Job experience</p>

                <div>
                    {experienceList.map((item, index) => (
                        <div key={index}>
                            <div className="grid grid-cols-2 gap-3 border p-3 my-5 rounded-lg">

                                <div>
                                    <label className="text-xs">
                                        Position Title
                                    </label>

                                    <Input
                                        name="title"
                                        value={item.title}
                                        onChange={(event) =>
                                            handleChange(index, event)
                                        }
                                    />
                                </div>

                                <div>
                                    <label className="text-xs">
                                        Company Name
                                    </label>

                                    <Input
                                        name="companyName"
                                        value={item.companyName}
                                        onChange={(event) =>
                                            handleChange(index, event)
                                        }
                                    />
                                </div>

                                <div>
                                    <label className="text-xs">
                                        City
                                    </label>

                                    <Input
                                        name="city"
                                        value={item.city}
                                        onChange={(event) =>
                                            handleChange(index, event)
                                        }
                                    />
                                </div>

                                <div>
                                    <label className="text-xs">
                                        State
                                    </label>

                                    <Input
                                        name="state"
                                        value={item.state}
                                        onChange={(event) =>
                                            handleChange(index, event)
                                        }
                                    />
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

                                <div className="col-span-2">
                                    <RichTextEditor
                                        jobTitle={item.title}
                                        value={item.workSummery}
                                        onRichTextEditorChange={(event) =>
                                            handleRichTextEditor(
                                                event,
                                                "workSummery",
                                                index
                                            )
                                        }
                                    />
                                </div>

                            </div>
                        </div>
                    ))}
                </div>

                <div className="flex justify-between">
                    <div className="flex gap-2">

                        <Button
                            variant="outline"
                            onClick={AddNewExperience}
                            className="text-primary"
                        >
                            + Add More Experience
                        </Button>

                        <Button
                            variant="outline"
                            onClick={RemoveExperience}
                            className="text-primary"
                            disabled={experienceList.length === 1}
                        >
                            - Remove Experience
                        </Button>

                    </div>

                    <Button
                        disabled={loading || isFormEmpty}
                        onClick={onSave}
                    >
                        {loading ? (
                            <LoaderCircle className="animate-spin" />
                        ) : (
                            "Save"
                        )}
                    </Button>
                </div>

            </div>
        </div>
    );
};

export default Experience;