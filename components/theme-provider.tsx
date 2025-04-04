"use client"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import type { ThemeProviderProps } from "next-themes"

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  // The next-themes library already handles localStorage persistence
  // by default, so we don't need to add any additional code here
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}

