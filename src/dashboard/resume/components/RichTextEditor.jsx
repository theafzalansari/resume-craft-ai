import { useEffect, useState } from "react";
import Editor, {
    BtnBold,
    BtnItalic,
    Toolbar,
    BtnUnderline,
    BtnStrikeThrough,
    Separator,
    BtnNumberedList,
    BtnBulletList,
    BtnLink,
} from "react-simple-wysiwyg";

import { Button } from "@/components/ui/button";
import { Brain, LoaderIcon } from "lucide-react";
import { toast } from "sonner";

import AIModel from "../../../../service/AIModal.js";

export default function RichTextEditor({
                                           value: defaultValue,
                                           jobTitle,
                                           onRichTextEditorChange,
                                       }) {

    const [value, setValue] = useState(defaultValue || "");

    const [aiLoading, setAiLoading] = useState(false);

    useEffect(() => {
        setValue(defaultValue || "");
    }, [defaultValue]);

    function onChange(e) {
        setValue(e.target.value);
        onRichTextEditorChange(e);
    }

    const GenerateWorkSummaryFromAI = async () => {

        if (!jobTitle?.trim()) {
            toast.error("Please enter Position Title first");
            return;
        }

        setAiLoading(true);

        const prompt = `
Generate a professional work experience summary for this job title:

${jobTitle}

Requirements:
- Generate 3 professional bullet points.
- Focus on achievements and responsibilities.
- Use strong action verbs.
- Keep each bullet point short.
- Make it suitable for a professional resume.
- Return the result as HTML using <ul> and <li> tags.
- Do not add headings.
`;

        try {

            const response =
                await AIModel.GenerateAIContent(prompt);

            setValue(response);

            onRichTextEditorChange({
                target: {
                    value: response,
                },
            });

        } catch (error) {

            console.error(error);

            toast.error("Failed to generate work summary");

        }

        setAiLoading(false);
    };

    return (
        <div>

            <div className="flex justify-between my-2">

                <label className="text-xs">
                    Summary
                </label>

                <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    className="flex gap-2 border-primary text-primary"
                    onClick={GenerateWorkSummaryFromAI}
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

            <Editor
                value={value}
                onChange={onChange}
            >

                <Toolbar>

                    <BtnBold />

                    <BtnItalic />

                    <BtnUnderline />

                    <BtnStrikeThrough />

                    <Separator />

                    <BtnNumberedList />

                    <BtnBulletList />

                    <Separator />

                    <BtnLink />

                </Toolbar>

            </Editor>

        </div>
    );
}