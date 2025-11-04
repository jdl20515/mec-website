import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

export default function Team() {
  return (
    <div>
      <section id="team-hero" className="container mx-auto py-14">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-foreground mb-6 text-5xl leading-[1.2] font-bold tracking-tighter">
            Our Team
          </h1>
          <p className="text-foreground/80 text-lg font-medium tracking-tight text-balance mb-8">
            Meet the passionate students leading the MIT Entrepreneurship Club.
          </p>
        </div>
      </section>

      <section id="team-members" className="container mx-auto py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Team member cards will be added here */}
          <Card>
            <CardHeader>
              <CardTitle>Team Member</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-2">Role</p>
              <p className="text-sm">
                Bio coming soon...
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
