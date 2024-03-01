"use client";

// actions
import { getPosts } from "@/actions/posts.get";
// components
import PostCard from "./PostCard";
import { Separator } from "../ui/separator";
import PostCardSkeleton from "./PostCardSkeleton";
// hooks
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
// utils
import { cn } from "@/lib/utils";

const PostsList = ({ defaultPosts }: { defaultPosts: Issue[] }) => {
  const [hasMore, setHasMore] = useState(defaultPosts.length == 10);
  const [page, setPage] = useState(2);
  const [posts, setPosts] = useState(defaultPosts);
  const { ref, inView } = useInView();

  useEffect(() => {
    if (hasMore && inView) {
      loadMore();
    }
  }, [inView]);

  const loadMore = async () => {
    const addition = await getPosts(page);
    if (addition.length < 10) {
      setHasMore(false);
    }
    setPosts([...posts, ...addition]);
    setPage(page + 1);
  };

  return (
    <>
      {posts.length > 0 &&
        posts.map((post) => {
          return (
            <div key={post.number}>
              <PostCard post={post} />
              <Separator />
            </div>
          );
        })}
      <div ref={ref} className={cn("py-4")}>
        {hasMore ? (
          <div>
            <PostCardSkeleton />
          </div>
        ) : (
          <div className={cn("py-8 text-center text-gray3 font-medium")}>
            No more posts!
          </div>
        )}
      </div>
    </>
  );
};

export default PostsList;
