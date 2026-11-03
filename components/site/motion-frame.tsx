"use client"

import { useLayoutEffect, useRef, type ReactNode } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger)

export function MotionFrame({ children }: { children: ReactNode }) {
  const frameRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const frame = frameRef.current
    if (!frame || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

    const context = gsap.context(() => {
      const heroImage = frame.querySelector<HTMLElement>("[data-hero-image]")
      const heroChildren = frame.querySelectorAll<HTMLElement>("[data-hero-copy] > *")
      const heroLines = frame.querySelectorAll<HTMLElement>("[data-hero-line]")
      const heroScrollCue = frame.querySelector<HTMLElement>("[data-hero-scroll]")

      if (heroImage) {
        gsap.fromTo(heroImage, { clipPath: "inset(0 0 100% 0)", scale: 1.06 }, {
          clipPath: "inset(0 0 0% 0)", scale: 1, duration: 1.25, ease: "power3.out",
        })
      }
      if (heroChildren.length) {
        gsap.fromTo(heroChildren, { y: 24, autoAlpha: 0 }, {
          y: 0, autoAlpha: 1, duration: 0.8, stagger: 0.11, delay: 0.18, ease: "power3.out",
        })
      }
      if (heroLines.length) {
        gsap.fromTo(heroLines, { y: 35, autoAlpha: 0 }, {
          y: 0, autoAlpha: 1, duration: 0.9, stagger: 0.16, delay: 0.25, ease: "power3.out",
        })
      }
      if (heroScrollCue) {
        gsap.fromTo(heroScrollCue, { y: 10, autoAlpha: 0 }, { y: 0, autoAlpha: 1, delay: 0.9, duration: 0.65, ease: "power2.out" })
      }

      frame.querySelectorAll<HTMLElement>("[data-parallax]").forEach((element) => {
        const target = element.querySelector<HTMLElement>("img") ?? element
        gsap.to(target, {
          yPercent: 5,
          ease: "none",
          scrollTrigger: { trigger: element, start: "top bottom", end: "bottom top", scrub: 0.8 },
        })
      })

      frame.querySelectorAll<HTMLElement>("[data-reveal]").forEach((element) => {
        gsap.fromTo(element, { y: 28, autoAlpha: 0 }, {
          y: 0,
          autoAlpha: 1,
          duration: 0.78,
          ease: "power2.out",
          scrollTrigger: { trigger: element, start: "top 88%", once: true },
        })
      })

      frame.querySelectorAll<HTMLElement>("[data-image-reveal]").forEach((element) => {
        if (element === heroImage) return
        gsap.fromTo(element, { clipPath: "inset(0 0 0 100%)", scale: 1.035 }, {
          clipPath: "inset(0 0 0 0)", scale: 1, duration: 1.05, ease: "power2.out",
          scrollTrigger: { trigger: element, start: "top 84%", once: true },
        })
      })

      frame.querySelectorAll<HTMLElement>("[data-line-reveal]").forEach((element) => {
        gsap.fromTo(element, { scaleX: 0, transformOrigin: "left center" }, {
          scaleX: 1, duration: 1, ease: "power2.inOut",
          scrollTrigger: { trigger: element, start: "top 88%", once: true },
        })
      })

      frame.querySelectorAll<HTMLElement>("[data-horizontal-story]").forEach((section) => {
        const track = section.querySelector<HTMLElement>("[data-horizontal-track]")
        if (!track) return
        const media = gsap.matchMedia()
        media.add("(min-width: 900px) and (prefers-reduced-motion: no-preference)", () => {
          const distance = Math.max(0, track.scrollWidth - section.clientWidth)
          if (!distance) return
          const tween = gsap.to(track, {
            x: -distance,
            ease: "none",
            scrollTrigger: {
              trigger: section,
              start: "top top",
              end: `+=${distance}`,
              pin: true,
              scrub: 0.8,
              anticipatePin: 1,
              invalidateOnRefresh: true,
            },
          })
          return () => tween.kill()
        })
        return () => media.revert()
      })
    }, frame)

    return () => context.revert()
  }, [])

  return <div className="motion-frame" ref={frameRef}>{children}</div>
}
