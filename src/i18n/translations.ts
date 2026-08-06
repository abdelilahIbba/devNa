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
    },
    contact: {
      title: 'Get In Touch',
      subtitle: 'Have a project in mind? Let’s discuss how we can help your operations scale.',
      form: {
        name: 'Your Name',
        email: 'Email Address',
        subject: 'Subject',
        message: 'Your Message',
        send: 'Send Message',
        sending: 'Sending...',
      },
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
    },
    contact: {
      title: 'Contactez-nous',
      subtitle: 'Un projet en tête ? Discutons de la façon dont nous pouvons faire évoluer vos opérations.',
      form: {
        name: 'Votre nom',
        email: 'Adresse e-mail',
        subject: 'Sujet',
        message: 'Votre message',
        send: 'Envoyer le message',
        sending: 'Envoi…',
      },
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
    },
    contact: {
      title: 'تواصل معنا',
      subtitle: 'هل لديك مشروع؟ دعنا نناقش كيف نساعد عملياتك على التوسع.',
      form: {
        name: 'اسمك',
        email: 'البريد الإلكتروني',
        subject: 'الموضوع',
        message: 'رسالتك',
        send: 'إرسال الرسالة',
        sending: 'جارٍ الإرسال…',
      },
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
