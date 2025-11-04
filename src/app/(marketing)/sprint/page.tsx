import Link from "next/link"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function Sprint() {
  return (
    <div>
      <section id="sprint-hero" className="container mx-auto py-14">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-foreground mb-6 text-5xl leading-[1.2] font-bold tracking-tighter">
            Sprint
          </h1>
          <p className="text-foreground/80 text-lg font-medium tracking-tight text-balance mb-8">
            Fast-paced program to rapidly develop and test your startup idea.
          </p>
        </div>
      </section>

      <section id="program-details" className="container mx-auto py-14">
        <h2 className="text-foreground mb-2 text-center text-5xl leading-[1.2] font-bold tracking-tighter">
          Program Details
        </h2>
        <h3 className="text-foreground/80 mx-auto mb-8 max-w-2xl text-center text-lg font-medium tracking-tight text-balance">
          Intensive program structure designed to accelerate your startup journey.
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>Timeline</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm">
                Sprint program details and timeline information coming soon.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Structure</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm">
                Program structure and curriculum information coming soon.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Outcomes</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm">
                Past sprint outcomes and success stories coming soon.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>How to Participate</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm mb-4">
                Learn more about how to get involved in the Sprint program.
              </p>
              <Button variant="outline" asChild>
                <Link href="/apply">Apply Now</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
