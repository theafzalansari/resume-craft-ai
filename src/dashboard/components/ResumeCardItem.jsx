import React, {useState} from "react";
import {FileText, MoreVertical, Pencil, Trash2, Download, EyeIcon, Loader2Icon} from "lucide-react";
import {Link, useNavigate} from "react-router-dom";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import GlobalApi from "../../../service/GlobalApi.js";
import {toast} from "sonner";

const GRADIENTS = [
    "from-rose-400 via-fuchsia-500 to-sky-500",
    "from-amber-400 via-orange-500 to-rose-500",
    "from-emerald-400 via-teal-500 to-cyan-500",
    "from-violet-400 via-purple-500 to-indigo-500",
];

const ResumeCardItem = ({ resume, refreshData}) => {
    // Deterministic gradient per card so it doesn't shuffle on re-render
    const gradient =
        GRADIENTS[(resume?.documentId?.length || resume?.title?.length || 0) % GRADIENTS.length];

    const navigate = useNavigate();
    // const onMenuClick = () => {
    //     navigation()
    // }

    const [openAlert, setOpenAlert] = useState(false)
    const [loading, setLoading] = useState(false)
    const onDelete=()=>{
        setLoading(true)
        GlobalApi.DeleteResume(resume.documentId).then(res=>{
            console.log(res)
            toast('Resume Deleted successfully.');
            refreshData();
            setLoading(false);
            setOpenAlert(false)
        },(error)=>{
            setLoading(false)
        })
    }

    return (
        <div className="group relative">
            {/* Options menu */}
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <button
                        onClick={(e) => e.preventDefault()}
                        className="absolute top-3 right-3 z-20 p-1.5 rounded-full bg-white/90 backdrop-blur-sm shadow-sm opacity-0 group-hover:opacity-100 focus:opacity-100 transition-opacity duration-200 hover:bg-white"
                    >
                        <MoreVertical className="w-4 h-4 text-gray-700" />
                    </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-40">
                    <DropdownMenuItem onClick={()=>navigate(`/dashboard/resume/${resume.documentId}/edit`)} className="gap-2 cursor-pointer">
                        <Pencil className="w-4 h-4" />
                        Edit
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={()=>navigate(`/my-resume/${resume.documentId}/view`)} className="gap-2 cursor-pointer">
                        <EyeIcon className="w-4 h-4" />
                        View
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={()=>navigate(`/my-resume/${resume.documentId}/view`)} className="gap-2 cursor-pointer">
                        <Download className="w-4 h-4" />
                        Download
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem
                        onClick={()=>setOpenAlert(true)}
                        className="gap-2 cursor-pointer text-red-600 focus:text-red-600 focus:bg-red-50"
                    >
                        <Trash2 className="w-4 h-4" />
                        Delete
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>

            <AlertDialog open={openAlert}>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                        <AlertDialogDescription>
                            This action cannot be undone. This will permanently delete your resume file
                            from our servers.
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel onClick={()=>setOpenAlert(false)}>Cancel</AlertDialogCancel>
                        <AlertDialogAction onClick={onDelete}
                                           disabled={loading}>
                            {loading? <Loader2Icon className="animate-spin"/> : 'Delete'}
                        </AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>

            <Link to={`/dashboard/resume/${resume.documentId}/edit`} className="block">
                <div className="relative h-[300px] rounded-2xl overflow-hidden border border-border/60 shadow-sm transition-all duration-300 ease-out group-hover:-translate-y-1.5 group-hover:shadow-2xl group-hover:shadow-primary/20 group-hover:border-primary/30">

                    {/* Background */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${gradient}`} />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-black/0 to-white/10" />

                    {/* Resume paper */}
                    <div className="absolute left-1/2 top-6 -translate-x-1/2 w-[82%] h-[85%] rounded-lg bg-white shadow-xl ring-1 ring-black/5 p-5 flex flex-col transition-transform duration-300 group-hover:-translate-y-0.5">

                        <h2 className="text-base font-semibold text-center text-gray-800 truncate">
                            {resume.title || "Untitled Resume"}
                        </h2>

                        <div className="h-px bg-gray-200 mt-3 mb-4" />

                        <div className="flex-1 flex items-center justify-center">
                            <FileText className="w-14 h-14 text-fuchsia-400/70" strokeWidth={1.25} />
                        </div>

                        <div className="space-y-2">
                            <div className="h-2 rounded-full bg-gray-200" />
                            <div className="h-2 rounded-full bg-gray-200 w-5/6" />
                            <div className="h-2 rounded-full bg-gray-200 w-3/4" />
                            <div className="h-2 rounded-full bg-gray-100 w-2/3" />
                        </div>
                    </div>

                    {/* Hover shine sweep */}
                    <div className="absolute inset-0 translate-x-[-120%] group-hover:translate-x-[120%] transition-transform duration-700 ease-out bg-gradient-to-r from-transparent via-white/25 to-transparent pointer-events-none" />
                </div>
            </Link>

            {/*<h3 className="text-center mt-3 text-sm font-medium text-foreground/90 truncate px-2 transition-colors group-hover:text-primary">*/}
            {/*    {resume.title || "Untitled Resume"}*/}
            {/*</h3>*/}
        </div>
    );
};

export default ResumeCardItem;