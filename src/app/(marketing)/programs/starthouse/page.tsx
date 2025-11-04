import Link from "next/link"
import { Rocket, Users, MapPin, Calendar, DollarSign, Award } from "lucide-react"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

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

      <section id="outcomes" className="container mx-auto py-14">
        <h2 className="text-foreground mb-2 text-center text-5xl leading-[1.2] font-bold tracking-tighter">
          Outcomes
        </h2>
        <h3 className="text-foreground/80 mx-auto mb-8 max-w-2xl text-center text-lg font-medium tracking-tight text-balance">
          See what our alumni have achieved
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <DollarSign className="h-8 w-8" />
                <CardTitle>Funding Raised</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold mb-2">$2M+</p>
              <p className="text-sm text-muted-foreground">By alumni teams</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <Rocket className="h-8 w-8" />
                <CardTitle>Teams Shipped</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold mb-2">50+</p>
              <p className="text-sm text-muted-foreground">Products launched</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <Award className="h-8 w-8" />
                <CardTitle>Accelerator Acceptances</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold mb-2">15+</p>
              <p className="text-sm text-muted-foreground">Y Combinator, Thiel Fellowship, etc.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="timeline" className="container mx-auto py-14">
        <h2 className="text-foreground mb-2 text-center text-5xl leading-[1.2] font-bold tracking-tighter">
          Timeline
        </h2>
        <h3 className="text-foreground/80 mx-auto mb-8 max-w-2xl text-center text-lg font-medium tracking-tight text-balance">
          Key milestones throughout the program
        </h3>
        <div className="max-w-3xl mx-auto">
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Badge>Week 1-2</Badge>
                  <CardTitle>Ideation & Validation</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm">Refine your idea, conduct user interviews, and validate market need.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Badge>Week 3-6</Badge>
                  <CardTitle>MVP Development</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm">Build and test your minimum viable product with mentor support.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Badge>Week 7-8</Badge>
                  <CardTitle>User Acquisition</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm">Launch to early users and iterate based on feedback.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Badge>Week 9</Badge>
                  <CardTitle>Silicon Valley Trip</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm">Network with VCs, startups, and industry leaders in the Bay Area.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Badge>Week 10</Badge>
                  <CardTitle>Demo Day</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm">Present your startup to investors, mentors, and the community.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="perks" className="container mx-auto py-14">
        <h2 className="text-foreground mb-2 text-center text-5xl leading-[1.2] font-bold tracking-tighter">
          Perks
        </h2>
        <h3 className="text-foreground/80 mx-auto mb-8 max-w-2xl text-center text-lg font-medium tracking-tight text-balance">
          Credits, discounts, and exclusive resources
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Cloud Credits</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm">AWS, GCP, and Azure credits for your infrastructure needs.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Design Tools</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm">Figma, Adobe Creative Suite, and other design tool discounts.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Legal Support</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm">Free legal consultations and document templates.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Software Discounts</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm">Exclusive discounts on Notion, Vercel, Retool, and more.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="alumni-case-studies" className="container mx-auto py-14">
        <h2 className="text-foreground mb-2 text-center text-5xl leading-[1.2] font-bold tracking-tighter">
          From the Program
        </h2>
        <h3 className="text-foreground/80 mx-auto mb-8 max-w-2xl text-center text-lg font-medium tracking-tight text-balance">
          Alumni success stories
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>Startup Name 1</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm mb-3">
                Description of what the startup does and how StartHouse helped them succeed.
              </p>
              <div className="flex flex-wrap gap-2 mb-3">
                <Badge variant="secondary">Y Combinator</Badge>
                <Badge variant="secondary">$1M+ Raised</Badge>
              </div>
              <p className="text-xs text-muted-foreground">
                - Alumni Name, Co-founder
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Startup Name 2</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm mb-3">
                Another success story about how StartHouse accelerated their journey from idea to launch.
              </p>
              <div className="flex flex-wrap gap-2 mb-3">
                <Badge variant="secondary">Thiel Fellowship</Badge>
                <Badge variant="secondary">500+ Users</Badge>
              </div>
              <p className="text-xs text-muted-foreground">
                - Alumni Name, Founder
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
                <Link href="/programs/starthouse/iap-2024">View IAP 2024</Link>
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
                <Link href="/programs/starthouse/iap-2023">View IAP 2023</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="faq" className="container mx-auto py-14">
        <h2 className="text-foreground mb-8 text-center text-5xl leading-[1.2] font-bold tracking-tighter">
          FAQ
        </h2>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Who can apply to StartHouse?</AccordionTrigger>
              <AccordionContent>
                StartHouse is open to all MIT students, graduate and undergraduate, who have a startup idea or early-stage venture. Teams of 2-4 people are encouraged.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>What is the time commitment?</AccordionTrigger>
              <AccordionContent>
                The program runs for 10 weeks during IAP (Independent Activities Period). Expect to dedicate 15-20 hours per week to your startup, including weekly meetings with mentors and workshops.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Is there funding provided?</AccordionTrigger>
              <AccordionContent>
                While we don't provide direct funding, participants receive credits for cloud services, legal consultations, and access to our investor network. Many teams go on to raise funding after the program.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>When are applications due?</AccordionTrigger>
              <AccordionContent>
                Applications for StartHouse typically open in the fall and are due in early December. Check our website for specific deadlines.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>What happens after the program ends?</AccordionTrigger>
              <AccordionContent>
                Alumni receive ongoing support through MEC, including access to our network, office hours, and community events. Many continue to work on their startups and raise funding.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <section id="cta" className="container mx-auto py-14 text-center">
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle>Ready to apply?</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm mb-4">
              Join the next cohort of StartHouse and accelerate your startup journey.
            </p>
            <Button size="lg" asChild>
              <Link href="/apply">Apply to StartHouse</Link>
            </Button>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}
