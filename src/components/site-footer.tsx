import Link from "next/link"
import { siteConfig } from "@/config/site"

export function SiteFooter() {
  return (
    <footer className="dark:bg-transparent">
      <div className="border-t border-border">
        <div className="container mx-auto px-4 xl:px-6">
          <div className="py-8">
            <div className="text-muted-foreground w-full px-1 text-center text-xs leading-loose sm:text-sm">
              <address className="mb-5 text-sm not-italic leading-relaxed">
                Massachusetts Institute of Technology<br />
                77 Massachusetts Avenue<br />
                Cambridge, MA 02139
              </address>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <span>© {new Date().getFullYear()} MIT Entrepreneurship Club</span>
                <Link
                  href={`mailto:${siteConfig.emails.general}`}
                  className="font-medium underline underline-offset-4 hover:text-foreground"
                >
                  {siteConfig.emails.general}
                </Link>
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
                  href="https://accessibility.mit.edu/"
                  target="_blank"
                  rel="noreferrer"
                  className="font-medium underline underline-offset-4 hover:text-foreground"
                >
                  Accessibility
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
