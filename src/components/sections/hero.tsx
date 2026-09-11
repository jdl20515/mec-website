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

const nextSteps = [
  {
    title: "Explore MEC",
    description: "Meet the people and ideas behind the community.",
    href: "/about",
    linkLabel: "About MEC",
    image: "/media/1.jpg",
  },
  {
    title: "Find Events",
    description: "See upcoming events and ways to start building.",
    href: "/events",
    linkLabel: "View events",
    image: "/media/2.jpg",
  },
  {
    title: "Join MEC",
    description: "Become part of MIT’s founder community.",
    href: "/apply",
    linkLabel: "Apply now",
    image: "/media/3.jpg",
  },
]

export type NextStepsVariant = 1 | 2 | 3 | 4 | 5

interface HeroProps {
  nextStepsVariant?: NextStepsVariant
}

export function Hero({ nextStepsVariant }: HeroProps = {}) {
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
                    "relative mx-0 max-w-[60rem] pt-5 md:mx-auto md:px-4 md:py-2",
                    "text-center tracking-tighter text-balance",
                    "text-[3.75rem] leading-none sm:text-[6rem]",
                  )}
                >
                  <span className="block">The Founder</span>
                  <span className="block">Community at MIT</span>
                </h1>
              </div>

              <div className="flex w-full flex-col gap-4 gap-y-2 md:mx-auto md:max-w-lg md:flex-row md:justify-center">
                <Link
                  href="/apply"
                  className={cn(
                    buttonVariants({
                      variant: "default",
                      size: "lg",
                    }),
                    "w-full gap-2 px-8 py-6 text-[1.375rem] leading-8 md:w-auto",
                  )}
                >
                  Apply to MEC
                  <ChevronRight className="ml-1 size-4 shrink-0 transition-all duration-300 ease-out group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/about"
                  className={cn(
                    buttonVariants({
                      size: "lg",
                      variant: "outline",
                    }),
                    "w-full gap-2 px-8 py-6 text-[1.375rem] leading-8 md:w-auto",
                  )}
                >
                  What we&apos;re up to
                  <ChevronRight className="ml-1 size-4 shrink-0 transition-all duration-300 ease-out group-hover:translate-x-1" />
                </Link>
              </div>

              <div className="w-full mt-12 md:mt-16">
                <HeroCarousel />
              </div>

              <div className="mt-20 w-full md:mt-28">
                <p className="max-w-5xl text-left text-3xl leading-[1.12] tracking-tight sm:text-4xl md:text-5xl">
                  We’re entering one of the most consequential periods in the
                  history of technology. The companies built now will shape
                  what comes next.{" "}
                  <span className="mt-[1.12em] block">
                    We want more of them to start at MIT.
                  </span>
                </p>
              </div>

              <div
                id="next-steps"
                className="mt-16 w-full scroll-mt-24 text-left md:mt-24"
              >
                {nextStepsVariant ? (
                  <NextStepsPreview variant={nextStepsVariant} />
                ) : (
                  <CurrentNextSteps />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function StepLink({
  step,
  className,
  children,
}: {
  step: (typeof nextSteps)[number]
  className?: string
  children: React.ReactNode
}) {
  return (
    <Link href={step.href} className={cn("group", className)}>
      {children}
    </Link>
  )
}

function StepCopy({
  step,
  inverted = false,
}: {
  step: (typeof nextSteps)[number]
  inverted?: boolean
}) {
  return (
    <>
      <h3 className="text-3xl tracking-tight">{step.title}</h3>
      <p
        className={cn(
          "mt-3 max-w-xs text-base leading-snug",
          inverted ? "text-background/70" : "text-muted-foreground"
        )}
      >
        {step.description}
      </p>
      <span className="mt-auto flex items-center gap-1 pt-8 text-base font-medium">
        {step.linkLabel}
        <ChevronRight className="size-4 transition-transform group-hover:translate-x-1" />
      </span>
    </>
  )
}

function CurrentNextSteps() {
  return (
    <div className="grid border-y border-border md:grid-cols-3">
      {nextSteps.map((step, index) => (
        <StepLink
          key={step.title}
          step={step}
          className={cn(
            "flex min-h-64 flex-col justify-between border-border px-1 py-8 transition-colors hover:bg-muted/40 md:px-7",
            index < nextSteps.length - 1 &&
              "border-b md:border-r md:border-b-0",
          )}
        >
          <div>
            <h3 className="text-3xl tracking-tight">{step.title}</h3>
            <p className="text-muted-foreground mt-3 max-w-xs text-base leading-snug">
              {step.description}
            </p>
          </div>
          <span className="mt-8 flex items-center gap-1 text-base font-medium">
            {step.linkLabel}
            <ChevronRight className="size-4 transition-transform group-hover:translate-x-1" />
          </span>
        </StepLink>
      ))}
    </div>
  )
}

function NextStepsPreview({ variant }: { variant: NextStepsVariant }) {
  if (variant === 1) {
    return (
      <div className="grid overflow-hidden border border-border md:grid-cols-3">
        {nextSteps.map((step, index) => (
          <StepLink
            key={step.title}
            step={step}
            className={cn(
              "relative flex min-h-44 items-end border-border p-7 transition-colors hover:bg-muted/40",
              index < nextSteps.length - 1 &&
                "border-b md:border-r md:border-b-0",
            )}
          >
            <span className="absolute top-6 right-6 text-3xl transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
              ↗
            </span>
            <h3 className="max-w-48 text-4xl leading-none tracking-tight">
              {step.title}
            </h3>
          </StepLink>
        ))}
      </div>
    )
  }

  if (variant === 2) {
    return (
      <div className="grid overflow-hidden border border-border md:grid-cols-3">
        {nextSteps.map((step, index) => (
          <StepLink
            key={step.title}
            step={step}
            className={cn(
              "relative flex min-h-80 flex-col justify-end overflow-hidden border-border p-7 text-white",
              index < nextSteps.length - 1 &&
                "border-b md:border-r md:border-b-0",
            )}
          >
            <Image
              src={step.image}
              alt=""
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/55 to-black/25" />
            <div className="relative z-10">
              <h3 className="text-3xl tracking-tight">{step.title}</h3>
              <p className="mt-3 max-w-xs text-base leading-snug text-white/75">
                {step.description}
              </p>
            </div>
          </StepLink>
        ))}
      </div>
    )
  }

  if (variant === 3) {
    return (
      <div className="border border-border px-6 md:px-8">
        {nextSteps.map((step, index) => (
          <StepLink
            key={step.title}
            step={step}
            className={cn(
              "relative grid min-h-32 grid-cols-[18px_1fr] items-center gap-5 py-6 md:grid-cols-[18px_1fr_auto]",
              index < nextSteps.length - 1 && "border-b border-border",
            )}
          >
            <span className="relative size-2 rounded-full bg-foreground">
              {index < nextSteps.length - 1 && (
                <span className="absolute top-2 left-[3px] h-32 w-px bg-border" />
              )}
            </span>
            <div>
              <h3 className="text-3xl tracking-tight">{step.title}</h3>
              <p className="text-muted-foreground mt-1 text-base leading-snug">
                {step.description}
              </p>
            </div>
            <span className="col-start-2 flex items-center gap-1 text-base font-medium md:col-start-auto">
              {step.linkLabel}
              <ChevronRight className="size-4 transition-transform group-hover:translate-x-1" />
            </span>
          </StepLink>
        ))}
      </div>
    )
  }

  if (variant === 4) {
    return (
      <div className="grid overflow-hidden border border-border md:grid-cols-3">
        {nextSteps.map((step, index) => (
          <StepLink
            key={step.title}
            step={step}
            className={cn(
              "flex min-h-64 flex-col border-border p-7 transition-transform",
              index === 0 && "bg-foreground text-background",
              index === 1 && "bg-muted",
              index < nextSteps.length - 1 &&
                "border-b md:border-r md:border-b-0",
            )}
          >
            <StepCopy step={step} inverted={index === 0} />
          </StepLink>
        ))}
      </div>
    )
  }

  return (
    <div className="grid min-h-[25rem] overflow-hidden border border-border md:grid-cols-[1.35fr_1fr]">
      <StepLink
        step={nextSteps[0]}
        className="flex min-h-80 flex-col justify-end bg-foreground p-8 text-background md:min-h-[25rem]"
      >
        <h3 className="max-w-md text-5xl leading-none tracking-tight md:text-6xl">
          {nextSteps[0].title}
        </h3>
        <p className="mt-4 max-w-sm text-base leading-snug text-background/70">
          {nextSteps[0].description}
        </p>
        <span className="mt-8 flex items-center gap-1 text-base font-medium">
          {nextSteps[0].linkLabel}
          <ChevronRight className="size-4 transition-transform group-hover:translate-x-1" />
        </span>
      </StepLink>
      <div className="grid grid-rows-2">
        {nextSteps.slice(1).map((step, index) => (
          <StepLink
            key={step.title}
            step={step}
            className={cn(
              "flex min-h-48 flex-col border-border p-7",
              index === 0 && "border-b",
            )}
          >
            <StepCopy step={step} />
          </StepLink>
        ))}
      </div>
    </div>
  )
}

function HeroCarousel() {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false }),
  )

  const images = [
    {
      src: "/media/etched-group.jpg",
      alt: "MIT founders visiting Etched",
    },
    { src: "/media/1.jpg", alt: "MEC community event" },
    { src: "/media/2.jpg", alt: "MEC community event" },
    { src: "/media/3.jpg", alt: "MEC community event" },
    { src: "/media/4.jpg", alt: "MEC community event" },
    {
      src: "/team/david-lomelin-yc-square.jpg",
      alt: "MEC executive David Lomelin at Y Combinator",
    },
  ]

  return (
    <Carousel
      className="w-full mx-auto"
      plugins={[plugin.current]}
      opts={{
        align: "start",
        loop: true,
      }}
    >
      <CarouselContent className="-ml-2 md:-ml-4">
        {images.map((image) => (
          <CarouselItem
            key={image.src}
            className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3"
          >
            <div className="p-1">
              <div className="relative aspect-square overflow-hidden rounded-xl">
                <Image
                  src={image.src}
                  alt={image.alt}
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
