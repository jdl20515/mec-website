import Link from "next/link"
import { siteConfig } from "@/config/site"

export function SiteFooter() {
  return (
    <footer className="dark:bg-transparent">
      <div className="container mx-auto px-4 xl:px-6">
        <div className="flex h-14 items-center justify-between">
          <div className="text-muted-foreground w-full px-1 text-center text-xs leading-loose sm:text-sm">
            <div className="flex flex-wrap items-center justify-center gap-4">
              <span>© 2024 MIT Entrepreneurship Club</span>
              <Link
                href={siteConfig.links.linkedin}
                target="_blank"
                rel="noreferrer"
                className="font-medium underline underline-offset-4 hover:text-foreground"
              >
                LinkedIn
              </Link>
              <Link
                href={siteConfig.links.instagram}
                target="_blank"
                rel="noreferrer"
                className="font-medium underline underline-offset-4 hover:text-foreground"
              >
                Instagram
              </Link>
              <Link
                href="#"
                className="font-medium underline underline-offset-4 hover:text-foreground"
              >
                MEC 2024 Report
              </Link>
              <Link
                href="#"
                className="font-medium underline underline-offset-4 hover:text-foreground"
              >
                Accessibility
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
