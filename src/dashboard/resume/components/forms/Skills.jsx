import React, { useContext, useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { Button } from "@/components/ui/button.jsx";
import { LoaderCircle } from "lucide-react";
import { ResumeInfoContext } from "@/context/ResumeInfoContext.jsx";
import GlobalApi from "../../../../../service/GlobalApi.js";
import { useParams } from "react-router-dom";
import { toast } from "sonner";

const formField = {
    name: "",
    rating: 0,
};

const Skills = ({ enabledNext }) => {
    const [loading, setLoading] = useState(false);
    const [dataLoaded, setDataLoaded] = useState(false);

    const [skillsList, setSkillsList] = useState([{ ...formField }]);

    const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);
    const params = useParams();

    const isFormEmpty =
        !skillsList ||
        skillsList.every((item) =>
            Object.values(item).every((value) => !value)
        );

    useEffect(() => {
        if (resumeInfo?.skills?.length) {
            setSkillsList(resumeInfo.skills);
            setDataLoaded(true);
        }
    }, [resumeInfo]);

    const handleChange = (index, name, value) => {
        enabledNext(false);

        const newEntries = [...skillsList];

        newEntries[index] = {
            ...newEntries[index],
            [name]: value,
        };

        setSkillsList(newEntries);
    };

    const AddNewSkills = () => {
        enabledNext(false);

        setSkillsList([
            ...skillsList,
            { ...formField },
        ]);
    };

    const RemoveSkills = () => {
        enabledNext(false);

        if (skillsList.length > 1) {
            setSkillsList(skillsList.slice(0, -1));
        }
    };

    const onSave = () => {
        setLoading(true);

        const data = {
            data: {
                skills: skillsList,
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

        setResumeInfo((prev) => ({
            ...prev,
            skills: skillsList,
        }));
    }, [skillsList, dataLoaded]);

    return (
        <div className="p-5 shadow-lg rounded-lg border-t-primary border-t-4 mt-10">
            <h2 className="font-bold text-lg">Professional Skills</h2>

            <p>Add Your top professional key skills</p>

            <div>
                {skillsList.map((item, index) => (
                    <div
                        key={index}
                        className="flex justify-between items-center border rounded-lg p-3 py-2 mb-2"
                    >
                        <div className="w-[45%]">
                            <label className="text-xs">Name</label>

                            <Input
                                value={item.name}
                                onChange={(e) =>
                                    handleChange(
                                        index,
                                        "name",
                                        e.target.value
                                    )
                                }
                            />
                        </div>

                        <Rating
                            style={{ maxWidth: 120 }}
                            value={item.rating}
                            onChange={(value) =>
                                handleChange(index, "rating", value)
                            }
                        />
                    </div>
                ))}
            </div>

            <div className="flex justify-between">
                <div className="flex gap-2">
                    <Button
                        variant="outline"
                        onClick={AddNewSkills}
                        className="text-primary"
                    >
                        + Add More Skills
                    </Button>

                    <Button
                        variant="outline"
                        onClick={RemoveSkills}
                        className="text-primary"
                        disabled={skillsList.length === 1}
                    >
                        - Remove Skills
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
    );
};

export default Skills;