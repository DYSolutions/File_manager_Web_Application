"use client"

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Loading from "@/components/Loading";

export default function Dashboard() {
const router=useRouter()
  const {data:session,status}=useSession()

  // useEffect(()=>{
  //   if(status==="unauthenticated"){
  //     router.push("/")
  //   }
  // },[session,status,router])

  // if (status === "loading") {
  //     return <Loading />;
  //   }

  return (
    <div className="p-4 min-h-screen w-full">
      <h1 className="text-2xl font-bold">Welcome</h1>
      <p>Email: </p>
    </div>
  );
}
