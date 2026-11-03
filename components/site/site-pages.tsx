import Link from "next/link"
import { ArrowRight, ArrowUpRight, BadgeCheck, BookOpen, CircleHelp, Download, FileText, MoveUpRight, UserRound } from "lucide-react"
import {
  ageStages,
  dayJourney,
  images,
  nabatCurriculum,
  nabatIslamicCurriculum,
  type PageSection,
  type SitePageData,
} from "@/lib/site-data"
import { ArrowLink, CopyText, Eyebrow, ImageReveal, PageHero, SectionHeading, SiteButton } from "@/components/site/site-primitives"
import { CurriculumExplorer } from "@/components/site/curriculum-explorer"
import { EnquiryForm } from "@/components/site/enquiry-form"
import { ResourceCards } from "@/components/site/resource-cards"
import { StickyPrinciples } from "@/components/site/sticky-principles"
import { nabatApproachSteps, nabatContact } from "@/lib/site-data"
import { NabatFactsBand } from "@/components/site/nabat-facts-band"

export function SitePage({ page }: { page: SitePageData }) {
  switch (page.kind) {
    case "story": return <StoryPage page={page} />
    case "supervision": return <SupervisionPage page={page} />
    case "team": return <TeamPage page={page} />
    case "programmes": return <ProgrammesPage page={page} />
    case "downloads": return <DownloadsPage page={page} />
    case "contact": return <ContactPage page={page} />
    case "curriculum": return <CurriculumPage page={page} />
    case "islamic-curriculum": return <IslamicCurriculumPage page={page} />
    case "approach": return <ApproachPage page={page} />
    case "ages": return <AgePage page={page} />
    case "prospectus": return <ProspectusPage page={page} />
    case "admissions": return <AdmissionsPage page={page} />
  }
}

function StoryPage({ page }: { page: SitePageData }) {
  return (
    <main className={`content-page content-page--${page.site} story-page`}>
      <PageHero site={page.site} eyebrow={page.eyebrow} title={page.title} lead={page.lead} image={page.image} imageAlt={page.imageAlt} />
      {page.quote && (
        <section className="story-quote section-padding" data-reveal>
          <div className="container-shell story-quote__inner"><span aria-hidden="true">“</span><blockquote>{page.quote}</blockquote><p>{page.site === "nabat" ? "NABAT LEARNING HOUSE" : "MARKAZ UMM AL-HAKAM"}</p></div>
        </section>
      )}
      <div className="container-shell story-sections">
        {page.sections.map((section, index) => <EditorialSection key={section.title} section={section} index={index} site={page.site} />)}
      </div>
      <section className={`story-closing story-closing--${page.site} section-padding`} data-reveal>
        <div className="container-shell story-closing__inner">
          <Eyebrow>{page.site === "nabat" ? "A project of Markaz Umm al-Hakam" : "Markaz Umm al-Hakam"}</Eyebrow>
          <h2>{page.site === "nabat" ? <>A gentle start.<br /><em>A meaningful journey.</em></> : <>Rooted in revelation.<br /><em>Built for generations.</em></>}</h2>
          <SiteButton href={page.site === "nabat" ? "/nabat/admissions" : "/programmes"} variant={page.site === "nabat" ? "light" : "primary"}>{page.site === "nabat" ? "Explore admissions" : "Explore programmes"}</SiteButton>
        </div>
      </section>
    </main>
  )
}

function EditorialSection({ section, index, site }: { section: PageSection; index: number; site: SitePageData["site"] }) {
  const layout = section.layout ?? (index % 2 === 0 ? "columns" : "wide")
  return (
    <section className={`editorial-section editorial-section--${layout}${index % 2 ? " is-offset" : ""}`} data-reveal>
      <div className="editorial-section__index">{String(index + 1).padStart(2, "0")} <span>{site === "nabat" ? "NABAT" : "UHH"}</span></div>
      <div className="editorial-section__body">
        {section.eyebrow && <Eyebrow>{section.eyebrow}</Eyebrow>}
        <h2>{section.title}</h2>
        <p><CopyText text={section.body} /></p>
        {section.points && <ul className="editorial-point-list">{section.points.map((point) => <li key={point}><span aria-hidden="true" /><CopyText text={point} /></li>)}</ul>}
      </div>
      {layout === "columns" && index === 0 && (
        <figure className="editorial-section__image"><ImageReveal src={site === "nabat" ? images.nabatHands : images.ummStudy} alt={site === "nabat" ? "Children exploring natural learning materials." : "Books and a reading stand in a quiet place of study."} /><figcaption className="image-caption">Knowledge, understood and carried with care.</figcaption></figure>
      )}
      {layout === "wide" && <span className="editorial-section__rule" data-line-reveal aria-hidden="true" />}
    </section>
  )
}

function SupervisionPage({ page }: { page: SitePageData }) {
  return (
    <main className="content-page content-page--umm supervision-page">
      <PageHero site="umm" eyebrow={page.eyebrow} title={page.title} lead={page.lead} image={page.image} imageAlt={page.imageAlt} />
      <section className="supervision-disclosures section-padding" aria-label="Supervision responsibilities">
        <div className="container-shell">
          {page.sections.map((section, index) => (
            <details className="supervision-disclosure" key={section.eyebrow} data-reveal>
              <summary>
                <span className="supervision-disclosure__number">0{index + 1}</span>
                <span className="supervision-disclosure__label">{section.eyebrow}</span>
                <span className="supervision-disclosure__icon" aria-hidden="true" />
              </summary>
              <div className="supervision-disclosure__content">
                <h2>{section.title}</h2>
                <p><CopyText text={section.body} /></p>
              </div>
            </details>
          ))}
        </div>
      </section>
      <section className="supervision-cta section-padding">
        <div className="container-shell supervision-cta__inner" data-reveal>
          <div><Eyebrow>Supervisory team</Eyebrow><h2>Care carried<br /><em>by people.</em></h2></div>
          <SiteButton href="/team">Meet the team</SiteButton>
        </div>
      </section>
    </main>
  )
}

const teamCategories = ["Leadership", "Academic / Islamic Supervision", "Programme Heads", "Teachers", "Administration"]

function TeamPage({ page }: { page: SitePageData }) {
  return (
    <main className="content-page content-page--umm team-page">
      <PageHero site="umm" eyebrow={page.eyebrow} title={page.title} lead={page.lead} image={page.image} imageAlt={page.imageAlt} />
      <section className="team-directory section-padding" aria-label="Team profiles">
        <div className="container-shell team-directory__categories">
          {teamCategories.map((category) => (
            <article className="team-placeholder" key={category} data-reveal>
              <figure className="team-placeholder__portrait"><UserRound aria-hidden="true" size={36} strokeWidth={1} /><figcaption>Official portrait pending</figcaption></figure>
              <div className="team-placeholder__info">
                <Eyebrow>{category}</Eyebrow>
                <h2>[Team Member Name]</h2>
                <p className="team-placeholder__role">[Role]</p>
                <details className="team-placeholder__details">
                  <summary>View profile</summary>
                  <p>[Qualifications]<br />[Short biography]</p>
                </details>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}

function ProgrammesPage({ page }: { page: SitePageData }) {
  return (
    <main className="content-page content-page--umm programmes-page">
      <PageHero site="umm" eyebrow={page.eyebrow} title={page.title} lead={page.lead} image={page.image} imageAlt={page.imageAlt} />
      <article className="programme-page-nabat container-shell" data-reveal>
        <div className="programme-page-nabat__visual"><ImageReveal src={images.nabatLearning} alt="Children gathered around a table with books and nature materials." className="programme-page-nabat__image" /><span className="programme-page-nabat__badge">Ages 3–7</span></div>
        <div className="programme-page-nabat__copy"><Eyebrow>A project of Markaz Umm al-Hakam</Eyebrow><h2>NABAT<br /><em>Learning House</em></h2><p>Early-years learning for children ages 3–7.</p><SiteButton href="/nabat" variant="outline">Explore Nabat</SiteButton></div>
      </article>
      <div className="container-shell programmes-archive">
        {[
          { id: "quran", number: "02", label: "Qur'an Reading & Hifz", text: "Reading, recitation and memorisation.", visual: "quran" },
          { id: "women", number: "03", label: "Women's Programme", text: "Beneficial learning for women.", visual: "women" },
          { id: "weekend", number: "04", label: "Weekend Programme", text: "Learning beyond the weekday.", visual: "weekend" },
          { id: "seasonal", number: "05", label: "Seasonal & Ramadan Programmes", text: "Focused seasonal learning.", visual: "seasonal" },
        ].map((program) => (
          <article className={`programme-archive-row programme-archive-row--${program.visual}`} id={program.id} key={program.id} data-reveal>
            <span className="programme-archive-row__number">{program.number} <small>/ PROGRAMME</small></span>
            <div className="programme-archive-row__name"><h3>{program.label}</h3></div>
            <p>{program.text}</p>
            <Link className="programme-archive-row__link" href="/contact">Ask about this programme <ArrowUpRight aria-hidden="true" size={15} /></Link>
          </article>
        ))}
      </div>
    </main>
  )
}

function DownloadsPage({ page }: { page: SitePageData }) {
  return (
    <main className="content-page content-page--umm downloads-page">
      <PageHero site="umm" eyebrow={page.eyebrow} title={page.title} lead={page.lead} image={page.image} imageAlt={page.imageAlt} />
      <section className="downloads-library section-padding">
        <div className="container-shell downloads-library__heading" data-reveal><Eyebrow>Current resources</Eyebrow><h2>Start with<br /><em>the essentials.</em></h2><p>Official PDFs will appear here once approved.</p></div>
        <div className="container-shell"><ResourceCards /></div>
      </section>
    </main>
  )
}

function ContactPage({ page }: { page: SitePageData }) {
  const nabat = page.site === "nabat"
  const contactItems = nabat
    ? [
        { label: "Location", value: nabatContact.address },
        { label: "Phone / WhatsApp", value: nabatContact.phone, href: nabatContact.whatsappHref },
        { label: "Email", value: nabatContact.email, href: nabatContact.emailHref },
      ]
    : [
        { label: "Location", value: "[ADD OFFICIAL ADDRESS]" },
        { label: "Phone / WhatsApp", value: "[ADD OFFICIAL PHONE / WHATSAPP]" },
        { label: "Email", value: "[ADD OFFICIAL EMAIL]" },
      ]

  return (
    <main className={`content-page content-page--${page.site} contact-page`}>
      <PageHero site={page.site} eyebrow={page.eyebrow} title={page.title} lead={page.lead} image={page.image} imageAlt={page.imageAlt} />
      <section className="contact-main section-padding">
        <div className="container-shell contact-main__grid">
          <div className="contact-details" data-reveal>
            <Eyebrow>{nabat ? "Nabat Learning House" : "Markaz Umm al-Hakam"}</Eyebrow>
            <h2>Find us.<br /><em>Ask us.</em></h2>
            <div className="contact-details__items">
              {contactItems.map((item, index) => <div className="contact-detail" key={item.label}><span>0{index + 1}</span><div><small>{item.label}</small>{item.href ? <a className="contact-detail__value" href={item.href} rel={item.label === "Phone / WhatsApp" ? "noreferrer" : undefined} target={item.label === "Phone / WhatsApp" ? "_blank" : undefined}>{item.value}</a> : <p>{item.value}</p>}</div></div>)}
            </div>
          </div>
          <div className="contact-form-panel" data-reveal>
            <div className="contact-form-panel__heading"><span className="contact-form-panel__number">0{nabat ? "2" : "1"}</span><div><Eyebrow>Send an enquiry</Eyebrow><h3>{nabat ? "Tell us about your family." : "How can we help?"}</h3></div></div>
            <EnquiryForm mode={nabat ? "nabat-contact" : "umm-contact"} />
          </div>
        </div>
      </section>
    </main>
  )
}

function CurriculumPage({ page }: { page: SitePageData }) {
  return (
    <main className="content-page content-page--nabat curriculum-page">
      <PageHero site="nabat" eyebrow={page.eyebrow} title={page.title} lead={page.lead} image={page.image} imageAlt={page.imageAlt} />
      <section className="curriculum-page__explorer section-padding"><div className="container-shell curriculum-page__intro" data-reveal><Eyebrow>Explore the learning areas</Eyebrow><h2>Build a strong base.<br /><em>Keep curiosity alive.</em></h2><p>Choose a subject to explore its learning themes.</p></div><div className="container-shell"><CurriculumExplorer areas={nabatCurriculum} /></div></section>
    </main>
  )
}

function IslamicCurriculumPage({ page }: { page: SitePageData }) {
  return (
    <main className="content-page content-page--nabat islamic-curriculum-page">
      <PageHero site="nabat" eyebrow={page.eyebrow} title={page.title} lead={page.lead} image={page.image} imageAlt={page.imageAlt} />
      <section className="islamic-curriculum-map section-padding"><div className="container-shell islamic-curriculum-map__layout"><div className="islamic-curriculum-map__visual" data-reveal><ImageReveal src={images.ummStudy} alt="Books and a reading stand arranged in a quiet, sunlit study." className="islamic-curriculum-map__image" /><div className="islamic-curriculum-map__seal">نَبَات<span>Faith &amp; learning</span></div></div><div className="islamic-curriculum-list">{nabatIslamicCurriculum.map((item) => <details className="islamic-curriculum-item" key={item.number} data-reveal><summary><span>{item.number}</span><h2>{item.title}</h2><ArrowUpRight aria-hidden="true" size={16} /></summary><p><CopyText text={item.text} /></p></details>)}<p className="islamic-curriculum-list__note">Specific texts and sequence are confirmed by the academic and religious supervisors.</p></div></div></section>
    </main>
  )
}

function ApproachPage({ page }: { page: SitePageData }) {
  return (
    <main className="content-page content-page--nabat approach-page">
      <PageHero site="nabat" eyebrow={page.eyebrow} title={page.title} lead={page.lead} image={page.image} imageAlt={page.imageAlt} />
      <StickyPrinciples site="nabat" steps={nabatApproachSteps} />
    </main>
  )
}

function AgePage({ page }: { page: SitePageData }) {
  return (
    <main className="content-page content-page--nabat age-page">
      <PageHero site="nabat" eyebrow={page.eyebrow} title={page.title} lead={page.lead} image={page.image} imageAlt={page.imageAlt} />
      <section className="age-page-journey section-padding"><div className="container-shell age-page-journey__track"><span className="age-page-journey__line" data-line-reveal aria-hidden="true" />{ageStages.map((stage, index) => <article className="age-page-journey__stage" key={stage.age} data-reveal><span className="age-page-journey__age">{stage.age}</span><div><span className="eyebrow">Stage 0{index + 1}</span><h2>{stage.title}</h2><p>{stage.text}</p></div></article>)}<p className="age-page__note">Age guide only—not an official class list.</p></div></section>
    </main>
  )
}

function ProspectusPage({ page }: { page: SitePageData }) {
  return (
    <main className="content-page content-page--nabat prospectus-page">
      <PageHero site="nabat" eyebrow={page.eyebrow} title={page.title} lead={page.lead} image={page.image} imageAlt={page.imageAlt} />
      <section className="prospectus-content section-padding"><div className="container-shell prospectus-content__heading" data-reveal><Eyebrow>Inside the prospectus</Eyebrow><h2>A clear picture<br /><em>of the journey.</em></h2><p>Purpose, learning areas and teaching approach.</p></div><div className="container-shell prospectus-chapters">{page.sections.map((section, index) => <article className="prospectus-chapter" key={section.title} data-reveal><span className="prospectus-chapter__number">0{index + 1}</span><div><Eyebrow>{section.eyebrow}</Eyebrow><h3>{section.title}</h3><p>{section.body}</p></div><ArrowUpRight aria-hidden="true" size={17} /></article>)}</div><div className="container-shell"><details className="prospectus-dayflow"><summary>A conceptual day at Nabat <span>Not a published timetable</span></summary><div className="prospectus-dayflow__steps">{dayJourney.map((moment) => <div key={moment.time}><span>{moment.time}</span><strong>{moment.title}</strong></div>)}</div></details></div></section>
      <section className="prospectus-contents section-padding"><div className="container-shell prospectus-contents__grid"><div className="prospectus-contents__visual" data-reveal><ImageReveal src={images.nabatHands} alt="Young children exploring natural materials on a light table." className="prospectus-contents__image" /><span className="prospectus-contents__sticker">Ages<br />3—7</span></div><div className="prospectus-contents__copy" data-reveal><Eyebrow>Family resource</Eyebrow><h2>The Nabat<br /><em>prospectus.</em></h2><p className="prospectus-contents__pending">Official PDF not yet supplied.</p><SiteButton href="/nabat/contact" variant="outline">Request the prospectus</SiteButton></div></div></section>
    </main>
  )
}

function AdmissionsPage({ page }: { page: SitePageData }) {
  const steps = [
    { number: "01", title: "Enquire", text: "Start with your questions." },
    { number: "02", title: "Apply", text: "Official forms are shared by the team." },
    { number: "03", title: "Meet", text: "Any meeting or assessment is explained first." },
    { number: "04", title: "Confirmation", text: "The team shares the outcome and next steps." },
    { number: "05", title: "Begin", text: "Prepare for a new learning journey." },
  ]
  return (
    <main className="content-page content-page--nabat admissions-page">
      <PageHero site="nabat" eyebrow={page.eyebrow} title={page.title} lead={page.lead} image={page.image} imageAlt={page.imageAlt} />
      <NabatFactsBand />
      <section className="admissions-journey section-padding"><div className="container-shell admissions-journey__heading" data-reveal><Eyebrow>How it begins</Eyebrow><h2>A simple first step.<br /><em>A considered journey.</em></h2><p>The sequence below is an enquiry overview, not a confirmed admission policy. Requirements, dates and decisions will be shared by the institution.</p></div><div className="container-shell admissions-steps">{steps.map((step) => <article className="admissions-step" key={step.number} data-reveal><span>{step.number}</span><div><h3>{step.title}</h3><p>{step.text}</p></div><ArrowRight aria-hidden="true" size={18} /></article>)}</div></section>
      <section className="admissions-form-section section-padding"><div className="container-shell admissions-form-section__grid"><div className="admissions-form-section__intro" data-reveal><Eyebrow>Start an enquiry</Eyebrow><h2>Tell us a little<br /><em>about your family.</em></h2><p>Sharing this information helps prepare a first conversation. Live form delivery is not yet connected.</p><span className="admissions-form-section__note">Ages 3–7 · Starting December 2026, inshaAllah<br />Entry details: [ADD OFFICIAL INFORMATION]</span></div><div className="admissions-form-section__form" data-reveal><EnquiryForm mode="admissions" /></div></div></section>
    </main>
  )
}
