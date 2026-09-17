"use client"

import Image from "next/image"
import Link from "next/link"
import { toast } from "sonner"

import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@/components/ui/context-menu"

export function LogoButton() {
  function copyLogoAsPNG(path: string) {
    fetch(path)
      .then((response) => response.blob())
      .then((blob) => {
        const item = new ClipboardItem({ "image/png": blob })
        navigator.clipboard.write([item])
        toast.success("Logo copied to clipboard")
      })
  }
  return (
    <ContextMenu>
      <ContextMenuTrigger asChild>
        <Link
          href="/"
          className="relative flex min-w-0 items-center gap-3"
          aria-label="MIT Entrepreneurship Club home"
        >
          <Image
            src="/mec-logo.png"
            alt="MEC Logo"
            width={120}
            height={120}
            className="h-6 w-auto shrink-0 sm:h-8"
            quality={100}
            priority
          />
          <span className="hidden text-xl font-medium leading-tight md:inline">
            MIT Entrepreneurship Club
          </span>
        </Link>
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuItem
          className="flex items-center gap-2"
          onClick={() => copyLogoAsPNG("/mec-logo.png")}
        >
          <Image
            src="/mec-logo.png"
            alt="MEC Logo"
            width={16}
            height={16}
            className="h-4 w-auto"
          />
          <span>Copy Logo as PNG</span>
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  )
}
