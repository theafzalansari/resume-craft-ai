import React, { useState } from "react";
import { Loader2, PlusSquare } from "lucide-react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { v4 as uuidv4 } from "uuid";
import GlobalApi from "../../../service/GlobalApi.js";
import { useUser } from "@clerk/react";

const AddResume = () => {
    const [openDialog, setOpenDialog] = useState(false);
    const [resumeTitle, setResumeTitle] = useState("");
    const [loading, setLoading] = useState(false);

    const { user } = useUser();

    const onCreate = async () => {
        setLoading(true);

        const uuid = uuidv4();

        const data = {
            data: {
                title: resumeTitle,
                resumeid: uuid,
                userEmail: user?.primaryEmailAddress?.emailAddress,
                userName: user?.fullName,
            },
        };

        console.log("Sending data:", data);

        try {
            const res = await GlobalApi.CreateNewResume(data);

            console.log("Strapi response:", res.data);

            setOpenDialog(false);
            setResumeTitle("");
        } catch (error) {
            console.error(
                "Error creating resume:",
                error.response?.data || error
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <div
                className="p-14 py-24 border items-center flex
                justify-center bg-secondary rounded-lg h-[280px]
                hover:scale-105 transition-all hover:shadow-md
                cursor-pointer border-dashed"
                onClick={() => setOpenDialog(true)}
            >
                <PlusSquare />
            </div>

            <Dialog
                open={openDialog}
                onOpenChange={setOpenDialog}
            >
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>
                            Create New Resume
                        </DialogTitle>

                        <DialogDescription>
                            Add a title for your new resume
                        </DialogDescription>
                    </DialogHeader>

                    <Input
                        className="my-2"
                        placeholder="Ex. Full Stack Resume"
                        value={resumeTitle}
                        onChange={(e) =>
                            setResumeTitle(e.target.value)
                        }
                    />

                    <div className="flex justify-end gap-3">
                        <Button
                            onClick={() => setOpenDialog(false)}
                            variant="ghost"
                        >
                            Cancel
                        </Button>

                        <Button
                            disabled={!resumeTitle || loading}
                            onClick={onCreate}
                        >
                            {loading ? (
                                <Loader2 className="animate-spin" />
                            ) : (
                                "Create"
                            )}
                        </Button>
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default AddResume;