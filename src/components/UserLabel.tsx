// components
import Image from "next/image";
// utils
import { cn } from "@/lib/utils";

const UserLabel = ({ size, user }: { size: number; user: User }) => {
  return (
    <div className={cn("flex place-items-center space-x-2")}>
      <Image
        src={user.avatar_url}
        alt=""
        width={size}
        height={size}
        className={cn("rounded-full")}
      />
      <div className={cn("text-sm font-medium md:text-base")}>{user.login}</div>
    </div>
  );
};

export default UserLabel;
