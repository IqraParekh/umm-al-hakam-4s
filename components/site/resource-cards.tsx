import Link from "next/link"
import { ArrowDownToLine, ArrowUpRight, BookOpen, FileText } from "lucide-react"
import { resources } from "@/lib/site-data"

export function ResourceCards({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`resource-grid${compact ? " resource-grid--compact" : ""}`}>
      {resources.map((resource, index) => (
        <article className={`resource-card resource-card--${resource.accent}`} key={resource.id} data-reveal>
          <div className="resource-card__preview" aria-label={`${resource.title} document preview`}>
            <span className="resource-card__folio">{String(index + 1).padStart(2, "0")} / RESOURCE</span>
            <span className="resource-card__stamp"><BookOpen aria-hidden="true" size={19} strokeWidth={1.4} /></span>
            <span className="resource-card__cover-title">{resource.title}</span>
            <span className="resource-card__cover-rule" aria-hidden="true" />
            <span className="resource-card__cover-subtitle">{resource.type}</span>
            <span className="resource-card__cover-mark" aria-hidden="true">{resource.accent === "blue" ? "n" : "u"}</span>
          </div>
          <div className="resource-card__content">
            <div className="resource-card__meta"><FileText aria-hidden="true" size={14} /> {resource.type}</div>
            <h3>{resource.title}</h3>
            <p>{resource.description}</p>
            <div className="resource-card__actions">
              <Link className="resource-card__view" href={resource.href}>{resource.id === "nabat-admissions" ? "View admissions info" : "View Prospectus"} <ArrowUpRight aria-hidden="true" size={15} /></Link>
              <button className="resource-card__download" disabled title="The official PDF has not been supplied yet." type="button">
                <ArrowDownToLine aria-hidden="true" size={15} /> Download PDF
              </button>
            </div>
            <p className="resource-card__availability">Official PDF to be supplied</p>
          </div>
        </article>
      ))}
    </div>
  )
}
