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
  { number: "01", title: "Sound sources", text: "Children meet the Quran, Prophetic teachings and carefully chosen learning materials in a thoughtful sequence." },
  { number: "02", title: "Understanding", text: "New ideas are made concrete through conversation, demonstration, stories and purposeful repetition." },
  { number: "03", title: "Practice", text: "Children revisit ideas through guided activity, reflection and small, meaningful routines." },
  { number: "04", title: "Gentle discipline", text: "Warm relationships, predictable rhythms and clear boundaries support a calm learning environment." },
  { number: "05", title: "No undue pressure", text: "A child’s readiness is respected. Growth is encouraged without turning early learning into a race." },
  { number: "06", title: "Teachers as role models", text: "Adults model curiosity, patience, adab and care in the everyday moments children observe." },
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
  { age: "3", title: "A gentle beginning", text: "Belonging, language, sensory discovery and familiar routines create a first sense of confidence." },
  { age: "4", title: "Curiosity takes shape", text: "Conversation, stories, early number and purposeful play invite children to ask and explore." },
  { age: "5", title: "Ideas connect", text: "Children begin to revisit concepts, make links and take part in more sustained learning experiences." },
  { age: "6", title: "Foundations deepen", text: "Growing independence supports more deliberate practice across language, number and Islamic learning." },
  { age: "7", title: "Ready for what follows", text: "Children strengthen their foundations and approach new learning with increasing confidence." },
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
    lead: "An institution shaped by a simple conviction: knowledge should be rooted in revelation, understood with care and carried into character.",
    image: images.ummStudy, imageAlt: "A quiet reading space with books and a wooden Qur'an stand in warm afternoon light.",
    quote: "Education is more than what we teach. It is what we cultivate.",
    sections: [
      { eyebrow: "Our story", title: "A place for learning that lasts", body: "Markaz Umm al-Hakam is an Islamic educational institution with a commitment to learning grounded in the Qur'an, the Sunnah and the understanding of the Sahabah رضي الله عنهم. Its work brings together knowledge, understanding, practice and character across generations.", layout: "wide" },
      { eyebrow: "Vision", title: "Knowledge carried through generations", body: "To cultivate people who learn with sincerity, understand with depth, practise with care and contribute to their communities with sound character." },
      { eyebrow: "Mission", title: "A thoughtful, rooted education", body: "To provide purposeful Islamic education through sound sources, considered teaching, responsible supervision and a learning culture that values both understanding and practice." },
      { eyebrow: "Our foundations", title: "Four anchors for a life of learning", body: "The Qur'an, the Sunnah, the understanding of the Sahabah رضي الله عنهم and the cultivation of character form the foundations that guide our educational work.", points: ["Qur'an", "Sunnah", "Understanding of the Sahabah رضي الله عنهم", "Character"], layout: "list" },
      { eyebrow: "Educational philosophy", title: "From knowledge to character", body: "We understand education as a connected progression: knowledge is received, explored with understanding, carried into practice and reflected in character.", points: ["Knowledge", "Understanding", "Practice", "Character"] },
      { eyebrow: "What makes us different", title: "A connected view of education", body: "The institution brings religious grounding and educational intention into one conversation. Teaching is not reduced to information delivery: it attends to how knowledge is received, understood, lived and passed on.", points: ["Revelation as the point of reference", "Understanding before performance", "Practice connected to everyday life", "Character treated as part of learning"], layout: "list" },
      { eyebrow: "Future vision", title: "Building with care", body: "Umm al-Hakam looks toward a future in which its programmes can continue to grow in depth, reach and quality while remaining faithful to the principles that shape its work. Specific plans and dates will be shared when confirmed." },
    ],
  },
  {
    path: "/supervision", site: "umm", kind: "supervision", eyebrow: "Careful oversight", title: "Supervision",
    description: "How academic and religious supervision supports curriculum, teaching standards and quality assurance at Umm al-Hakam.",
    lead: "Strong learning needs thoughtful oversight. Our supervisory framework brings academic care and Islamic methodology together around the learner.",
    image: images.ummLibrary, imageAlt: "A sunlit library designed for focused study, with book-lined arches and a long reading table.",
    sections: [
      { eyebrow: "Academic & religious supervision", title: "One considered standard", body: "Oversight is designed to keep learning coherent: religious grounding, academic development and the day-to-day experience of students are considered together." },
      { eyebrow: "Curriculum oversight", title: "A curriculum with purpose", body: "Curriculum review considers source material, sequence, age and level, clarity of outcomes and the relationship between knowledge and practice." },
      { eyebrow: "Teaching standards", title: "Clarity in the classroom", body: "Teaching standards attend to preparation, subject knowledge, communication, respectful classroom practice and the quality of student understanding.", points: ["Clear learning intentions", "Age- and level-aware explanation", "Respectful classroom conduct", "Regular reflection on student progress"] },
      { eyebrow: "Islamic methodology", title: "Rooted in reliable sources", body: "Islamic teaching is approached with care for sound sourcing, appropriate context and respect for the understanding of the Sahabah رضي الله عنهم." },
      { eyebrow: "People & development", title: "Teachers supported to grow", body: "Teacher selection, academic development and quality assurance are part of an ongoing framework. Specific procedures and named supervisory roles will be added when officially confirmed.", points: ["Teacher selection", "Academic development", "Quality assurance"] },
    ],
  },
  {
    path: "/team", site: "umm", kind: "team", eyebrow: "The people behind the work", title: "Our Team",
    description: "Meet the leadership, supervision, programme and administration teams at Markaz Umm al-Hakam.",
    lead: "Education is carried by people. This directory is prepared for the team’s official profiles; names, roles and qualifications will be published only when confirmed.",
    image: images.ummStudy, imageAlt: "Books arranged in a quiet study space, ready for learning.",
    sections: [],
  },
  {
    path: "/programmes", site: "umm", kind: "programmes", eyebrow: "Learning across generations", title: "Our Programmes",
    description: "Explore learning pathways at Markaz Umm al-Hakam, including Nabat Learning House, Qur'an study and seasonal programmes.",
    lead: "Different ages and stages call for different settings. Each programme is connected by a shared commitment to sound knowledge, thoughtful teaching and character.",
    image: images.nabatLearning, imageAlt: "Young children exploring books and natural materials around a classroom table.",
    sections: [],
  },
  {
    path: "/downloads", site: "umm", kind: "downloads", eyebrow: "Read, explore, keep", title: "Downloads",
    description: "A resource library for Umm al-Hakam and Nabat prospectuses and admissions information.",
    lead: "A considered introduction to each programme, gathered in one place. Official PDF files will be added when the institution’s approved documents are supplied.",
    image: images.ummLibrary, imageAlt: "Books on a long table in an inviting study library.",
    sections: [],
  },
  {
    path: "/contact", site: "umm", kind: "contact", eyebrow: "Start a conversation", title: "Contact Us",
    description: "Send an enquiry to Markaz Umm al-Hakam or find the institution’s official contact details.",
    lead: "We welcome thoughtful questions about our work and programmes. Official address, phone and email details are being prepared for publication.",
    image: images.ummLibrary, imageAlt: "A welcoming study space at the heart of an educational institution.",
    sections: [],
  },
  {
    path: "/nabat/about", site: "nabat", kind: "story", eyebrow: "A project of Markaz Umm al-Hakam", title: "What Is Nabat?",
    description: "Learn about Nabat Learning House, an early-years educational project for children approximately ages 3–7.",
    lead: "Nabat Learning House is the early-years educational project of Markaz Umm al-Hakam, designed for children approximately ages 3–7.",
    image: images.nabatLearning, imageAlt: "Children exploring books and natural materials in a calm, light-filled classroom.",
    quote: "A gentle beginning in knowledge, faith, curiosity and character.",
    sections: [
      { eyebrow: "Why Nabat was established", title: "A beginning with care", body: "The early years are a time of remarkable growth. Nabat is designed to bring together a thoughtful academic foundation, Islamic learning, purposeful exploration and the care children need to feel secure and ready to learn.", layout: "wide" },
      { eyebrow: "Vision", title: "Curiosity with a compass", body: "To nurture young learners who grow in knowledge, faith, curiosity and character, with confidence to continue learning." },
      { eyebrow: "Mission", title: "Make every beginning meaningful", body: "To offer a gentle, purposeful early-years learning environment where children can encounter ideas, practise skills and develop within an Islamic framework." },
      { eyebrow: "Educational philosophy", title: "Knowledge, understanding, practice, character", body: "Learning is planned as a connected journey. Children meet knowledge, make sense of it, return to it through practice and are supported to carry it into their conduct and relationships.", points: ["Strong academic foundations", "Islamic learning woven into the day", "Gentle, development-aware teaching", "Curiosity through purposeful exploration"], layout: "list" },
      { eyebrow: "Within Umm al-Hakam", title: "A distinct beginning, a shared foundation", body: "Nabat has its own early-years identity and learning environment while remaining a project of Markaz Umm al-Hakam. The relationship is clear; the experience is designed specifically for young children." },
    ],
  },
  {
    path: "/nabat/curriculum", site: "nabat", kind: "curriculum", eyebrow: "Academic learning", title: "The Curriculum",
    description: "Explore Nabat’s early-years learning areas: English, mathematics, science, Arabic, Urdu, geography and creative development.",
    lead: "A connected curriculum gives children room to build strong foundations, revisit ideas and learn through words, numbers, observation and making.",
    image: images.nabatHands, imageAlt: "Small hands arranging leaves and wooden shapes during a calm learning activity.",
    sections: [],
  },
  {
    path: "/nabat/islamic-curriculum", site: "nabat", kind: "islamic-curriculum", eyebrow: "Faith & foundations", title: "Islamic Curriculum",
    description: "Explore the Islamic learning foundations at Nabat: Quran, Hadith, people of knowledge, mutun, duas, adab, Islamic history and Seerah.",
    lead: "Islamic learning is approached with respect, care and age-aware explanation—making room for listening, understanding, practice and love of what is learned.",
    image: images.ummStudy, imageAlt: "A book stand and carefully arranged study materials in a calm, sunlit reading space.",
    sections: [],
  },
  {
    path: "/nabat/how-we-teach", site: "nabat", kind: "approach", eyebrow: "Gentle, purposeful learning", title: "How We Teach",
    description: "Six teaching principles shape the Nabat learning experience, from sound sources and understanding to gentleness and role modelling.",
    lead: "Children learn best when they feel safe enough to ask, supported enough to practise and respected enough to grow at their own pace.",
    image: images.nabatLearning, imageAlt: "Children learning together in a calm early-years classroom.",
    sections: [],
  },
  {
    path: "/nabat/who-we-teach", site: "nabat", kind: "ages", eyebrow: "Ages approximately 3–7", title: "Who We Teach",
    description: "Explore an age-based view of the Nabat learning journey from age three to seven, without assigning unconfirmed class names.",
    lead: "Every child arrives with a different story. This age journey offers a broad picture of the early-years foundations Nabat is designed to support—not a set of official class names.",
    image: images.nabatHands, imageAlt: "A child’s hands exploring natural learning materials at a low table.",
    sections: [],
  },
  {
    path: "/nabat/prospectus", site: "nabat", kind: "prospectus", eyebrow: "A closer look", title: "The Nabat Prospectus",
    description: "Explore Nabat’s philosophy, academic and Islamic curriculum, teaching approach, age journey and admissions.",
    lead: "See the Nabat journey in full: what children learn, how the day is shaped and the principles that guide each beginning.",
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
    lead: "Starting somewhere new is a family decision. Our admissions journey is designed to begin with a conversation and make room for the right questions.",
    image: images.nabatLearning, imageAlt: "A welcoming early-years classroom prepared for hands-on learning.",
    sections: [],
  },
  {
    path: "/nabat/contact", site: "nabat", kind: "contact", eyebrow: "We would love to hear from you", title: "Contact Nabat",
    description: "Contact Nabat Learning House with a question about the early-years project, curriculum or admissions.",
    lead: "We would be honoured to be part of your child’s journey. Find us at PECHS Block 4, Karachi, or message the team on WhatsApp.",
    image: images.nabatLearning, imageAlt: "A calm classroom prepared for children to explore and learn.",
    sections: [],
  },
]

export const routeMetadata = [
  { path: "/", site: "umm" as const, title: "Markaz Umm al-Hakam", description: "An Islamic educational institution grounded in the Qur'an, Sunnah and the understanding of the Sahabah رضي الله عنهم." },
  { path: "/nabat", site: "nabat" as const, title: "Nabat Learning House", description: "A gentle beginning in knowledge, faith, curiosity and character for children approximately ages 3–7." },
  ...sitePages.map(({ path, site, title, description }) => ({ path, site, title, description })),
]
