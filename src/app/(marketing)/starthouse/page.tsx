import Link from "next/link"
import { Rocket, Users, MapPin, Calendar } from "lucide-react"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function StartHouse() {
  return (
    <div>
      <section id="starthouse-hero" className="container mx-auto py-14">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-foreground mb-6 text-5xl leading-[1.2] font-bold tracking-tighter">
            StartHouse
          </h1>
          <p className="text-foreground/80 text-lg font-medium tracking-tight text-balance mb-8">
            10-week startup accelerator from idea to launch for student teams with the sponsored trip to the Silicon Valley.
          </p>
          <Button size="lg" asChild>
            <Link href="/apply">Apply Now</Link>
          </Button>
        </div>
      </section>

      <section id="program-overview" className="container mx-auto py-14">
        <h2 className="text-foreground mb-2 text-center text-5xl leading-[1.2] font-bold tracking-tighter">
          Program Overview
        </h2>
        <h3 className="text-foreground/80 mx-auto mb-8 max-w-2xl text-center text-lg font-medium tracking-tight text-balance">
          Take your startup from idea to launch with intensive mentorship, resources, and a trip to Silicon Valley.
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <Calendar className="h-6 w-6" />
                <CardTitle>10 Weeks</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm">
                Intensive 10-week program designed to accelerate your startup from concept to launch.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <Users className="h-6 w-6" />
                <CardTitle>Mentorship</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm">
                Work closely with experienced entrepreneurs, investors, and industry experts.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <Rocket className="h-6 w-6" />
                <CardTitle>Launch Ready</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm">
                Build, test, and launch your product with support from idea to market.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <MapPin className="h-6 w-6" />
                <CardTitle>Silicon Valley</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm">
                Sponsored trip to Silicon Valley to network with VCs, startups, and industry leaders.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="past-cohorts" className="container mx-auto py-14">
        <h2 className="text-foreground mb-8 text-center text-5xl leading-[1.2] font-bold tracking-tighter">
          Past Cohorts
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>IAP 2024</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm mb-4">
                Check out the latest cohort and their projects.
              </p>
              <Button variant="outline" asChild>
                <Link href="/starthouse/iap-2024">View IAP 2024</Link>
              </Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>IAP 2023</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm mb-4">
                See what previous cohorts accomplished.
              </p>
              <Button variant="outline" asChild>
                <Link href="/starthouse/iap-2023">View IAP 2023</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
