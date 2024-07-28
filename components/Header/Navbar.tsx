import Image from "next/image";
import logo from "@/public/assets/logo.png";
import Link from "next/link";
import { navItems } from "./list/navItems";
import NavItem from "./NavItem";
import { Button } from "@/components/ui/button";
import MblNavbar from "./MblNavbar";

const Navbar = () => {

  return (
    <header className="flex gap-5 justify-between bg-white mx-[20px] md:mx-[40px] 2xl:mx-[80px] my-2 max-md:flex-wrap">
      <Link href={"/"}>
        <Image
          src={logo}
          width={200}
          height={200}
          alt="Dual Brake Car Hire Logo"
          className="my-auto max-w-full w-[140px] mmd:w-[190px]"
        />
      </Link>
      <div className="flex gap-10">
        <nav className="hidden gap-[10px] mmd:flex items-center max-md:flex-wrap ">
          {navItems.map((link, index) => (
            <NavItem key={index} href={link.href} name={link.name} />
          ))}
        </nav>
        <Link
          href="#booking"
          className="hidden  mmd:flex justify-center items-center"
        >
          {/* replace the button later */}
          <button className="px-5 py-2.5 my-auto text-[16px] w-[201px] h-[54px] font-medium text-white uppercase bg-accent border-r-0 rounded-none">
            + Booking request
          </button>
        </Link>
        {/* <nav className="flex gap-5 max-md:flex-wrap"> */}
        <div className="flex mmd:hidden justify-center items-center">
          <MblNavbar />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
