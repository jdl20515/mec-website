import Link from "next/link"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function IAP2023() {
  return (
    <div>
      <section id="iap-2023-hero" className="container mx-auto py-14">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-foreground mb-6 text-5xl leading-[1.2] font-bold tracking-tighter">
            StartHouse IAP 2023
          </h1>
          <p className="text-foreground/80 text-lg font-medium tracking-tight text-balance mb-8">
            Previous cohort of StartHouse participants and their innovative projects.
          </p>
        </div>
      </section>

      <section id="cohort-projects" className="container mx-auto py-14">
        <h2 className="text-foreground mb-8 text-center text-5xl leading-[1.2] font-bold tracking-tighter">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Project cards will be added here */}
          <Card>
            <CardHeader>
              <CardTitle>Project Name</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm">
                Project description coming soon...
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="back-link" className="container mx-auto py-14 text-center">
        <Button variant="outline" asChild>
          <Link href="/starthouse">Back to StartHouse</Link>
        </Button>
      </section>
    </div>
  )
}
