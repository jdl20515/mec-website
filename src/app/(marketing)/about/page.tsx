import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

export default function About() {
  return (
    <div>
      <section id="about-hero" className="container mx-auto py-14">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-foreground mb-6 text-5xl leading-[1.2] font-bold tracking-tighter">
            About MEC
          </h1>
          <p className="text-foreground/80 text-lg font-medium tracking-tight text-balance mb-8">
            The MIT Entrepreneurship Club is a tight-knit community of talented students passionate about tackling the world's toughest challenges with an entrepreneurial mindset.
          </p>
        </div>
      </section>

      <section id="mission" className="container mx-auto py-14">
        <h2 className="text-foreground mb-8 text-center text-5xl leading-[1.2] font-bold tracking-tighter">
          Our Mission
        </h2>
        <div className="max-w-3xl mx-auto">
          <Card>
            <CardContent className="pt-6">
              <p className="text-lg text-center">
                We are the founder <strong>community</strong> at MIT. Our mission is to empower students to build the future through entrepreneurship, providing them with the resources, connections, and support needed to launch impactful ventures.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="what-we-do" className="container mx-auto py-14">
        <h2 className="text-foreground mb-2 text-center text-5xl leading-[1.2] font-bold tracking-tighter">
          What We Do
        </h2>
        <h3 className="text-foreground/80 mx-auto mb-8 max-w-2xl text-center text-lg font-medium tracking-tight text-balance">
          A leading campus club, we spearhead impactful initiatives, host engaging events, and partner with top VC firms.
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>Community Building</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm">
                We foster a tight-knit community of founders, mentors, and friends who support each other in building the future.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Accelerator Programs</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm">
                Through StartHouse and other programs, we guide student teams from idea to launch with mentorship, resources, and connections.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Industry Connections</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm">
                We partner with top VC firms, legal experts, and successful entrepreneurs to provide our members with unparalleled access to the startup ecosystem.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Success Stories</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm">
                MEC has produced <em>Thiel Fellows</em> and startups that have gone on to accelerators like <em>Y Combinator</em>.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
