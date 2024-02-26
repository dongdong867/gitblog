// components
import Link from "next/link";
import { BiMessageDetail } from "react-icons/bi";
// utils
import { cn } from "@/lib/utils";
import PostLabel from "./PostLabel";
import PostUser from "./PostUser";

const PostCard = ({ post }: { post: Issue }) => {
  return (
    <Link href={"/" + post.number}>
      <div className={cn("container max-w-[1000px] space-y-4 py-4 text-sm")}>
        {/* USER */}
        <PostUser size={30} user={post.user} />

        {/* POST */}
        <div className={cn("space-y-1 md:space-y-2")}>
          <PostLabel labels={post.labels} />

          <div className={cn("text-xl md:text-2xl font-semibold")}>
            {post.title}
          </div>

          <div className={cn("text-base line-clamp-2 leading-tight")}>
            {post.body}
          </div>
        </div>

        <div className={cn("flex place-items-center pt-2 text-gray")}>
          {/* COMMENTS */}
          <div className={cn("flex place-items-center space-x-1")}>
            <BiMessageDetail />
            <div>{post.comments}</div>
          </div>

          <div>・</div>

          {/* DATE */}
          <div>{new Date(post.created_at).toLocaleDateString()}</div>
        </div>
      </div>
    </Link>
  );
};

export default PostCard;
