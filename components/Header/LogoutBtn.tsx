"use client";

import { LogOut } from "lucide-react";
import { useSession } from "next-auth/react";
import React from "react";
import { logoutUser } from "@/lib/actions";

const LogoutBtn = () => {
  const session = useSession();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = await logoutUser();
    if (data) {
      window.location.reload();
    }
  };

  if (session?.data?.user) {
    return (
      <form className="w-full" onSubmit={handleSubmit}>
        <button
          type="submit"
          className="w-full pr-0 pl-[0.19rem] flex items-center gap-x-2"
        >
          <LogOut className="size-4" /> Logout
        </button>
      </form>
    );
  }

  return;
};

export default LogoutBtn;
