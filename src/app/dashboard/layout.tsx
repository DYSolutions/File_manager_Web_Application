import Sidebar from "@/components/Sidebar";
import RightSidebar from "@/components/RightSidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
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
  );
}
