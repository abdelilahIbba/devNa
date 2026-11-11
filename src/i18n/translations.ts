export type Locale = 'en' | 'fr' | 'ar'

const shared = {
  en: {
    nav: {
      home: 'Home',
      projects: 'Projects',
      about: 'About',
      contact: 'Contact',
      getStarted: 'Get Started',
      bookCall: 'Book Discovery Call',
    },
    common: {
      discussSystem: 'Discuss your system',
      viewCaseStudies: 'View case studies',
      allCaseStudies: 'All case studies',
      livePreview: 'Live systems preview',
    },
    home: {
      badge: 'Modern management systems',
      titleLine1: 'Operate with systems',
      titleLine2: 'built for real work',
      description:
        'DEVNAPP designs and ships custom management platforms that turn daily operations into clear, reliable digital workflows.',
      opsStatus: 'Ops status',
      systemsOnline: 'Systems online',
      focus: 'Focus',
      focusValue: 'POS · Fleet · Logistics · CRM',
      approach: 'Approach',
      approachValue: 'Workflow-first engineering',
      metrics: {
        systems: 'Production systems delivered',
        uptime: 'Average platform uptime',
        mvp: 'MVP delivery window',
        satisfaction: 'Client satisfaction',
      },
      work: {
        eyebrow: 'Systems in production',
        title: 'Management platforms that',
        titleHighlight: 'change the day-to-day',
        subtitle:
          'Retail, fleet, logistics — each build maps a real operational problem to a reliable digital system.',
      },
      delivery: {
        eyebrow: 'How we deliver',
        title: 'From workflow map to live system',
        steps: [
          {
            phase: 'Phase 01',
            title: 'Discover & map',
            description:
              'We chart workflows, bottlenecks, and KPIs so the system mirrors how your operations actually run.',
          },
          {
            phase: 'Phase 02',
            title: 'Build & iterate',
            description:
              'Weekly delivery cycles with live demos keep stakeholders aligned and adoption risk low.',
          },
          {
            phase: 'Phase 03',
            title: 'Launch & tune',
            description:
              'After go-live we monitor usage, harden performance, and refine the flows that matter most.',
          },
        ],
      },
      why: {
        eyebrow: 'Why DEVNAPP',
        title: 'Built like operators think',
        subtitle:
          'We treat software as the operational backbone — continuity, clarity, and control — not a decorative website layer.',
        items: [
          {
            title: 'Business continuity',
            body: 'Systems engineered to keep sales, stock, and teams moving — with uptime and recovery designed in from day one.',
          },
          {
            title: 'Protected client data',
            body: 'Access control, audit-minded architecture, and hardened practices around customer and financial records.',
          },
          {
            title: 'Scalable by design',
            body: 'Start with the modules you need. Expand capacity and features as volume grows — without rewriting the core.',
          },
          {
            title: 'Workflow-fit builds',
            body: 'No generic bloat. Each screen and automation maps to how your teams already work — then makes that work faster.',
          },
        ],
      },
      voices: {
        eyebrow: 'From the floor',
        title: 'What changes after launch',
        quotes: [
          {
            text: 'DevNApp translated our operations into a clear digital flow. Our teams adopted it in days, not months.',
            author: 'A. El Mansouri',
            role: 'Operations Director, AtellasFleet',
          },
          {
            text: 'From stock synchronization to reporting, they delivered exactly what we needed and removed daily friction.',
            author: 'S. Rahmani',
            role: 'Retail Manager, TeckMizanne',
          },
        ],
      },
      cta: {
        eyebrow: 'Next system',
        title: 'Ready to modernize how you operate?',
        subtitle:
          'Let’s scope a management system that fits your workflows — then ship it production-ready.',
        button: 'Start a discovery call',
      },
      stats: {
        projects: 'Projects Built',
        clients: 'Happy Clients',
        years: 'Years Experience',
      },
      hero: {
        badge: 'Building The Future',
        title: 'Next-Generation Web Solutions',
        subtitle: 'Experience immersive interactions and futuristic design that sets your business apart',
      },
      title: 'Smart Web Apps For',
      titleHighlight: 'Business Growth',
      exploreProjects: 'Explore Projects',
      watchDemo: 'Watch Demo',
    },
    projects: {
      title: 'Systems in production',
      subtitle: 'Case studies of management platforms that reshaped daily operations.',
      sectors: {
        all: 'All Sectors',
        retail: 'Retail',
        transport: 'Transport',
        logistics: 'Logistics',
        corporate: 'Corporate',
      },
      keyImpact: 'Key Impact',
      result: 'Result',
      emptyTitle: 'No case studies found',
      emptyDesc: 'Try selecting a different sector',
      filter: {
        all: 'All',
        ecommerce: 'E-Commerce',
        saas: 'SaaS',
        portfolio: 'Portfolio',
        dashboard: 'Dashboard',
      },
      viewDetails: 'View Details',
      price: 'Starting at',
      empty: 'No projects found in this category.',
    },
    about: {
      title: 'About',
      subtitle: 'DNA Digital Solutions',
      description:
        'DEVNAPP builds modern management systems that help organizations operate with clarity, continuity, and control.',
      company: 'DEVNAPP',
      tagline: 'DNA Digital Solutions',
      intro:
        'DEVNAPP stands for Development New Application — our mission is to design and ship management platforms that map to real operational workflows, from retail and fleet to logistics and CRM.',
      services: 'Our Services',
      expertise: 'Technical Expertise',
      eyebrow: 'DNA Digital Solutions',
      servicesList: [
        {
          title: 'Custom Web Development',
          description:
            'Tailored web applications built from scratch to meet your specific business needs. We develop scalable, high-performance solutions using modern frameworks and best practices.',
          items: [
            'Full-stack development with modern tech stacks',
            'Responsive design for all devices',
            'Performance optimization & SEO',
          ],
        },
        {
          title: 'Ready-Made Applications',
          description:
            'Production-ready web applications that can be deployed immediately. Browse our collection of pre-built solutions designed for common business needs.',
          items: [
            'Instant deployment with documentation',
            'Customization options available',
            'Ongoing support and updates',
          ],
        },
        {
          title: 'API Development & Integration',
          description:
            'Robust RESTful APIs and third-party integrations to connect your systems and enable seamless data flow across platforms.',
          items: [
            'RESTful API design and implementation',
            'Third-party service integration',
            'Secure authentication & authorization',
          ],
        },
        {
          title: 'Maintenance & Support',
          description:
            'Comprehensive ongoing support to keep your applications running smoothly with regular updates, security patches, and performance improvements.',
          items: [
            'Performance monitoring & optimization',
            'Security audits & patches',
            'Feature enhancements',
          ],
        },
      ],
    },
    contact: {
      title: 'Get In Touch',
      subtitle: 'Have a project in mind? Let’s discuss how we can help your operations scale.',
      formTitle: 'Tell us about your project',
      scoperTitle: 'Interactive Project Scoper',
      scoperSubtitle: 'Select your required system to auto-fill the inquiry',
      scoperOptions: {
        erp: 'ERP / Retail POS',
        fleet: 'CRM & Fleet Tracking',
        ai: 'AI & Automations',
        custom: 'Custom SaaS Platform',
        audit: 'Tech Audit & Redesign',
      },
      form: {
        name: 'Your Name',
        email: 'Email Address',
        subject: 'Subject',
        message: 'Your Message',
        send: 'Send Message',
        sending: 'Sending...',
      },
      whatsappTitle: 'Quick Response',
      whatsappSubtitle: 'Get instant answers via WhatsApp',
      chatNow: 'Chat Now',
      infoTitle: 'Contact Information',
      emailLabel: 'Email',
      phoneLabel: 'Phone',
      locationLabel: 'Location',
      locationValue: 'Av. Aicha Moussafer, Béni Makada, 90060 Tanger, Maroc',
      followUs: 'Follow Us',
      availabilityTitle: 'Available for Projects',
      availabilitySubtitle: 'Currently accepting new projects. Response time: within 24 hours.',
      info: {
        email: 'Email Us',
        phone: 'Call Us',
        whatsapp: 'Chat Now',
      },
      success: 'Message sent successfully. We will get back to you soon.',
      error: 'Something went wrong. Please try again or email us directly.',
    },
    footer: {
      description:
        'DNA Digital Solutions — modern management systems that turn operations into reliable digital workflows.',
      systems: 'Systems',
      company: 'Company',
      reach: 'Reach',
      caseStudies: 'Case Studies',
      enterprise: 'Enterprise Solutions',
      integrations: 'Integrations',
      aboutUs: 'About Us',
      careers: 'Careers',
      contact: 'Contact',
      hub: 'Operations hub',
      bureauLabel: 'Bureau & Client Reception',
      siegeLabel: 'Registered Office',
      privacy: 'Privacy',
      terms: 'Terms',
      sitemap: 'Sitemap',
      rights: 'All rights reserved.',
      quickLinks: 'Quick Links',
      services: 'Services',
    },
  },
  fr: {
    nav: {
      home: 'Accueil',
      projects: 'Projets',
      about: 'À propos',
      contact: 'Contact',
      getStarted: 'Commencer',
      bookCall: 'Réserver un appel',
    },
    common: {
      discussSystem: 'Discuter de votre système',
      viewCaseStudies: 'Voir les études de cas',
      allCaseStudies: 'Toutes les études de cas',
      livePreview: 'Aperçu des systèmes en direct',
    },
    home: {
      badge: 'Systèmes de gestion modernes',
      titleLine1: 'Opérez avec des systèmes',
      titleLine2: 'conçus pour le terrain',
      description:
        'DEVNAPP conçoit et livre des plateformes de gestion sur mesure qui transforment les opérations quotidiennes en flux numériques clairs et fiables.',
      opsStatus: 'Statut ops',
      systemsOnline: 'Systèmes en ligne',
      focus: 'Focus',
      focusValue: 'POS · Flotte · Logistique · CRM',
      approach: 'Approche',
      approachValue: 'Ingénierie orientée workflows',
      metrics: {
        systems: 'Systèmes en production livrés',
        uptime: 'Disponibilité moyenne des plateformes',
        mvp: 'Délai de livraison MVP',
        satisfaction: 'Satisfaction client',
      },
      work: {
        eyebrow: 'Systèmes en production',
        title: 'Des plateformes de gestion qui',
        titleHighlight: 'changent le quotidien',
        subtitle:
          'Retail, flotte, logistique — chaque projet transforme un vrai problème opérationnel en système numérique fiable.',
      },
      delivery: {
        eyebrow: 'Notre méthode',
        title: 'Du schéma de workflow au système live',
        steps: [
          {
            phase: 'Phase 01',
            title: 'Découvrir & cartographier',
            description:
              'Nous cartographions workflows, goulots d’étranglement et KPI pour que le système reflète vos opérations réelles.',
          },
          {
            phase: 'Phase 02',
            title: 'Construire & itérer',
            description:
              'Des cycles de livraison hebdomadaires avec démos live alignent les équipes et réduisent le risque d’adoption.',
          },
          {
            phase: 'Phase 03',
            title: 'Lancer & optimiser',
            description:
              'Après la mise en production, nous suivons l’usage, renforçons la performance et affinons les flux critiques.',
          },
        ],
      },
      why: {
        eyebrow: 'Pourquoi DEVNAPP',
        title: 'Conçu comme pensent les opérateurs',
        subtitle:
          'Nous traitons le logiciel comme la colonne vertébrale opérationnelle — continuité, clarté et contrôle — pas comme une couche décorative.',
        items: [
          {
            title: 'Continuité d’activité',
            body: 'Des systèmes conçus pour maintenir ventes, stocks et équipes en mouvement — avec disponibilité et reprise prévues dès le premier jour.',
          },
          {
            title: 'Données clients protégées',
            body: 'Contrôle d’accès, architecture auditable et pratiques renforcées autour des données clients et financières.',
          },
          {
            title: 'Évolutif par conception',
            body: 'Commencez avec les modules nécessaires. Augmentez capacité et fonctionnalités à mesure que le volume croît — sans réécrire le cœur.',
          },
          {
            title: 'Adapté aux workflows',
            body: 'Pas de surcharge inutile. Chaque écran et automatisation suit la façon dont vos équipes travaillent déjà — puis accélère ce travail.',
          },
        ],
      },
      voices: {
        eyebrow: 'Sur le terrain',
        title: 'Ce qui change après le lancement',
        quotes: [
          {
            text: 'DevNApp a transformé nos opérations en un flux digital clair. Nos équipes l’ont adopté en quelques jours, pas en mois.',
            author: 'A. El Mansouri',
            role: 'Directeur des opérations, AtellasFleet',
          },
          {
            text: 'De la synchronisation des stocks au reporting, ils ont livré exactement ce qu’il fallait et ont retiré les frictions quotidiennes.',
            author: 'S. Rahmani',
            role: 'Responsable retail, TeckMizanne',
          },
        ],
      },
      cta: {
        eyebrow: 'Prochain système',
        title: 'Prêt à moderniser votre façon d’opérer ?',
        subtitle:
          'Définissons ensemble un système de gestion adapté à vos workflows — puis livrons-le prêt pour la production.',
        button: 'Démarrer un appel découverte',
      },
      stats: {
        projects: 'Projets réalisés',
        clients: 'Clients satisfaits',
        years: 'Années d’expérience',
      },
      hero: {
        badge: 'Construire l’avenir',
        title: 'Solutions web de nouvelle génération',
        subtitle: 'Des interactions immersives et un design distinctif pour votre entreprise',
      },
      title: 'Applications web intelligentes pour',
      titleHighlight: 'la croissance',
      exploreProjects: 'Découvrir les projets',
      watchDemo: 'Voir la démo',
    },
    projects: {
      title: 'Systèmes en production',
      subtitle: 'Études de cas de plateformes de gestion qui ont transformé les opérations quotidiennes.',
      sectors: {
        all: 'Tous les secteurs',
        retail: 'Commerce & Retail',
        transport: 'Transport & Flotte',
        logistics: 'Logistique',
        corporate: 'Entreprise',
      },
      keyImpact: 'Impact clé',
      result: 'Résultat',
      emptyTitle: 'Aucune étude de cas trouvée',
      emptyDesc: 'Essayez de sélectionner un autre secteur',
      filter: {
        all: 'Tous',
        ecommerce: 'E-Commerce',
        saas: 'SaaS',
        portfolio: 'Portfolio',
        dashboard: 'Tableau de bord',
      },
      viewDetails: 'Voir les détails',
      price: 'À partir de',
      empty: 'Aucun projet trouvé dans cette catégorie.',
    },
    about: {
      title: 'À propos',
      subtitle: 'DNA Digital Solutions',
      description:
        'DEVNAPP construit des systèmes de gestion modernes qui aident les organisations à opérer avec clarté, continuité et contrôle.',
      company: 'DEVNAPP',
      tagline: 'DNA Digital Solutions',
      intro:
        'DEVNAPP signifie Development New Application — notre mission est de concevoir et livrer des plateformes de gestion alignées sur les workflows opérationnels réels, du retail et de la flotte à la logistique et au CRM.',
      services: 'Nos services',
      expertise: 'Expertise technique',
      eyebrow: 'DNA Digital Solutions',
      servicesList: [
        {
          title: 'Développement Web Sur Mesure',
          description:
            'Applications web taillées sur mesure pour répondre aux besoins opérationnels précis de votre entreprise. Solutions évolutives et performantes.',
          items: [
            'Développement full-stack avec technologies modernes',
            'Design adaptatif et ergonomie responsive',
            'Optimisation des performances et SEO technique',
          ],
        },
        {
          title: 'Applications Métier Clé en Main',
          description:
            'Solutions logicielles prêtes pour la production et déployables immédiatement. Modules pré-conçus et adaptés aux problématiques courantes.',
          items: [
            'Déploiement rapide avec documentation complète',
            'Options de personnalisation selon vos processus',
            'Support technique et évolutions continues',
          ],
        },
        {
          title: 'Développement d’API & Intégrations',
          description:
            'Architectures d’API REST sécurisées et interconnexion avec vos services tiers (ERP, paiements, CRM) pour fluidifier vos flux de données.',
          items: [
            'Conception et implémentation d’API RESTful fiables',
            'Intégration d’outils tiers et passerelles de paiement',
            'Authentification sécurisée et conformité des accès',
          ],
        },
        {
          title: 'Maintenance, Sécurité & Support',
          description:
            'Accompagnement continu garantissant la disponibilité et la fluidité de vos systèmes avec mises à jour préventives et monitoring régulier.',
          items: [
            'Surveillance des performances et haute disponibilité',
            'Audits de sécurité réguliers et correctifs proactifs',
            'Développement de nouvelles fonctionnalités',
          ],
        },
      ],
    },
    contact: {
      title: 'Contactez-nous',
      subtitle: 'Un projet en tête ? Discutons de la façon dont nous pouvons faire évoluer vos opérations.',
      formTitle: 'Parlez-nous de votre projet',
      scoperTitle: 'Cadrage interactif du projet',
      scoperSubtitle: 'Sélectionnez votre type de système pour pré-remplir votre demande',
      scoperOptions: {
        erp: 'ERP & Caisse Tactile (POS)',
        fleet: 'CRM & Gestion de Flotte',
        ai: 'Intégration IA & Automatisation',
        custom: 'Plateforme Sur-Mesure / SaaS',
        audit: 'Audit & Refonte Tech',
      },
      form: {
        name: 'Votre nom',
        email: 'Adresse e-mail',
        subject: 'Sujet',
        message: 'Votre message',
        send: 'Envoyer le message',
        sending: 'Envoi…',
      },
      whatsappTitle: 'Réponse rapide',
      whatsappSubtitle: 'Échangez directement avec notre équipe via WhatsApp',
      chatNow: 'Discuter maintenant',
      infoTitle: 'Coordonnées directes',
      emailLabel: 'E-mail',
      phoneLabel: 'Téléphone',
      locationLabel: 'Localisation',
      locationValue: 'Av. Aicha Moussafer, Béni Makada, 90060 Tanger, Maroc',
      followUs: 'Suivez-nous',
      availabilityTitle: 'Disponible pour nouveaux projets',
      availabilitySubtitle: 'Nous acceptons actuellement de nouveaux projets. Réponse garantie sous 24h.',
      info: {
        email: 'Nous écrire',
        phone: 'Nous appeler',
        whatsapp: 'Discuter maintenant',
      },
      success: 'Message envoyé avec succès. Nous vous répondrons bientôt.',
      error: 'Une erreur est survenue. Réessayez ou écrivez-nous directement.',
    },
    footer: {
      description:
        'DNA Digital Solutions — des systèmes de gestion modernes qui transforment les opérations en flux numériques fiables.',
      systems: 'Systèmes',
      company: 'Entreprise',
      reach: 'Coordonnées',
      caseStudies: 'Études de cas',
      enterprise: 'Solutions entreprise',
      integrations: 'Intégrations',
      aboutUs: 'À propos',
      careers: 'Carrières',
      contact: 'Contact',
      hub: 'Hub opérations',
      bureauLabel: 'Bureau & Réception Clients',
      siegeLabel: 'Siège social',
      privacy: 'Confidentialité',
      terms: 'Conditions',
      sitemap: 'Plan du site',
      rights: 'Tous droits réservés.',
      quickLinks: 'Liens rapides',
      services: 'Services',
    },
  },
  ar: {
    nav: {
      home: 'الرئيسية',
      projects: 'المشاريع',
      about: 'من نحن',
      contact: 'اتصل بنا',
      getStarted: 'ابدأ الآن',
      bookCall: 'احجز مكالمة اكتشاف',
    },
    common: {
      discussSystem: 'ناقش نظامك',
      viewCaseStudies: 'عرض دراسات الحالة',
      allCaseStudies: 'كل دراسات الحالة',
      livePreview: 'معاينة الأنظمة المباشرة',
    },
    home: {
      badge: 'أنظمة إدارة حديثة',
      titleLine1: 'شغّل عملياتك بأنظمة',
      titleLine2: 'مبنية للعمل الحقيقي',
      description:
        'تصمم DEVNAPP وتنشر منصات إدارة مخصصة تحول العمليات اليومية إلى تدفقات رقمية واضحة وموثوقة.',
      opsStatus: 'حالة العمليات',
      systemsOnline: 'الأنظمة متصلة',
      focus: 'التركيز',
      focusValue: 'نقاط البيع · الأسطول · اللوجستيات · CRM',
      approach: 'المنهج',
      approachValue: 'هندسة موجهة لسير العمل',
      metrics: {
        systems: 'أنظمة إنتاج تم تسليمها',
        uptime: 'متوسط توافر المنصات',
        mvp: 'نافذة تسليم MVP',
        satisfaction: 'رضا العملاء',
      },
      work: {
        eyebrow: 'أنظمة في الإنتاج',
        title: 'منصات إدارة',
        titleHighlight: 'تغير العمل اليومي',
        subtitle:
          'التجزئة والأسطول واللوجستيات — كل مشروع يحوّل مشكلة تشغيلية حقيقية إلى نظام رقمي موثوق.',
      },
      delivery: {
        eyebrow: 'كيف نُسلّم',
        title: 'من خريطة سير العمل إلى نظام حي',
        steps: [
          {
            phase: 'المرحلة 01',
            title: 'اكتشاف ورسم',
            description:
              'نرسم سير العمل والاختناقات ومؤشرات الأداء حتى يعكس النظام طريقة عملكم الحقيقية.',
          },
          {
            phase: 'المرحلة 02',
            title: 'بناء وتكرار',
            description:
              'دورات تسليم أسبوعية مع عروض مباشرة تبقي الفرق متوافقة وتقلل مخاطر التبني.',
          },
          {
            phase: 'المرحلة 03',
            title: 'إطلاق وضبط',
            description:
              'بعد الإطلاق نتابع الاستخدام ونعزز الأداء ونحسّن التدفقات الأهم.',
          },
        ],
      },
      why: {
        eyebrow: 'لماذا DEVNAPP',
        title: 'مبنية كما يفكر المشغّلون',
        subtitle:
          'نتعامل مع البرمجيات كعمود فقري تشغيلي — استمرارية ووضوح وتحكم — وليس طبقة تجميلية للموقع.',
        items: [
          {
            title: 'استمرارية الأعمال',
            body: 'أنظمة مصممة لإبقاء المبيعات والمخزون والفرق في حركة — مع التوافر والتعافي منذ اليوم الأول.',
          },
          {
            title: 'حماية بيانات العملاء',
            body: 'تحكم بالوصول وهندسة قابلة للتدقيق وممارسات معززة حول بيانات العملاء والمالية.',
          },
          {
            title: 'قابلة للتوسع بالتصميم',
            body: 'ابدأ بالوحدات التي تحتاجها. وسّع السعة والميزات مع نمو الحجم — دون إعادة كتابة النواة.',
          },
          {
            title: 'ملائمة لسير العمل',
            body: 'لا تضخم عام. كل شاشة وأتمتة تتبع طريقة عمل فرقكم ثم تجعل هذا العمل أسرع.',
          },
        ],
      },
      voices: {
        eyebrow: 'من الميدان',
        title: 'ما الذي يتغير بعد الإطلاق',
        quotes: [
          {
            text: 'حوّلت DevNApp عملياتنا إلى تدفق رقمي واضح. تبنّتها فرقنا خلال أيام وليس أشهر.',
            author: 'أ. المنصوري',
            role: 'مدير العمليات، AtellasFleet',
          },
          {
            text: 'من مزامنة المخزون إلى التقارير، سلّموا بالضبط ما نحتاجه وأزالوا الاحتكاك اليومي.',
            author: 'س. رحماني',
            role: 'مدير التجزئة، TeckMizanne',
          },
        ],
      },
      cta: {
        eyebrow: 'النظام التالي',
        title: 'جاهز لتحديث طريقة عملك؟',
        subtitle:
          'لنحدد معاً نظام إدارة يناسب سير عملكم — ثم نسلّمه جاهزاً للإنتاج.',
        button: 'ابدأ مكالمة اكتشاف',
      },
      stats: {
        projects: 'مشاريع منجزة',
        clients: 'عملاء راضون',
        years: 'سنوات خبرة',
      },
      hero: {
        badge: 'بناء المستقبل',
        title: 'حلول الويب من الجيل القادم',
        subtitle: 'تفاعلات غامرة وتصميم يميّز عملك',
      },
      title: 'تطبيقات ويب ذكية لـ',
      titleHighlight: 'نمو الأعمال',
      exploreProjects: 'استكشف المشاريع',
      watchDemo: 'شاهد العرض',
    },
    projects: {
      title: 'أنظمة في الإنتاج',
      subtitle: 'دراسات حالة لمنصات إدارة أعادت تشكيل العمليات اليومية.',
      sectors: {
        all: 'جميع القطاعات',
        retail: 'التجزئة والمتاجر',
        transport: 'النقل والأسطول',
        logistics: 'اللوجستيات والمخازن',
        corporate: 'الشركات والمؤسسات',
      },
      keyImpact: 'الأثر التشغيلي',
      result: 'النتيجة',
      emptyTitle: 'لم يتم العثور على دراسات حالة',
      emptyDesc: 'يرجى اختيار قطاع آخر',
      filter: {
        all: 'الكل',
        ecommerce: 'التجارة الإلكترونية',
        saas: 'SaaS',
        portfolio: 'معرض الأعمال',
        dashboard: 'لوحة التحكم',
      },
      viewDetails: 'عرض التفاصيل',
      price: 'يبدأ من',
      empty: 'لا توجد مشاريع في هذه الفئة.',
    },
    about: {
      title: 'من نحن',
      subtitle: 'DNA Digital Solutions',
      description:
        'تبني DEVNAPP أنظمة إدارة حديثة تساعد المؤسسات على العمل بوضوح واستمرارية وتحكم.',
      company: 'DEVNAPP',
      tagline: 'DNA Digital Solutions',
      intro:
        'DEVNAPP تعني Development New Application — مهمتنا تصميم وتسليم منصات إدارة تتوافق مع سير العمل التشغيلي الحقيقي، من التجزئة والأسطول إلى اللوجستيات وCRM.',
      services: 'خدماتنا',
      expertise: 'الخبرة التقنية',
      eyebrow: 'DNA Digital Solutions',
      servicesList: [
        {
          title: 'تطوير ويب مخصص',
          description:
            'تطبيقات وأنظمة ويب مصممة خصيصاً لتلبية متطلبات أعمالكم بدقة، مع أداء فائق وقابلية للتوسع.',
          items: [
            'تطوير متكامل بأحدث التقنيات البرمجية',
            'تصميم متجاوب وسلس لكافة الأجهزة',
            'تحسين مستمر للأداء والسرعة ومحركات البحث',
          ],
        },
        {
          title: 'أنظمة وتطبيقات جاهزة',
          description:
            'حلول برمجية جاهزة للتشغيل الفوري مع إمكانية التخصيص الكامل وفق آليات عمل منشأتكم.',
          items: [
            'نشر سريع مع توثيق شامل للعمليات',
            'مرونة عالية في التخصيص والإضافة',
            'دعم فني وتحديثات مستمرة ومباشرة',
          ],
        },
        {
          title: 'تطوير وتكامل واجهات API',
          description:
            'بناء واجهات برمجية RESTful قوية وربط سلس مع الأنظمة الخارجية وبوابات الدفع وقواعد البيانات.',
          items: [
            'تصميم وتنفيذ واجهات برمجية آمنة وموثوقة',
            'ربط وتكامل مع منصات وخدمات الطرف الثالث',
            'تحكم أمني دقيق بصلاحيات الوصول والتشفير',
          ],
        },
        {
          title: 'الصيانة والدعم الفني المستمر',
          description:
            'دعم تقني ومتابعة دورية لضمان استمرارية تشغيل أنظمتكم وتحديثها وتأمينها ضد أي توقف.',
          items: [
            'مراقبة مستمرة للأداء وتفادي الأعطال',
            'تحديثات أمنية وتدقيق وقائي مستمر',
            'تطوير ميزات إضافية مع نمو الأعمال',
          ],
        },
      ],
    },
    contact: {
      title: 'تواصل معنا',
      subtitle: 'هل لديك مشروع؟ دعنا نناقش كيف نساعد عملياتك على التوسع.',
      formTitle: 'حدّثنا عن مشروعك',
      scoperTitle: 'محدد نطاق المشروع الذكي',
      scoperSubtitle: 'اختر نوع النظام المطلوب لتجهيز نموذج الطلب بنقرة واحدة',
      scoperOptions: {
        erp: 'ERP وإدارة المبيعات (POS)',
        fleet: 'CRM وتتبع الأسطول',
        ai: 'حلول الذكاء الاصطناعي والأتمتة',
        custom: 'منصة برمجية مخصصة / SaaS',
        audit: 'تدقيق وتحديث الأنظمة',
      },
      form: {
        name: 'اسمك',
        email: 'البريد الإلكتروني',
        subject: 'الموضوع',
        message: 'رسالتك',
        send: 'إرسال الرسالة',
        sending: 'جارٍ الإرسال…',
      },
      whatsappTitle: 'استجابة سريعة',
      whatsappSubtitle: 'تواصل مباشرة مع فريقنا عبر واتساب',
      chatNow: 'دردش الآن',
      infoTitle: 'معلومات الاتصال',
      emailLabel: 'البريد الإلكتروني',
      phoneLabel: 'الهاتف',
      locationLabel: 'المقر',
      locationValue: 'شارع عائشة المسافر، بني مكادة، 90060 طنجة، المغرب',
      followUs: 'تابعنا',
      availabilityTitle: 'متاح لمشاريع جديدة',
      availabilitySubtitle: 'نستقبل حالياً مشاريع جديدة. الرد مؤكد خلال 24 ساعة.',
      info: {
        email: 'راسلنا',
        phone: 'اتصل بنا',
        whatsapp: 'دردش الآن',
      },
      success: 'تم إرسال الرسالة بنجاح. سنعود إليك قريباً.',
      error: 'حدث خطأ. حاول مرة أخرى أو راسلنا مباشرة.',
    },
    footer: {
      description:
        'DNA Digital Solutions — أنظمة إدارة حديثة تحول العمليات إلى تدفقات رقمية موثوقة.',
      systems: 'الأنظمة',
      company: 'الشركة',
      reach: 'التواصل',
      caseStudies: 'دراسات الحالة',
      enterprise: 'حلول المؤسسات',
      integrations: 'التكاملات',
      aboutUs: 'من نحن',
      careers: 'الوظائف',
      contact: 'اتصل بنا',
      hub: 'مركز العمليات',
      bureauLabel: 'مكتب استقبال العملاء',
      siegeLabel: 'المقر الاجتماعي',
      privacy: 'الخصوصية',
      terms: 'الشروط',
      sitemap: 'خريطة الموقع',
      rights: 'جميع الحقوق محفوظة.',
      quickLinks: 'روابط سريعة',
      services: 'الخدمات',
    },
  },
} as const

export const translations = shared
export type TranslationKey = keyof typeof translations.en
