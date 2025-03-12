"use client";

import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Login from "../components/LoginButton";
import Loading from "../components/Loading";

export default function Home() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    console.log("Email:", session?.user?.email);
    if (status === "authenticated") {
      router.push("/dashboard");
    }
  }, [session, status, router]);

  if (status === "loading") {
    return <Loading />;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      {status==="unauthenticated" && (
      <Login />
      )}
    </div>
  );
}
