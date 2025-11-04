import Link from "next/link"
import { Trophy, BookOpen, Award, Calendar } from "lucide-react"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function HSPitchCompetition() {
  return (
    <div>
      <section id="hs-pitch-hero" className="container mx-auto py-14">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-foreground mb-6 text-5xl leading-[1.2] font-bold tracking-tighter">
            HS Pitch Competition
          </h1>
          <p className="text-foreground/80 text-lg font-medium tracking-tight text-balance mb-8">
            High school pitch competition for the next generation of entrepreneurs.
          </p>
        </div>
      </section>

      <section id="competition-overview" className="container mx-auto py-14">
        <h2 className="text-foreground mb-2 text-center text-5xl leading-[1.2] font-bold tracking-tighter">
          Competition Overview
        </h2>
        <h3 className="text-foreground/80 mx-auto mb-8 max-w-2xl text-center text-lg font-medium tracking-tight text-balance">
          Showcase your startup idea and compete for prizes while learning from experienced entrepreneurs.
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <BookOpen className="h-6 w-6" />
                <CardTitle>Rules</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm">
                Competition rules and eligibility requirements coming soon.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <Award className="h-6 w-6" />
                <CardTitle>Prizes</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm">
                Prize information and judging criteria coming soon.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <Calendar className="h-6 w-6" />
                <CardTitle>Application</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm">
                Application process and deadlines coming soon.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <Trophy className="h-6 w-6" />
                <CardTitle>Past Winners</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm">
                Showcase of past winners and their pitches coming soon.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="cta-section" className="container mx-auto py-14 text-center">
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle>Ready to Pitch?</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm mb-4">
              Applications for the next HS Pitch Competition will open soon. Stay tuned for updates!
            </p>
            <Button variant="outline" asChild>
              <Link href="/apply">Get Notified</Link>
            </Button>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}
