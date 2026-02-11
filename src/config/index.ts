import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Lenny Zachelin — Développeur Backend C#",
  author: "Lenny Zachelin",
  description:
    "Étudiant en BTS SIO (SLAM) et développeur passionné spécialisé en C# et backend. Expert autodidacte depuis le CM2.",
  lang: "fr",
  siteLogo: "/votre-logo.jpg", // Change par ta photo si tu veux
  navLinks: [
    { text: "Expérience", href: "#experience" },
    { text: "Projets", href: "#projects" },
    { text: "À propos", href: "#about" },
  ],
  socialLinks: [
    { text: "Github", href: "https://github.com/promacklol" },
  ],
  socialImage: "/zen-og.png",
  canonicalURL: "https://promacklol.github.io",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Lenny Zachelin",
    specialty: "Développeur Backend C#",
    summary:
      "Expert autodidacte depuis le CM2. Actuellement en BTS SIO option SLAM, je me spécialise dans le développement backend avec C#, Kotlin et PHP.",
    email: "ton-email@exemple.com",
  },
  experience: [
    {
      company: "BTS SIO (SLAM)",
      position: "Étudiant Développeur",
      startDate: "2025",
      endDate: "2027",
      summary: [
        "Apprentissage approfondi du développement logiciel et de la gestion de solutions informatiques.",
        "Maîtrise du C# WinForms, du PHP et de Kotlin dans un contexte académique et professionnel.",
        "Préparation aux concours d'écoles d'ingénieurs avec un focus sur les mathématiques pour l'informatique.",
      ],
    },
  ],
  projects: [
    {
      name: "Remote Access Tool (C#)",
      summary: "Projet majeur de développement d'un RAT en C# prévu pour l'été 2026, mettant en œuvre des communications réseau complexes.",
      linkPreview: "/",
      linkSource: "https://github.com/promacklol",
      image: "/votre-image-projet.png",
    },
    {
      name: "Système de Gestion WinForms",
      summary: "Développement d'applications de bureau robustes en C# utilisant l'environnement WinForms.",
      linkPreview: "/",
      linkSource: "https://github.com/promacklol",
      image: "/winforms-project.png",
    },
  ],
  about: {
    description: `
      Salut, je suis Lenny Zachelin. Passionné par l'informatique depuis le plus jeune âge, j'ai appris les bases de nombreux langages (C#, Kotlin, Rust, C++, PHP, Lua) en totale autonomie depuis le CM2.

      Aujourd'hui, je me concentre sur le développement Backend C# avec l'ambition d'intégrer une école d'ingénieurs. Mon approche combine la rigueur académique du BTS SIO et la curiosité d'un développeur autodidacte habitué à relever des défis techniques complexes.
    `,
    image: "/votre-photo-profil.jpg",
  },
};
