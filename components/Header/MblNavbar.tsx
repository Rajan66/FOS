import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import MblNavItem from "./MblNavItem";
import Image from "next/image";
import { navItems } from "./list/navItems";
import logo from "@/public/assets/logo.png"

const MblNavbar = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <Menu className="size-8" />
      </SheetTrigger>
      <SheetContent
        side={"left"}
        className="flex flex-col items-center p-0 py-20 bg-white"
      >
        <Image
          src={logo}
          width={100}
          height={100}
          alt="Dual Brake Car Hire Logo"
          className="w-[150px]"
        />

        <div className="w-full flex flex-col gap-y-0">
          {navItems.map((link, index) => (
            <MblNavItem key={index} href={link.href} name={link.name} />
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MblNavbar;
