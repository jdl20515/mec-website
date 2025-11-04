import Link from "next/link"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { siteConfig } from "@/config/site"

export default function Partners() {
  return (
    <div>
      <section id="partners-hero" className="container mx-auto py-14">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-foreground mb-6 text-5xl leading-[1.2] font-bold tracking-tighter">
            Partners & Mentors
          </h1>
          <p className="text-foreground/80 text-lg font-medium tracking-tight text-balance mb-8">
            We partner with top VC firms, legal experts, and successful entrepreneurs to provide our members with unparalleled access to the startup ecosystem.
          </p>
        </div>
      </section>

      <section id="partner-logos" className="container mx-auto py-14">
        <h2 className="text-foreground mb-8 text-center text-5xl leading-[1.2] font-bold tracking-tighter">
          Our Partners
        </h2>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
            {/* Partner logos will be added here */}
            <div className="text-center text-muted-foreground text-sm">
              Partner Logo
            </div>
            <div className="text-center text-muted-foreground text-sm">
              Partner Logo
            </div>
            <div className="text-center text-muted-foreground text-sm">
              Partner Logo
            </div>
            <div className="text-center text-muted-foreground text-sm">
              Partner Logo
            </div>
          </div>
        </div>
      </section>

      <section id="partner-cta" className="container mx-auto py-14">
        <div className="max-w-2xl mx-auto text-center">
          <Card>
            <CardHeader>
              <CardTitle>Interested in Partnering?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm mb-4">
                Partner with MEC to connect with talented MIT students, access top-tier talent, and build relationships with the next generation of entrepreneurs.
              </p>
              <Button asChild>
                <Link href={`mailto:${siteConfig.emails.general}?subject=Partnership Inquiry`}>
                  Partner Interest Form
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
