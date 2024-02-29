"use client";

import { cn } from "@/lib/utils";
import { Switch } from "./ui/switch";
import { useState } from "react";
import { Textarea } from "./ui/textarea";
import { adjustedHeight, getBodyEditedValue } from "@/lib/post-body";
import { marked } from "@/lib/marked";

const PostBodyEditor = () => {
  const [showPreview, setShowPreview] = useState(false);

  return (
    <div className={cn("py-4 space-y-4")}>
      <div className={cn("flex place-items-center space-x-2 font-medium")}>
        <Switch
          id="show-preview"
          checked={showPreview}
          onCheckedChange={(checked) => setShowPreview(checked)}
        />
        <label htmlFor="show-preview">Show Preview</label>
      </div>

      <Textarea
        id="post-body"
        name="body"
        rows={5}
        onChange={() => adjustedHeight()}
        placeholder="Add post body here..."
        className={cn("font-mono resize-none", { hidden: showPreview })}
      />

      <div className={cn("preview")}>
        <div
          dangerouslySetInnerHTML={{
            __html: marked.parse(getBodyEditedValue()),
          }}
          className={cn({ hidden: !showPreview })}
        />
      </div>
    </div>
  );
};

export default PostBodyEditor;
