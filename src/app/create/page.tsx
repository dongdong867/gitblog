import { cn } from "@/lib/utils";
import CreatePostForm from "./form";

const CreatePostPage = () => {
  return (
    <div className={cn("container max-w-[1000px] py-4 space-y-4")}>
      <div className={cn("text-3xl font-semibold tracking-tight")}>
        Create Post
      </div>
      <CreatePostForm />
    </div>
  );
};

export default CreatePostPage;
