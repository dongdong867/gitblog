// actions
import { getPost } from "@/actions/post.get";
import { getMessages } from "@/actions/messages.get";
// components
import { Title } from "./components/Title";
import { Author } from "./components/Author";
import { Options } from "./components/Options";
import { Messages } from "./components/Messages";
import { BackLink } from "./components/BackLink";
import { Separator } from "@/components/ui/separator";
// utils
import { cn } from "@/lib/utils";
import { marked } from "@/lib/marked";
import { auth } from "@/auth";
import { getUser } from "@/actions/user.get";

const PostPage = async ({ params }: { params: { postNumber: number } }) => {
  const post = await getPost(params.postNumber);
  const messages = await getMessages(params.postNumber, 1);

  let showOptions;
  const session = await auth();
  if (session) {
    showOptions = (await getUser()).login == post.user.login;
  } else {
    showOptions = false;
  }

  return (
    <div className={cn("container max-w-[1000px] space-y-8 py-8")}>
      <div className={cn("space-y-12")}>
        <div
          className={cn(
            "flex justify-between place-items-center",
            "text-sm text-gray"
          )}
        >
          <BackLink createAt={post.created_at} />
          {showOptions && <Options postNumber={params.postNumber} />}
        </div>
        <Title labels={post.labels} title={post.title} />
        <Author user={post.user} />
      </div>

      {/* Body */}
      <div
        className={cn("preview")}
        dangerouslySetInnerHTML={{ __html: marked.parse(post.body ?? "") }}
      />

      <Separator />
      <Messages postNumber={params.postNumber} defaultMessages={messages} />
    </div>
  );
};

export default PostPage;
