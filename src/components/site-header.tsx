import Link from "next/link"
import { docsConfig } from "@/config/docs"
import { LogoButton } from "@/components/logo-button"
import { MainNav } from "@/components/main-nav"
import { MobileNav } from "@/components/mobile-nav"
import { Button } from "@/components/ui/button"

export function SiteHeader() {
  return (
    <header className="bg-background sticky top-0 z-50 w-full">
      <div className="mx-auto max-w-7xl px-6 md:px-16">
        <div className="flex h-20 items-center gap-2">
          <LogoButton />
          <MainNav items={docsConfig.mainNav} className="hidden lg:flex" />
          <div className="flex flex-1 items-center justify-between gap-2 md:justify-end">
            <div className="ml-auto flex items-center gap-2 md:flex-1 md:justify-end">
              <Button
                asChild
                className="hidden md:flex rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 shadow-none border-0 px-3 py-5 text-[1.125rem] leading-7"
              >
                <Link href="/apply">Apply Now</Link>
              </Button>
            </div>
          </div>
          <MobileNav className="ml-auto flex lg:hidden" />
        </div>
      </div>
    </header>
  )
}
