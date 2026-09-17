import Image from "next/image"

import { siteConfig } from "@/config/site"

export default function GetInvolvedPage() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 md:px-16 md:py-28">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="text-4xl font-bold tracking-tighter">
          Partner with MEC
        </h1>
        <p className="text-muted-foreground mt-6 text-xl leading-snug md:text-2xl">
          We work with VCs, startups, and labs on events, programs, and other
          collaborations. Feel free to reach out at{" "}
          <a
            href={`mailto:${siteConfig.emails.general}`}
            className="text-blue-600 underline underline-offset-4"
          >
            {siteConfig.emails.general}
          </a>
          .
        </p>
      </div>

      <div className="relative mt-12 aspect-[4/3] overflow-hidden bg-muted md:mt-16 md:aspect-[16/7]">
        <Image
          src="/media/2.jpg"
          alt="MEC students working beneath the Dream Big Dreams mural"
          fill
          priority
          className="object-cover"
          sizes="(max-width: 1280px) 100vw, 1152px"
        />
      </div>
    </section>
  )
}
