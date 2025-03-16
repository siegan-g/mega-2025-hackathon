"use client";
import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";

import { cn } from "../lib/utils";

const Label = React.forwardRef(({ className, ...props }, ref) => (
  <LabelPrimitive.Root
    ref={ref}
    className={cn(
      "text-sm md:text-base  max-w-4xl  mx-auto",
      "text-black  font-normal dark:text-neutral-300",
      "text-left max-w-sm mx-0 md:text-sm my-2 font-semibold"
    )}
    {...props}
  />
));
Label.displayName = LabelPrimitive.Root.displayName;

export { Label };
