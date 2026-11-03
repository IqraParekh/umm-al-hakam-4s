"use client"

import { useEffect, useRef, useState } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import type { SiteKey } from "@/lib/site-data"

gsap.registerPlugin(ScrollTrigger)

type Principle = { number: string; title: string; text: string }

export function StickyPrinciples({ site, steps }: { site: SiteKey; steps: Principle[] }) {
  const sectionRef = useRef<HTMLElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const section = sectionRef.current
    if (!section || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

    const triggers = steps.map((_, index) => ScrollTrigger.create({
      trigger: section.querySelector(`[data-principle="${index}"]`),
      start: "top 56%",
      end: "bottom 56%",
      onEnter: () => setActiveIndex(index),
      onEnterBack: () => setActiveIndex(index),
    }))

    return () => triggers.forEach((trigger) => trigger.kill())
  }, [steps])

  const activeStep = steps[activeIndex] ?? steps[0]

  return (
    <section className={`sticky-principles sticky-principles--${site}`} ref={sectionRef}>
      <div className="sticky-principles__intro container-shell" data-reveal>
        <p className="eyebrow">{site === "nabat" ? "A calm, clear framework" : "Our approach"}</p>
        <h2>{site === "nabat" ? "How we make room for learning." : "How we teach."}</h2>
      </div>
      <div className="sticky-principles__body container-shell">
        <aside className="sticky-principles__stage" aria-label="Current teaching principle">
          <span className="sticky-principles__stage-number">{activeStep?.number}</span>
          <h3>{activeStep?.title}</h3>
          <span className="sticky-principles__stage-line" aria-hidden="true" />
          <p>{activeStep?.text}</p>
          <span className="sticky-principles__stage-note">{String(activeIndex + 1).padStart(2, "0")} / {String(steps.length).padStart(2, "0")}</span>
        </aside>
        <div className="sticky-principles__list">
          {steps.map((step, index) => (
            <button
              aria-pressed={activeIndex === index}
              className={`sticky-principles__item${activeIndex === index ? " is-active" : ""}`}
              data-principle={index}
              key={step.number}
              onClick={() => setActiveIndex(index)}
              type="button"
            >
              <span className="sticky-principles__item-number">{step.number}</span>
              <span className="sticky-principles__item-title">{step.title}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
