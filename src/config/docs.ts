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
      title: "Programs",
      href: "/programs",
    },
    {
      title: "Launchpad",
      href: "/launchpad",
    },
    {
      title: "The Vault",
      href: "/vault",
    },
  ],
  sidebarNav: [],
}
