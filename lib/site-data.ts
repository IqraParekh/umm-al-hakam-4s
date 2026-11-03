export type SiteKey = "umm" | "nabat"

export type PageKind =
  | "story"
  | "supervision"
  | "team"
  | "programmes"
  | "downloads"
  | "contact"
  | "curriculum"
  | "islamic-curriculum"
  | "approach"
  | "ages"
  | "prospectus"
  | "admissions"

export type PageSection = {
  eyebrow?: string
  title: string
  body: string
  points?: string[]
  layout?: "columns" | "wide" | "list"
}

export type SitePageData = {
  path: string
  site: SiteKey
  kind: PageKind
  eyebrow: string
  title: string
  description: string
  lead: string
  image: string
  imageAlt: string
  quote?: string
  sections: PageSection[]
}

export const images = {
  ummLogo: "/images/umm-logo.png",
  nabatLogo: "/images/nabat-logo.png",
  ummLibrary: "/images/umm-library.png",
  ummStudy: "/images/umm-study.png",
  nabatLearning: "/images/nabat-learning.png",
  nabatHands: "/images/nabat-hands.png",
} as const

export const nabatFacts = [
  { label: "Ages", value: "3–7" },
  { label: "Days", value: "Mon–Fri" },
  { label: "Timing", value: "9:00 am to 1:00 pm" },
  { label: "Starting", value: "December 2026", note: "inshaAllah" },
]

export const nabatContact = {
  address: "PECHS Block 4, Karachi",
  phone: "+92 325 2793144",
  whatsappHref: "https://wa.me/923252793144",
  email: "markazummalhakam@gmail.com",
  emailHref: "mailto:markazummalhakam@gmail.com",
  prospectus: "Prospectus 2026–27",
}

export const ummNavigation = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Supervision", href: "/supervision" },
  { label: "Team", href: "/team" },
  { label: "Programmes", href: "/programmes" },
  { label: "Downloads", href: "/downloads" },
  { label: "Contact Us", href: "/contact" },
]

export const nabatNavigation = [
  { label: "Home", href: "/nabat" },
  { label: "About Nabat", href: "/nabat/about" },
  { label: "Curriculum", href: "/nabat/curriculum" },
  { label: "Islamic Curriculum", href: "/nabat/islamic-curriculum" },
  { label: "How We Teach", href: "/nabat/how-we-teach" },
  { label: "Who We Teach", href: "/nabat/who-we-teach" },
  { label: "Prospectus", href: "/nabat/prospectus" },
  { label: "Admissions", href: "/nabat/admissions" },
  { label: "Contact", href: "/nabat/contact" },
]

export const ummProgrammeLinks = [
  { label: "Nabat Learning House", href: "/nabat", detail: "Early years · Ages 3–7" },
  { label: "Qur'an Reading & Hifz", href: "/programmes#quran", detail: "Reading, recitation and memorisation" },
  { label: "Women's Programme", href: "/programmes#women", detail: "A space for women to learn" },
  { label: "Weekend Programme", href: "/programmes#weekend", detail: "Learning beyond the weekday" },
  { label: "Seasonal & Ramadan", href: "/programmes#seasonal", detail: "Focused seasonal learning" },
]

export const ummFoundations = [
  { number: "01", title: "Qur'an", text: "Revelation is the foundation from which learning begins and to which it returns." },
  { number: "02", title: "Sunnah", text: "The Prophetic way gives knowledge its living form and teaches us how to carry it." },
  { number: "03", title: "The Sahabah", text: "We look to the understanding and example of the Companions رضي الله عنهم." },
  { number: "04", title: "Character", text: "Learning is made visible in adab, responsibility, sincerity and care." },
]

export const ummApproachSteps = [
  { number: "01", title: "Sound sources", text: "Learning begins with the Qur'an, the authentic Sunnah and reliable teaching materials." },
  { number: "02", title: "Understanding", text: "Ideas are explained with care, context and age-appropriate clarity—not memorised without meaning." },
  { number: "03", title: "Practice", text: "Students are supported to connect what they learn with worship, daily choices and lived experience." },
  { number: "04", title: "Gentle discipline", text: "Clear expectations and consistent care create a setting where learning can take root." },
  { number: "05", title: "No undue pressure", text: "Progress matters, but it is approached with patience, dignity and attention to individual readiness." },
  { number: "06", title: "Teachers as role models", text: "The manner of teaching matters. Knowledge is carried through example as well as instruction." },
]

export const nabatApproachSteps = [
  { number: "01", title: "Sound sources", text: "The Qur’an, Sunnah and trusted materials provide a foundation." },
  { number: "02", title: "Understanding", text: "Conversation, stories and practice make ideas clear." },
  { number: "03", title: "Practice", text: "Meaningful routines help children revisit ideas." },
  { number: "04", title: "Gentle discipline", text: "Warm relationships and clear boundaries support learning." },
  { number: "05", title: "No undue pressure", text: "Each child grows at an individual pace." },
  { number: "06", title: "Teachers as role models", text: "Adults model curiosity, patience, adab and care." },
]

export const nabatCurriculum = [
  {
    id: "english",
    label: "English",
    note: "Language, literacy & expression",
    description: "A rich beginning in spoken language, systematic phonics and the foundations of reading and writing.",
    topics: ["Systematic phonics", "First Language Lessons", "Writing With Ease", "Listening, speaking and story"],
  },
  {
    id: "mathematics",
    label: "Mathematics",
    note: "Number sense & reasoning",
    description: "Early mathematical thinking is built through concrete experiences, deliberate practice and clear progression.",
    topics: ["Singapore Mathematics", "Dimensions Math", "IXL", "Number, pattern and problem-solving"],
  },
  {
    id: "science",
    label: "Science",
    note: "Observation & discovery",
    description: "Children are invited to notice, wonder, compare and describe the world around them through hands-on exploration.",
    topics: ["Hands-on exploration", "Observation", "Simple experiments", "Questions about the natural world"],
  },
  {
    id: "languages",
    label: "Languages",
    note: "Arabic & Urdu",
    description: "Arabic and Urdu are introduced as living languages through listening, vocabulary, conversation and guided practice.",
    topics: ["Arabic foundations", "Urdu foundations", "Listening and speaking", "Vocabulary in context"],
  },
  {
    id: "geography",
    label: "Geography",
    note: "Place, people & connection",
    description: "Geography opens a child's view of places, environments and the wider Muslim world with curiosity and care.",
    topics: ["Geography of the Islamic world", "Maps and place", "People and environments", "Care for the created world"],
  },
  {
    id: "creative",
    label: "Creative development",
    note: "Making, movement & senses",
    description: "Purposeful creative work gives children room to make, move, explore materials and develop coordination.",
    topics: ["Art and making", "Fine and gross motor skills", "Sensory play", "Imagination and expression"],
  },
]

export const nabatIslamicCurriculum = [
  { number: "01", title: "Quran", text: "A respectful, age-conscious introduction to the words of Allah through listening, recitation and guided learning." },
  { number: "02", title: "Hadith", text: "Selected Prophetic teachings are introduced with care, helping children notice good manners and meaningful actions." },
  { number: "03", title: "People of knowledge", text: "Children encounter the Sahabah رضي الله عنهم, the Tabi'in, the Four Imams, Imam al-Bukhari, Ibn Taymiyyah, Ibn al-Qayyim and Ibn Kathir." },
  { number: "04", title: "Mutun", text: "Short foundational texts are approached with suitable explanation, repetition and attention to understanding." },
  { number: "05", title: "Duas & Adhkar", text: "Everyday supplications and remembrances are learned as meaningful parts of a Muslim child's day." },
  { number: "06", title: "Akhlaq & Adab", text: "Good character and gracious conduct are woven into learning, relationships and shared routines." },
  { number: "07", title: "Islamic history", text: "Carefully framed stories introduce people, places and turning points in the history of Islam." },
  { number: "08", title: "Seerah scrapbook", text: "A hands-on record of learning helps children revisit key moments from the life of the Prophet ﷺ." },
]

export const ageStages = [
  { age: "3", title: "A gentle beginning", text: "Belonging, language and familiar routines." },
  { age: "4", title: "Curiosity takes shape", text: "Stories, early number and purposeful play." },
  { age: "5", title: "Ideas connect", text: "Revisiting ideas and making new links." },
  { age: "6", title: "Foundations deepen", text: "More deliberate practice with growing independence." },
  { age: "7", title: "Ready for what follows", text: "Strong foundations for the next step." },
]

export const dayJourney = [
  { time: "Arrive", title: "A warm welcome", text: "Settle in, greet one another and become ready for the day." },
  { time: "Learn", title: "Focused learning", text: "Meet a new idea through conversation, explanation and guided practice." },
  { time: "Quran", title: "Listen and recite", text: "Make space for Quran learning in a calm, respectful rhythm." },
  { time: "Explore", title: "Academic discovery", text: "Work with language, number, science or geography through age-appropriate materials." },
  { time: "Make", title: "Hands-on activity", text: "Use materials, movement and creativity to explore an idea in another way." },
  { time: "Reflect", title: "Close with care", text: "Gather, remember what was learned and prepare to carry it home." },
]

export const resources = [
  {
    id: "umm-prospectus",
    title: "Umm al-Hakam Prospectus",
    type: "Institutional overview",
    description: "An introduction to the institution, its foundations, learning approach and programmes.",
    href: "/about",
    accent: "plum",
    available: false,
  },
  {
    id: "nabat-prospectus",
    title: "Nabat Prospectus",
    type: "Early-years guide",
    description: "The Nabat journey: philosophy, academic learning, Islamic foundations and admissions.",
    href: "/nabat/prospectus",
    accent: "blue",
    available: false,
  },
  {
    id: "nabat-admissions",
    title: "Nabat Admission Information",
    type: "Admissions guide",
    description: "A clear overview of the enquiry and application journey for families considering Nabat.",
    href: "/nabat/admissions",
    accent: "gold",
    available: false,
  },
]

export const sitePages: SitePageData[] = [
  {
    path: "/about", site: "umm", kind: "story", eyebrow: "The institution", title: "Who We Are",
    description: "Discover the story, vision, mission and educational foundations of Markaz Umm al-Hakam.",
    lead: "Rooted in the Qur’an and Sunnah, with knowledge carried into character.",
    image: images.ummStudy, imageAlt: "A quiet reading space with books and a wooden Qur'an stand in warm afternoon light.",
    sections: [
      { eyebrow: "Our story", title: "A place for learning that lasts", body: "Markaz Umm al-Hakam is rooted in the Qur'an, Sunnah and the understanding of the Sahabah رضي الله عنهم.", layout: "wide" },
      { eyebrow: "Vision & mission", title: "Knowledge for generations", body: "We teach sound knowledge with care, so it can grow into understanding, practice and character." },
      { eyebrow: "Our foundations", title: "Four anchors", body: "Qur'an. Sunnah. The Sahabah. Character.", points: ["Qur'an", "Sunnah", "Sahabah", "Character"], layout: "list" },
      { eyebrow: "Educational philosophy", title: "Knowledge becomes lived", body: "Education is a connected path from revelation to daily conduct." },
      { eyebrow: "Future vision", title: "Building with care", body: "We aim to grow our programmes while remaining rooted in sound sources and thoughtful teaching." },
    ],
  },
  {
    path: "/supervision", site: "umm", kind: "supervision", eyebrow: "Careful oversight", title: "Supervision",
    description: "A concise look at the academic and religious oversight that guides learning at Markaz Umm al-Hakam.",
    lead: "Curriculum. Teaching. Teachers. Quality.",
    image: images.ummLibrary, imageAlt: "A sunlit library designed for focused study, with book-lined arches and a long reading table.",
    sections: [
      { eyebrow: "Curriculum", title: "A clear learning path", body: "Qur’an and Sunnah sources, sequence and learning goals are reviewed together." },
      { eyebrow: "Teaching", title: "Thoughtful classroom practice", body: "Sound methodology and clear standards guide age-aware teaching." },
      { eyebrow: "Teachers", title: "Knowledge carried by example", body: "Selection and development attend to knowledge, conduct and care." },
      { eyebrow: "Quality", title: "Careful oversight", body: "Review and reflection support consistency and improvement." },
    ],
  },
  {
    path: "/team", site: "umm", kind: "team", eyebrow: "The people behind the work", title: "Our Team",
    description: "Meet the leadership, supervision, programme and administration teams at Markaz Umm al-Hakam.",
    lead: "Official profiles will be shared once confirmed.",
    image: images.ummStudy, imageAlt: "Books arranged in a quiet study space, ready for learning.",
    sections: [],
  },
  {
    path: "/programmes", site: "umm", kind: "programmes", eyebrow: "Learning across generations", title: "Our Programmes",
    description: "Explore learning pathways at Markaz Umm al-Hakam, including Nabat Learning House, Qur'an study and seasonal programmes.",
    lead: "Distinct pathways. Shared foundations.",
    image: images.nabatLearning, imageAlt: "Young children exploring books and natural materials around a classroom table.",
    sections: [],
  },
  {
    path: "/downloads", site: "umm", kind: "downloads", eyebrow: "Read, explore, keep", title: "Downloads",
    description: "A resource library for Umm al-Hakam and Nabat prospectuses and admissions information.",
    lead: "Approved prospectuses and family information.",
    image: images.ummLibrary, imageAlt: "Books on a long table in an inviting study library.",
    sections: [],
  },
  {
    path: "/contact", site: "umm", kind: "contact", eyebrow: "Start a conversation", title: "Contact Us",
    description: "Send an enquiry to Markaz Umm al-Hakam or find the institution’s official contact details.",
    lead: "For programme and institutional enquiries.",
    image: images.ummLibrary, imageAlt: "A welcoming study space at the heart of an educational institution.",
    sections: [],
  },
  {
    path: "/nabat/about", site: "nabat", kind: "story", eyebrow: "A project of Markaz Umm al-Hakam", title: "What Is Nabat?",
    description: "Learn about Nabat Learning House, an early-years educational project for children approximately ages 3–7.",
    lead: "An early-years learning house for children ages 3–7.",
    image: images.nabatLearning, imageAlt: "Children exploring books and natural materials in a calm, light-filled classroom.",
    sections: [
      { eyebrow: "Why Nabat", title: "A gentle beginning", body: "Sound learning, small groups and personal attention help each child learn at their own depth.", layout: "wide" },
      { eyebrow: "Vision", title: "Rooted in revelation", body: "Growing in knowledge, faith and character." },
      { eyebrow: "Mission", title: "Every child known", body: "Learning is shaped around the child, never hurried or compared." },
      { eyebrow: "Educational philosophy", title: "Knowledge becomes character", body: "Children learn through sound sources, understanding and practice." },
      { eyebrow: "Within Umm al-Hakam", title: "A project with a shared foundation", body: "Nabat has an early-years identity within Markaz Umm al-Hakam." },
    ],
  },
  {
    path: "/nabat/curriculum", site: "nabat", kind: "curriculum", eyebrow: "Academic learning", title: "The Curriculum",
    description: "Explore Nabat’s early-years learning areas: English, mathematics, science, Arabic, Urdu, geography and creative development.",
    lead: "Language, number, science and creative learning.",
    image: images.nabatHands, imageAlt: "Small hands arranging leaves and wooden shapes during a calm learning activity.",
    sections: [],
  },
  {
    path: "/nabat/islamic-curriculum", site: "nabat", kind: "islamic-curriculum", eyebrow: "Faith & foundations", title: "Islamic Curriculum",
    description: "Explore the Islamic learning foundations at Nabat: Quran, Hadith, people of knowledge, mutun, duas, adab, Islamic history and Seerah.",
    lead: "Qur’an, Hadith, adab and Islamic history—introduced with care.",
    image: images.ummStudy, imageAlt: "A book stand and carefully arranged study materials in a calm, sunlit reading space.",
    sections: [],
  },
  {
    path: "/nabat/how-we-teach", site: "nabat", kind: "approach", eyebrow: "Gentle, purposeful learning", title: "How We Teach",
    description: "Six teaching principles shape the Nabat learning experience, from sound sources and understanding to gentleness and role modelling.",
    lead: "Sound sources. Understanding. Practice.",
    image: images.nabatLearning, imageAlt: "Children learning together in a calm early-years classroom.",
    sections: [],
  },
  {
    path: "/nabat/who-we-teach", site: "nabat", kind: "ages", eyebrow: "Ages approximately 3–7", title: "Who We Teach",
    description: "Explore an age-based view of the Nabat learning journey from age three to seven, without assigning unconfirmed class names.",
    lead: "Ages 3–7. Small groups and personal attention.",
    image: images.nabatHands, imageAlt: "A child’s hands exploring natural learning materials at a low table.",
    sections: [],
  },
  {
    path: "/nabat/prospectus", site: "nabat", kind: "prospectus", eyebrow: "A closer look", title: "The Nabat Prospectus",
    description: "Explore Nabat’s philosophy, academic and Islamic curriculum, teaching approach, age journey and admissions.",
    lead: "A concise guide to Nabat’s learning journey.",
    image: images.nabatLearning, imageAlt: "A sunlit early-years learning space with children gathered around a table.",
    sections: [
      { eyebrow: "What is Nabat?", title: "An early-years project with a clear purpose", body: "Nabat Learning House is the early-years educational project of Markaz Umm al-Hakam for children approximately ages 3–7." },
      { eyebrow: "Philosophy", title: "Learning that grows inward and outward", body: "Knowledge, understanding, practice and character form a connected educational journey." },
      { eyebrow: "Academic & Islamic learning", title: "A broad, rooted foundation", body: "The curriculum brings together English, mathematics, science, Arabic, Urdu, geography, creative development and Islamic learning." },
      { eyebrow: "How we teach", title: "A gentle, purposeful approach", body: "Sound sources, understanding, practice, gentle discipline, no undue pressure and teachers as role models shape the learning experience." },
    ],
  },
  {
    path: "/nabat/admissions", site: "nabat", kind: "admissions", eyebrow: "An invitation to begin", title: "Admissions",
    description: "Explore the Nabat admissions journey and send an enquiry for a child approximately ages 3–7.",
    lead: "Start with a question. We would be honoured to help.",
    image: images.nabatLearning, imageAlt: "A welcoming early-years classroom prepared for hands-on learning.",
    sections: [],
  },
  {
    path: "/nabat/contact", site: "nabat", kind: "contact", eyebrow: "We would love to hear from you", title: "Contact Nabat",
    description: "Contact Nabat Learning House with a question about the early-years project, curriculum or admissions.",
    lead: "PECHS Block 4, Karachi. Call or message us on WhatsApp.",
    image: images.nabatLearning, imageAlt: "A calm classroom prepared for children to explore and learn.",
    sections: [],
  },
]

export const routeMetadata = [
  { path: "/", site: "umm" as const, title: "Markaz Umm al-Hakam", description: "An Islamic educational institution grounded in the Qur'an, Sunnah and the understanding of the Sahabah رضي الله عنهم." },
  { path: "/nabat", site: "nabat" as const, title: "Nabat Learning House", description: "A gentle beginning in knowledge, faith, curiosity and character for children approximately ages 3–7." },
  ...sitePages.map(({ path, site, title, description }) => ({ path, site, title, description })),
]
