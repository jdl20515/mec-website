import Image from "next/image"
import Link from "next/link"
import { docsConfig } from "@/config/docs"
import { LogoButton } from "@/components/logo-button"
import { MainNav } from "@/components/main-nav"
import { MobileNav } from "@/components/mobile-nav"
import { Button } from "@/components/ui/button"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full bg-background text-black">
      <div className="mx-auto flex max-w-7xl items-center gap-3 px-4 sm:px-6">
        <LogoButton />
        <MainNav items={docsConfig.mainNav} className="ml-auto hidden xl:flex" />
        <Button asChild className="ml-auto hidden shrink-0 rounded-lg shadow-none xl:flex">
          <Link href="/apply">Apply Now</Link>
        </Button>
        <MobileNav className="ml-auto flex shrink-0 xl:hidden" />
        {/* Padding and the image margins preserve one M-width of clear space. */}
        <a href="https://web.mit.edu/" className="shrink-0 p-6">
          <Image
            src="/mit-logo-black.png"
            alt="Massachusetts Institute of Technology"
            width={80}
            height={50}
            className="h-auto w-20 mix-blend-multiply"
            priority
          />
        </a>
      </div>
    </header>
  )
}
