import * as React from "react"
import { Switch as SwitchPrimitive } from "radix-ui"

import { cn } from "~/lib/utils"

function Switch({
  className,
  size = "default",
  variant = "purple",
  ...props
}: React.ComponentProps<typeof SwitchPrimitive.Root> & {
  size?: "sm" | "default"
  variant?: "purple" | "green"
}) {
  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      data-size={size}
      className={cn(
        "peer group/switch relative inline-flex shrink-0 items-center rounded-full border border-transparent shadow-xs transition-all outline-none after:absolute after:-inset-x-3 after:-inset-y-2 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 data-[size=default]:h-[18.4px] data-[size=default]:w-[32px] data-[size=sm]:h-[14px] data-[size=sm]:w-[24px] dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 data-checked:bg-primary data-unchecked:bg-input dark:data-unchecked:bg-input/80 data-disabled:cursor-not-allowed data-disabled:opacity-50",
        // sizes
        "data-[size=default]:h-[28px] data-[size=default]:w-[48px]",
        "data-[size=sm]:h-[14px] data-[size=sm]:w-[24px]",

        // variants
        variant === "purple" &&
        "data-[state=checked]:bg-brand-primary data-[state=unchecked]:bg-neutral-200",

        variant === "green" &&
        "data-[state=checked]:bg-switch-green data-[state=unchecked]:bg-neutral-200",
        className
      )}
      {...props}
    >
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className={cn(
          "pointer-events-none block rounded-full bg-white transition-transform",

          // size
          "group-data-[size=default]/switch:h-6 group-data-[size=default]/switch:w-6",
          "group-data-[size=sm]/switch:h-3 group-data-[size=sm]/switch:w-3",

          // movement
          "group-data-[state=checked]/switch:translate-x-[calc(100%-4px)]",
          "group-data-[state=unchecked]/switch:translate-x-0"
        )}
      />
    </SwitchPrimitive.Root>
  )
}

export { Switch }
