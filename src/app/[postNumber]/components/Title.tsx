// components
import PostLabel from "@/components/PostLabel";
// utils
import { cn } from "@/lib/utils";

export const Title = ({
  labels,
  title,
}: {
  labels: Label[];
  title: string;
}) => {
  return (
    <div className={cn("space-y-2")}>
      <PostLabel labels={labels} />
      <div className={cn("text-3xl md:text-5xl font-bold tracking-tight")}>{title}</div>
    </div>
  );
};
