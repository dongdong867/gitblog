import Link from "next/link";
import { Button } from "../ui/button";
import { BiMessageSquareEdit } from "react-icons/bi";
import { cn } from "@/lib/utils";

const CreatePostLink = () => {
  return (
    <Link href={"create"} className={cn("size-10")}>
      <Button size={"icon"} variant={"ghost"} className={cn("rounded-full")}>
        <BiMessageSquareEdit className={cn("size-full p-2 text-primary dark:text-white")} />
      </Button>
    </Link>
  );
};

export default CreatePostLink;
