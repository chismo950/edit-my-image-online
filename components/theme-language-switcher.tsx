"use client"

import { useState } from "react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuLabel,
} from "@/components/ui/dropdown-menu"
import { Sun, Moon, Monitor, Settings } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function ThemeLanguageSwitcher() {
  const { theme, setTheme } = useTheme()
  const { language, setLanguage, t } = useLanguage()
  const [open, setOpen] = useState(false)

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Settings className="h-[1.2rem] w-[1.2rem]" />
          <span className="sr-only">Settings</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>{t("theme")}</DropdownMenuLabel>
        <DropdownMenuItem onClick={() => setTheme("light")}>
          <Sun className="mr-2 h-4 w-4" />
          <span>{t("light")}</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          <Moon className="mr-2 h-4 w-4" />
          <span>{t("dark")}</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          <Monitor className="mr-2 h-4 w-4" />
          <span>{t("system")}</span>
        </DropdownMenuItem>

        <DropdownMenuSeparator />

        <DropdownMenuLabel>{t("language")}</DropdownMenuLabel>
        <DropdownMenuItem onClick={() => setLanguage("en")}>
          <span className="mr-2">🇺🇸</span>
          <span>{t("english")}</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setLanguage("es")}>
          <span className="mr-2">🇪🇸</span>
          <span>{t("spanish")}</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setLanguage("fr")}>
          <span className="mr-2">🇫🇷</span>
          <span>{t("french")}</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setLanguage("ja")}>
          <span className="mr-2">🇯🇵</span>
          <span>{t("japanese")}</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setLanguage("ko")}>
          <span className="mr-2">🇰🇷</span>
          <span>{t("korean")}</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setLanguage("zh-TW")}>
          <span className="mr-2">🇹🇼</span>
          <span>{t("chineseTraditional")}</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setLanguage("zh-CN")}>
          <span className="mr-2">🇨🇳</span>
          <span>{t("chineseSimplified")}</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

