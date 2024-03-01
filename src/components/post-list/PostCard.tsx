// components
import Link from "next/link";
import UserLabel from "../UserLabel";
import PostLabel from "../PostLabel";
import { BiMessageDetail } from "react-icons/bi";
// utils
import { cn } from "@/lib/utils";
import { marked } from "@/lib/marked";

const PostCard = ({ post }: { post: Issue }) => {
  return (
    <Link href={"/" + post.number}>
      <div className={cn("size-full space-y-4 py-4 text-sm")}>
        {/* USER */}
        <UserLabel size={30} user={post.user} />

        {/* POST */}
        <div className={cn("space-y-1 md:space-y-2")}>
          <PostLabel labels={post.labels} />

          {/* POST TITLE */}
          <div
            className={cn("text-2xl md:text-3xl font-semibold tracking-tight")}
          >
            {post.title}
          </div>

          {/* POST BODY */}
          <div
            dangerouslySetInnerHTML={{ __html: marked.parse(post.body ?? "") }}
            className={cn("text-base line-clamp-2 leading-tight")}
          />
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
