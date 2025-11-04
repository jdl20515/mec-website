import { Rocket, Users, Mic, Moon, Sparkles } from "lucide-react"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

export function Initiatives() {
  return (
    <section id="initiatives" className="container mx-auto py-14">
      <h2 className="text-foreground mb-2 text-center text-5xl leading-[1.2] font-bold tracking-tighter">
        how we equip our entrepreneurs
      </h2>
      <h3 className="text-foreground/80 mx-auto mb-8 max-w-2xl text-center text-lg font-medium tracking-tight text-balance">
        A leading campus club, we spearhead impactful initiatives, host a myriad of engaging events, and partner with top VC firms. MEC has produced <em>Thiel Fellows</em> and startups have gone on to accelerators like <em>Y Combinator</em>.
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <div className="flex items-center gap-3">
              <Rocket className="h-6 w-6" />
              <CardTitle>StartHouse</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm">
              10-week startup accelerator from idea to launch for student teams with the sponsored trip to the Silicon Valley.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <div className="flex items-center gap-3">
              <Users className="h-6 w-6" />
              <CardTitle>MEC Connect</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm">
              Internal social network, to connect members with each other and with our VC, legal, and alumni partners.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <div className="flex items-center gap-3">
              <Mic className="h-6 w-6" />
              <CardTitle>Speaker Series</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm">
              Hear from successful founders, seasoned investors, and other experienced entrepreneurs
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <div className="flex items-center gap-3">
              <Moon className="h-6 w-6" />
              <CardTitle>Late Nights</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm">
              Weekly member meetup fostering idea exchange, community building, networking, and fun.
            </p>
          </CardContent>
        </Card>
        <Card className="md:col-span-2 lg:col-span-1">
          <CardHeader>
            <div className="flex items-center gap-3">
              <Sparkles className="h-6 w-6" />
              <CardTitle>More Initiatives</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm">
              Newsletters, social events, VC office hours, summer incubators, etc.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
