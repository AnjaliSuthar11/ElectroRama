/**
 * ============================================================
 *  ELECTRORAMA — SINGLE CONTENT FILE
 * ============================================================
 *  EVERYTHING changeable on the website lives in this one file:
 *  text, images, phone numbers, partner names, colors of the
 *  solution cards, form options, footer, intro animation text.
 *
 *  Change a value here and the whole website updates.
 *  No other file needs to be touched for content changes.
 * ============================================================
 */

import type { LucideIcon } from "lucide-react";
import {
  AudioLines,
  Award,
  BadgeCheck,
  Building2,
  Clapperboard,
  DraftingCompass,
  FolderCheck,
  Headset,
  Instagram,
  Linkedin,
  MonitorPlay,
  MessagesSquare,
  Mic,
  KeyRound,
  SlidersHorizontal,
  Speaker,
  Twitter,
  Wrench,
} from "lucide-react";

import curtainImg from "@/assets/curtain.jpg";
import heroImg from "@/assets/hero-cinema.jpg";
import projectBoardroom from "@/assets/project-boardroom.jpg";
import projectHomeTheatre from "@/assets/project-home-theatre.jpg";
import projectMultiplex from "@/assets/project-multiplex.jpg";
import projectRecliner from "@/assets/project-recliner.jpg";

export const SITE = {
  /* ---------------- BRAND ---------------- */
  brand: {
    name: "ELECTRORAMA",
    tagline: "Pioneering Immersive Experiences",
  },

  /* ---------------- INTRO (red curtain opening) ---------------- */
  intro: {
    enabled: true, // set to false to skip the curtain intro entirely
    curtainImage: curtainImg,
    presents: "ELECTRORAMA PRESENTS",
    enterLabel: "Click to Enter",
    screenTitle: "ELECTRORAMA",
    screenSubtitle: "Pioneering Immersive Experiences",
    screenBadge: "NOW SHOWING",
  },

  /* ---------------- HEADER / NAV ---------------- */
  nav: [
    { label: "Home", href: "#home" },
    { label: "About Us", href: "#why-choose" },
    { label: "Solutions", href: "#solutions" },
    { label: "Brands", href: "#brands" },
    { label: "Projects", href: "#projects" },
    { label: "Case Studies", href: "#projects" },
    { label: "Resources", href: "#process" },
    { label: "Contact", href: "#contact" },
  ],
  navCta: "Get a Consultation",

  /* ---------------- HERO ---------------- */
  hero: {
    titleLine1: "Engineering ",
    titleLine2: "Immersive",
    highlight: "AV & Cinema ",
    titleLine3: "Experiences",
    description:
      "Audio visual consultants, system integrators and trusted partners in creating world-class cinemas and AV environments.",
    image: heroImg,
    badges: [
      { icon: AudioLines, title: "Audio Visual", subtitle: "Consultants" },
      { icon: MonitorPlay, title: "System", subtitle: "Integrators" },
      { icon: BadgeCheck, title: "National Distributor", subtitle: "( HARMAN || JBL )" },
    ],
    primaryCta: "Explore Solutions",
    secondaryCta: "View Our Projects",
  },

  /* ---------------- PARTNER BRANDS ---------------- */
  partners: {
    title: "Powered by Global AV Technology Leaders",
    viewAll: "View all partners",
    logos: [
      { name: "JBL", className: "font-black italic tracking-tight text-orange-500 text-xl" },
      { name: "CROWN", className: "font-bold tracking-[0.2em] text-slate-700" },
      { name: "❞ Dolby", className: "font-bold tracking-wide text-slate-900 text-lg" },
      { name: "CHRISTIE", className: "font-semibold tracking-[0.25em] text-slate-800" },
      { name: "Harkness", className: "font-bold italic text-sky-700" },
      { name: "GALALITE", className: "font-semibold tracking-[0.3em] text-slate-600" },
      { name: "SAMSUNG", className: "font-bold tracking-[0.15em] text-slate-900" },
      { name: "BSC", className: "font-black text-emerald-600 italic" },
      { name: "SHURE", className: "font-black tracking-widest text-slate-800" },
      { name: "BARCO", className: "font-bold tracking-[0.2em] text-slate-700" },
    ],
  },

  /* ---------------- STATS ---------------- */
  stats: [
    { icon: Award, value: "25+", label: ["Years of", "Expertise"] },
    { icon: FolderCheck, value: "500+", label: ["Projects", "Completed"] },
    { icon: Building2, value: "100+", label: ["Premium", "Clients"] },
    { icon: Headset, value: "Pan India", label: ["Presence", ""] },
  ],

  /* ---------------- SOLUTIONS ---------------- */
  solutionsSection: {
    title: "Our ",
    highlight: "Solutions",
    subtitle: "End-to-end solutions for cinemas, auditoriums, corporate spaces, hospitality and more.",
    viewAll: "Explore All Solutions",
  },
  solutions: [
    {
      icon: Clapperboard,
      title: "Cinema Solutions",
      description: "Complete cinema solutions with immersive sound & stunning visuals.",
      gradient: "linear-gradient(155deg, #16337a 0%, #2563eb 100%)",
    },
    {
      icon: Speaker,
      title: "Auditorium Sound Systems",
      description: "High-performance sound systems for auditoriums & theatres.",
      gradient: "linear-gradient(155deg, #3730a3 0%, #7c3aed 100%)",
    },
    {
      icon: MonitorPlay,
      title: "LED Video Walls",
      description: "Cutting-edge LED displays for any environment.",
      gradient: "linear-gradient(155deg, #0f766e 0%, #10b981 100%)",
    },
    {
      icon: Building2,
      title: "AV for Corporate & Hospitality",
      description: "Smart AV solutions for corporate & hospitality environments.",
      gradient: "linear-gradient(155deg, #1d4ed8 0%, #38bdf8 100%)",
    },
    {
      icon: Mic,
      title: "Sound & Acoustic Design",
      description: "Acoustic design & treatment for the perfect experience.",
      gradient: "linear-gradient(155deg, #be185d 0%, #ec4899 100%)",
    },
    {
      icon: KeyRound,
      title: "Turnkey Project Execution",
      description: "End-to-end project execution with precision and reliability.",
      gradient: "linear-gradient(155deg, #ea580c 0%, #f59e0b 100%)",
    },
  ],

  /* ---------------- FEATURED PROJECTS ---------------- */
  projectsSection: {
    title: "Featured ",
    highlight: "Projects",
    viewAll: "View All Projects",
  },
  projects: [
    {
      name: "PVR ICON – Mumbai",
      location: "Mumbai, Maharashtra",
      image: projectHomeTheatre,
    },
    {
      name: "INOX – Bengaluru",
      location: "Bengaluru, Karnataka",
      image: projectMultiplex,
    },
    {
      name: "Cinepolis – Hyderabad",
      location: "Hyderabad, Telangana",
      image: projectRecliner,
    },
    {
      name: "Corporate AV Setup",
      location: "Gurugram, Haryana",
      image: projectBoardroom,
    },
  ],

  /* ---------------- WHY CHOOSE ---------------- */
  whyChoose: {
    title: "Why Choose",
    highlight: "Electrorama?",
    items: [
      {
        icon: BadgeCheck,
        title: "Certified Global Partnerships",
        description: "We work with the world's leading AV brands.",
      },
      {
        icon: Wrench,
        title: "End-to-End Execution",
        description: "From design to support, we handle everything.",
      },
      {
        icon: SlidersHorizontal,
        title: "Customised Solutions",
        description: "Tailored solutions for unique requirements.",
      },
      {
        icon: Award,
        title: "Proven Industry Expertise",
        description: "Decades of experience across diverse industries.",
      },
      {
        icon: Headset,
        title: "Dedicated Support",
        description: "Reliable support for lasting performance.",
      },
    ],
  },

  /* ---------------- PROCESS ---------------- */
  process: {
    title: "Our ",
    highlight: "Process",
    steps: [
      {
        icon: MessagesSquare,
        number: "01",
        title: "Consultation",
        description: "Understanding your requirements",
      },
      {
        icon: DraftingCompass,
        number: "02",
        title: "Design & Planning",
        description: "Engineering the right AV solution",
      },
      {
        icon: Wrench,
        number: "03",
        title: "Installation",
        description: "Professional installation by expert team",
      },
      {
        icon: SlidersHorizontal,
        number: "04",
        title: "Calibration",
        description: "Fine-tuning for optimal performance",
      },
      {
        icon: Headset,
        number: "05",
        title: "Support & Maintenance",
        description: "Ongoing support for peace of mind",
      },
    ],
  },

  /* ---------------- CONTACT ---------------- */
  contact: {
    title: "Let's Build Your",
    highlight: "Next AV Experience",
    description: "Tell us about your project and our experts will get in touch with you.",
    phone: "+91 98765 43210",
    email: "info@electrorama.com",
    locations: "Mumbai | Delhi | Bengaluru | Hyderabad",
    formTitle: "Request a Consultation",
    nameLabel: "Your Name",
    companyLabel: "Company Name",
    emailLabel: "Email Address",
    phoneLabel: "Phone Number",
    projectTypeLabel: "Project Type",
    locationLabel: "Location",
    messageLabel: "Message",
    submitLabel: "Submit Enquiry",
    projectTypeOptions: [
      "Cinema Solutions",
      "Auditorium Sound System",
      "LED Video Wall",
      "Corporate AV",
      "Home Theatre",
      "Other",
    ],
    locationOptions: ["Mumbai", "Delhi", "Bengaluru", "Hyderabad", "Other"],
    successMessage: "Thank you! Your enquiry has been received — our team will get in touch shortly.",
  },

  /* ---------------- FOOTER ---------------- */
  footer: {
    about:
      "Audio visual consultants and system integrators creating world-class cinemas and AV environments across India.",
    copyright: "© 2026 Electrorama. All rights reserved.",
    socials: [
      { icon: Instagram, href: "#", label: "Instagram" },
      { icon: Twitter, href: "#", label: "Twitter" },
      { icon: Linkedin, href: "#", label: "LinkedIn" },
    ],
  },
} as const;

export type SiteContent = typeof SITE;
