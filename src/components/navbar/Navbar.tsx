// utils
import { cn } from "@/lib/utils";
// components
import Link from "next/link";
import Avatar from "./Avatar";
import Image from "next/image";
import ThemeToggle from "../ThemeToggle";
import CreatePostLink from "./CreatePostLink";
import { auth } from "@/auth";

const Navbar = async () => {
  const session = await auth();

  return (
    <div className={cn("size-full p-2 bg-gray6")}>
      <div
        className={cn("w-11/12 flex justify-between place-items-center m-auto")}
      >
        <Link href={"/"}>
          <Image
            src={"/icon.png"}
            alt=""
            width={40}
            height={40}
            className={cn("md:hidden")}
          />
          <Image
            src={"/logo.png"}
            alt=""
            width={120}
            height={40}
            className={cn("max-md:hidden")}
          />
        </Link>

        <div className={cn("flex place-items-center space-x-2")}>
          <div className={cn("size-full flex place-items-center")}>
            {session && <CreatePostLink />}
            <ThemeToggle />
          </div>
          <Avatar session={session} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
