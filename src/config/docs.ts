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
      title: "Events",
      href: "/events",
    },
    {
      title: "Partner",
      href: "/get-involved",
    },
  ],
  sidebarNav: [],
}
