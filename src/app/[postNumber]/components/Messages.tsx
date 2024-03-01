// actions
import { getMessages } from "@/actions/messages.get";
// components
import Message from "@/components/Message";
import { Separator } from "@/components/ui/separator";
// utils
import { cn } from "@/lib/utils";

export const Messages = ({ messages }: { messages: Message[] }) => {
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
    </div>
  );
};
