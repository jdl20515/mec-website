import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { siteConfig } from "@/config/site"

export default function GetInvolvedPage() {
  return (
    <section className="container mx-auto py-16 md:py-24">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="text-5xl tracking-tight md:text-7xl">Get Involved</h1>
        <p className="text-muted-foreground mt-4 text-lg">
          Join MEC, come to an event, or work with our founder community.
        </p>
      </div>

      <div className="mx-auto mt-12 grid max-w-5xl gap-5 md:grid-cols-3">
        <Card className="flex h-full flex-col p-6">
          <h2 className="text-2xl font-semibold">Join MEC</h2>
          <p className="text-muted-foreground mt-3 flex-1">
            Apply to become part of the MIT Entrepreneurship Club.
          </p>
          <Button asChild className="mt-8 w-full">
            <Link href="/apply">Apply now</Link>
          </Button>
        </Card>

        <Card className="flex h-full flex-col p-6">
          <h2 className="text-2xl font-semibold">Attend an event</h2>
          <p className="text-muted-foreground mt-3 flex-1">
            Meet founders and builders at an upcoming MEC event.
          </p>
          <Button asChild variant="outline" className="mt-8 w-full">
            <Link href="/events">View events</Link>
          </Button>
        </Card>

        <Card className="flex h-full flex-col p-6">
          <h2 className="text-2xl font-semibold">Partner with MEC</h2>
          <p className="text-muted-foreground mt-3 flex-1">
            Connect with our team about partnerships and founder support.
          </p>
          <Button asChild variant="outline" className="mt-8 w-full">
            <Link href={`mailto:${siteConfig.emails.general}`}>Contact us</Link>
          </Button>
        </Card>
      </div>
    </section>
  )
}
