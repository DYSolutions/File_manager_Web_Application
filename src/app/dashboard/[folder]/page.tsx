"use client"

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Loading from "@/components/Loading";
import Image from "next/image";

export default function Dashboard() {
  const router = useRouter()
  const { data: session, status } = useSession()

  // useEffect(()=>{
  //   if(status==="unauthenticated"){
  //     router.push("/")
  //   }
  // },[session,status,router])

  // if (status === "loading") {
  //     return <Loading />;
  //   }

  return (
    <div className="p-4 min-h-screen w-full flex flex-col items-center">
      <div className="flex flex-col w-[95%] bg-white h-[auto] rounded-2xl mt-[30px] p-6 gap-4">
        <div className="flex flex-row justify-between items-center px-2">
          <h2 className="text-[15px] text-black font-semibold">Recent folders</h2>
          <a href="">view more</a>
        </div>
        <div className="grid grid-cols-5 w-auto gap-0">
          <div className="p-4 border border-[#74717136] rounded-md h-[120px] w-[120px] flex flex-col items-center justify-center hover:scale-105 transition-all cursor-pointer"><Image src="/folder.png" height={50} width={50} alt="folder" />test</div>
          <div className="p-4 border border-[#74717136] rounded-md h-[120px] w-[120px] flex flex-col items-center justify-center"><Image src="/folder.png" height={50} width={50} alt="folder" />test</div>
          <div className="p-4 border border-[#74717136] rounded-md h-[120px] w-[120px] flex flex-col items-center justify-center"><Image src="/folder.png" height={50} width={50} alt="folder" />test</div>
          <div className="p-4 border border-[#74717136] rounded-md h-[120px] w-[120px] flex flex-col items-center justify-center"><Image src="/folder.png" height={50} width={50} alt="folder" />test</div>
          <div className="p-4 border border-[#74717136] rounded-md h-[120px] w-[120px] flex flex-col items-center justify-center"><Image src="/folder.png" height={50} width={50} alt="folder" />test</div>
        </div>
      </div>

      <div className="flex flex-col w-[95%] h-[370px] bg-white p-6 gap-4 mt-8 rounded-2xl overflow-y-scroll">
        <h2 className="font-semibold text-[15px]">Recent Files</h2>
        <div className="flex flex-row w-full p-2 border-b  border-[#00000027] pb-2">
          <h1 className="text-[#00000081] text-[15px] w-[40%]">Name</h1>
          <h1 className="text-[#00000081] text-[15px] w-[20%]">Modified</h1>
          <h1 className="text-[#00000081] text-[15px] w-[10%]">size</h1>
          <h1 className="text-[#00000081] text-[15px] w-[20%]"></h1>
        </div>

        <div className="flex flex-row w-full p-2">
          <h1 className="text-[18px] w-[40%] flex flex-row items-center gap-1"><Image src="/doc.png" height={30} width={30} alt="document"/>my_resume.doc</h1>
          <h1 className="text-[18px] w-[20%]">july 23, 2023</h1>
          <h1 className="text-[18px] w-[10%]">1.8 MB</h1>
          <h1 className="text-[18px] w-[20%]"></h1>
        </div>
        <div className="flex flex-row w-full p-2">
          <h1 className="text-[18px] w-[40%] flex flex-row items-center gap-1"><Image src="/doc.png" height={30} width={30} alt="document"/>my_resume.doc</h1>
          <h1 className="text-[18px] w-[20%]">july 23, 2023</h1>
          <h1 className="text-[18px] w-[10%]">1.8 MB</h1>
          <h1 className="text-[18px] w-[20%]"></h1>
        </div>
        <div className="flex flex-row w-full p-2">
          <h1 className="text-[18px] w-[40%] flex flex-row items-center gap-1"><Image src="/doc.png" height={30} width={30} alt="document"/>my_resume.doc</h1>
          <h1 className="text-[18px] w-[20%]">july 23, 2023</h1>
          <h1 className="text-[18px] w-[10%]">1.8 MB</h1>
          <h1 className="text-[18px] w-[20%]"></h1>
        </div>
        <div className="flex flex-row w-full p-2">
          <h1 className="text-[18px] w-[40%] flex flex-row items-center gap-1"><Image src="/doc.png" height={30} width={30} alt="document"/>my_resume.doc</h1>
          <h1 className="text-[18px] w-[20%]">july 23, 2023</h1>
          <h1 className="text-[18px] w-[10%]">1.8 MB</h1>
          <h1 className="text-[18px] w-[20%]"></h1>
        </div>
        <div className="flex flex-row w-full p-2">
          <h1 className="text-[18px] w-[40%] flex flex-row items-center gap-1"><Image src="/doc.png" height={30} width={30} alt="document"/>my_resume.doc</h1>
          <h1 className="text-[18px] w-[20%]">july 23, 2023</h1>
          <h1 className="text-[18px] w-[10%]">1.8 MB</h1>
          <h1 className="text-[18px] w-[20%]"></h1>
        </div>
        <div className="flex flex-row w-full p-2">
          <h1 className="text-[18px] w-[40%] flex flex-row items-center gap-1"><Image src="/doc.png" height={30} width={30} alt="document"/>my_resume.doc</h1>
          <h1 className="text-[18px] w-[20%]">july 23, 2023</h1>
          <h1 className="text-[18px] w-[10%]">1.8 MB</h1>
          <h1 className="text-[18px] w-[20%]"></h1>
        </div>
      </div>
    </div>
  );
}
