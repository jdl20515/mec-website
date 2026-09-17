import Image from "next/image"

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
    <div className="mx-auto max-w-7xl px-6 md:px-16">
      <section id="what-is-mec" className="pt-16 pb-12 md:pt-24 md:pb-16">
        <h2 className="text-foreground mb-6 text-4xl font-bold tracking-tighter">
          What is MEC?
        </h2>
        <p className="text-muted-foreground max-w-4xl text-2xl leading-snug">
          The MIT Entrepreneurship Club is the startup community at MIT.
        </p>
        <p className="text-muted-foreground mt-5 max-w-4xl text-2xl leading-snug">
          We are a student-run network built on the belief that people with
          ambitious ideas move faster when they know one another. MEC gives
          that network a home on campus.
        </p>
        <div className="relative mt-12 aspect-[16/7] overflow-hidden bg-muted">
          <Image
            src="/media/4.jpg"
            alt="MEC students together at a community dinner"
            fill
            priority
            className="object-cover"
            sizes="(max-width: 1280px) 100vw, 1216px"
          />
        </div>
      </section>

      <section id="what-we-do" className="py-12 md:py-14">
        <h2 className="text-foreground mb-6 text-4xl font-bold tracking-tighter">
          What does MEC do?
        </h2>
        <p className="text-muted-foreground max-w-4xl text-2xl leading-snug">
          MEC brings founders, operators, and technical builders from across
          MIT into the same room.
        </p>
        <p className="text-muted-foreground mt-5 max-w-4xl text-2xl leading-snug">
          We run founder programs, late-night build sessions, retreats, and
          small, curated dinners with founders, investors, and leaders shaping
          what comes next in technology. We also connect students with
          early-stage teams and VCs.
        </p>
        <p className="text-muted-foreground mt-5 max-w-4xl text-2xl leading-snug">
          We help anyone at MIT meet the right people, explore an idea, or find
          their place in startups.
        </p>

        <dl className="mt-12 grid divide-y border-y sm:grid-cols-3 sm:divide-x sm:divide-y-0">
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

      <section id="who-is-mec-for" className="py-12 md:py-16">
        <h2 className="text-foreground mb-6 text-4xl font-bold tracking-tighter">
          Who is MEC for?
        </h2>
        <p className="text-muted-foreground max-w-4xl text-2xl leading-snug">
          Any MIT student who is curious about startups and wants to spend more
          time around builders. You do not need a company, a cofounder, or even
          an idea to get involved. You can{" "}
          <a
            href="https://forms.gle/5YnXXzHW6hZj4awv9"
            className="text-blue-600 underline underline-offset-4"
          >
            apply here
          </a>
          .
        </p>
      </section>

      <section id="team-section" className="py-14 md:py-20">
        <h2 className="text-foreground mb-12 text-4xl font-bold tracking-tighter">
          Leadership
        </h2>
        <div className="grid grid-cols-2 gap-x-3 gap-y-10 md:gap-x-5 md:gap-y-12 lg:grid-cols-5">
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
              <h3 className="mt-3 text-lg font-medium tracking-tight md:mt-4 md:text-2xl">
                {member.name}
              </h3>
              <p className="mt-2 text-sm font-medium md:mt-3 md:text-base">
                {member.role}
              </p>
              <p className="text-muted-foreground mt-2 text-sm leading-snug md:text-base">
                {member.bio}
              </p>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}
