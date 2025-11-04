import Link from "next/link"
import { Mail, Linkedin, Instagram } from "lucide-react"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { siteConfig } from "@/config/site"

export function Contact() {
  return (
    <section id="contact" className="container mx-auto py-14">
      <h2 className="text-foreground mb-2 text-center text-5xl leading-[1.2] font-bold tracking-tighter">
        how to reach us
      </h2>
      <h3 className="text-foreground/80 mx-auto mb-8 max-w-2xl text-center text-lg font-medium tracking-tight text-balance">
        questions? concerns? just want to connect? stay updated?
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        <Card>
          <CardHeader>
            <div className="flex items-center gap-3">
              <Mail className="h-6 w-6" />
              <CardTitle>Emails</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-2 text-sm">
              <div>
                <strong>General:</strong>
                <br />
                <a href={`mailto:${siteConfig.emails.general}`} className="text-primary hover:underline">
                  {siteConfig.emails.general}
                </a>
              </div>
              <div>
                <strong>Leadership:</strong>
                <br />
                <a href={`mailto:${siteConfig.emails.leadership}`} className="text-primary hover:underline">
                  {siteConfig.emails.leadership}
                </a>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <div className="flex items-center gap-3">
              <Linkedin className="h-6 w-6" />
              <CardTitle>LinkedIn</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm mb-3">
              The best way to stay updated on everything going on at MEC.
            </p>
            <Link
              href={siteConfig.links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="text-primary hover:underline text-sm"
            >
              Follow us on LinkedIn
            </Link>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <div className="flex items-center gap-3">
              <Instagram className="h-6 w-6" />
              <CardTitle>Instagram</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm mb-3">
              Stay connected. Stay informed. Follow us on Instagram.
            </p>
            <Link
              href={siteConfig.links.instagram}
              target="_blank"
              rel="noreferrer"
              className="text-primary hover:underline text-sm"
            >
              Follow us on Instagram
            </Link>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
