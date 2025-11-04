import { Hero } from "@/components/sections/hero"
import { Recruitment } from "@/components/sections/recruitment"
import { Initiatives } from "@/components/sections/initiatives"
import { Contact } from "@/components/sections/contact"

export default function Home() {
  return (
    <>
      <Hero />
      <Recruitment />
      <Initiatives />
      <Contact />
    </>
  )
}
