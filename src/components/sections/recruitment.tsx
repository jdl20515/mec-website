import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

export function Recruitment() {
  return (
    <section id="recruitment" className="container mx-auto py-14">
      <h2 className="text-foreground mb-2 text-center text-5xl leading-[1.2] font-bold tracking-tighter">
        want to join?
      </h2>
      <h3 className="text-foreground/80 mx-auto mb-8 max-w-2xl text-center text-lg font-medium tracking-tight text-balance">
        fall recruitment is in full swing, come to events and apply now!
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Recruitment Events</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3 text-sm">
              <li>
                <strong>9/8, 7-9pm</strong> – 2-105 – Meet & Greet
              </li>
              <li>
                <strong>9/9, 7-9pm</strong> – 2-190 – Founder Panel
              </li>
              <li>
                <strong>9/10, 7:30-9:30pm</strong> – Stud, 3 floor – MEC x MIT Cap: Bad Pitch Night
              </li>
              <li>
                <strong>9/11, 7-9pm</strong> – 34-144 – Boba and Business Trivia
              </li>
              <li>
                <strong>9/12, 7-8pm</strong> – MTC Garage – Ideation Session
              </li>
            </ul>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Application</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm mb-3">
              Applications open now!
            </p>
            <p className="text-sm">
              <strong>Deadline: Friday, September 12 at 11:59pm ET</strong>
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Interview</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm">
              Invite only, a brief chat with MEC leadership.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
