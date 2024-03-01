"use client";

import { deletePost } from "@/actions/delete-post.patch";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { HiDotsHorizontal } from "react-icons/hi";

export const Options = ({ postNumber }: { postNumber: number }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          size={"icon"}
          variant={"ghost"}
          className={cn("size-max p-2 rounded-full")}
        >
          <HiDotsHorizontal size={20} className={cn("dark:hover:text-white")} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem asChild>
          <Link href={`${postNumber}/edit`}>Edit</Link>
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={async () => await deletePost(postNumber)}
          className={cn(
            "text-red focus:text-white focus:bg-red",
            "dark:focus:text-white dark:focus:bg-red"
          )}
        >
          Delete
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
