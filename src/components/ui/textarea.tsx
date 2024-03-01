import * as React from "react"

import { cn } from "@/lib/utils"

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "flex w-full min-h-[80px] rounded-md border border-slate-200 bg-white px-3 py-2 text-sm placeholder:text-gray focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray3 dark:bg-gray5 dark:placeholder:text-gray",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Textarea.displayName = "Textarea"

export { Textarea }
