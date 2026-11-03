import Image from "next/image"
import { ArrowDown, ArrowRight, BookOpen, Flower2 } from "lucide-react"
import { images, nabatIslamicCurriculum } from "@/lib/site-data"
import { ArrowLink, Eyebrow, ImageReveal, SiteButton } from "@/components/site/site-primitives"

export function NabatHomePage() {
  return (
    <main className="nabat-home">
      <section className="nabat-hero" aria-labelledby="nabat-hero-title">
        <div className="nabat-hero__copy container-shell" data-hero-copy>
          <span className="nabat-hero__sprout" aria-hidden="true"><i /><i /><i /></span>
          <Eyebrow>A project of Markaz Umm al-Hakam · Ages 3–7</Eyebrow>
          <h1 id="nabat-hero-title"><span className="hero-line" data-hero-line>Where little</span><em className="hero-line" data-hero-line>hearts begin</em><span className="hero-line" data-hero-line>to learn.</span></h1>
          <p>A gentle beginning in knowledge, faith, curiosity and character.</p>
          <div className="hero-actions">
            <SiteButton href="/nabat/about" variant="primary">Explore Nabat</SiteButton>
          </div>
        </div>
        <div className="nabat-hero__visual" data-hero-image>
          <Image src={images.nabatLearning} alt="Young children exploring books and natural materials together in a sunlit classroom." fill priority sizes="(max-width: 780px) 100vw, 52vw" />
          <div className="nabat-hero__visual-wash" />
        </div>
        <a className="scroll-cue scroll-cue--nabat" data-hero-scroll href="#what-is-nabat"><span>Follow the journey</span><ArrowDown aria-hidden="true" size={14} /></a>
      </section>


      <section className="nabat-intro section-padding" id="what-is-nabat">
        <div className="container-shell nabat-intro__grid">
          <div className="nabat-intro__copy" data-reveal>
            <Eyebrow>What is Nabat?</Eyebrow>
            <h2>Every child<br /><em>known.</em></h2>
            <p>Ages 3–7. Small groups and personal attention, so each child can learn at their own depth.</p>
            <ArrowLink href="/nabat/about">About Nabat</ArrowLink>
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
          <Eyebrow>Our way of learning</Eyebrow>
          <h2>Knowledge.<br /><em>Understanding.</em></h2>
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
          <div><Eyebrow>Academic foundations</Eyebrow><h2>Many ways<br /><em>to discover.</em></h2></div>
          <p>Language, number, nature and making.</p>
        </div>
        <div className="container-shell nabat-learning-preview">
          {[
            { label: "Language", detail: "English · Arabic · Urdu" },
            { label: "Mathematics", detail: "Singapore Mathematics" },
            { label: "Science", detail: "Explore · Observe · Experiment" },
            { label: "Creative", detail: "Art · Sensory · Motor skills" },
          ].map((area, index) => (
            <article className="nabat-learning-preview__item" key={area.label} data-reveal>
              <span>0{index + 1}</span><h3>{area.label}</h3><p>{area.detail}</p>
            </article>
          ))}
        </div>
        <div className="container-shell nabat-curriculum__foot"><ArrowLink href="/nabat/curriculum">View full curriculum</ArrowLink></div>
      </section>

      <section className="islamic-foundations section-padding">
        <div className="container-shell islamic-foundations__header" data-reveal>
          <div><Eyebrow>Islamic foundation</Eyebrow><h2>Faith, knowledge<br />and <em>good adab.</em></h2></div>
          <p>Quran and authentic Sunnah, introduced with care for source and age.</p>
        </div>
        <div className="container-shell islamic-foundations__layout">
          <div className="islamic-foundations__visual" data-reveal>
            <ImageReveal src={images.ummStudy} alt="A quiet book and reading stand in a contemplative place of study." className="islamic-foundations__image" />
            <div className="islamic-foundations__visual-caption"><span>Rooted in revelation</span><BookOpen aria-hidden="true" size={18} /></div>
          </div>
          <div className="islamic-foundations__list">
            {nabatIslamicCurriculum.slice(0, 6).map((item) => (
              <article className="islamic-foundations__item" key={item.number} data-reveal>
                <span>{item.number}</span><h3>{item.title}</h3>
              </article>
            ))}
            <ArrowLink href="/nabat/islamic-curriculum">Explore the Islamic curriculum</ArrowLink>
          </div>
        </div>
      </section>


      <section className="nabat-admissions-cta section-padding">
        <div className="container-shell nabat-admissions-cta__inner" data-reveal>
          <div><Eyebrow>A gentle next step</Eyebrow><h2>We would be honoured<br /><em>to be part of your child&apos;s journey.</em></h2></div>
          <div className="nabat-admissions-cta__action"><SiteButton href="/nabat/admissions" variant="primary">Explore admissions</SiteButton></div>
          <Flower2 aria-hidden="true" className="nabat-admissions-cta__flower" size={188} strokeWidth={0.6} />
        </div>
      </section>
    </main>
  )
}
