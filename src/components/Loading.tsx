"use client";
import Image from "next/image";

export default function Loading() {

    return (
        <div className="w-full min-h-screen p-4 flex flex-col justify-center items-center">
            <span className="loading loading-spinner text-info h-[50px] w-[50px]"></span>
        </div>
    );
}
