"use client"

import { useState } from "react"
import { ArrowUpRight } from "lucide-react"

type CurriculumArea = {
  id: string
  label: string
  note: string
  description: string
  topics: string[]
}

export function CurriculumExplorer({ areas }: { areas: CurriculumArea[] }) {
  const [activeId, setActiveId] = useState(areas[0]?.id ?? "")
  const activeArea = areas.find((area) => area.id === activeId) ?? areas[0]

  return (
    <div className="curriculum-explorer" data-reveal>
      <div className="curriculum-explorer__tabs" role="tablist" aria-label="Curriculum areas">
        {areas.map((area, index) => (
          <button
            aria-controls={`curriculum-panel-${area.id}`}
            aria-selected={activeId === area.id}
            className={`curriculum-explorer__tab${activeId === area.id ? " is-active" : ""}`}
            id={`curriculum-tab-${area.id}`}
            key={area.id}
            onClick={() => setActiveId(area.id)}
            onKeyDown={(event) => {
              const currentIndex = areas.findIndex((item) => item.id === activeId)
              const nextIndex = event.key === "ArrowRight" || event.key === "ArrowDown"
                ? (currentIndex + 1) % areas.length
                : event.key === "ArrowLeft" || event.key === "ArrowUp"
                  ? (currentIndex - 1 + areas.length) % areas.length
                  : event.key === "Home"
                    ? 0
                    : event.key === "End"
                      ? areas.length - 1
                      : currentIndex
              if (nextIndex === currentIndex) return
              event.preventDefault()
              const nextArea = areas[nextIndex]
              setActiveId(nextArea.id)
              document.getElementById(`curriculum-tab-${nextArea.id}`)?.focus()
            }}
            role="tab"
            tabIndex={activeId === area.id ? 0 : -1}
            type="button"
          >
            <span>{String(index + 1).padStart(2, "0")}</span>
            {area.label}
            <ArrowUpRight aria-hidden="true" size={15} />
          </button>
        ))}
      </div>
      {activeArea && (
        <section
          aria-labelledby={`curriculum-tab-${activeArea.id}`}
          className="curriculum-explorer__panel"
          id={`curriculum-panel-${activeArea.id}`}
          role="tabpanel"
          tabIndex={0}
        >
          <p className="eyebrow">{activeArea.note}</p>
          <h3>{activeArea.label}</h3>
          <p className="curriculum-explorer__description">{activeArea.description}</p>
          <ul>
            {activeArea.topics.map((topic) => <li key={topic}>{topic}</li>)}
          </ul>
        </section>
      )}
    </div>
  )
}
