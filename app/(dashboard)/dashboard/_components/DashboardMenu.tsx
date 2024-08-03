import { Sheet, SheetClose, SheetContent, SheetFooter, SheetTrigger } from "@/components/ui/sheet";
import { LogOut, Menu } from "lucide-react";
import Image from "next/image";
import MblSidebarItem from "./MblSidebarItem";
import logo from "@/public/assets/logo.png";
import { sidebarLinks } from "./list/sidebarLinks";
import { auth, signOut } from "@/auth";
import { Button } from "@/components/ui/button";
import LogoutBtn from "@/components/LogoutBtn";

const DashboardMenu = async () => {
  const session = await auth();
  const userRole = session?.user?.role;

  return (
    <Sheet>
      <SheetTrigger>
        <Menu className="size-7 lg:hidden block" />
      </SheetTrigger>
      <SheetContent
        side={"left"}
        className="w-[200px] flex flex-col items-center p-0 pt-20 gap-y-5 bg-white"
      >
        <Image
          src={logo}
          width={120}
          height={120}
          alt="Dual Brake Car Hire Logo"
        />

        <div className="w-full flex flex-col gap-y-0 flex-grow">
          {sidebarLinks.map((item, index) => (
            <MblSidebarItem key={index} link={item.link} name={item.name} />
          ))}
        </div>
        <LogoutBtn />
      </SheetContent>
      <SheetFooter>

      </SheetFooter>
    </Sheet>
  );
};

export default DashboardMenu;
