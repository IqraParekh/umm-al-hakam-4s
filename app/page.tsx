import type { Metadata } from "next"
import { SiteShell } from "@/components/site/site-shell"
import { UmmHomePage } from "@/components/site/umm-home"

export const metadata: Metadata = {
  title: { absolute: "Markaz Umm al-Hakam | Rooted in Revelation" },
  description: "An Islamic educational institution grounded in the Qur’an, Sunnah and the understanding of the Sahabah رضي الله عنهم — cultivating knowledge, understanding, practice and character across generations.",
  openGraph: {
    title: "Markaz Umm al-Hakam | Rooted in Revelation",
    description: "Knowledge, understanding, practice and character across generations.",
    images: [{ url: "/images/umm-library.png", alt: "A sunlit Islamic study library." }],
  },
}

export default function HomePage() {
  return (
    <SiteShell site="umm">
      <UmmHomePage />
    </SiteShell>
  )
}
