// utils
import { auth } from "@/auth";
import { cn } from "@/lib/utils";
import UserDropdown from "./UserDropdown";
import LoginDropdown from "./LoginDropdown";

const Avatar = async () => {
  const session = await auth();

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
