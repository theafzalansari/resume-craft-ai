import React, { useContext, useEffect, useState } from "react";
import { ResumeInfoContext } from "@/context/ResumeInfoContext.jsx";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useParams } from "react-router-dom";
import GlobalApi from "../../../../../service/GlobalApi.js";
import { LoaderIcon } from "lucide-react";
import { toast } from "sonner";

const PersonalDetail = ({ enabledNext }) => {
    const params = useParams();

    const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);

    const [loading, setLoading] = useState(false);
    const [dataLoaded, setDataLoaded] = useState(false);

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        jobTitle: "",
        address: "",
        phone: "",
        email: "",
    });

    useEffect(() => {
        if (!dataLoaded && resumeInfo) {
            setFormData({
                firstName: resumeInfo.firstName || "",
                lastName: resumeInfo.lastName || "",
                jobTitle: resumeInfo.jobTitle || "",
                address: resumeInfo.address || "",
                phone: resumeInfo.phone || "",
                email: resumeInfo.email || "",
            });
            setDataLoaded(true);
        }
    }, [resumeInfo, dataLoaded]);

    const handleInputChange = (e) => {
        enabledNext(false);

        const { name, value } = e.target;

        const updatedData = {
            ...formData,
            [name]: value,
        };

        setFormData(updatedData);

        setResumeInfo((prev) => ({
            ...prev,
            ...updatedData,
        }));
    };

    const onSave = (e) => {
        e.preventDefault();

        setLoading(true);

        const data = {
            data: formData,
        };

        GlobalApi.UpdateResumeDetail(params.resumeid, data).then(
            (res) => {
                console.log(res);

                setLoading(false);
                enabledNext(true);

                toast.success("Details Updated Successfully.");
            },
            (error) => {
                console.error(error);

                setLoading(false);
                enabledNext(false);

                toast.error("Failed to update details.");
            }
        );
    };

    return (
        <div className="p-5 shadow-lg rounded-lg border-t-primary border-t-4 mt-10">
            <h2 className="font-bold text-lg">Personal Detail</h2>
            <p>Get Started with the basic information</p>

            <form onSubmit={onSave}>
                <div className="grid grid-cols-2 mt-5 gap-3">
                    <div>
                        <label className="text-sm">First Name</label>
                        <Input
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleInputChange}
                            required
                        />
                    </div>

                    <div>
                        <label className="text-sm">Last Name</label>
                        <Input
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleInputChange}
                            required
                        />
                    </div>

                    <div className="col-span-2">
                        <label className="text-sm">Job Title</label>
                        <Input
                            name="jobTitle"
                            value={formData.jobTitle}
                            onChange={handleInputChange}
                            required
                        />
                    </div>

                    <div className="col-span-2">
                        <label className="text-sm">Address</label>
                        <Input
                            name="address"
                            value={formData.address}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div>
                        <label className="text-sm">Phone</label>
                        <Input
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            required
                        />
                    </div>

                    <div>
                        <label className="text-sm">Email</label>
                        <Input
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                </div>

                <div className="mt-3 flex justify-end">
                    <Button type="submit" disabled={loading}>
                        {loading ? (
                            <LoaderIcon className="animate-spin" />
                        ) : (
                            "Save"
                        )}
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default PersonalDetail;