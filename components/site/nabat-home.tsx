import Image from "next/image"
import Link from "next/link"
import { ArrowDown, ArrowRight, ArrowUpRight, BookOpen, Flower2, HandHeart, Sparkles, Sprout } from "lucide-react"
import { ageStages, dayJourney, images, nabatApproachSteps, nabatCurriculum, nabatIslamicCurriculum } from "@/lib/site-data"
import { ArrowLink, CopyText, Eyebrow, ImageReveal, SectionHeading, SiteButton } from "@/components/site/site-primitives"
import { CurriculumExplorer } from "@/components/site/curriculum-explorer"
import { StickyPrinciples } from "@/components/site/sticky-principles"
import { NabatFactsBand } from "@/components/site/nabat-facts-band"

export function NabatHomePage() {
  return (
    <main className="nabat-home">
      <section className="nabat-hero" aria-labelledby="nabat-hero-title">
        <div className="nabat-hero__copy container-shell" data-hero-copy>
          <span className="nabat-hero__sprout" aria-hidden="true"><i /><i /><i /></span>
          <Eyebrow>Rooted in Revelation, Growing in Knowledge</Eyebrow>
          <h1 id="nabat-hero-title"><span className="hero-line" data-hero-line>Where little</span><em className="hero-line" data-hero-line>hearts begin</em><span className="hero-line" data-hero-line>to learn.</span></h1>
          <p>A gentle beginning in knowledge, faith, curiosity and character.</p>
          <div className="hero-actions">
            <SiteButton href="/nabat/about" variant="primary">Explore Nabat</SiteButton>
            <Link className="text-link" href="/nabat/prospectus">View prospectus <ArrowUpRight aria-hidden="true" size={15} /></Link>
          </div>
          <div className="nabat-hero__stamp"><span>Curious<br />minds,</span><span>rooted<br />hearts.</span></div>
        </div>
        <div className="nabat-hero__visual" data-hero-image>
          <Image src={images.nabatLearning} alt="Young children exploring books and natural materials together in a sunlit classroom." fill priority sizes="(max-width: 780px) 100vw, 52vw" />
          <div className="nabat-hero__visual-wash" />
          <span className="nabat-hero__image-note"><Sprout aria-hidden="true" size={15} /> Illustrative learning environment</span>
          <span className="nabat-hero__sun" aria-hidden="true" />
        </div>
        <a className="scroll-cue scroll-cue--nabat" data-hero-scroll href="#what-is-nabat"><span>Follow the journey</span><ArrowDown aria-hidden="true" size={14} /></a>
      </section>

      <NabatFactsBand />

      <section className="nabat-intro section-padding" id="what-is-nabat">
        <div className="container-shell nabat-intro__grid">
          <div className="nabat-intro__copy" data-reveal>
            <Eyebrow>What is Nabat?</Eyebrow>
            <h2>A small beginning<br /><em>with room to grow.</em></h2>
            <p>Nabat Learning House is the early-years educational project of Markaz Umm al-Hakam, designed for children approximately ages 3–7. It brings academic foundations, Islamic learning, purposeful exploration and a gentle approach to the beginning of a child&apos;s learning journey.</p>
            <ArrowLink href="/nabat/about">Get to know Nabat</ArrowLink>
          </div>
          <figure className="nabat-intro__visual" data-reveal>
            <ImageReveal src={images.nabatHands} alt="Young children arranging leaves and wooden forms as part of a hands-on activity." className="nabat-intro__image" data-parallax />
            <span className="nabat-intro__shape" aria-hidden="true" />
            <figcaption className="image-caption">Learning through noticing, making and asking.</figcaption>
          </figure>
          <span className="nabat-intro__margin-note" aria-hidden="true">3—7 / early years</span>
        </div>
      </section>

      <section className="nabat-philosophy section-padding">
        <div className="container-shell nabat-philosophy__heading" data-reveal>
          <Eyebrow>A connected journey</Eyebrow>
          <h2>Knowledge grows<br />into <em>character.</em></h2>
        </div>
        <div className="container-shell nabat-philosophy__flow">
          {["Knowledge", "Understanding", "Practice", "Character"].map((item, index) => (
            <div className="nabat-philosophy__step" key={item} data-reveal>
              <span className="nabat-philosophy__number">0{index + 1}</span>
              <span className="nabat-philosophy__dot" aria-hidden="true" />
              <h3>{item}</h3>
              {index < 3 && <ArrowRight className="nabat-philosophy__arrow" aria-hidden="true" size={20} strokeWidth={1.35} />}
            </div>
          ))}
        </div>
      </section>

      <section className="nabat-curriculum section-padding">
        <div className="container-shell nabat-curriculum__header" data-reveal>
          <div><Eyebrow>What children learn</Eyebrow><h2>Many doors<br /><em>into discovery.</em></h2></div>
          <p>Explore the learning areas and the materials named as part of the Nabat curriculum. The sequence is designed to be purposeful, connected and development-aware.</p>
        </div>
        <div className="container-shell"><CurriculumExplorer areas={nabatCurriculum} /></div>
        <div className="container-shell nabat-curriculum__foot"><ArrowLink href="/nabat/curriculum">Explore the full curriculum</ArrowLink></div>
      </section>

      <section className="islamic-foundations section-padding">
        <div className="container-shell islamic-foundations__header" data-reveal>
          <div><Eyebrow>Islamic foundation</Eyebrow><h2>Faith, knowledge<br />and <em>good adab.</em></h2></div>
          <p>Children are introduced to a rooted tradition with care for source, meaning and age—through stories, practice and the everyday rhythm of learning.</p>
        </div>
        <div className="container-shell islamic-foundations__layout">
          <div className="islamic-foundations__visual" data-reveal>
            <ImageReveal src={images.ummStudy} alt="A quiet book and reading stand in a contemplative place of study." className="islamic-foundations__image" />
            <div className="islamic-foundations__visual-caption"><span>Rooted in revelation</span><BookOpen aria-hidden="true" size={18} /></div>
          </div>
          <div className="islamic-foundations__list">
            {nabatIslamicCurriculum.slice(0, 6).map((item) => (
              <article className="islamic-foundations__item" key={item.number} data-reveal>
                <span>{item.number}</span><h3>{item.title}</h3><p><CopyText text={item.text} /></p>
              </article>
            ))}
            <ArrowLink href="/nabat/islamic-curriculum">Explore the Islamic curriculum</ArrowLink>
          </div>
        </div>
      </section>

      <StickyPrinciples site="nabat" steps={nabatApproachSteps} />

      <section className="age-journey section-padding">
        <div className="container-shell age-journey__header" data-reveal>
          <div><Eyebrow>Who we teach</Eyebrow><h2>A journey from <em>3 to 7.</em></h2></div>
          <p>Children are grouped by age and move through learning stations in small groups and one-to-one. The stages shown are a guide, not official class names or a fixed pathway.</p>
        </div>
        <div className="container-shell age-journey__track">
          <span className="age-journey__line" data-line-reveal aria-hidden="true" />
          {ageStages.map((stage) => (
            <article className="age-journey__stage" key={stage.age} data-reveal>
              <span className="age-journey__dot" aria-hidden="true" />
              <span className="age-journey__age">{stage.age}</span>
              <h3>{stage.title}</h3><p>{stage.text}</p>
            </article>
          ))}
        </div>
        <div className="container-shell age-journey__link"><ArrowLink href="/nabat/who-we-teach">Explore the age journey</ArrowLink></div>
      </section>

      <section className="nabat-why section-padding">
        <div className="container-shell nabat-why__intro" data-reveal>
          <Eyebrow>Rooted in Revelation, Growing in Knowledge</Eyebrow><h2>Every child<br /><em>is an amanah.</em></h2>
          <p>We write to families with care, sound sources and no pressure. We would be honoured to be part of your child&apos;s journey.</p>
        </div>
        <div className="container-shell nabat-why__list">
          {[
            { icon: Sparkles, title: "Strong academic foundations", text: "Language, mathematics and observation are approached with clarity and purposeful progression." },
            { icon: BookOpen, title: "Islamic foundations", text: "The Quran, Prophetic teachings and Islamic tradition are part of the learning story." },
            { icon: HandHeart, title: "Gentle learning", text: "Curiosity is welcomed and children are supported without undue pressure." },
            { icon: Flower2, title: "Character in the everyday", text: "Adab, relationships and teacher example are part of how a learning environment feels." },
          ].map(({ icon: Icon, title, text }, index) => (
            <article className="nabat-why__item" key={title} data-reveal>
              <span className="nabat-why__index">0{index + 1}</span><Icon aria-hidden="true" size={23} strokeWidth={1.4} /><div><h3>{title}</h3><p>{text}</p></div>
            </article>
          ))}
        </div>
      </section>

      <section className="day-journey section-padding">
        <div className="container-shell day-journey__header" data-reveal>
          <div><Eyebrow>A day of learning</Eyebrow><h2>A rhythm, not a timetable.</h2></div>
          <p>This is a conceptual learning journey, not the official timetable. Published learning hours are Mon–Fri, 9:00 am to 1:00 pm.</p>
        </div>
        <div className="container-shell day-journey__timeline">
          {dayJourney.map((moment, index) => (
            <article className="day-journey__moment" key={moment.time} data-reveal>
              <span className="day-journey__number">0{index + 1}</span><span className="day-journey__dot" aria-hidden="true" />
              <div><span className="day-journey__time">{moment.time}</span><h3>{moment.title}</h3><p>{moment.text}</p></div>
            </article>
          ))}
        </div>
      </section>

      <section className="nabat-prospectus-cta section-padding">
        <div className="container-shell nabat-prospectus-cta__inner" data-reveal>
          <div><Eyebrow>A little more to explore</Eyebrow><h2>See the Nabat journey<br /><em>in full.</em></h2><p>Read about the learning approach, curriculum, age journey and admissions.</p></div>
          <SiteButton href="/nabat/prospectus" variant="light">View the prospectus</SiteButton>
          <span className="nabat-prospectus-cta__mark" aria-hidden="true">ن</span>
        </div>
      </section>

      <section className="nabat-admissions-cta section-padding">
        <div className="container-shell nabat-admissions-cta__inner" data-reveal>
          <div><Eyebrow>For families</Eyebrow><h2>A gentle start.<br /><em>A meaningful journey.</em></h2><p>We would be honoured to be part of your child&apos;s journey. Ask us a question at your own pace.</p></div>
          <div className="nabat-admissions-cta__action"><a className="site-button site-button--primary" href="https://wa.me/923252793144" rel="noreferrer" target="_blank"><span>Message us on WhatsApp</span><ArrowUpRight aria-hidden="true" className="button-arrow" size={16} /></a><Link className="text-link" href="/nabat/admissions">Read admissions details <ArrowUpRight aria-hidden="true" size={15} /></Link></div>
          <Flower2 aria-hidden="true" className="nabat-admissions-cta__flower" size={188} strokeWidth={0.6} />
        </div>
      </section>
    </main>
  )
}
