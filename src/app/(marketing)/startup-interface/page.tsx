import Link from "next/link"
import { GraduationCap, Building2 } from "lucide-react"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function StartupInterface() {
  return (
    <div>
      <section id="startup-interface-hero" className="container mx-auto py-14">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-foreground mb-6 text-5xl leading-[1.2] font-bold tracking-tighter">
            Startup Interface
          </h1>
          <p className="text-foreground/80 text-lg font-medium tracking-tight text-balance mb-8">
            Connecting MIT students with innovative startups for internships, projects, and career opportunities.
          </p>
        </div>
      </section>

      <section id="interface-options" className="container mx-auto py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <GraduationCap className="h-6 w-6" />
                <CardTitle>For Students</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm mb-4">
                Find opportunities to work with innovative startups, gain real-world experience, and build your entrepreneurial network.
              </p>
              <Button asChild>
                <Link href="/startup-interface/for-students">Learn More</Link>
              </Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <Building2 className="h-6 w-6" />
                <CardTitle>For Startups</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm mb-4">
                Connect with talented MIT students who are passionate about building the future and ready to make an impact.
              </p>
              <Button asChild>
                <Link href="/startup-interface/for-startups">Learn More</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
