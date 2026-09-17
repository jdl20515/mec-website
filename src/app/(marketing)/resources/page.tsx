import Link from "next/link"

import { Card } from "@/components/ui/card"

const resources = [
  {
    title: "Programs",
    description: "Explore MEC programs for founders at every stage.",
    href: "/programs",
  },
  {
    title: "Events",
    description: "Find upcoming gatherings, workshops, and community events.",
    href: "/events",
  },
  {
    title: "MEC Community",
    description: "Meet the students building and supporting companies at MIT.",
    href: "/about",
  },
]

export default function ResourcesPage() {
  return (
    <section className="container mx-auto py-16 md:py-24">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="text-5xl tracking-tight md:text-7xl">Resources</h1>
        <p className="text-muted-foreground mt-4 text-lg">
          A starting point for building with the MIT founder community.
        </p>
      </div>

      <div className="mx-auto mt-12 grid max-w-5xl gap-5 md:grid-cols-3">
        {resources.map((resource) => (
          <Link key={resource.title} href={resource.href}>
            <Card className="h-full p-6 transition-colors hover:bg-muted/50">
              <h2 className="text-2xl font-semibold">{resource.title}</h2>
              <p className="text-muted-foreground mt-3">{resource.description}</p>
              <p className="text-primary mt-8 text-sm font-medium">Explore</p>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  )
}
