import { cn } from "@/lib/utils";
import Image from "next/image";
import { BiMessageDetail } from "react-icons/bi";

const PostCard = ({ postData }: { postData: Issue }) => {
  return (
    <div className={cn("container text-lg space-y-6 py-8")}>
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

      <div>
        <div>{postData.labels.length > 0 ? postData.labels[0].name.toUpperCase() : ""}</div>
        <div className={cn("text-4xl font-semibold")}>{postData.title}</div>
      </div>

      <div className={cn("text-2xl line-clamp-2")}>{postData.body}</div>

      <div className={cn("flex place-items-center pt-6")}>
        <div className={cn("flex place-items-center space-x-1")}>
          <BiMessageDetail />
          <div>{postData.comments}</div>
        </div>
        <div>・</div>
        <div>{new Date(postData.created_at).toLocaleDateString()}</div>
      </div>
    </div>
  );
};

export default PostCard;
