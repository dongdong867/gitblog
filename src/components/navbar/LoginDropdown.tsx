"use client";

// components
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Button } from "../ui/button";
// icons
import { MdFace } from "react-icons/md";
// utils
import { cn } from "@/lib/utils";
import { signIn } from "next-auth/react";

const LoginDropdown = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant={"ghost"}
          size={"icon"}
          className="size-10 bg-white rounded-full"
        >
          <MdFace className={cn("size-10 text-primary")} />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => signIn("github")}>
          Login with GitHub
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LoginDropdown;
