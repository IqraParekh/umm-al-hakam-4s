import Link from "next/link"
import { ArrowUpRight, MoveUpRight } from "lucide-react"
import { nabatNavigation, ummNavigation, type SiteKey } from "@/lib/site-data"

export function SiteFooter({ site }: { site: SiteKey }) {
  const isNabat = site === "nabat"
  const links = isNabat ? nabatNavigation : ummNavigation

  return (
    <footer className={`site-footer site-footer--${site}`}>
      <div className="site-footer__top container-shell">
        <div className="site-footer__brand-column">
          <Link className={`footer-brand${isNabat ? " footer-brand--nabat" : ""}`} href={isNabat ? "/nabat" : "/"}>
            <span className="footer-brand__small">{isNabat ? "A GENTLE BEGINNING" : "AN INSTITUTION FOR GENERATIONS"}</span>
            <span>{isNabat ? "nabat" : "Umm al-Hakam"}</span>
          </Link>
          <p>{isNabat ? "A thoughtful early-years learning house for children approximately ages 3–7." : "Rooted in the Qur'an, Sunnah and the understanding of the Sahabah رضي الله عنهم."}</p>
          <div className="footer-socials" aria-label="Social channels">
            <span>Social channels</span>
            <span className="footer-socials__pending">[ADD OFFICIAL LINKS]</span>
          </div>
        </div>
        <div className="site-footer__links-column">
          <p className="eyebrow">Explore</p>
          <nav aria-label="Footer navigation">
            {links.map((item) => (
              <Link href={item.href} key={item.href}>
                {item.label}<ArrowUpRight aria-hidden="true" size={13} />
              </Link>
            ))}
          </nav>
        </div>
        <div className="site-footer__contact-column">
          <p className="eyebrow">Get in touch</p>
          <p className="footer-placeholder">[ADD OFFICIAL ADDRESS]</p>
          <p className="footer-placeholder">[ADD OFFICIAL PHONE / WHATSAPP]</p>
          <p className="footer-placeholder">[ADD OFFICIAL EMAIL]</p>
          <Link className="footer-contact-link" href={isNabat ? "/nabat/contact" : "/contact"}>
            Start a conversation <MoveUpRight aria-hidden="true" size={15} />
          </Link>
        </div>
      </div>
      <div className="site-footer__bottom container-shell">
        <p>© {new Date().getFullYear()} {isNabat ? "Nabat Learning House" : "Markaz Umm al-Hakam"}. All rights reserved.</p>
        {isNabat ? (
          <Link className="footer-project-link" href="/">
            <span>A Project of Markaz Umm al-Hakam</span><ArrowUpRight aria-hidden="true" size={14} />
          </Link>
        ) : (
          <Link className="footer-project-link" href="/nabat">
            <span>Discover Nabat Learning House</span><ArrowUpRight aria-hidden="true" size={14} />
          </Link>
        )}
        <p className="footer-credit">Made for learning that lasts.</p>
      </div>
    </footer>
  )
}
