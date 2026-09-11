import Image from "next/image"
import Link from "next/link"

const programs = [
  {
    title: "StartHouse",
    description: "10-week startup accelerator.",
    href: "/programs/starthouse",
    image: "/media/mec-starthouse.jpg",
  },
  {
    title: "MEC Sprint",
    description: "36-hour founder build sprint.",
    href: "/programs/sprint",
    image: "/media/mec-sprint.png",
  },
  {
    title: "High School Pitch Competition",
    description: "Pitch competition for high school founders.",
    href: "https://www.algoed.co/competitions/mit-entrepreneurship-club-competition",
    external: true,
    image: "/media/mec-highschool.png",
  },
]

const stats = [
  { value: "150+", label: "Alumni" },
  { value: "100+", label: "Active members" },
  { value: "13", label: "Partnerships" },
]

const teamMembers = [
  {
    name: "Mihika Dusad",
    role: "President",
    image: "/team/mihika-dusad.jpeg",
    bio: "MIT computer science and math. Researches learning systems and AI. MEC president.",
  },
  {
    name: "David Lomelin",
    role: "Executive Team",
    image: "/team/david-lomelin.jpg",
    bio: "Co-founded Arden (YC, raised $3.6M). CV and alignment researcher. Failed YouTuber.",
  },
  {
    name: "Adam Elitzur",
    role: "Executive Team",
    image: "/team/adam-elitzur.jpeg",
    bio: "MIT computer science. Product builder. Helped launch MIT's first startup career fair.",
  },
  {
    name: "Shaurya Agrawal",
    role: "Executive Team",
    image: "/team/shaurya-agrawal.jpg",
    bio: "MIT computer science and physics. Robotics builder and applied AI researcher.",
  },
  {
    name: "Sanchali Banerjee",
    role: "Executive Team",
    image: "/team/sanchali-banerjee.jpeg",
    bio: "MIT '29. Builder across HackMIT, AI@MIT, AppDev, and MEC Sprint.",
  },
  {
    name: "Rishabh Sharma",
    role: "Executive Team",
    image: "/team/rishabh-sharma.jpg",
    imagePosition: "center 25%",
    bio: "Studies finance and AI at MIT. Active in entrepreneurship. Varsity squash player.",
  },
  {
    name: "Liam Aranda-Michel",
    role: "Executive Team",
    image: "/team/liam-aranda-michel.jpeg",
    bio: "MIT biological engineering. Tissue engineering and regenerative medicine researcher at the Broad Institute.",
  },
  {
    name: "Katelyn Battacharia",
    role: "Executive Team",
    image: "/team/katelyn-battacharia.jpg",
    bio: "MIT chemical engineering. Works on climate and direct air capture. Varsity sailor.",
  },
  {
    name: "Thanush Patlolla",
    role: "Executive Team",
    image: "/team/thanush-patlolla.png",
    bio: "MIT EECS and physics. Works on hardware-software co-design and efficient AI systems.",
  },
]

export default function About() {
  return (
    <div className="mx-auto max-w-7xl">
      <section id="about-hero" className="py-14 md:py-20">
        <h1 className="text-foreground text-6xl leading-none font-bold tracking-tighter">
          About
        </h1>
      </section>

      <section id="what-is-mec" className="py-10 md:py-14">
        <h2 className="text-foreground mb-6 text-4xl font-bold tracking-tighter">
          What is MEC?
        </h2>
        <p className="text-muted-foreground max-w-4xl text-2xl leading-snug">
          MEC brings together hundreds of MIT students interested in startups.
          We help them meet collaborators, test ideas, and find opportunities
          across the startup ecosystem. Through events, founder programs, and
          partnerships, students get the support and community to start
          building.
        </p>
      </section>

      <section id="by-the-numbers" className="py-10 md:py-14">
        <h2 className="text-foreground mb-8 text-4xl font-bold tracking-tighter">
          By the numbers
        </h2>
        <dl className="grid divide-y border-y sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col py-7 sm:px-8 sm:first:pl-0"
            >
              <dt className="text-muted-foreground mt-2 text-lg">
                {stat.label}
              </dt>
              <dd className="order-first text-5xl tracking-tight">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      <section id="programs" className="py-14 md:py-20">
        <h2 className="text-foreground mb-10 text-4xl font-bold tracking-tighter">
          Past programs
        </h2>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {programs.map((program) => (
            <Link
              key={program.href}
              href={program.href}
              target={program.external ? "_blank" : undefined}
              rel={program.external ? "noopener noreferrer" : undefined}
              className="group"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                <Image
                  src={program.image}
                  alt={program.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <h3 className="mt-4 text-2xl font-medium tracking-tight">
                {program.title}
              </h3>
              <p className="text-muted-foreground mt-1 text-lg leading-snug">
                {program.description}
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section id="team-section" className="py-14 md:py-20">
        <h2 className="text-foreground mb-12 text-4xl font-bold tracking-tighter">
          Leadership
        </h2>
        <div className="grid grid-cols-1 gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member) => (
            <article key={member.name}>
              <div className="relative aspect-[5/4] overflow-hidden bg-[#e7e7e7]">
                <Image
                  src={member.image}
                  alt={`${member.name}, ${member.role} at MIT Entrepreneurship Club`}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                  style={{ objectPosition: member.imagePosition }}
                />
              </div>
              <h3 className="mt-4 text-3xl font-medium tracking-tight">
                {member.name}
              </h3>
              <p className="mt-4 text-lg font-medium">{member.role}</p>
              <p className="text-muted-foreground mt-2 text-lg leading-snug">
                {member.bio}
              </p>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}
