// components
import Image from "next/image";
import { Badge } from "./ui/badge";
import { BiMessageDetail } from "react-icons/bi";
import Link from "next/link";
// utils
import { cn } from "@/lib/utils";

const PostCard = ({ postData }: { postData: Issue }) => {
  return (
    <Link href={"/" + postData.number}>
      <div className={cn("container max-w-[1000px] space-y-4 py-4 text-sm")}>
        {/* USER */}
        <div className={cn("flex place-items-center space-x-2")}>
          <Image
            src={postData.user.avatar_url}
            alt=""
            width={30}
            height={30}
            className={cn("rounded-full")}
          />
          <div>{postData.user.login}</div>
        </div>

        {/* POST */}
        <div className={cn("space-y-1 md:space-y-2")}>
          <Badge className={cn("text-white bg-primary")}>
            {postData.labels.length > 0
              ? postData.labels[0].name.toUpperCase()
              : ""}
          </Badge>

          <div className={cn("text-xl md:text-2xl font-semibold")}>
            {postData.title}
          </div>

          <div className={cn("text-base line-clamp-2 leading-tight")}>
            {postData.body}
          </div>
        </div>

        <div className={cn("flex place-items-center pt-2 text-gray")}>
          {/* COMMENTS */}
          <div className={cn("flex place-items-center space-x-1")}>
            <BiMessageDetail />
            <div>{postData.comments}</div>
          </div>

          <div>・</div>

          {/* DATE */}
          <div>{new Date(postData.created_at).toLocaleDateString()}</div>
        </div>
      </div>
    </Link>
  );
};

export default PostCard;
