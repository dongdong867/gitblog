"use client";

// components
import { Button } from "../ui/button";
// hooks
import { useFormStatus } from "react-dom";
// utils
import { cn } from "@/lib/utils";

const SubmitButton = ({ label }: { label: string }) => {
  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      disabled={pending}
      className={cn(
        "bg-primary dark:bg-blue dark:text-foreground dark:hover:bg-[rgb(0,122,255)]/80"
      )}
    >
      <div>{label}</div>
    </Button>
  );
};

export default SubmitButton;
