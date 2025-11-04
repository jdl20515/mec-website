import Link from "next/link"
import { siteConfig } from "@/config/site"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function SiteFooter() {
  return (
    <footer className="dark:bg-transparent">
      {/* Newsletter signup bar */}
      <div className="border-t border-border">
        <div className="container mx-auto px-4 xl:px-6 py-8">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-foreground text-lg font-semibold text-center mb-4">
              Stay updated with MEC
            </h3>
            <form className="flex gap-2 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="flex-1"
              />
              <Button type="submit">Subscribe</Button>
            </form>
          </div>
        </div>
      </div>

      {/* Footer CTAs */}
      <div className="border-t border-border">
        <div className="container mx-auto px-4 xl:px-6 py-6">
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button variant="outline" size="sm" asChild>
              <Link href="/apply">Apply</Link>
            </Button>
            <Button variant="outline" size="sm" asChild>
              <Link href={`mailto:${siteConfig.emails.general}?subject=Sponsorship Inquiry`}>Sponsor</Link>
            </Button>
            <Button variant="outline" size="sm" asChild>
              <Link href={`mailto:${siteConfig.emails.general}`}>Contact</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Footer links */}
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
