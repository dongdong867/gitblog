// components
import { Skeleton } from "../ui/skeleton";
// utils
import { cn } from "@/lib/utils";

const PostCardSkeleton = () => {
  return (
    <div className={cn("py-4 space-y-4")}>
      {/* User */}
      <div className={cn("flex place-items-center space-x-2")}>
        <Skeleton className={cn("size-[30px] rounded-full")} />
        <Skeleton className={cn("w-20 h-4")} />
      </div>

      {/* Title */}
      <Skeleton className={cn("w-1/2 h-8")} />

      {/* Body */}
      <div className={cn("space-y-2")}>
        <Skeleton className={cn("w-full h-4")} />
        <Skeleton className={cn("w-full h-4")} />
      </div>

      {/* Footer */}
      <Skeleton className={cn("w-1/3 h-4")} />
    </div>
  );
};

export default PostCardSkeleton;
