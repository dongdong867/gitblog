// actions
import { getPosts } from "@/actions/posts.get";
// components
import PostsList from "@/components/post-list/PostsList";
// utils
import { cn } from "@/lib/utils";

const HomePage = async () => {
  const posts = await getPosts(1);

  return (
    <div className={cn("container h-screen max-w-[1000px] overflow-y-scroll")}>
      <PostsList defaultPosts={posts} />
    </div>
  );
};

export default HomePage;
