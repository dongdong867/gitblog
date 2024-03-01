"use client";

// actions
import { getMessages } from "@/actions/messages.get";
// components
import Message from "@/components/Message";
import MessageSkeleton from "./MessageSkeleton";
import { Separator } from "@/components/ui/separator";
// utils
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

import { useInView } from "react-intersection-observer";

export const Messages = ({
  postNumber,
  defaultMessages,
}: {
  postNumber: number;
  defaultMessages: Message[];
}) => {
  const [hasMore, setHasMore] = useState(defaultMessages.length == 10);
  const [page, setPage] = useState(2);
  const [messages, setMessages] = useState(defaultMessages);

  const { ref, inView } = useInView();

  useEffect(() => {
    if (hasMore && inView) {
      loadMore();
    }
  }, [inView]);

  const loadMore = async () => {
    const addition = await getMessages(postNumber, page);
    if (addition.length < 10) {
      setHasMore(false);
    }
    setMessages([...messages, ...addition]);
    setPage(page + 1);
  };

  return (
    <div>
      <div className={cn("text-3xl font-semibold tracking-tight pb-4")}>
        Comments ({messages.length})
      </div>
      {messages.map((message) => {
        return (
          <div key={message.id}>
            <Message message={message} />
            <Separator />
          </div>
        );
      })}
      <div ref={ref}>
        {hasMore ? (
          <MessageSkeleton />
        ) : (
          <div className={cn("py-8 text-center text-gray3 font-medium")}>
            No more comments!
          </div>
        )}
      </div>
    </div>
  );
};
