"use client";

// actions
import { createPost } from "@/actions/create-post";
// components
import { Input } from "@/components/ui/input";
import PostBodyEditor from "@/components/PostBodyEditor";
import CreatePostButton from "@/components/CreatePostButton";
// hooks
import { useFormState } from "react-dom";
import { useEffect, useState } from "react";
// utils
import { cn } from "@/lib/utils";
import toast from "react-hot-toast";

const initialState = {
  name: "",
  error: "",
};

const CreatePostForm = () => {
  const [titleError, setTitleError] = useState(false);
  const [bodyError, setBodyError] = useState(false);
  const [state, formAction] = useFormState(createPost, initialState);

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
          className={cn({ "border-2 border-red": titleError })}
        />
      </div>

      {/* Label */}
      <div>
        <label htmlFor="post-title" className={cn("text-sm font-medium")}>
          Label:
        </label>
        <Input id="post-label" name="label" placeholder="Enter label name" />
      </div>

      {/* Body */}
      <PostBodyEditor hasError={bodyError} />
      {/* Submit */}
      <CreatePostButton />
    </form>
  );
};

export default CreatePostForm;
