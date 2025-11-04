import Link from "next/link"
import { docsConfig } from "@/config/docs"
import { Separator } from "@/components/ui/separator"
import { CommandMenu } from "@/components/command-menu"
import { LogoButton } from "@/components/logo-button"
import { MainNav } from "@/components/main-nav"
import { MobileNav } from "@/components/mobile-nav"
import { ModeToggle } from "@/components/mode-toggle"
import { Button } from "@/components/ui/button"

export function SiteHeader() {
  return (
    <header className="bg-background sticky top-0 z-50 w-full">
      <div className="container mx-auto px-3">
        <div className="flex h-20 items-center gap-2">
          <MobileNav className="flex lg:hidden" />
          <LogoButton />
          <MainNav items={docsConfig.mainNav} className="hidden lg:flex" />
          <div className="flex flex-1 items-center justify-between gap-2 md:justify-end">
            <div className="ml-auto flex items-center gap-2 md:flex-1 md:justify-end">
              {/* <div className="hidden w-full flex-1 md:flex md:w-auto md:flex-none">
                <CommandMenu />
              </div>
              <Separator
                orientation="vertical"
                className="ml-2 hidden lg:block"
              /> */}
              <ModeToggle />
              <Separator orientation="vertical" />
              <Button
                variant="ghost"
                asChild
                className="hidden md:flex rounded-lg bg-background text-foreground hover:bg-background/80 shadow-none border-0 text-base py-5 px-3"
              >
                <Link href="/login">Member Login</Link>
              </Button>
              <Button
                asChild
                className="hidden md:flex rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 shadow-none border-0 text-base py-5 px-3"
              >
                <Link href="/apply">Apply Now</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
