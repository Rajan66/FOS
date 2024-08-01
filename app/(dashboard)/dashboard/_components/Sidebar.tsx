import Image from "next/image";
import Link from "next/link";
import { sidebarLinks } from "./list/sidebarLinks";
import SidebarItem from "./SidebarItem";
import logo from "@/public/assets/logo.png";
import { Role } from "@/next-auth";
import { Button } from "@/components/ui/button";
import { auth, signOut } from "@/auth";
import { LogOut } from "lucide-react";

const Sidebar = async () => {
  const session = await auth();
  const userRole = session?.user?.role;

  return (
    <aside className="custom-scrollbar hidden py-10 fixed left-0 top-0 h-screen overflow-y-auto w-[250px] bg-zinc-200 text-background lg:flex flex-col items-center gap-y-14 border-r border-r-secondary">
      <Link href={"/"}>
        <Image
          src={logo}
          width={160}
          height={160}
          alt="Right Choice Driving School Logo"
        />
      </Link>
      <div className="w-full flex flex-col gap-y-5 flex-grow">
        <div className="w-full flex flex-col gap-1">
          {sidebarLinks.map((sideItem, index) => (
            <SidebarItem key={index} item={sideItem} />
          ))}
        </div>
      </div>
      <form
        className="w-full px-4"
        action={async () => {
          "use server";
          await signOut({ redirectTo: "/" });
        }}
      >
        <Button className="font-bold hidden gap-1 md:flex md:justify-start md:items-center ">
          <LogOut className="size-6" strokeWidth={3} />
          &nbsp; <span className="text-lg">Logout</span>
        </Button>
      </form>
    </aside>
  );
};

export default Sidebar;
