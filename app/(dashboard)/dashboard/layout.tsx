"use client"
import { useSession } from "next-auth/react";
import Sidebar from "./_components/Sidebar";
import SidebarRest from "./_restaurantComponents/SidebarRest";
import TopBar from "./_components/TopBar";
import "@/app/globals.css";
import Loading from "@/components/Loading";
import { useRouter } from "next/navigation";
import TopRestBar from "./_restaurantComponents/TopRestBar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === 'loading') {
    return <span className='text-secondary'><Loading /></span>;
  }


  const userRole = session?.user?.role;
  console.log(userRole)

  if (userRole !== "ADMIN" && userRole !== "RESTAURANT") {
    router.push("/");
    return null;
  }


  if (userRole === "ADMIN") {
    return (
      <section className="flex overflow-x-hidden">
        <Sidebar />
        <div className="w-full flex flex-col gap-y-6 xvsm:gap-y-11">
          <TopBar />
          <div className="mx-[1rem] lg:ml-[19rem]">{children}</div>
        </div>
      </section>
    );
  }

  if (userRole === "RESTAURANT") {
    return (
      <section className="flex overflow-x-hidden">
        {/* Restaurant-specific layout */}
        <SidebarRest />
        <div className="w-full flex flex-col gap-y-6 xvsm:gap-y-11">
          <TopRestBar />
          <div className="mx-[1rem] lg:ml-[19rem]">{children}</div>
        </div>
      </section>
    );
  }
  return null;
}
