import Link from "next/link"
import { ArrowRight, ArrowUpRight, BadgeCheck, BookOpen, CircleHelp, Download, FileText, MoveUpRight, UserRound } from "lucide-react"
import {
  ageStages,
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
import { nabatApproachSteps } from "@/lib/site-data"

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
  const pillars = [
    { icon: BookOpen, title: "Curriculum oversight", text: "Source material, sequence, learning intentions and the relationship between knowledge and practice are reviewed with care." },
    { icon: BadgeCheck, title: "Teaching standards", text: "Preparation, subject knowledge, communication, respectful practice and student understanding inform a clear teaching standard." },
    { icon: CircleHelp, title: "Islamic methodology", text: "Sound sourcing, appropriate context and the understanding of the Sahabah رضي الله عنهم remain central to Islamic teaching." },
    { icon: UserRound, title: "Teacher selection", text: "Teacher selection is approached with attention to knowledge, conduct, care and readiness to support learners." },
    { icon: ArrowRight, title: "Academic development", text: "Reflection and ongoing development help teachers strengthen their practice and respond to the needs of students." },
    { icon: FileText, title: "Quality assurance", text: "A quality framework supports consistency, accountability and thoughtful improvement across programmes." },
  ]
  return (
    <main className="content-page content-page--umm supervision-page">
      <PageHero site="umm" eyebrow={page.eyebrow} title={page.title} lead={page.lead} image={page.image} imageAlt={page.imageAlt} />
      <section className="supervision-intro section-padding" data-reveal>
        <div className="container-shell supervision-intro__grid"><Eyebrow>Academic &amp; religious supervision</Eyebrow><h2>Oversight is not a layer above learning.<br /><em>It is care for what happens within it.</em></h2><p>From the choice of source material to the everyday experience of a learner, supervision helps hold the educational journey together.</p></div>
      </section>
      <section className="supervision-pillars section-padding">
        <div className="container-shell supervision-pillars__heading"><SectionHeading eyebrow="Our standards" title={<>A framework for<br /><em>responsible learning.</em></>} note="Seven connected responsibilities support the quality and integrity of the work." /></div>
        <div className="container-shell supervision-pillars__grid">
          {pillars.map(({ icon: Icon, title, text }, index) => (
            <article className="supervision-pillar" key={title} data-reveal>
              <span className="supervision-pillar__number">0{index + 1}</span><Icon aria-hidden="true" size={21} strokeWidth={1.35} /><h3>{title}</h3><p><CopyText text={text} /></p>
            </article>
          ))}
          <article className="supervision-pillar supervision-pillar--method" data-reveal><span className="supervision-pillar__number">07</span><span className="supervision-pillar__seal" aria-hidden="true">أ</span><h3>One connected method</h3><p>Academic development and religious care are held in conversation, so teaching remains both thoughtful and rooted.</p></article>
        </div>
      </section>
      <section className="supervision-detail section-padding">
        <div className="container-shell supervision-detail__grid">
          <div className="supervision-detail__visual" data-reveal><ImageReveal src={images.ummLibrary} alt="A light-filled library with arched shelves and books." className="supervision-detail__image" /><span className="supervision-detail__caption">A standard held across the learning journey</span></div>
          <div className="supervision-detail__copy" data-reveal><Eyebrow>Curriculum &amp; teaching</Eyebrow><h2>Clear sources.<br /><em>Careful teaching.</em></h2><p>{page.sections[0]?.body}</p><p>{page.sections[1]?.body}</p><ul>{page.sections[2]?.points?.map((point) => <li key={point}>{point}</li>)}</ul><ArrowLink href="/team">Meet the supervisory team</ArrowLink></div>
        </div>
      </section>
      <section className="supervision-cta section-padding"><div className="container-shell supervision-cta__inner" data-reveal><div><Eyebrow>Meet the people behind the work</Eyebrow><h2>Standards are carried<br />by <em>people.</em></h2></div><SiteButton href="/team">Meet our team</SiteButton></div></section>
    </main>
  )
}

const teamCategories = ["Leadership", "Academic / Islamic Supervision", "Programme Heads", "Teachers", "Administration"]

function TeamPage({ page }: { page: SitePageData }) {
  return (
    <main className="content-page content-page--umm team-page">
      <PageHero site="umm" eyebrow={page.eyebrow} title={page.title} lead={page.lead} image={page.image} imageAlt={page.imageAlt} />
      <section className="team-directory section-padding">
        <div className="container-shell team-directory__intro" data-reveal><Eyebrow>A directory in progress</Eyebrow><h2>Every role matters.<br /><em>Every profile deserves accuracy.</em></h2><p>Staff photographs, names, qualifications and biographies are not yet available. No identities or credentials have been invented for this preview.</p></div>
        <div className="container-shell team-directory__categories">
          {teamCategories.map((category, categoryIndex) => (
            <section className="team-category" key={category} data-reveal>
              <div className="team-category__heading"><span>0{categoryIndex + 1}</span><h3>{category}</h3><span className="team-category__line" aria-hidden="true" /></div>
              <div className="team-placeholder-grid">
                {[0, 1].map((person) => (
                  <article className="team-placeholder" key={person}>
                    <div className="team-placeholder__portrait"><UserRound aria-hidden="true" size={40} strokeWidth={1} /><span>Official photograph<br />to be added</span></div>
                    <div className="team-placeholder__info"><span className="eyebrow">Profile pending</span><h4>[Team Member Name]</h4><p className="team-placeholder__role">[Role]</p><p>[Qualifications]</p><p>[Short biography]</p></div>
                  </article>
                ))}
              </div>
            </section>
          ))}
        </div>
      </section>
      <section className="team-note section-padding"><div className="container-shell team-note__inner" data-reveal><span className="team-note__mark">أ</span><div><Eyebrow>Respect for accuracy</Eyebrow><h2>Only confirmed<br /><em>profiles belong here.</em></h2><p>Official names, photographs, roles and qualifications can be added when they are approved for publication.</p></div></div></section>
    </main>
  )
}

function ProgrammesPage({ page }: { page: SitePageData }) {
  return (
    <main className="content-page content-page--umm programmes-page">
      <PageHero site="umm" eyebrow={page.eyebrow} title={page.title} lead={page.lead} image={page.image} imageAlt={page.imageAlt} />
      <section className="programmes-page__lead section-padding" data-reveal><div className="container-shell"><Eyebrow>Learning across generations</Eyebrow><h2>Distinct pathways.<br /><em>Shared foundations.</em></h2><p>Programme details, levels, schedules and availability will be confirmed by Markaz Umm al-Hakam. The overview below introduces the areas of learning without inventing dates or admissions requirements.</p></div></section>
      <article className="programme-page-nabat container-shell" data-reveal>
        <div className="programme-page-nabat__visual"><ImageReveal src={images.nabatLearning} alt="Children gathered around a table with books and nature materials." className="programme-page-nabat__image" /><span className="programme-page-nabat__badge">Ages 3–7</span></div>
        <div className="programme-page-nabat__copy"><Eyebrow>A project of Markaz Umm al-Hakam</Eyebrow><h2>NABAT<br /><em>Learning House</em></h2><p>An early-years learning house for children approximately ages 3–7. A gentle beginning in knowledge, faith, curiosity and character.</p><SiteButton href="/nabat" variant="outline">Explore Nabat</SiteButton></div>
      </article>
      <div className="container-shell programmes-archive">
        {[
          { id: "quran", number: "02", label: "Qur'an Reading & Hifz", audience: "Learners seeking Qur'anic reading and memorisation", text: "A programme area dedicated to reading, recitation and Hifz. Specific levels, method, schedule and availability are [ADD OFFICIAL INFORMATION].", visual: "quran" },
          { id: "women", number: "03", label: "Women's Programme", audience: "Women", text: "A space for women to learn and deepen their engagement with beneficial knowledge. Subjects and teaching arrangements are [ADD OFFICIAL INFORMATION].", visual: "women" },
          { id: "weekend", number: "04", label: "Weekend Programme", audience: "Families and learners", text: "Learning that complements the rhythm of the week. Age groups, dates and availability are [ADD OFFICIAL INFORMATION].", visual: "weekend" },
          { id: "seasonal", number: "05", label: "Seasonal & Ramadan Programmes", audience: "Learners across generations", text: "Focused learning around seasonal moments and Ramadan. Programme structure and dates are [ADD OFFICIAL INFORMATION].", visual: "seasonal" },
        ].map((program, index) => (
          <article className={`programme-archive-row programme-archive-row--${program.visual}`} id={program.id} key={program.id} data-reveal>
            <span className="programme-archive-row__number">{program.number} <small>/ PROGRAMME</small></span>
            <div className="programme-archive-row__name"><h3>{program.label}</h3><span>{program.audience}</span></div>
            <p>{program.text}</p>
            <Link className="programme-archive-row__link" href="/contact">Ask about this programme <ArrowUpRight aria-hidden="true" size={15} /></Link>
            <span className="programme-archive-row__ornament" aria-hidden="true">{index === 0 ? "ق" : index === 1 ? "ع" : index === 2 ? "و" : "ر"}</span>
          </article>
        ))}
      </div>
      <section className="programmes-page__cta section-padding"><div className="container-shell programmes-page__cta-inner" data-reveal><h2>Find the right place<br /><em>to begin.</em></h2><SiteButton href="/contact">Enquire about programmes</SiteButton></div></section>
    </main>
  )
}

function DownloadsPage({ page }: { page: SitePageData }) {
  return (
    <main className="content-page content-page--umm downloads-page">
      <PageHero site="umm" eyebrow={page.eyebrow} title={page.title} lead={page.lead} image={page.image} imageAlt={page.imageAlt} />
      <section className="downloads-library section-padding">
        <div className="container-shell downloads-library__heading" data-reveal><Eyebrow>Resource library</Eyebrow><h2>One place for the<br /><em>next conversation.</em></h2><p>Browse the current resource list. Digital previews are available on the linked pages; downloadable official PDFs are not yet supplied.</p></div>
        <div className="container-shell"><ResourceCards /></div>
        <div className="container-shell downloads-library__note"><Download aria-hidden="true" size={17} /><p>To keep this library accurate, files will be made downloadable once the approved versions are provided.</p></div>
      </section>
    </main>
  )
}

function ContactPage({ page }: { page: SitePageData }) {
  const nabat = page.site === "nabat"
  return (
    <main className={`content-page content-page--${page.site} contact-page`}>
      <PageHero site={page.site} eyebrow={page.eyebrow} title={page.title} lead={page.lead} image={page.image} imageAlt={page.imageAlt} />
      <section className="contact-main section-padding">
        <div className="container-shell contact-main__grid">
          <div className="contact-details" data-reveal>
            <Eyebrow>{nabat ? "For families" : "Institutional enquiries"}</Eyebrow>
            <h2>Start with<br /><em>a question.</em></h2>
            <p>{nabat ? "Tell us what you would like to know about Nabat, its curriculum or the admissions journey." : "For questions about our institution, supervision or programmes, use the enquiry form."}</p>
            <div className="contact-details__items">
              {[
                { label: "Location", value: "[ADD OFFICIAL ADDRESS]" },
                { label: "Phone / WhatsApp", value: "[ADD OFFICIAL PHONE / WHATSAPP]" },
                { label: "Email", value: "[ADD OFFICIAL EMAIL]" },
              ].map((item, index) => <div className="contact-detail" key={item.label}><span>0{index + 1}</span><div><small>{item.label}</small><p>{item.value}</p></div></div>)}
            </div>
            <div className="contact-social-note"><span>Social channels</span><strong>[ADD OFFICIAL SOCIAL LINKS]</strong></div>
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
      <section className="curriculum-page__explorer section-padding"><div className="container-shell curriculum-page__intro" data-reveal><Eyebrow>Explore the learning areas</Eyebrow><h2>Build a strong base.<br /><em>Keep curiosity alive.</em></h2><p>Choose a subject to see the learning themes currently named for Nabat. Specific pacing and class groupings will be shared when confirmed.</p></div><div className="container-shell"><CurriculumExplorer areas={nabatCurriculum} /></div></section>
      <section className="curriculum-materials section-padding"><div className="container-shell curriculum-materials__grid"><div className="curriculum-materials__image" data-reveal><ImageReveal src={images.nabatHands} alt="Hands-on learning materials arranged on a natural tabletop." className="curriculum-materials__photo" /><span className="image-caption">Materials invite children to see, touch, try and return.</span></div><div className="curriculum-materials__copy" data-reveal><Eyebrow>Learning in many forms</Eyebrow><h2>Words, numbers,<br />wonder and <em>making.</em></h2><p>Children encounter new ideas through conversation, carefully selected materials, observation, movement and creative work. A thoughtful curriculum leaves room for both concentration and discovery.</p><ul>{["English and language", "Mathematics and reasoning", "Science and observation", "Arabic, Urdu and geography", "Art, motor skills and sensory play"].map((item) => <li key={item}>{item}</li>)}</ul><ArrowLink href="/nabat/islamic-curriculum">Explore the Islamic curriculum</ArrowLink></div></div></section>
    </main>
  )
}

function IslamicCurriculumPage({ page }: { page: SitePageData }) {
  return (
    <main className="content-page content-page--nabat islamic-curriculum-page">
      <PageHero site="nabat" eyebrow={page.eyebrow} title={page.title} lead={page.lead} image={page.image} imageAlt={page.imageAlt} />
      <section className="islamic-curriculum-intro section-padding" data-reveal><div className="container-shell"><Eyebrow>Knowledge with adab</Eyebrow><h2>Introduce the tradition.<br /><em>Make space for meaning.</em></h2><p>Early-years Islamic learning is approached with respect for the sources and the child. Topics are introduced in a way that supports listening, understanding, practice and remembrance.</p></div></section>
      <section className="islamic-curriculum-map section-padding"><div className="container-shell islamic-curriculum-map__layout"><div className="islamic-curriculum-map__visual" data-reveal><ImageReveal src={images.ummStudy} alt="Books and a reading stand arranged in a quiet, sunlit study." className="islamic-curriculum-map__image" /><div className="islamic-curriculum-map__seal">نَبَات<span>Faith &amp; learning</span></div></div><div className="islamic-curriculum-list">{nabatIslamicCurriculum.map((item) => <article className="islamic-curriculum-item" key={item.number} data-reveal><span>{item.number}</span><div><h3>{item.title}</h3><p><CopyText text={item.text} /></p></div><ArrowUpRight aria-hidden="true" size={16} /></article>)}</div></div></section>
      <section className="islamic-curriculum-note section-padding"><div className="container-shell islamic-curriculum-note__inner" data-reveal><span className="islamic-curriculum-note__mark">﷽</span><div><Eyebrow>A careful beginning</Eyebrow><h2>Respectful. Rooted.<br /><em>Age-aware.</em></h2><p>The precise texts, selections and sequence used with each age group will be confirmed by the academic and religious supervisors.</p></div><SiteButton href="/nabat/prospectus" variant="light">Read the prospectus</SiteButton></div></section>
    </main>
  )
}

function ApproachPage({ page }: { page: SitePageData }) {
  return (
    <main className="content-page content-page--nabat approach-page">
      <PageHero site="nabat" eyebrow={page.eyebrow} title={page.title} lead={page.lead} image={page.image} imageAlt={page.imageAlt} />
      <StickyPrinciples site="nabat" steps={nabatApproachSteps} />
      <section className="approach-detail section-padding"><div className="container-shell approach-detail__grid"><div data-reveal><Eyebrow>Why approach matters</Eyebrow><h2>How a child is taught<br />shapes what learning <em>feels like.</em></h2></div><div data-reveal><p>At Nabat, teaching is intended to be clear, respectful and responsive to the learner. The six principles describe a framework for how knowledge is introduced and supported—not a guarantee of individual outcomes.</p><ArrowLink href="/nabat/who-we-teach">Meet the learning journey</ArrowLink></div></div></section>
    </main>
  )
}

function AgePage({ page }: { page: SitePageData }) {
  return (
    <main className="content-page content-page--nabat age-page">
      <PageHero site="nabat" eyebrow={page.eyebrow} title={page.title} lead={page.lead} image={page.image} imageAlt={page.imageAlt} />
      <section className="age-page-intro section-padding" data-reveal><div className="container-shell"><Eyebrow>An age-based view</Eyebrow><h2>Every beginning<br /><em>is its own.</em></h2><p>These descriptions are broad age-stage reflections, not official class names, groupings or admission criteria.</p></div></section>
      <section className="age-page-journey section-padding"><div className="container-shell age-page-journey__track"><span className="age-page-journey__line" data-line-reveal aria-hidden="true" />{ageStages.map((stage, index) => <article className="age-page-journey__stage" key={stage.age} data-reveal><span className="age-page-journey__age">{stage.age}</span><div><span className="eyebrow">Stage 0{index + 1}</span><h3>{stage.title}</h3><p>{stage.text}</p></div></article>)}</div></section>
      <section className="age-page-note section-padding"><div className="container-shell age-page-note__grid" data-reveal><div><Eyebrow>For families</Eyebrow><h2>Not a race.<br /><em>A relationship.</em></h2></div><div><p>Children develop in different ways and at different paces. Nabat’s age journey is a guide to the kinds of foundations that may be supported as children grow. Official entry criteria and levels are [ADD OFFICIAL INFORMATION].</p><SiteButton href="/nabat/admissions">Ask about admissions</SiteButton></div></div></section>
    </main>
  )
}

function ProspectusPage({ page }: { page: SitePageData }) {
  return (
    <main className="content-page content-page--nabat prospectus-page">
      <PageHero site="nabat" eyebrow={page.eyebrow} title={page.title} lead={page.lead} image={page.image} imageAlt={page.imageAlt} />
      <section className="prospectus-content section-padding"><div className="container-shell prospectus-content__heading" data-reveal><Eyebrow>Inside the prospectus</Eyebrow><h2>A clear picture<br /><em>of the journey.</em></h2><p>Explore Nabat’s purpose, learning areas and the principles behind its early-years experience.</p></div><div className="container-shell prospectus-chapters">{page.sections.map((section, index) => <article className="prospectus-chapter" key={section.title} data-reveal><span className="prospectus-chapter__number">0{index + 1}</span><div><Eyebrow>{section.eyebrow}</Eyebrow><h3>{section.title}</h3><p>{section.body}</p></div><ArrowUpRight aria-hidden="true" size={17} /></article>)}</div></section>
      <section className="prospectus-contents section-padding"><div className="container-shell prospectus-contents__grid"><div className="prospectus-contents__visual" data-reveal><ImageReveal src={images.nabatHands} alt="Young children exploring natural materials on a light table." className="prospectus-contents__image" /><span className="prospectus-contents__sticker">Ages<br />3—7</span></div><div className="prospectus-contents__copy" data-reveal><Eyebrow>Digital resource</Eyebrow><h2>See the Nabat journey<br /><em>in full.</em></h2><p>The approved PDF prospectus has not yet been supplied. Until then, this page offers a digital overview of the curriculum, approach and admissions journey.</p><div className="prospectus-contents__actions"><button className="site-button site-button--outline prospectus-download-button" disabled title="The official prospectus PDF has not been supplied yet." type="button"><span>Download Prospectus</span><Download aria-hidden="true" size={16} /></button><span className="prospectus-contents__pending">Official PDF to be supplied</span><Link className="prospectus-contents__admissions-link" href="/nabat/admissions">Start an enquiry <ArrowUpRight aria-hidden="true" size={15} /></Link></div></div></div></section>
    </main>
  )
}

function AdmissionsPage({ page }: { page: SitePageData }) {
  const steps = [
    { number: "01", title: "Enquire", text: "Begin with a conversation and share the questions that matter to your family." },
    { number: "02", title: "Submit an application", text: "Application forms and required documents will be shared once the official process is confirmed." },
    { number: "03", title: "Assessment / meeting", text: "If applicable, the institution will explain the purpose and format of any assessment or meeting." },
    { number: "04", title: "Admission confirmation", text: "The institution will confirm the outcome and any next steps directly with the family." },
    { number: "05", title: "Begin the journey", text: "Once details are confirmed, your child can prepare for a thoughtful new beginning." },
  ]
  return (
    <main className="content-page content-page--nabat admissions-page">
      <PageHero site="nabat" eyebrow={page.eyebrow} title={page.title} lead={page.lead} image={page.image} imageAlt={page.imageAlt} />
      <section className="admissions-journey section-padding"><div className="container-shell admissions-journey__heading" data-reveal><Eyebrow>How it begins</Eyebrow><h2>A simple first step.<br /><em>A considered journey.</em></h2><p>The sequence below is an enquiry overview, not a confirmed admission policy. Requirements, dates and decisions will be shared by the institution.</p></div><div className="container-shell admissions-steps">{steps.map((step) => <article className="admissions-step" key={step.number} data-reveal><span>{step.number}</span><div><h3>{step.title}</h3><p>{step.text}</p></div><ArrowRight aria-hidden="true" size={18} /></article>)}</div></section>
      <section className="admissions-form-section section-padding"><div className="container-shell admissions-form-section__grid"><div className="admissions-form-section__intro" data-reveal><Eyebrow>Start an enquiry</Eyebrow><h2>Tell us a little<br /><em>about your family.</em></h2><p>Sharing this information helps prepare a first conversation. Live form delivery is not yet connected.</p><span className="admissions-form-section__note">Ages approximately 3–7<br />Official eligibility: [ADD OFFICIAL INFORMATION]</span></div><div className="admissions-form-section__form" data-reveal><EnquiryForm mode="admissions" /></div></div></section>
      <section className="admissions-bottom section-padding"><div className="container-shell admissions-bottom__inner" data-reveal><span>Have a question first?</span><Link href="/nabat/contact">Contact Nabat <MoveUpRight aria-hidden="true" size={15} /></Link></div></section>
    </main>
  )
}
