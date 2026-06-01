import * as React from "react"
import { cn } from "~/lib/utils"
import { ChevronDownIcon } from "lucide-react"

interface DropdownProps {
  value?: string
  onValueChange?: (value: string) => void
  placeholder?: string
  children: React.ReactNode
  className?: string
}

interface DropdownItemProps {
  value: string
  children: React.ReactNode
  className?: string
}

const DropdownContext = React.createContext<{
  value?: string
  onValueChange?: (value: string) => void
  open: boolean
  setOpen: (open: boolean) => void
}>({
  open: false,
  setOpen: () => {}
})

function Dropdown({ value, onValueChange, placeholder, children, className }: DropdownProps) {
  const [open, setOpen] = React.useState(false)
  const [selectedValue, setSelectedValue] = React.useState(value)
  
  const handleSelect = (itemValue: string) => {
    setSelectedValue(itemValue)
    onValueChange?.(itemValue)
    setOpen(false)
  }
  
  return (
    <DropdownContext.Provider value={{ value: selectedValue, onValueChange: handleSelect, open, setOpen }}>
      <div className={cn("relative", className)}>
        {children}
      </div>
    </DropdownContext.Provider>
  )
}

function DropdownTrigger({ className, children, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const { open, setOpen } = React.useContext(DropdownContext)
  
  return (
    <button
      type="button"
      className={cn(
        "flex w-full items-center justify-between gap-1.5 rounded-lg border border-neutral-stroke bg-neutral-50 px-3 py-2 text-sm text-brand-secondary transition-colors outline-none focus:border-ring focus:ring-2 focus:ring-ring/20",
        className
      )}
      onClick={() => setOpen(!open)}
      {...props}
    >
      {children}
      <ChevronDownIcon className="h-4 w-4 shrink-0 opacity-50" />
    </button>
  )
}

function DropdownValue({ placeholder, className }: { placeholder?: string; className?: string }) {
  const { value } = React.useContext(DropdownContext)
  
  return (
    <span className={cn("text-brand-secondary text-base font-regular", className)}>
      {value || placeholder}
    </span>
  )
}

function DropdownContent({ className, children }: { className?: string; children: React.ReactNode }) {
  const { open } = React.useContext(DropdownContext)
  const contentRef = React.useRef<HTMLDivElement>(null)
  
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (contentRef.current && !contentRef.current.contains(event.target as Node)) {
        const context = React.useContext(DropdownContext)
        context.setOpen(false)
      }
    }
    
    if (open) {
      document.addEventListener('mousedown', handleClickOutside)
    }
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [open])
  
  if (!open) return null
  
  return (
    <div
      ref={contentRef}
      className={cn(
        "absolute top-full left-0 right-0 z-[9999] mt-1 rounded-lg border border-neutral-stroke bg-popover p-1 shadow-lg",
        className
      )}
    >
      {children}
    </div>
  )
}

function DropdownItem({ value, children, className }: DropdownItemProps) {
  const { value: selectedValue, onValueChange } = React.useContext(DropdownContext)
  const isSelected = value === selectedValue
  
  return (
    <button
      type="button"
      className={cn(
        "relative flex w-full cursor-pointer items-center gap-1.5 rounded-md px-2 py-2 text-sm outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
        isSelected && "bg-accent text-accent-foreground",
        className
      )}
      onClick={() => onValueChange?.(value)}
    >
      {children}
    </button>
  )
}

export { Dropdown, DropdownTrigger, DropdownValue, DropdownContent, DropdownItem }
