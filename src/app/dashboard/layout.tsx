"use client"
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Loading from "@/components/Loading";
import Sidebar from "@/components/Sidebar";
import RightSidebar from "@/components/RightSidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const router=useRouter()
    const {data:session,status}=useSession()
  
    useEffect(()=>{
      if(status==="unauthenticated"){
        router.push("/")
      }
    },[session,status,router])
  
    if (status === "loading") {
        return <Loading />;
      }

  return (
    <>
    {status==="authenticated" && (
    <div className="flex flex-row h-screen">
      <div className="w-[15%]">
        <Sidebar />
      </div>
      <div className="w-[55%]">
        {children}
      </div>
      <div className="w-[30%]">
        <RightSidebar />
      </div>
    </div>
    )}
    </>
  );
}
