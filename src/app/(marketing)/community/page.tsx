import Link from "next/link"
import { Users, Building2, Trophy } from "lucide-react"
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function Community() {
  return (
    <div>
      <section id="community-hero" className="container mx-auto py-14">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-foreground mb-6 text-5xl leading-[1.2] font-bold tracking-tighter">
            Community
          </h1>
          <p className="text-foreground/80 text-lg font-medium tracking-tight text-balance mb-8">
            The MIT Entrepreneurship Club is a tight-knit community of talented students passionate about tackling the world&apos;s toughest challenges with an entrepreneurial mindset.
          </p>
        </div>
      </section>

      <section id="about-mec" className="container mx-auto py-14">
        <h2 className="text-foreground mb-8 text-center text-5xl leading-[1.2] font-bold tracking-tighter">
          About MEC
        </h2>
        <div className="max-w-3xl mx-auto">
          <Card>
            <CardContent className="pt-6">
              <p className="text-lg text-center">
                We are the founder <strong>community</strong> at MIT. Our mission is to empower students to build the future through entrepreneurship, providing them with the resources, connections, and support needed to launch impactful ventures.
              </p>
              <p className="text-base text-center mt-4 text-muted-foreground">
                A leading campus club, we spearhead impactful initiatives, host engaging events, and partner with top VC firms. MEC has produced <em>Thiel Fellows</em> and startups that have gone on to accelerators like <em>Y Combinator</em>.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="community-sections" className="container mx-auto py-14">
        <h2 className="text-foreground mb-2 text-center text-5xl leading-[1.2] font-bold tracking-tighter">
          Explore Our Community
        </h2>
        <h3 className="text-foreground/80 mx-auto mb-8 max-w-2xl text-center text-lg font-medium tracking-tight text-balance">
          Meet the team, discover alumni startups, and connect with our partners.
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <Users className="h-6 w-6" />
                <CardTitle>Team</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm">
                Meet the passionate students leading the MIT Entrepreneurship Club.
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" asChild className="w-full">
                <Link href="/community/team">View Team</Link>
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <Trophy className="h-6 w-6" />
                <CardTitle>Alumni Startups</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm">
                Discover startups founded by MEC alumni and see where they are today.
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" asChild className="w-full">
                <Link href="/community/alumni">View Alumni</Link>
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <Building2 className="h-6 w-6" />
                <CardTitle>Partners & Mentors</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm">
                Connect with our partner organizations, mentors, and investors.
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" asChild className="w-full">
                <Link href="/community/partners">View Partners</Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </section>
    </div>
  )
}
