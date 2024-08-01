import { LogOut } from "lucide-react";
import React from "react";
import DashboardMenu from "./DashboardMenu";
import { auth, signOut } from "@/auth";

const TopBar = async () => {
  const session = await auth();

  return (
    <div className="lg:ml-[15.65rem] py-4 px-4 md:px-10 shadow flex justify-between items-center">
      <div className="flex items-center gap-3">
        <DashboardMenu />
      </div>

      <div className="flex items-center gap-x-5">
        <div className="size-[40px] bg-secondary flex items-center justify-center rounded-full bg-gray-300 text-background text-lg font-semibold">
          {session?.user?.name?.charAt(0)}
        </div>
      </div>
    </div>
  );
};

export default TopBar;
