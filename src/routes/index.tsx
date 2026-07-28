import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { Variants } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  Braces,
  Calendar,
  CheckCircle2,
  ChevronDown,
  Code2,
  Compass,
  Gauge,
  Globe2,
  Layers,
  Layout,
  Mail,
  MapPin,
  Palette,
  Rocket,
  Search,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Star,
  TrendingUp,
  Wrench,
} from "lucide-react";

/* Social icons (lucide-react in this project doesn't export brand icons) */
const svgProps = {
  viewBox: "0 0 24 24",
  fill: "currentColor",
  "aria-hidden": true,
} as const;

function LinkedinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...svgProps} {...props}>
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-.95 1.83-1.95 3.77-1.95 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.3c0-1.27-.02-2.9-1.77-2.9-1.77 0-2.04 1.38-2.04 2.8V21H9z" />
    </svg>
  );
}
function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...svgProps} fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
    </svg>
  );
}
function GithubIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...svgProps} {...props}>
      <path d="M12 .5A11.5 11.5 0 0 0 .5 12a11.5 11.5 0 0 0 7.86 10.92c.57.1.78-.25.78-.55v-2.02c-3.2.7-3.88-1.36-3.88-1.36-.52-1.34-1.28-1.7-1.28-1.7-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.2 1.77 1.2 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.04 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.21-1.49 3.18-1.18 3.18-1.18.63 1.58.23 2.75.11 3.04.74.81 1.19 1.83 1.19 3.09 0 4.41-2.69 5.38-5.26 5.67.41.35.77 1.05.77 2.12v3.14c0 .3.21.66.79.55A11.5 11.5 0 0 0 23.5 12 11.5 11.5 0 0 0 12 .5z" />
    </svg>
  );
}
function UpworkIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...svgProps} {...props}>
      <path d="M18.6 8.4c-2 0-3.6 1.3-4.3 3.4-1-1.5-1.8-3.4-2.3-5H9.4v6.1c0 1.2-1 2.2-2.2 2.2S5 14.1 5 12.9V6.8H2.4v6.1c0 2.6 2.1 4.8 4.7 4.8s4.7-2.2 4.7-4.8v-1c.5 1 1.1 2.1 1.8 3.1L12.1 21h2.7l1-4.7c.9.6 1.9 1 3 1 2.5 0 4.6-2.1 4.6-4.6s-2.2-4.3-4.8-4.3zm0 6.4c-.8 0-1.6-.4-2.2-.9l.2-.9c.3-1.4 1-2.2 2-2.2 1 0 1.9.9 1.9 1.9 0 1.2-.9 2.1-1.9 2.1z" />
    </svg>
  );
}

import portraitAsset from "@/assets/portrait.asset.json";
import project1Asset from "@/assets/project1.asset.json";
import project2Asset from "@/assets/project2.asset.json";
import project3Asset from "@/assets/project3.asset.json";
import project4Asset from "@/assets/project4.asset.json";
import vioraAsset from "@/assets/viora.asset.json";
import pianoAsset from "@/assets/piano.asset.json";
import calmAsset from "@/assets/calm.asset.json";
import luxeAsset from "@/assets/luxe.asset.json";
import auraAsset from "@/assets/aura.asset.json";
import coastlineAsset from "@/assets/coastline.asset.json";
import clearpathAsset from "@/assets/clearpath.asset.json";
import lumenAsset from "@/assets/lumen.asset.json";
import lakeislandAsset from "@/assets/lakeisland.asset.json";
import { Nav } from "@/components/portfolio/Nav";
import { Counter } from "@/components/portfolio/Counter";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Techgod — Squarespace Websites That Generate Leads" },
      {
        name: "description",
        content:
          "Premium Squarespace website design & development by Omowumi A. (Techgod). Built for coaches, consultants, creatives and service businesses to convert visitors into clients.",
      },
      {
        property: "og:title",
        content: "Techgod — Squarespace Websites That Generate Leads",
      },
      {
        property: "og:description",
        content:
          "60+ premium Squarespace websites shipped with a 100% Job Success Score.",
      },
      { property: "og:url", content: "/" },
      { property: "og:image", content: portraitAsset.url },
      { name: "twitter:image", content: portraitAsset.url },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

/* ---------------------------- Content data ---------------------------- */

const stats = [
  { value: 60, suffix: "+", label: "Websites Built" },
  { value: 3, suffix: "+", label: "Years Experience" },
  { value: 100, suffix: "%", label: "Job Success" },
  { value: 40, suffix: "+", label: "Happy Clients" },
];

const sellingPoints = [
  { icon: TrendingUp, text: "Built for Lead Generation" },
  { icon: Layout, text: "Mobile Responsive Design" },
  { icon: Search, text: "SEO Optimized for Visibility" },
  { icon: BadgeCheck, text: "Squarespace Expert" },
  { icon: Palette, text: "Custom Design Solutions" },
  { icon: Rocket, text: "Fast Delivery" },
  { icon: ShieldCheck, text: "Premium Support" },
];

const services = [
  {
    icon: Layout,
    title: "Squarespace Website Design",
    desc: "Bespoke, conversion-focused Squarespace sites tailored to your brand and audience.",
  },
  {
    icon: Sparkles,
    title: "Squarespace Redesign",
    desc: "Modernise your existing Squarespace site with a premium look, faster load and clearer CTAs.",
  },
  {
    icon: Rocket,
    title: "Landing Pages",
    desc: "High-performance landing pages engineered for lead capture, launches and paid traffic.",
  },
  {
    icon: ShoppingBag,
    title: "E-commerce Websites",
    desc: "Full Squarespace stores with polished product pages, checkout flows and analytics.",
  },
  {
    icon: Braces,
    title: "Custom CSS & JavaScript",
    desc: "Advanced customisations that push Squarespace beyond its default templates.",
  },
  {
    icon: Search,
    title: "SEO Optimization",
    desc: "Technical, on-page and content SEO so the right clients find you on Google.",
  },
  {
    icon: Wrench,
    title: "Website Maintenance",
    desc: "Ongoing care plans: updates, backups, tweaks and priority support.",
  },
  {
    icon: Layers,
    title: "Website Migration",
    desc: "Migrate WordPress, Wix, Webflow or Showit to Squarespace with zero SEO loss.",
  },
  {
    icon: Gauge,
    title: "Performance Optimization",
    desc: "Speed audits and fixes for Core Web Vitals, mobile scores and conversion.",
  },
  {
    icon: Calendar,
    title: "Acuity Scheduling Integration",
    desc: "Seamless booking flows for coaches, therapists and service businesses.",
  },
];

type Category = "All" | "Business" | "E-commerce" | "Portfolio" | "Wellness" | "Consulting";

const projects: {
  title: string;
  industry: string;
  category: Exclude<Category, "All">;
  overview: string;
  challenge: string;
  solution: string;
  tech: string[];
  image: string;
}[] = [
  {
    title: "Estate & Co.",
    industry: "Interior Design & Real Estate",
    category: "Business",
    overview:
      "A refined Squarespace site for a luxury interior and property studio, unifying listings, story and services.",
    challenge: "Outdated site with weak imagery hierarchy and no clear inquiry path.",
    solution:
      "Editorial layout, warm neutral palette and a booking-first CTA structure across every page.",
    tech: ["Squarespace 7.1", "Custom CSS", "Acuity", "SEO"],
    image: project1Asset.url,
  },
  {
    title: "MediCare Plus",
    industry: "Wellness & Healthcare",
    category: "Wellness",
    overview:
      "A calm, trust-first Squarespace site for a multi-specialty wellness clinic and its practitioners.",
    challenge: "Complex service catalogue with low mobile conversion.",
    solution:
      "Clear service architecture, sticky appointment CTA and refined mobile-first components.",
    tech: ["Squarespace 7.1", "Custom JS", "Acuity", "Schema.org"],
    image: project2Asset.url,
  },
  {
    title: "LogiFleet & Co.",
    industry: "B2B Consulting & Logistics",
    category: "Consulting",
    overview:
      "A confident, corporate Squarespace site for a global logistics consultancy with live tracking demos.",
    challenge: "Needed to feel enterprise-grade while staying easy to update in-house.",
    solution:
      "Custom Squarespace sections, gated case studies and a clean quote-request workflow.",
    tech: ["Squarespace 7.1", "Custom CSS", "Forms", "GA4"],
    image: project3Asset.url,
  },
  {
    title: "Wanderlust Voyages",
    industry: "Creative Agency & Hospitality",
    category: "E-commerce",
    overview:
      "A boutique Squarespace store for curated travel experiences, blending editorial storytelling with commerce.",
    challenge: "Balance rich imagery with fast performance and frictionless booking.",
    solution:
      "Optimised media pipeline, custom product templates and integrated booking on every card.",
    tech: ["Squarespace Commerce", "Custom CSS", "Stripe", "SEO"],
    image: project4Asset.url,
  },
  {
    title: "Viora Journal",
    industry: "Editorial & Media",
    category: "Portfolio",
    overview:
      "A refined editorial Squarespace site for a lifestyle publication covering tools, productivity and better living.",
    challenge: "Needed a magazine feel with fast article discovery and a strong newsletter funnel.",
    solution:
      "Editorial hero, category-driven article grid, affiliate-ready product blocks and a sticky subscribe CTA.",
    tech: ["Squarespace 7.1", "Custom CSS", "Newsletter", "SEO"],
    image: vioraAsset.url,
  },
  {
    title: "Piano Fundamentals",
    industry: "Online Learning",
    category: "E-commerce",
    overview:
      "A cinematic dark-mode course platform for a music educator selling structured lessons and progress tracking.",
    challenge: "Balance a premium visual feel with a clear course dashboard and lesson flow.",
    solution:
      "Custom dark UI, member area layout, lesson progress indicators and gated content pages.",
    tech: ["Squarespace Member Areas", "Custom CSS", "Stripe", "Video"],
    image: pianoAsset.url,
  },
  {
    title: "Calm Horizons Therapy",
    industry: "Wellness & Telehealth",
    category: "Wellness",
    overview:
      "A warm, trust-first Squarespace site for a private telehealth therapy and wellness practice.",
    challenge: "Convey compassion and clinical credibility while making booking effortless.",
    solution:
      "Editorial hero, service accordions, evidence-based trust bar and a sticky consultation CTA.",
    tech: ["Squarespace 7.1", "Acuity", "Custom CSS", "Local SEO"],
    image: calmAsset.url,
  },
  {
    title: "Luxe Society",
    industry: "Private Membership",
    category: "Business",
    overview:
      "A dark, editorial members-only Squarespace site for a private social club focused on events and community.",
    challenge: "Premium members-only feel with gated events, application flow and member area.",
    solution:
      "Cinematic dark UI, member login, event calendar with upcoming/past tabs and application funnel.",
    tech: ["Squarespace Member Areas", "Custom CSS", "Forms", "Events"],
    image: luxeAsset.url,
  },
  {
    title: "Aura Interiors",
    industry: "Interior Design & Retail",
    category: "E-commerce",
    overview:
      "A minimal, editorial Squarespace site pairing an interior design portfolio with a curated object shop.",
    challenge: "Blend a portfolio-first story with a functioning commerce catalog without visual clutter.",
    solution:
      "Serif-led editorial layout, filterable portfolio grid and clean product templates with cart.",
    tech: ["Squarespace Commerce", "Custom CSS", "Stripe", "SEO"],
    image: auraAsset.url,
  },
  {
    title: "Coastline Marketing",
    industry: "Marketing Agency",
    category: "Consulting",
    overview:
      "A confident editorial Squarespace site for a strategic digital marketing agency positioning premium services.",
    challenge: "Feel senior and outcome-driven while explaining a full-funnel service menu.",
    solution:
      "Bold serif hero, image-led service grid, four-step process module and lead capture on every page.",
    tech: ["Squarespace 7.1", "Custom CSS", "Forms", "GA4"],
    image: coastlineAsset.url,
  },
  {
    title: "ClearPath Financial",
    industry: "Financial Advisory",
    category: "Consulting",
    overview:
      "A trust-first Squarespace site for a financial planning firm helping business owners simplify tax and wealth.",
    challenge: "Communicate authority and clarity while driving qualified consultation bookings.",
    solution:
      "Editorial hero, navy trust bar, four-step process module and a consultation form on every page.",
    tech: ["Squarespace 7.1", "Custom CSS", "Acuity", "SEO"],
    image: clearpathAsset.url,
  },
  {
    title: "Lumen Visuals",
    industry: "Photography & Video",
    category: "Portfolio",
    overview:
      "A cinematic Squarespace portfolio for a luxury real estate photography, staging and videography studio.",
    challenge: "Showcase high-resolution imagery beautifully without hurting performance.",
    solution:
      "Full-bleed hero, filterable portfolio grid by category and a streamlined project inquiry form.",
    tech: ["Squarespace 7.1", "Custom CSS", "Image Optimisation", "SEO"],
    image: lumenAsset.url,
  },
  {
    title: "LakeIsland Healthcare Consulting",
    industry: "Healthcare Consulting",
    category: "Consulting",
    overview:
      "A polished Squarespace site for a Canadian healthcare consulting firm supporting leaders and organisations.",
    challenge: "Position the firm as enterprise-grade while explaining programs and driving consultations.",
    solution:
      "Editorial hero, client logo trust bar, statistics module, program pages and detailed case studies.",
    tech: ["Squarespace 7.1", "Custom CSS", "Forms", "Schema.org"],
    image: lakeislandAsset.url,
  },
];

const categories: Category[] = [
  "All",
  "Business",
  "E-commerce",
  "Portfolio",
  "Wellness",
  "Consulting",
];

const process = [
  {
    icon: Compass,
    title: "Discovery Call",
    desc: "We map your business goals, audience and offers so the site is built around outcomes — not guesswork.",
  },
  {
    icon: Layers,
    title: "Strategy & Planning",
    desc: "Sitemap, wireframes, content strategy and conversion architecture agreed before a pixel is designed.",
  },
  {
    icon: Code2,
    title: "Design & Development",
    desc: "Premium Squarespace build with custom CSS/JS, brand-perfect design and rigorous QA on every device.",
  },
  {
    icon: Rocket,
    title: "Launch & Support",
    desc: "Go-live, SEO handover and ongoing support so your website keeps generating leads long after launch.",
  },
];

const testimonials = [
  {
    name: "Sarah M.",
    role: "Business Coach",
    quote:
      "The new Squarespace website exceeded my expectations. The design is modern, easy to navigate, and perfectly reflects my brand. Communication was excellent throughout the project.",
  },
  {
    name: "James R.",
    role: "E-commerce Store Owner",
    quote:
      "My online store looks amazing and is much easier for customers to use. The project was delivered on time with great attention to detail.",
  },
  {
    name: "Emily T.",
    role: "Marketing Consultant",
    quote:
      "Professional, responsive, and highly skilled. My website now loads faster, looks fantastic on mobile devices, and has received great feedback from clients.",
  },
  {
    name: "David K.",
    role: "Creative Agency Founder",
    quote:
      "I needed a complete Squarespace redesign, and the results were outstanding. The new website feels premium, modern, and aligns perfectly with our brand.",
  },
];

const faqs = [
  {
    q: "Why Squarespace?",
    a: "Squarespace pairs designer-grade aesthetics with a genuinely easy CMS. You get a premium site you can actually maintain — and I extend it with custom CSS/JS so it never feels like a template.",
  },
  {
    q: "How long does a project take?",
    a: "Most Squarespace builds ship in 2–4 weeks. Landing pages typically ship in 5–7 days. You'll get a clear timeline after the discovery call.",
  },
  {
    q: "Can you redesign my existing Squarespace website?",
    a: "Yes. Redesigns are one of my most requested services — from small refreshes to full brand overhauls, with zero downtime.",
  },
  {
    q: "Do you provide SEO?",
    a: "Every project ships with technical SEO, on-page optimisation, schema markup and image compression. Ongoing SEO retainers are available on request.",
  },
  {
    q: "Do you offer ongoing support?",
    a: "Yes. Monthly care plans cover updates, backups, small tweaks and priority response — so your site is never left to age.",
  },
  {
    q: "Can you migrate my website?",
    a: "I migrate sites from WordPress, Wix, Webflow and Showit to Squarespace regularly, preserving content, URLs and SEO rankings.",
  },
];

/* ---------------------------- Motion helpers ---------------------------- */

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

/* ---------------------------- Page ---------------------------- */

function Index() {
  return (
    <div id="top" className="relative min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <TrustBar />
      <About />
      <Services />
      <WhyMe />
      <Work />
      <Process />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
}

/* ---------------------------- Sections ---------------------------- */

function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid opacity-40 [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />
        <div className="absolute -top-40 left-1/2 h-[560px] w-[900px] -translate-x-1/2 rounded-full bg-emerald/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[420px] w-[560px] rounded-full bg-navy/10 blur-3xl" />
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:gap-16 lg:px-8">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={container}
          className="lg:col-span-7"
        >
          <motion.h1
            variants={fadeUp}
            className="mt-6 text-balance font-display text-4xl font-bold leading-[1.05] tracking-tight text-navy sm:text-5xl lg:text-6xl"
          >
            Professional Squarespace websites that{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-emerald">generate leads</span>
              <span className="absolute inset-x-0 bottom-1 -z-0 h-3 rounded bg-soft-green/80" />
            </span>{" "}
            & grow your business.
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-xl text-balance text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            I help coaches, consultants, creatives and service businesses launch
            premium Squarespace websites that convert visitors into paying clients —
            with 60+ sites delivered and 3+ years of specialist experience.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-emerald px-6 py-3.5 text-sm font-semibold text-emerald-foreground shadow-[0_12px_30px_-10px_oklch(0.63_0.17_148_/_0.7)] transition hover:translate-y-[-1px]"
            >
              Get a Free Consultation
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#work"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3.5 text-sm font-semibold text-navy transition hover:bg-secondary"
            >
              View My Work
            </a>
          </motion.div>

          <motion.dl
            variants={fadeUp}
            className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-border pt-8"
          >
            {stats.slice(0, 3).map((s) => (
              <div key={s.label}>
                <dt className="font-display text-2xl font-bold text-navy sm:text-3xl">
                  <Counter value={s.value} suffix={s.suffix} />
                </dt>
                <dd className="mt-1 text-xs font-medium uppercase tracking-wide text-muted-foreground">
                  {s.label}
                </dd>
              </div>
            ))}
          </motion.dl>
        </motion.div>

        {/* Portrait card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
          className="relative lg:col-span-5"
        >
          <div className="relative mx-auto max-w-md">
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-4 bottom-8 z-20 rounded-2xl border border-border bg-background/90 p-3 shadow-xl backdrop-blur-sm"
            >
              <div className="flex items-center gap-2">
                <span className="grid h-8 w-8 place-items-center rounded-full bg-navy text-navy-foreground">
                  <TrendingUp className="h-4 w-4" />
                </span>
                <div>
                  <div className="text-xs font-medium text-muted-foreground">Projects</div>
                  <div className="text-sm font-semibold text-navy">60+ Delivered</div>
                </div>
              </div>
            </motion.div>

            <div className="relative overflow-hidden rounded-[2rem] border border-border bg-secondary shadow-[0_30px_80px_-30px_rgb(15_23_42_/_0.35)]">
              <img
                src={portraitAsset.url}
                alt="Omowumi A. (Techgod), Squarespace website designer & developer, in a navy suit"
                className="aspect-[4/5] w-full object-cover"
                loading="eager"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy/70 via-navy/10 to-transparent p-6 text-navy-foreground">
                <div className="flex items-center gap-2 text-xs font-medium">
                  <MapPin className="h-3.5 w-3.5" />
                  Port Harcourt, Nigeria · Serving clients worldwide
                </div>
                <div className="mt-1 font-display text-xl font-semibold">
                  Omowumi A. — Techgod
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function TrustBar() {
  return (
    <section aria-label="Selling points" className="border-y border-border bg-surface">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-8 gap-y-4 px-4 py-6 sm:px-6 lg:px-8">
        {sellingPoints.map((p) => (
          <div key={p.text} className="flex items-center gap-2 text-sm font-medium text-navy/80">
            <p.icon className="h-4 w-4 text-emerald" />
            {p.text}
          </div>
        ))}
      </div>
    </section>
  );
}

function SectionHeading({
  eyebrow,
  title,
  desc,
  center,
}: {
  eyebrow: string;
  title: React.ReactNode;
  desc?: string;
  center?: boolean;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={container}
      className={center ? "mx-auto max-w-2xl text-center" : "max-w-3xl"}
    >
      <motion.div
        variants={fadeUp}
        className={`inline-flex items-center gap-2 rounded-full bg-accent px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent-foreground ${
          center ? "mx-auto" : ""
        }`}
      >
        <span className="h-1.5 w-1.5 rounded-full bg-emerald" />
        {eyebrow}
      </motion.div>
      <motion.h2
        variants={fadeUp}
        className="mt-4 text-balance font-display text-3xl font-bold leading-tight tracking-tight text-navy sm:text-4xl lg:text-5xl"
      >
        {title}
      </motion.h2>
      {desc && (
        <motion.p
          variants={fadeUp}
          className="mt-4 text-balance text-base leading-relaxed text-muted-foreground sm:text-lg"
        >
          {desc}
        </motion.p>
      )}
    </motion.div>
  );
}

function About() {
  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:gap-16 lg:px-8">
        <div className="lg:col-span-5">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative"
          >
            <div className="absolute -inset-4 -z-10 rounded-[2.5rem] bg-gradient-to-br from-soft-green via-transparent to-navy/10 blur-2xl" />
            <div className="overflow-hidden rounded-[2rem] border border-border bg-surface shadow-xl">
              <img
                src={portraitAsset.url}
                alt="Omowumi A., Squarespace specialist"
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
            <div className="mt-4 grid grid-cols-2 gap-3">
              <div className="rounded-2xl border border-border bg-background p-4">
                <div className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                  Education
                </div>
                <div className="mt-1 text-sm font-semibold text-navy">
                  B.Sc. Computer Science
                </div>
              </div>
              <div className="rounded-2xl border border-border bg-background p-4">
                <div className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                  Platform
                </div>
                <div className="mt-1 text-sm font-semibold text-navy">
                  Squarespace Specialist
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="lg:col-span-7">
          <SectionHeading
            eyebrow="About"
            title={
              <>
                More than beautiful websites — websites{" "}
                <span className="text-emerald">built to grow</span> your business.
              </>
            }
            desc="I'm Omowumi A. — a Squarespace specialist with a Computer Science background and a bias for conversion. For 3+ years I've helped businesses across the world turn their websites into their hardest-working salesperson."
          />

          <motion.ul
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={container}
            className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2"
          >
            {[
              "Computer Science degree — engineering mindset, not just aesthetics",
              "Squarespace specialist — not a generalist web designer",
              "3+ years shipping premium sites for global clients",
              "Conversion-first philosophy across every section",
              "Custom CSS/JS to escape template limitations",
              "SEO, performance and accessibility baked in",
            ].map((t) => (
              <motion.li
                key={t}
                variants={fadeUp}
                className="flex items-start gap-3 rounded-2xl border border-border bg-background p-4"
              >
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald" />
                <span className="text-sm text-navy/90">{t}</span>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="bg-surface py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          center
          eyebrow="Services"
          title={
            <>
              A full-stack Squarespace{" "}
              <span className="text-emerald">design partner</span>.
            </>
          }
          desc="Everything you need to launch, refine and scale a Squarespace website that quietly earns you clients."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={container}
          className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((s) => (
            <motion.div
              key={s.title}
              variants={fadeUp}
              whileHover={{ y: -4 }}
              className="group relative overflow-hidden rounded-3xl border border-border bg-background p-6 transition-shadow hover:shadow-[0_20px_60px_-20px_rgb(15_23_42_/_0.15)]"
            >
              <div className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-emerald transition-transform duration-500 group-hover:scale-x-100" />
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-accent text-emerald ring-1 ring-inset ring-emerald/20">
                <s.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold text-navy">
                {s.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {s.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function WhyMe() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          center
          eyebrow="Why work with me"
          title={
            <>
              A track record that <span className="text-emerald">speaks for itself</span>.
            </>
          }
        />

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {[
            { value: 60, suffix: "+", label: "Websites Built" },
            { value: 3, suffix: "+", label: "Years Experience" },
            { value: 100, suffix: "%", label: "Job Success" },
            { value: 0, suffix: "", label: "Clients Served", display: "Worldwide" },
          ].map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="rounded-3xl border border-border bg-background p-6 text-center"
            >
              <div className="font-display text-3xl font-bold text-navy sm:text-4xl">
                {s.display ? (
                  <span>{s.display}</span>
                ) : (
                  <Counter value={s.value} suffix={s.suffix} />
                )}
              </div>
              <div className="mt-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                {s.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Work() {
  const [cat, setCat] = useState<Category>("All");
  const filtered = cat === "All" ? projects : projects.filter((p) => p.category === cat);

  return (
    <section id="work" className="bg-surface py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Featured Case Study · GreenHaven Landscapes"
            title={
              <>
                Squarespace{" "}
                <span className="text-emerald">Landscape Web Design</span> — GreenHaven Landscapes.
              </>
            }
            desc="Role: Squarespace Web Designer & Developer · Custom Website & SEO Specialist. GreenHaven Landscapes needed a premium Squarespace site to showcase their services, generate leads, and make it easy for homeowners to book consultations. I built a custom Squarespace 7.1 site with Fluid Engine — responsive layouts, service pages, project galleries, contact forms, custom CSS, local SEO and an easy content system needing no developer. The result: a modern, high-converting site that boosts credibility, engagement, local visibility and turns visitors into consultation requests."
          />
          <div className="flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setCat(c)}
                className={`rounded-full border px-4 py-2 text-xs font-semibold transition ${
                  cat === c
                    ? "border-navy bg-navy text-navy-foreground"
                    : "border-border bg-background text-navy/70 hover:border-navy/40"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <motion.div
          layout
          className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-2"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((p) => (
              <motion.article
                key={p.title}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.45, ease: "easeOut" }}
                whileHover={{ y: -6 }}
                className="group overflow-hidden rounded-3xl border border-border bg-background shadow-[0_10px_40px_-20px_rgb(15_23_42_/_0.2)]"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-secondary">
                  <img
                    src={p.image}
                    alt={`${p.title} — ${p.industry} Squarespace project`}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                  <div className="absolute left-4 top-4 rounded-full bg-background/90 px-3 py-1 text-xs font-semibold text-navy backdrop-blur">
                    {p.category}
                  </div>
                </div>
                <div className="p-6 sm:p-8">
                  <div className="text-xs font-semibold uppercase tracking-wider text-emerald">
                    {p.industry}
                  </div>
                  <h3 className="mt-2 font-display text-2xl font-bold text-navy">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {p.overview}
                  </p>

                  <dl className="mt-5 grid grid-cols-1 gap-3 border-t border-border pt-5 sm:grid-cols-2">
                    <div>
                      <dt className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                        Challenge
                      </dt>
                      <dd className="mt-1 text-sm text-navy/90">{p.challenge}</dd>
                    </div>
                    <div>
                      <dt className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                        Solution
                      </dt>
                      <dd className="mt-1 text-sm text-navy/90">{p.solution}</dd>
                    </div>
                  </dl>

                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {p.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-border bg-secondary px-2.5 py-1 text-[11px] font-medium text-navy/80"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section id="process" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          center
          eyebrow="Process"
          title={
            <>
              A calm, structured path from{" "}
              <span className="text-emerald">idea to launch</span>.
            </>
          }
          desc="Every engagement follows the same predictable rhythm — so you always know what's happening and what's next."
        />

        <div className="relative mt-16">
          <div
            aria-hidden
            className="absolute left-0 right-0 top-8 hidden h-px bg-gradient-to-r from-transparent via-emerald/40 to-transparent lg:block"
          />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {process.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative rounded-3xl border border-border bg-background p-6"
              >
                <div className="flex items-center justify-between">
                  <div className="grid h-16 w-16 place-items-center rounded-2xl bg-navy text-navy-foreground shadow-[0_10px_30px_-10px_rgb(15_23_42_/_0.5)]">
                    <step.icon className="h-6 w-6" />
                  </div>
                  <span className="font-display text-4xl font-bold text-accent">
                    0{i + 1}
                  </span>
                </div>
                <h3 className="mt-6 font-display text-lg font-semibold text-navy">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section id="testimonials" className="bg-navy py-24 text-navy-foreground sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mx-auto inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald" />
            Testimonials
          </div>
          <h2 className="mt-4 text-balance font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            Loved by coaches, consultants and{" "}
            <span className="text-emerald">creative brands</span>.
          </h2>
          <p className="mt-4 text-balance text-white/70">
            Hear from business owners who trusted me with their Squarespace
            redesigns.
          </p>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={container}
          className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2"
        >
          {testimonials.map((t) => (
            <motion.figure
              key={t.name}
              variants={fadeUp}
              whileHover={{ y: -4 }}
              className="rounded-3xl border border-white/15 bg-white/[0.06] p-8 backdrop-blur-sm transition-shadow hover:shadow-[0_20px_60px_-20px_rgb(0_0_0_/_0.5)]"
            >
              <div className="flex gap-0.5 text-emerald">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-4 text-base leading-relaxed text-white">
                <span className="text-emerald">“</span>
                <span>{t.quote}</span>
                <span className="text-emerald">”</span>
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-emerald to-navy font-display font-bold text-white">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">{t.name}</div>
                  <div className="text-xs text-white/70">{t.role}</div>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          center
          eyebrow="FAQ"
          title={
            <>
              Questions,{" "}
              <span className="text-emerald">calmly answered</span>.
            </>
          }
        />
        <div className="mt-12 divide-y divide-border rounded-3xl border border-border bg-background">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q} className="px-6">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-6 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-base font-semibold text-navy sm:text-lg">
                    {f.q}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-emerald transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      className="overflow-hidden"
                    >
                      <p className="pb-6 pr-10 text-sm leading-relaxed text-muted-foreground">
                        {f.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section id="contact" className="px-4 pb-24 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="relative mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] bg-navy px-6 py-16 text-navy-foreground shadow-[0_40px_100px_-40px_rgb(15_23_42_/_0.6)] sm:px-12 sm:py-20"
      >
        <div className="pointer-events-none absolute inset-0 -z-0">
          <div className="absolute -top-32 -left-24 h-80 w-80 rounded-full bg-emerald/30 blur-3xl" />
          <div className="absolute -bottom-40 -right-16 h-96 w-96 rounded-full bg-emerald/20 blur-3xl" />
          <div className="absolute inset-0 bg-grid opacity-[0.08]" />
        </div>

        <div className="relative mx-auto max-w-3xl text-center">
          <div className="mx-auto inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider">
            <Globe2 className="h-3.5 w-3.5" />
            Available Worldwide
          </div>
          <h2 className="mt-6 text-balance font-display text-3xl font-bold leading-tight tracking-tight sm:text-5xl">
            Ready to turn your website into a{" "}
            <span className="text-emerald">client-generating machine?</span>
          </h2>
          <p className="mt-5 text-balance text-white/70 sm:text-lg">
            Let's build a Squarespace website that not only looks exceptional but
            helps your business grow — more inquiries, more bookings, more sales.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href="mailto:hello@techgod.dev"
              className="group inline-flex items-center gap-2 rounded-full bg-emerald px-6 py-3.5 text-sm font-semibold text-emerald-foreground shadow-[0_12px_30px_-10px_oklch(0.63_0.17_148_/_0.7)] transition hover:translate-y-[-1px]"
            >
              Book Free Consultation
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#work"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              View Portfolio
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <a href="#top" className="flex items-center gap-2">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-navy text-navy-foreground font-display font-bold">
                T
              </span>
              <span className="font-display text-xl font-bold text-navy">Techgod</span>
            </a>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Premium Squarespace websites for coaches, consultants, creatives and
              service businesses — built to generate leads and grow your business.
            </p>
            <div className="mt-6 flex items-center gap-2">
              {[
                { icon: UpworkIcon, href: "#", label: "Upwork" },
                { icon: LinkedinIcon, href: "#", label: "LinkedIn" },
                { icon: InstagramIcon, href: "#", label: "Instagram" },
                { icon: GithubIcon, href: "#", label: "GitHub" },
                { icon: Mail, href: "mailto:hello@techgod.dev", label: "Email" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="grid h-10 w-10 place-items-center rounded-full border border-border text-navy/70 transition hover:border-emerald hover:text-emerald"
                >
                  <s.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Quick Links
            </div>
            <ul className="mt-4 space-y-2 text-sm text-navy/80">
              {[
                ["Services", "#services"],
                ["Portfolio", "#work"],
                ["About", "#about"],
                ["Testimonials", "#testimonials"],
                ["Contact", "#contact"],
              ].map(([label, href]) => (
                <li key={label}>
                  <a className="transition hover:text-emerald" href={href}>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Contact
            </div>
            <ul className="mt-4 space-y-2 text-sm text-navy/80">
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-emerald" /> Port Harcourt, Nigeria
              </li>
              <li className="flex items-center gap-2">
                <Globe2 className="h-4 w-4 text-emerald" /> Clients Worldwide
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-emerald" /> hello@techgod.dev
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <div>© 2026 Techgod. All Rights Reserved.</div>
          <div>Designed & built by Omowumi A.</div>
        </div>
      </div>
    </footer>
  );
}
