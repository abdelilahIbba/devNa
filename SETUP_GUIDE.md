# DevNA Portfolio - Quick Start Guide

## ✨ Your portfolio is ready!

The development server is running at: **http://localhost:5174/**

## 📋 What's Included

### Pages Created:
1. **Home** (`/`) - Hero section, featured projects, features, CTA
2. **Projects** (`/projects`) - All projects with category filters
3. **Project Details** (`/projects/:id`) - Individual project showcase
4. **About** (`/about`) - Developer profile, skills, timeline
5. **Contact** (`/contact`) - Contact form with WhatsApp integration

### Components:
- `Navbar.vue` - Fixed navigation with mobile menu
- `Footer.vue` - Footer with links and social media
- `ProjectCard.vue` - Reusable project card component

## 🎨 Design Features

- **Modern 2026 SaaS UI** - Inspired by Linear, Vercel, Notion
- **Tailwind CSS** - Fully responsive, mobile-first
- **Smooth Animations** - Hover effects, transitions, scroll animations
- **Custom Colors**:
  - Primary: `#2563eb` (Blue)
  - Accent: `#38bdf8` (Light Blue)
  - Dark: `#0f172a` (Dark Navy)
  - Light: `#f8fafc` (Off White)

## 🚀 Next Steps

### 1. Customize Content

#### Update Projects
Edit `src/views/ProjectsView.vue` and `src/views/HomeView.vue` to add your real projects:

```typescript
const projects = ref([
  {
    id: 1,
    title: 'Your Project Name',
    description: 'Project description',
    image: 'https://your-image-url.com',
    category: 'Web Apps',
    tags: ['Featured'],
    technologies: ['Vue.js', 'Laravel', 'Tailwind']
  }
])
```

#### Update About Page
Edit `src/views/AboutView.vue`:
- Replace profile image
- Update developer name and bio
- Modify timeline events
- Update social media links

#### Update Contact Information
Edit `src/views/ContactView.vue` and `src/components/Footer.vue`:
- Replace WhatsApp number: Change `212XXXXXXXXX` to your number
- Update email: `contact@devna.it`
- Update phone number
- Update location

### 2. Add Your Logo

Replace the default logo in the navbar:
- Current: SVG icon in `src/components/Navbar.vue`
- Add your logo image to `src/assets/`
- Update the logo section in Navbar component

### 3. Configure Forms

The contact form currently shows an alert. To make it functional:

**Option A: Use EmailJS**
```bash
npm install @emailjs/browser
```

**Option B: Connect to your backend API**
Update `handleSubmit()` in `src/views/ContactView.vue`

### 4. Add Real Project Images

Replace placeholder images with your project screenshots:
- Store images in `src/assets/projects/`
- Or use external hosting (Cloudinary, AWS S3)
- Update image URLs in project data

### 5. SEO & Meta Tags

Add meta tags to `index.html`:
```html
<meta name="description" content="DevNA - Smart Web Apps For Business Growth">
<meta property="og:title" content="DevNA Portfolio">
<meta property="og:image" content="/preview.jpg">
```

### 6. Deploy

#### Build for Production:
```bash
npm run build
```

#### Deploy to Vercel:
```bash
npm install -g vercel
vercel
```

#### Deploy to Netlify:
1. Push to GitHub
2. Connect repo to Netlify
3. Build command: `npm run build`
4. Publish directory: `dist`

## 🛠️ Available Commands

```bash
npm run dev       # Start development server
npm run build     # Build for production
npm run preview   # Preview production build
npm run lint      # Run ESLint
```

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🎯 Key Features

✅ Modern SaaS-style design
✅ Fully responsive layout
✅ Smooth animations & transitions
✅ Category filtering on projects page
✅ WhatsApp integration
✅ Contact form
✅ SEO-friendly routing
✅ Dark mode ready structure
✅ TypeScript support
✅ Fast build with Vite

## 💡 Tips

1. **Images**: Use WebP format for better performance
2. **Fonts**: Inter is loaded from Google Fonts
3. **Colors**: All brand colors defined in `tailwind.config.js`
4. **Icons**: Using Heroicons (inline SVG)
5. **Animations**: CSS transitions + Tailwind utilities

## 📞 Support

For questions or customization help:
- Email: contact@devna.it
- Website: devna.it.com

---

**Built with ❤️ using Vue.js, TypeScript, and Tailwind CSS**

Enjoy your new portfolio! 🎉
