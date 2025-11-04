import Link from "next/link"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { siteConfig } from "@/config/site"

export default function ForStartups() {
  return (
    <div>
      <section id="for-startups-hero" className="container mx-auto py-14">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-foreground mb-6 text-5xl leading-[1.2] font-bold tracking-tighter">
            For Startups
          </h1>
          <p className="text-foreground/80 text-lg font-medium tracking-tight text-balance mb-8">
            Partner with MEC to connect with talented MIT students who are ready to make an impact.
          </p>
        </div>
      </section>

      <section id="startup-benefits" className="container mx-auto py-14">
        <h2 className="text-foreground mb-2 text-center text-5xl leading-[1.2] font-bold tracking-tighter">
          Why Partner with MEC?
        </h2>
        <h3 className="text-foreground/80 mx-auto mb-8 max-w-2xl text-center text-lg font-medium tracking-tight text-balance">
          Access top-tier talent and build relationships with the next generation of entrepreneurs.
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>Top Talent</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm">
                Connect with MIT students who are passionate, innovative, and ready to tackle challenging problems.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Fresh Perspectives</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm">
                Bring new ideas and approaches to your startup through collaborations with talented students.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Pipeline Building</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm">
                Build relationships with potential full-time hires and future entrepreneurs who understand your mission.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>MIT Network</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm">
                Tap into the broader MIT entrepreneurship ecosystem and connect with other innovative companies.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="contact-section" className="container mx-auto py-14">
        <div className="max-w-2xl mx-auto text-center">
          <Card>
            <CardHeader>
              <CardTitle>Get in Touch</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm mb-4">
                Interested in partnering with MEC? Reach out to learn more about how we can help connect you with talented MIT students.
              </p>
              <Button asChild>
                <Link href={`mailto:${siteConfig.emails.general}`}>Contact Us</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="back-link" className="container mx-auto py-14 text-center">
        <Button variant="outline" asChild>
          <Link href="/startup-interface">Back to Startup Interface</Link>
        </Button>
      </section>
    </div>
  )
}
