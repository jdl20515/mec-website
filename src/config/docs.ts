import { NavItem, NavItemWithChildren } from "@/types"

interface DocsConfig {
  mainNav: NavItem[]
  sidebarNav: NavItemWithChildren[]
}

export const docsConfig: DocsConfig = {
  mainNav: [
    {
      title: "About",
      href: "/about",
    },
    {
      title: "Team",
      href: "/team",
    },
    {
      title: "StartHouse",
      href: "/starthouse",
    },
    {
      title: "Startup Interface",
      href: "/startup-interface",
    },
    {
      title: "Sprint",
      href: "/sprint",
    },
    {
      title: "HS Pitch Competition",
      href: "/hs-pitch-competition",
    },
  ],
  sidebarNav: [],
}
