import Image from "next/image"
import Link from "next/link"
import { docsConfig } from "@/config/docs"
import { LogoButton } from "@/components/logo-button"
import { MainNav } from "@/components/main-nav"
import { MobileNav } from "@/components/mobile-nav"
import { Button } from "@/components/ui/button"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white text-black">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-16">
        <div className="flex items-center justify-between gap-2 sm:gap-4">
          <LogoButton />
          {/* The supplied image has built-in margins. Padding keeps the
              clear space above the width of its M (about 31px). */}
          <a href="https://web.mit.edu/" className="shrink-0 p-6">
            <Image
              src="/mit-logo-black.png"
              alt="Massachusetts Institute of Technology"
              width={80}
              height={50}
              className="h-auto w-20"
              priority
            />
          </a>
        </div>
        <p className="pb-4 text-lg font-medium leading-tight md:hidden">
          MIT Entrepreneurship Club
        </p>
        <div className="flex min-h-14 items-center justify-between gap-4 border-t border-black/10 py-2">
          <MainNav items={docsConfig.mainNav} className="hidden lg:flex" />
          <MobileNav className="flex lg:hidden" />
          <Button asChild className="ml-auto rounded-lg shadow-none">
            <Link href="/apply">Apply Now</Link>
          </Button>
        </div>
      </div>
    </header>
  )
}
