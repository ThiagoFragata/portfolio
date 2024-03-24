'use client'
import { ThemeProvider } from "@/theme/theme-provider";

import { useTheme } from "next-themes";
import { ReactNode } from "react";

export default function Providers({ children }: { children: ReactNode }) {
  const { theme } = useTheme()

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
    >
      {children}
    </ThemeProvider>
  )
}