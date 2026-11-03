"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ArrowDown, ArrowUpRight, Menu, X } from "lucide-react"
import { nabatNavigation, ummNavigation, ummProgrammeLinks, type SiteKey } from "@/lib/site-data"

export function SiteNavigation({ site }: { site: SiteKey }) {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)
  const [compact, setCompact] = useState(false)
  const menuToggleRef = useRef<HTMLButtonElement>(null)
  const isNabat = site === "nabat"
  const brandHref = isNabat ? "/nabat" : "/"

  useEffect(() => {
    const update = () => setCompact(window.scrollY > 28)
    update()
    window.addEventListener("scroll", update, { passive: true })
    return () => window.removeEventListener("scroll", update)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  useEffect(() => {
    if (!menuOpen) return
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header
      className={`site-header${compact ? " is-compact" : ""}`}
      data-site-header={site}
      onKeyDown={(event) => {
        if (event.key === "Escape" && menuOpen) {
          setMenuOpen(false)
          menuToggleRef.current?.focus()
        }
      }}
    >
      <div className="site-header__inner container-shell">
        <Link className={`brand-mark${isNabat ? " brand-mark--nabat" : ""}`} href={brandHref} aria-label={isNabat ? "Nabat Learning House home" : "Markaz Umm al-Hakam home"}>
          {isNabat ? (
            <>
              <span className="brand-mark__sprout" aria-hidden="true"><i /><i /><i /></span>
              <span className="brand-mark__word">nabat</span>
              <span className="brand-mark__descriptor">LEARNING HOUSE</span>
            </>
          ) : (
            <>
              <span className="brand-mark__seal" aria-hidden="true">أم الحكم</span>
              <span className="brand-mark__word">Markaz <strong>Umm al-Hakam</strong></span>
              <span className="brand-mark__descriptor">ISLAMIC EDUCATION</span>
            </>
          )}
        </Link>

        <nav className="desktop-navigation" aria-label={isNabat ? "Nabat main navigation" : "Main navigation"}>
          {isNabat ? (
            nabatNavigation.map((item) => (
              <Link className={pathname === item.href ? "is-current" : ""} key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))
          ) : (
            <>
              {ummNavigation.filter((item) => item.label !== "Programmes").slice(0, 4).map((item) => (
                <Link className={pathname === item.href ? "is-current" : ""} key={item.href} href={item.href}>{item.label}</Link>
              ))}
              <details className="nav-dropdown">
                <summary aria-label="Open programmes menu">Programmes <ArrowDown aria-hidden="true" size={13} /></summary>
                <div className="nav-dropdown__panel">
                  <p className="nav-dropdown__eyebrow">Learning pathways</p>
                  {ummProgrammeLinks.map((item) => (
                    <Link key={item.href} href={item.href}>
                      <span>{item.label}</span>
                      <small>{item.detail}</small>
                    </Link>
                  ))}
                </div>
              </details>
              {ummNavigation.filter((item) => ["Downloads", "Contact Us"].includes(item.label)).map((item) => (
                <Link className={pathname === item.href ? "is-current" : ""} key={item.href} href={item.href}>{item.label}</Link>
              ))}
            </>
          )}
        </nav>

        <Link className="header-cta" href={isNabat ? "/nabat/admissions" : "/programmes"}>
          <span>{isNabat ? "Admissions" : "Explore Programmes"}</span>
          <ArrowUpRight aria-hidden="true" size={15} strokeWidth={1.6} />
        </Link>

        <button
          aria-controls="mobile-navigation"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          className="mobile-menu-toggle"
          onClick={() => setMenuOpen((open) => !open)}
          ref={menuToggleRef}
          type="button"
        >
          {menuOpen ? <X aria-hidden="true" size={22} /> : <Menu aria-hidden="true" size={22} />}
        </button>
      </div>

      <div className={`mobile-navigation${menuOpen ? " is-open" : ""}`} id="mobile-navigation" aria-hidden={!menuOpen}>
        <div className="mobile-navigation__inner container-shell">
          <p className="eyebrow">{isNabat ? "A gentle beginning" : "Rooted in revelation"}</p>
          <nav aria-label={isNabat ? "Nabat mobile navigation" : "Mobile navigation"}>
            {(isNabat ? nabatNavigation : ummNavigation).map((item, index) => (
              <Link href={item.href} key={item.href} onClick={closeMenu} tabIndex={menuOpen ? 0 : -1}>
                <span className="mobile-navigation__number">0{index + 1}</span>
                <span>{item.label}</span>
                <ArrowUpRight aria-hidden="true" size={17} />
              </Link>
            ))}
          </nav>
          {!isNabat && (
            <div className="mobile-navigation__programmes">
              <span className="eyebrow">Programmes</span>
              {ummProgrammeLinks.map((item) => <Link href={item.href} key={item.href} onClick={closeMenu} tabIndex={menuOpen ? 0 : -1}>{item.label}</Link>)}
            </div>
          )}
          <p className="mobile-navigation__footnote">{isNabat ? "A project of Markaz Umm al-Hakam" : "Knowledge · Understanding · Practice · Character"}</p>
        </div>
      </div>
    </header>
  )
}
