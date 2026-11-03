import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ArrowUpRight, Leaf } from "lucide-react"
import { images } from "@/lib/site-data"
import { SiteButton, ArrowLink, CopyText, Eyebrow, ImageReveal } from "@/components/site/site-primitives"

export function UmmHomePage() {
  return (
    <main className="umm-home">
      <section className="umm-hero" aria-labelledby="umm-hero-title">
        <div className="umm-hero__copy container-shell" data-hero-copy>
          <Eyebrow>Markaz Umm al-Hakam · Islamic Education</Eyebrow>
          <h1 id="umm-hero-title"><span className="hero-line" data-hero-line>Rooted in <em>Revelation.</em></span><span className="hero-line" data-hero-line>Growing in <em>Knowledge.</em></span></h1>
          <p><CopyText text="An Islamic educational institution grounded in the Qur'an, Sunnah and the understanding of the Sahabah رضي الله عنهم." /></p>
          <div className="hero-actions">
            <SiteButton href="/programmes">Explore Programmes</SiteButton>
            <Link className="text-link" href="/about">Our Story <ArrowUpRight aria-hidden="true" size={15} /></Link>
          </div>
        </div>
        <div className="umm-hero__visual" data-hero-image>
          <Image src={images.ummLibrary} alt="A sunlit Islamic study library with book-lined arches and a long wooden reading table." fill priority sizes="(max-width: 800px) 100vw, 52vw" />
          <div className="umm-hero__visual-wash" />
        </div>
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
          <div className="umm-intro__body" data-reveal>
            <p>Umm al-Hakam builds sound knowledge, understanding and character rooted in revelation.</p>
            <ArrowLink href="/about">Learn about us</ArrowLink>
          </div>
        </div>
      </section>

      <section className="learning-sequence section-padding">
        <div className="container-shell learning-sequence__header" data-reveal>
          <Eyebrow>Our educational philosophy</Eyebrow>
          <h2>Knowledge becomes <em>character.</em></h2>
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
        </div>
        <article className="nabat-feature container-shell" data-reveal>
          <div className="nabat-feature__visual">
            <ImageReveal src={images.nabatLearning} alt="Children working together with books and natural materials in a calm learning house." className="nabat-feature__image" sizes="(max-width: 760px) 100vw, 52vw" />
          </div>
          <div className="nabat-feature__copy">
            <span className="nabat-feature__overline"><Leaf aria-hidden="true" size={16} /> Early years · Ages 3–7</span>
            <h3>NABAT<br /><em>Learning House</em></h3>
            <p>A thoughtful beginning in knowledge and character for children ages 3–7.</p>
            <SiteButton href="/nabat" variant="outline">Explore Nabat</SiteButton>
            <span className="nabat-feature__arabic" aria-hidden="true">نَبَات</span>
          </div>
        </article>

        <div className="container-shell programme-list">
          <Link className="programme-row programme-row--quran" href="/programmes#quran" id="quran" data-reveal>
            <span className="programme-row__index">02 / RECITATION</span><h3>Qur&apos;an Reading<br />&amp; Hifz</h3><p>A lasting relationship with the Qur&apos;an.</p><ArrowUpRight aria-hidden="true" className="programme-row__arrow" size={16} />
          </Link>
          <Link className="programme-row programme-row--women" href="/programmes#women" id="women" data-reveal>
            <span className="programme-row__index">03 / WOMEN</span><h3>Women&apos;s<br />Programme</h3><p>A serious path into Islamic learning.</p><ArrowUpRight aria-hidden="true" className="programme-row__arrow" size={16} />
          </Link>
          <Link className="programme-row programme-row--weekend" href="/programmes#weekend" id="weekend" data-reveal>
            <span className="programme-row__index">04 / WEEKEND</span><h3>Weekend<br />Programme</h3><p>Study circles that connect learners to ilm.</p><ArrowUpRight aria-hidden="true" className="programme-row__arrow" size={16} />
          </Link>
          <Link className="programme-row programme-row--seasonal" href="/programmes#seasonal" id="seasonal" data-reveal>
            <span className="programme-row__index">05 / SEASONAL</span><h3>Seasonal &amp;<br />Ramadan</h3><p>Seasonal learning for children and adults.</p><ArrowUpRight aria-hidden="true" className="programme-row__arrow" size={16} />
          </Link>
        </div>
      </section>

      <section className="supervision-feature section-padding">
        <div className="container-shell supervision-feature__grid">
          <figure className="supervision-feature__visual" data-reveal>
            <ImageReveal src={images.ummLibrary} alt="An arched library interior with books arranged for focused study." className="supervision-feature__image" />
            <figcaption className="image-caption">Oversight that keeps the learner in view.</figcaption>
          </figure>
          <div className="supervision-feature__copy" data-reveal>
            <Eyebrow>Academic &amp; religious supervision</Eyebrow>
            <h2>Care in the details.<br /><em>Clarity in the direction.</em></h2>
            <p>Academic and religious oversight keeps curriculum, teaching and the learner in view.</p>
            <ArrowLink href="/supervision">Explore supervision</ArrowLink>
          </div>
        </div>
      </section>

      <section className="journey-cta section-padding">
        <div className="container-shell journey-cta__inner" data-reveal>
          <div><Eyebrow>Begin with a conversation</Eyebrow><h2>Questions?<br /><em>We are listening.</em></h2></div>
          <div className="journey-cta__aside"><p>Ask about programmes or learning at Umm al-Hakam.</p><SiteButton href="/contact">Get in touch</SiteButton></div>
          <span className="journey-cta__ornament" aria-hidden="true">ا</span>
        </div>
      </section>
    </main>
  )
}
