import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ArrowUpRight } from "lucide-react"
import type { ReactNode } from "react"
import type { SiteKey } from "@/lib/site-data"

export function SiteButton({
  href,
  children,
  variant = "primary",
  arrow = true,
  className = "",
}: {
  href: string
  children: ReactNode
  variant?: "primary" | "light" | "outline"
  arrow?: boolean
  className?: string
}) {
  return (
    <Link className={`site-button site-button--${variant} ${className}`} href={href}>
      <span>{children}</span>
      {arrow && <ArrowUpRight aria-hidden="true" className="button-arrow" size={16} strokeWidth={1.6} />}
    </Link>
  )
}

export function ArrowLink({ href, children, light = false }: { href: string; children: ReactNode; light?: boolean }) {
  return (
    <Link className={`arrow-link${light ? " arrow-link--light" : ""}`} href={href}>
      <span>{children}</span>
      <ArrowRight aria-hidden="true" size={16} strokeWidth={1.6} />
    </Link>
  )
}

export function Eyebrow({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <p className={`eyebrow ${className}`}>{children}</p>
}

export function SectionHeading({
  eyebrow,
  title,
  note,
  align = "left",
  className = "",
}: {
  eyebrow?: string
  title: ReactNode
  note?: ReactNode
  align?: "left" | "center"
  className?: string
}) {
  return (
    <div className={`section-heading section-heading--${align} ${className}`} data-reveal>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2>{title}</h2>
      {note && <p className="section-heading__note">{note}</p>}
    </div>
  )
}

export function ImageReveal({
  src,
  alt,
  className = "",
  priority = false,
  sizes = "(max-width: 768px) 100vw, 50vw",
  fill = true,
}: {
  src: string
  alt: string
  className?: string
  priority?: boolean
  sizes?: string
  fill?: boolean
}) {
  return (
    <div className={`image-reveal ${className}`} data-image-reveal>
      {fill ? (
        <Image src={src} alt={alt} fill priority={priority} sizes={sizes} />
      ) : (
        <Image src={src} alt={alt} width={1200} height={900} priority={priority} sizes={sizes} />
      )}
    </div>
  )
}

export function PageHero({
  site,
  eyebrow,
  title,
  lead,
  image,
  imageAlt,
}: {
  site: SiteKey
  eyebrow: string
  title: string
  lead: string
  image: string
  imageAlt: string
}) {
  return (
    <section className={`page-hero page-hero--${site}`}>
      <div className="page-hero__content container-shell" data-hero-copy>
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1>{title}</h1>
        <p><CopyText text={lead} /></p>
      </div>
      <div className="page-hero__image" data-hero-image>
        <Image src={image} alt={imageAlt} fill priority sizes="(max-width: 900px) 100vw, 44vw" />
      </div>
      <div className="page-hero__index" aria-hidden="true">{site === "umm" ? "MARKAZ / 01" : "NABAT / 01"}</div>
    </section>
  )
}

const arabicPattern = /([\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDFF\uFE70-\uFEFF]+(?:\s+[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDFF\uFE70-\uFEFF]+)*)/gu
const arabicCharacterPattern = /[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDFF\uFE70-\uFEFF]/

export function CopyText({ text }: { text: string }) {
  return text.split(arabicPattern).map((segment, index) =>
    arabicCharacterPattern.test(segment)
      ? <span className="arabic-run" dir="rtl" lang="ar" key={`${index}-${segment}`}>{segment}</span>
      : segment,
  )
}

export function ImageCaption({ children }: { children: ReactNode }) {
  return <figcaption className="image-caption">{children}</figcaption>
}
