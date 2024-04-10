// components
import UserLabel from "./UserLabel";
// utils
import { cn } from "@/lib/utils";
import { marked } from "@/lib/marked";

const Message = ({ message }: { message: Message }) => {
  return (
    <div className={cn("py-4 space-y-4")}>
      <div className={cn("flex justify-between place-items-center")}>
        <UserLabel size={40} user={message.user} />
        <div className={cn("pr-4 text-gray text-xs md:text-sm")}>
          {new Date(message.created_at).toLocaleString()}
        </div>
      </div>
      <div
        dangerouslySetInnerHTML={{ __html: marked.parse(message.body) }}
        className={cn("px-4 text-sm preview")}
      />
    </div>
  );
};

export default Message;
