// utils
import { auth } from "@/auth";
import { cn } from "@/lib/utils";
import UserDropdown from "./UserDropdown";
import LoginDropdown from "./LoginDropdown";
import { Session } from "next-auth";

const Avatar = ({session}: {session: Session | null}) => {
  return session ? (
    <UserDropdown
      imageLink={session.user?.image ?? ""}
      email={session.user?.email ?? ""}
    />
  ) : (
    <LoginDropdown />
  );
};

export default Avatar;
