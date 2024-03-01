// components
import Link from "next/link";
// icons
import { FaArrowLeftLong } from "react-icons/fa6";
// utils
import { cn } from "@/lib/utils";

export const BackLink = ({ createAt }: { createAt: string }) => {
  return (
    <Link href={"/"}>
      <div className={cn("flex place-items-center space-x-2 py-2")}>
        <FaArrowLeftLong size={14} />
        <div>{new Date(createAt).toLocaleDateString()}</div>
      </div>
    </Link>
  );
};
