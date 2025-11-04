import { Card, CardContent } from "@/components/ui/card"

export default function About() {
  return (
    <div>
      <section id="about-hero" className="container mx-auto py-14">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-foreground mb-6 text-5xl leading-[1.2] font-bold tracking-tighter">
            About
          </h1>
        </div>
      </section>

      <section id="what-is-mec" className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-foreground mb-8 text-3xl font-bold tracking-tighter">
            What is MEC?
          </h2>
          
          <div className="space-y-4 text-base leading-relaxed">
            <p>
              We are the driving force behind MIT's undergraduate startup community, uniting hundreds of students dedicated to confronting global challenges with an entrepreneurial mindset.
            </p>

            <p>
              We serve as a crucial bridge for students seeking opportunities within the startup landscape, inspiring fellow students to pursue internships and full-time positions within startups through strategic partnerships.
            </p>

            <p>
              We are architects of opportunity, cultivating an environment where professionalism, inspiration, and meaningful connections converge to shape the next generation of entrepreneurial leaders.
            </p>
          </div>
        </div>
      </section>

      <section id="team-section" className="container mx-auto py-14">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-foreground mb-12 text-3xl font-bold tracking-tighter text-center">
            Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Team member cards will be added here */}
            <Card className="overflow-hidden">
              <CardContent className="p-6">
                <div className="aspect-square bg-muted rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-muted-foreground text-sm">Photo</span>
                </div>
                <h3 className="font-semibold text-lg mb-1">Team Member</h3>
                <p className="text-sm text-muted-foreground">Role</p>
              </CardContent>
            </Card>
            <Card className="overflow-hidden">
              <CardContent className="p-6">
                <div className="aspect-square bg-muted rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-muted-foreground text-sm">Photo</span>
                </div>
                <h3 className="font-semibold text-lg mb-1">Team Member</h3>
                <p className="text-sm text-muted-foreground">Role</p>
              </CardContent>
            </Card>
            <Card className="overflow-hidden">
              <CardContent className="p-6">
                <div className="aspect-square bg-muted rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-muted-foreground text-sm">Photo</span>
                </div>
                <h3 className="font-semibold text-lg mb-1">Team Member</h3>
                <p className="text-sm text-muted-foreground">Role</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
