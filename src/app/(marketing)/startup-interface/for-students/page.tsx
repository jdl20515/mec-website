import Link from "next/link"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function ForStudents() {
  return (
    <div>
      <section id="for-students-hero" className="container mx-auto py-14">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-foreground mb-6 text-5xl leading-[1.2] font-bold tracking-tighter">
            For Students
          </h1>
          <p className="text-foreground/80 text-lg font-medium tracking-tight text-balance mb-8">
            Find opportunities to work with innovative startups and gain real-world entrepreneurial experience.
          </p>
        </div>
      </section>

      <section id="student-benefits" className="container mx-auto py-14">
        <h2 className="text-foreground mb-2 text-center text-5xl leading-[1.2] font-bold tracking-tighter">
          Why Join Startup Interface?
        </h2>
        <h3 className="text-foreground/80 mx-auto mb-8 max-w-2xl text-center text-lg font-medium tracking-tight text-balance">
          Connect with startups that are shaping the future and gain valuable experience.
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>Real-World Experience</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm">
                Work on real projects with startups that are making an impact. Gain hands-on experience in product development, business strategy, and more.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Build Your Network</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm">
                Connect with founders, investors, and other talented students who share your passion for entrepreneurship.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Career Opportunities</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm">
                Discover internship and full-time opportunities with startups that value innovation and impact.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Learn from Founders</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm">
                Work directly with experienced entrepreneurs and learn from their journey building successful companies.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="back-link" className="container mx-auto py-14 text-center">
        <Button variant="outline" asChild>
          <Link href="/startup-interface">Back to Startup Interface</Link>
        </Button>
      </section>
    </div>
  )
}
