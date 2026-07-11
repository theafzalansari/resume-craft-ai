import React, { useContext, useEffect, useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ResumeInfoContext } from "@/context/ResumeInfoContext.jsx";
import { useParams } from "react-router-dom";
import GlobalApi from "../../../../../service/GlobalApi.js";
import { toast } from "sonner";
import { LoaderCircle } from "lucide-react";

const formField = {
    universityName: "",
    degree: "",
    major: "",
    startDate: "",
    endDate: "",
    description: "",
};

function Education({ enabledNext }) {
    const params = useParams();
    const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);

    const [loading, setLoading] = useState(false);
    const [dataLoaded, setDataLoaded] = useState(false);

    const [educationalList, setEducationalList] = useState([
        { ...formField },
    ]);

    const isFormEmpty =
        !educationalList ||
        educationalList.every((item) =>
            Object.values(item).every((value) => !value)
        );

    useEffect(() => {
        if (resumeInfo?.education?.length) {
            setEducationalList(resumeInfo.education);
            setDataLoaded(true);
        }
    }, [resumeInfo]);

    const handleChange = (event, index) => {
        enabledNext(false);

        const { name, value } = event.target;

        const newEntries = [...educationalList];

        newEntries[index] = {
            ...newEntries[index],
            [name]: value,
        };

        setEducationalList(newEntries);
    };

    const AddNewEducation = () => {
        enabledNext(false);

        setEducationalList([
            ...educationalList,
            { ...formField },
        ]);
    };

    const RemoveEducation = () => {
        enabledNext(false);

        if (educationalList.length > 1) {
            setEducationalList(
                educationalList.slice(0, -1)
            );
        }
    };

    const onSave = () => {
        setLoading(true);

        const data = {
            data: {
                education: educationalList.map(({ id, ...rest }) => rest),
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
                console.log(error.response?.data);
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
            education: educationalList,
        }));
    }, [educationalList, dataLoaded]);

    return (
        <div className="p-5 shadow-lg rounded-lg border-t-primary border-t-4 mt-10">
            <h2 className="font-bold text-lg">Educational Detail</h2>
            <p>Add Your educational details</p>

            {educationalList.map((item, index) => (
                <div
                    key={index}
                    className="grid grid-cols-2 gap-3 border p-3 my-5 rounded-lg"
                >
                    <div className="col-span-2">
                        <label>University Name</label>
                        <Input
                            name="universityName"
                            value={item.universityName}
                            onChange={(e) => handleChange(e, index)}
                        />
                    </div>

                    <div>
                        <label>Degree</label>
                        <Input
                            name="degree"
                            value={item.degree}
                            onChange={(e) => handleChange(e, index)}
                        />
                    </div>

                    <div>
                        <label>Major</label>
                        <Input
                            name="major"
                            value={item.major}
                            onChange={(e) => handleChange(e, index)}
                        />
                    </div>

                    <div>
                        <label>Start Date</label>
                        <Input
                            type="date"
                            name="startDate"
                            value={item.startDate}
                            onChange={(e) => handleChange(e, index)}
                        />
                    </div>

                    <div>
                        <label>End Date</label>
                        <Input
                            type="date"
                            name="endDate"
                            value={item.endDate}
                            onChange={(e) => handleChange(e, index)}
                        />
                    </div>

                    <div className="col-span-2">
                        <label>Description</label>
                        <Textarea
                            name="description"
                            value={item.description}
                            onChange={(e) => handleChange(e, index)}
                        />
                    </div>
                </div>
            ))}

            <div className="flex justify-between">
                <div className="flex gap-2">
                    <Button
                        variant="outline"
                        onClick={AddNewEducation}
                        className="text-primary"
                    >
                        + Add More Education
                    </Button>

                    <Button
                        variant="outline"
                        onClick={RemoveEducation}
                        className="text-primary"
                        disabled={educationalList.length === 1}
                    >
                        - Remove Education
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
}

export default Education;