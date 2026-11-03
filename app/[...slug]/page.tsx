import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { NabatHomePage } from "@/components/site/nabat-home"
import { SitePage } from "@/components/site/site-pages"
import { SiteShell } from "@/components/site/site-shell"
import { routeMetadata, sitePages } from "@/lib/site-data"

type RouteProps = { params: Promise<{ slug: string[] }> }

export function generateStaticParams() {
  return routeMetadata
    .filter((route) => route.path !== "/")
    .map((route) => ({ slug: route.path.slice(1).split("/") }))
}

export async function generateMetadata({ params }: RouteProps): Promise<Metadata> {
  const { slug } = await params
  const path = `/${slug.join("/")}`
  const route = routeMetadata.find((item) => item.path === path)

  if (!route) return { title: "Page not found" }

  const image = route.site === "nabat" ? "/images/nabat-learning.png" : "/images/umm-library.png"
  return {
    title: { absolute: route.site === "nabat" ? `${route.title} | Nabat Learning House` : `${route.title} | Markaz Umm al-Hakam` },
    description: route.description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      title: route.title,
      description: route.description,
      images: [{ url: image, alt: route.site === "nabat" ? "A calm early-years learning space." : "A sunlit Islamic study library." }],
    },
    twitter: { card: "summary_large_image", title: route.title, description: route.description, images: [image] },
  }
}

export default async function RoutedPage({ params }: RouteProps) {
  const { slug } = await params
  const path = `/${slug.join("/")}`

  if (path === "/nabat") {
    return (
      <SiteShell site="nabat">
        <NabatHomePage />
      </SiteShell>
    )
  }

  const page = sitePages.find((item) => item.path === path)
  if (!page) notFound()

  return (
    <SiteShell site={page.site}>
      <SitePage page={page} />
    </SiteShell>
  )
}
