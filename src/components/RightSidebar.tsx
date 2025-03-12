"use client"
import { useSession } from "next-auth/react";
import Image from "next/image";
import { signOut } from "next-auth/react";
import ConfirmSignOut from "./ConfirmSignOut";
import { useState } from "react";

type Storage = {
    name: string
    width: string
    color: string
}

type StorageTable = {
    name: string
    storage: string
    color: string
    bgColor: string
    files: Number
    icon: string
}

export default function RightSidebar() {
    const { data: session } = useSession()
    const profileImage = session?.user?.image?.trim() ? session.user.image : null;
    const [isSignOut, setIsSignOut] = useState(false)

    const logOut = async () => {
        await signOut({ callbackUrl: "/" });
    };

    const storage: Storage[] = [
        { name: "image", width: "30%", color: "blue" },
        { name: "videos", width: "20%", color: "yellow" },
        { name: "doc", width: "15%", color: "lightgreen" },
        { name: "others", width: "5%", color: "red" },
        { name: "empty", width: "40%", color: "#f3f1f1ec" }
    ]

    const storageTable: StorageTable[] = [
        { name: 'Images', bgColor: "#b3e8ff", color: "#0088ff", storage: "1", files: 29, icon: "image" },
        { name: 'Videos', bgColor: "#fffeb3", color: "#fcf003", storage: "1", files: 29, icon: "video" },
        { name: 'Documents', bgColor: "#bdffb3", color: "#1eff00", storage: "1", files: 29, icon: "doc" },
        { name: 'Others', bgColor: "#ffb3ba", color: "#ff0019", storage: "1", files: 29, icon: "other" },
    ]

    return (
        <div className="min-h-screen bg-white p-5 flex flex-col items-center gap-5">
            <div className="flex flex-row justify-start items-center gap-3 w-full">
                {profileImage && (
                    <Image
                        src={profileImage}
                        width={60}
                        height={60}
                        alt="profile_image"
                        className="rounded-full"
                    />
                )}
                <div className="flex flex-col justify-start">
                    <h1 className="text-black text-xl font-semibold">{session?.user?.name}</h1>
                    <span className="text-xs">{session?.user?.email}</span>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-12 bg-[#ffc40091] text-[#ffffff] p-2 rounded-lg cursor-pointer ml-6" onClick={() => setIsSignOut(true)}>
                    <path fillRule="evenodd" d="M7.5 3.75A1.5 1.5 0 0 0 6 5.25v13.5a1.5 1.5 0 0 0 1.5 1.5h6a1.5 1.5 0 0 0 1.5-1.5V15a.75.75 0 0 1 1.5 0v3.75a3 3 0 0 1-3 3h-6a3 3 0 0 1-3-3V5.25a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3V9A.75.75 0 0 1 15 9V5.25a1.5 1.5 0 0 0-1.5-1.5h-6Zm5.03 4.72a.75.75 0 0 1 0 1.06l-1.72 1.72h10.94a.75.75 0 0 1 0 1.5H10.81l1.72 1.72a.75.75 0 1 1-1.06 1.06l-3-3a.75.75 0 0 1 0-1.06l3-3a.75.75 0 0 1 1.06 0Z" clipRule="evenodd" />
                </svg>

            </div>

            <div className="w-full flex flex-col justify-start mt-5 gap-2">
                <h1 className="text-3xl font-semibold">1.6 MB <span className="text-sm">used of</span> 50 MB</h1>
                <div className="w-full h-3 flex flex-row">
                    {storage.map((item, index) => (
                        <div key={index} style={{ height: "100%", width: `${item.width}`, backgroundColor: `${item.color}` }}></div>
                    ))}
                </div>
            </div>

            <div className="flex flex-col w-full mt-4">
                {storageTable.map((item, index) => (
                    <div key={index} className="relative flex flex-row justify-start items-center gap-4 border-b border-[#00000044] py-3">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-12 p-2 rounded-lg" style={{ color: `${item.color}`, backgroundColor: `${item.bgColor}` }}>
                            {item.icon === "image" && (
                                <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                            )}
                            {item.icon === "video" && (
                                <path strokeLinecap="round" strokeLinejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z" />

                            )}
                            {item.icon === "doc" && (
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m6.75 12H9m1.5-12H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />

                            )}
                            {item.icon === "other" && (
                                <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />

                            )}
                        </svg>

                        <div className="flex flex-col justify-start">
                            <h1 className="text-[#636161] text-xl">{item.name}</h1>
                            <span className="text-xs">{item.files.toString()} Files</span>
                        </div>

                        <div className="absolute right-0">
                            <h1 className="text-3xl font-sans text-[#636161]">{item.storage} MB</h1>
                        </div>
                    </div>
                ))}
            </div>
            {isSignOut && <ConfirmSignOut/>}
        </div>
    )
}