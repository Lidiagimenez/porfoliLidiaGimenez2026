export type Project = {
  id: number
  title: string
  description: string
  slug: string
  icon: "code" | "globe" | "plus" | "chart" | "shop" | "blog"

  // Nuevos campos para la página de detalle
  context: string
  technologies: string[]
  learnings: string[]
  links: {
    github: string
    demo: string
  }
  

}
export type NavItem = {
  label: string
  href: string
}
