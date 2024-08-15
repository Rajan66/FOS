import { Sheet, SheetClose, SheetContent, SheetFooter, SheetTrigger } from "@/components/ui/sheet";
import { LogOut, Menu } from "lucide-react";
import Image from "next/image";
import MblSidebarItem from "./MblSidebarRestItem";
import logo from "@/public/assets/logo.png";
import { sidebarLinks } from "./list/sidebarLinks";
import { auth } from "@/auth";
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
          alt="Restaurant Logo"
        />

        <div className="w-full flex flex-col gap-y-0 flex-grow">
          {sidebarLinks.map((item, index) => (
            <MblSidebarItem key={index} link={item.link} name={item.name} />
          ))}
        </div>
        <div className="flex justify-start items-center mb-10 mr-10">
          <LogoutBtn />
        </div>
      </SheetContent>
      <SheetFooter>

      </SheetFooter>
    </Sheet>
  );
};

export default DashboardMenu;