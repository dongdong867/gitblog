import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

const MessageSkeleton = () => {
  return (
    <div className={cn("space-y-4")}>
      {/* User */}
      <div className={cn("flex justify-between place-items-center")}>
        <div className={cn("flex place-items-center space-x-2")}>
          <Skeleton className={cn("size-10 rounded-full")} />
          <Skeleton className={cn("w-20 h-4")} />
        </div>
        <Skeleton className={cn("w-40 h-4")} />
      </div>

      {/* Content */}
      <div className={cn("space-y-2")}>
        <Skeleton className={cn("w-full h-4")} />
        <Skeleton className={cn("w-full h-4")} />
      </div>
    </div>
  );
};

export default MessageSkeleton;
