<template>
  <div class="min-h-screen bg-transparent pt-24 pb-16 page-view relative">
    <!-- Section Backlights (Piercing through project cards glass) -->
    <div class="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] max-w-5xl h-[350px] bg-gradient-to-r from-[#00A8FF]/40 via-[#3B82F6]/35 to-[#1E1B4B]/45 blur-[110px] opacity-35 pointer-events-none rounded-full -z-10"></div>
    <div class="absolute top-2/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] max-w-5xl h-[350px] bg-gradient-to-r from-[#3B82F6]/35 via-[#00A8FF]/35 to-[#1E1B4B]/45 blur-[110px] opacity-35 pointer-events-none rounded-full -z-10"></div>

    <div class="page-container relative z-10">
      <!-- Page Header -->
      <div class="text-center mb-12">
        <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 font-display tracking-tight">
          {{ t.projects.title }}
        </h1>
        <p class="text-lg sm:text-xl text-[#9aa8bc] max-w-2xl mx-auto leading-relaxed">
          {{ t.projects.subtitle }}
        </p>
      </div>

      <!-- iOS Segmented Control Capsule Filter -->
      <div class="flex justify-center mb-12 sm:mb-14 px-2">
        <div class="inline-flex p-1.5 rounded-full vision-glass-card border border-white/20 backdrop-blur-2xl shadow-[0_12px_32px_rgba(0,0,0,0.4)] max-w-full overflow-x-auto">
          <button 
            v-for="cat in sectorCategories" 
            :key="cat.key"
            @click="selectedSectorKey = cat.key"
            type="button"
            class="px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 whitespace-nowrap"
            :class="selectedSectorKey === cat.key 
              ? 'bg-gradient-to-r from-[#0096e0] to-[#00c2ff] text-[#010217] shadow-[0_0_20px_rgba(0,194,255,0.35)]' 
              : 'text-[#9aa8bc] hover:text-white hover:bg-white/5'"
          >
            {{ cat.label }}
          </button>
        </div>
      </div>

      <!-- Projects Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" ref="projectsGrid">
        <ProjectCard 
          v-for="project in filteredProjects" 
          :key="project.id"
          :project="project"
          class="translate-y-0" 
        />
      </div>

      <!-- Empty State -->
      <div v-if="filteredProjects.length === 0" class="text-center py-20 vision-glass-card max-w-md mx-auto p-8">
        <svg class="w-16 h-16 mx-auto text-[#00c2ff]/60 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"/>
        </svg>
        <h3 class="text-xl font-bold text-white mb-2">{{ t.projects.emptyTitle }}</h3>
        <p class="text-[#9aa8bc] text-sm">{{ t.projects.emptyDesc }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, nextTick, watch } from 'vue'
import ProjectCard from '@/components/ProjectCard.vue'
import { useI18n } from '@/i18n'
import { animate, stagger } from 'animejs'

import tm1 from '@/assets/tickMizane/TeckMizanne1.png'
import tm2 from '@/assets/tickMizane/TeckMizanne2.png'
import tm3 from '@/assets/tickMizane/TeckMizanne3.png'
import tm4 from '@/assets/tickMizane/TeckMizanne4.png'
import af1 from '@/assets/AtellasFleet/Screenshot 2026-02-19 145154.png'
import af2 from '@/assets/AtellasFleet/Screenshot 2026-02-19 145214.png'
import af3 from '@/assets/AtellasFleet/Screenshot 2026-02-19 145330.png'
import af4 from '@/assets/AtellasFleet/Screenshot 2026-02-19 145343.png'
import af5 from '@/assets/AtellasFleet/Screenshot 2026-02-19 145352.png'

const { t, locale } = useI18n()

type SectorKey = 'all' | 'retail' | 'transport' | 'logistics' | 'corporate'

const selectedSectorKey = ref<SectorKey>('all')

const sectorCategories = computed(() => [
  { key: 'all' as SectorKey, label: t.value.projects.sectors.all },
  { key: 'retail' as SectorKey, label: t.value.projects.sectors.retail },
  { key: 'transport' as SectorKey, label: t.value.projects.sectors.transport },
  { key: 'logistics' as SectorKey, label: t.value.projects.sectors.logistics },
  { key: 'corporate' as SectorKey, label: t.value.projects.sectors.corporate },
])

// Multi-language synchronized project records
const localizedProjects = computed(() => {
  const isFr = locale.value === 'fr'
  const isAr = locale.value === 'ar'

  return [
    {
      id: 1,
      sectorKey: 'retail' as SectorKey,
      title: 'TeckMizanne POS',
      description: isFr
        ? 'Écosystème de gestion commerciale complet pour réseau multi-magasins. Contrôle centralisé des stocks et suivi des ventes en direct.'
        : isAr
        ? 'منظومة إدارة مبيعات متكاملة لسلسلة متاجر متعددة الفروع. مراقبة مركزية للمخزون ومتابعة لحظية للمبيعات.'
        : 'A complete retail management ecosystem for a multi-outlet franchise. Enabled centralized stock control and real-time sales tracking.',
      image: tm1,
      images: [tm1, tm2, tm3, tm4],
      category: isFr ? 'Commerce & Retail' : isAr ? 'التجزئة والمتاجر' : 'Retail',
      tags: isFr ? ['Fort Volume', 'Multi-Boutique'] : isAr ? ['حجم مبيعات عالي', 'فروع متعددة'] : ['High Volume'],
      technologies: isFr ? ['Sync Stock', 'Reporting', 'Caisse Tactile'] : isAr ? ['مزامنة المخزون', 'التقارير', 'نقطة بيع'] : ['Stock Sync', 'Reporting', 'POS'],
      result: isFr
        ? 'Temps d’attente en caisse réduit de 37% sur 4 magasins'
        : isAr
        ? 'تقليص وقت الانتظار عند الصندوق بنسبة 37% عبر 4 فروع'
        : 'Reduced checkout waiting time by 37% across 4 stores'
    },
    {
      id: 2,
      sectorKey: 'transport' as SectorKey,
      title: 'AutoFleet Manager',
      description: isFr
        ? 'Transformation numérique pour agence de location de véhicules. Réservations automatisées, suivi de maintenance de la flotte et contrats dématérialisés.'
        : isAr
        ? 'تحول رقمي متكامل لوكالة تأجير سيارات. أتمتة الحجوزات ومتابعة صيانة الأسطول وإصدار العقود الإلكترونية.'
        : 'Digital transformation for a vehicle rental agency. Automated bookings, fleet maintenance tracking, and customer contracts.',
      image: af1,
      images: [af1, af2, af3, af4, af5],
      category: isFr ? 'Transport & Flotte' : isAr ? 'النقل والأسطول' : 'Transport',
      tags: isFr ? ['Automatisation', 'Flotte'] : isAr ? ['أتمتة', 'أسطول'] : ['Automation'],
      technologies: isFr ? ['Réservations', 'Suivi Flotte', 'Contrats Cloud'] : isAr ? ['حجز إلكتروني', 'إدارة الأسطول', 'سحابة'] : ['Booking', 'Fleet', 'Cloud'],
      previewUrl: 'https://atellasfleetdeploy.vercel.app/',
      previewBrand: 'AtellasFleet',
      previewHeadline: isFr
        ? 'Plateforme Premium de Location de Véhicules'
        : isAr
        ? 'منصة متقدمة لإدارة وتأجير السيارات'
        : 'Premium Car Rental Platform',
      previewSummary: isFr
        ? 'Expérience web professionnelle pour le parcours de réservation, visibilité de la flotte en temps réel et tableau de bord opérationnel.'
        : isAr
        ? 'تجربة مستخدم احترافية لمسار الحجز ورؤية فورية لتوافر الأسطول مع لوحة تحكم تشغيلية موحدة.'
        : 'Professional web experience for reservation flow, real-time fleet visibility, and operations dashboard in one unified system.',
      previewStats: [
        { label: isFr ? 'Disponibilité Flotte' : isAr ? 'جاهزية الأسطول' : 'Fleet Availability', value: '94%' },
        { label: isFr ? 'Tunnel de Réservation' : isAr ? 'زمن الحجز' : 'Booking Flow', value: '< 2 min' },
        { label: isFr ? 'Villes Couvertes' : isAr ? 'المدن المغطاة' : 'Cities Covered', value: '5' }
      ],
      result: isFr
        ? '+42% de réservations finalisées en 90 jours'
        : isAr
        ? 'زيادة الحجوزات المكتملة بنسبة 42% خلال 90 يوماً'
        : 'Increased completed bookings by 42% in 90 days'
    },
    {
      id: 3,
      sectorKey: 'logistics' as SectorKey,
      title: 'ProStock Logistics',
      description: isFr
        ? 'Suite d’optimisation d’entrepôt réduisant de 40% le cycle de traitement et d’expédition des commandes pour un opérateur logistique.'
        : isAr
        ? 'حزمة برمجية متطورة لإدارة المستودعات قلصت زمن معالجة الطلبات بنسبة 40% لشركة لوجستية كبرى.'
        : 'Warehouse optimization suite reducing order processing time by 40% for a major logistics provider.',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80',
      category: isFr ? 'Logistique' : isAr ? 'اللوجستيات' : 'Logistics',
      tags: isFr ? ['Échelle', 'Flux'] : isAr ? ['توسع', 'تدفق'] : ['Scale'],
      technologies: isFr ? ['Efficacité', 'Traçabilité', 'WMS'] : isAr ? ['كفاءة', 'تتبع', 'WMS'] : ['Efficiency', 'Tracking'],
      result: isFr
        ? 'Délai de traitement des commandes réduit de 40%'
        : isAr
        ? 'خفض زمن مناولة الطلبيات بنسبة 40%'
        : 'Cut order handling cycle time by 40%'
    },
    {
      id: 4,
      sectorKey: 'corporate' as SectorKey,
      title: 'MediCare CRM',
      description: isFr
        ? 'Système sécurisé de gestion des patients pour réseau de cliniques privées. Planification des rendez-vous améliorée de 60%.'
        : isAr
        ? 'نظام آمن لإدارة المرضى والمواعيد لشبكة عيادات خاصة. ساهم في رفع كفاءة جدولة المواعيد بنسبة 60%.'
        : 'Secure patient management system for a private clinic network. Improved appointment scheduling efficiency by 60%.',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80',
      category: isFr ? 'Santé & Entreprise' : isAr ? 'الرعاية الصحية' : 'Corporate',
      tags: isFr ? ['Santé', 'Sécurité'] : isAr ? ['صحة', 'أمان'] : ['Healthcare'],
      technologies: isFr ? ['Sécurité', 'Prise de RDV', 'Dossier Médical'] : isAr ? ['أمان', 'جدولة', 'ملفات طبية'] : ['Security', 'Scheduling'],
      result: isFr
        ? 'Efficacité de planification améliorée de 60%'
        : isAr
        ? 'تحسين دقة وسرعة المواعيد بنسبة 60%'
        : 'Improved scheduling efficiency by 60%'
    },
    {
      id: 5,
      sectorKey: 'corporate' as SectorKey,
      title: 'CityReal Estate',
      description: isFr
        ? 'Portail de gestion immobilière avec visites virtuelles immersives et filtrage automatisé des dossiers locataires.'
        : isAr
        ? 'بوابة عقارية ذكية تتيح جولات افتراضية ثلاثية الأبعاد وفحصاً مؤتمتاً لطلبات المستأجرين.'
        : 'Property management portal enabling virtual tours and automated tenant screening.',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80',
      category: isFr ? 'Immobilier & Entreprise' : isAr ? 'عقارات' : 'Corporate',
      tags: isFr ? ['Immobilier', 'Portail'] : isAr ? ['عقارات', 'بوابة'] : ['Real Estate'],
      technologies: isFr ? ['Visite Virtuelle', 'Portail B2B', 'Contrats'] : isAr ? ['جولة افتراضية', 'بوابة', 'عقود'] : ['Virtual Tour', 'Portal'],
      result: isFr
        ? 'Délai de signature des baux divisé par deux'
        : isAr
        ? 'تقليص وقت تأجير العقارات إلى النصف'
        : 'Cut lease closing duration in half'
    },
    {
      id: 6,
      sectorKey: 'logistics' as SectorKey,
      title: 'FoodChain Supply',
      description: isFr
        ? 'Outil de traçabilité de chaîne d’approvisionnement pour distributeur agroalimentaire, de la ferme au rayon.'
        : isAr
        ? 'أداة لتتبع سلسلة التوريد لشركة توزيع غذائي، لضمان معايير الجودة من المزرعة إلى نقاط البيع.'
        : 'Supply chain transparency tool for a food distributor. Tracked provenance from farm to table.',
      image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&q=80',
      category: isFr ? 'Logistique' : isAr ? 'سلاسل التوريد' : 'Logistics',
      tags: isFr ? ['Traçabilité', 'IoT'] : isAr ? ['سلسلة إمداد', 'IoT'] : ['Supply Chain'],
      technologies: isFr ? ['IoT', 'Traçabilité', 'Qualité'] : isAr ? ['إنترنت الأشياء', 'تتبع', 'جودة'] : ['IoT', 'Tracking'],
      result: isFr
        ? '100% de traçabilité garantie sur les lots critiques'
        : isAr
        ? 'تتبع كامل بنسبة 100% للشحنات الغذائية الحساسة'
        : '100% provenance verification across critical lots'
    }
  ]
})

const filteredProjects = computed(() => {
  if (selectedSectorKey.value === 'all') {
    return localizedProjects.value
  }
  return localizedProjects.value.filter(project => project.sectorKey === selectedSectorKey.value)
})

const projectsGrid = ref<HTMLElement | null>(null)

const animateItems = () => {
  if (!projectsGrid.value) return
  
  const items = projectsGrid.value.children
  animate(items, {
    opacity: 0,
    translateY: 20,
    duration: 0
  })

  animate(items, {
    opacity: [0, 1],
    translateY: [20, 0],
    delay: stagger(100),
    easing: 'easeOutQuad',
    duration: 600
  })
}

// Re-run animation on filter change
watch(selectedSectorKey, () => {
  nextTick(() => {
    animateItems()
  })
})

onMounted(() => {
  nextTick(() => {
    animateItems()
  })
})
</script>
