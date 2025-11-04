import { NavItem, NavItemWithChildren } from "@/types"

interface DocsConfig {
  mainNav: NavItem[]
  sidebarNav: NavItemWithChildren[]
}

export const docsConfig: DocsConfig = {
  mainNav: [
    {
      title: "Programs",
      href: "/programs",
    },
    {
      title: "Community",
      href: "/community",
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
