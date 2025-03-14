'use client'
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import CreateFolder from "./CreateFolder";
import FileChoose from "./FileChoose";
import Toast from "./Toast";

export default function Sidebar() {
    const router = useRouter();
    const [isActive, setIsActive] = useState("Home");

    const [isFolderCreate, setIsFolderCreate] = useState(false)
    const [isFileCreate, setIsFileCreate] = useState(false)

    const [isToast, setIsToast] = useState(false)
    const [toast, setToast] = useState("")

    const handleActive = (page: string) => {
        setIsActive(page);

        const routes: { [key: string]: string } = {
            Home: "/dashboard",
            Files: "/dashboard/onDeveloping",
            Starred: "/dashboard/onDeveloping",
            Trash: "/dashboard/onDeveloping",
        };

        if (routes[page]) router.push(routes[page]);
    };

    const menuItems = [
        { name: "Home", icon: "home" },
        { name: "Files", icon: "folder" },
        { name: "Starred", icon: "star" },
        { name: "Trash", icon: "trash" },
    ];

    const showToast = (message: string) => {
        setToast(message);
        setTimeout(() => {
            setToast(""); // Hide toast after 3 seconds
        }, 3000);
    };

    return (
        <div className="bg-white flex flex-col items-center h-[100%] py-5">
            <ul className="text-base-content min-h-full p-4 flex flex-col items-center gap-5">
                <div className="flex flex-row gap-4 items-center justify-center">
                    <Image src="/logo.webp" width={30} height={30} alt="logo" />
                    <h1 className="text-xl font-sans font-bold text-[#008cff]">File Manager</h1>
                </div>

                <button onClick={() => setIsFileCreate(true)} className="btn btn-active btn-primary w-[160px] hover:scale-105 transition-all">
                    Add New File
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                </button>
                <button onClick={() => setIsFolderCreate(true)} className="btn btn-active btn-info text-white w-[160px] hover:scale-105 transition-all">
                    New Folder
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                </button>

                <ul className="flex flex-col items-center justify-center gap-4">
                    {menuItems.map((item) => (
                        <div
                            key={item.name}
                            onClick={() => handleActive(item.name)}
                            className={`rounded-[5px] cursor-pointer flex flex-row items-center justify-start px-4 gap-3 text-[#b1afaf] hover:text-white hover:bg-[#71b3ff] w-[160px] py-2 transition-all ${isActive === item.name ? "bg-[#71b3ff] text-white" : ""
                                }`}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                {item.icon === "home" && (
                                    <>
                                        <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
                                        <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
                                    </>
                                )}
                                {item.icon === "folder" && (
                                    <path d="M19.5 21a3 3 0 0 0 3-3v-4.5a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3V18a3 3 0 0 0 3 3h15ZM1.5 10.146V6a3 3 0 0 1 3-3h5.379a2.25 2.25 0 0 1 1.59.659l2.122 2.121c.14.141.331.22.53.22H19.5a3 3 0 0 1 3 3v1.146A4.483 4.483 0 0 0 19.5 9h-15a4.483 4.483 0 0 0-3 1.146Z" />
                                )}
                                {item.icon === "star" && (
                                    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                                )}
                                {item.icon === "trash" && (
                                    <path fillRule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z" clipRule="evenodd" />
                                )}
                            </svg>
                            {item.name}
                        </div>
                    ))}
                </ul>
            </ul>
            {isFolderCreate && <CreateFolder
                onClose={() => {setIsFolderCreate(false),showToast("Folder Creatd Sucsessfull !")}}
            />}
            {isFileCreate && <FileChoose
                onClose={() => { setIsFileCreate(false) }}
            />}

            {toast && <Toast setToast={toast} />}
        </div>
    );
}
