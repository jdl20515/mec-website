import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Alumni() {
  return (
    <div>
      <section id="alumni-hero" className="container mx-auto py-14">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-foreground mb-6 text-5xl leading-[1.2] font-bold tracking-tighter">
            Alumni Startups
          </h1>
          <p className="text-foreground/80 text-lg font-medium tracking-tight text-balance mb-8">
            Discover startups founded by MEC alumni and see where they are today.
          </p>
        </div>
      </section>

      <section id="alumni-filters" className="container mx-auto py-14">
        <div className="max-w-5xl mx-auto mb-8">
          <div className="flex flex-wrap gap-2 justify-center">
            <Badge variant="secondary">All</Badge>
            <Badge variant="outline">2024</Badge>
            <Badge variant="outline">2023</Badge>
            <Badge variant="outline">2022</Badge>
            <Badge variant="outline">Tech</Badge>
            <Badge variant="outline">Bio</Badge>
            <Badge variant="outline">Consumer</Badge>
            <Badge variant="outline">Hardware</Badge>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Startup cards will be added here */}
          <Card>
            <CardHeader>
              <CardTitle>Startup Name</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2 mb-3">
                <Badge variant="secondary">2024</Badge>
                <Badge variant="secondary">Tech</Badge>
              </div>
              <p className="text-sm mb-3">
                One-liner description of what the startup does...
              </p>
              <p className="text-xs text-muted-foreground">
                Founded by MEC Alumni
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
