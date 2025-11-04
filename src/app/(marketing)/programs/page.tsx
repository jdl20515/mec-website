import Link from "next/link"
import { Rocket, Users, Calendar, Trophy } from "lucide-react"
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function Programs() {
  return (
    <div>
      <section id="programs-hero" className="container mx-auto py-14">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-foreground mb-6 text-5xl leading-[1.2] font-bold tracking-tighter">
            Programs
          </h1>
          <p className="text-foreground/80 text-lg font-medium tracking-tight text-balance mb-8">
            From idea to launch, we offer programs for every stage of your entrepreneurial journey.
          </p>
        </div>
      </section>

      <section id="programs-grid" className="container mx-auto py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <Rocket className="h-6 w-6" />
                <CardTitle>StartHouse</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm mb-4">
                10-week startup accelerator from idea to launch for student teams with the sponsored trip to the Silicon Valley.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="secondary">10 weeks</Badge>
                <Badge variant="secondary">Silicon Valley trip</Badge>
              </div>
              <p className="text-xs text-muted-foreground">
                Outcomes: Multiple teams shipped to market, Y Combinator acceptances
              </p>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full">
                <Link href="/programs/starthouse">Learn More</Link>
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <Users className="h-6 w-6" />
                <CardTitle>Startup Interface</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm mb-4">
                Matchmaking for mentors, resources, and partner organizations to support your startup journey.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="secondary">Mentors</Badge>
                <Badge variant="secondary">Resources</Badge>
              </div>
              <p className="text-xs text-muted-foreground">
                Connect with experienced entrepreneurs and access exclusive resources
              </p>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full">
                <Link href="/programs/startup-interface">Learn More</Link>
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <Calendar className="h-6 w-6" />
                <CardTitle>Spring Fellowship</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm mb-4">
                10-12 week intensive program with milestones, workshops, and demo day.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="secondary">10-12 weeks</Badge>
                <Badge variant="secondary">Demo Day</Badge>
              </div>
              <p className="text-xs text-muted-foreground">
                Structured program with regular milestones and mentorship support
              </p>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full">
                <Link href="/programs/spring">Learn More</Link>
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <Trophy className="h-6 w-6" />
                <CardTitle>HS Pitch Competition</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm mb-4">
                High school pitch competition with dates, eligibility, and starter resources.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="secondary">High School</Badge>
                <Badge variant="secondary">Competition</Badge>
              </div>
              <p className="text-xs text-muted-foreground">
                Showcase your startup idea and compete for prizes while learning from experienced entrepreneurs
              </p>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full">
                <Link href="/programs/hs-pitch">Learn More</Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </section>
    </div>
  )
}
