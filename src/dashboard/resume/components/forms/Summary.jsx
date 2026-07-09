import React, { useContext, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { ResumeInfoContext } from "@/context/ResumeInfoContext.jsx";
import GlobalApi from "../../../../../service/GlobalApi.js";
import AIModel from "../../../../../service/AIModal.js";
import { useParams } from "react-router-dom";
import { toast } from "sonner";
import { Brain, LoaderIcon } from "lucide-react";

const Summary = ({ enabledNext }) => {

    const params = useParams();

    const { resumeInfo, setResumeInfo } =
        useContext(ResumeInfoContext);

    const [summary, setSummary] = useState(
        resumeInfo?.summary || ""
    );

    const [loading, setLoading] = useState(false);

    const [aiLoading, setAiLoading] = useState(false);


    useEffect(() => {

        setResumeInfo({
            ...resumeInfo,
            summary: summary,
        });

    }, [summary]);


    const handleSummaryChange = (e) => {

        enabledNext(false);

        setSummary(e.target.value);

    };


    const GenerateSummaryFromAI = async () => {

        enabledNext(false);

        setAiLoading(true);

        const prompt = `
Generate a professional resume summary for the job title:

${resumeInfo?.jobTitle}

Generate only one professional summary.
Keep it between 3 to 4 sentences.
Do not add headings.
Return only the summary text.
`;

        try {

            const response =
                await AIModel.GenerateAIContent(prompt);

            console.log("AI Response:", response);

            setSummary(response);

        } catch (error) {

            console.error("AI Error:", error);

            toast.error("Failed to generate summary");

        } finally {

            setAiLoading(false);

        }

    };


    const onSave = (e) => {

        e.preventDefault();

        setLoading(true);

        const data = {
            data: {
                summary: summary,
            },
        };

        GlobalApi.UpdateResumeDetail(
            params?.resumeid,
            data
        ).then(

            (res) => {

                console.log(res);

                enabledNext(true);

                setLoading(false);

                toast.success(
                    "Details Updated successfully."
                );

            },

            (error) => {

                console.error(error);

                setLoading(false);

                toast.error(
                    "Failed to update details."
                );

            }

        );

    };


    return (

        <div>

            <div className="p-5 shadow-lg rounded-lg border-t-primary border-t-4 mt-10">

                <h2 className="font-bold text-lg">
                    Summary
                </h2>

                <p>
                    Add Summary for your job title
                </p>


                <form
                    className="mt-7"
                    onSubmit={onSave}
                >

                    <div className="flex justify-between items-end">

                        <label>
                            Add Summary
                        </label>


                        <Button
                            variant="outline"
                            type="button"
                            size="sm"
                            className="border-primary text-primary flex gap-2"
                            onClick={GenerateSummaryFromAI}
                            disabled={aiLoading}
                        >

                            {aiLoading ? (

                                <LoaderIcon className="h-4 w-4 animate-spin" />

                            ) : (

                                <Brain className="h-4 w-4" />

                            )}

                            Generate from AI

                        </Button>

                    </div>


                    <Textarea
                        className="mt-5"
                        required
                        value={summary}
                        onChange={handleSummaryChange}
                    />


                    <div className="mt-3 flex justify-end">

                        <Button
                            type="submit"
                            disabled={loading || !summary}
                        >

                            {loading ? (

                                <LoaderIcon className="animate-spin" />

                            ) : (

                                "Save"

                            )}

                        </Button>

                    </div>

                </form>

            </div>

        </div>

    );

};

export default Summary;