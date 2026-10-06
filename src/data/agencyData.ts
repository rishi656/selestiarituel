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
      'UI/UX Design',
      'Website Development',
      'Landing Pages',
      'Corporate Websites',
      'Custom Web Applications',
      'Website Maintenance',
      'Performance Optimization',
      'SEO-ready Development'
    ],
    deliverables: [
      'Bespoke Figma UI/UX Prototypes',
      'Custom React/Next.js/WordPress Development',
      'Mobile-First Responsive Layouts',
      'Core Web Vitals 95+ Performance Tuning',
      'Complete CMS Integration',
      'Technical SEO & Schema Markup'
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
      'E-commerce Website Design',
      'Shopify & Shopify Plus',
      'WooCommerce Development',
      'Custom E-commerce Platforms',
      'Product Page Optimization',
      'Checkout & Cart Optimization',
      'Conversion Rate Optimization (CRO)',
      'Analytics & ERP Integration',
      'Ongoing Store Maintenance'
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
    title: 'Digital Marketing',
    slug: 'digital-marketing',
    tagline: 'TURN ATTENTION INTO GROWTH.',
    description: 'Data-driven campaigns that increase visibility, leads, customers and revenue.',
    iconName: 'TrendingUp',
    heroHeadline: 'TURN ATTENTION INTO GROWTH.',
    features: [
      'Search Engine Optimization (SEO)',
      'Google Ads (Search & Shopping)',
      'Meta Ads (Facebook & Instagram)',
      'Performance Marketing Strategy',
      'Lead Generation Campaigns',
      'Conversion Rate Optimization',
      'Advanced Marketing Analytics',
      'Full-Funnel Growth Strategy'
    ],
    deliverables: [
      'Comprehensive Technical & Content SEO',
      'Google Search & Performance Max Campaigns',
      'High-ROAS Meta Paid Ad Funnels',
      'Real-Time Client Dashboard Analytics',
      'Lead Magnets & Landing Page Conversion Tracks',
      'Attribution Modeling & Weekly Reporting'
    ],
    process: [
      { step: '01', name: 'Market & Competitor Audit', detail: 'Keyword research, paid intelligence, market gap mapping.' },
      { step: '02', name: 'Funnel Architecture', detail: 'Creating top, middle, and bottom of funnel conversion pathways.' },
      { step: '03', name: 'Campaign Execution', detail: 'Launching hyper-targeted search, social, and display ads.' },
      { step: '04', name: 'Scale & Optimization', detail: 'Daily bid adjustments, creative iteration, and scaling win assets.' }
    ],
    benefits: [
      'Predictable Lead & Revenue Acquisition',
      'Maximised Return on Ad Spend (ROAS)',
      'Dominant Search Engine Visibility',
      'Transparent ROAS Data Dashboards'
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
      'Social Media Strategy',
      'Content Creation & Curation',
      'Creative Graphic Design',
      'Brand Copywriting & Messaging',
      'Social Visual Branding',
      'Community Management',
      'Paid Social Advertising',
      'Influencer Marketing',
      'Monthly Content Calendars'
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
      'Brand Visual Identity & Graphic Assets',
      'Product & Commercial Photography',
      'Creative Campaign Direction',
      'Social Media Brand Assets',
      'Motion Graphics & UI Animation',
      'Creative Direction',
      'Editorial Copywriting',
      'Audio & Sound Design'
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
    categoryLabel: 'Digital Marketing & Growth',
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
