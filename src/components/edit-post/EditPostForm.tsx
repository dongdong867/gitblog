"use client";

// components
import { Input } from "../ui/input";
import SubmitButton from "./SubmitButton";
import PostBodyEditor from "./PostBodyEditor";
// hooks
import { useFormState } from "react-dom";
import { useEffect, useState } from "react";
// utils
import { cn } from "@/lib/utils";
import toast from "react-hot-toast";

type EditPostFormProps = {
  post?: Issue;
  actionLabel: "Create" | "Update";
  action: (
    prevState: {
      postNumber?: number;
      name: string;
      error: string;
    },
    formData: FormData
  ) => Promise<{
    postNumber?: number;
    name: string;
    error: string;
  }>;
};

const initialState = (postNumber: number) => {
  return {
    postNumber: postNumber,
    name: "",
    error: "",
  };
};

const EditPostForm = ({ post, actionLabel, action }: EditPostFormProps) => {
  const [titleError, setTitleError] = useState(false);
  const [bodyError, setBodyError] = useState(false);

  const [state, formAction] = useFormState(action, initialState(post?.number ?? 0));

  useEffect(() => {
    setTitleError(false);
    setBodyError(false);

    if (state.error.length > 0) {
      toast.error(state.error, { duration: 5000 });
      switch (state.name) {
        case "title":
          setTitleError(true);
          break;
        case "body":
          setBodyError(true);
          break;
        default:
          break;
      }
    }
  }, [state]);

  return (
    <form action={formAction} className={cn("space-y-2")}>
      {/* Title */}
      <div>
        <label htmlFor="post-title" className={cn("text-sm font-medium")}>
          Title:
        </label>
        <Input
          id="post-title"
          name="title"
          placeholder="Title"
          defaultValue={post?.title}
          className={cn({ "border-2 border-red": titleError })}
        />
      </div>

      {/* Label */}
      <div>
        <label htmlFor="post-title" className={cn("text-sm font-medium")}>
          Label:
        </label>
        <Input
          id="post-label"
          name="label"
          placeholder="Enter label name"
          defaultValue={post?.labels[0].name}
        />
      </div>

      <PostBodyEditor defaultValue={post?.body} hasError={bodyError} />
      <SubmitButton label={`${actionLabel} Post`} />
    </form>
  );
};

export default EditPostForm;
