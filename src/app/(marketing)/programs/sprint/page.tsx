import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

export default function Sprint() {
  return (
    <div>
      <section id="sprint-hero" className="container mx-auto py-14">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-foreground mb-6 text-5xl leading-[1.2] font-bold tracking-tighter">
            MEC Sprint
          </h1>
          <p className="text-foreground/80 text-2xl font-medium tracking-tight text-balance mb-8">
            Take your startup to the next level with 36 hours of 0 barriers.
          </p>
          <div className="flex flex-col gap-4 mb-8">
            <p className="text-lg">• Prizes to be announced.</p>
            <p className="text-lg">• Expedited application processes with select VCs and accelerators.</p>
            <p className="text-lg">• Pitch <em>to</em> and closely work <em>with</em> potential investors and large customers</p>
            <p className="text-lg">• The best mentorship (from CEOs, founders, investors, research experts, etc.)</p>
          </div>
          <Button asChild size="lg" variant="secondary">
            <Link href="/apply">Apply Now</Link>
          </Button>
          <p className="text-sm text-muted-foreground mt-4">
            Applications due <strong>September 16, 2025 at 11:59pm ET.</strong>
          </p>
        </div>
      </section>

      <section id="sprint-details" className="container mx-auto py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-14">
          <Card>
            <CardHeader>
              <CardTitle>What?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm">
                A 36-hour hackathon where the most ambitious and skilled students will have unfettered access to all the resources and connections they need
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>When?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm font-semibold">
                October 4-6, 2024
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Where?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm">
                MIT&apos;s Campus (exact location TBD)
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Who?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm">
                All undergraduate students. One application per team of 2-3 members.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="flex justify-center mb-14">
          <Button asChild size="lg">
            <Link href="/apply">Apply Now</Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-14">

          <Card>
            <CardHeader>
              <CardTitle>Mentor</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm mb-4">
                Accelerate young startups&apos; progress with your experience.
              </p>
              <Button variant="outline" asChild>
                <a href="mailto:mec-president@mit.edu">Sign up to be a Mentor</a>
              </Button>
            </CardContent>
          </Card>
        </div>

        <section id="faqs" className="max-w-3xl mx-auto">
          <h2 className="text-foreground mb-8 text-3xl font-bold tracking-tighter text-center">
            FAQs
          </h2>
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Where can I find the itinerary?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm">
                  More detailed schedule will be posted closer to the event.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Will travel and lodging be reimbursed?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm">
                  No, we will not be covering any travel or stay expenses for this event.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Can I apply as an individual/solo founder?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm">
                  No, unfortunately, we are focusing on collaboration during this event, so we expect all submissions to come from teams of 2-3 members.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">What if I have more questions?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm">
                  Email <a href="mailto:mec-exec@mit.edu" className="text-primary underline">mec-exec@mit.edu</a> with your questions!
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      </section>
    </div>
  )
}

