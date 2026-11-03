import Link from "next/link"
import { ArrowUpRight, BookOpen } from "lucide-react"
import { resources } from "@/lib/site-data"

export function ResourceCards({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`resource-grid${compact ? " resource-grid--compact" : ""}`}>
      {resources.map((resource, index) => (
        <article className={`resource-card resource-card--${resource.accent}`} key={resource.id} data-reveal>
          <div className="resource-card__preview" aria-hidden="true">
            <span className="resource-card__folio">{String(index + 1).padStart(2, "0")} / RESOURCE</span>
            <span className="resource-card__stamp"><BookOpen aria-hidden="true" size={19} strokeWidth={1.4} /></span>
            <span className="resource-card__cover-title">{resource.title}</span>
            <span className="resource-card__cover-rule" aria-hidden="true" />
            <span className="resource-card__cover-subtitle">{resource.type}</span>
            <span className="resource-card__cover-mark" aria-hidden="true">{resource.accent === "blue" ? "n" : "u"}</span>
          </div>
          <div className="resource-card__content">
            <span className="resource-card__meta">{resource.type}</span>
            <h3>{resource.title}</h3>
            <Link className="resource-card__view" href={resource.href}>View overview <ArrowUpRight aria-hidden="true" size={15} /></Link>
          </div>
        </article>
      ))}
    </div>
  )
}
