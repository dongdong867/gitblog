// components
import UserLabel from "@/components/UserLabel";
import { Separator } from "@/components/ui/separator";
// utils
import { cn } from "@/lib/utils";

export const Author = ({ user }: { user: User }) => {
  return (
    <div className={cn("space-y-2")}>
      <div className={cn("text-gray text-sm font-medium")}>Author</div>
      <UserLabel size={40} user={user} />
      <Separator />
    </div>
  );
};
