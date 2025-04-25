# James Hardware B2B Shopify Storefront — Design Documentation (v0 Remake)

## 1. Theme and Layout Overview
### Design Philosophy
- Professional, clean, and modern B2B storefront
- Bronze/copper tones on neutral backgrounds for a refined look
- Clear information hierarchy, emphasizing product specs and technical details
- Focus on quote requests (no direct purchases)
- Fully responsive for desktop, tablet, and mobile

### Layout Structure
- **Header**: Fixed navigation with logo, search, account, and quote request
- **Sidebar**: Collapsible category navigation (desktop), hamburger menu (mobile)
- **Main Content**: Modular sections (hero, featured products, categories, about, articles)
- **Footer**: Four-column layout with company info, links, policies, and contact

### Responsive Design
- **Desktop (≥1200px)**: Full sidebar, 3–4 products per row
- **Tablet (768–1199px)**: Collapsible sidebar, 2–3 products per row
- **Mobile (<768px)**: Hamburger menu, 1–2 products per row, stacked layout
- Subtle micro-interactions and animations for feedback

## 2. Feature Specifications
### Homepage
- **Hero Section**: Full-width banner, headline, subheading, CTA, featured product grid
- **Featured Products**: 4-column grid (desktop), 2-column (mobile), product cards with images, titles, short description, "View Details" link, and "View All Products" button
- **Category Showcase**: 6 category cards with images, names, and hover effects
- **About Us**: Brief company description, "Learn More" button
- **Latest Articles**: 3-column blog grid, each with image, date, title, excerpt, "Read more" link, and "View All Articles" button

### Product Pages
- **Product Gallery**: Large main image, thumbnail gallery, lightbox zoom
- **Product Information**: Title, formatted description, variant selectors (styled as buttons), quantity input, "Request Quote" CTA, no pricing
- **Product Details Tabs**: "Details", "Specifications" (table), "Documents" (PDF downloads)
- **Product Sketch**: Technical drawing/sketch with caption
- **Related Products**: 4-column grid of related items

### Collection Pages
- **Collection Header**: Title and description
- **Product Grid**: 4-column (desktop), responsive, product cards with hover scaling
- **Empty State**: Friendly message and suggestions

### Quote Request Page
- **Quote Items List**: Products added for quote, each with image, title, variant, quantity, remove
- **Quote Request Form**: Name, company, email (required), phone, message, submit button, validation, success confirmation
- **Empty State**: Message and CTA to browse products

### Navigation
- **Main Navigation**: Logo, Home, Collections (dropdown), Blog, About Us, Contact, search bar, quote request button with badge
- **Mobile Navigation**: Hamburger toggle, slide-in drawer, close button, same structure as desktop
- **Sidebar**: Fixed (desktop), collapsible, categories, quote request, contact, subscribe

### Footer
- 4-column grid (desktop), stacked (mobile)
- Company info, quick links, policies, contact
- Bottom bar with copyright

### Search
- **Search Bar**: Input with icon, placeholder, submit on enter/click
- **Search Results**: Heading, subheading, product grid, empty state with suggestions

### Additional Features
- **Subscription Box**: Triggered via subscribe, name/email, marketing consent, submit, success/error, local storage
- **Blog**: Listing page, article cards; detail page with image, date, author, content, back link
- **Contact Form**: Name, company, email, phone, message, submit, success/error, sidebar with company info

## 3. Styling Guidelines
### Color Palette
| Purpose                     | Color Code  |
|-----------------------------|-------------|
| Primary (Bronze/Copper)     | #8B6B44    |
| Primary Foreground           | #F7F4EF    |
| Secondary                    | #E9E2D8    |
| Secondary Foreground         | #2A2520    |
| Background                   | #F7F4EF    |
| Foreground                   | #2A2520    |
| Muted                        | #E9E2D8    |
| Muted Foreground             | #6B635D    |
| Border/Input                 | #D2C8B0    |
| Ring                         | #8B6B44    |
| Destructive                  | #E11D48    |
| Success                      | #16A34A    |

### Typography
- **Headings**: Georgia, Cambria, "Times New Roman", Times, serif
- **Body**: Inter, system-ui, sans-serif
- **Font sizes**: 12px (xs) to 48px (5xl)
- **Weights**: 400 (regular), 500 (medium), 700 (bold)
- **Line heights**: 1.2 (tight), 1.5 (normal), 1.75 (relaxed)

### Imagery
- **Product**: 1:1 (800x800px+), thumbnails 200x200px
- **Collection**: 16:9 (1200x675px+)
- **Category**: 1:1 (600x600px+)
- **WebP preferred**, JPEG fallback, max 200KB (thumbnails), 500KB (main)
- White/transparent backgrounds for products

### Buttons
- **Primary**: Bronze background, off-white text, no border, rounded, hover darkens
- **Secondary**: Off-white background, bronze text, bronze border, hover light bronze
- **Ghost**: Transparent, current text color, hover with slight background
- **Icon**: Square, centered icon, sm/md/lg sizes

### Cards
- White background, light brown border, rounded, subtle hover shadow, 1rem padding

### Form Fields
- 2.5rem height, light brown border, rounded, focus ring in primary color

### Alerts
- Green/red/blue/yellow backgrounds and text for success/error/info/warning, rounded, padded

### Decorative Elements
- Subtle patterns, bronze lines/accents, used sparingly

## 4. Layout and Structure Details
### Homepage
- **Header**
- **Sidebar (desktop) / Hamburger (mobile)**
- **Hero Section**
- **Featured Products**
- **Category Showcase**
- **About Section**
- **Latest Articles**
- **Footer**

### Product Page
- **Header**
- **Sidebar**
- **Product Gallery & Info (split desktop, stacked mobile)**
- **Product Details Tabs**
- **Related Products**
- **Footer**

### Collection Page
- **Header**
- **Sidebar**
- **Collection Header**
- **Product Grid**
- **Pagination (if needed)**
- **Footer**

### Responsiveness
- **Mobile**: Sidebar becomes hamburger, grids reduce columns, full-width buttons
- **Tablet**: Collapsible sidebar, 2–3 columns
- **Desktop**: Full layout, 3–4 columns

## 5. Liquid Code Considerations
### Theme Structure
- **assets/**
- **config/**
- **layout/** (theme.liquid, password.liquid)
- **sections/** (header, footer, sidebar, hero, featured-products, etc.)
- **snippets/** (product-card, blog-card, category-card, subscription-box, etc.)
- **templates/** (index, product, collection, blog, article, page, cart, search, quote-request)

### Key Snippets & Sections
- **Product Card**: Image, title, short description, link
- **Navigation**: Main nav with dropdowns, active state
- **Quote Request Button**: Shows item count, animates on add
- **Featured Products Section**: Configurable via settings schema

### Custom JavaScript
- **theme.js**: Sidebar, subscription box, product gallery interactivity

## 6. Cursor Integration
### Step-by-step for Cursor
- Set up theme structure as outlined
- Generate base templates (theme.liquid, etc.)
- Build core components (header, footer, sidebar)
- Create page templates (index, product, collection, etc.)
- Add section files (hero, featured-products, etc.)
- Add snippets (product-card, etc.)
- Add styling (theme.scss.liquid with palette, typography, components)
- Add JavaScript (theme.js for sidebar, subscription, gallery)

### Tips
- Reference specific sections when prompting Cursor
- Build incrementally and review each step
- Use provided code snippets as guides
- Maintain naming and style consistency

## 7. Implementation Checklist
- Theme structure
- Base templates
- Header/navigation
- Footer
- Sidebar
- Homepage sections
- Product/collection page templates
- Blog templates
- Quote request functionality
- Subscription box
- Search
- Responsive styling
- Custom JS
- Theme settings
- Performance optimization
- Cross-browser/mobile testing

This document provides a comprehensive, English-language blueprint for developing the James Hardware B2B Shopify storefront using Liquid and Cursor, covering design philosophy, feature requirements, layout, styling, and code structure.
