"use client";

import { SheetClose } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

type MblSidebarItemProps = {
  link: string;
  name: string;
};

const MblSidebarItem = ({ link, name }: MblSidebarItemProps) => {
  const pathname = usePathname();
  return (
    <SheetClose asChild>
      <Link
        href={link}
        className={cn(
          "text-foreground transition duration-150 ease-in-out hover:bg-secondary/20 w-full font-medium opacity-60 text-base py-4 pl-8",
          {
            "text-secondary font-bold bg-secondary/20 opacity-100 border-r-[3px] border-r-secondary/80":
              pathname === link,
          }
        )}
      >
        {name}
      </Link>
    </SheetClose>
  );
};

export default MblSidebarItem;
