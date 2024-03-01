// actions
import { createPost } from "@/actions/create-post.post";
// components
import EditPostForm from "@/components/edit-post/EditPostForm";
// utils
import { auth } from "@/auth";
import { cn } from "@/lib/utils";
import { redirect } from "next/navigation";

const CreatePostPage = async () => {
  const session = await auth();
  if (!session) {
    redirect("/");
  }

  return (
    <div className={cn("container max-w-[1000px] py-4 space-y-4")}>
      <div className={cn("text-3xl font-semibold tracking-tight")}>
        Create Post
      </div>
      <EditPostForm actionLabel={"Create"} action={createPost} />
    </div>
  );
};

export default CreatePostPage;
