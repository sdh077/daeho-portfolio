'use client'
import * as React from "react"

import { cn } from "@/lib/utils"
import { v4 as uuidv4 } from 'uuid';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> { }

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-9 w-full rounded-md border border-input focus:border-primary bg-background px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
export interface FloatingInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string
}

export const FloatingInput = React.forwardRef<HTMLInputElement, FloatingInputProps>(
  ({ className, type, id, label, ...props }, ref) => {
    const uuid = id ?? uuidv4()
    return (
      <>
        <div className="relative">
          <input
            id={uuid}
            type={type}
            className={cn(
              "peer block h-18 w-full rounded-md border border-input bg-transparent px-3 py-4 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-primary disabled:cursor-not-allowed disabled:opacity-50",
              className
            )}
            ref={ref}
            {...props}
          />
          <label htmlFor={uuid} className="absolute left-8 top-[50%] -translate-y-[50%] transition-all peer-focus:-translate-y-6 peer-focus:top-4 peer-focus:bg-background peer-focus:text-sm">
            {label}
          </label>
        </div>
      </>
    )
  }
)
Input.displayName = "Input"
FloatingInput.displayName = "FloatingInput"

export { Input }
