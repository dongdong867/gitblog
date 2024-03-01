// actions
import { getPost } from "@/actions/post.get";
import { updatePost } from "@/actions/update-post.patch";
// components
import EditPostForm from "@/components/edit-post/EditPostForm";
// utils
import { cn } from "@/lib/utils";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

const EditPostPage = async ({ params }: { params: { postNumber: number } }) => {
  const session = await auth();
  if (!session) {
    redirect("/");
  }

  const post = await getPost(params.postNumber);

  return (
    <div className={cn("container max-w-[1000px] py-4 space-y-4")}>
      <div className={cn("text-3xl font-semibold tracking-tight")}>
        Create Post
      </div>
      <EditPostForm post={post} actionLabel={"Update"} action={updatePost} />
    </div>
  );
};

export default EditPostPage;
