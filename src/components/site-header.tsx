import { docsConfig } from "@/config/docs"
import { Separator } from "@/components/ui/separator"
import { CommandMenu } from "@/components/command-menu"
import { DiscordLink } from "@/components/discord-link"
import { GitHubLink } from "@/components/github-link"
import { LogoButton } from "@/components/logo-button"
import { MainNav } from "@/components/main-nav"
import { MobileNav } from "@/components/mobile-nav"
import { ModeToggle } from "@/components/mode-toggle"

export function SiteHeader() {
  return (
    <header className="bg-background sticky top-0 z-50 w-full">
      <div className="container mx-auto px-6">
        <div className="flex h-14 items-center gap-2">
          <MobileNav className="flex lg:hidden" />
          <LogoButton />
          <MainNav items={docsConfig.mainNav} className="hidden lg:flex" />
          <div className="flex flex-1 items-center justify-between gap-2 md:justify-end">
            <div className="ml-auto flex items-center gap-2 md:flex-1 md:justify-end">
              <div className="hidden w-full flex-1 md:flex md:w-auto md:flex-none">
                <CommandMenu />
              </div>
              <Separator
                orientation="vertical"
                className="ml-2 hidden lg:block"
              />
              <GitHubLink />
              <Separator orientation="vertical" className="hidden" />
              <DiscordLink />
              <Separator orientation="vertical" />
              <ModeToggle />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
