import type { Metadata } from "next"
import { notFound } from "next/navigation"

import {
  Hero,
  type NextStepsVariant,
} from "@/components/sections/hero"

const variants = [1, 2, 3, 4, 5] as const
const variantNames: Record<NextStepsVariant, string> = {
  1: "Minimal editorial",
  2: "Image-backed cards",
  3: "Stacked pathway",
  4: "Monochrome blocks",
  5: "Asymmetric editorial",
}

interface PreviewPageProps {
  params: { variant: string }
}

function getVariant(value: string): NextStepsVariant | undefined {
  const variant = Number(value) as NextStepsVariant

  return variants.includes(variant) ? variant : undefined
}

export function generateStaticParams() {
  return variants.map((variant) => ({ variant: String(variant) }))
}

export function generateMetadata({ params }: PreviewPageProps): Metadata {
  const variant = getVariant(params.variant)

  return {
    title: variant
      ? `MEC Cards ${variant} · ${variantNames[variant]}`
      : "MEC Card Preview",
  }
}

export default function CardsPreviewPage({ params }: PreviewPageProps) {
  const variant = getVariant(params.variant)

  if (!variant) {
    notFound()
  }

  return <Hero nextStepsVariant={variant} />
}
