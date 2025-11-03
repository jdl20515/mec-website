export interface NavItem {
  title: string
  href?: string
  disabled?: boolean
  external?: boolean
  label?: string
  paid?: boolean
  event?: string
}

export interface NavItemWithChildren extends NavItem {
  items?: NavItem[]
}
