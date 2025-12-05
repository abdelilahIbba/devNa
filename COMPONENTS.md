# DevNA Portfolio - Component Documentation

## 🧩 Component Overview

### Core Components

#### 1. Navbar.vue
**Location**: `src/components/Navbar.vue`

**Features**:
- Fixed navigation bar with backdrop blur
- Logo with hover animation
- Desktop & mobile navigation
- Active route highlighting
- Mobile hamburger menu with smooth transitions
- "Get Started" CTA button

**Customization**:
```vue
// Update navigation links
const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Projects', path: '/projects' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' }
]
```

---

#### 2. Footer.vue
**Location**: `src/components/Footer.vue`

**Features**:
- Multi-column layout (Brand, Quick Links, Services, Contact)
- Social media icons (GitHub, LinkedIn, Twitter, Facebook)
- Newsletter/contact information
- Copyright and legal links
- Dark background with gradient accent

**Customization**:
- Update social media URLs
- Change contact information
- Modify service links
- Update copyright year (auto-updates)

---

#### 3. ProjectCard.vue
**Location**: `src/components/ProjectCard.vue`

**Features**:
- Hover animations (lift effect, image zoom)
- Category tags
- Technology badges
- Click-to-view functionality
- Responsive image container
- Clean typography

**Props**:
```typescript
interface Project {
  id: number
  title: string
  description: string
  image: string
  category: string
  tags: string[]
  technologies?: string[]
}
```

**Usage**:
```vue
<ProjectCard :project="projectData" />
```

---

## 📄 Page Components

### 1. HomeView.vue
**Route**: `/`

**Sections**:
1. **Hero Section**
   - Animated gradient background
   - Headline with gradient text effect
   - CTA buttons (Explore Projects, Watch Demo)
   - Stats counter (Projects, Clients, Satisfaction)
   - Scroll indicator

2. **Featured Projects**
   - Grid layout (3 columns on desktop)
   - ProjectCard components
   - "View All Projects" CTA

3. **Why Choose Us**
   - 6 feature cards in grid
   - Icon + title + description
   - Hover effects

4. **CTA Section**
   - Contact Us button
   - WhatsApp button
   - Gradient background

**Data Structure**:
```typescript
const featuredProjects = ref([
  {
    id: 1,
    title: 'E-Commerce Dashboard',
    description: '...',
    image: 'https://...',
    category: 'Business Tools',
    tags: ['Featured', 'Popular'],
    technologies: ['Vue.js', 'Laravel', ...]
  }
])
```

---

### 2. ProjectsView.vue
**Route**: `/projects`

**Features**:
- Category filter buttons
- Project grid with cards
- Filter functionality
- Empty state handling
- Computed filtering

**Categories**:
- All
- Web Apps
- Dashboards
- Business Tools
- E-Commerce

**Add New Project**:
```typescript
projects.value.push({
  id: 10,
  title: 'New Project',
  description: 'Description...',
  image: 'https://...',
  category: 'Web Apps',
  tags: ['New'],
  technologies: ['Vue.js', 'Tailwind']
})
```

---

### 3. ProjectDetailView.vue
**Route**: `/projects/:id`

**Sections**:
1. **Breadcrumb Navigation**
2. **Hero Image** with tags
3. **Project Description**
4. **Key Features** (2-column grid)
5. **Technologies Used** (badge display)
6. **Screenshots Gallery** (4 images)
7. **Pricing Sidebar**:
   - Price display
   - Included features checklist
   - Purchase & Demo CTAs
   - Project stats

**Customization**:
```typescript
const project = ref({
  id: 1,
  title: 'Project Name',
  fullDescription: 'Long description...',
  price: 499,
  features: ['Feature 1', 'Feature 2', ...],
  technologies: ['Vue.js', 'Laravel', ...]
})
```

---

### 4. AboutView.vue
**Route**: `/about`

**Sections**:
1. **Hero Banner** with gradient
2. **Profile Card**:
   - Profile photo
   - Name & title
   - Bio
   - Social links (GitHub, LinkedIn, Twitter)

3. **Technical Expertise** (3 cards):
   - Frontend Development
   - Backend Development
   - Database & DevOps

4. **Project Timeline**:
   - Chronological project history
   - Technologies per project
   - Visual timeline design

5. **Statistics** (4 metrics):
   - Years Experience
   - Projects Completed
   - Happy Clients
   - Active Products

6. **CTA Section** (Work Together)

**Update Timeline**:
```typescript
const timeline = ref([
  {
    title: 'Project Name',
    date: '2024',
    description: 'What you built...',
    technologies: ['Vue.js', 'Laravel']
  }
])
```

---

### 5. ContactView.vue
**Route**: `/contact`

**Features**:
1. **Contact Form**:
   - Name (required)
   - Email (required)
   - Subject (optional)
   - Message (required)
   - Validation
   - Submit handler

2. **WhatsApp Quick Contact** (green card)
3. **Contact Information**:
   - Email
   - Phone
   - Location

4. **Social Links Grid**
5. **Availability Status** (with pulse animation)

**Form Handling**:
```typescript
const handleSubmit = () => {
  // Current: Alert message
  // TODO: Integrate with backend or EmailJS
  console.log('Form submitted:', form.value)
}
```

---

## 🎨 Design Tokens

### Colors (Tailwind Config)
```javascript
'devna-dark': '#0f172a',    // Primary dark
'devna-primary': '#2563eb',  // Primary blue
'devna-accent': '#38bdf8',   // Accent cyan
'devna-light': '#f8fafc',    // Background
```

### Typography Classes
```css
.text-gradient  // Gradient text effect
.gradient-primary  // Gradient background
```

### Common Patterns
```vue
<!-- Card with hover effect -->
<div class="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8">
  ...
</div>

<!-- Primary button -->
<button class="px-8 py-4 bg-devna-primary hover:bg-devna-primary/90 text-white rounded-full font-semibold shadow-lg transition-all duration-300 transform hover:scale-105">
  Button Text
</button>

<!-- Gradient section -->
<section class="bg-linear-to-br from-devna-dark to-slate-900 relative overflow-hidden">
  ...
</section>
```

---

## 🔧 Utility Functions

### Router Navigation
```typescript
import { useRouter } from 'vue-router'

const router = useRouter()
router.push('/projects/1')
```

### Scroll to Top
```typescript
// Automatic via router scrollBehavior in router/index.ts
scrollBehavior(to, from, savedPosition) {
  return { top: 0, behavior: 'smooth' }
}
```

---

## 📱 Responsive Design

### Breakpoints
- `sm:` - 640px
- `md:` - 768px
- `lg:` - 1024px
- `xl:` - 1280px

### Common Responsive Patterns
```vue
<!-- Grid responsive -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<!-- Text size responsive -->
<h1 class="text-4xl sm:text-5xl lg:text-6xl">

<!-- Padding responsive -->
<div class="px-4 sm:px-6 lg:px-8">

<!-- Hide on mobile -->
<div class="hidden md:flex">

<!-- Show only on mobile -->
<div class="md:hidden">
```

---

## 🚀 Performance Tips

1. **Lazy Load Routes**: Already implemented in `router/index.ts`
2. **Image Optimization**: Use WebP format, add loading="lazy"
3. **Code Splitting**: Vue Router handles this automatically
4. **Minimize Bundle**: Run `npm run build` to see bundle size

---

## 🐛 Common Issues & Solutions

### Issue: Tailwind classes not working
**Solution**: Make sure `main.css` imports are correct:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### Issue: Router not found
**Solution**: Check `main.ts` imports router and app.use(router)

### Issue: Components not showing
**Solution**: Verify component imports in App.vue and view files

---

## 📚 Additional Resources

- [Vue 3 Docs](https://vuejs.org/)
- [Tailwind CSS Docs](https://tailwindcss.com/)
- [TypeScript Docs](https://www.typescriptlang.org/)
- [Vite Docs](https://vitejs.dev/)

---

**Need help?** Check SETUP_GUIDE.md or contact support!
