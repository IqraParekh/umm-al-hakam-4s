import Image from "next/image"
import Link from "next/link"
import { ArrowDown, ArrowRight, ArrowUpRight, BookOpen, Compass, Feather, GraduationCap, Leaf, MoveUpRight } from "lucide-react"
import { images, ummApproachSteps, ummFoundations } from "@/lib/site-data"
import { SiteButton, ArrowLink, CopyText, Eyebrow, ImageReveal, SectionHeading } from "@/components/site/site-primitives"
import { StickyPrinciples } from "@/components/site/sticky-principles"
import { ResourceCards } from "@/components/site/resource-cards"

export function UmmHomePage() {
  return (
    <main className="umm-home">
      <section className="umm-hero" aria-labelledby="umm-hero-title">
        <div className="umm-hero__copy container-shell" data-hero-copy>
          <Eyebrow>Markaz Umm al-Hakam · Islamic Education</Eyebrow>
          <h1 id="umm-hero-title"><span className="hero-line" data-hero-line>Rooted in <em>Revelation.</em></span><span className="hero-line" data-hero-line>Built for <em>Generations.</em></span></h1>
          <p><CopyText text="An Islamic educational institution grounded in the Qur'an, Sunnah, and the understanding of the Sahabah رضي الله عنهم — cultivating knowledge, understanding, practice and character across generations." /></p>
          <div className="hero-actions">
            <SiteButton href="/programmes">Explore Programmes</SiteButton>
            <Link className="text-link" href="/about">Our Story <ArrowUpRight aria-hidden="true" size={15} /></Link>
          </div>
          <div className="umm-hero__footnote"><span>Knowledge / Understanding / Practice / Character</span><span>01 — 06</span></div>
        </div>
        <div className="umm-hero__visual" data-hero-image>
          <Image src={images.ummLibrary} alt="A sunlit Islamic study library with book-lined arches and a long wooden reading table." fill priority sizes="(max-width: 800px) 100vw, 52vw" />
          <div className="umm-hero__visual-wash" />
          <div className="umm-hero__floating-note"><span className="umm-hero__note-mark">أ</span><span>Rooted in<br />sound sources</span></div>
          <span className="umm-hero__image-caption">A place for learning that lasts</span>
        </div>
        <a className="scroll-cue" data-hero-scroll href="#introduction"><span>Scroll to explore</span><ArrowDown aria-hidden="true" size={14} /></a>
      </section>

      <section className="umm-intro section-padding" id="introduction">
        <div className="container-shell umm-intro__grid">
          <div className="umm-intro__statement" data-reveal>
            <Eyebrow>Beyond information</Eyebrow>
            <h2>Education is more than what we teach. <em>It is what we cultivate.</em></h2>
            <span className="decorative-rule" data-line-reveal aria-hidden="true" />
          </div>
          <figure className="umm-intro__image-wrap" data-reveal>
            <ImageReveal src={images.ummStudy} alt="Books and a wooden Qur'an stand in a quiet, warm study space." className="umm-intro__image" data-parallax />
            <figcaption className="image-caption">A learning tradition carried forward with care.</figcaption>
          </figure>
          <p className="umm-intro__body" data-reveal>At Umm al-Hakam, learning is a connected journey. Knowledge is received from sound sources, explored with understanding, put into practice and reflected in character. Our work spans generations while remaining attentive to the needs of each learner and stage of life.</p>
        </div>
      </section>

      <section className="foundations-story section-padding" data-horizontal-story>
        <div className="container-shell foundations-story__heading" data-reveal>
          <div><Eyebrow>Our foundations</Eyebrow><h2>Four anchors.<br /><em>One direction.</em></h2></div>
          <p>These foundations shape what we teach, how we teach and the kind of learning we hope to nurture.</p>
        </div>
        <div className="foundations-story__window">
          <div className="foundations-story__track" data-horizontal-track>
            {ummFoundations.map((foundation, index) => {
              const Icon = [BookOpen, Compass, Feather, GraduationCap][index]
              return (
                <article className="foundation-item" key={foundation.number}>
                  <div className="foundation-item__top"><span>{foundation.number}</span><Icon aria-hidden="true" size={24} strokeWidth={1.35} /></div>
                  <span className="foundation-item__line" data-line-reveal aria-hidden="true" />
                  <h3>{foundation.title}</h3>
                  <p>{foundation.text}</p>
                </article>
              )
            })}
          </div>
        </div>
        <div className="container-shell foundations-story__mobile-note"><span>01 — 04</span><p>Four connected foundations guide the learning journey.</p></div>
      </section>

      <section className="learning-sequence section-padding">
        <div className="container-shell learning-sequence__header" data-reveal>
          <Eyebrow>Our educational philosophy</Eyebrow>
          <h2>Learning that becomes <em>lived.</em></h2>
          <p>We hold education as a progression: each stage gives the next a deeper root.</p>
        </div>
        <div className="container-shell learning-sequence__flow">
          {["Knowledge", "Understanding", "Practice", "Character"].map((word, index) => (
            <div className="learning-sequence__step" key={word} data-reveal>
              <span className="learning-sequence__number">0{index + 1}</span>
              <h3>{word}</h3>
              {index < 3 && <ArrowRight className="learning-sequence__arrow" aria-hidden="true" size={24} strokeWidth={1.2} />}
            </div>
          ))}
        </div>
      </section>

      <section className="programme-showcase section-padding">
        <div className="container-shell programme-showcase__header" data-reveal>
          <div><Eyebrow>Programmes</Eyebrow><h2>One foundation.<br /><em>Many ways to learn.</em></h2></div>
          <ArrowLink href="/programmes">Explore all programmes</ArrowLink>
        </div>
        <article className="nabat-feature container-shell" data-reveal>
          <div className="nabat-feature__visual">
            <ImageReveal src={images.nabatLearning} alt="Children working together with books and natural materials in a calm learning house." className="nabat-feature__image" sizes="(max-width: 760px) 100vw, 52vw" />
            <span className="nabat-feature__image-label">Illustrative scene · A project of Markaz Umm al-Hakam</span>
          </div>
          <div className="nabat-feature__copy">
            <span className="nabat-feature__overline"><Leaf aria-hidden="true" size={16} /> Early years · Ages 3–7</span>
            <h3>NABAT<br /><em>Learning House</em></h3>
            <p>A gentle beginning in knowledge, faith, curiosity and character. Nabat is the early-years educational project of Markaz Umm al-Hakam, created with young learners in mind.</p>
            <SiteButton href="/nabat" variant="outline">Explore Nabat</SiteButton>
            <span className="nabat-feature__arabic" aria-hidden="true">نَبَات</span>
          </div>
        </article>

        <div className="container-shell programme-list">
          <article className="programme-row programme-row--quran" id="quran" data-reveal>
            <span className="programme-row__index">02 / RECITATION</span><h3>Qur&apos;an Reading<br />&amp; Hifz</h3><p>Developing fluency, recitation and memorisation through considered learning pathways. Programme details will be confirmed by the institution.</p><ArrowLink href="/contact">Enquire about this programme</ArrowLink>
          </article>
          <article className="programme-row programme-row--women" id="women" data-reveal>
            <span className="programme-row__index">03 / WOMEN</span><h3>Women&apos;s<br />Programme</h3><p>A welcoming space for women to deepen their learning and connect with beneficial knowledge. Specific subjects and schedules will be shared when confirmed.</p><ArrowLink href="/contact">Learn more</ArrowLink>
          </article>
          <article className="programme-row programme-row--weekend" id="weekend" data-reveal>
            <span className="programme-row__index">04 / WEEKEND</span><h3>Weekend<br />Programme</h3><p>Learning designed to sit alongside the rhythms of family and community life. Age groups, dates and availability are to be confirmed.</p><ArrowLink href="/contact">Ask a question</ArrowLink>
          </article>
          <article className="programme-row programme-row--seasonal" id="seasonal" data-reveal>
            <span className="programme-row__index">05 / SEASONAL</span><h3>Seasonal &amp;<br />Ramadan</h3><p>Focused learning for meaningful moments across the year, including Ramadan. Details will be published once programme plans are confirmed.</p><ArrowLink href="/contact">Stay informed</ArrowLink>
          </article>
        </div>
      </section>

      <section className="nabat-transition section-padding">
        <div className="nabat-transition__shape" aria-hidden="true" />
        <div className="container-shell nabat-transition__inner" data-reveal>
          <div className="nabat-transition__copy">
            <Eyebrow>A beginning of its own</Eyebrow>
            <h2>Where little hearts<br /><em>begin to learn.</em></h2>
            <p>Nabat brings a warm early-years identity to the shared foundations of Umm al-Hakam—thoughtful, curious and made with young learners in mind.</p>
            <SiteButton href="/nabat" variant="light">Discover Nabat</SiteButton>
          </div>
          <ImageReveal src={images.nabatHands} alt="Children's hands arranging leaves and wooden shapes on cream paper." className="nabat-transition__image" />
          <span className="nabat-transition__index" aria-hidden="true">N / 03</span>
        </div>
      </section>

      <StickyPrinciples site="umm" steps={ummApproachSteps} />

      <section className="supervision-feature section-padding">
        <div className="container-shell supervision-feature__grid">
          <figure className="supervision-feature__visual" data-reveal>
            <ImageReveal src={images.ummLibrary} alt="An arched library interior with books arranged for focused study." className="supervision-feature__image" />
            <figcaption className="image-caption">Oversight that keeps the learner in view.</figcaption>
          </figure>
          <div className="supervision-feature__copy" data-reveal>
            <Eyebrow>Academic &amp; religious supervision</Eyebrow>
            <h2>Care in the details.<br /><em>Clarity in the direction.</em></h2>
            <p>Curriculum oversight, teaching standards, Islamic methodology, teacher selection, academic development and quality assurance are part of a considered institutional framework.</p>
            <div className="supervision-feature__list">
              {["Curriculum oversight", "Teaching standards", "Islamic methodology", "Academic development"].map((item, index) => <span key={item}><b>0{index + 1}</b>{item}</span>)}
            </div>
            <ArrowLink href="/supervision">Explore supervision</ArrowLink>
          </div>
        </div>
      </section>

      <section className="quiet-quote section-padding" data-reveal>
        <div className="container-shell quiet-quote__inner">
          <span className="quiet-quote__mark" aria-hidden="true">“</span>
          <blockquote>Knowledge takes root when it is understood, practised, and carried into character.</blockquote>
          <p>THE LEARNING JOURNEY · UMM AL-HAKAM</p>
          <span className="quiet-quote__rule" data-line-reveal aria-hidden="true" />
        </div>
      </section>

      <section className="resource-section section-padding">
        <div className="container-shell resource-section__header" data-reveal>
          <div><Eyebrow>Resources</Eyebrow><h2>Read the <em>foundations.</em></h2><p>Introductions to the institution and its early-years project.</p></div>
          <ArrowLink href="/downloads">Visit the resource library</ArrowLink>
        </div>
        <div className="container-shell"><ResourceCards compact /></div>
      </section>

      <section className="journey-cta section-padding">
        <div className="container-shell journey-cta__inner" data-reveal>
          <div><Eyebrow>A thoughtful next step</Eyebrow><h2>Begin the journey<br /><em>of knowledge.</em></h2></div>
          <div className="journey-cta__aside"><p>Explore the programmes, learn about our approach or send a question to the institution.</p><SiteButton href="/contact">Get in touch</SiteButton><Link href="/team" className="text-link">Meet the team <MoveUpRight aria-hidden="true" size={15} /></Link></div>
          <span className="journey-cta__ornament" aria-hidden="true">ا</span>
        </div>
      </section>
    </main>
  )
}
