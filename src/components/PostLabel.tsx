import { cn } from "@/lib/utils";
import { Badge } from "./ui/badge";

const PostLabel = ({ labels }: { labels: Label[] }) => {
  return labels.length > 0 ? (
    <Badge className={cn("text-white bg-primary")}>
      {labels[0].name.toUpperCase()}
    </Badge>
  ) : (
    <></>
  );
};

export default PostLabel;
