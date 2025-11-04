"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
// @ts-ignore - embla-carousel-autoplay may not have type definitions
import Autoplay from "embla-carousel-autoplay"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"

export function Hero() {
  // Simplified hero - remove announcement banner for now
  return (
    <section id="hero">
      <div className="relative h-full overflow-hidden py-5 md:py-14">
        <div className="z-10 flex flex-col">
          <div className="mt-10 grid grid-cols-1 md:mt-20">
            <div className="flex flex-col items-start gap-6 px-7 pb-8 text-center md:items-center md:px-10">
              <div className="relative flex flex-col gap-4 md:items-center lg:flex-row">
                <h1
                  className={cn(
                    "text-black dark:text-white",
                    "relative mx-0 max-w-[43.5rem] pt-5 md:mx-auto md:px-4 md:py-2",
                    "text-left tracking-tighter text-balance md:text-center",
                    "text-5xl sm:text-7xl md:text-7xl lg:text-7xl"
                  )}
                >
                  The Founder Community at MIT
                </h1>
              </div>

              <p className="text-primary max-w-2xl text-left md:text-lg tracking-tight text-balance md:text-center">
              The MIT Entrepreneurship Club is the community for those who’d rather build the future than wait for it. Founders, mentors, and friends all welcome.
              </p>

              <div className="flex w-full flex-col gap-4 gap-y-2 md:mx-auto md:max-w-lg md:flex-row md:justify-center">
                <Link
                  href="/apply"
                  className={cn(
                    buttonVariants({
                      variant: "default",
                      size: "lg",
                    }),
                    "w-full md:w-auto gap-2 text-base px-8 py-6"
                  )}
                >
                  Apply to MEC
                  <ChevronRight className="ml-1 size-4 shrink-0 transition-all duration-300 ease-out group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/community"
                  className={cn(
                    buttonVariants({
                      size: "lg",
                      variant: "outline",
                    }),
                    "w-full md:w-auto gap-2 text-base px-8 py-6"
                  )}
                >
                  What we're up to
                  <ChevronRight className="ml-1 size-4 shrink-0 transition-all duration-300 ease-out group-hover:translate-x-1" />
                </Link>
              </div>

              <div className="w-full mt-12 md:mt-16">
                <HeroCarousel />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function HeroCarousel() {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false })
  )

  const images = [
    "/media/1.jpg",
    "/media/2.jpg",
    "/media/3.jpg",
    "/media/4.jpg",
  ]

  return (
    <Carousel
      className="w-full  mx-auto"
      plugins={[plugin.current]}
      opts={{
        align: "start",
        loop: true,
      }}
    >
      <CarouselContent className="-ml-2 md:-ml-4">
        {images.map((imagePath, index) => (
          <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <div className="relative aspect-square overflow-hidden rounded-xl">
                <Image
                  src={imagePath}
                  alt={`Gallery image ${index + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}
