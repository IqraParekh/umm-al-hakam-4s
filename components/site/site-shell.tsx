import type { ReactNode } from "react"
import type { SiteKey } from "@/lib/site-data"
import { MotionFrame } from "@/components/site/motion-frame"
import { SiteFooter } from "@/components/site/site-footer"
import { SiteNavigation } from "@/components/site/site-navigation"

export function SiteShell({ site, children }: { site: SiteKey; children: ReactNode }) {
  return (
    <div className={`site-shell site-shell--${site}`} data-site={site}>
      <MotionFrame>
        <SiteNavigation site={site} />
        {children}
        <SiteFooter site={site} />
      </MotionFrame>
    </div>
  )
}
