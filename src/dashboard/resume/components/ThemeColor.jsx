import React, { useContext } from "react";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { LayoutGridIcon } from "lucide-react";
import { ResumeInfoContext } from "@/context/ResumeInfoContext";
import GlobalApi from "../../../../service/GlobalApi.js";
import { useParams } from "react-router-dom";
import { toast } from "sonner";

const colors = [
    "#FF5733", "#33FF57", "#3357FF", "#FF33A1", "#A133FF",
    "#33FFA1", "#FF7133", "#71FF33", "#7133FF", "#FF3371",
    "#33FF71", "#3371FF", "#A1FF33", "#33A1FF", "#5733FF",
    "#33FF5A", "#5A33FF", "#FF335A", "#335AFF", "#111827"
];

const ThemeColor = () => {
    const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);
    const { resumeid } = useParams();

    const changeTheme = (color) => {
        if (resumeInfo?.themeColor === color) return;

        setResumeInfo((prev) => ({
            ...prev,
            themeColor: color,
        }));

        const data = {
            data: {
                themeColor: color,
            },
        };

        GlobalApi.UpdateResumeDetail(resumeid, data).then(
            (res) => {
                console.log(res);
                toast.success("Theme color updated successfully.");
            },
            (error) => {
                console.error(error);
                toast.error("Failed to update theme color.");
            }
        );
    };

    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button variant="outline" size="sm" className="flex gap-2">
                    <LayoutGridIcon className="w-4 h-4" />
                    Theme
                </Button>
            </PopoverTrigger>

            <PopoverContent className="w-64">
                <h2 className="font-semibold mb-3">
                    Choose Theme Color
                </h2>

                <div className="grid grid-cols-5 gap-3">
                    {colors.map((color) => (
                        <button
                            key={color}
                            type="button"
                            title={color}
                            onClick={() => changeTheme(color)}
                            className="w-8 h-8 rounded-full border-2 hover:scale-110 transition-all duration-200"
                            style={{
                                backgroundColor: color,
                                borderColor:
                                    resumeInfo?.themeColor === color
                                        ? "#000"
                                        : "transparent",
                            }}
                        />
                    ))}
                </div>
            </PopoverContent>
        </Popover>
    );
};

export default ThemeColor;