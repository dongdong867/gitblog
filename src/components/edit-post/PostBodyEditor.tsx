"use client";

// components
import { Switch } from "../ui/switch";
import { Textarea } from "../ui/textarea";
// hooks
import { useEffect, useState } from "react";
// utils
import { cn } from "@/lib/utils";
import { marked } from "@/lib/marked";
import { adjustedHeight, getBodyEditedValue } from "@/lib/post-body";

const PostBodyEditor = ({
  defaultValue,
  hasError,
}: {
  defaultValue?: string;
  hasError: boolean;
}) => {
  const [showPreview, setShowPreview] = useState(false);
  const [preview, setPreview] = useState("");

  useEffect(() => {
    adjustedHeight()
  }, []);

  return (
    <div className={cn("py-4 space-y-4")}>
      <div className={cn("flex place-items-center space-x-2 font-medium")}>
        <Switch
          id="show-preview"
          checked={showPreview}
          onCheckedChange={(checked) => {
            setPreview(getBodyEditedValue());
            setShowPreview(checked);
          }}
        />
        <label htmlFor="show-preview">Show Preview</label>
      </div>

      <Textarea
        id="post-body"
        name="body"
        rows={5}
        onChange={() => adjustedHeight()}
        placeholder="Add post body here..."
        defaultValue={defaultValue}
        className={cn(
          "font-mono resize-none",
          { hidden: showPreview },
          { "border-2 border-red": hasError }
        )}
      />

      <div className={cn("min-h-10 preview rounded-md", "border border-slate-200 dark:border-gray3", {hidden: !showPreview})}>
        <div
          dangerouslySetInnerHTML={{
            __html: marked.parse(preview),
          }}
        />
      </div>
    </div>
  );
};

export default PostBodyEditor;
