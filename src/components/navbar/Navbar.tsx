// utils
import { cn } from "@/lib/utils";
// components
import Link from "next/link";
import Avatar from "./Avatar";
import Image from "next/image";
import ThemeToggle from "../ThemeToggle";

const Navbar = async () => {
  return (
    <div className={cn("size-full p-4 bg-gray6")}>
      <div
        className={cn("w-11/12 flex justify-between place-items-center m-auto")}
      >
        <Link href={"/"}>
          <Image src={"/logo.png"} alt="" width={180} height={60} />
        </Link>

        <div className={cn("flex place-items-center space-x-8")}>
          <ThemeToggle />
          <Avatar />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
