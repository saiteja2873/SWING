# SWING @ IIIT Kottayam - Design Guidelines

## Design Approach
**System-Based Approach**: Professional academic research lab aesthetic with modern dark theme UI, inspired by university research group websites and technical documentation sites.

## Core Design Elements

### Color Palette
- **Primary**: Teal/blue gradient (#088f8f to #54b3d6) for headers, CTAs, and accents
- **Background**: Dark theme foundation (charcoal/near-black backgrounds)
- **Secondary**: White and gray tones for text and secondary elements
- **Accent**: Soft pastel colors for individual cards and highlights
- **Ensure strong contrast** for accessibility on dark backgrounds

### Typography
- **Font Families**: Modern sans-serif stack (Montserrat/Lato style or Tailwind default Inter/system fonts)
- **Hierarchy**:
  - H1 (Hero): Large, bold, 48-72px equivalent
  - H2 (Section Headers): Bold, 32-40px equivalent
  - H3 (Card Titles): Semi-bold, 24-28px equivalent
  - Body: Regular, 16-18px for readability
  - Small/Caption: 14px for meta information

### Layout System
- **Container**: `max-w-6xl mx-auto px-4` (or similar centered content wrapper)
- **Spacing**: Tailwind units of 4, 6, 8, 12, 16, 20, 24 for consistent rhythm
- **Sections**: Generous vertical padding (py-16 to py-24)
- **Cards**: Consistent padding (p-6 to p-8)
- **Grid Layouts**: 
  - Desktop: 3-column for team/research cards
  - Tablet: 2-column
  - Mobile: Single column stack

### Component Library

**Navbar**
- Sticky top navigation with dark background
- Dual logo placement (IIIT + SWING) on left
- Horizontal navigation links on desktop
- Hamburger menu for mobile with slide-down overlay
- Subtle border or shadow for separation

**Hero Section**
- Full-width with gradient background overlay
- Dual logos prominently displayed
- Project name as large heading
- Tagline below in lighter weight
- Two CTA buttons: "View Research Areas" (primary gradient) and "Contact Us" (secondary outline)
- Centered alignment

**Cards**
- Dark background with subtle border or shadow
- Rounded corners (8-12px radius)
- Icon/image at top (optional)
- Title in accent color or white
- Description in gray tones
- Hover effect: subtle lift and glow
- Badge/tag support for categories

**Section Headers**
- Icon + title combination
- Underline or accent bar beneath
- Optional subtitle in lighter color
- Centered or left-aligned based on context

**Timeline (Events)**
- Vertical timeline with connecting line
- Date badges on left
- Content cards on right
- Alternating spacing for visual interest
- Responsive collapse to simple list on mobile

**Gallery Grid**
- Masonry or uniform grid layout
- 3-4 columns desktop, 2 tablet, 1 mobile
- Hover overlay with event name/description
- Smooth zoom or fade transitions
- Lightbox capability suggested

**Stats Strip**
- Horizontal row of stat cards
- Large number + label format
- Gradient or accent backgrounds
- Icons for each metric
- Centered alignment

**Footer**
- Dark background (darker than main content)
- Three-column layout: Contact Info | Quick Links | Social Media
- Institution branding reinforcement
- Copyright and additional links

### Interactions & Animations
- **Hover States**: Subtle scale (1.02-1.05), shadow increase, or color shifts
- **Transitions**: 200-300ms ease-in-out for smoothness
- **Smooth Scrolling**: For anchor navigation between sections
- **Loading States**: Skeleton screens or subtle fade-ins for content
- **Minimal Animation**: Avoid excessive motion; focus on purpose-driven effects

### Responsive Behavior
- **Mobile-First**: Design from 320px up
- **Breakpoints**: sm (640px), md (768px), lg (1024px), xl (1280px)
- **Navigation**: Hamburger menu below lg breakpoint
- **Grids**: Stack to single column on mobile
- **Typography**: Reduce heading sizes 20-30% on mobile
- **Touch Targets**: Minimum 44x44px for buttons/links on mobile

### Images
- **Hero**: Placeholder for SWING/IIIT logos (side by side or stacked)
- **Team**: Individual faculty/member photos in circular frames
- **Gallery**: Event photos in grid (workshops, labs, activities)
- **Research Areas**: Icon illustrations or abstract tech imagery
- All images should have placeholders in `/public/images/` directories with clear naming

### Accessibility
- ARIA labels for navigation, buttons, and interactive elements
- Alt text for all images
- Semantic HTML (header, nav, main, section, footer)
- Keyboard navigation support
- Sufficient color contrast (minimum WCAG AA)
- Focus states clearly visible

### Data-Driven Architecture
- All content separated into typed TypeScript data files
- Components map over arrays, no hardcoded repetition
- Easy content updates without touching component code
- Centralized configuration for links, contact info, social media