import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const programs = [
  {
    title: "Starthouse",
    description: "10-week startup accelerator from idea to launch. Build, iterate, talk to investors and go on a trip to SF.",
    href: "/programs/starthouse",
    image: "/media/mec-starthouse.jpg", // Placeholder - replace with actual program image
  },
  {
    title: "MEC Sprint",
    description: "Take your startup to the next level with 36 hours of 0 barriers. Only for the most ambitious student founders.",
    href: "/programs/sprint",
    image: "/media/mec-sprint.png", // Placeholder - replace with actual program image
  },
  {
    title: "HS Pitch Competition",
    description: "High school pitch competition for the next generation of entrepreneurs.",
    href: "https://www.algoed.co/competitions/mit-entrepreneurship-club-competition",
    external: true,
    image: "/media/mec-highschool.png", // Placeholder - replace with actual program image
  },
]

export default function Programs() {
  return (
    <div>
      <section id="programs-hero" className="container mx-auto py-14">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-foreground mb-6 text-5xl leading-[1.2] font-bold tracking-tighter">
            Programs
          </h1>
        </div>
      </section>

      <section id="programs-grid" className="container mx-auto py-7">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto">
          {programs.map((program) => (
            <Card key={program.href} className="overflow-hidden flex flex-col">
              <div className="relative aspect-square w-full">
                <Image
                  src={program.image}
                  alt={program.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <CardContent className="flex flex-col flex-1 p-6">
                <h3 className="text-xl font-semibold mb-2">{program.title}</h3>
                <p className="text-sm text-muted-foreground mb-4 flex-1">
                  {program.description}
                </p>
                {program.external ? (
                  <Button asChild className="w-full">
                    <a href={program.href} target="_blank" rel="noopener noreferrer">Learn More</a>
                  </Button>
                ) : (
                  <Button asChild className="w-full">
                    <Link href={program.href}>Learn More</Link>
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}
