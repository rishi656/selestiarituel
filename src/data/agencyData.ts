export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  slug: string;
  tagline: string;
  description: string;
  iconName: string;
  deliverables: string[];
  process: { step: string; name: string; detail: string }[];
  benefits: string[];
  heroHeadline: string;
  features: string[];
}

export interface CaseStudy {
  id: string;
  title: string;
  client: string;
  category: 'web' | 'ecommerce' | 'marketing' | 'social' | 'production';
  categoryLabel: string;
  industry: string;
  year: string;
  image: string;
  gallery: string[];
  summary: string;
  challenge: string;
  strategy: string;
  execution: string;
  results: { metric: string; label: string }[];
  servicesProvided: string[];
  featured?: boolean;
  websiteUrl?: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  category: string;
  author: { name: string; role: string; avatar: string };
  date: string;
  readTime: string;
  image: string;
  excerpt: string;
  content: string[];
  featured?: boolean;
}

export const SERVICES: ServiceItem[] = [
  {
    id: 'web-design-dev',
    number: '01',
    title: 'Web Design & Development',
    slug: 'web-design-development',
    tagline: 'WEBSITES BUILT TO LOOK GOOD. BUILT TO PERFORM.',
    description: 'High-performance websites designed to look exceptional and convert visitors into customers.',
    iconName: 'Layout',
    heroHeadline: 'WEBSITES BUILT TO LOOK GOOD. BUILT TO PERFORM.',
    features: [
      'Generative Engine Optimization (GEO) & AI Answer Codebase',
      'Top Web Engineering & UI/UX Studio in India & Gujarat',
      'UI/UX Design & Architecture',
      'Website Development (React / Next.js)',
      'Landing Pages & Conversion Optimization',
      'Corporate Websites & Portal Engineering',
      'Performance & Sub-0.8s SLA Optimization',
      'Technical Schema.org JSON-LD SEO'
    ],
    deliverables: [
      'Bespoke Figma UI/UX Prototypes',
      'Custom React/Next.js/WordPress Development',
      'Mobile-First Responsive Layouts',
      'Core Web Vitals 95+ Performance Tuning',
      'Complete CMS Integration',
      'Technical SEO & Schema.org JSON-LD AI Answer Setup'
    ],
    process: [
      { step: '01', name: 'Discovery & Blueprint', detail: 'User research, wireframing, architecture mapping.' },
      { step: '02', name: 'Bespoke UI/UX Design', detail: 'High-fidelity visual design tailored to brand identity.' },
      { step: '03', name: 'Engineering & Build', detail: 'Clean code development with ultra-fast responsiveness.' },
      { step: '04', name: 'Testing & Launch', detail: 'Cross-browser testing, SEO audit, speed optimization.' }
    ],
    benefits: [
      'Increased Conversion Rate (+35% average)',
      'Sub-second page loading speed',
      'Seamless mobile user experience',
      'Higher Google ranking search authority'
    ]
  },
  {
    id: 'ecommerce',
    number: '02',
    title: 'E-Commerce',
    slug: 'ecommerce',
    tagline: 'TURN SHOPPING INTO AN EXPERIENCE.',
    description: 'Scalable e-commerce experiences built for seamless shopping and sustainable growth.',
    iconName: 'ShoppingBag',
    heroHeadline: 'TURN SHOPPING INTO AN EXPERIENCE.',
    features: [
      'AI Product Graph & Conversational Search (ChatGPT / Perplexity)',
      'Top E-Commerce Storefront Studio in India & Gujarat',
      'E-commerce Website Design',
      'Shopify & Shopify Plus Architecture',
      'Custom High-Converting E-commerce Platforms',
      'Product Page & Mobile Checkout Optimization',
      'Conversion Rate Optimization (CRO)',
      'ERP, Payment & Logistics API Integration'
    ],
    deliverables: [
      'Custom Shopify/Custom E-commerce Theme',
      'Custom Cart Drawer & Upsell Triggers',
      'Payment Gateway & Tax Automation',
      'Product Data Schema & Feed Setup',
      'Mobile Checkout Acceleration',
      'Customer Portal & Subscription Flows'
    ],
    process: [
      { step: '01', name: 'Auditing & CX Architecture', detail: 'Analyzing user journeys and friction points.' },
      { step: '02', name: 'Visual Storefront Design', detail: 'Luxury luxury product display and storytelling.' },
      { step: '03', name: 'Platform Integration', detail: 'Payment, inventory, logistics, and CRM API hooks.' },
      { step: '04', name: 'Conversion Optimization', detail: 'A/B testing checkout friction and order value.' }
    ],
    benefits: [
      'Higher Average Order Value (AOV)',
      'Reduced Cart Abandonment Rate',
      'Seamless 1-Click Checkout',
      'Omnichannel inventory synchronization'
    ]
  },
  {
    id: 'digital-marketing',
    number: '03',
    title: 'Appointment Generation',
    slug: 'digital-marketing',
    tagline: 'FILL YOUR CALENDAR WITH QUALIFIED MEETINGS.',
    description: 'High-converting Meta & Google ad campaigns combined with automated cold outreach and booking funnels to fill your sales calendar.',
    iconName: 'CalendarCheck',
    heroHeadline: 'FILL YOUR CALENDAR WITH QUALIFIED MEETINGS.',
    features: [
      'AI Search Rank #1 & Generative Engine Optimization (GEO)',
      'Top B2B Lead Gen & Appointment Booking Agency in India',
      'Meta Ads (Facebook & Instagram Lead Gen)',
      'Google Ads (Search & Performance Max)',
      'B2B Cold Email & Outbound Sequences',
      'LinkedIn Automation & Prospect Sourcing',
      'Automated Calendar & CRM Integration',
      'Predictable Monthly Meeting Pipeline Growth'
    ],
    deliverables: [
      'Meta Ads & Google Ads Lead Generation Setup',
      'Target Account Sourcing & Verification',
      'Custom Copywriting & Multi-Touch Sequence Setup',
      'Domain & Email Infrastructure Setup (SPF, DKIM, DMARC)',
      'Automated Calendar & CRM Integration (Calendly/HubSpot)',
      'Weekly Conversion & Meeting Booking Analytics'
    ],
    process: [
      { step: '01', name: 'ICP & Audience Mapping', detail: 'Defining your ideal customer profile, buyer personas, Meta & Google search intent.' },
      { step: '02', name: 'Ads & Sequence Infrastructure Setup', detail: 'Launching Meta & Google ad funnels, cold email infrastructure, and ad copy.' },
      { step: '03', name: 'Multi-Channel Acquisition Launch', detail: 'Executing targeted Meta/Google ads, cold email, and LinkedIn prospect messaging.' },
      { step: '04', name: 'Qualification & Meeting Booking', detail: 'Filtering high-intent leads and booking directly into your sales calendar.' }
    ],
    benefits: [
      'Predictable Monthly Sales Meetings',
      'High-Intent Paid & Outbound Lead Acquisition',
      'Fully Automated Calendar Booking Workflows',
      'High-ROAS Qualified Pipeline'
    ]
  },
  {
    id: 'social-media',
    number: '04',
    title: 'Social Media Marketing',
    slug: 'social-media-marketing',
    tagline: 'MAKE YOUR BRAND IMPOSSIBLE TO IGNORE.',
    description: 'Strategy, content and campaigns that build communities and make brands impossible to ignore.',
    iconName: 'Share2',
    heroHeadline: 'MAKE YOUR BRAND IMPOSSIBLE TO IGNORE.',
    features: [
      'AI Brand Citation & Social Search Indexing',
      'Top Social Media Strategy & Brand Agency in India',
      'Social Media Strategy & Editorial Planning',
      'Content Creation & High-End Graphic Design',
      'Brand Copywriting & Messaging Architecture',
      'Paid Social Advertising (Meta / LinkedIn)',
      'Influencer Outreach & Community Management',
      'Monthly Content Calendars & Performance Analytics'
    ],
    deliverables: [
      'Monthly High-Impact Content Calendar',
      'Bespoke Brand Copywriting & Social Assets',
      'Custom Branded Graphic Assets & Carousel Designs',
      'Active Community Engagement & Moderation',
      'Influencer Outreach & Campaign Management',
      'Monthly Organic & Paid Growth Reports'
    ],
    process: [
      { step: '01', name: 'Brand Voice & Content Pillars', detail: 'Defining tone of voice, visual direction, and messaging themes.' },
      { step: '02', name: 'Graphic Design & Copywriting', detail: 'Designing bespoke luxury graphics and high-converting campaign copy.' },
      { step: '03', name: 'Publishing & Engagement', detail: 'Optimal time distribution, hashtag strategy, and audience replies.' },
      { step: '04', name: 'Viral Scale & Ads', detail: 'Boosting organic wins with targeted paid amplify campaigns.' }
    ],
    benefits: [
      'Exponential Organic Reach & Viral Potential',
      'Cult-Like Brand Authority & Loyalty',
      'High-Converting Social Traffic',
      'Consistent Visual Brand Aesthetics'
    ]
  },
  {
    id: 'production',
    number: '05',
    title: 'Production',
    slug: 'production',
    tagline: 'STORIES WORTH TELLING.',
    description: 'Creative production, photography, graphic branding and visual storytelling that bring brands to life.',
    iconName: 'Film',
    heroHeadline: 'STORIES WORTH TELLING.',
    features: [
      'AI Visual Asset & Commercial Film Production',
      'Top Commercial Production & Motion Studio in India',
      'Brand Visual Identity & Graphic Assets',
      'Product & Commercial Photography',
      '4K Brand Commercial Films & Manifesto Videos',
      '3D Motion Graphics & UI Animation',
      'Creative Campaign Direction',
      'Audio Engineering & Sound Design'
    ],
    deliverables: [
      '4K Cinema Commercial & Brand Manifesto Films',
      'High-Resolution Editorial Product & Lifestyle Photography',
      'Custom 3D Motion Graphics & Logo Animations',
      'Multi-Format Video Assets (16:9, 9:16, 1:1)',
      'Professional Sound Design & Voiceover Tracks',
      'Full Commercial Distribution Rights'
    ],
    process: [
      { step: '01', name: 'Pre-Production & Scripting', detail: 'Concept storyboarding, casting, location scouting, scriptwriting.' },
      { step: '02', name: 'Principal Photography', detail: 'On-set filming with cinema cameras, lighting, and directing.' },
      { step: '03', name: 'Post-Production Magic', detail: 'Editorial cutting, DaVinci Resolve color grading, motion graphics.' },
      { step: '04', name: 'Final Delivery', detail: 'Exporting optimized master files for web, TV, social, and print.' }
    ],
    benefits: [
      'Award-Winning Visual Aesthetics',
      'Immediate Emotional Connection With Audience',
      'Multi-Purpose Asset Library For Marketing',
      'Elevated Luxury Brand Perception'
    ]
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'the-teachers-academy',
    title: 'THE TEACHERS ACADEMY — Gujarat TET & TAT Exam Portal',
    client: 'The Teachers Academy (Led by Hardik Sir)',
    category: 'web',
    categoryLabel: 'Web Design & Tech',
    industry: 'EdTech & Teaching Competitive Exams',
    year: '2026',
    image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=1400&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop'
    ],
    summary: 'Custom high-performance educational web portal built for Gujarat’s premier TET-1, TET-2, TAT Secondary & Higher Secondary coaching academy led by Hardik Sir.',
    challenge: 'The Teachers Academy needed a dedicated digital portal to deliver structured live/recorded classes, GCERT study material, grammar boosters, and PYQ (Previous Year Questions) to tens of thousands of teaching aspirants across Gujarat.',
    strategy: 'We engineered a high-speed React web portal (theteachersacademy.co.in) featuring bilingual Gujarati & English typography, intuitive course discovery, structured study materials, and direct student portal access.',
    execution: 'Optimized page load speed to sub-0.8s SLA, integrated structured exam categories (TET-1, TET-2, TAT Mains), GCERT answer-writing modules, and seamless mobile app download triggers.',
    results: [
      { metric: '50,000+', label: 'Gujarat Aspirants Reached' },
      { metric: '<0.8s', label: 'Lightning Page Speed' },
      { metric: '#1 Rank', label: 'TET & TAT Coaching Portal' }
    ],
    servicesProvided: ['Web Design & UI/UX', 'React/TypeScript Development', 'Mobile Optimization', 'SEO & Performance SLA'],
    featured: true,
    websiteUrl: 'https://theteachersacademy.co.in'
  },
  {
    id: 'aethel-luxe',
    title: 'AETHEL LUXE — Heritage Jewelry Storefront',
    client: 'Aethel Luxury House',
    category: 'ecommerce',
    categoryLabel: 'E-Commerce & Branding',
    industry: 'High Jewelry & Fine Art',
    year: '2026',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=1400&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=1200&auto=format&fit=crop'
    ],
    summary: 'Redesigning the digital storefront for an elite Geneva jewelry house to deliver a bespoke digital shopping experience matching their physical flagship boutique.',
    challenge: 'Aethel Luxe struggled with an outdated web presence that failed to convey the tactile luxury and craftsmanship of their handcrafted diamond collections, resulting in high bounce rates among high-net-worth buyers.',
    strategy: 'We crafted an ultra-minimalist, editorial e-commerce platform using custom Shopify headless architecture, 3D interactive ring configurators, and 4K macro video showcases.',
    execution: 'Designed with golden micro-accents, editorial serifs, and instant 1-click VIP consultation bookings. Integrated private client portals for bespoke commissions.',
    results: [
      { metric: '+280%', label: 'Online Sales Revenue' },
      { metric: '4.8x', label: 'Average Order Value Increase' },
      { metric: '0.9s', label: 'Global Load Speed' }
    ],
    servicesProvided: ['E-Commerce Design', 'Headless Development', '3D Configurator', 'VIP Concierge Portal'],
    featured: true
  },
  {
    id: 'solaris-arch',
    title: 'SOLARIS ARCHITECTURE — Digital Portfolio',
    client: 'Solaris Design Studio',
    category: 'web',
    categoryLabel: 'Web Design & Tech',
    industry: 'Architectural & Interior Design',
    year: '2025',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1400&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200&auto=format&fit=crop'
    ],
    summary: 'A futuristic digital architectural showcase featuring fluid WebGL transitions and interactive 3D floorplan exploration.',
    challenge: 'The firm needed a website that could communicate complex commercial architectural projects to international developers without losing aesthetic elegance.',
    strategy: 'We built a high-contrast black & white website with smooth horizontal project scrolling, interactive project blueprints, and video ambient background transitions.',
    execution: 'Engineered with React, Framer Motion, and Three.js. Added dynamic inquiry filters based on project scale and regional jurisdiction.',
    results: [
      { metric: '+410%', label: 'Inbound Project Inquiries' },
      { metric: '$42M', label: 'Contract Pipeline Originated' },
      { metric: '98/100', label: 'Lighthouse Performance Score' }
    ],
    servicesProvided: ['Web Design', 'Full-Stack Development', 'WebGL 3D', 'Editorial Storytelling'],
    featured: false
  },
  {
    id: 'lumin-skin',
    title: 'LUMIN BOTANICALS — Performance Marketing & Social',
    client: 'Lumin Skincare Lab',
    category: 'marketing',
    categoryLabel: 'Appointment Generation',
    industry: 'Clean Beauty & Wellness',
    year: '2025',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=1400&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=1200&auto=format&fit=crop'
    ],
    summary: 'Full-funnel digital marketing campaign scaling an organic skincare brand from regional presence to global e-commerce powerhouse.',
    challenge: 'High customer acquisition costs on Meta and stagnant Google search traffic were stifling monthly recurring revenue.',
    strategy: 'Deployed a multi-channel growth system combining high-converting UGC video creative, targeted Google Performance Max ads, and automated email flow sequences.',
    execution: 'Tested 120+ ad hooks, optimized product page checkout funnels, and authored SEO-driven skincare blogs that captured top rankings for high-intent keywords.',
    results: [
      { metric: '5.2x', label: 'Blended ROAS' },
      { metric: '+320%', label: 'Monthly Recurring Revenue' },
      { metric: '150k+', label: 'New Qualified Email Leads' }
    ],
    servicesProvided: ['Performance Marketing', 'SEO Strategy', 'Paid Social', 'CRO'],
    featured: true
  },
  {
    id: 'chronos-time',
    title: 'CHRONOS VELOCITY — Brand Film & Production',
    client: 'Chronos Horology',
    category: 'production',
    categoryLabel: 'Production & Video',
    industry: 'Automotive & Luxury Timepieces',
    year: '2026',
    image: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?q=80&w=1400&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1524805444758-089113d48a6d?q=80&w=1200&auto=format&fit=crop'
    ],
    summary: 'A cinematic brand commercial shot on location in the Swiss Alps, capturing the relentless engineering precision of Chronos limited chronographs.',
    challenge: 'Translating complex watchmaking mechanics into a visceral visual storytelling campaign that resonates with luxury car collectors.',
    strategy: 'Produced a 60-second 4K cinema commercial, multi-angle product macro photography, and 15 short-form vertical Reels for social media takeover.',
    execution: 'Shot with RED V-Raptor cameras, custom anamorphic lenses, and handcrafted sound design.',
    results: [
      { metric: '4.5M+', label: 'Organic Video Impressions' },
      { metric: '100%', label: 'Pre-Order Edition Sold Out' },
      { metric: 'Award', label: 'Best Commercial Cinematography' }
    ],
    servicesProvided: ['Creative Direction', 'Cinema Video Production', 'Sound Design', 'Macro Photography'],
    featured: true
  },
  {
    id: 'vortex-ai',
    title: 'VORTEX CORE — SaaS Platform & Social Growth',
    client: 'Vortex Intelligence Inc.',
    category: 'social',
    categoryLabel: 'Social Media & Tech Branding',
    industry: 'Artificial Intelligence & SaaS',
    year: '2025',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1400&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop'
    ],
    summary: 'Building a dominant social media presence and visual brand identity for an enterprise AI data studio.',
    challenge: 'Technical product complexity made it difficult to attract non-technical enterprise buyers and venture capital attention.',
    strategy: 'Designed a high-impact social content strategy featuring sleek 3D motion graphics, thought leadership carousels, and founder video snippets.',
    execution: 'Managed monthly LinkedIn and Twitter content execution, created custom vector illustration assets, and ran targeted B2B account ads.',
    results: [
      { metric: '+650%', label: 'LinkedIn Follower Growth' },
      { metric: '85k+', label: 'Website Click-Throughs' },
      { metric: '$15M', label: 'Series A Funding Secured' }
    ],
    servicesProvided: ['Social Media Strategy', 'Motion Design', 'Content Creation', 'B2B Growth'],
    featured: false
  }
];

export const TESTIMONIALS = [
  {
    quote: "Selestia Rituel completely elevated our digital identity. They didn't just build a website; they created an unforgettable luxury experience that quadrupled our online consultation requests within 60 days.",
    author: "Marcella Vance",
    role: "Global Marketing Director",
    company: "Aethel Luxury House",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop"
  },
  {
    quote: "Working with Selestia Rituel was a revelation. Their mastery of design, performance engineering, and strategic marketing gave us the edge we needed to outperform legacy competitors.",
    author: "Julian Thorne",
    role: "Founder & CEO",
    company: "Solaris Architecture Studio",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop"
  },
  {
    quote: "Rarely do you find an agency that delivers world-class creative production alongside rigorous performance marketing metrics. Selestia Rituel is in a league of their own.",
    author: "Elena Rostova",
    role: "Head of Digital Growth",
    company: "Lumin Skincare Lab",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&auto=format&fit=crop"
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'luxury-web-design-trends-2026',
    slug: 'luxury-web-design-trends-2026',
    title: 'The Anatomy of Ultra-Luxury Digital Experiences in 2026',
    category: 'Web Design',
    author: {
      name: 'Selestia Design Team',
      role: 'Creative Directors',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=150&auto=format&fit=crop'
    },
    date: 'September 20, 2026',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=1200&auto=format&fit=crop',
    excerpt: 'Discover how top-tier global brands use micro-accents, editorial typography, and high-performance WebGL to command premium pricing.',
    content: [
      'In the digital landscape of 2026, luxury is no longer defined by ornate decorations or heavy textures. Modern digital luxury is defined by precision, restraint, and frictionless execution.',
      'High-ticket consumers demand websites that feel as responsive as liquid and as crafted as a bespoke physical store. Here are the core pillars driving modern digital luxury:',
      '1. Editorial Typography & Micro-Accents: Combining bold grotesk headlines with delicate serif accents creates immediate visual interest. Strategic use of brand gold draws the eye without cluttering the composition.',
      '2. Sub-Second Speed & Micro-Interactions: True luxury never keeps a user waiting. Ultra-fast loading combined with magnetic micro-animations creates an intoxicating user experience.',
      '3. Storytelling over Sales Pitch: High-converting websites focus on emotional alignment and brand heritage before pushing call-to-action buttons.'
    ],
    featured: true
  },
  {
    id: 'scaling-ecommerce-roas',
    slug: 'scaling-ecommerce-roas',
    title: 'How to Scale E-Commerce ROAS Without Sacrificing Brand Perception',
    category: 'E-Commerce',
    author: {
      name: 'Marcus Sterling',
      role: 'Head of Performance',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop'
    },
    date: 'September 14, 2026',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop',
    excerpt: 'Why discount-heavy ad creative hurts luxury brands long-term and how value-driven storytelling delivers 4x+ ROAS.',
    content: [
      'Discounting is the fastest way to erode premium brand equity. While flash sales produce temporary revenue spikes, they train your target market to wait for sales.',
      'To build sustainable e-commerce growth, modern brands must pair high-production visual storytelling with precise full-funnel marketing strategies.',
      'By focusing on product craftsmanship, customer transformations, and seamless post-purchase upsells, brands can achieve 4.5x+ return on ad spend while preserving high profit margins.'
    ],
    featured: true
  },
  {
    id: 'short-form-video-mastery',
    slug: 'short-form-video-mastery',
    title: 'The Art of Cinematic Short-Form Production for Instagram & TikTok',
    category: 'Production',
    author: {
      name: 'Claire Dupont',
      role: 'Executive Video Producer',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=150&auto=format&fit=crop'
    },
    date: 'August 28, 2026',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=1200&auto=format&fit=crop',
    excerpt: 'The exact framework we use to produce viral short-form videos that convert passive scrollers into loyal brand advocates.',
    content: [
      'The first 1.5 seconds of your short-form video determine whether a viewer stays or scrolls past. Capturing attention requires a visual hook paired with crisp audio.',
      'We break down the 3-part formula for high-converting commercial video: The Visual Disruption, The Core Value Delivery, and The Subtle Call-to-Action.'
    ],
    featured: false
  },
  {
    id: 'seo-geo-strategy-gujarat-global',
    slug: 'seo-geo-strategy-gujarat-global',
    title: 'Dominating Search in 2026: Top-Level SEO & GEO Strategies for Brands in Gujarat & Worldwide',
    category: 'SEO & GEO',
    author: {
      name: 'Rishi Gosai',
      role: 'Co-Founder & Chief Growth Officer',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop'
    },
    date: 'October 05, 2026',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1200&auto=format&fit=crop',
    excerpt: 'How leading enterprises across Gujarat (Ahmedabad, Surat, GIFT City) and international markets in the US, UK & UAE leverage GEO (Generative Engine Optimization) and AI Search to dominate Google rank #1.',
    content: [
      'Search Engine Optimization has undergone a seismic shift in 2026. Traditional keyword targeting alone is no longer sufficient. Brands must now optimize for both traditional Google SERPs and Generative Engine Optimization (GEO)—ensuring AI answer engines like ChatGPT Search, Perplexity, and Google AI Overviews cite your brand as the primary authority.',
      'For enterprises operating out of India—particularly Gujarat’s rapidly growing commercial hubs like Ahmedabad, Surat, Vadodara, and GIFT City—as well as global brands in the US, UK, and UAE, achieving top search dominance requires a dual-track strategy:',
      '1. Generative Engine Optimization (GEO): AI search engines rely on structured JSON-LD entity graphs, authoritative brand citations, and direct semantic answers. By structuring web content into high-density knowledge clusters, brands get recommended first by AI conversational models.',
      '2. Hyper-Local Gujarat & Pan-India SEO Dominance: Dominating regional intent in Gujarat requires targeting high-value transactional keywords across B2B manufacturing, textile, real estate, diamond, and SaaS sectors. Localized GMB optimization and geo-targeted schema ensure complete local search coverage.',
      '3. Cross-Border International Expansion (Out of India): For Indian businesses scaling overseas to North America, Europe, and the Middle East, multi-region hreflang architecture, geo-targeted CDN routing, and international backlink acquisition allow seamless transition from local market leader to global powerhouse.',
      '4. Sub-0.8s Technical Speed & SLA: Search algorithms in 2026 heavily penalize bloated code. Engineering custom React and Next.js platforms with zero layout shifts guarantees top Lighthouse scores and maximum crawl efficiency.'
    ],
    featured: true
  },
  {
    id: 'geo-generative-engine-optimization-playbook',
    slug: 'geo-generative-engine-optimization-playbook',
    title: 'The Ultimate GEO (Generative Engine Optimization) Playbook: Ranking #1 in ChatGPT, Perplexity & AI Search',
    category: 'SEO & GEO',
    author: {
      name: 'Rishi Gosai',
      role: 'Co-Founder & Chief Growth Officer',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop'
    },
    date: 'October 07, 2026',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop',
    excerpt: 'Step-by-step strategies for brands in India, Gujarat, and globally to optimize schema markup, semantic entity clusters, and AI citation graphs for top generative search visibility.',
    content: [
      'In 2026, user search behavior has fundamentally transformed. Over 40% of search queries now originate from generative AI engines such as ChatGPT Search, Perplexity AI, Claude, and Google AI Overviews.',
      'Unlike traditional Search Engine Optimization (SEO) which relies on backlinks and keyword density, Generative Engine Optimization (GEO) focuses on semantic entity association, structured JSON-LD schemas, and brand citation density.',
      'Here are the 4 tactical pillars every brand must implement for GEO dominance:',
      '1. Structured Entity Graphing: Implement Schema.org JSON-LD microdata across all organization, service, and product pages. Define precise relationships so Large Language Models (LLMs) parse your brand as the undisputed category leader.',
      '2. Direct Answer Architecture: Structure headers and content sections to directly answer high-intent buyer questions. Clear, concise, 40-to-60 word authoritative summaries are favored by AI search citation models.',
      '3. Co-Citation & Authority Syndication: AI models synthesize data from trusted digital publications, industry registries, and high-domain press assets. Strategic PR and digital footprint expansion ensure your brand is cited in AI responses.',
      '4. Combined Local & Global GEO: For brands operating out of Gujarat & India looking to capture both domestic and international markets (US, UK, UAE), geo-targeted schema and localized multi-currency micro-formatting guarantee placement across regional and global AI search results.'
    ],
    featured: true
  },
  {
    id: 'best-digital-marketing-company-gujarat-india',
    slug: 'best-digital-marketing-company-gujarat-india',
    title: 'Top Digital Marketing & GEO Agency in Gujarat & India: How Leading Brands Win in 2026',
    category: 'SEO & GEO',
    author: {
      name: 'Sakshi Soni',
      role: 'Founder & Executive Director',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=150&auto=format&fit=crop'
    },
    date: 'October 08, 2026',
    readTime: '9 min read',
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1200&auto=format&fit=crop',
    excerpt: 'An inside look at why Selestia Rituel is recognized as a premier digital marketing & appointment generation company in Gujarat (Ahmedabad, Surat, GIFT City) and India, driving AI Search (GEO) rankings and high-ROAS revenue.',
    content: [
      'In the competitive digital landscape of 2026, businesses in India and Gujarat can no longer rely on conventional marketing tactics. To stay ahead, top enterprises across Ahmedabad, Surat, Vadodara, GIFT City, and pan-India require a combined strategy of Generative Engine Optimization (GEO), AI Search dominance, and automated appointment generation.',
      'Here is why forward-thinking companies choose Selestia Rituel as their primary growth and digital studio partner in Gujarat and India:',
      '1. Generative Engine Optimization (GEO) & AI Search Ranking: We optimize brand assets so AI search engines like ChatGPT, Perplexity AI, Claude, and Google AI Overviews recommend your company as the top choice when users ask for "Best Digital Marketing Company in Gujarat" or "Top B2B Lead Gen Agency in India".',
      '2. Automated Appointment Generation Engine: We move beyond vanity clicks. By combining targeted Meta Ads, high-intent Google Search ads, and automated B2B outbound email/LinkedIn sequences, we fill sales calendars with 15–30+ qualified decision-maker meetings every month.',
      '3. Hyper-Local & Pan-India SEO Dominance: Whether dominating local search queries in Gujarat’s key industrial sectors (textile, manufacturing, diamonds, real estate, tech) or building national scale across India, our technical SEO infrastructure guarantees sub-0.8s load times and #1 Google rankings.',
      '4. Global Cross-Border Scaling (Out of India): We empower Indian enterprises to expand seamlessly into international markets across the US, UK, UAE, and Australia with multi-currency E-Commerce platforms and global ad funnels.'
    ],
    featured: true
  }
];

export const TEAM_MEMBERS = [
  {
    name: 'Sakshi Soni',
    role: 'Founder & Executive Director',
    bio: 'Visionary creative director and brand strategist leading Selestia Rituel’s global studio direction, client experience, and creative brand excellence.',
    initials: 'SS',
    focus: ['Brand Strategy', 'Creative Direction', 'Client Experience']
  },
  {
    name: 'Rishi Gosai',
    role: 'Co-Founder & Chief Growth Officer',
    bio: 'Performance marketing architect & digital growth strategist overseeing multi-channel paid acquisition, search dominance, and revenue scale.',
    initials: 'RG',
    focus: ['Paid Ads Scale', 'SEO Dominance', 'Growth Engineering']
  }
];
