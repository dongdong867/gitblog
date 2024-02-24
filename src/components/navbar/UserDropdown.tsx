"use client";

// components
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import Image from "next/image";

// utils
import { cn } from "@/lib/utils";
import { signOut } from "next-auth/react";

const UserDropdown = ({ imageLink, email }: { imageLink: string, email: string }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Image
          src={imageLink}
          alt=""
          width={50}
          height={50}
          className={cn("rounded-full")}
        />
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end">
        <DropdownMenuLabel className={cn("text-gray")}>{email}</DropdownMenuLabel>
        <DropdownMenuItem
          onClick={() => signOut()}
        >
          <div className={cn("text-base text-red hover:text-red")}>Sign out</div>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserDropdown;
