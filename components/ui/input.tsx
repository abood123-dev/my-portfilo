import * as React from "react"

import { cn } from "@/lib/utils"

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-[48px] border border-white/10 focus:border-[#00ff99] rounded-md font-light bg-[#1c1c22] placeholder:text-white/60 outline-none px-6 md:pr-14 pr-12 py-4 text-white/60",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }
