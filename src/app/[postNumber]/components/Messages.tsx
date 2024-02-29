// actions
import { getMessages } from "@/actions/get-messages";
// components
import Message from "@/components/Message";
import { Separator } from "@/components/ui/separator";
// utils
import { cn } from "@/lib/utils";

export const Messages = async ({ postNumber }: { postNumber: number }) => {
  const messages = await getMessages(postNumber);
  return (
    <div>
      <div className={cn("text-3xl font-semibold tracking-tight pb-4")}>
        Comments
      </div>
      {messages.map((message) => {
        return (
          <>
            <Message message={message} />
            <Separator />
          </>
        );
      })}
    </div>
  );
};
