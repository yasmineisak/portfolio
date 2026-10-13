export type Language = 'fr' | 'en';

export interface Translations {
  nav: {
    about: string;
    projects: string;
    experience: string;
    skills: string;
    certifications: string;
    ariaLabel: string;
  };
  hero: {
    availablePill: string;
    role: string;
    callMePrompt: string;
    hoverSub: string;
    mobileTap: string;
    leftZone: string;
    centerGreet: string;
    rightZone: string;
    greetingMessage: string;
    specialtyBadge: string;
    specialtyTitle: string;
    specialtyDesc: string;
    specialtySchool: string;
    cvDownload: string;
    cvFile: string;
    exploreBtn: string;
  };
  about: {
    badge: string;
    title: string;
    statusBadge: string;
    studentBadge: string;
    cycle: string;
    headlineStart: string;
    headlineHighlight: string;
    headlineEnd: string;
    bio: string;
    metrics: {
      m1Val: string;
      m1Label: string;
      m1Sub: string;
      m2Val: string;
      m2Label: string;
      m2Sub: string;
      m3Val: string;
      m3Label: string;
      m3Sub: string;
    };
    opportunity: {
      available: string;
      objectiveLabel: string;
      title: string;
      subtitle: string;
      startDateLabel: string;
      startDateVal: string;
      formatLabel: string;
      formatVal: string;
      contactBtn: string;
      cvBtn: string;
      cvFile: string;
    };
    bento: {
      locLabel: string;
      locTitle: string;
      locDesc: string;
      eduLabel: string;
      eduTitle: string;
      eduSchool: string;
      eduDesc: string;
      langLabel: string;
      langTitle: string;
      langSub: string;
      enLevel: string;
      frLevel: string;
      arLevel: string;
    };
  };
  projects: {
    badge: string;
    title: string;
    countBadge: string;
    pipelineHeader: string;
    overviewLabel: string;
    items: Array<{
      title: string;
      type: string;
      tagline: string;
      description: string;
      pipeline: Array<{
        step: string;
        name: string;
        desc: string;
        tech: string;
      }>;
    }>;
  };
  experience: {
    badge: string;
    title: string;
    countBadge: string;
    projectScopeLabel: string;
    items: Array<{
      role: string;
      company: string;
      location: string;
      period: string;
      projectTitle: string;
      description: string[];
    }>;
  };
  skills: {
    badge: string;
    title: string;
    countBadge: string;
    technologiesCount: string;
    expertiseLabel: string;
    categories: Array<{
      title: string;
    }>;
  };
  certifications: {
    badge: string;
    title: string;
    countBadge: string;
    verifyLink: string;
    verifiedBadge: string;
    items: Array<{
      title: string;
      issuer: string;
      year: string;
      badge: string;
      url?: string;
    }>;
  };
  footer: {
    roleDesc: string;
    pfeBadge: string;
    contactBtn: string;
    copyrightStart: string;
    copyrightEnd: string;
  };
  contact: {
    title: string;
    universityEmailLabel: string;
    personalEmailLabel: string;
    phoneLabel: string;
    linkedinLabel: string;
  };
}

export const TRANSLATIONS: Record<Language, Translations> = {
  fr: {
    nav: {
      about: "About Me",
      projects: "Projets",
      experience: "Expérience",
      skills: "Compétences",
      certifications: "Certifications",
      ariaLabel: "Navigation principale",
    },
    hero: {
      availablePill: "PFE 2027 • DISPONIBLE",
      role: "Élève Ingénieure Big Data & IA",
      callMePrompt: "Move cursor to call me !",
      hoverSub: "Survolez gauche, droite ou centre",
      mobileTap: "Touchez le personnage pour interagir !",
      leftZone: "← Left Zone",
      centerGreet: "• Center Greet •",
      rightZone: "Right Zone →",
      greetingMessage: "Enchantée ! Bienvenue sur mon portfolio 👋",
      specialtyBadge: "Spécialité",
      specialtyTitle: "Data Engineering & IA",
      specialtyDesc: "Pipeline de données distribués, Computer Vision & architectures LLM/RAG scalables.",
      specialtySchool: "EMSI Tanger • 2025 - 2027",
      cvDownload: "CV",
      cvFile: "ISAKROUHEN_Yasmine_CV.pdf",
      exploreBtn: "CHECK OUT THE PORTFOLIO",
    },
    about: {
      badge: "Profil & Parcours",
      title: "About Me",
      statusBadge: "En quête d'un défi PFE 2027",
      studentBadge: "Élève Ingénieure 5ème Année",
      cycle: "Cycle d'Ingénieur 2025 - 2027",
      headlineStart: "Donner vie à des systèmes",
      headlineHighlight: "intelligents & scalables",
      headlineEnd: "orientés impact.",
      bio: "Future ingénieure en Big Data & Intelligence Artificielle à l'EMSI Tanger, spécialisée en Computer Vision et ingénierie des données scalables. Passionnée par la conception de systèmes autonomes, de pipelines de traitement massif et de modèles d'IA générative, je recherche un stage PFE de 6 mois pour relever des défis techniques complexes et créer une valeur tangible.",
      metrics: {
        m1Val: "5ème",
        m1Label: "Année d'Ingénierie",
        m1Sub: "EMSI Tanger",
        m2Val: "6 Mois",
        m2Label: "Disponibilité PFE",
        m2Sub: "Dès Février 2027",
        m3Val: "3+",
        m3Label: "Expériences Terrain",
        m3Sub: "IA & Analyse Data",
      },
      opportunity: {
        available: "Disponible",
        objectiveLabel: "OBJECTIF CARRIÈRE",
        title: "Open to Opportunities",
        subtitle: "Stage PFE de 6 mois • Projets IA & Big Data",
        startDateLabel: "Date de début",
        startDateVal: "À partir du 1er Février 2027",
        formatLabel: "Format de stage",
        formatVal: "Stage de Fin d'Études (6 mois) • Présentiel ou Hybride",
        contactBtn: "Me Contacter",
        cvBtn: "CV (PDF)",
        cvFile: "ISAKROUHEN_Yasmine_CV.pdf",
      },
      bento: {
        locLabel: "LOCALISATION",
        locTitle: "Based in",
        locDesc: "Bassin technologique dynamique au carrefour de l'Europe et de l'Afrique. Ouverte aux opportunités à Tanger, Casablanca, Rabat ou à l'international.",
        eduLabel: "CURSUS UNIVERSITAIRE",
        eduTitle: "Studying",
        eduSchool: "École Marocaine des Sciences de l'Ingénieur (EMSI Tanger)",
        eduDesc: "Informatique & Réseaux, filière d'excellence en IA & Big Data. Licence préalable en Informatique-Mathématiques (Faculté des Sciences).",
        langLabel: "AISANCE LINGUISTIQUE",
        langTitle: "Languages",
        langSub: "Trilingue",
        enLevel: "Fluent (C1)",
        frLevel: "Bilingue",
        arLevel: "Langue maternelle",
      },
    },
    projects: {
      badge: "ARCHITECTURE & INGÉNIERIE LOGICIELLE",
      title: "Projets & Réalisations",
      countBadge: "3 SYSTÈMES & ARCHITECTURES",
      pipelineHeader: "PIPELINE DE FONCTIONNEMENT & ARCHITECTURE :",
      overviewLabel: "PRÉSENTATION DU PROJET",
      items: [
        {
          title: "AuraMarket",
          type: "Projet de Fin d'Année • 2026",
          tagline: "Plateforme distribuée multi-agents & négociation intelligente",
          description:
            "Conception et développement d'une plateforme de marché autonome pilotée par l'IA cognitive et un moteur de négociation multi-agents (JADE), orchestrée via des pipelines de données massives et une architecture microservices scalable.",
          pipeline: [
            {
              step: "01",
              name: "Ingestion & ETL",
              desc: "Ingestion et synchronisation automatisée des flux de données hétérogènes multi-sources.",
              tech: "Airbyte & Airflow",
            },
            {
              step: "02",
              name: "Négociation Multi-Agents",
              desc: "Agents autonomes (acheteurs, vendeurs) négociant selon des enchères dynamiques.",
              tech: "JADE Framework",
            },
            {
              step: "03",
              name: "Streaming Événementiel",
              desc: "Communication inter-agents asynchrone et diffusion en temps réel des transactions.",
              tech: "Apache Kafka",
            },
            {
              step: "04",
              name: "Services & Monitoring",
              desc: "Exposition d'APIs modulaires conteneurisées et cockpit de suivi analytique des marchés.",
              tech: "Microservices & Docker",
            },
          ],
        },
        {
          title: "Assistant Documentaire Intelligent",
          type: "Projet Académique",
          tagline: "Système de Question-Réponse Augmenté par Récupération (RAG)",
          description:
            "Conception d'un système RAG exploitant des LLM open-source pour l'interrogation sémantique de bases documentaires d'entreprise, articulé autour de pipelines de vectorisation et de recherche textuelle avancées.",
          pipeline: [
            {
              step: "01",
              name: "Ingestion & Chunking",
              desc: "Extraction textuelle multi-formats (PDF, Word, MD) et découpage sémantique contextuel.",
              tech: "Document Loaders",
            },
            {
              step: "02",
              name: "Vectorisation Sémantique",
              desc: "Génération d'embeddings denses et indexation vectorielle haute performance.",
              tech: "Hugging Face & ChromaDB",
            },
            {
              step: "03",
              name: "Recherche & Récupération",
              desc: "Recherche par similarité cosinus avec re-ranking contextuel des passages pertinents.",
              tech: "LangChain Retriever",
            },
            {
              step: "04",
              name: "Génération Augmentée",
              desc: "Synthèse de réponses précises sourcées sans hallucination par LLM avec citations.",
              tech: "LLM Open-Source",
            },
          ],
        },
        {
          title: "WokWise",
          type: "Projet de Fin d'Études • 2025",
          tagline: "Plateforme web de recrutement & tri automatisé des candidatures",
          description:
            "Conception et développement d'une plateforme web complète de gestion des candidatures intégrant un module d'intelligence artificielle pour le tri automatisé des CV et des filtres de sélection avancés pour optimiser le recrutement RH.",
          pipeline: [
            {
              step: "01",
              name: "Dépôt & Parsing CV",
              desc: "Téléversement et extraction textuelle automatisée des entités de profils (PDF / DOCX).",
              tech: "Parser Automatisé",
            },
            {
              step: "02",
              name: "Traitement Sémantique",
              desc: "Analyse NLP des compétences et adéquation linguistique face aux fiches de poste.",
              tech: "NLP & Tokenisation",
            },
            {
              step: "03",
              name: "Scoring & Tri Automatisé",
              desc: "Calcul d'un indice de pertinence pondéré et hiérarchisation automatique des profils cibles.",
              tech: "Algorithme de Matching",
            },
            {
              step: "04",
              name: "Cockpit Décisionnel RH",
              desc: "Filtrage multicritères, suivi dynamique du vivier de candidats et gestion des entretiens.",
              tech: "Dashboard Décisionnel",
            },
          ],
        },
      ],
    },
    experience: {
      badge: "IMMERSION PROFESSIONNELLE",
      title: "Expériences Professionnelles",
      countBadge: "3 Stages en Entreprise",
      projectScopeLabel: "Projet & Périmètre :",
      items: [
        {
          role: "Stage en Intelligence Artificielle & Computer Vision",
          company: "SIANA",
          location: "Tanger, Maroc",
          period: "07/2026 - 08/2026",
          projectTitle: "Inspection ferroviaire automatisée",
          description: [
            "Développement et optimisation de modèles YOLOv8 pour la détection automatisée d'anomalies ferroviaires.",
            "Mise en place de pipelines de traitement d'images et extraction de texte technique avec PaddleOCR.",
          ],
        },
        {
          role: "Stage Data Analyst",
          company: "TE Connectivity",
          location: "Tanger, Maroc",
          period: "08/2025",
          projectTitle: "Suivi des KPI de production & modélisation",
          description: [
            "Extraction et analyse de données opérationnelles via des requêtes SQL avancées sur les bases de production.",
            "Création de tableaux de bord Power BI interactifs pour le suivi en temps réel des KPI industriels (TRS, cadence, rebuts).",
          ],
        },
        {
          role: "Stage Data Analyst",
          company: "Trigo SAS",
          location: "Tanger, Maroc",
          period: "08/2024",
          projectTitle: "Tableaux de bord opérationnels & contrôle qualité",
          description: [
            "Nettoyage, audit et structuration des flux de données opérationnelles de contrôle qualité.",
            "Conception de dashboards Power BI pour le suivi des indicateurs de conformité et l'optimisation des opérations.",
          ],
        },
      ],
    },
    skills: {
      badge: "TECHNOLOGIES & ÉCOSYSTÈME TECHNIQUE",
      title: "Matrice de Compétences",
      countBadge: "5 Domaines d'Expertise",
      technologiesCount: "technologies",
      expertiseLabel: "Expertise",
      categories: [
        { title: "Ingénierie IA & Computer Vision" },
        { title: "Big Data & Streaming" },
        { title: "Data, BI & Bases de Données" },
        { title: "Développement Full-Stack & Logiciel" },
        { title: "DevOps & Virtualisation" },
      ],
    },
    certifications: {
      badge: "ACCRÉDITATIONS & VALIDATIONS INTERNATIONALES",
      title: "Certifications & Accréditations",
      countBadge: "5 CERTIFICATIONS OBTENUES",
      verifyLink: "Vérifier le certificat",
      verifiedBadge: "Certification Validée",
      items: [
        {
          title: "Agile Project Management",
          issuer: "Google",
          year: "2026",
          badge: "Industriel",
          url: "https://coursera.org/share/de9c8a7fdd1f0fe61e7649b2c6088b38",
        },
        {
          title: "Introduction to Big Data",
          issuer: "UC San Diego",
          year: "2026",
          badge: "Académique",
          url: "https://coursera.org/share/74e606272a8b2a02e362b81a962a49ad",
        },
        {
          title: "Machine Learning with Python",
          issuer: "IBM",
          year: "2026",
          badge: "Spécialisation",
          url: "https://coursera.org/share/ea5cc945df9fab563eb9bc9de3089eb9",
        },
        {
          title: "Oracle Database 19c: Administration Workshop",
          issuer: "Oracle",
          year: "2025",
          badge: "Base de Données",
        },
        {
          title: "English Language Proficiency",
          issuer: "American Language Center",
          year: "2024",
          badge: "C1 Avancé",
        },
      ],
    },
    footer: {
      roleDesc: "Tanger, Maroc • Élève Ingénieure Big Data & IA",
      pfeBadge: "PFE 2027 Disponible",
      contactBtn: "Me Contacter",
      copyrightStart: "© 2026 Yasmine Isakrouhen. Conçu avec",
      copyrightEnd: "• Portfolio Professionnel.",
    },
    contact: {
      title: "Contact & Coordonnées",
      universityEmailLabel: "Email Universitaire",
      personalEmailLabel: "Email Personnel",
      phoneLabel: "Téléphone",
      linkedinLabel: "Profil LinkedIn",
    },
  },
  en: {
    nav: {
      about: "About Me",
      projects: "Projects",
      experience: "Experience",
      skills: "Skills",
      certifications: "Certifications",
      ariaLabel: "Main navigation",
    },
    hero: {
      availablePill: "PFE 2027 • AVAILABLE",
      role: "Big Data & AI Engineering Student",
      callMePrompt: "Move cursor to call me !",
      hoverSub: "Hover left, right, or center",
      mobileTap: "Tap the character to interact !",
      leftZone: "← Left Zone",
      centerGreet: "• Center Greet •",
      rightZone: "Right Zone →",
      greetingMessage: "Pleased to meet you! Welcome to my portfolio 👋",
      specialtyBadge: "Specialization",
      specialtyTitle: "Data Engineering & AI",
      specialtyDesc: "Distributed data pipelines, Computer Vision & scalable LLM/RAG architectures.",
      specialtySchool: "EMSI Tangier • 2025 - 2027",
      cvDownload: "Resume",
      cvFile: "Yasmine_isakrouhen_resume.pdf",
      exploreBtn: "CHECK OUT THE PORTFOLIO",
    },
    about: {
      badge: "PROFILE & BACKGROUND",
      title: "About Me",
      statusBadge: "Seeking a 2027 PFE Challenge",
      studentBadge: "5th Year Engineering Student",
      cycle: "Engineering Cycle 2025 - 2027",
      headlineStart: "Bringing",
      headlineHighlight: "intelligent & scalable",
      headlineEnd: "impact-driven systems to life.",
      bio: "Future engineer in Big Data & Artificial Intelligence at EMSI Tangier, specialized in Computer Vision and scalable data engineering. Passionate about designing autonomous systems, mass data processing pipelines, and generative AI models, I am seeking a 6-month graduation internship (PFE) to tackle complex technical challenges and create tangible value.",
      metrics: {
        m1Val: "5th",
        m1Label: "Engineering Year",
        m1Sub: "EMSI Tangier",
        m2Val: "6 Months",
        m2Label: "PFE Availability",
        m2Sub: "From February 2027",
        m3Val: "3+",
        m3Label: "Field Experiences",
        m3Sub: "AI & Data Analytics",
      },
      opportunity: {
        available: "Available",
        objectiveLabel: "CAREER OBJECTIVE",
        title: "Open to Opportunities",
        subtitle: "6-Month PFE Internship • AI & Big Data Projects",
        startDateLabel: "Start Date",
        startDateVal: "Starting February 1st, 2027",
        formatLabel: "Internship Format",
        formatVal: "Graduation Internship (6 months) • On-site or Hybrid",
        contactBtn: "Contact Me",
        cvBtn: "Resume (PDF)",
        cvFile: "Yasmine_isakrouhen_resume.pdf",
      },
      bento: {
        locLabel: "LOCATION",
        locTitle: "Based in",
        locDesc: "Dynamic technology hub at the crossroads of Europe and Africa. Open to opportunities in Tangier, Casablanca, Rabat, or worldwide.",
        eduLabel: "ACADEMIC BACKGROUND",
        eduTitle: "Studying",
        eduSchool: "Moroccan School of Engineering Sciences (EMSI Tangier)",
        eduDesc: "Computer Science & Networks, major in AI & Big Data. Prior Bachelor's Degree in Mathematics & Computer Science (Faculty of Sciences).",
        langLabel: "LANGUAGE PROFICIENCY",
        langTitle: "Languages",
        langSub: "Trilingual",
        enLevel: "Fluent (C1)",
        frLevel: "Bilingual",
        arLevel: "Native Language",
      },
    },
    projects: {
      badge: "ARCHITECTURE & SOFTWARE ENGINEERING",
      title: "Projects & Achievements",
      countBadge: "3 SYSTEMS & ARCHITECTURES",
      pipelineHeader: "OPERATIONAL PIPELINE & ARCHITECTURE:",
      overviewLabel: "PROJECT OVERVIEW",
      items: [
        {
          title: "AuraMarket",
          type: "Capstone Project • 2026",
          tagline: "Distributed Multi-Agent Platform & Intelligent Negotiation",
          description:
            "Design and development of an autonomous marketplace platform driven by cognitive AI and a multi-agent negotiation engine (JADE), orchestrated via mass data pipelines and a scalable microservices architecture.",
          pipeline: [
            {
              step: "01",
              name: "Ingestion & ETL",
              desc: "Automated ingestion and synchronization of multi-source heterogeneous data streams.",
              tech: "Airbyte & Airflow",
            },
            {
              step: "02",
              name: "Multi-Agent Negotiation",
              desc: "Autonomous agents (buyers, sellers) negotiating through dynamic auctions.",
              tech: "JADE Framework",
            },
            {
              step: "03",
              name: "Event Streaming",
              desc: "Asynchronous inter-agent communication and real-time transaction streaming.",
              tech: "Apache Kafka",
            },
            {
              step: "04",
              name: "Services & Monitoring",
              desc: "Exposition of modular containerized APIs and market analytic tracking dashboard.",
              tech: "Microservices & Docker",
            },
          ],
        },
        {
          title: "Intelligent Document Assistant",
          type: "Academic Project",
          tagline: "Retrieval-Augmented Generation (RAG) Question-Answering System",
          description:
            "Design of a RAG system leveraging open-source LLMs for semantic querying of enterprise document repositories, built around advanced vectorization and text search pipelines.",
          pipeline: [
            {
              step: "01",
              name: "Ingestion & Chunking",
              desc: "Multi-format text extraction (PDF, Word, MD) and contextual semantic chunking.",
              tech: "Document Loaders",
            },
            {
              step: "02",
              name: "Semantic Vectorization",
              desc: "Dense embedding generation and high-performance vector indexing.",
              tech: "Hugging Face & ChromaDB",
            },
            {
              step: "03",
              name: "Search & Retrieval",
              desc: "Cosine similarity search with contextual re-ranking of relevant passages.",
              tech: "LangChain Retriever",
            },
            {
              step: "04",
              name: "Augmented Generation",
              desc: "Accurate, grounded response synthesis with zero-hallucination source citations.",
              tech: "Open-Source LLMs",
            },
          ],
        },
        {
          title: "WokWise",
          type: "Graduation Capstone • 2025",
          tagline: "Recruitment Web Platform & Automated Candidate Screening",
          description:
            "Design and development of a full-fledged web application for recruitment management featuring an AI module for automated resume parsing and intelligent semantic filtering to optimize HR talent acquisition.",
          pipeline: [
            {
              step: "01",
              name: "Resume Submission & Parsing",
              desc: "Automated upload and multi-format text extraction of applicant profile entities (PDF / DOCX).",
              tech: "Automated Parser",
            },
            {
              step: "02",
              name: "Semantic Processing",
              desc: "NLP analysis of technical skill proficiencies and role requirement matching.",
              tech: "NLP & Tokenization",
            },
            {
              step: "03",
              name: "Scoring & Auto-Sorting",
              desc: "Weighted relevancy index calculation and automated ranking of candidate profiles.",
              tech: "Matching Algorithm",
            },
            {
              step: "04",
              name: "HR Decision Cockpit",
              desc: "Multi-criteria candidate filtering, dynamic talent pipeline tracking, and interview management.",
              tech: "Decision Dashboard",
            },
          ],
        },
      ],
    },
    experience: {
      badge: "PROFESSIONAL IMMERSION",
      title: "Professional Experience",
      countBadge: "3 Company Internships",
      projectScopeLabel: "Project & Scope:",
      items: [
        {
          role: "AI & Computer Vision Internship",
          company: "SIANA",
          location: "Tangier, Morocco",
          period: "07/2026 - 08/2026",
          projectTitle: "Automated Railway Inspection",
          description: [
            "Development and optimization of YOLOv8 models for automated railway anomaly detection.",
            "Implementation of image processing pipelines and technical text extraction with PaddleOCR.",
          ],
        },
        {
          role: "Data Analyst Internship",
          company: "TE Connectivity",
          location: "Tangier, Morocco",
          period: "08/2025",
          projectTitle: "Production KPI Monitoring & Modeling",
          description: [
            "Extraction and analysis of operational data through advanced SQL queries on production databases.",
            "Development of interactive Power BI dashboards for real-time industrial KPI monitoring (OEE, output rates, scrap).",
          ],
        },
        {
          role: "Data Analyst Internship",
          company: "Trigo SAS",
          location: "Tangier, Morocco",
          period: "08/2024",
          projectTitle: "Operational Dashboards & Quality Control",
          description: [
            "Data cleansing, auditing, and structuring of quality-control operational data streams.",
            "Design of Power BI dashboards for compliance metric tracking and operational process optimization.",
          ],
        },
      ],
    },
    skills: {
      badge: "TECHNOLOGIES & TECHNICAL ECOSYSTEM",
      title: "Skills Matrix",
      countBadge: "5 Domains of Expertise",
      technologiesCount: "technologies",
      expertiseLabel: "Expertise",
      categories: [
        { title: "AI Engineering & Computer Vision" },
        { title: "Big Data & Streaming" },
        { title: "Data, BI & Databases" },
        { title: "Full-Stack & Software Development" },
        { title: "DevOps & Virtualization" },
      ],
    },
    certifications: {
      badge: "INTERNATIONAL ACCREDITATIONS & VALIDATIONS",
      title: "Certifications & Accreditations",
      countBadge: "5 CERTIFICATIONS EARNED",
      verifyLink: "Verify certificate",
      verifiedBadge: "Certified & Verified",
      items: [
        {
          title: "Agile Project Management",
          issuer: "Google",
          year: "2026",
          badge: "Industry",
          url: "https://coursera.org/share/de9c8a7fdd1f0fe61e7649b2c6088b38",
        },
        {
          title: "Introduction to Big Data",
          issuer: "UC San Diego",
          year: "2026",
          badge: "Academic",
          url: "https://coursera.org/share/74e606272a8b2a02e362b81a962a49ad",
        },
        {
          title: "Machine Learning with Python",
          issuer: "IBM",
          year: "2026",
          badge: "Specialization",
          url: "https://coursera.org/share/ea5cc945df9fab563eb9bc9de3089eb9",
        },
        {
          title: "Oracle Database 19c: Administration Workshop",
          issuer: "Oracle",
          year: "2025",
          badge: "Database",
        },
        {
          title: "English Language Proficiency",
          issuer: "American Language Center",
          year: "2024",
          badge: "C1 Advanced",
        },
      ],
    },
    footer: {
      roleDesc: "Tangier, Morocco • Big Data & AI Engineering Student",
      pfeBadge: "PFE 2027 Available",
      contactBtn: "Contact Me",
      copyrightStart: "© 2026 Yasmine Isakrouhen. Crafted with",
      copyrightEnd: "• Professional Portfolio.",
    },
    contact: {
      title: "Contact & Information",
      universityEmailLabel: "University Email",
      personalEmailLabel: "Personal Email",
      phoneLabel: "Phone",
      linkedinLabel: "LinkedIn Profile",
    },
  },
};
