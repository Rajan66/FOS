"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Item = {
  link: string;
  name: string;
};

type SidebarItemProps = {
  item: Item;
};

const SidebarItem = ({ item: { link, name } }: SidebarItemProps) => {
  const pathname = usePathname();
  return (
    <Link
      href={link}
      className={cn(
        "flex items-center gap-x-1 text-foreground transition duration-150 ease-in-out hover:bg-secondary/20 w-full font-medium opacity-60 text-lg py-4 pl-8",
        {
          "text-secondary font-bold bg-secondary/20 opacity-100 border-r-[4px] border-r-secondary/80":
            pathname === link || (link !== '/dashboard' && pathname.startsWith(link)),
        }
      )}
    >
      {name}
    </Link>
  );
};

export default SidebarItem;