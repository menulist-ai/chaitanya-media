import {routing, type AppLocale} from "@/i18n/routing";

export {localeLabels} from "@/i18n/routing";
export type {AppLocale};

export const locales = routing.locales;
export const defaultLocale = routing.defaultLocale;

export const instagramProfileUrl = "https://www.instagram.com/marketing_with_shivam_/";

export const siteBase = {
  name: "Chaitanya Media",
  shortName: "Chaitanya Media",
  tagline: "Campaigns that reach. Marketing that delivers.",
  url: "https://chaitanyadigitalsolutions.com",
  email: "hello@chaitanyadigitalsolutions.com",
  phone: "+918805385779",
  phoneDisplay: "+91 88053 85779",
  whatsapp: "https://wa.me/918805385779",
  founded: "2020"
};

export type SocialLink = {
  kind: "instagram" | "facebook" | "whatsapp";
  label: string;
  href: string;
};

export type FeaturedReel = {
  title: string;
  href: string;
  embedUrl: string;
};

export const socialLinks: SocialLink[] = [
  {
    kind: "instagram",
    label: "Instagram",
    href: instagramProfileUrl
  },
  {
    kind: "facebook",
    label: "Facebook",
    href: instagramProfileUrl
  },
  {
    kind: "whatsapp",
    label: "WhatsApp",
    href: siteBase.whatsapp
  }
];

export const featuredReels: FeaturedReel[] = [
  {
    title: "Digital growth reel 01",
    href: "https://www.instagram.com/reel/DXjqS5LDKLb/",
    embedUrl: "https://www.instagram.com/reel/DXjqS5LDKLb/embed/captioned/"
  },
  {
    title: "Digital growth reel 02",
    href: "https://www.instagram.com/reel/DX4GvK_BtAV/",
    embedUrl: "https://www.instagram.com/reel/DX4GvK_BtAV/embed/captioned/"
  },
  {
    title: "Digital growth reel 03",
    href: "https://www.instagram.com/reel/DYPgNH3M1fe/",
    embedUrl: "https://www.instagram.com/reel/DYPgNH3M1fe/embed/captioned/"
  }
];

export type FAQ = {
  question: string;
  answer: string;
};

export type Service = {
  slug: string;
  title: string;
  eyebrow: string;
  summary: string;
  intro: string;
  buyerProblems: string[];
  includes: string[];
  outcomes: string[];
  notPromised: string[];
  process: string[];
  faqs: FAQ[];
};

export type BlogPost = {
  slug: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  excerpt: string;
  sections: {heading: string; body: string[]}[];
};

const legalSlugs = [
  "privacy-policy",
  "terms",
  "acceptable-use-policy",
  "refund-policy",
  "cookie-policy",
  "disclaimer",
  "security-policy",
  "security-compliance"
] as const;

export type LegalSlug = (typeof legalSlugs)[number];

export type LegalPageContent = {
  title: string;
  description: string;
  body: string[];
};

type NavItem = {
  label: string;
  href: string;
};

type Stat = {
  value: string;
  label: string;
};

export type CampaignMaterialExample = {
  title: string;
  category: string;
  image: string;
  alt: string;
  points: string[];
};

export type PortfolioItem = {
  title: string;
  category: string;
  summary: string;
  href: string;
  points: string[];
  proofStatus: string;
};

export type CaseStudyItem = {
  title: string;
  category: string;
  summary: string;
  challenge: string;
  response: string;
  proofStatus: string;
  href: string;
};

export type ProofGalleryItem = {
  title: string;
  category: string;
  image: string;
  alt: string;
  text: string;
};

export type TestimonialSlot = {
  audience: string;
  title: string;
  text: string;
  proofNeeded: string;
};

export type TrustCredential = {
  label: string;
  detail: string;
};

export type CompliancePoint = {
  title: string;
  text: string;
};

type ServiceSource = {
  slug: string;
  title: string;
  summary: string;
};

type SiteDetails = typeof siteBase & {
  description: string;
  location: string;
};

type HomeCopy = {
  heroBadge: string;
  heroTitle: {
    before: string;
    accentOne: string;
    middle: string;
    accentTwo: string;
    after: string;
  };
  heroCopy: string;
  primaryCta: string;
  secondaryCta: string;
  aboutEyebrow: string;
  aboutTitleBefore: string;
  aboutTitleAccent: string;
  aboutParagraphs: string[];
  servicesEyebrow: string;
  servicesTitleBefore: string;
  servicesTitleAccent: string;
  industriesEyebrow: string;
  industriesTitleBefore: string;
  industriesTitleAccent: string;
  whyEyebrow: string;
  whyTitleBefore: string;
  whyTitleAccent: string;
  clientsEyebrow: string;
  clientsTitleBefore: string;
  clientsTitleAccent: string;
  resultsEyebrow: string;
  resultsTitleBefore: string;
  resultsTitleAccent: string;
  contactEyebrow: string;
  contactTitleBefore: string;
  contactTitleAccent: string;
  contactCopy: string;
  form: {
    fullName: string;
    fullNamePlaceholder: string;
    businessName: string;
    businessNamePlaceholder: string;
    phone: string;
    phonePlaceholder: string;
    email: string;
    emailPlaceholder: string;
    location: string;
    locationPlaceholder: string;
    lookingFor: string;
    selectService: string;
    timeline: string;
    selectTimeline: string;
    timelineOptions: string[];
    budget: string;
    selectBudget: string;
    budgetOptions: string[];
    preferredContact: string;
    preferredContactOptions: string[];
    message: string;
    messagePlaceholder: string;
    submit: string;
  };
  finalTitleBefore: string;
  finalTitleAccent: string;
  finalCopy: string;
  finalPhoneCta: string;
  finalWhatsappCta: string;
  reelsEyebrow: string;
  reelsTitle: string;
  reelsText: string;
  reelsProfileCta: string;
  reelsOpenCta: string;
  reelsActiveLabel: string;
  reelsPreviewLabel: string;
  smoothEyebrow: string;
  smoothTitle: string;
  smoothText: string;
  smoothCards: {title: string; text: string}[];
  engineEyebrow: string;
  engineTitle: string;
  engineText: string;
  engineCards: {title: string; text: string}[];
  serviceStackEyebrow: string;
  serviceStackTitle: string;
  serviceStackText: string;
  serviceGroups: {title: string; text: string; slugs: string[]}[];
  systemEyebrow: string;
  systemTitle: string;
  systemText: string;
  systemPills: string[];
  systemCapabilities: {kicker: string; title: string; text: string; points: string[]}[];
  workflowEyebrow: string;
  workflowTitle: string;
  workflowText: string;
  workflowSteps: {title: string; text: string; points: string[]}[];
  ugcEyebrow: string;
  ugcTitle: string;
  ugcText: string;
  ugcVideos: {title: string; category: string; src: string; poster: string}[];
};

type ServicesPageCopy = {
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  title: string;
  copy: string;
  menuEyebrow: string;
  menuTitle: string;
  howEyebrow: string;
  howTitle: string;
  howText: string;
  steps: string[];
};

type ServiceDetailCopy = {
  strategyCall: string;
  discussScope: string;
  whenHelpsEyebrow: string;
  whenHelpsTitle: string;
  whenHelpsText: string;
  includedEyebrow: string;
  includedTitle: string;
  includedText: string;
  outcomesEyebrow: string;
  outcomesTitle: string;
  claimSafetyEyebrow: string;
  claimSafetyTitle: string;
  claimSafetyText: string;
  processEyebrow: string;
  processTitle: string;
  processText: string;
  questionsEyebrow: string;
  commonQuestionsPrefix: string;
  relatedEyebrow: string;
  relatedTitle: string;
  viewService: string;
};

type ResultsPageCopy = {
  metaTitle: string;
  metaDescription: string;
  schemaName: string;
  schemaDescription: string;
  eyebrow: string;
  title: string;
  copy: string;
  numbersEyebrow: string;
  numbersTitle: string;
  clientsEyebrow: string;
  clientsTitle: string;
  clientsText: string;
  trustEyebrow: string;
  trustTitle: string;
  trustText: string;
  proofCardText: string;
  caseStudiesEyebrow: string;
  caseStudiesTitle: string;
  caseStudiesText: string;
  caseStudyNeedLabel: string;
  caseStudyResponseLabel: string;
  caseStudyCta: string;
  galleryEyebrow: string;
  galleryTitle: string;
  galleryText: string;
  credentialsEyebrow: string;
  credentialsTitle: string;
  credentialsText: string;
  complianceEyebrow: string;
  complianceTitle: string;
  complianceText: string;
  materialEyebrow: string;
  materialTitle: string;
  materialText: string;
  materialNote: string;
  portfolioEyebrow: string;
  portfolioTitle: string;
  portfolioText: string;
  portfolioCta: string;
  testimonialsEyebrow: string;
  testimonialsTitle: string;
  testimonialsText: string;
  finalEyebrow: string;
  finalTitle: string;
  primaryCta: string;
  secondaryCta: string;
};

type AboutPageCopy = {
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  title: string;
  copy: string;
  introEyebrow: string;
  introTitle: string;
  introText: string;
  finalEyebrow: string;
  finalTitle: string;
  servicesCta: string;
  whatsappCta: string;
};

type FounderPageCopy = {
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  title: string;
  copy: string;
  positioningEyebrow: string;
  positioningTitle: string;
  positioningText: string;
  proofEyebrow: string;
  proofTitle: string;
  proofCards: {title: string; text: string}[];
};

type BlogPageCopy = {
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  title: string;
  copy: string;
  topicsEyebrow: string;
  topicsTitle: string;
  articlesEyebrow: string;
  articlesTitle: string;
  articlesText: string;
  readArticle: string;
  editorialEyebrow: string;
  editorialTitle: string;
  editorialText: string;
  editorialPoints: string[];
};

type BlogPostPageCopy = {
  nextEyebrow: string;
  nextTitle: string;
  nextText: string;
  requestCta: string;
  moreArticles: string;
  authorName: string;
};

type ContactPageCopy = {
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  title: string;
  copy: string;
  fastEyebrow: string;
  fastTitle: string;
  fastText: string;
  cards: {
    whatsappTitle: string;
    whatsappText: string;
    phoneText: string;
    emailTitle: string;
    emailText: string;
  };
  requestEyebrow: string;
  requestTitle: string;
  requestText: string;
  alertText: string;
  form: {
    name: string;
    business: string;
    phone: string;
    email: string;
    location: string;
    service: string;
    selectService: string;
    timeline: string;
    selectTimeline: string;
    timelineOptions: string[];
    budget: string;
    selectBudget: string;
    budgetOptions: string[];
    preferredContact: string;
    preferredContactOptions: string[];
    goal: string;
    consent: string;
    submit: string;
  };
};

type ThankYouCopy = {
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  title: string;
  copy: string;
  cta: string;
};

type NotFoundCopy = {
  eyebrow: string;
  title: string;
  copy: string;
  home: string;
  services: string;
};

type FooterCopy = {
  description: string;
  contactHeading: string;
  followHeading: string;
  followText: string;
  servicesHeading: string;
  companyHeading: string;
  resourcesHeading: string;
  legalHeading: string;
  companyLinks: {label: string; href: string}[];
  resourceLinks: {label: string; href: string}[];
  rights: string;
  legalLinks: {label: string; href: string}[];
};

type HeaderCopy = {
  ariaHome: string;
  consultation: string;
  whatsapp: string;
  menu: string;
  themeLight: string;
  themeDark: string;
};

export type SiteContent = {
  locale: AppLocale;
  site: SiteDetails;
  socialLinks: SocialLink[];
  featuredReels: FeaturedReel[];
  navItems: NavItem[];
  heroStats: Stat[];
  trustMarkers: string[];
  services: Service[];
  agencyStrengths: {title: string; text: string}[];
  industries: string[];
  whyChooseUs: string[];
  clientTypes: string[];
  resultStats: Stat[];
  campaignMaterialExamples: CampaignMaterialExample[];
  portfolioItems: PortfolioItem[];
  caseStudies: CaseStudyItem[];
  proofGalleryItems: ProofGalleryItem[];
  testimonialSlots: TestimonialSlot[];
  trustCredentials: TrustCredential[];
  compliancePoints: CompliancePoint[];
  blogPosts: BlogPost[];
  legalPages: Record<LegalSlug, LegalPageContent>;
  header: HeaderCopy;
  footer: FooterCopy;
  home: HomeCopy;
  servicesPage: ServicesPageCopy;
  serviceDetail: ServiceDetailCopy;
  resultsPage: ResultsPageCopy;
  aboutPage: AboutPageCopy;
  founderPage: FounderPageCopy;
  blogPage: BlogPageCopy;
  blogPostPage: BlogPostPageCopy;
  contactPage: ContactPageCopy;
  thankYouPage: ThankYouCopy;
  notFoundPage: NotFoundCopy;
  legalEyebrow: string;
};

const enServiceSource: ServiceSource[] = [
  {
    slug: "bulk-sms-marketing",
    title: "Bulk SMS Marketing",
    summary: "Send Marathi and English SMS updates to large audiences for promotions and campaigns."
  },
  {
    slug: "email-marketing",
    title: "Email Marketing",
    summary: "Send useful email updates and reminders so interested customers keep hearing from you."
  },
  {
    slug: "voice-call-campaigns",
    title: "Voice Call Campaigns",
    summary: "Broadcast recorded voice messages in the leader, founder, or brand voice."
  },
  {
    slug: "missed-call-alert",
    title: "Missed Call Alert",
    summary: "Capture leads effortlessly with a simple missed-call setup."
  },
  {
    slug: "ivr-solutions",
    title: "IVR Solutions",
    summary: "Set up a call menu so callers can press a number and reach the right option."
  },
  {
    slug: "whatsapp-business-api",
    title: "WhatsApp Business API",
    summary: "Send posters, PDFs, voice notes, and updates to customers through WhatsApp."
  },
  {
    slug: "social-media-marketing",
    title: "Social Media Marketing",
    summary: "Keep your business active on Instagram, Facebook, and other social platforms."
  },
  {
    slug: "google-meta-ads",
    title: "Google & Meta Ads",
    summary: "Run paid ads on Google, Instagram, and Facebook to bring more inquiries."
  },
  {
    slug: "seo-services",
    title: "SEO Services",
    summary: "Improve how often your business appears when people search on Google."
  },
  {
    slug: "web-designing",
    title: "Web Designing",
    summary: "Modern, responsive, and user-friendly website designs."
  },
  {
    slug: "web-development",
    title: "Web Development",
    summary: "Reliable website development for business websites and online service pages."
  },
  {
    slug: "election-management",
    title: "Election Management",
    summary: "Plan and execute political campaigns with clear digital and field support."
  },
  {
    slug: "election-software-management",
    title: "Election Software Management",
    summary: "Keep voter lists, campaign tasks, and voter communication organized in one place."
  },
  {
    slug: "booth-survey-voter-analysis",
    title: "Booth Survey & Voter Analysis",
    summary: "Collect booth-wise voter feedback and review it before and after voting."
  },
  {
    slug: "voter-slip-booth-kit",
    title: "Voter Slip & Booth Kit",
    summary: "Prepare voter slips, booth kits, and Bluetooth printer support for field teams."
  },
  {
    slug: "led-van-video-campaigns",
    title: "LED Van & Video Campaigns",
    summary: "Promote campaigns through LED van activity, audio-video content, and documentary films."
  },
  {
    slug: "print-media-design",
    title: "Print Media & Outdoor Design",
    summary: "Design advertisements, pamphlets, folders, banners, poll chits, and stickers."
  },
  {
    slug: "election-material-supply",
    title: "Election Material Supply",
    summary: "Support campaigns with T-shirts, caps, badges, flags, banners, and field material."
  },
  {
    slug: "real-estate-marketing",
    title: "Real Estate Marketing",
    summary: "Help builders and developers get more genuine property inquiries."
  },
  {
    slug: "jewellery-luxury-branding",
    title: "Jewellery & Luxury Branding",
    summary: "Create a polished online image for jewellery and premium local brands."
  },
  {
    slug: "content-reel-production",
    title: "Content & Reel Production",
    summary: "Create reels, short videos, and posts that explain the business clearly."
  },
  {
    slug: "event-wedding-digital-invitations",
    title: "Event & Wedding Digital Invitations",
    summary: "Send smart invitations through WhatsApp, recorded voice calls, digital cards, and location links."
  },
  {
    slug: "school-admission-campaigns",
    title: "School Admission Campaigns",
    summary: "Create admission videos, parent-facing content, and local promotion for schools and institutes."
  },
  {
    slug: "retail-local-business-marketing",
    title: "Retail & Local Business Marketing",
    summary: "Plan Google, Meta, content, and local visibility campaigns for shops, showrooms, and service businesses."
  },
  {
    slug: "digital-marketing",
    title: "Digital Marketing",
    summary: "Plan online promotion across website, social media, ads, and follow-up."
  },
  {
    slug: "customized-advertising",
    title: "Customized Advertising",
    summary: "Create a custom promotion plan based on your business goal and location."
  }
];

const mrServiceSource: ServiceSource[] = [
  {
    slug: "bulk-sms-marketing",
    title: "बल्क SMS मार्केटिंग",
    summary: "Promotion आणि campaigns साठी Marathi व English SMS मोठ्या audience पर्यंत पोहोचवा."
  },
  {
    slug: "email-marketing",
    title: "ईमेल मार्केटिंग",
    summary: "Interested customers ला regular email updates आणि reminders पाठवा."
  },
  {
    slug: "voice-call-campaigns",
    title: "व्हॉईस कॉल मोहिमा",
    summary: "Leader, founder किंवा brand च्या आवाजातील recorded message अनेक लोकांपर्यंत पोहोचवा."
  },
  {
    slug: "missed-call-alert",
    title: "मिस्ड कॉल अलर्ट",
    summary: "सोप्या missed-call setup ने इच्छुक ग्राहक सहज पकडा."
  },
  {
    slug: "ivr-solutions",
    title: "IVR सोल्यूशन्स",
    summary: "Call करणाऱ्या लोकांना number press करून योग्य option पर्यंत पोहोचायला मदत करा."
  },
  {
    slug: "whatsapp-business-api",
    title: "WhatsApp Business API",
    summary: "Customers ना WhatsApp वर posters, PDFs, voice notes आणि updates पाठवा."
  },
  {
    slug: "social-media-marketing",
    title: "सोशल मीडिया मार्केटिंग",
    summary: "Instagram, Facebook आणि इतर social platforms वर business active ठेवा."
  },
  {
    slug: "google-meta-ads",
    title: "Google आणि Meta Ads",
    summary: "Google, Instagram आणि Facebook वर paid ads चालवून अधिक inquiries आणा."
  },
  {
    slug: "seo-services",
    title: "SEO सेवा",
    summary: "लोक Google वर search करतात तेव्हा तुमचा business जास्त वेळा दिसायला मदत करा."
  },
  {
    slug: "web-designing",
    title: "वेब डिझायनिंग",
    summary: "Modern, responsive आणि user-friendly website designs."
  },
  {
    slug: "web-development",
    title: "वेब डेव्हलपमेंट",
    summary: "Business websites आणि online service pages साठी reliable website development."
  },
  {
    slug: "election-management",
    title: "निवडणूक व्यवस्थापन",
    summary: "Political campaign साठी digital आणि field promotion clear पद्धतीने plan करा."
  },
  {
    slug: "election-software-management",
    title: "Election Software Management",
    summary: "Voter lists, campaign tasks आणि voter communication एकाच ठिकाणी organized ठेवा."
  },
  {
    slug: "booth-survey-voter-analysis",
    title: "Booth Survey आणि Voter Analysis",
    summary: "Booth-wise voter feedback घ्या आणि voting पूर्वी/नंतर review करा."
  },
  {
    slug: "voter-slip-booth-kit",
    title: "Voter Slip आणि Booth Kit",
    summary: "Field teams साठी voter slips, booth kits आणि Bluetooth printer support तयार करा."
  },
  {
    slug: "led-van-video-campaigns",
    title: "LED Van आणि Video Campaigns",
    summary: "LED van activity, audio-video content आणि documentary films द्वारे प्रचार वाढवा."
  },
  {
    slug: "print-media-design",
    title: "Print Media आणि Outdoor Design",
    summary: "जाहिरात, pamphlets, folders, banners, poll chits आणि stickers design करा."
  },
  {
    slug: "election-material-supply",
    title: "Election Material Supply",
    summary: "T-shirts, caps, badges, flags, banners आणि field material साठी campaign support."
  },
  {
    slug: "real-estate-marketing",
    title: "रिअल इस्टेट मार्केटिंग",
    summary: "Builders आणि developers साठी genuine property inquiries वाढवा."
  },
  {
    slug: "jewellery-luxury-branding",
    title: "ज्वेलरी आणि लक्झरी ब्रँडिंग",
    summary: "Jewellery आणि premium local brands साठी polished online image तयार करा."
  },
  {
    slug: "content-reel-production",
    title: "कंटेंट आणि Reel Production",
    summary: "Business clear पद्धतीने explain करणारे reels, short videos आणि posts तयार करा."
  },
  {
    slug: "event-wedding-digital-invitations",
    title: "Event आणि Wedding Digital Invitations",
    summary: "WhatsApp, recorded voice calls, digital cards आणि location links द्वारे smart invitations पाठवा."
  },
  {
    slug: "school-admission-campaigns",
    title: "School Admission Campaigns",
    summary: "Schools आणि institutes साठी admission videos, parent-facing content आणि local promotion तयार करा."
  },
  {
    slug: "retail-local-business-marketing",
    title: "Retail आणि Local Business Marketing",
    summary: "Shops, showrooms आणि service businesses साठी Google, Meta, content आणि local visibility campaigns plan करा."
  },
  {
    slug: "digital-marketing",
    title: "डिजिटल मार्केटिंग",
    summary: "Website, social media, ads आणि follow-up मिळून online promotion plan करा."
  },
  {
    slug: "customized-advertising",
    title: "कस्टमाइज्ड Advertising",
    summary: "तुमच्या business goal आणि location नुसार custom promotion plan तयार करा."
  }
];

const hiServiceSource: ServiceSource[] = [
  {
    slug: "bulk-sms-marketing",
    title: "बल्क SMS मार्केटिंग",
    summary: "Promotions और campaigns के लिए Marathi और English SMS बड़े audience तक भेजें."
  },
  {
    slug: "email-marketing",
    title: "ईमेल मार्केटिंग",
    summary: "Interested customers को regular email updates और reminders भेजें."
  },
  {
    slug: "voice-call-campaigns",
    title: "वॉइस कॉल कैंपेन",
    summary: "Leader, founder या brand की आवाज में recorded message कई लोगों तक पहुंचाएं."
  },
  {
    slug: "missed-call-alert",
    title: "मिस्ड कॉल अलर्ट",
    summary: "Simple missed-call setup से leads आसानी से capture करें."
  },
  {
    slug: "ivr-solutions",
    title: "IVR सॉल्यूशंस",
    summary: "Call करने वाले लोग number press करके सही option तक पहुंच सकें."
  },
  {
    slug: "whatsapp-business-api",
    title: "WhatsApp Business API",
    summary: "Customers को WhatsApp पर posters, PDFs, voice notes और updates भेजें."
  },
  {
    slug: "social-media-marketing",
    title: "सोशल मीडिया मार्केटिंग",
    summary: "Instagram, Facebook और अन्य social platforms पर business active रखें."
  },
  {
    slug: "google-meta-ads",
    title: "Google और Meta Ads",
    summary: "Google, Instagram और Facebook पर paid ads चलाकर ज्यादा inquiries लाएं."
  },
  {
    slug: "seo-services",
    title: "SEO सेवाएं",
    summary: "लोग Google पर search करें तो आपका business ज्यादा बार दिखे."
  },
  {
    slug: "web-designing",
    title: "वेब डिजाइनिंग",
    summary: "Modern, responsive और user-friendly website designs."
  },
  {
    slug: "web-development",
    title: "वेब डेवलपमेंट",
    summary: "Business websites और online service pages के लिए reliable website development."
  },
  {
    slug: "election-management",
    title: "इलेक्शन मैनेजमेंट",
    summary: "Political campaign के लिए digital और field promotion साफ तरीके से plan करें."
  },
  {
    slug: "election-software-management",
    title: "Election Software Management",
    summary: "Voter lists, campaign tasks और voter communication को एक जगह organized रखें."
  },
  {
    slug: "booth-survey-voter-analysis",
    title: "Booth Survey और Voter Analysis",
    summary: "Booth-wise voter feedback लें और voting से पहले/बाद review करें."
  },
  {
    slug: "voter-slip-booth-kit",
    title: "Voter Slip और Booth Kit",
    summary: "Field teams के लिए voter slips, booth kits और Bluetooth printer support तैयार करें."
  },
  {
    slug: "led-van-video-campaigns",
    title: "LED Van और Video Campaigns",
    summary: "LED van activity, audio-video content और documentary films से promotion बढ़ाएं."
  },
  {
    slug: "print-media-design",
    title: "Print Media और Outdoor Design",
    summary: "Advertisements, pamphlets, folders, banners, poll chits और stickers design करें."
  },
  {
    slug: "election-material-supply",
    title: "Election Material Supply",
    summary: "T-shirts, caps, badges, flags, banners और field material के लिए campaign support."
  },
  {
    slug: "real-estate-marketing",
    title: "रियल एस्टेट मार्केटिंग",
    summary: "Builders और developers के लिए genuine property inquiries बढ़ाएं."
  },
  {
    slug: "jewellery-luxury-branding",
    title: "ज्वेलरी और लग्जरी ब्रांडिंग",
    summary: "Jewellery और premium local brands के लिए polished online image बनाएं."
  },
  {
    slug: "content-reel-production",
    title: "कंटेंट और Reel Production",
    summary: "Business को clear तरीके से समझाने वाले reels, short videos और posts बनाएं."
  },
  {
    slug: "event-wedding-digital-invitations",
    title: "Event और Wedding Digital Invitations",
    summary: "WhatsApp, recorded voice calls, digital cards और location links से smart invitations भेजें."
  },
  {
    slug: "school-admission-campaigns",
    title: "School Admission Campaigns",
    summary: "Schools और institutes के लिए admission videos, parent-facing content और local promotion बनाएं."
  },
  {
    slug: "retail-local-business-marketing",
    title: "Retail और Local Business Marketing",
    summary: "Shops, showrooms और service businesses के लिए Google, Meta, content और local visibility campaigns plan करें."
  },
  {
    slug: "digital-marketing",
    title: "डिजिटल मार्केटिंग",
    summary: "Website, social media, ads और follow-up मिलाकर online promotion plan करें."
  },
  {
    slug: "customized-advertising",
    title: "कस्टमाइज्ड Advertising",
    summary: "आपके business goal और location के हिसाब से custom promotion plan बनाएं."
  }
];

const commonByLocale = {
  en: {
    serviceEyebrow: "Digital growth service",
    serviceIntro: () =>
      "This service helps Indian businesses and campaign teams reach more people, get more inquiries, and follow up clearly.",
    buyerProblems: [
      "People nearby do not know enough about the business or campaign.",
      "Promotion is happening in many places, but there is no clear plan.",
      "Inquiries are coming in, but follow-up is not organized.",
      "The business needs to look more trustworthy online."
    ],
    includes: [
      "Understand your goal, area, and audience",
      "Decide what message or offer should be promoted",
      "Choose the right channels like WhatsApp, social media, Google, SMS, or calls",
      "Plan how inquiries should be collected and followed up",
      "Review what worked and decide the next step"
    ],
    outcomes: [
      "A clearer promotion plan",
      "More people noticing the business locally",
      "A better inquiry and follow-up process",
      "Less confusion about where to spend time and budget"
    ],
    notPromised: [
      "Instant viral growth",
      "Guaranteed election or sales outcome",
      "Results without enough budget, regular work, and follow-up"
    ],
    process: [
      "Understand the business, location, audience, and goal.",
      "Choose the message, offer, and channels that make sense.",
      "Start the selected work, such as ads, posts, SMS, WhatsApp, calls, or website changes.",
      "Review inquiries, responses, and next improvements."
    ],
    faqs: (title: string): FAQ[] => [
      {
        question: `Is ${title.toLowerCase()} suitable for local Pune businesses?`,
        answer:
          "Yes. The service can be planned for Pune, Shewalewadi, Hadapsar, Manjri, and wider Maharashtra audiences depending on the campaign goal."
      },
      {
        question: "Can this be combined with other marketing services?",
        answer:
          "Yes. Most campaigns work better when the message, posts, ads, WhatsApp, calls, and follow-up are planned together."
      },
      {
        question: "Do results depend on budget?",
        answer:
          "Yes. Results depend on how many people need to be reached, which service is selected, the offer, budget, timing, and how quickly inquiries are followed up."
      }
    ]
  },
  mr: {
    serviceEyebrow: "डिजिटल वाढ सेवा",
    serviceIntro: () =>
      "ही service Indian businesses आणि campaign teams ला जास्त लोकांपर्यंत पोहोचणे, inquiries मिळवणे आणि follow-up clear ठेवणे यासाठी मदत करते.",
    buyerProblems: [
      "Nearby लोकांना business किंवा campaign बद्दल पुरेशी माहिती नाही.",
      "Promotion अनेक ठिकाणी चालू आहे, पण clear plan नाही.",
      "Inquiries येतात, पण follow-up organized नाही.",
      "Business online जास्त trustworthy दिसायला हवा."
    ],
    includes: [
      "तुमचा goal, area आणि audience समजून घेणे",
      "कोणता message किंवा offer promote करायचा ते ठरवणे",
      "WhatsApp, social media, Google, SMS किंवा calls सारखे right channels निवडणे",
      "Inquiries कशा collect आणि follow-up करायच्या ते plan करणे",
      "काय work झाले ते पाहून next step ठरवणे"
    ],
    outcomes: [
      "Promotion plan अधिक clear",
      "Local लोकांमध्ये business ची ओळख वाढणे",
      "Inquiry आणि follow-up process सुधारलेला",
      "Time आणि budget कुठे वापरायचे याबद्दल कमी confusion"
    ],
    notPromised: [
      "तत्काळ viral growth",
      "निवडणूक किंवा sales outcome ची guarantee",
      "पुरेसा budget, regular work आणि follow-up शिवाय results"
    ],
    process: [
      "Business, location, audience आणि goal समजून घ्या.",
      "योग्य message, offer आणि channels निवडा.",
      "Ads, posts, SMS, WhatsApp, calls किंवा website changes पैकी selected work सुरू करा.",
      "Inquiries, responses आणि next improvements review करा."
    ],
    faqs: (title: string): FAQ[] => [
      {
        question: `${title} Pune मधील local businesses साठी योग्य आहे का?`,
        answer:
          "होय. Campaign goal नुसार Pune, Shewalewadi, Hadapsar, Manjri आणि wider Maharashtra audience साठी service plan करता येते."
      },
      {
        question: "ही service इतर marketing services सोबत combine करता येते का?",
        answer:
          "होय. Message, posts, ads, WhatsApp, calls आणि follow-up एकत्र plan केल्यावर campaigns चांगले काम करतात."
      },
      {
        question: "Results budget वर अवलंबून असतात का?",
        answer:
          "होय. किती लोकांपर्यंत पोहोचायचे आहे, कोणती service निवडली आहे, offer, budget, timing आणि inquiries ला किती पटकन follow-up करता यावर results अवलंबून असतात."
      }
    ]
  },
  hi: {
    serviceEyebrow: "डिजिटल ग्रोथ सेवा",
    serviceIntro: () =>
      "यह service Indian businesses और campaign teams को ज्यादा लोगों तक पहुंचने, inquiries लाने और follow-up clear रखने में मदद करती है.",
    buyerProblems: [
      "Nearby लोगों को business या campaign के बारे में पर्याप्त जानकारी नहीं है.",
      "Promotion कई जगह चल रहा है, लेकिन clear plan नहीं है.",
      "Inquiries आती हैं, लेकिन follow-up organized नहीं है.",
      "Business को online ज्यादा trustworthy दिखना है."
    ],
    includes: [
      "आपका goal, area और audience समझना",
      "कौन सा message या offer promote करना है यह तय करना",
      "WhatsApp, social media, Google, SMS या calls जैसे right channels चुनना",
      "Inquiries कैसे collect और follow-up करनी हैं यह plan करना",
      "क्या work हुआ देखकर next step तय करना"
    ],
    outcomes: [
      "Promotion plan ज्यादा clear",
      "Local लोगों में business की पहचान बढ़ना",
      "Inquiry और follow-up process बेहतर",
      "Time और budget कहां लगाना है इसमें कम confusion"
    ],
    notPromised: [
      "Instant viral growth",
      "Election या sales outcome की guarantee",
      "Enough budget, regular work और follow-up के बिना results"
    ],
    process: [
      "Business, location, audience और goal समझें.",
      "सही message, offer और channels चुनें.",
      "Ads, posts, SMS, WhatsApp, calls या website changes में से selected work शुरू करें.",
      "Inquiries, responses और next improvements review करें."
    ],
    faqs: (title: string): FAQ[] => [
      {
        question: `क्या ${title} local Pune businesses के लिए सही है?`,
        answer:
          "हां. Campaign goal के अनुसार Pune, Shewalewadi, Hadapsar, Manjri और wider Maharashtra audience के लिए service plan की जा सकती है."
      },
      {
        question: "क्या इसे दूसरी marketing services के साथ combine किया जा सकता है?",
        answer:
          "हां. Message, posts, ads, WhatsApp, calls और follow-up साथ में plan हों तो campaigns बेहतर काम करती हैं."
      },
      {
        question: "क्या results budget पर depend करते हैं?",
        answer:
          "हां. कितने लोगों तक पहुंचना है, कौन सी service चुनी गई है, offer, budget, timing और inquiries पर कितनी जल्दी follow-up होता है, इस पर results depend करते हैं."
      }
    ]
  }
} satisfies Record<AppLocale, {
  serviceEyebrow: string;
  serviceIntro: (title: string) => string;
  buyerProblems: string[];
  includes: string[];
  outcomes: string[];
  notPromised: string[];
  process: string[];
  faqs: (title: string) => FAQ[];
}>;

function makeServices(locale: AppLocale, source: ServiceSource[]): Service[] {
  const common = commonByLocale[locale];

  return source.map((service) => ({
    ...service,
    eyebrow: common.serviceEyebrow,
    intro: common.serviceIntro(),
    buyerProblems: common.buyerProblems,
    includes: common.includes,
    outcomes: common.outcomes,
    notPromised: common.notPromised,
    process: common.process,
    faqs: common.faqs(service.title)
  }));
}

export const contentByLocale: Record<AppLocale, SiteContent> = {
  en: {
    locale: "en",
    site: {
      ...siteBase,
      description:
        "Digital marketing agency in Pune helping Indian businesses, schools, retailers, event families, local service brands, and political campaigns get noticed and receive more inquiries.",
      location: "Shewalewadi, Pune"
    },
    socialLinks,
    featuredReels,
    navItems: [
      {label: "About", href: "/#about"},
      {label: "Services", href: "/services/"},
      {label: "Why Us", href: "/#why-us"},
      {label: "Results", href: "/#results"},
      {label: "Contact", href: "/#contact"}
    ],
    heroStats: [
      {value: "150+", label: "Satisfied Clients"},
      {value: "10M+", label: "Digital Reach"},
      {value: "24/7", label: "Support"},
      {value: "100%", label: "Transparent Pricing"}
    ],
    trustMarkers: [
      "150+ Satisfied Clients",
      "10M+ Digital Reach",
      "24/7 Support",
      "100% Transparent Pricing"
    ],
    services: makeServices("en", enServiceSource),
    agencyStrengths: [
      {
        title: "Clear Planning",
        text: "Every campaign starts with the area, audience, message, budget, and follow-up plan."
      },
      {
        title: "Practical Content",
        text: "Client meetings, shoots, reels, posters, invitations, and ads are made to explain the offer clearly."
      },
      {
        title: "Business & Election Support",
        text: "Chaitanya Media supports schools, shops, service businesses, events, real estate teams, and political campaigns."
      }
    ],
    industries: [
      "Real Estate",
      "Schools & Institutes",
      "Retail & Supermarkets",
      "Automotive Services",
      "Healthcare",
      "Weddings & Events",
      "Jewellery & Luxury",
      "Food & Cafés",
      "Political Campaigns",
      "Travel & Tourism",
      "Legal Services",
      "Manufacturing"
    ],
    whyChooseUs: [
      "Clear service explanation",
      "Plans made for each business or campaign",
      "Simple reporting and honest expectations",
      "Experience in business and election promotion"
    ],
    clientTypes: [
      "Political Leaders & Parties",
      "Real Estate Builders",
      "Jewellery Showrooms",
      "Schools & Coaching Institutes",
      "Retail & Automotive Businesses",
      "Wedding & Event Hosts"
    ],
    resultStats: [
      {value: "10M+", label: "Digital Reach Generated"},
      {value: "100+", label: "Campaigns Executed"},
      {value: "Pan India", label: "Clients Across Maharashtra & Beyond"}
    ],
    campaignMaterialExamples: [
      {
        title: "Election campaign service menu",
        category: "Campaign service proof",
        image: "/images/campaign-materials/election-service-menu.jpg",
        alt: "Chaitanya Media election promotion service banner showing SMS, voice call, WhatsApp, social media, technical, survey, print, and election material services.",
        points: [
          "Bulk SMS, voice calls, WhatsApp, Facebook and Instagram advertising",
          "LED van, documentary films, campaign videos, and social promotion",
          "Booth surveys, voter analysis, print media, voter slips, and campaign material"
        ]
      },
      {
        title: "Voter outreach facilities",
        category: "Election outreach example",
        image: "/images/campaign-materials/voter-outreach-banner.jpg",
        alt: "Chaitanya Media voter outreach banner showing SMS, voice call, WhatsApp, election software, and voter slip printer services.",
        points: [
          "Marathi and English bulk SMS outreach",
          "Recorded bulk voice calls in the candidate voice",
          "WhatsApp poster, PDF, audio message, election software, and voter slip printer support"
        ]
      }
    ],
    portfolioItems: [
      {
        title: "Election promotion field kit",
        category: "Political campaign operations",
        summary:
          "A campaign-ready service set covering SMS, voice calls, WhatsApp, booth support, print material, and field promotion.",
        href: "/services/election-management/",
        points: ["SMS, voice, WhatsApp", "Booth and voter support", "Print and field material"],
        proofStatus: "Banner-backed service proof"
      },
      {
        title: "Voter outreach communication support",
        category: "Election technology",
        summary:
          "Marathi and English SMS, candidate voice recordings, WhatsApp posters, election software, and voter-slip printing support.",
        href: "/services/election-software-management/",
        points: ["Bulk SMS and voice", "WhatsApp PDFs and audio", "Election software support"],
        proofStatus: "Owner-provided material available"
      },
      {
        title: "Digital wedding invitation setup",
        category: "Event communication proof",
        summary:
          "WhatsApp campaign, recorded voice invitation, number management, and digital invitation/location sharing for family events.",
        href: "/services/event-wedding-digital-invitations/",
        points: ["Voice invitation", "WhatsApp delivery", "Digital card and location"],
        proofStatus: "Instagram post proof available"
      },
      {
        title: "School admission video campaign",
        category: "Education marketing proof",
        summary:
          "Campus visit, promotional video shoot, scripting, and parent-facing admission communication for school growth.",
        href: "/services/school-admission-campaigns/",
        points: ["Campus shoot", "Admission messaging", "Parent trust content"],
        proofStatus: "Instagram post proof available"
      },
      {
        title: "Retail and automotive growth pitch",
        category: "Local business marketing proof",
        summary:
          "Business meetings and custom action plans for car detailing, car washing, supermarket, and retail growth campaigns.",
        href: "/services/retail-local-business-marketing/",
        points: ["Recording analysis", "Custom action plan", "Google and Meta ads"],
        proofStatus: "Instagram post proof available"
      }
    ],
    caseStudies: [
      {
        title: "Election promotion service rollout",
        category: "Source-backed case study",
        summary:
          "A structured election promotion plan covering high-volume outreach, campaign material, surveys, and field support.",
        challenge:
          "Campaign teams need fast voter communication, visible material, and clean coordination across online and offline channels.",
        response:
          "Chaitanya Media service material shows SMS, voice calls, WhatsApp, social promotion, LED van, surveys, print media, voter slips, and booth support as one campaign support plan.",
        proofStatus: "Banner proof is available; final client details should be added only after approval.",
        href: "/services/election-management/"
      },
      {
        title: "Voter outreach communication kit",
        category: "Election outreach proof path",
        summary:
          "A practical communication kit for Marathi and English SMS, recorded voice calls, WhatsApp assets, election software, and voter slips.",
        challenge:
          "Local campaigns often need multilingual communication, candidate-voice messaging, and fast voter-slip support near campaign deadlines.",
        response:
          "The current proof shows bulk SMS, bulk voice, WhatsApp posters/PDF/audio, election software, and voter-slip printer support.",
        proofStatus: "Proof is ready; publish a full case study only after approval.",
        href: "/services/election-software-management/"
      },
      {
        title: "Event invitation campaign setup",
        category: "Social proof case study",
        summary:
          "A practical event communication setup using WhatsApp, recorded voice calls, digital invitations, and location sharing.",
        challenge:
          "Families and event hosts need a faster way to invite guests, share details, and avoid manual calling.",
        response:
          "Chaitanya Media set up WhatsApp campaign delivery, voice-call invitation flow, number management, and digital card/location sharing.",
        proofStatus: "Instagram proof is available; client name and outcome numbers should be added only after approval.",
        href: "/services/event-wedding-digital-invitations/"
      },
      {
        title: "School admission video shoot",
        category: "Education campaign proof path",
        summary:
          "A campus-based admission video campaign to help schools explain admissions and build parent trust.",
        challenge:
          "Schools need to reach parents with clear admission communication, not only static posters.",
        response:
          "Chaitanya Media handled the campus visit, promotional video shoot, scripting direction, and admission campaign content.",
        proofStatus: "Instagram proof is available; school/client details should be added only after approval.",
        href: "/services/school-admission-campaigns/"
      },
      {
        title: "Local business growth presentation",
        category: "Retail and automotive proof path",
        summary:
          "Business pitch and custom action planning for local retailers and automotive service businesses.",
        challenge:
          "Local shops and service outlets need a clear plan for visibility, inquiries, and ad spend before campaigns start.",
        response:
          "Chaitanya Media prepared business meetings, recording analysis, custom action plans, Google Ads, Meta Ads, and local visibility direction.",
        proofStatus: "Instagram proof is available; final campaign results should be added only after approval.",
        href: "/services/retail-local-business-marketing/"
      }
    ],
    proofGalleryItems: [
      {
        title: "Election service menu",
        category: "Campaign material",
        image: "/images/campaign-materials/election-service-menu.jpg",
        alt: "Election promotion service menu banner from Chaitanya Media.",
        text: "Real service-menu creative showing election outreach, print, survey, technical, and field material capabilities."
      },
      {
        title: "Voter outreach banner",
        category: "Campaign material",
        image: "/images/campaign-materials/voter-outreach-banner.jpg",
        alt: "Voter outreach facilities banner from Chaitanya Media.",
        text: "Promotion banner showing SMS, voice call, WhatsApp, election software, and voter slip printer support."
      }
    ],
    testimonialSlots: [
      {
        audience: "Political campaign team",
        title: "Campaign coordination",
        text:
          "A strong testimonial here should cover election outreach, field material, WhatsApp/SMS coordination, and campaign support.",
        proofNeeded: "Owner-approved candidate or campaign-team testimonial needed"
      },
      {
        audience: "Real estate or local business owner",
        title: "Inquiry and follow-up clarity",
        text:
          "A strong testimonial here should cover inquiry quality, follow-up clarity, simple reporting, or local awareness.",
        proofNeeded: "Client name, role, and permission needed"
      },
      {
        audience: "Brand or founder",
        title: "Creative and content confidence",
        text:
          "A strong testimonial here should cover reels, social content, brand presentation, and consultation experience.",
        proofNeeded: "Approved quote and optional photo/logo needed"
      }
    ],
    trustCredentials: [
      {label: "Since 2020", detail: "Business timeline shown in the current Chaitanya Media source material."},
      {label: "Pune base", detail: "Shewalewadi, Pune presence for local and Maharashtra-focused campaigns."},
      {label: "Owner-provided proof", detail: "Campaign banners and service material are available for proof sections."},
      {label: "Live social proof", detail: "Recent Instagram posts show client meetings, event campaigns, school shoots, and local business pitches."},
      {label: "Claim-safe proof", detail: "Results, testimonials, and metrics are separated from unapproved placeholders."},
      {label: "Multilingual outreach", detail: "Campaign material supports Marathi and English voter communication."}
    ],
    compliancePoints: [
      {
        title: "Approved message content",
        text:
          "Campaign messages, posters, voice scripts, and WhatsApp assets should be approved before sending or publishing."
      },
      {
        title: "Responsible outreach",
        text:
          "SMS, voice, WhatsApp, and ad campaigns should use lawful lists, platform rules, sender identity, and opt-out expectations where applicable."
      },
      {
        title: "Sensitive data handling",
        text:
          "Do not upload voter lists, customer lists, passwords, payment details, or confidential documents through the public inquiry form."
      },
      {
        title: "No outcome guarantees",
        text:
          "Campaign performance depends on audience, message, timing, budget, competition, follow-up, and applicable election or platform rules."
      }
    ],
    blogPosts: [
      {
        slug: "digital-campaign-blueprint",
        title: "How to Plan a 30-Day Digital Campaign Blueprint",
        category: "Digital Marketing",
        date: "2026-06-20",
        readTime: "4 min read",
        excerpt:
          "A practical structure for turning campaign goals into channels, creatives, audiences, and follow-up actions.",
        sections: [
          {
            heading: "Start with one clear result",
            body: [
              "A campaign should not start with a random post calendar. It should start with a target: more walk-ins, more calls, more WhatsApp inquiries, more registrations, or more public awareness.",
              "Once the result is clear, the channel mix becomes easier to choose."
            ]
          },
          {
            heading: "Connect reach with follow-up",
            body: [
              "Ads, SMS, WhatsApp, social content, and landing pages should all point to a follow-up plan. Without follow-up, reach does not become revenue or influence.",
              "The campaign blueprint should define message, audience, budget, offer, lead route, and reporting cadence."
            ]
          }
        ]
      },
      {
        slug: "real-estate-lead-generation",
        title: "Real Estate Lead Generation Needs More Than Ads",
        category: "Real Estate Marketing",
        date: "2026-06-20",
        readTime: "4 min read",
        excerpt:
          "Why builders and developers need offer clarity, local targeting, fast follow-up, and trust content.",
        sections: [
          {
            heading: "The ad is only the first step",
            body: [
              "Real estate campaigns need the right geography, budget, creative, offer, landing flow, and lead qualification.",
              "A weak follow-up process can waste a good campaign."
            ]
          },
          {
            heading: "Trust brings better inquiries",
            body: [
              "Project details, location clarity, construction progress, pricing signals, and fast callbacks help leads move from curiosity to site visit.",
              "Marketing should support the sales team, not just generate names in a sheet."
            ]
          }
        ]
      },
      {
        slug: "election-digital-campaigns",
        title: "Digital Campaign Planning for Political Leaders",
        category: "Election Management",
        date: "2026-06-20",
        readTime: "5 min read",
        excerpt:
          "How political campaigns can use digital channels for reach, message discipline, volunteer coordination, and voter connection.",
        sections: [
          {
            heading: "Message discipline matters",
            body: [
              "Political communication needs clarity, frequency, and local relevance. Digital channels should reinforce the same core message across formats.",
              "Campaigns should plan audience segments, language, geography, creative formats, and response handling."
            ]
          },
          {
            heading: "Measure what can be measured",
            body: [
              "Reach, calls, WhatsApp inquiries, event registrations, and booth-level feedback can help decide what to do next.",
              "Digital work should support ground strategy, not replace it."
            ]
          }
        ]
      }
    ],
    legalPages: {
      "privacy-policy": {
        title: "Privacy Policy",
        description:
          "How Chaitanya Media handles inquiry and campaign communication data.",
        body: [
          "This website collects business inquiry information only for consultation, service discussion, and campaign planning purposes.",
          "Do not submit passwords, payment data, private voter data, confidential customer records, or sensitive campaign documents through public forms.",
          "Final privacy wording should be reviewed and approved by the business owner before the site goes live."
        ]
      },
      terms: {
        title: "Terms of Service",
        description: "Basic terms for using this website and requesting service discussions.",
        body: [
          "Information on this website is provided for service inquiry and business education purposes.",
          "Work details, budget, timeline, reporting, and payment terms should be confirmed in a separate written agreement.",
          "Marketing outcomes depend on audience, offer, budget, timing, content quality, competition, and follow-up."
        ]
      },
      "acceptable-use-policy": {
        title: "Acceptable Use Policy",
        description: "Responsible use expectations for campaign and marketing inquiries.",
        body: [
          "Do not use this website to request spam, impersonation, unlawful messaging, unauthorized data use, or deceptive campaign activity.",
          "Chaitanya Media may decline work that appears unsafe, unlawful, misleading, or outside responsible service scope."
        ]
      },
      "refund-policy": {
        title: "Refund Policy",
        description: "Refund and cancellation expectations for scoped campaign work.",
        body: [
          "Refund eligibility depends on the approved proposal, payment milestone, and work already completed.",
          "Media spends, third-party tool costs, creative work, consultation, and executed campaign work may be non-refundable depending on scope."
        ]
      },
      "cookie-policy": {
        title: "Cookie Policy",
        description: "How visitor statistics or inquiry tracking may be used on this website.",
        body: [
          "This website may use visitor statistics or inquiry tracking to understand which pages people use and how inquiries come in.",
          "Any live tracking, ad pixels, chat tools, or embedded services should be listed here before launch."
        ]
      },
      disclaimer: {
        title: "Disclaimer",
        description: "Important limitations around marketing, campaign, and advertising outcomes.",
        body: [
          "Marketing and campaign information on this website is educational and should not be treated as a guarantee of sales, votes, reach, leads, or revenue.",
          "Actual outcomes depend on market conditions, budget, audience, offer, content quality, timing, and follow-up."
        ]
      },
      "security-policy": {
        title: "Security Policy",
        description: "Safe handling expectations for website and campaign inquiries.",
        body: [
          "Public forms should not be used to share passwords, access tokens, payment data, private customer records, or confidential campaign files.",
          "Access should only be shared after scope, ownership, and authorization are confirmed."
        ]
      },
      "security-compliance": {
        title: "Security & Compliance",
        description: "Responsible data and campaign communication practices.",
        body: [
          "Campaign and marketing work should follow applicable platform, consent, privacy, and advertising rules.",
          "Messaging campaigns should use approved lists, responsible frequency, and clear business purpose."
        ]
      }
    },
    header: {
      ariaHome: "Chaitanya Media home",
      consultation: "Get Free Consultation",
      whatsapp: "Talk on WhatsApp",
      menu: "Open menu",
      themeLight: "Switch to light mode",
      themeDark: "Switch to dark mode"
    },
    footer: {
      description:
        "Digital marketing agency helping Indian businesses, schools, events, shops, and campaign teams get noticed and receive more inquiries.",
      contactHeading: "Contact",
      followHeading: "Follow Us",
      followText: "Follow the latest campaign content, social updates, and direct WhatsApp contact.",
      servicesHeading: "Services",
      companyHeading: "Company",
      resourcesHeading: "Resources",
      legalHeading: "Legal",
      companyLinks: [
        {label: "Home", href: "/"},
        {label: "About", href: "/about/"},
        {label: "Results & Proof", href: "/results/"},
        {label: "Blog", href: "/blog/"},
        {label: "Contact", href: "/contact/"}
      ],
      resourceLinks: [
        {label: "Agency Leadership", href: "/founder/"},
        {label: "All Services", href: "/services/"},
        {label: "Campaign Plan", href: "/blog/digital-campaign-blueprint/"},
        {label: "Real Estate Leads", href: "/blog/real-estate-lead-generation/"},
        {label: "Election Campaigns", href: "/blog/election-digital-campaigns/"}
      ],
      rights: "All rights reserved.",
      legalLinks: [
        {label: "Privacy", href: "/privacy-policy/"},
        {label: "Terms", href: "/terms/"},
        {label: "Disclaimer", href: "/disclaimer/"},
        {label: "Acceptable Use", href: "/acceptable-use-policy/"},
        {label: "Refund Policy", href: "/refund-policy/"},
        {label: "Cookie Policy", href: "/cookie-policy/"},
        {label: "Security Policy", href: "/security-policy/"},
        {label: "Security & Compliance", href: "/security-compliance/"}
      ]
    },
    home: {
      heroBadge: "Trusted by 100+ Brands & Leaders",
      heroTitle: {
        before: "Best Digital Marketing Agency in ",
        accentOne: "Pune",
        middle: " That ",
        accentTwo: "Builds Brands",
        after: " & Wins Elections"
      },
      heroCopy:
        "Websites, search visibility, ads, reels, SMS, WhatsApp, voice calls, invitations, admissions, and election promotion for Pune businesses.",
      primaryCta: "Talk to Chaitanya Media",
      secondaryCta: "View Services",
      aboutEyebrow: "Who we are",
      aboutTitleBefore: "A Results-Driven ",
      aboutTitleAccent: "Digital Agency",
      aboutParagraphs: [
        "Chaitanya Media helps local businesses, brands, and political teams promote their work in a clear and practical way.",
        "The focus is simple: help more people notice the business, understand the offer, send an inquiry, and get a timely follow-up."
      ],
      servicesEyebrow: "Our services",
      servicesTitleBefore: "What We ",
      servicesTitleAccent: "Do",
      industriesEyebrow: "Industries we serve",
      industriesTitleBefore: "Trusted Across ",
      industriesTitleAccent: "Industries",
      whyEyebrow: "Why choose us",
      whyTitleBefore: "Built for ",
      whyTitleAccent: "Results",
      clientsEyebrow: "Who we work with",
      clientsTitleBefore: "Our ",
      clientsTitleAccent: "Clients",
      resultsEyebrow: "Proof & results",
      resultsTitleBefore: "Numbers That ",
      resultsTitleAccent: "Speak",
      contactEyebrow: "Get in touch",
      contactTitleBefore: "Get Your Free ",
      contactTitleAccent: "Growth Blueprint",
      contactCopy:
        "Fill out the form and our team will get back to you within 24 hours with a clear action plan to grow your leads in the next 30 days.",
      form: {
        fullName: "Full Name *",
        fullNamePlaceholder: "Your name",
        businessName: "Business or campaign name",
        businessNamePlaceholder: "Brand, candidate, or organization",
        phone: "Phone *",
        phonePlaceholder: "+91 99999 99999",
        email: "ईमेल",
        emailPlaceholder: "you@email.com",
        location: "Target location",
        locationPlaceholder: "City, area, ward, or constituency",
        lookingFor: "Looking For *",
        selectService: "Select a service",
        timeline: "Timeline",
        selectTimeline: "Select timeline",
        timelineOptions: ["Immediately", "Within 2 weeks", "This month", "Planning stage"],
        budget: "Approx. budget",
        selectBudget: "Select budget range",
        budgetOptions: ["Need guidance", "Under ₹25,000", "₹25,000 - ₹1 lakh", "₹1 lakh+"],
        preferredContact: "Preferred contact",
        preferredContactOptions: ["WhatsApp", "Phone call", "Email"],
        message: "Message",
        messagePlaceholder: "Tell us about your goals...",
        submit: "Submit Request"
      },
      finalTitleBefore: "Ready to Grow Your ",
      finalTitleAccent: "Brand or Campaign?",
      finalCopy:
        "Share your service, area, and goal. Chaitanya Media will suggest the next practical step.",
      finalPhoneCta: "Book Free Consultation",
      finalWhatsappCta: "Talk on WhatsApp",
      reelsEyebrow: "Social proof",
      reelsTitle: "Real campaign videos from Chaitanya Media.",
      reelsText:
        "Tap a thumbnail to preview field work: client meetings, WhatsApp and voice campaigns, school admission shoots, local business pitches, and reporting proof. Full captions and more posts are on Instagram.",
      reelsProfileCta: "View More on Instagram",
      reelsOpenCta: "Open Reel",
      reelsActiveLabel: "Now playing",
      reelsPreviewLabel: "Preview reel",
      smoothEyebrow: "Easy browsing",
      smoothTitle: "A website should be simple to read, trust, and contact.",
      smoothText:
        "Most visitors will open this site on mobile. Every section is kept clear so Indian business owners and campaign teams can quickly understand the service and make an inquiry.",
      smoothCards: [
        {
          title: "Clear sections",
          text: "Services, proof, videos, and contact details are separated so the page is easy to scan."
        },
        {
          title: "Quick actions",
          text: "Buttons take people directly to services, WhatsApp, or the inquiry form without confusion."
        },
        {
          title: "Mobile first",
          text: "Headings, cards, forms, and videos stay readable on small screens."
        },
        {
          title: "Trust first",
          text: "The page shows services, work proof, and testimonials before asking for a call."
        }
      ],
      engineEyebrow: "Campaign plan",
      engineTitle: "Not random posts. A clear growth plan.",
      engineText:
        "Chaitanya Media plans the simple path: reach the right people, show proof, get inquiries, follow up, and improve using clear reports.",
      engineCards: [
        {
          title: "Reach",
          text: "Reels, posts, ads, SMS, WhatsApp, and voice calls that help more local people notice the business or campaign."
        },
        {
          title: "Inquiry",
          text: "Website pages, offers, forms, calls, IVR, and WhatsApp routes that make it easy for people to respond."
        },
        {
          title: "Trust",
          text: "Photos, videos, campaign material, reports, testimonials, and category-specific proof that make the work believable."
        },
        {
          title: "Follow-up",
          text: "Simple call, WhatsApp, missed-call, and response planning so interested people are not lost after the first click."
        }
      ],
      serviceStackEyebrow: "Services by goal",
      serviceStackTitle: "Choose services based on your goal.",
      serviceStackText:
        "Services are grouped in plain language so Indian business owners and campaign teams can quickly understand what fits their need.",
      serviceGroups: [
        {
          title: "Reach & Follow-up",
          text: "SMS, WhatsApp, email, voice calls, missed calls, and IVR for awareness, reminders, and inquiry response.",
          slugs: [
            "bulk-sms-marketing",
            "email-marketing",
            "voice-call-campaigns",
            "missed-call-alert",
            "ivr-solutions",
            "whatsapp-business-api"
          ]
        },
        {
          title: "Visibility & Leads",
          text: "Social media, Google and Instagram ads, Google search support, and local business campaigns to bring more attention and inquiries.",
          slugs: [
            "social-media-marketing",
            "google-meta-ads",
            "seo-services",
            "digital-marketing",
            "retail-local-business-marketing"
          ]
        },
        {
          title: "Website & Online Presence",
          text: "Websites that make the business look credible and ready for promotion.",
          slugs: ["web-designing", "web-development"]
        },
        {
          title: "Specialized Campaigns",
          text: "Focused promotion for elections, real estate, jewellery, weddings, schools, reels, and custom local advertising.",
          slugs: [
            "election-management",
            "real-estate-marketing",
            "jewellery-luxury-branding",
            "content-reel-production",
            "event-wedding-digital-invitations",
            "school-admission-campaigns",
            "customized-advertising"
          ]
        },
        {
          title: "Election Ground Support",
          text: "On-ground election support for surveys, voter slips, print material, video vans, and booth teams.",
          slugs: [
            "election-software-management",
            "booth-survey-voter-analysis",
            "voter-slip-booth-kit",
            "led-van-video-campaigns",
            "print-media-design",
            "election-material-supply"
          ]
        }
      ],
      systemEyebrow: "Clear campaign planning",
      systemTitle: "Right audience. Right message. Better inquiries.",
      systemText:
        "A business owner should not have to understand every channel. Chaitanya Media helps decide who to reach, what to say, where to promote, and how inquiries should be handled.",
      systemPills: ["Local businesses", "Real estate", "Political leaders", "Election work"],
      systemCapabilities: [
        {
          kicker: "01 Who to reach",
          title: "Know the right audience",
          text: "Before promotion starts, define the area, audience, offer, and inquiry path.",
          points: ["Area and audience map", "Competitor and category check", "Offer and message angle"]
        },
        {
          kicker: "02 Where to promote",
          title: "Pick the right channels",
          text: "Choose SMS, WhatsApp, Meta, Google, SEO, reels, admission videos, event invites, website, or IVR based on the goal.",
          points: ["Awareness channels", "Inquiry channels", "Follow-up and report channels"]
        },
        {
          kicker: "03 Inquiry handling",
          title: "Make response easy",
          text: "Calls, WhatsApp replies, forms, and missed calls should all have a clear route.",
          points: ["Landing page or form", "WhatsApp and phone route", "Missed-call and IVR options"]
        },
        {
          kicker: "04 Improve next time",
          title: "See what worked and improve",
          text: "Reports should help decide the next content, offer, area, and budget.",
          points: ["Reach and response review", "Inquiry quality check", "Next campaign priorities"]
        }
      ],
      workflowEyebrow: "How Chaitanya Media works",
      workflowTitle: "From first call to campaign launch.",
      workflowText:
        "A simple four-step process for local businesses, real estate teams, brands, and political campaigns.",
      workflowSteps: [
        {
          title: "First discussion",
          text: "We understand the goal, area, audience, current material, competitors, and urgency before suggesting services.",
          points: ["Goal and audience", "Competitor check", "Service shortlist"]
        },
        {
          title: "Prepare the material",
          text: "We prepare posts, reels, video shoots, invitation flows, website pages, ad setup, messages, and inquiry paths based on the plan.",
          points: ["Website pages", "Posts, shoots, and reels", "Inquiry and reporting paths"]
        },
        {
          title: "Launch the selected services",
          text: "The selected services go live across ads, social, SEO, SMS, WhatsApp, voice, or web depending on the plan.",
          points: ["Channel launch", "Lead capture", "Daily hygiene"]
        },
        {
          title: "Review and improve",
          text: "We review reach, inquiries, response gaps, and the next campaign priority.",
          points: ["Simple review", "Budget guidance", "Next 30-day plan"]
        }
      ],
      ugcEyebrow: "Video content",
      ugcTitle: "UGC content that turns attention into action.",
      ugcText:
        "Short vertical videos, founder clips, product demos, food reels, and campaign explainers can make the brand feel real before a customer ever calls.",
      ugcVideos: [
        {
          title: "First client meeting",
          category: "Business growth planning",
          src: "/videos/1.mp4",
          poster: "/images/Video%20Thumbnails/1.jpg"
        },
        {
          title: "Digital wedding invitation setup",
          category: "Voice + WhatsApp campaign",
          src: "/videos/2.mp4",
          poster: "/images/Video%20Thumbnails/2.jpg"
        },
        {
          title: "Live campaign reports",
          category: "WhatsApp + voice proof",
          src: "/videos/3.mp4",
          poster: "/images/Video%20Thumbnails/3.jpg"
        },
        {
          title: "School admission video shoot",
          category: "Video marketing",
          src: "/videos/4.mp4",
          poster: "/images/Video%20Thumbnails/4.jpg"
        },
        {
          title: "Car detailing growth meeting",
          category: "Google + Meta ads",
          src: "/videos/5.mp4",
          poster: "/images/Video%20Thumbnails/5.jpg"
        },
        {
          title: "Repeat wedding campaign setup",
          category: "Premium client trust",
          src: "/videos/6.mp4",
          poster: "/images/Video%20Thumbnails/6.jpg"
        },
        {
          title: "Supermarket growth pitch",
          category: "Retail marketing",
          src: "/videos/7.mp4",
          poster: "/images/Video%20Thumbnails/7.jpg"
        }
      ]
    },
    servicesPage: {
      metaTitle: "Digital Marketing Services in Pune",
      metaDescription:
        "SMS, WhatsApp, voice calls, digital wedding invitations, school admission campaigns, social media, Google and Instagram ads, websites, election support, and local business marketing in Pune.",
      eyebrow: "Services",
      title: "Services for business promotion and election campaigns.",
      copy:
        "Chaitanya Media offers SMS, WhatsApp, call campaigns, digital event invitations, admission videos, ads, social media, websites, local business growth campaigns, election support, booth surveys, voter slips, print material, LED van promotion, and campaign material. Each service is explained by what it helps you do.",
      menuEyebrow: "Service menu",
      menuTitle: "Choose the service or campaign support you need.",
      howEyebrow: "How Chaitanya Media works",
      howTitle: "First understand the need, then choose the service.",
      howText:
        "Promotion works better when the target area, audience, message, budget, and follow-up are planned together.",
      steps: [
        "Understand the business, location, audience, and goal.",
        "Choose only the services that fit the need.",
        "Prepare posts, ads, messages, calls, website pages, or print material.",
        "Review inquiries and improve the next step."
      ]
    },
    serviceDetail: {
      strategyCall: "Talk on WhatsApp",
      discussScope: "Ask for Details",
      whenHelpsEyebrow: "When this helps",
      whenHelpsTitle: "Useful when promotion feels confusing.",
      whenHelpsText:
        "We first understand who you want to reach, where you want to promote, what you want to say, and how inquiries should be handled.",
      includedEyebrow: "What Chaitanya Media does",
      includedTitle: "Simple work plan",
      includedText: "Final work depends on the selected service, budget, timeline, and area.",
      outcomesEyebrow: "What improves",
      outcomesTitle: "What this service should make clearer.",
      claimSafetyEyebrow: "Important note",
      claimSafetyTitle: "What this service cannot guarantee.",
      claimSafetyText:
        "Marketing can be planned and improved, but final results depend on audience, offer, budget, timing, competition, and follow-up.",
      processEyebrow: "How it works",
      processTitle: "A simple step-by-step process",
      processText:
        "Understand the need, choose the right service, start the work, then review what happened.",
      questionsEyebrow: "Questions",
      commonQuestionsPrefix: "Common questions about",
      relatedEyebrow: "Related services",
      relatedTitle: "Other services that may help.",
      viewService: "View service"
    },
    resultsPage: {
      metaTitle: "Campaign Results & Proof",
      metaDescription:
        "Work proof, campaign examples, client categories, and trust signals for Chaitanya Media.",
      schemaName: "Campaign Results & Proof",
      schemaDescription: "Campaign examples and client categories for Chaitanya Media.",
      eyebrow: "Proof & results",
      title: "Work proof that helps people trust Chaitanya Media.",
      copy:
        "This page shows the current trust signals, client categories, campaign material, and spaces where approved testimonials and examples can be added.",
      numbersEyebrow: "Numbers",
      numbersTitle: "Current trust numbers",
      clientsEyebrow: "Who we work with",
      clientsTitle: "Client categories Chaitanya Media can support.",
      clientsText:
        "As more approved examples are available, this section can show real work for each category.",
      trustEyebrow: "Trust markers",
      trustTitle: "Keep claims clear and honest.",
      trustText:
        "Public numbers and proof should be shown only when the business owner can confirm them.",
      proofCardText:
        "Back this with screenshots, reports, testimonials, or campaign records where possible.",
      caseStudiesEyebrow: "Case studies",
      caseStudiesTitle: "Real work stories without fake numbers.",
      caseStudiesText:
        "Each story should explain the client need, what Chaitanya Media did, and what proof is available. Client names and results can be added only after approval.",
      caseStudyNeedLabel: "गरज",
      caseStudyResponseLabel: "Chaitanya Media response",
      caseStudyCta: "Open service",
      galleryEyebrow: "Portfolio gallery",
      galleryTitle: "Show real assets, not only service names.",
      galleryText:
        "Use approved banners, reels, screenshots, and campaign examples so visitors can see the work.",
      credentialsEyebrow: "Trust credentials",
      credentialsTitle: "Details that make Chaitanya Media easier to trust.",
      credentialsText:
        "Show only business details, numbers, and examples that can be confirmed.",
      complianceEyebrow: "Responsible work",
      complianceTitle: "Safe campaign and messaging rules.",
      complianceText:
        "SMS, WhatsApp, voice calls, political work, and ads should be sent only with proper approval and responsible data use. This is not legal advice.",
      materialEyebrow: "Campaign material examples",
      materialTitle: "Real promotion assets, presented cleanly.",
      materialText:
        "These owner-provided banners show the kind of election promotion and offline campaign services Chaitanya Media has offered. On the new site, they are used as proof examples while the service story stays clean and modern.",
      materialNote:
        "Use these as examples only after approval. They do not guarantee results.",
      portfolioEyebrow: "Portfolio proof",
      portfolioTitle: "Show the work behind the services.",
      portfolioText:
        "Each service should be connected to visible work such as campaign material, reels, field work, website pages, or approved client examples.",
      portfolioCta: "View proof",
      testimonialsEyebrow: "Testimonials",
      testimonialsTitle: "Client feedback, added after approval.",
      testimonialsText:
        "Client quotes should be published only with permission and enough context.",
      finalEyebrow: "Start here",
      finalTitle: "Want help with your business or campaign promotion?",
      primaryCta: "Book Free Consultation",
      secondaryCta: "Contact Chaitanya Media"
    },
    aboutPage: {
      metaTitle: "About Chaitanya Media",
      metaDescription:
        "Chaitanya Media is a Pune digital marketing agency for local businesses, schools, retail shops, event campaigns, real estate teams, and political campaigns.",
      eyebrow: "About Chaitanya Media",
      title: "A digital marketing team for Indian businesses and campaigns.",
      copy:
        "Chaitanya Media helps local businesses, brands, and political teams promote their work, receive more inquiries, and follow up with people more clearly.",
      introEyebrow: "Who we are",
      introTitle: "Marketing should move people to action.",
      introText:
        "The work is practical: reach the right people, say the right message, collect inquiries, and follow up on time.",
      finalEyebrow: "Next",
      finalTitle: "Start with a simple discussion.",
      servicesCta: "View Services",
      whatsappCta: "Talk on WhatsApp"
    },
    founderPage: {
      metaTitle: "Agency Leadership",
      metaDescription:
        "Chaitanya Media is a Pune digital marketing agency for brands, businesses, and campaign teams.",
      eyebrow: "Agency leadership",
      title: "Practical promotion support for businesses and leaders.",
      copy:
        "Chaitanya Media supports business growth, local inquiries, and political promotion with clear digital and field services.",
      positioningEyebrow: "Positioning",
      positioningTitle: "Built around reach, inquiries, trust, and follow-up.",
      positioningText:
        "Chaitanya Media focuses on business promotion, election promotion, content, websites, ads, SMS, WhatsApp, event invitations, admission campaigns, reporting, and follow-up support.",
      proofEyebrow: "Core proof areas",
      proofTitle: "What the agency should prove over time.",
      proofCards: [
        {
          title: "Campaign results",
          text: "Reach, inquiries, and simple report screenshots where approved."
        },
        {
          title: "Creative work",
          text: "Ads, reels, shoots, invitations, WhatsApp messages, and campaign material."
        },
        {
          title: "Client categories",
          text: "Political leaders, schools, retailers, event hosts, automotive shops, builders, and local businesses."
        }
      ]
    },
    blogPage: {
      metaTitle: "Digital Marketing Blog",
      metaDescription:
        "Practical articles about campaign planning, real estate leads, election campaigns, and local business growth.",
      eyebrow: "Knowledge base",
      title: "Practical digital marketing and campaign guidance.",
      copy:
        "Articles explain common promotion problems in simple language for business owners and campaign teams.",
      topicsEyebrow: "Topics",
      topicsTitle: "Common questions from clients.",
      articlesEyebrow: "Articles",
      articlesTitle: "Useful posts for business owners and campaign teams",
      articlesText:
        "Each post should answer one practical question and help the reader decide the next step.",
      readArticle: "Read article",
      editorialEyebrow: "Editorial rule",
      editorialTitle: "Write for decisions, not just traffic.",
      editorialText:
        "The blog should avoid generic marketing filler. Each article should help a reader understand a campaign problem, decision, or next step.",
      editorialPoints: [
        "Support core service pages",
        "Use plain business language",
        "Avoid impossible outcome guarantees",
        "Include a practical consultation CTA"
      ]
    },
    blogPostPage: {
      nextEyebrow: "Next step",
      nextTitle: "Need a campaign plan for this?",
      nextText:
        "Share your business, location, audience, and goal. Chaitanya Media can suggest the next practical step.",
      requestCta: "Ask for a Plan",
      moreArticles: "More Articles",
      authorName: "Chaitanya Suhas Jadhav"
    },
    contactPage: {
      metaTitle: "Contact Chaitanya Media",
      metaDescription:
        "Contact Chaitanya Media for digital marketing, ads, SMS, WhatsApp, voice calls, event invitations, admission campaigns, retail marketing, websites, or election campaigns.",
      eyebrow: "Contact",
      title: "Tell us what you need.",
      copy:
        "Share your business, location, service need, and goal. Chaitanya Media will respond with the next practical step.",
      fastEyebrow: "Fast contact",
      fastTitle: "Choose the best channel.",
      fastText:
        "Use WhatsApp for fast campaign discussion, phone for consultation, or email for written scope.",
      cards: {
        whatsappTitle: "WhatsApp Consultation",
        whatsappText: "Best for quick campaign and growth discussion.",
        phoneText: "Call for ads, SMS, WhatsApp, websites, and campaign services.",
        emailTitle: "Email Inquiry",
        emailText: "Send project context, campaign goals, and written scope."
      },
      requestEyebrow: "Growth request",
      requestTitle: "Send the basics first.",
      requestText:
        "This form uses email handoff for v1. A backend can be added later after confirming the destination, spam handling, and data-retention rules.",
      alertText:
        "Do not include passwords, payment data, private customer lists, or confidential campaign documents in this public form.",
      form: {
        name: "Name",
        business: "Business or campaign name",
        phone: "Phone",
        email: "Email",
        location: "Target location",
        service: "Service needed",
        selectService: "Select a service",
        timeline: "Timeline",
        selectTimeline: "Select timeline",
        timelineOptions: ["Immediately", "Within 2 weeks", "This month", "Planning stage"],
        budget: "Approx. budget",
        selectBudget: "Select budget range",
        budgetOptions: ["Need guidance", "Under ₹25,000", "₹25,000 - ₹1 lakh", "₹1 lakh+"],
        preferredContact: "Preferred contact",
        preferredContactOptions: ["WhatsApp", "Phone call", "Email"],
        goal: "Campaign goal",
        consent:
          "I understand this is an inquiry form and will not upload confidential lists, passwords, payment data, or private campaign documents.",
        submit: "Submit Request"
      }
    },
    thankYouPage: {
      metaTitle: "Thank You",
      metaDescription: "Thank you for contacting Chaitanya Media.",
      eyebrow: "Thank you",
      title: "Your request has been received.",
      copy: "Chaitanya Media will review the message and follow up through the contact channel provided.",
      cta: "Back to Home"
    },
    notFoundPage: {
      eyebrow: "404",
      title: "This page is not available.",
      copy:
        "The page may have moved during the Chaitanya Media rebuild. Start from the homepage or the services page.",
      home: "Home",
      services: "Services"
    },
    legalEyebrow: "Policy"
  },
  mr: {
    locale: "mr",
    site: {
      ...siteBase,
      description:
        "Pune मधील digital marketing agency जी Indian businesses, schools, retailers, event families, local service brands आणि political campaigns ना notice होण्यासाठी आणि inquiries मिळवण्यासाठी मदत करते.",
      location: "Shewalewadi, Pune"
    },
    socialLinks,
    featuredReels,
    navItems: [
      {label: "आमच्याबद्दल", href: "/#about"},
      {label: "सेवा", href: "/services/"},
      {label: "का आम्ही", href: "/#why-us"},
      {label: "परिणाम", href: "/#results"},
      {label: "संपर्क", href: "/#contact"}
    ],
    heroStats: [
      {value: "150+", label: "Satisfied Clients"},
      {value: "10M+", label: "Digital Reach"},
      {value: "24/7", label: "Support"},
      {value: "100%", label: "Transparent Pricing"}
    ],
    trustMarkers: [
      "150+ Satisfied Clients",
      "10M+ Digital Reach",
      "24/7 Support",
      "100% Transparent Pricing"
    ],
    services: makeServices("mr", mrServiceSource),
    agencyStrengths: [
      {
        title: "Clear Planning",
        text: "प्रत्येक campaign area, audience, message, budget आणि follow-up plan पासून सुरू होते."
      },
      {
        title: "Practical Content",
        text: "Client meetings, shoots, reels, posters, invitations आणि ads offer clear पद्धतीने explain करण्यासाठी बनवले जातात."
      },
      {
        title: "Business आणि Election Support",
        text: "Chaitanya Media schools, shops, service businesses, events, real estate teams आणि political campaigns ला support करते."
      }
    ],
    industries: [
      "रिअल इस्टेट",
      "Schools आणि Institutes",
      "Retail आणि Supermarkets",
      "Automotive Services",
      "Healthcare",
      "Weddings आणि Events",
      "Jewellery आणि Luxury",
      "Food आणि Cafés",
      "Political Campaigns",
      "Travel & Tourism",
      "Legal Services",
      "Manufacturing"
    ],
    whyChooseUs: [
      "Clear service explanation",
      "प्रत्येक business किंवा campaign साठी plan",
      "Simple reporting आणि honest expectations",
      "Business आणि election promotion मधील experience"
    ],
    clientTypes: [
      "Political Leaders आणि Parties",
      "Real Estate Builders",
      "Jewellery Showrooms",
      "Schools आणि Coaching Institutes",
      "Retail आणि Automotive Businesses",
      "Wedding आणि Event Hosts"
    ],
    resultStats: [
      {value: "10M+", label: "Digital Reach Generated"},
      {value: "100+", label: "Campaigns Executed"},
      {value: "Pan India", label: "Maharashtra आणि त्यापुढील clients"}
    ],
    campaignMaterialExamples: [
      {
        title: "Election campaign service menu",
        category: "Campaign service proof",
        image: "/images/campaign-materials/election-service-menu.jpg",
        alt: "Chaitanya Media election promotion service banner showing SMS, voice call, WhatsApp, social media, technical, survey, print, and election material services.",
        points: [
          "Bulk SMS, voice calls, WhatsApp, Facebook आणि Instagram advertising",
          "LED van, documentary films, campaign videos आणि social promotion",
          "Booth surveys, voter analysis, print media, voter slips आणि campaign material"
        ]
      },
      {
        title: "Voter outreach facilities",
        category: "Election outreach example",
        image: "/images/campaign-materials/voter-outreach-banner.jpg",
        alt: "Chaitanya Media voter outreach banner showing SMS, voice call, WhatsApp, election software, and voter slip printer services.",
        points: [
          "Marathi आणि English bulk SMS outreach",
          "Candidate च्या आवाजातील recorded bulk voice calls",
          "WhatsApp poster, PDF, audio message, election software आणि voter slip printer support"
        ]
      }
    ],
    portfolioItems: [
      {
        title: "निवडणूक प्रचार field kit",
        category: "राजकीय मोहीम ऑपरेशन्स",
        summary:
          "SMS, voice calls, WhatsApp, booth support, print material आणि field promotion cover करणारा campaign-ready service set.",
        href: "/services/election-management/",
        points: ["SMS, voice, WhatsApp", "Booth आणि voter support", "Print आणि field material"],
        proofStatus: "Banner-backed service proof उपलब्ध"
      },
      {
        title: "मतदार संपर्क communication support",
        category: "निवडणूक technology",
        summary:
          "Marathi आणि English SMS, candidate voice recordings, WhatsApp assets, election software आणि voter-slip printing साठी outreach flow.",
        href: "/services/election-software-management/",
        points: ["Bulk SMS आणि voice", "WhatsApp PDFs आणि audio", "Election software support"],
        proofStatus: "Owner-provided material उपलब्ध"
      },
      {
        title: "Digital wedding invitation setup",
        category: "Event communication proof",
        summary:
          "Family events साठी WhatsApp campaign, recorded voice invitation, number management आणि digital invitation/location sharing.",
        href: "/services/event-wedding-digital-invitations/",
        points: ["Voice invitation", "WhatsApp delivery", "Digital card आणि location"],
        proofStatus: "Instagram post proof उपलब्ध"
      },
      {
        title: "School admission video campaign",
        category: "Education marketing proof",
        summary:
          "School growth साठी campus visit, promotional video shoot, scripting आणि parent-facing admission communication.",
        href: "/services/school-admission-campaigns/",
        points: ["Campus shoot", "Admission messaging", "Parent trust content"],
        proofStatus: "Instagram post proof उपलब्ध"
      },
      {
        title: "Retail आणि automotive growth pitch",
        category: "Local business marketing proof",
        summary:
          "Car detailing, car washing, supermarket आणि retail growth campaigns साठी business meetings आणि custom action plans.",
        href: "/services/retail-local-business-marketing/",
        points: ["Recording analysis", "Custom action plan", "Google आणि Meta ads"],
        proofStatus: "Instagram post proof उपलब्ध"
      }
    ],
    caseStudies: [
      {
        title: "निवडणूक प्रचार सेवा rollout",
        category: "Source-backed case study",
        summary:
          "High-volume outreach, campaign material, surveys आणि field support cover करणारा structured election promotion plan.",
        challenge:
          "Campaign teams ना online आणि offline channels मध्ये fast voter communication, visible material आणि clean coordination लागते.",
        response:
          "Chaitanya Media service material मध्ये SMS, voice calls, WhatsApp, social promotion, LED van, surveys, print media, voter slips आणि booth support एक campaign support plan म्हणून दिसते.",
        proofStatus: "Banner proof उपलब्ध आहे; final client details approval नंतरच add करावेत.",
        href: "/services/election-management/"
      },
      {
        title: "मतदार संपर्क communication kit",
        category: "Election outreach proof path",
        summary:
          "Marathi आणि English SMS, recorded voice calls, WhatsApp assets, election software आणि voter slips साठी practical communication kit.",
        challenge:
          "Local campaigns ना multilingual communication, candidate-voice messaging आणि deadline जवळ voter-slip support लागते.",
        response:
          "Current proof bulk SMS, bulk voice, WhatsApp posters/PDF/audio, election software आणि voter-slip printer support दाखवतो.",
        proofStatus: "Proof ready आहे; full case study approval नंतरच publish करा.",
        href: "/services/election-software-management/"
      },
      {
        title: "Event invitation campaign setup",
        category: "Social proof case study",
        summary:
          "WhatsApp, recorded voice calls, digital invitations आणि location sharing वापरणारा practical event communication setup.",
        challenge:
          "Families आणि event hosts ना guests invite करणे, details share करणे आणि manual calling कमी करणे गरजेचे असते.",
        response:
          "Chaitanya Media ने WhatsApp campaign delivery, voice-call invitation flow, number management आणि digital card/location sharing setup केले.",
        proofStatus: "Instagram proof उपलब्ध आहे; client name आणि outcome numbers approval नंतरच add करावेत.",
        href: "/services/event-wedding-digital-invitations/"
      },
      {
        title: "School admission video shoot",
        category: "Education campaign proof path",
        summary:
          "School admissions explain करण्यासाठी आणि parent trust build करण्यासाठी campus-based admission video campaign.",
        challenge:
          "Schools ना static posters पेक्षा clear admission communication आणि parent trust content लागते.",
        response:
          "Chaitanya Media ने campus visit, promotional video shoot, scripting direction आणि admission campaign content handle केले.",
        proofStatus: "Instagram proof उपलब्ध आहे; school/client details approval नंतरच add करावेत.",
        href: "/services/school-admission-campaigns/"
      },
      {
        title: "Local business growth presentation",
        category: "Retail आणि automotive proof path",
        summary:
          "Local retailers आणि automotive service businesses साठी business pitch आणि custom action planning.",
        challenge:
          "Local shops आणि service outlets ना visibility, inquiries आणि ad spend साठी campaign आधी clear plan लागतो.",
        response:
          "Chaitanya Media ने business meetings, recording analysis, custom action plans, Google Ads, Meta Ads आणि local visibility direction तयार केले.",
        proofStatus: "Instagram proof उपलब्ध आहे; final campaign results approval नंतरच add करावेत.",
        href: "/services/retail-local-business-marketing/"
      }
    ],
    proofGalleryItems: [
      {
        title: "निवडणूक सेवा menu",
        category: "Campaign material",
        image: "/images/campaign-materials/election-service-menu.jpg",
        alt: "Chaitanya Media निवडणूक promotion service menu banner.",
        text: "Election outreach, print, survey, technical आणि field material capabilities दाखवणारी real service-menu creative."
      },
      {
        title: "मतदार संपर्क banner",
        category: "Campaign material",
        image: "/images/campaign-materials/voter-outreach-banner.jpg",
        alt: "Chaitanya Media voter outreach facilities banner.",
        text: "SMS, voice call, WhatsApp, election software आणि voter slip printer support दाखवणारा promotion banner."
      }
    ],
    testimonialSlots: [
      {
        audience: "Political campaign team",
        title: "Campaign coordination",
        text:
          "Strong testimonial मध्ये election outreach, field material, WhatsApp/SMS coordination आणि campaign support cover व्हायला हवे.",
        proofNeeded: "Owner-approved candidate किंवा campaign-team testimonial needed"
      },
      {
        audience: "Real estate किंवा local business owner",
        title: "Inquiry आणि follow-up clarity",
        text:
          "Strong testimonial मध्ये inquiry quality, follow-up clarity, simple reporting किंवा local awareness cover व्हायला हवे.",
        proofNeeded: "Client name, role आणि permission needed"
      },
      {
        audience: "Brand किंवा founder",
        title: "Creative आणि content confidence",
        text:
          "Strong testimonial मध्ये reels, social content, brand presentation आणि consultation experience cover व्हायला हवे.",
        proofNeeded: "Approved quote आणि optional photo/logo needed"
      }
    ],
    trustCredentials: [
      {label: "Since 2020", detail: "Current Chaitanya Media source material मध्ये दाखवलेला business timeline."},
      {label: "Pune base", detail: "Local आणि Maharashtra-focused campaigns साठी Shewalewadi, Pune presence."},
      {label: "Owner-provided proof", detail: "Proof sections साठी campaign banners आणि service material available आहे."},
      {label: "Live social proof", detail: "Recent Instagram posts मध्ये client meetings, event campaigns, school shoots आणि local business pitches दिसतात."},
      {label: "Claim-safe proof", detail: "Results, testimonials आणि metrics unapproved placeholders पासून वेगळे ठेवले आहेत."},
      {label: "Multilingual outreach", detail: "Campaign material Marathi आणि English voter communication support करते."}
    ],
    compliancePoints: [
      {
        title: "Approved message content",
        text:
          "Campaign messages, posters, voice scripts आणि WhatsApp assets send किंवा publish करण्याआधी approve व्हायला हवेत."
      },
      {
        title: "Responsible outreach",
        text:
          "SMS, voice, WhatsApp आणि ad campaigns मध्ये lawful lists, platform rules, sender identity आणि opt-out expectations जिथे लागू होतात तिथे follow करा."
      },
      {
        title: "Sensitive data handling",
        text:
          "Public inquiry form मधून voter lists, customer lists, passwords, payment details किंवा confidential documents upload करू नका."
      },
      {
        title: "No outcome guarantees",
        text:
          "Campaign performance audience, message, timing, budget, competition, follow-up आणि applicable election/platform rules वर depend करते."
      }
    ],
    blogPosts: [
      {
        slug: "digital-campaign-blueprint",
        title: "30 दिवसांचा Digital Campaign Blueprint कसा plan करावा",
        category: "Digital Marketing",
        date: "2026-06-20",
        readTime: "4 min read",
        excerpt:
          "Campaign goals चे channels, creatives, audiences आणि follow-up actions मध्ये रूपांतर करण्यासाठी practical structure.",
        sections: [
          {
            heading: "एका clear result पासून सुरुवात करा",
            body: [
              "Campaign random post calendar पासून सुरू होऊ नये. Target पासून सुरू व्हावा: अधिक walk-ins, calls, WhatsApp inquiries, registrations किंवा public awareness.",
              "Result clear झाल्यावर channel mix निवडणे सोपे होते."
            ]
          },
          {
            heading: "Reach ला follow-up सोबत जोडा",
            body: [
              "Ads, SMS, WhatsApp, social content आणि landing pages यांनी follow-up plan कडेच lead करायला हवे. Follow-up नसल्यास reach revenue किंवा influence मध्ये बदलत नाही.",
              "Campaign blueprint मध्ये message, audience, budget, offer, lead route आणि reporting cadence define असायला हवे."
            ]
          }
        ]
      },
      {
        slug: "real-estate-lead-generation",
        title: "Real Estate Lead Generation ला फक्त Ads पुरेसे नसतात",
        category: "Real Estate Marketing",
        date: "2026-06-20",
        readTime: "4 min read",
        excerpt:
          "Builders आणि developers ला offer clarity, local targeting, fast follow-up आणि trust content का गरजेचे आहे.",
        sections: [
          {
            heading: "Ad ही फक्त पहिली step आहे",
            body: [
              "Real estate campaigns मध्ये योग्य geography, budget, creative, offer, landing flow आणि lead qualification लागते.",
              "कमकुवत follow-up process चांगला campaign waste करू शकतो."
            ]
          },
          {
            heading: "Trust चांगल्या inquiries आणतो",
            body: [
              "Project details, location clarity, construction progress, pricing signals आणि fast callbacks leads ला curiosity पासून site visit पर्यंत नेतात.",
              "Marketing ने sales team ला support करायला हवे, फक्त sheet मध्ये names generate करायला नाही."
            ]
          }
        ]
      },
      {
        slug: "election-digital-campaigns",
        title: "Political Leaders साठी Digital Campaign Planning",
        category: "Election Management",
        date: "2026-06-20",
        readTime: "5 min read",
        excerpt:
          "Political campaigns digital channels वापरून reach, message discipline, volunteer coordination आणि voter connection कसे वाढवू शकतात.",
        sections: [
          {
            heading: "Message discipline महत्त्वाचे आहे",
            body: [
              "Political communication मध्ये clarity, frequency आणि local relevance लागते. Digital channels नी formats बदलले तरी same core message reinforce करायला हवा.",
              "Campaigns नी audience segments, language, geography, creative formats आणि response handling plan करायला हवे."
            ]
          },
          {
            heading: "जे measure करता येते ते measure करा",
            body: [
              "Reach, calls, WhatsApp inquiries, event registrations आणि booth-level feedback पुढे काय करायचे ते decide करायला मदत करू शकतात.",
              "Digital work ground strategy ला support करायला हवे, replace करायला नाही."
            ]
          }
        ]
      }
    ],
    legalPages: {
      "privacy-policy": {
        title: "Privacy Policy",
        description: "Chaitanya Media inquiry आणि campaign communication data कसा handle करते.",
        body: [
          "ही website business inquiry information फक्त consultation, service discussion आणि campaign planning साठी collect करते.",
          "Public forms मध्ये passwords, payment data, private voter data, confidential customer records किंवा sensitive campaign documents submit करू नका.",
          "Production launch पूर्वी final privacy wording business owner ने review आणि approve करावी."
        ]
      },
      terms: {
        title: "Terms of Service",
        description: "ही website वापरणे आणि service discussions request करण्यासाठी basic terms.",
        body: [
          "या website वरील information service inquiry आणि business education purposes साठी आहे.",
          "Work details, budget, timeline, reporting आणि payment terms separate written agreement मध्ये confirm करायला हवेत.",
          "Marketing outcomes audience, offer, budget, timing, content quality, competition आणि follow-up वर अवलंबून असतात."
        ]
      },
      "acceptable-use-policy": {
        title: "Acceptable Use Policy",
        description: "Campaign आणि marketing inquiries साठी responsible use expectations.",
        body: [
          "Spam, impersonation, unlawful messaging, unauthorized data use किंवा deceptive campaign activity request करण्यासाठी ही website वापरू नका.",
          "Unsafe, unlawful, misleading किंवा responsible service scope बाहेरील काम Chaitanya Media decline करू शकते."
        ]
      },
      "refund-policy": {
        title: "Refund Policy",
        description: "Scoped campaign work साठी refund आणि cancellation expectations.",
        body: [
          "Refund eligibility approved proposal, payment milestone आणि आधी पूर्ण झालेल्या work वर अवलंबून असते.",
          "Media spends, third-party tool costs, creative work, consultation आणि executed campaign work scope नुसार non-refundable असू शकते."
        ]
      },
      "cookie-policy": {
        title: "Cookie Policy",
        description: "या website वर visitor statistics किंवा inquiry tracking कसे वापरले जाऊ शकते.",
        body: [
          "ही website लोक कोणती pages वापरतात आणि inquiries कशा येतात हे समजण्यासाठी visitor statistics किंवा inquiry tracking वापरू शकते.",
          "Live tracking, ad pixels, chat tools किंवा embedded services launch आधी इथे list करावेत."
        ]
      },
      disclaimer: {
        title: "Disclaimer",
        description: "Marketing, campaign आणि advertising outcomes बाबत important limitations.",
        body: [
          "या website वरील marketing आणि campaign information educational आहे; sales, votes, reach, leads किंवा revenue ची guarantee म्हणून वापरू नये.",
          "Actual outcomes market conditions, budget, audience, offer, content quality, timing आणि follow-up वर अवलंबून असतात."
        ]
      },
      "security-policy": {
        title: "Security Policy",
        description: "Website आणि campaign inquiries साठी safe handling expectations.",
        body: [
          "Public forms मध्ये passwords, access tokens, payment data, private customer records किंवा confidential campaign files share करू नका.",
          "Scope, ownership आणि authorization confirm झाल्यानंतरच access share करावा."
        ]
      },
      "security-compliance": {
        title: "Security & Compliance",
        description: "Responsible data आणि campaign communication practices.",
        body: [
          "Campaign आणि marketing work ने applicable platform, consent, privacy आणि advertising rules follow करायला हवेत.",
          "Messaging campaigns approved lists, responsible frequency आणि clear business purpose सोबत वापरावेत."
        ]
      }
    },
    header: {
      ariaHome: "Chaitanya Media home",
      consultation: "Free Consultation घ्या",
      whatsapp: "WhatsApp वर बोला",
      menu: "Menu उघडा",
      themeLight: "Light mode करा",
      themeDark: "Dark mode करा"
    },
    footer: {
      description:
        "Indian businesses, schools, events, shops आणि campaign teams ला notice होण्यासाठी आणि अधिक inquiries मिळवण्यासाठी मदत करणारी digital marketing agency.",
      contactHeading: "Contact",
      followHeading: "Follow Us",
      followText: "Latest campaign content, social updates आणि direct WhatsApp contact साठी follow करा.",
      servicesHeading: "Services",
      companyHeading: "Company",
      resourcesHeading: "Resources",
      legalHeading: "Legal",
      companyLinks: [
        {label: "Home", href: "/"},
        {label: "About", href: "/about/"},
        {label: "Results आणि Proof", href: "/results/"},
        {label: "Blog", href: "/blog/"},
        {label: "Contact", href: "/contact/"}
      ],
      resourceLinks: [
        {label: "Agency Leadership", href: "/founder/"},
        {label: "All Services", href: "/services/"},
        {label: "Campaign Blueprint", href: "/blog/digital-campaign-blueprint/"},
        {label: "Real Estate Leads", href: "/blog/real-estate-lead-generation/"},
        {label: "Election Campaigns", href: "/blog/election-digital-campaigns/"}
      ],
      rights: "All rights reserved.",
      legalLinks: [
        {label: "Privacy", href: "/privacy-policy/"},
        {label: "Terms", href: "/terms/"},
        {label: "Disclaimer", href: "/disclaimer/"},
        {label: "Acceptable Use", href: "/acceptable-use-policy/"},
        {label: "Refund Policy", href: "/refund-policy/"},
        {label: "Cookie Policy", href: "/cookie-policy/"},
        {label: "Security Policy", href: "/security-policy/"},
        {label: "Security & Compliance", href: "/security-compliance/"}
      ]
    },
    home: {
      heroBadge: "100+ Brands आणि Leaders चा विश्वास",
      heroTitle: {
        before: "Pune मधील Best Digital Marketing Agency जी ",
        accentOne: "Brands Build",
        middle: " करते आणि ",
        accentTwo: "Elections",
        after: " जिंकण्यासाठी मदत करते"
      },
      heroCopy:
        "Pune businesses साठी websites, search visibility, ads, reels, SMS, WhatsApp, voice calls, invitations, admissions आणि election promotion.",
      primaryCta: "Chaitanya Media शी बोला",
      secondaryCta: "Services पहा",
      aboutEyebrow: "आम्ही कोण",
      aboutTitleBefore: "Results-Driven ",
      aboutTitleAccent: "Digital Agency",
      aboutParagraphs: [
        "Chaitanya Media local businesses, brands आणि political teams ला clear आणि practical पद्धतीने promotion करण्यात मदत करते.",
        "Focus simple आहे: जास्त लोकांनी business notice करणे, offer समजणे, inquiry पाठवणे आणि timely follow-up मिळणे."
      ],
      servicesEyebrow: "आमच्या सेवा",
      servicesTitleBefore: "आम्ही काय ",
      servicesTitleAccent: "करतो",
      industriesEyebrow: "Industries we serve",
      industriesTitleBefore: "अनेक ",
      industriesTitleAccent: "Industries मध्ये विश्वास",
      whyEyebrow: "आम्हाला का निवडावे",
      whyTitleBefore: "Results साठी ",
      whyTitleAccent: "Built",
      clientsEyebrow: "Who we work with",
      clientsTitleBefore: "आमचे ",
      clientsTitleAccent: "Clients",
      resultsEyebrow: "Proof आणि results",
      resultsTitleBefore: "बोलणारे ",
      resultsTitleAccent: "Numbers",
      contactEyebrow: "संपर्क करा",
      contactTitleBefore: "तुमचा Free ",
      contactTitleAccent: "Growth Blueprint घ्या",
      contactCopy:
        "Form भरा आणि आमची team 24 तासांत तुम्हाला पुढील 30 दिवसांत leads वाढवण्यासाठी clear action plan सह respond करेल.",
      form: {
        fullName: "Full Name *",
        fullNamePlaceholder: "आपले नाव",
        businessName: "Business किंवा campaign नाव",
        businessNamePlaceholder: "Brand, candidate किंवा organization",
        phone: "Phone *",
        phonePlaceholder: "+91 99999 99999",
        email: "ईमेल",
        emailPlaceholder: "you@email.com",
        location: "लक्ष्य ठिकाण",
        locationPlaceholder: "शहर, area, ward किंवा constituency",
        lookingFor: "कशासाठी हवे आहे *",
        selectService: "Service निवडा",
        timeline: "वेळापत्रक",
        selectTimeline: "वेळापत्रक निवडा",
        timelineOptions: ["लगेच", "2 आठवड्यांत", "या महिन्यात", "योजना टप्पा"],
        budget: "अंदाजे budget",
        selectBudget: "Budget range निवडा",
        budgetOptions: ["मार्गदर्शन पाहिजे", "₹25,000 खाली", "₹25,000 - ₹1 lakh", "₹1 lakh+"],
        preferredContact: "पसंतीचा संपर्क",
        preferredContactOptions: ["WhatsApp", "फोन कॉल", "ईमेल"],
        message: "मेसेज",
        messagePlaceholder: "तुमचे goals सांगा...",
        submit: "Request Submit करा"
      },
      finalTitleBefore: "तुमचा ",
      finalTitleAccent: "Brand किंवा Campaign वाढवायला तयार?",
      finalCopy:
        "तुमची service, area आणि goal share करा. Chaitanya Media next practical step suggest करेल.",
      finalPhoneCta: "Free Consultation Book करा",
      finalWhatsappCta: "WhatsApp वर बोला",
      reelsEyebrow: "Social proof",
      reelsTitle: "Chaitanya Media चे real campaign videos.",
      reelsText:
        "Thumbnail tap करून client meetings, WhatsApp आणि voice campaigns, school admission shoots, local business pitches आणि reporting proof preview करा. Full captions आणि अधिक posts Instagram वर आहेत.",
      reelsProfileCta: "Instagram वर आणखी पहा",
      reelsOpenCta: "Reel उघडा",
      reelsActiveLabel: "आता चालू",
      reelsPreviewLabel: "Reel preview करा",
      smoothEyebrow: "Easy browsing",
      smoothTitle: "Website वाचायला, trust करायला आणि contact करायला simple असली पाहिजे.",
      smoothText:
        "बहुतेक visitors mobile वरून website पाहतील. त्यामुळे प्रत्येक section clear ठेवला आहे, जेणेकरून Indian business owners आणि campaign teams service पटकन समजू शकतील.",
      smoothCards: [
        {
          title: "Clear sections",
          text: "Services, proof, videos आणि contact details वेगळे ठेवले आहेत, त्यामुळे page scan करणे सोपे जाते."
        },
        {
          title: "Quick actions",
          text: "Buttons लोकांना directly services, WhatsApp किंवा inquiry form कडे घेऊन जातात."
        },
        {
          title: "Mobile first",
          text: "Small screen वर headings, cards, forms आणि videos readable राहतात."
        },
        {
          title: "Trust first",
          text: "Call मागण्याआधी page services, work proof आणि testimonials दाखवते."
        }
      ],
      engineEyebrow: "Campaign plan",
      engineTitle: "Random posts नाही. Clear growth plan.",
      engineText:
        "Chaitanya Media simple path plan करते: योग्य लोकांपर्यंत पोहोचणे, proof दाखवणे, inquiries मिळवणे, follow-up करणे आणि clear reports ने improve करणे.",
      engineCards: [
        {
          title: "Reach",
          text: "Local लोकांना business किंवा campaign notice व्हावे म्हणून reels, posts, ads, SMS, WhatsApp आणि voice calls."
        },
        {
          title: "Inquiry",
          text: "लोकांना response देणे सोपे जावे म्हणून website pages, offers, forms, calls, IVR आणि WhatsApp routes."
        },
        {
          title: "Trust",
          text: "Photos, videos, campaign material, reports, testimonials आणि category-specific proof ज्यामुळे काम credible वाटते."
        },
        {
          title: "Follow-up",
          text: "Interested लोक first click नंतर हरवू नयेत म्हणून simple call, WhatsApp, missed-call आणि response planning."
        }
      ],
      serviceStackEyebrow: "Goal नुसार services",
      serviceStackTitle: "तुमच्या goal नुसार services निवडा.",
      serviceStackText:
        "Services plain language मध्ये group केल्या आहेत, त्यामुळे Indian business owners आणि campaign teams ला काय fit होते ते पटकन समजते.",
      serviceGroups: [
        {
          title: "Reach आणि Follow-up",
          text: "Awareness, reminders आणि inquiry response साठी SMS, WhatsApp, email, voice calls, missed calls आणि IVR.",
          slugs: [
            "bulk-sms-marketing",
            "email-marketing",
            "voice-call-campaigns",
            "missed-call-alert",
            "ivr-solutions",
            "whatsapp-business-api"
          ]
        },
        {
          title: "Visibility आणि Leads",
          text: "Local attention आणि inquiries वाढवण्यासाठी social media, Google आणि Instagram ads, Google search support आणि local business campaigns.",
          slugs: [
            "social-media-marketing",
            "google-meta-ads",
            "seo-services",
            "digital-marketing",
            "retail-local-business-marketing"
          ]
        },
        {
          title: "Website आणि Online Presence",
          text: "Business credible आणि promotion-ready दिसण्यासाठी websites.",
          slugs: ["web-designing", "web-development"]
        },
        {
          title: "Specialized Campaigns",
          text: "Elections, real estate, jewellery, weddings, schools, reels आणि custom local advertising साठी focused promotion.",
          slugs: [
            "election-management",
            "real-estate-marketing",
            "jewellery-luxury-branding",
            "content-reel-production",
            "event-wedding-digital-invitations",
            "school-admission-campaigns",
            "customized-advertising"
          ]
        },
        {
          title: "Election Ground Support",
          text: "Surveys, voter slips, print material, video vans आणि booth teams साठी on-ground election support.",
          slugs: [
            "election-software-management",
            "booth-survey-voter-analysis",
            "voter-slip-booth-kit",
            "led-van-video-campaigns",
            "print-media-design",
            "election-material-supply"
          ]
        }
      ],
      systemEyebrow: "Clear campaign planning",
      systemTitle: "योग्य audience. योग्य message. Better inquiries.",
      systemText:
        "Business owner ला प्रत्येक channel समजणे गरजेचे नाही. Chaitanya Media कोणाला reach करायचे, काय सांगायचे, कुठे promote करायचे आणि inquiries कशा handle करायच्या हे clear करते.",
      systemPills: ["Local businesses", "Real estate", "Political leaders", "Election work"],
      systemCapabilities: [
        {
          kicker: "01 कोणाला reach करायचे",
          title: "Right audience समजून घ्या",
          text: "Promotion सुरू करण्याआधी area, audience, offer आणि inquiry path clear केला जातो.",
          points: ["Area आणि audience map", "Competitor आणि category check", "Offer आणि message angle"]
        },
        {
          kicker: "02 कुठे promote करायचे",
          title: "Right channels निवडा",
          text: "Goal नुसार SMS, WhatsApp, Meta, Google, SEO, reels, admission videos, event invites, website किंवा IVR निवडले जाते.",
          points: ["Awareness channels", "Inquiry channels", "Follow-up आणि report channels"]
        },
        {
          kicker: "03 Inquiry handling",
          title: "Response easy करा",
          text: "Calls, WhatsApp replies, forms आणि missed calls साठी clear route असला पाहिजे.",
          points: ["Landing page किंवा form", "WhatsApp आणि phone route", "Missed-call आणि IVR options"]
        },
        {
          kicker: "04 पुढच्या वेळी improve करा",
          title: "काय work झाले ते पाहून improve करा",
          text: "Reports पुढील content, offer, area आणि budget decide करायला मदत करतात.",
          points: ["Reach आणि response review", "Inquiry quality check", "Next campaign priorities"]
        }
      ],
      workflowEyebrow: "Chaitanya Media कसे काम करते",
      workflowTitle: "First call पासून campaign launch पर्यंत.",
      workflowText:
        "Local businesses, real estate teams, brands आणि political campaigns साठी simple four-step process.",
      workflowSteps: [
        {
          title: "First discussion",
          text: "Services suggest करण्याआधी goal, area, audience, current material, competitors आणि urgency समजून घेतली जाते.",
          points: ["Goal आणि audience", "Competitor check", "Service shortlist"]
        },
        {
          title: "Material तयार करा",
          text: "Plan नुसार posts, reels, video shoots, invitation flows, website pages, ad setup, messages आणि inquiry paths तयार केले जातात.",
          points: ["Website pages", "Posts, shoots आणि reels", "Inquiry आणि reporting paths"]
        },
        {
          title: "Selected services launch करा",
          text: "Plan नुसार ads, social, SEO, SMS, WhatsApp, voice किंवा web वर selected services live केल्या जातात.",
          points: ["Channel launch", "Lead capture", "Daily hygiene"]
        },
        {
          title: "Review करून improve करा",
          text: "Reach, inquiries, response gaps आणि next campaign priority review केली जाते.",
          points: ["Simple review", "Budget guidance", "Next 30-day plan"]
        }
      ],
      ugcEyebrow: "Video content",
      ugcTitle: "Attention ला action मध्ये बदलणारे UGC content.",
      ugcText:
        "Short vertical videos, founder clips, product demos, food reels आणि campaign explainers customer call करण्याआधी brand real वाटायला मदत करतात.",
      ugcVideos: [
        {
          title: "First client meeting",
          category: "Business growth planning",
          src: "/videos/1.mp4",
          poster: "/images/Video%20Thumbnails/1.jpg"
        },
        {
          title: "Digital लग्न निमंत्रण setup",
          category: "Voice + WhatsApp campaign",
          src: "/videos/2.mp4",
          poster: "/images/Video%20Thumbnails/2.jpg"
        },
        {
          title: "Live campaign reports",
          category: "WhatsApp + voice proof",
          src: "/videos/3.mp4",
          poster: "/images/Video%20Thumbnails/3.jpg"
        },
        {
          title: "School admission video shoot",
          category: "Video marketing",
          src: "/videos/4.mp4",
          poster: "/images/Video%20Thumbnails/4.jpg"
        },
        {
          title: "Car detailing growth meeting",
          category: "Google + Meta ads",
          src: "/videos/5.mp4",
          poster: "/images/Video%20Thumbnails/5.jpg"
        },
        {
          title: "Repeat wedding campaign setup",
          category: "Premium client trust",
          src: "/videos/6.mp4",
          poster: "/images/Video%20Thumbnails/6.jpg"
        },
        {
          title: "Supermarket growth pitch",
          category: "Retail marketing",
          src: "/videos/7.mp4",
          poster: "/images/Video%20Thumbnails/7.jpg"
        }
      ]
    },
    servicesPage: {
      metaTitle: "Pune मधील Digital Marketing Services",
      metaDescription:
        "Pune मधील SMS, WhatsApp, voice calls, digital wedding invitations, school admission campaigns, social media, Google आणि Instagram ads, websites, election support आणि local business marketing.",
      eyebrow: "सेवा",
      title: "Business promotion आणि election campaigns साठी services.",
      copy:
        "Chaitanya Media SMS, WhatsApp, call campaigns, digital event invitations, admission videos, ads, social media, websites, local business growth campaigns, election support, booth surveys, voter slips, print material, LED van promotion आणि campaign material देते. प्रत्येक service ती काय मदत करते यानुसार explain केली आहे.",
      menuEyebrow: "Service menu",
      menuTitle: "तुम्हाला लागणारी service किंवा campaign support निवडा.",
      howEyebrow: "Chaitanya Media कसे काम करते",
      howTitle: "आधी need समजून घ्या, नंतर service निवडा.",
      howText:
        "Target area, audience, message, budget आणि follow-up एकत्र plan केल्यावर promotion चांगले काम करते.",
      steps: [
        "Business, location, audience आणि goal समजून घ्या.",
        "Need ला fit होणाऱ्या services निवडा.",
        "Posts, ads, messages, calls, website pages किंवा print material तयार करा.",
        "Inquiries review करून next step improve करा."
      ]
    },
    serviceDetail: {
      strategyCall: "WhatsApp वर बोला",
      discussScope: "Details विचारा",
      whenHelpsEyebrow: "हे कधी उपयोगी पडते",
      whenHelpsTitle: "Promotion confusing वाटत असेल तेव्हा useful.",
      whenHelpsText:
        "आधी कोणाला reach करायचे, कुठे promote करायचे, काय सांगायचे आणि inquiries कशा handle करायच्या हे समजून घेतले जाते.",
      includedEyebrow: "Chaitanya Media काय करते",
      includedTitle: "Simple work plan",
      includedText: "Final work selected service, budget, timeline आणि area वर अवलंबून असते.",
      outcomesEyebrow: "काय सुधारते",
      outcomesTitle: "ही service काय clear करण्यासाठी मदत करते.",
      claimSafetyEyebrow: "Important note",
      claimSafetyTitle: "ही service काय guarantee करत नाही.",
      claimSafetyText:
        "Marketing plan आणि improve करता येते. पण final results audience, offer, budget, timing, competition आणि follow-up वर अवलंबून असतात.",
      processEyebrow: "हे कसे काम करते",
      processTitle: "Simple step-by-step process",
      processText:
        "Need समजून घ्या, right service निवडा, work सुरू करा, आणि नंतर काय झाले ते review करा.",
      questionsEyebrow: "Questions",
      commonQuestionsPrefix: "Common questions about",
      relatedEyebrow: "Related services",
      relatedTitle: "मदत करू शकणाऱ्या इतर services.",
      viewService: "Service पहा"
    },
    resultsPage: {
      metaTitle: "Campaign Results आणि Proof",
      metaDescription:
        "Chaitanya Media साठी work proof, campaign examples, client categories आणि trust signals.",
      schemaName: "Campaign Results आणि Proof",
      schemaDescription: "Chaitanya Media साठी campaign examples आणि client categories.",
      eyebrow: "Proof आणि results",
      title: "Chaitanya Media वर trust करायला मदत करणारा work proof.",
      copy:
        "या page वर current trust signals, client categories, campaign material आणि approved testimonials/examples जोडण्यासाठी जागा दाखवली आहे.",
      numbersEyebrow: "Numbers",
      numbersTitle: "Current trust numbers",
      clientsEyebrow: "Who we work with",
      clientsTitle: "Chaitanya Media support करू शकणाऱ्या client categories.",
      clientsText:
        "Approved examples उपलब्ध झाल्यावर प्रत्येक category साठी real work दाखवता येईल.",
      trustEyebrow: "विश्वास संकेत",
      trustTitle: "Claims clear आणि honest ठेवा.",
      trustText:
        "Public numbers आणि proof business owner confirm करू शकत असेल तेव्हाच दाखवावेत.",
      proofCardText: "Screenshots, reports, testimonials किंवा campaign records ने शक्य तिथे हे back करा.",
      caseStudiesEyebrow: "केस स्टडीज",
      caseStudiesTitle: "Fake numbers शिवाय real work stories.",
      caseStudiesText:
        "प्रत्येक story मध्ये client need, Chaitanya Media ने काय केले आणि कोणता proof available आहे हे clear असावे. Client names आणि results approval नंतरच add करावेत.",
      caseStudyNeedLabel: "गरज",
      caseStudyResponseLabel: "Chaitanya Media ची कृती",
      caseStudyCta: "Service उघडा",
      galleryEyebrow: "पोर्टफोलिओ गॅलरी",
      galleryTitle: "फक्त service names नाही, real assets दाखवा.",
      galleryText:
        "Visitors ला काम दिसावे म्हणून approved banners, reels, screenshots आणि campaign examples वापरा.",
      credentialsEyebrow: "विश्वास संकेत",
      credentialsTitle: "Agency वर trust करणे सोपे करणारे संकेत.",
      credentialsText:
        "Confirm करता येणारे business details, numbers आणि examples दाखवा.",
      complianceEyebrow: "जबाबदार मोहीम नियम",
      complianceTitle: "Safe campaign आणि messaging rules.",
      complianceText:
        "SMS, WhatsApp, voice calls, political work आणि ads proper approval आणि responsible data use सहच पाठवावेत. हे legal advice नाही.",
      materialEyebrow: "Campaign material examples",
      materialTitle: "खरे promotion assets, clean पद्धतीने दाखवलेले.",
      materialText:
        "Owner-provided banners Chaitanya Media ने offer केलेल्या election promotion आणि offline campaign services दाखवतात. New site वर हे proof examples म्हणून वापरले आहेत, पण service story clean आणि modern ठेवली आहे.",
      materialNote:
        "हे examples approval नंतरच वापरा. यांना result guarantee म्हणून दाखवू नका.",
      portfolioEyebrow: "पोर्टफोलिओ proof",
      portfolioTitle: "Services मागचे काम दाखवा.",
      portfolioText:
        "प्रत्येक service campaign material, reels, field work, website pages किंवा approved client examples शी connect करावी.",
      portfolioCta: "Proof पहा",
      testimonialsEyebrow: "ग्राहक अभिप्राय",
      testimonialsTitle: "Client feedback, approval नंतर add करा.",
      testimonialsText:
        "Client quotes permission आणि context सहच publish करावेत.",
      finalEyebrow: "इथून सुरू करा",
      finalTitle: "तुमच्या business किंवा campaign promotion साठी मदत हवी आहे का?",
      primaryCta: "Free Consultation Book करा",
      secondaryCta: "Chaitanya Media Contact करा"
    },
    aboutPage: {
      metaTitle: "Chaitanya Media बद्दल",
      metaDescription:
        "Chaitanya Media ही Pune मधील local businesses, schools, retail shops, event campaigns, real estate teams आणि political campaigns साठी digital marketing agency आहे.",
      eyebrow: "Chaitanya Media बद्दल",
      title: "Indian businesses आणि campaigns साठी digital marketing team.",
      copy:
        "Chaitanya Media local businesses, brands आणि political teams ना promotion, inquiries आणि clear follow-up मध्ये मदत करते.",
      introEyebrow: "आम्ही कोण",
      introTitle: "Marketing लोकांना action कडे न्यायला हवे.",
      introText:
        "काम practical आहे: योग्य लोकांपर्यंत पोहोचा, योग्य message सांगा, inquiries collect करा आणि वेळेवर follow-up करा.",
      finalEyebrow: "Next",
      finalTitle: "Simple discussion पासून सुरू करा.",
      servicesCta: "Services पहा",
      whatsappCta: "WhatsApp वर बोला"
    },
    founderPage: {
      metaTitle: "Agency Leadership",
      metaDescription:
        "Chaitanya Media ही brands, businesses आणि campaign teams साठी Pune digital marketing agency आहे.",
      eyebrow: "Agency leadership",
      title: "Businesses आणि leaders साठी practical promotion support.",
      copy:
        "Chaitanya Media business growth, local inquiries आणि political promotion साठी clear digital आणि field services देते.",
      positioningEyebrow: "Positioning",
      positioningTitle: "Reach, inquiries, trust आणि follow-up भोवती built.",
      positioningText:
        "Chaitanya Media business promotion, election promotion, content, websites, ads, SMS, WhatsApp, event invitations, admission campaigns, reporting आणि follow-up support वर focus करते.",
      proofEyebrow: "Core proof areas",
      proofTitle: "Agency ने वेळेनुसार काय prove करावे.",
      proofCards: [
        {
          title: "Campaign results",
          text: "Approval असल्यास reach, inquiries आणि simple report screenshots."
        },
        {
          title: "Creative work",
          text: "Ads, reels, shoots, invitations, WhatsApp messages आणि campaign material."
        },
        {
          title: "Client categories",
          text: "Political leaders, schools, retailers, event hosts, automotive shops, builders आणि local businesses."
        }
      ]
    },
    blogPage: {
      metaTitle: "Digital Marketing Blog",
      metaDescription:
        "Campaign planning, real estate leads, election campaigns आणि local business growth बद्दल practical articles.",
      eyebrow: "Knowledge base",
      title: "Practical digital marketing आणि campaign guidance.",
      copy:
        "Articles business owners आणि campaign teams साठी common promotion problems simple language मध्ये explain करतात.",
      topicsEyebrow: "Topics",
      topicsTitle: "Clients कडून येणारे common questions.",
      articlesEyebrow: "Articles",
      articlesTitle: "Business owners आणि campaign teams साठी useful posts",
      articlesText:
        "प्रत्येक post ने एक practical question answer करून reader ला next step decide करायला मदत करावी.",
      readArticle: "Article वाचा",
      editorialEyebrow: "Editorial rule",
      editorialTitle: "फक्त views साठी नाही, clear decisions साठी लिहा.",
      editorialText:
        "Blog ने generic marketing filler टाळायला हवे. प्रत्येक article ने reader ला campaign problem, decision किंवा next step समजायला मदत करावी.",
      editorialPoints: [
        "Core service pages support करा",
        "Plain business language वापरा",
        "Impossible outcome guarantees टाळा",
        "Practical consultation CTA include करा"
      ]
    },
    blogPostPage: {
      nextEyebrow: "Next step",
      nextTitle: "यासाठी campaign plan हवा आहे का?",
      nextText:
        "तुमचा business, location, audience आणि goal share करा. Chaitanya Media next practical step suggest करू शकते.",
      requestCta: "Plan विचारा",
      moreArticles: "More Articles",
      authorName: "Chaitanya Suhas Jadhav"
    },
    contactPage: {
      metaTitle: "Chaitanya Media Contact",
      metaDescription:
        "Digital marketing, ads, SMS, WhatsApp, voice calls, event invitations, admission campaigns, retail marketing, websites किंवा election campaigns साठी Chaitanya Media शी contact करा.",
      eyebrow: "Contact",
      title: "तुम्हाला काय हवे आहे ते सांगा.",
      copy:
        "तुमचा business, location, service need आणि goal share करा. Chaitanya Media next practical step सह respond करेल.",
      fastEyebrow: "Fast contact",
      fastTitle: "सर्वात योग्य channel निवडा.",
      fastText:
        "Fast campaign discussion साठी WhatsApp, consultation साठी phone किंवा written scope साठी email वापरा.",
      cards: {
        whatsappTitle: "WhatsApp Consultation",
        whatsappText: "Quick campaign आणि growth discussion साठी best.",
        phoneText: "Ads, SMS, WhatsApp, websites आणि campaign services साठी call करा.",
        emailTitle: "Email Inquiry",
        emailText: "Project context, campaign goals आणि written scope पाठवा."
      },
      requestEyebrow: "Growth request",
      requestTitle: "आधी basics पाठवा.",
      requestText:
        "हा form v1 मध्ये email handoff वापरतो. Destination, spam handling आणि data-retention rules confirm झाल्यावर backend नंतर add करता येईल.",
      alertText:
        "या public form मध्ये passwords, payment data, private customer lists किंवा confidential campaign documents include करू नका.",
      form: {
        name: "नाव",
        business: "Business किंवा campaign नाव",
        phone: "फोन",
        email: "ईमेल",
        location: "लक्ष्य ठिकाण",
        service: "लागणारी सेवा",
        selectService: "Service निवडा",
        timeline: "वेळापत्रक",
        selectTimeline: "वेळापत्रक निवडा",
        timelineOptions: ["लगेच", "2 आठवड्यांत", "या महिन्यात", "योजना टप्पा"],
        budget: "अंदाजे budget",
        selectBudget: "Budget range निवडा",
        budgetOptions: ["मार्गदर्शन पाहिजे", "₹25,000 खाली", "₹25,000 - ₹1 lakh", "₹1 lakh+"],
        preferredContact: "पसंतीचा संपर्क",
        preferredContactOptions: ["WhatsApp", "फोन कॉल", "ईमेल"],
        goal: "मोहीम उद्दिष्ट",
        consent:
          "मला समजते की हा inquiry form आहे आणि मी confidential lists, passwords, payment data किंवा private campaign documents upload करणार नाही.",
        submit: "Request Submit करा"
      }
    },
    thankYouPage: {
      metaTitle: "Thank You",
      metaDescription: "Chaitanya Media ला contact केल्याबद्दल धन्यवाद.",
      eyebrow: "Thank you",
      title: "तुमची request received झाली आहे.",
      copy: "Chaitanya Media message review करून दिलेल्या contact channel वर follow up करेल.",
      cta: "Home वर परत जा"
    },
    notFoundPage: {
      eyebrow: "404",
      title: "ही page उपलब्ध नाही.",
      copy: "Chaitanya Media rebuild दरम्यान page move झाली असू शकते. Homepage किंवा services page पासून सुरू करा.",
      home: "Home",
      services: "Services"
    },
    legalEyebrow: "Policy"
  },
  hi: {
    locale: "hi",
    site: {
      ...siteBase,
      description:
        "Pune की digital marketing agency जो Indian businesses, schools, retailers, event families, local service brands और political campaigns को notice होने और inquiries पाने में मदद करती है.",
      location: "Shewalewadi, Pune"
    },
    socialLinks,
    featuredReels,
    navItems: [
      {label: "हमारे बारे में", href: "/#about"},
      {label: "सेवाएं", href: "/services/"},
      {label: "क्यों Chaitanya Media", href: "/#why-us"},
      {label: "परिणाम", href: "/#results"},
      {label: "संपर्क", href: "/#contact"}
    ],
    heroStats: [
      {value: "150+", label: "Satisfied Clients"},
      {value: "10M+", label: "Digital Reach"},
      {value: "24/7", label: "Support"},
      {value: "100%", label: "Transparent Pricing"}
    ],
    trustMarkers: [
      "150+ Satisfied Clients",
      "10M+ Digital Reach",
      "24/7 Support",
      "100% Transparent Pricing"
    ],
    services: makeServices("hi", hiServiceSource),
    agencyStrengths: [
      {
        title: "Clear Planning",
        text: "हर campaign area, audience, message, budget और follow-up plan से शुरू होता है."
      },
      {
        title: "Practical Content",
        text: "Client meetings, shoots, reels, posters, invitations और ads offer को clear तरीके से explain करने के लिए बनाए जाते हैं."
      },
      {
        title: "Business और Election Support",
        text: "Chaitanya Media schools, shops, service businesses, events, real estate teams और political campaigns को support करता है."
      }
    ],
    industries: [
      "Real Estate",
      "Schools और Institutes",
      "Retail और Supermarkets",
      "Automotive Services",
      "Healthcare",
      "Weddings और Events",
      "Jewellery और Luxury",
      "Food और Cafés",
      "Political Campaigns",
      "Travel & Tourism",
      "Legal Services",
      "Manufacturing"
    ],
    whyChooseUs: [
      "Clear service explanation",
      "हर business या campaign के लिए plan",
      "Simple reporting और honest expectations",
      "Business और election promotion में experience"
    ],
    clientTypes: [
      "Political Leaders और Parties",
      "Real Estate Builders",
      "Jewellery Showrooms",
      "Schools और Coaching Institutes",
      "Retail और Automotive Businesses",
      "Wedding और Event Hosts"
    ],
    resultStats: [
      {value: "10M+", label: "Digital Reach Generated"},
      {value: "100+", label: "Campaigns Executed"},
      {value: "Pan India", label: "Maharashtra और उससे आगे clients"}
    ],
    campaignMaterialExamples: [
      {
        title: "Election campaign service menu",
        category: "Campaign service proof",
        image: "/images/campaign-materials/election-service-menu.jpg",
        alt: "Chaitanya Media election promotion service banner showing SMS, voice call, WhatsApp, social media, technical, survey, print, and election material services.",
        points: [
          "Bulk SMS, voice calls, WhatsApp, Facebook और Instagram advertising",
          "LED van, documentary films, campaign videos और social promotion",
          "Booth surveys, voter analysis, print media, voter slips और campaign material"
        ]
      },
      {
        title: "Voter outreach facilities",
        category: "Election outreach example",
        image: "/images/campaign-materials/voter-outreach-banner.jpg",
        alt: "Chaitanya Media voter outreach banner showing SMS, voice call, WhatsApp, election software, and voter slip printer services.",
        points: [
          "Marathi और English bulk SMS outreach",
          "Candidate की आवाज में recorded bulk voice calls",
          "WhatsApp poster, PDF, audio message, election software और voter slip printer support"
        ]
      }
    ],
    portfolioItems: [
      {
        title: "Election promotion field kit",
        category: "Political campaign operations",
        summary:
          "SMS, voice calls, WhatsApp, booth support, print material और field promotion cover करने वाला campaign-ready service set.",
        href: "/services/election-management/",
        points: ["SMS, voice, WhatsApp", "Booth और voter support", "Print और field material"],
        proofStatus: "Banner-backed service proof"
      },
      {
        title: "Voter outreach communication support",
        category: "Election technology",
        summary:
          "Marathi और English SMS, candidate voice recordings, WhatsApp assets, election software और voter-slip printing के लिए outreach flow.",
        href: "/services/election-software-management/",
        points: ["Bulk SMS और voice", "WhatsApp PDFs और audio", "Election software support"],
        proofStatus: "Owner-provided material available"
      },
      {
        title: "Digital wedding invitation setup",
        category: "Event communication proof",
        summary:
          "Family events के लिए WhatsApp campaign, recorded voice invitation, number management और digital invitation/location sharing.",
        href: "/services/event-wedding-digital-invitations/",
        points: ["Voice invitation", "WhatsApp delivery", "Digital card और location"],
        proofStatus: "Instagram post proof available"
      },
      {
        title: "School admission video campaign",
        category: "Education marketing proof",
        summary:
          "School growth के लिए campus visit, promotional video shoot, scripting और parent-facing admission communication.",
        href: "/services/school-admission-campaigns/",
        points: ["Campus shoot", "Admission messaging", "Parent trust content"],
        proofStatus: "Instagram post proof available"
      },
      {
        title: "Retail और automotive growth pitch",
        category: "Local business marketing proof",
        summary:
          "Car detailing, car washing, supermarket और retail growth campaigns के लिए business meetings और custom action plans.",
        href: "/services/retail-local-business-marketing/",
        points: ["Recording analysis", "Custom action plan", "Google और Meta ads"],
        proofStatus: "Instagram post proof available"
      }
    ],
    caseStudies: [
      {
        title: "Election promotion service rollout",
        category: "Source-backed case study",
        summary:
          "High-volume outreach, campaign material, surveys और field support cover करने वाला structured election promotion plan.",
        challenge:
          "Campaign teams को online और offline channels में fast voter communication, visible material और clean coordination चाहिए.",
        response:
          "Chaitanya Media service material SMS, voice calls, WhatsApp, social promotion, LED van, surveys, print media, voter slips और booth support को एक campaign support plan की तरह दिखाता है.",
        proofStatus: "Banner proof available है; final client details approval के बाद ही add करें.",
        href: "/services/election-management/"
      },
      {
        title: "Voter outreach communication kit",
        category: "Election outreach proof path",
        summary:
          "Marathi और English SMS, recorded voice calls, WhatsApp assets, election software और voter slips के लिए practical communication kit.",
        challenge:
          "Local campaigns को multilingual communication, candidate-voice messaging और deadline के पास voter-slip support चाहिए.",
        response:
          "Current proof bulk SMS, bulk voice, WhatsApp posters/PDF/audio, election software और voter-slip printer support दिखाता है.",
        proofStatus: "Proof ready है; full case study approval के बाद ही publish करें.",
        href: "/services/election-software-management/"
      },
      {
        title: "Event invitation campaign setup",
        category: "Social proof case study",
        summary:
          "WhatsApp, recorded voice calls, digital invitations और location sharing वाला practical event communication setup.",
        challenge:
          "Families और event hosts को guests invite करने, details share करने और manual calling कम करने का fast तरीका चाहिए.",
        response:
          "Chaitanya Media ने WhatsApp campaign delivery, voice-call invitation flow, number management और digital card/location sharing setup किया.",
        proofStatus: "Instagram proof available है; client name और outcome numbers approval के बाद ही add करें.",
        href: "/services/event-wedding-digital-invitations/"
      },
      {
        title: "School admission video shoot",
        category: "Education campaign proof path",
        summary:
          "School admissions explain करने और parent trust build करने के लिए campus-based admission video campaign.",
        challenge:
          "Schools को static posters से ज्यादा clear admission communication और parent trust content चाहिए.",
        response:
          "Chaitanya Media ने campus visit, promotional video shoot, scripting direction और admission campaign content handle किया.",
        proofStatus: "Instagram proof available है; school/client details approval के बाद ही add करें.",
        href: "/services/school-admission-campaigns/"
      },
      {
        title: "Local business growth presentation",
        category: "Retail और automotive proof path",
        summary:
          "Local retailers और automotive service businesses के लिए business pitch और custom action planning.",
        challenge:
          "Local shops और service outlets को visibility, inquiries और ad spend के लिए campaign से पहले clear plan चाहिए.",
        response:
          "Chaitanya Media ने business meetings, recording analysis, custom action plans, Google Ads, Meta Ads और local visibility direction तैयार किया.",
        proofStatus: "Instagram proof available है; final campaign results approval के बाद ही add करें.",
        href: "/services/retail-local-business-marketing/"
      }
    ],
    proofGalleryItems: [
      {
        title: "Election service menu",
        category: "Campaign material",
        image: "/images/campaign-materials/election-service-menu.jpg",
        alt: "Chaitanya Media election promotion service menu banner.",
        text: "Election outreach, print, survey, technical और field material capabilities दिखाने वाली real service-menu creative."
      },
      {
        title: "Voter outreach banner",
        category: "Campaign material",
        image: "/images/campaign-materials/voter-outreach-banner.jpg",
        alt: "Chaitanya Media voter outreach facilities banner.",
        text: "SMS, voice call, WhatsApp, election software और voter slip printer support दिखाने वाला promotion banner."
      }
    ],
    testimonialSlots: [
      {
        audience: "Political campaign team",
        title: "Campaign coordination",
        text:
          "Strong testimonial में election outreach, field material, WhatsApp/SMS coordination और campaign support cover होना चाहिए.",
        proofNeeded: "Owner-approved candidate या campaign-team testimonial needed"
      },
      {
        audience: "Real estate या local business owner",
        title: "Inquiry और follow-up clarity",
        text:
          "Strong testimonial में inquiry quality, follow-up clarity, simple reporting या local awareness cover होना चाहिए.",
        proofNeeded: "Client name, role और permission needed"
      },
      {
        audience: "Brand या founder",
        title: "Creative और content confidence",
        text:
          "Strong testimonial में reels, social content, brand presentation और consultation experience cover होना चाहिए.",
        proofNeeded: "Approved quote और optional photo/logo needed"
      }
    ],
    trustCredentials: [
      {label: "Since 2020", detail: "Current Chaitanya Media source material में दिखाया गया business timeline."},
      {label: "Pune base", detail: "Local और Maharashtra-focused campaigns के लिए Shewalewadi, Pune presence."},
      {label: "Owner-provided proof", detail: "Proof sections के लिए campaign banners और service material available है."},
      {label: "Live social proof", detail: "Recent Instagram posts में client meetings, event campaigns, school shoots और local business pitches दिखते हैं."},
      {label: "Claim-safe proof", detail: "Results, testimonials और metrics को unapproved placeholders से अलग रखा गया है."},
      {label: "Multilingual outreach", detail: "Campaign material Marathi और English voter communication support करता है."}
    ],
    compliancePoints: [
      {
        title: "Approved message content",
        text:
          "Campaign messages, posters, voice scripts और WhatsApp assets send या publish करने से पहले approve होने चाहिए."
      },
      {
        title: "Responsible outreach",
        text:
          "SMS, voice, WhatsApp और ad campaigns में lawful lists, platform rules, sender identity और opt-out expectations जहां लागू हों follow करें."
      },
      {
        title: "Sensitive data handling",
        text:
          "Public inquiry form से voter lists, customer lists, passwords, payment details या confidential documents upload न करें."
      },
      {
        title: "No outcome guarantees",
        text:
          "Campaign performance audience, message, timing, budget, competition, follow-up और applicable election/platform rules पर depend करता है."
      }
    ],
    blogPosts: [
      {
        slug: "digital-campaign-blueprint",
        title: "30-Day Digital Campaign Blueprint कैसे plan करें",
        category: "Digital Marketing",
        date: "2026-06-20",
        readTime: "4 min read",
        excerpt:
          "Campaign goals को channels, creatives, audiences और follow-up actions में बदलने के लिए practical structure.",
        sections: [
          {
            heading: "एक clear result से शुरू करें",
            body: [
              "Campaign random post calendar से शुरू नहीं होना चाहिए. उसे target से शुरू होना चाहिए: ज्यादा walk-ins, calls, WhatsApp inquiries, registrations या public awareness.",
              "Result clear होने पर channel mix चुनना आसान हो जाता है."
            ]
          },
          {
            heading: "Reach को follow-up से जोड़ें",
            body: [
              "Ads, SMS, WhatsApp, social content और landing pages सभी follow-up plan की तरफ ले जाने चाहिए. Follow-up के बिना reach revenue या influence में नहीं बदलती.",
              "Campaign blueprint में message, audience, budget, offer, lead route और reporting cadence define होना चाहिए."
            ]
          }
        ]
      },
      {
        slug: "real-estate-lead-generation",
        title: "Real Estate Lead Generation को सिर्फ Ads से ज्यादा चाहिए",
        category: "Real Estate Marketing",
        date: "2026-06-20",
        readTime: "4 min read",
        excerpt:
          "Builders और developers को offer clarity, local targeting, fast follow-up और trust content क्यों चाहिए.",
        sections: [
          {
            heading: "Ad सिर्फ पहला step है",
            body: [
              "Real estate campaigns को सही geography, budget, creative, offer, landing flow और lead qualification चाहिए.",
              "Weak follow-up process एक अच्छे campaign को waste कर सकती है."
            ]
          },
          {
            heading: "Trust बेहतर inquiries लाता है",
            body: [
              "Project details, location clarity, construction progress, pricing signals और fast callbacks leads को curiosity से site visit तक ले जाते हैं.",
              "Marketing को sales team support करनी चाहिए, सिर्फ sheet में names generate नहीं करने चाहिए."
            ]
          }
        ]
      },
      {
        slug: "election-digital-campaigns",
        title: "Political Leaders के लिए Digital Campaign Planning",
        category: "Election Management",
        date: "2026-06-20",
        readTime: "5 min read",
        excerpt:
          "Political campaigns digital channels से reach, message discipline, volunteer coordination और voter connection कैसे बढ़ा सकते हैं.",
        sections: [
          {
            heading: "Message discipline जरूरी है",
            body: [
              "Political communication में clarity, frequency और local relevance चाहिए. Digital channels को formats बदलने पर भी same core message reinforce करना चाहिए.",
              "Campaigns को audience segments, language, geography, creative formats और response handling plan करना चाहिए."
            ]
          },
          {
            heading: "जो measure हो सकता है उसे measure करें",
            body: [
              "Reach, calls, WhatsApp inquiries, event registrations और booth-level feedback आगे क्या करना है यह decide करने में मदद कर सकते हैं.",
              "Digital work को ground strategy support करनी चाहिए, replace नहीं करनी चाहिए."
            ]
          }
        ]
      }
    ],
    legalPages: {
      "privacy-policy": {
        title: "Privacy Policy",
        description:
          "Chaitanya Media inquiry और campaign communication data कैसे handle करता है.",
        body: [
          "यह website business inquiry information सिर्फ consultation, service discussion और campaign planning purposes के लिए collect करती है.",
          "Public forms में passwords, payment data, private voter data, confidential customer records या sensitive campaign documents submit न करें.",
          "Production launch से पहले final privacy wording business owner द्वारा review और approve होनी चाहिए."
        ]
      },
      terms: {
        title: "Terms of Service",
        description: "इस website का उपयोग करने और service discussions request करने के basic terms.",
        body: [
          "इस website पर दी गई information service inquiry और business education purposes के लिए है.",
          "Work details, budget, timeline, reporting और payment terms separate written agreement में confirm होने चाहिए.",
          "Marketing outcomes audience, offer, budget, timing, content quality, competition और follow-up पर depend करते हैं."
        ]
      },
      "acceptable-use-policy": {
        title: "Acceptable Use Policy",
        description: "Campaign और marketing inquiries के लिए responsible use expectations.",
        body: [
          "Spam, impersonation, unlawful messaging, unauthorized data use या deceptive campaign activity request करने के लिए इस website का उपयोग न करें.",
          "Unsafe, unlawful, misleading या responsible service scope से बाहर दिखने वाले काम को Chaitanya Media decline कर सकता है."
        ]
      },
      "refund-policy": {
        title: "Refund Policy",
        description: "Scoped campaign work के लिए refund और cancellation expectations.",
        body: [
          "Refund eligibility approved proposal, payment milestone और already completed work पर depend करती है.",
          "Media spends, third-party tool costs, creative work, consultation और executed campaign work scope के अनुसार non-refundable हो सकते हैं."
        ]
      },
      "cookie-policy": {
        title: "Cookie Policy",
        description: "इस website पर visitor statistics या inquiry tracking कैसे use हो सकती है.",
        body: [
          "यह website लोग कौन से pages use करते हैं और inquiries कैसे आती हैं यह समझने के लिए visitor statistics या inquiry tracking use कर सकती है.",
          "Live tracking, ad pixels, chat tools या embedded services को launch से पहले यहां list करना चाहिए."
        ]
      },
      disclaimer: {
        title: "Disclaimer",
        description: "Marketing, campaign और advertising outcomes के बारे में important limitations.",
        body: [
          "इस website पर दी गई marketing और campaign information educational है और इसे sales, votes, reach, leads या revenue की guarantee नहीं समझना चाहिए.",
          "Actual outcomes market conditions, budget, audience, offer, content quality, timing और follow-up पर depend करते हैं."
        ]
      },
      "security-policy": {
        title: "Security Policy",
        description: "Website और campaign inquiries के लिए safe handling expectations.",
        body: [
          "Public forms में passwords, access tokens, payment data, private customer records या confidential campaign files share न करें.",
          "Scope, ownership और authorization confirm होने के बाद ही access share करना चाहिए."
        ]
      },
      "security-compliance": {
        title: "Security & Compliance",
        description: "Responsible data और campaign communication practices.",
        body: [
          "Campaign और marketing work को applicable platform, consent, privacy और advertising rules follow करने चाहिए.",
          "Messaging campaigns approved lists, responsible frequency और clear business purpose के साथ use होने चाहिए."
        ]
      }
    },
    header: {
      ariaHome: "Chaitanya Media home",
      consultation: "Free Consultation लें",
      whatsapp: "WhatsApp पर बात करें",
      menu: "Menu खोलें",
      themeLight: "Light mode करें",
      themeDark: "Dark mode करें"
    },
    footer: {
      description:
        "Indian businesses, schools, events, shops और campaign teams को notice होने और ज्यादा inquiries पाने में मदद करने वाली digital marketing agency.",
      contactHeading: "Contact",
      followHeading: "Follow Us",
      followText: "Latest campaign content, social updates और direct WhatsApp contact के लिए follow करें.",
      servicesHeading: "Services",
      companyHeading: "Company",
      resourcesHeading: "Resources",
      legalHeading: "Legal",
      companyLinks: [
        {label: "Home", href: "/"},
        {label: "About", href: "/about/"},
        {label: "Results और Proof", href: "/results/"},
        {label: "Blog", href: "/blog/"},
        {label: "Contact", href: "/contact/"}
      ],
      resourceLinks: [
        {label: "Agency Leadership", href: "/founder/"},
        {label: "All Services", href: "/services/"},
        {label: "Campaign Blueprint", href: "/blog/digital-campaign-blueprint/"},
        {label: "Real Estate Leads", href: "/blog/real-estate-lead-generation/"},
        {label: "Election Campaigns", href: "/blog/election-digital-campaigns/"}
      ],
      rights: "All rights reserved.",
      legalLinks: [
        {label: "Privacy", href: "/privacy-policy/"},
        {label: "Terms", href: "/terms/"},
        {label: "Disclaimer", href: "/disclaimer/"},
        {label: "Acceptable Use", href: "/acceptable-use-policy/"},
        {label: "Refund Policy", href: "/refund-policy/"},
        {label: "Cookie Policy", href: "/cookie-policy/"},
        {label: "Security Policy", href: "/security-policy/"},
        {label: "Security & Compliance", href: "/security-compliance/"}
      ]
    },
    home: {
      heroBadge: "100+ Brands और Leaders का विश्वास",
      heroTitle: {
        before: "Pune की Best Digital Marketing Agency जो ",
        accentOne: "Brands बनाती है",
        middle: " और ",
        accentTwo: "Elections",
        after: " जीतने में मदद करती है"
      },
      heroCopy:
        "Pune businesses के लिए websites, search visibility, ads, reels, SMS, WhatsApp, voice calls, invitations, admissions और election promotion.",
      primaryCta: "Chaitanya Media से बात करें",
      secondaryCta: "Services देखें",
      aboutEyebrow: "हम कौन हैं",
      aboutTitleBefore: "Results-Driven ",
      aboutTitleAccent: "Digital Agency",
      aboutParagraphs: [
        "Chaitanya Media local businesses, brands और political teams को clear और practical तरीके से promotion करने में मदद करता है.",
        "Focus simple है: ज्यादा लोग business notice करें, offer समझें, inquiry भेजें और timely follow-up मिले."
      ],
      servicesEyebrow: "हमारी सेवाएं",
      servicesTitleBefore: "हम क्या ",
      servicesTitleAccent: "करते हैं",
      industriesEyebrow: "Industries we serve",
      industriesTitleBefore: "कई ",
      industriesTitleAccent: "Industries में भरोसा",
      whyEyebrow: "हमें क्यों चुनें",
      whyTitleBefore: "Results के लिए ",
      whyTitleAccent: "Built",
      clientsEyebrow: "Who we work with",
      clientsTitleBefore: "हमारे ",
      clientsTitleAccent: "Clients",
      resultsEyebrow: "Proof और results",
      resultsTitleBefore: "बोलते हुए ",
      resultsTitleAccent: "Numbers",
      contactEyebrow: "संपर्क करें",
      contactTitleBefore: "अपना Free ",
      contactTitleAccent: "Growth Blueprint लें",
      contactCopy:
        "Form भरें और हमारी team 24 घंटों में अगले 30 दिनों में leads बढ़ाने के लिए clear action plan के साथ respond करेगी.",
      form: {
        fullName: "Full Name *",
        fullNamePlaceholder: "आपका नाम",
        businessName: "Business या campaign name",
        businessNamePlaceholder: "Brand, candidate या organization",
        phone: "Phone *",
        phonePlaceholder: "+91 99999 99999",
        email: "ईमेल",
        emailPlaceholder: "you@email.com",
        location: "लक्ष्य स्थान",
        locationPlaceholder: "शहर, area, ward या constituency",
        lookingFor: "किस सेवा के लिए *",
        selectService: "Service चुनें",
        timeline: "समयसीमा",
        selectTimeline: "समयसीमा चुनें",
        timelineOptions: ["तुरंत", "2 हफ्तों में", "इस महीने", "योजना चरण"],
        budget: "अनुमानित budget",
        selectBudget: "Budget range चुनें",
        budgetOptions: ["मार्गदर्शन चाहिए", "₹25,000 से कम", "₹25,000 - ₹1 lakh", "₹1 lakh+"],
        preferredContact: "पसंदीदा संपर्क",
        preferredContactOptions: ["WhatsApp", "फोन कॉल", "ईमेल"],
        message: "मैसेज",
        messagePlaceholder: "अपने goals बताएं...",
        submit: "Request Submit करें"
      },
      finalTitleBefore: "अपना ",
      finalTitleAccent: "Brand या Campaign बढ़ाने के लिए तैयार?",
      finalCopy:
        "अपनी service, area और goal share करें. Chaitanya Media next practical step suggest करेगा.",
      finalPhoneCta: "Free Consultation Book करें",
      finalWhatsappCta: "WhatsApp पर बात करें",
      reelsEyebrow: "Social proof",
      reelsTitle: "Chaitanya Media के real campaign videos.",
      reelsText:
        "Thumbnail tap करके client meetings, WhatsApp और voice campaigns, school admission shoots, local business pitches और reporting proof preview करें. Full captions और ज्यादा posts Instagram पर हैं.",
      reelsProfileCta: "Instagram पर और देखें",
      reelsOpenCta: "Reel खोलें",
      reelsActiveLabel: "अभी चल रहा है",
      reelsPreviewLabel: "Reel preview करें",
      smoothEyebrow: "Easy browsing",
      smoothTitle: "Website पढ़ने, trust करने और contact करने में simple होनी चाहिए.",
      smoothText:
        "ज्यादातर visitors mobile पर website खोलेंगे. इसलिए हर section clear रखा गया है, ताकि Indian business owners और campaign teams service जल्दी समझ सकें.",
      smoothCards: [
        {
          title: "Clear sections",
          text: "Services, proof, videos और contact details अलग रखे गए हैं, इसलिए page scan करना आसान है."
        },
        {
          title: "Quick actions",
          text: "Buttons लोगों को directly services, WhatsApp या inquiry form तक ले जाते हैं."
        },
        {
          title: "Mobile first",
          text: "Small screen पर headings, cards, forms और videos readable रहते हैं."
        },
        {
          title: "Trust first",
          text: "Call मांगने से पहले page services, work proof और testimonials दिखाता है."
        }
      ],
      engineEyebrow: "Campaign plan",
      engineTitle: "Random posts नहीं. Clear growth plan.",
      engineText:
        "Chaitanya Media simple path plan करता है: सही लोगों तक पहुंचना, proof दिखाना, inquiries लाना, follow-up करना और clear reports से improve करना.",
      engineCards: [
        {
          title: "Reach",
          text: "Local लोगों को business या campaign notice हो इसलिए reels, posts, ads, SMS, WhatsApp और voice calls."
        },
        {
          title: "Inquiry",
          text: "लोग आसानी से response दे सकें इसलिए website pages, offers, forms, calls, IVR और WhatsApp routes."
        },
        {
          title: "Trust",
          text: "Photos, videos, campaign material, reports, testimonials और category-specific proof जिससे काम credible लगता है."
        },
        {
          title: "Follow-up",
          text: "Interested लोग first click के बाद खो न जाएं इसलिए simple call, WhatsApp, missed-call और response planning."
        }
      ],
      serviceStackEyebrow: "Goal के हिसाब से services",
      serviceStackTitle: "अपने goal के हिसाब से services चुनें.",
      serviceStackText:
        "Services plain language में grouped हैं, इसलिए Indian business owners और campaign teams जल्दी समझते हैं कि उनके लिए क्या fit है.",
      serviceGroups: [
        {
          title: "Reach और Follow-up",
          text: "Awareness, reminders और inquiry response के लिए SMS, WhatsApp, email, voice calls, missed calls और IVR.",
          slugs: [
            "bulk-sms-marketing",
            "email-marketing",
            "voice-call-campaigns",
            "missed-call-alert",
            "ivr-solutions",
            "whatsapp-business-api"
          ]
        },
        {
          title: "Visibility और Leads",
          text: "Local attention और inquiries बढ़ाने के लिए social media, Google और Instagram ads, Google search support और local business campaigns.",
          slugs: [
            "social-media-marketing",
            "google-meta-ads",
            "seo-services",
            "digital-marketing",
            "retail-local-business-marketing"
          ]
        },
        {
          title: "Website और Online Presence",
          text: "Business को credible और promotion-ready दिखाने वाली websites.",
          slugs: ["web-designing", "web-development"]
        },
        {
          title: "Specialized Campaigns",
          text: "Elections, real estate, jewellery, weddings, schools, reels और custom local advertising के लिए focused promotion.",
          slugs: [
            "election-management",
            "real-estate-marketing",
            "jewellery-luxury-branding",
            "content-reel-production",
            "event-wedding-digital-invitations",
            "school-admission-campaigns",
            "customized-advertising"
          ]
        },
        {
          title: "Election Ground Support",
          text: "Surveys, voter slips, print material, video vans और booth teams के लिए on-ground election support.",
          slugs: [
            "election-software-management",
            "booth-survey-voter-analysis",
            "voter-slip-booth-kit",
            "led-van-video-campaigns",
            "print-media-design",
            "election-material-supply"
          ]
        }
      ],
      systemEyebrow: "Clear campaign planning",
      systemTitle: "सही audience. सही message. Better inquiries.",
      systemText:
        "Business owner को हर channel समझना जरूरी नहीं है. Chaitanya Media यह clear करता है कि किसे reach करना है, क्या कहना है, कहां promote करना है और inquiries कैसे handle करनी हैं.",
      systemPills: ["Local businesses", "Real estate", "Political leaders", "Election work"],
      systemCapabilities: [
        {
          kicker: "01 किसे reach करना है",
          title: "Right audience समझें",
          text: "Promotion शुरू करने से पहले area, audience, offer और inquiry path clear किया जाता है.",
          points: ["Area और audience map", "Competitor और category check", "Offer और message angle"]
        },
        {
          kicker: "02 कहां promote करना है",
          title: "Right channels चुनें",
          text: "Goal के हिसाब से SMS, WhatsApp, Meta, Google, SEO, reels, admission videos, event invites, website या IVR चुना जाता है.",
          points: ["Awareness channels", "Inquiry channels", "Follow-up और report channels"]
        },
        {
          kicker: "03 Inquiry handling",
          title: "Response easy रखें",
          text: "Calls, WhatsApp replies, forms और missed calls के लिए clear route होना चाहिए.",
          points: ["Landing page या form", "WhatsApp और phone route", "Missed-call और IVR options"]
        },
        {
          kicker: "04 अगली बार improve करें",
          title: "क्या work हुआ देखकर improve करें",
          text: "Reports next content, offer, area और budget decide करने में मदद करती हैं.",
          points: ["Reach और response review", "Inquiry quality check", "Next campaign priorities"]
        }
      ],
      workflowEyebrow: "Chaitanya Media कैसे काम करता है",
      workflowTitle: "First call से campaign launch तक.",
      workflowText:
        "Local businesses, real estate teams, brands और political campaigns के लिए simple four-step process.",
      workflowSteps: [
        {
          title: "First discussion",
          text: "Services suggest करने से पहले goal, area, audience, current material, competitors और urgency समझी जाती है.",
          points: ["Goal और audience", "Competitor check", "Service shortlist"]
        },
        {
          title: "Material तैयार करें",
          text: "Plan के हिसाब से posts, reels, video shoots, invitation flows, website pages, ad setup, messages और inquiry paths तैयार किए जाते हैं.",
          points: ["Website pages", "Posts, shoots और reels", "Inquiry और reporting paths"]
        },
        {
          title: "Selected services launch करें",
          text: "Plan के हिसाब से ads, social, SEO, SMS, WhatsApp, voice या web पर selected services live की जाती हैं.",
          points: ["Channel launch", "Lead capture", "Daily hygiene"]
        },
        {
          title: "Review करके improve करें",
          text: "Reach, inquiries, response gaps और next campaign priority review की जाती है.",
          points: ["Simple review", "Budget guidance", "Next 30-day plan"]
        }
      ],
      ugcEyebrow: "Video content",
      ugcTitle: "Attention को action में बदलने वाला UGC content.",
      ugcText:
        "Short vertical videos, founder clips, product demos, food reels और campaign explainers customer call से पहले brand को real feel कराते हैं.",
      ugcVideos: [
        {
          title: "First client meeting",
          category: "Business growth planning",
          src: "/videos/1.mp4",
          poster: "/images/Video%20Thumbnails/1.jpg"
        },
        {
          title: "Digital wedding invitation setup",
          category: "Voice + WhatsApp campaign",
          src: "/videos/2.mp4",
          poster: "/images/Video%20Thumbnails/2.jpg"
        },
        {
          title: "Live campaign reports",
          category: "WhatsApp + voice proof",
          src: "/videos/3.mp4",
          poster: "/images/Video%20Thumbnails/3.jpg"
        },
        {
          title: "School admission video shoot",
          category: "Video marketing",
          src: "/videos/4.mp4",
          poster: "/images/Video%20Thumbnails/4.jpg"
        },
        {
          title: "Car detailing growth meeting",
          category: "Google + Meta ads",
          src: "/videos/5.mp4",
          poster: "/images/Video%20Thumbnails/5.jpg"
        },
        {
          title: "Repeat wedding campaign setup",
          category: "Premium client trust",
          src: "/videos/6.mp4",
          poster: "/images/Video%20Thumbnails/6.jpg"
        },
        {
          title: "Supermarket growth pitch",
          category: "Retail marketing",
          src: "/videos/7.mp4",
          poster: "/images/Video%20Thumbnails/7.jpg"
        }
      ]
    },
    servicesPage: {
      metaTitle: "Pune में Digital Marketing Services",
      metaDescription:
        "Pune में SMS, WhatsApp, voice calls, digital wedding invitations, school admission campaigns, social media, Google और Instagram ads, websites, election support और local business marketing.",
      eyebrow: "Services",
      title: "Business promotion और election campaigns के लिए services.",
      copy:
        "Chaitanya Media SMS, WhatsApp, call campaigns, digital event invitations, admission videos, ads, social media, websites, local business growth campaigns, election support, booth surveys, voter slips, print material, LED van promotion और campaign material देता है. हर service यह बताती है कि वह किस काम में मदद करती है.",
      menuEyebrow: "Service menu",
      menuTitle: "आपको जो service या campaign support चाहिए वह चुनें.",
      howEyebrow: "Chaitanya Media कैसे काम करता है",
      howTitle: "पहले need समझें, फिर service चुनें.",
      howText:
        "Target area, audience, message, budget और follow-up साथ में plan हों तो promotion बेहतर काम करता है.",
      steps: [
        "Business, location, audience और goal समझें.",
        "Need को fit करने वाली services चुनें.",
        "Posts, ads, messages, calls, website pages या print material तैयार करें.",
        "Inquiries review करके next step improve करें."
      ]
    },
    serviceDetail: {
      strategyCall: "WhatsApp पर बात करें",
      discussScope: "Details पूछें",
      whenHelpsEyebrow: "यह कब मदद करता है",
      whenHelpsTitle: "जब promotion confusing लगे तब useful.",
      whenHelpsText:
        "पहले यह समझा जाता है कि किसे reach करना है, कहां promote करना है, क्या कहना है और inquiries कैसे handle करनी हैं.",
      includedEyebrow: "Chaitanya Media क्या करता है",
      includedTitle: "Simple work plan",
      includedText: "Final work selected service, budget, timeline और area पर depend करता है.",
      outcomesEyebrow: "क्या सुधरता है",
      outcomesTitle: "यह service क्या clear करने में मदद करती है.",
      claimSafetyEyebrow: "Important note",
      claimSafetyTitle: "यह service क्या guarantee नहीं करती.",
      claimSafetyText:
        "Marketing को plan और improve किया जा सकता है. लेकिन final results audience, offer, budget, timing, competition और follow-up पर depend करते हैं.",
      processEyebrow: "यह कैसे काम करता है",
      processTitle: "Simple step-by-step process",
      processText:
        "Need समझें, right service चुनें, work शुरू करें, फिर क्या हुआ यह review करें.",
      questionsEyebrow: "Questions",
      commonQuestionsPrefix: "Common questions about",
      relatedEyebrow: "Related services",
      relatedTitle: "दूसरी services जो मदद कर सकती हैं.",
      viewService: "Service देखें"
    },
    resultsPage: {
      metaTitle: "Campaign Results और Proof",
      metaDescription:
        "Chaitanya Media के लिए work proof, campaign examples, client categories और trust signals.",
      schemaName: "Campaign Results और Proof",
      schemaDescription: "Chaitanya Media के campaign examples और client categories.",
      eyebrow: "Proof और results",
      title: "Chaitanya Media पर trust करने में मदद करने वाला work proof.",
      copy:
        "यह page current trust signals, client categories, campaign material और approved testimonials/examples जोड़ने की जगह दिखाता है.",
      numbersEyebrow: "Numbers",
      numbersTitle: "Current trust numbers",
      clientsEyebrow: "Who we work with",
      clientsTitle: "Client categories जिन्हें Chaitanya Media support कर सकता है.",
      clientsText:
        "Approved examples available होते ही हर category के लिए real work दिखाया जा सकता है.",
      trustEyebrow: "विश्वास संकेत",
      trustTitle: "Claims clear और honest रखें.",
      trustText:
        "Public numbers और proof तभी दिखाएं जब business owner उन्हें confirm कर सके.",
      proofCardText: "Screenshots, reports, testimonials या campaign records से जहां संभव हो इसे back करें.",
      caseStudiesEyebrow: "केस स्टडीज",
      caseStudiesTitle: "Fake numbers के बिना real work stories.",
      caseStudiesText:
        "हर story में client need, Chaitanya Media ने क्या किया और कौन सा proof available है यह clear होना चाहिए. Client names और results approval के बाद ही add करें.",
      caseStudyNeedLabel: "जरूरत",
      caseStudyResponseLabel: "Chaitanya Media की कार्रवाई",
      caseStudyCta: "Service खोलें",
      galleryEyebrow: "पोर्टफोलियो गैलरी",
      galleryTitle: "सिर्फ service names नहीं, real assets दिखाएं.",
      galleryText:
        "Visitors को काम दिखे इसलिए approved banners, reels, screenshots और campaign examples use करें.",
      credentialsEyebrow: "विश्वास संकेत",
      credentialsTitle: "Agency पर trust करना आसान बनाने वाले संकेत.",
      credentialsText:
        "Confirm हो सकने वाले business details, numbers और examples दिखाएं.",
      complianceEyebrow: "जिम्मेदार अभियान नियम",
      complianceTitle: "Safe campaign और messaging rules.",
      complianceText:
        "SMS, WhatsApp, voice calls, political work और ads proper approval और responsible data use के साथ ही भेजें. यह legal advice नहीं है.",
      materialEyebrow: "Campaign material examples",
      materialTitle: "Real promotion assets, clean तरीके से दिखाए गए.",
      materialText:
        "Owner-provided banners Chaitanya Media द्वारा offer की गई election promotion और offline campaign services दिखाते हैं. New site पर इन्हें proof examples की तरह use किया गया है, जबकि service story clean और modern रखी गई है.",
      materialNote:
        "इन examples को approval के बाद ही use करें. इन्हें result guarantee की तरह न दिखाएं.",
      portfolioEyebrow: "पोर्टफोलियो proof",
      portfolioTitle: "Services के पीछे का काम दिखाएं.",
      portfolioText:
        "हर service को campaign material, reels, field work, website pages या approved client examples से connect करें.",
      portfolioCta: "Proof देखें",
      testimonialsEyebrow: "ग्राहक प्रतिक्रिया",
      testimonialsTitle: "Client feedback, approval के बाद add करें.",
      testimonialsText:
        "Client quotes permission और context के साथ ही publish करें.",
      finalEyebrow: "यहां से शुरू करें",
      finalTitle: "क्या आपके business या campaign promotion के लिए मदद चाहिए?",
      primaryCta: "Free Consultation Book करें",
      secondaryCta: "Chaitanya Media Contact करें"
    },
    aboutPage: {
      metaTitle: "Chaitanya Media के बारे में",
      metaDescription:
        "Chaitanya Media Pune की digital marketing agency है जो local businesses, schools, retail shops, event campaigns, real estate teams और political campaigns के लिए काम करती है.",
      eyebrow: "Chaitanya Media के बारे में",
      title: "Indian businesses और campaigns के लिए digital marketing team.",
      copy:
        "Chaitanya Media local businesses, brands और political teams को promotion, inquiries और clear follow-up में मदद करता है.",
      introEyebrow: "हम कौन हैं",
      introTitle: "Marketing लोगों को action की तरफ ले जानी चाहिए.",
      introText:
        "काम practical है: सही लोगों तक पहुंचें, सही message बताएं, inquiries collect करें और समय पर follow-up करें.",
      finalEyebrow: "Next",
      finalTitle: "Simple discussion से शुरू करें.",
      servicesCta: "Services देखें",
      whatsappCta: "WhatsApp पर बात करें"
    },
    founderPage: {
      metaTitle: "Agency Leadership",
      metaDescription:
        "Chaitanya Media brands, businesses और campaign teams के लिए Pune digital marketing agency है.",
      eyebrow: "Agency leadership",
      title: "Businesses और leaders के लिए practical promotion support.",
      copy:
        "Chaitanya Media business growth, local inquiries और political promotion के लिए clear digital और field services देता है.",
      positioningEyebrow: "Positioning",
      positioningTitle: "Reach, inquiries, trust और follow-up के around built.",
      positioningText:
        "Chaitanya Media business promotion, election promotion, content, websites, ads, SMS, WhatsApp, event invitations, admission campaigns, reporting और follow-up support पर focus करता है.",
      proofEyebrow: "Core proof areas",
      proofTitle: "Agency को समय के साथ क्या prove करना चाहिए.",
      proofCards: [
        {
          title: "Campaign results",
          text: "Approval हो तो reach, inquiries और simple report screenshots."
        },
        {
          title: "Creative work",
          text: "Ads, reels, shoots, invitations, WhatsApp messages और campaign material."
        },
        {
          title: "Client categories",
          text: "Political leaders, schools, retailers, event hosts, automotive shops, builders और local businesses."
        }
      ]
    },
    blogPage: {
      metaTitle: "Digital Marketing Blog",
      metaDescription:
        "Campaign planning, real estate leads, election campaigns और local business growth पर practical articles.",
      eyebrow: "Knowledge base",
      title: "Practical digital marketing और campaign guidance.",
      copy:
        "Articles business owners और campaign teams के common promotion problems को simple language में explain करते हैं.",
      topicsEyebrow: "Topics",
      topicsTitle: "Clients से आने वाले common questions.",
      articlesEyebrow: "Articles",
      articlesTitle: "Business owners और campaign teams के लिए useful posts",
      articlesText:
        "हर post एक practical question answer करे और reader को next step decide करने में मदद करे.",
      readArticle: "Article पढ़ें",
      editorialEyebrow: "Editorial rule",
      editorialTitle: "सिर्फ views के लिए नहीं, clear decisions के लिए लिखें.",
      editorialText:
        "Blog को generic marketing filler avoid करना चाहिए. हर article reader को campaign problem, decision या next step समझने में मदद करे.",
      editorialPoints: [
        "Core service pages support करें",
        "Plain business language use करें",
        "Impossible outcome guarantees avoid करें",
        "Practical consultation CTA include करें"
      ]
    },
    blogPostPage: {
      nextEyebrow: "Next step",
      nextTitle: "क्या इसके लिए campaign plan चाहिए?",
      nextText:
        "अपना business, location, audience और goal share करें. Chaitanya Media next practical step suggest कर सकता है.",
      requestCta: "Plan पूछें",
      moreArticles: "More Articles",
      authorName: "Chaitanya Suhas Jadhav"
    },
    contactPage: {
      metaTitle: "Chaitanya Media Contact",
      metaDescription:
        "Digital marketing, ads, SMS, WhatsApp, voice calls, event invitations, admission campaigns, retail marketing, websites या election campaigns के लिए Chaitanya Media से contact करें.",
      eyebrow: "Contact",
      title: "आपको क्या चाहिए यह बताएं.",
      copy:
        "अपना business, location, service need और goal share करें. Chaitanya Media next practical step के साथ respond करेगा.",
      fastEyebrow: "Fast contact",
      fastTitle: "सबसे सही channel चुनें.",
      fastText:
        "Fast campaign discussion के लिए WhatsApp, consultation के लिए phone, या written scope के लिए email use करें.",
      cards: {
        whatsappTitle: "WhatsApp Consultation",
        whatsappText: "Quick campaign और growth discussion के लिए best.",
        phoneText: "Ads, SMS, WhatsApp, websites और campaign services के लिए call करें.",
        emailTitle: "Email Inquiry",
        emailText: "Project context, campaign goals और written scope भेजें."
      },
      requestEyebrow: "Growth request",
      requestTitle: "पहले basics भेजें.",
      requestText:
        "यह form v1 में email handoff use करता है. Destination, spam handling और data-retention rules confirm होने के बाद backend बाद में add किया जा सकता है.",
      alertText:
        "इस public form में passwords, payment data, private customer lists या confidential campaign documents include न करें.",
      form: {
        name: "नाम",
        business: "Business या campaign name",
        phone: "फोन",
        email: "ईमेल",
        location: "लक्ष्य स्थान",
        service: "जरूरी सेवा",
        selectService: "Service चुनें",
        timeline: "समयसीमा",
        selectTimeline: "समयसीमा चुनें",
        timelineOptions: ["तुरंत", "2 हफ्तों में", "इस महीने", "योजना चरण"],
        budget: "अनुमानित budget",
        selectBudget: "Budget range चुनें",
        budgetOptions: ["मार्गदर्शन चाहिए", "₹25,000 से कम", "₹25,000 - ₹1 lakh", "₹1 lakh+"],
        preferredContact: "पसंदीदा संपर्क",
        preferredContactOptions: ["WhatsApp", "फोन कॉल", "ईमेल"],
        goal: "अभियान लक्ष्य",
        consent:
          "मैं समझता/समझती हूं कि यह inquiry form है और मैं confidential lists, passwords, payment data या private campaign documents upload नहीं करूंगा/करूंगी.",
        submit: "Request Submit करें"
      }
    },
    thankYouPage: {
      metaTitle: "Thank You",
      metaDescription: "Chaitanya Media से contact करने के लिए धन्यवाद.",
      eyebrow: "Thank you",
      title: "आपकी request received हो गई है.",
      copy: "Chaitanya Media message review करके दिए गए contact channel पर follow up करेगा.",
      cta: "Home पर वापस जाएं"
    },
    notFoundPage: {
      eyebrow: "404",
      title: "यह page available नहीं है.",
      copy: "Chaitanya Media rebuild के दौरान page move हो गई हो सकती है. Homepage या services page से शुरू करें.",
      home: "Home",
      services: "Services"
    },
    legalEyebrow: "Policy"
  }
};

export function isAppLocale(locale: string): locale is AppLocale {
  return routing.locales.includes(locale as AppLocale);
}

export function getLocale(locale: string | undefined): AppLocale {
  return locale && isAppLocale(locale) ? locale : routing.defaultLocale;
}

export function getContent(locale: string | undefined = routing.defaultLocale): SiteContent {
  return contentByLocale[getLocale(locale)];
}

export function getService(localeOrSlug: string, maybeSlug?: string) {
  const locale = maybeSlug ? localeOrSlug : routing.defaultLocale;
  const slug = maybeSlug ?? localeOrSlug;

  return getContent(locale).services.find((service) => service.slug === slug);
}

export function getBlogPost(localeOrSlug: string, maybeSlug?: string) {
  const locale = maybeSlug ? localeOrSlug : routing.defaultLocale;
  const slug = maybeSlug ?? localeOrSlug;

  return getContent(locale).blogPosts.find((post) => post.slug === slug);
}

export function localePath(locale: AppLocale | string, path = "/") {
  const appLocale = getLocale(locale);
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;

  if (normalizedPath === "/") {
    return `/${appLocale}/`;
  }

  return `/${appLocale}${normalizedPath}`;
}

export function absoluteUrl(path: string) {
  return new URL(path, siteBase.url).toString();
}

export function localizedAbsoluteUrl(locale: AppLocale | string, path = "/") {
  return absoluteUrl(localePath(locale, path));
}

export const site = contentByLocale.en.site;
export const navItems = contentByLocale.en.navItems;
export const heroStats = contentByLocale.en.heroStats;
export const trustMarkers = contentByLocale.en.trustMarkers;
export const services = contentByLocale.en.services;
export const agencyStrengths = contentByLocale.en.agencyStrengths;
export const industries = contentByLocale.en.industries;
export const whyChooseUs = contentByLocale.en.whyChooseUs;
export const clientTypes = contentByLocale.en.clientTypes;
export const resultStats = contentByLocale.en.resultStats;
export const blogPosts = contentByLocale.en.blogPosts;
export const legalPages = contentByLocale.en.legalPages;
export const legalPageSlugs = legalSlugs;
