# Conference Website - Complete Design Specification

## Design Philosophy

Create a **professional, energetic, and information-rich** conference website that balances academic credibility with modern event excitement. The design should feel contemporary, organized, and dynamic—guiding attendees from discovery through registration with clear hierarchy and compelling CTAs.

**Core Aesthetic**: Modern conference platform with bold typography, strong color blocks, organized information architecture, and strategic use of photography. Think professional event platform meets modern SaaS clarity.

---

## Typography System

### Font Families
- **Headings/Display**: `'Poppins', 'Raleway', sans-serif` - Bold, confident, professional
- **Body Text**: `'Inter', 'Open Sans', sans-serif` - Clean, highly readable
- **Accent/Numbers**: `'Space Grotesk', 'DM Sans', sans-serif` - Modern, geometric for stats

### Type Scale
```css
--text-xs: 0.75rem;      /* 12px */
--text-sm: 0.875rem;     /* 14px */
--text-base: 1rem;       /* 16px */
--text-lg: 1.125rem;     /* 18px */
--text-xl: 1.25rem;      /* 20px */
--text-2xl: 1.5rem;      /* 24px */
--text-3xl: 1.875rem;    /* 30px */
--text-4xl: 2.25rem;     /* 36px */
--text-5xl: 3rem;        /* 48px */
--text-6xl: 3.75rem;     /* 60px */
--text-7xl: 4.5rem;      /* 72px */
```

### Font Weights
- Regular: 400
- Medium: 500
- Semibold: 600
- Bold: 700
- Extrabold: 800

---

## Color Palette

### Primary Colors
```css
--primary-blue: #4169E1;      /* Royal blue - primary brand */
--primary-dark: #1E3A8A;      /* Dark blue for depth */
--primary-light: #60A5FA;     /* Light blue for accents */
```

### Secondary/Accent Colors
```css
--accent-teal: #14B8A6;       /* Vibrant teal */
--accent-magenta: #E91E63;    /* Magenta/pink for highlights */
--accent-orange: #F97316;     /* Warm orange for CTAs */
--accent-gold: #FBB03B;       /* Gold for featured elements */
```

### Neutral Colors
```css
--white: #FFFFFF;
--gray-50: #F9FAFB;
--gray-100: #F3F4F6;
--gray-200: #E5E7EB;
--gray-300: #D1D5DB;
--gray-400: #9CA3AF;
--gray-500: #6B7280;
--gray-600: #4B5563;
--gray-700: #374151;
--gray-800: #1F2937;
--gray-900: #111827;
--gray-950: #030712;
```

### Semantic Colors
```css
--success: #10B981;
--warning: #F59E0B;
--error: #EF4444;
--info: #3B82F6;
```

---

## Spacing System

Use a consistent 8px base scale:

```css
--space-1: 0.25rem;   /* 4px */
--space-2: 0.5rem;    /* 8px */
--space-3: 0.75rem;   /* 12px */
--space-4: 1rem;      /* 16px */
--space-5: 1.25rem;   /* 20px */
--space-6: 1.5rem;    /* 24px */
--space-8: 2rem;      /* 32px */
--space-10: 2.5rem;   /* 40px */
--space-12: 3rem;     /* 48px */
--space-16: 4rem;     /* 64px */
--space-20: 5rem;     /* 80px */
--space-24: 6rem;     /* 96px */
--space-32: 8rem;     /* 128px */
```

---

## Layout Structure

### Container Sizes
```css
--container-sm: 640px;
--container-md: 768px;
--container-lg: 1024px;
--container-xl: 1280px;
--container-2xl: 1440px;
--container-full: 1600px;
```

### Grid System
- **Desktop**: 12-column grid with 24px gutters
- **Tablet**: 8-column grid with 20px gutters
- **Mobile**: 4-column grid with 16px gutters

### Breakpoints
```css
--breakpoint-sm: 640px;
--breakpoint-md: 768px;
--breakpoint-lg: 1024px;
--breakpoint-xl: 1280px;
--breakpoint-2xl: 1536px;
```

---

## Component Specifications

### 1. Navigation Bar

**Style**: Clean, professional navigation with strong hierarchy

```
Structure:
- Height: 72px (desktop), 64px (mobile)
- Background: White with subtle shadow (or transparent with blur on scroll)
- Position: Fixed top, transforms to white bg after scroll
- Max-width: 1440px, centered
- Border-bottom: 1px solid gray-200 (on scroll)

Logo:
- Size: 180px width (desktop), 140px (mobile)
- Position: Left-aligned, 24px from edge
- Include conference year/theme if applicable

Navigation Items:
- Font: 'Poppins', 600 weight, 15px
- Color: var(--gray-700)
- Hover: var(--primary-blue) with smooth transition
- Spacing: 32px between items
- Active indicator: 3px bottom border or background pill

Primary CTA ("Register Now"):
- Style: Solid var(--accent-orange) background
- Padding: 12px 32px
- Border-radius: 8px
- Font: 700 weight, 15px
- Hover: Transform scale(1.05) + darker shade
- Box-shadow: 0 4px 12px rgba(249, 115, 22, 0.3)

Secondary CTA ("Submit Abstract"):
- Style: Outlined button
- Border: 2px solid var(--primary-blue)
- Color: var(--primary-blue)
- Padding: 10px 28px
- Border-radius: 8px
- Hover: Filled with primary-blue
```

### 2. Hero Section

**Style**: Bold, image-based hero with strong typographic statement

```
Container:
- Height: 85vh (min 600px, max 800px)
- Background: Large conference photo with gradient overlay
- Overlay: Linear gradient from rgba(30, 58, 138, 0.85) to rgba(65, 105, 225, 0.7)
- Or: Split layout - 50% color block / 50% image

Content Positioning:
- Max-width: 900px
- Left-aligned with generous left padding (80px desktop)
- Vertically centered
- Padding: 40px on mobile

Conference Logo/Badge:
- Conference theme logo/icon
- Size: 80px
- Positioned above headline
- Margin-bottom: 24px

Headline (Conference Name):
- Font: 'Poppins', 800 weight
- Size: 68px (desktop), 42px (mobile)
- Color: white
- Line-height: 1.1
- Letter-spacing: -0.03em
- Text-shadow: 0 4px 24px rgba(0, 0, 0, 0.4)

Theme/Tagline:
- Font: 'Poppins', 500 weight
- Size: 28px (desktop), 20px (mobile)
- Color: rgba(255, 255, 255, 0.95)
- Line-height: 1.4
- Margin-top: 16px
- Max-width: 700px

Key Details Row:
- Display: flex, gap 32px
- Margin-top: 32px

Detail Item (Date, Location, Format):
- Icon + Text
- Font: 'Inter', 600 weight, 16px
- Color: white
- Icon size: 20px
- Background: rgba(255, 255, 255, 0.15)
- Padding: 10px 20px
- Border-radius: 8px
- Backdrop-filter: blur(10px)

CTA Buttons:
- Two buttons: "Register Now" + "View Agenda"
- Primary: Orange background (accent-orange)
- Secondary: White background with blue text
- Size: 18px font, 56px height, 40px horizontal padding
- Border-radius: 12px
- Gap: 20px
- Margin-top: 40px
- Box-shadow on primary: 0 8px 24px rgba(249, 115, 22, 0.4)

Countdown Timer (optional):
- Position: Below CTAs or top right corner
- Style: Digital countdown boxes
- Background: rgba(255, 255, 255, 0.2)
- Backdrop blur
- Large numbers with small labels
```

### 3. Key Stats Section

**Style**: Bold statistics banner with color blocks

```
Layout:
- Background: var(--gray-50) or white
- Padding: 80px vertical, 80px horizontal
- Display: Grid 4 columns (desktop), 2 columns (tablet), 1 column (mobile)
- Gap: 40px

Section Heading (Optional):
- "What is [Conference Name]?" or "By The Numbers"
- Centered
- Font: 'Poppins', 700 weight, 36px
- Color: var(--gray-900)
- Margin-bottom: 48px

Stat Card:
- Text-align: center
- Padding: 40px 32px
- Background: white
- Border-radius: 16px
- Box-shadow: 0 2px 16px rgba(0, 0, 0, 0.06)
- Transition: transform 0.3s
- Hover: translateY(-8px) + stronger shadow

Stat Number:
- Font: 'Space Grotesk', 800 weight
- Size: 56px (desktop), 48px (mobile)
- Color: var(--primary-blue) or var(--accent-teal)
- Line-height: 1
- Counter animation on scroll

Stat Label:
- Font: 'Inter', 600 weight, 18px
- Color: var(--gray-600)
- Margin-top: 12px
- Text-transform: uppercase
- Letter-spacing: 0.05em

Examples:
- "130+ Abstracts Submitted"
- "250 Expected Attendees"
- "2 Days of Learning"
- "25+ Expert Speakers"
```

### 4. About Conference Section

**Style**: Text-rich section with side image or icon grid

```
Layout:
- Two columns: 55% text / 45% visual (desktop)
- Single column on mobile
- Padding: 100px vertical, 80px horizontal
- Background: var(--white)

Text Column:

Eyebrow:
- "About The Conference"
- Font: 'Poppins', 700 weight, 14px
- Color: var(--primary-blue)
- Text-transform: uppercase
- Letter-spacing: 0.12em
- Margin-bottom: 16px

Heading:
- Font: 'Poppins', 700 weight, 44px (desktop), 32px (mobile)
- Color: var(--gray-900)
- Line-height: 1.2
- Margin-bottom: 24px

Body Text:
- Font: 'Inter', 400 weight, 18px
- Color: var(--gray-600)
- Line-height: 1.7
- Max-width: 650px
- Paragraphs: 20px margin between

Key Points List (Optional):
- Bullet points or checkmarks
- Font: 'Inter', 500 weight, 17px
- Icon: Checkmark circle in primary-blue
- Line-height: 1.8

CTA Button:
- "Learn More" or "Download Brochure"
- Style: Outlined button
- Margin-top: 32px

Visual Column:
- Conference photo or
- Icon grid showing conference tracks/themes
- Border-radius: 20px
- Box-shadow: 0 20px 60px rgba(0, 0, 0, 0.12)
```

### 5. Who Attends / Audience Section

**Style**: Demographics visualization with charts and icons

```
Container:
- Background: var(--primary-dark) with subtle pattern
- Color: white
- Padding: 100px vertical, 80px horizontal

Section Header:
- Centered
- Heading: 'Poppins', 700 weight, 40px, white
- Subheading: 'Inter', 18px, rgba(255,255,255,0.8)
- Margin-bottom: 64px

Content Layout:
- Mix of:
  1. Icon + text grid (attendee types)
  2. Pie/donut charts (demographics)
  3. List of roles/industries

Attendee Type Cards:
- Display: Grid 4 columns (desktop)
- Background: rgba(255, 255, 255, 0.1)
- Border: 1px solid rgba(255, 255, 255, 0.2)
- Border-radius: 16px
- Padding: 32px 24px
- Text-align: center
- Backdrop-filter: blur(10px)

Icon:
- Size: 48px
- Color: var(--accent-teal) or var(--accent-gold)
- Margin-bottom: 16px

Label:
- Font: 'Poppins', 600 weight, 18px
- Color: white

Description:
- Font: 'Inter', 14px
- Color: rgba(255, 255, 255, 0.8)
- Margin-top: 8px

Charts Section:
- Display: Flex, 2-3 charts side by side
- Charts: CSS-based pie charts or SVG
- Legends with percentages
- Clean, minimal design
```

### 6. Conference Tracks / Themes Section

**Style**: Color-coded cards with icons

```
Container:
- Background: var(--gray-50)
- Padding: 100px vertical, 80px horizontal

Section Header:
- Centered
- Eyebrow: "Conference Tracks" 
- Heading: 'Poppins', 700 weight, 42px
- Subheading: Description of tracks
- Margin-bottom: 64px

Tracks Grid:
- Display: Grid 3 columns (desktop), 2 (tablet), 1 (mobile)
- Gap: 28px

Track Card:
- Background: white
- Border-radius: 20px
- Padding: 40px
- Border-left: 6px solid [track color]
- Box-shadow: 0 4px 24px rgba(0, 0, 0, 0.08)
- Transition: transform 0.3s
- Hover: translateY(-12px) + stronger shadow

Each track gets unique accent color:
- Track 1: var(--primary-blue)
- Track 2: var(--accent-teal)
- Track 3: var(--accent-magenta)
- Track 4: var(--accent-orange)
- Track 5: var(--accent-gold)
- Track 6: var(--primary-dark)

Track Icon:
- Size: 56px
- Background: [track color] with 0.1 opacity
- Border-radius: 14px
- Padding: 14px
- Margin-bottom: 24px

Track Title:
- Font: 'Poppins', 700 weight, 22px
- Color: var(--gray-900)
- Margin-bottom: 12px

Track Description:
- Font: 'Inter', 16px
- Color: var(--gray-600)
- Line-height: 1.6

Topics List (Optional):
- Bulleted or arrow list
- Font: 'Inter', 15px
- Color: var(--gray-500)
- Margin-top: 16px
- 4-5 bullet points max
```

### 7. Speakers Section

**Style**: Professional photo grid with hover details

```
Container:
- Background: white
- Padding: 100px vertical, 80px horizontal

Section Header:
- Centered
- Eyebrow: "Featured Speakers" or "Keynote Speakers"
- Heading: 'Poppins', 700 weight, 42px
- CTA link: "View All Speakers →" (top right)
- Margin-bottom: 64px

Keynote Speakers (If Applicable):
- Larger cards, 3 across
- More prominent treatment

Speaker Card:
- Aspect-ratio: 3/4 for photo
- Border-radius: 16px
- Overflow: hidden
- Background: white
- Box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08)
- Transition: transform 0.4s

Speaker Photo:
- Object-fit: cover
- Grayscale: 20% (normal state)
- Filter: None on hover
- Transition: filter 0.3s, transform 0.6s
- Hover: scale(1.05)

Speaker Info Overlay/Below:
Option A - Overlay on hover:
- Position: Absolute bottom
- Background: Linear gradient from transparent to rgba(0,0,0,0.9)
- Padding: 24px
- Transform: translateY(100%) normally, translateY(0) on hover

Option B - Below photo:
- Padding: 24px
- Background: white

Speaker Name:
- Font: 'Poppins', 600 weight, 20px
- Color: white (overlay) or gray-900 (below)
- Margin-bottom: 6px

Speaker Title/Role:
- Font: 'Inter', 500 weight, 15px
- Color: rgba(255,255,255,0.9) or gray-600
- Line-height: 1.4

Speaker Organization:
- Font: 'Inter', 14px
- Color: rgba(255,255,255,0.7) or gray-500
- Margin-top: 4px

Social Links (Optional):
- LinkedIn, Twitter icons
- Size: 18px
- Margin-top: 12px
- Hover: var(--primary-blue)

Grid Layout:
- Keynotes: 3 columns
- Regular speakers: 4 columns (desktop), 2-3 (tablet), 1-2 (mobile)
- Gap: 32px
```

### 8. Agenda / Schedule Section

**Style**: Timeline-based or tabbed day view

```
Container:
- Background: var(--gray-50)
- Padding: 100px vertical, 80px horizontal

Section Header:
- Centered
- Heading: 'Poppins', 700 weight, 42px
- Subheading: Conference dates
- Margin-bottom: 48px

Day Tabs (if multi-day):
- Display: flex, centered
- Background: white
- Border-radius: 16px
- Padding: 8px
- Box-shadow: 0 2px 12px rgba(0,0,0,0.06)
- Margin-bottom: 48px

Tab Button:
- Padding: 16px 40px
- Border-radius: 12px
- Font: 'Poppins', 600 weight, 16px
- Color: var(--gray-600)
- Active: var(--primary-blue) background, white text
- Transition: all 0.3s

Schedule Timeline:
- Max-width: 1000px
- Centered

Session Block:
- Display: flex
- Background: white
- Border-radius: 16px
- Padding: 32px
- Margin-bottom: 20px
- Box-shadow: 0 2px 16px rgba(0,0,0,0.06)
- Border-left: 4px solid [track color]

Time Badge:
- Width: 140px
- Font: 'Space Grotesk', 700 weight, 20px
- Color: var(--primary-blue)
- Background: rgba(65, 105, 225, 0.1)
- Border-radius: 12px
- Padding: 16px 20px
- Text-align: center
- Flex-shrink: 0

Session Info:
- Flex: 1
- Margin-left: 32px

Session Title:
- Font: 'Poppins', 600 weight, 20px
- Color: var(--gray-900)
- Margin-bottom: 8px

Session Details:
- Font: 'Inter', 16px
- Color: var(--gray-600)
- Line-height: 1.6
- Margin-bottom: 12px

Session Meta:
- Display: flex, gap 24px
- Font: 'Inter', 14px
- Color: var(--gray-500)

Meta Item:
- Icon + text
- Speaker name, room, track

CTA Button:
- "Download Full Agenda"
- Centered below timeline
- Style: Outlined button
- Margin-top: 48px
```

### 9. Registration / Pricing Section

**Style**: Clean pricing cards with feature comparison

```
Container:
- Background: white
- Padding: 100px vertical, 80px horizontal

Section Header:
- Centered
- Heading: 'Poppins', 700 weight, 42px
- Subheading: Registration information
- Margin-bottom: 64px

Pricing Cards Grid:
- Display: Grid 3 columns (desktop), 1 column (mobile)
- Gap: 32px
- Max-width: 1200px
- Centered

Pricing Card:
- Background: white
- Border: 2px solid var(--gray-200)
- Border-radius: 24px
- Padding: 48px 40px
- Text-align: center
- Position: relative
- Transition: transform 0.3s, border 0.3s

Featured Card:
- Border: 2px solid var(--primary-blue)
- Transform: scale(1.05)
- Box-shadow: 0 12px 48px rgba(65, 105, 225, 0.2)
- Popular badge at top

Badge (if featured):
- Position: absolute top -16px
- Background: var(--primary-blue)
- Color: white
- Padding: 8px 24px
- Border-radius: 20px
- Font: 'Poppins', 600 weight, 13px
- Text-transform: uppercase

Ticket Type:
- Font: 'Poppins', 700 weight, 24px
- Color: var(--gray-900)
- Margin-bottom: 12px

Price:
- Font: 'Space Grotesk', 800 weight, 56px
- Color: var(--primary-blue)
- Line-height: 1
- Margin-bottom: 8px

Price Suffix:
- Font: 'Inter', 16px
- Color: var(--gray-500)

Description:
- Font: 'Inter', 16px
- Color: var(--gray-600)
- Margin: 24px 0
- Min-height: 60px

Features List:
- Text-align: left
- Margin: 32px 0

Feature Item:
- Display: flex, align-items: center
- Font: 'Inter', 15px
- Color: var(--gray-700)
- Margin-bottom: 16px
- Icon: Checkmark in var(--success)
- Icon size: 20px
- Gap: 12px

CTA Button:
- Full width
- Height: 52px
- Font: 'Poppins', 600 weight, 16px
- Border-radius: 12px
- Margin-top: 32px

Featured card button:
- Background: var(--primary-blue)
- Color: white
- Box-shadow: 0 4px 16px rgba(65, 105, 225, 0.3)

Regular card button:
- Background: transparent
- Border: 2px solid var(--gray-300)
- Color: var(--gray-900)
- Hover: border-color primary-blue

Examples:
- Early Bird
- Regular
- Group / Student
- Virtual Access
```

### 10. Announcements Section

**Style**: Featured content cards with imagery

```
Container:
- Background: var(--gray-50)
- Padding: 100px vertical, 80px horizontal

Section Header:
- Script/cursive font for "Announcements" (like DM Serif Display)
- Or: Standard heading with decorative element
- Centered
- Margin-bottom: 64px

Announcement Cards:
- Display: Grid 2 columns (desktop), 1 column (mobile)
- Gap: 32px

Featured Announcement (First):
- Larger, spanning full width or 60% width
- Height: 400px (desktop)

Regular Announcement:
- Height: 320px

Card Structure:
- Background: white
- Border-radius: 20px
- Overflow: hidden
- Display: flex (horizontal on desktop)
- Box-shadow: 0 4px 24px rgba(0, 0, 0, 0.08)
- Transition: transform 0.3s
- Hover: translateY(-8px)

Image Section:
- Width: 45% (desktop)
- Object-fit: cover
- Position: relative

Image Overlay (optional):
- Gradient overlay for text legibility
- Or: Keep image clean

Content Section:
- Width: 55%
- Padding: 40px
- Display: flex, flex-direction: column

Date Badge:
- Font: 'Inter', 600 weight, 13px
- Color: var(--primary-blue)
- Background: rgba(65, 105, 225, 0.1)
- Padding: 6px 14px
- Border-radius: 6px
- Text-transform: uppercase
- Width: fit-content

Title:
- Font: 'Poppins', 700 weight, 24px (featured), 20px (regular)
- Color: var(--gray-900)
- Margin: 16px 0 12px
- Line-height: 1.3

Excerpt:
- Font: 'Inter', 16px
- Color: var(--gray-600)
- Line-height: 1.6
- Margin-bottom: auto

Read More Link:
- Font: 'Poppins', 600 weight, 15px
- Color: var(--primary-blue)
- Display: inline-flex with arrow icon
- Margin-top: 16px
- Hover: translateX(4px) transition
```

### 11. Sponsors / Partners Section

**Style**: Logo grid with tiers

```
Container:
- Background: white
- Padding: 100px vertical, 80px horizontal

Section Header:
- Centered
- Heading: 'Poppins', 700 weight, 42px
- Subheading: "Become a Sponsor" link
- Margin-bottom: 64px

Sponsor Tiers:
- Organize by levels (Platinum, Gold, Silver, Bronze, Partners)
- Each tier has heading

Tier Heading:
- Font: 'Poppins', 600 weight, 24px
- Color: var(--gray-700)
- Text-align: center
- Margin-bottom: 32px
- Optional: Color coding per tier

Logo Grid:
- Display: Grid auto-fit
- Gap: 40px
- Justify-items: center
- Align-items: center

Platinum: 3-4 across, larger logos (max 280px)
Gold: 4-5 across, medium logos (max 220px)
Silver/Bronze: 5-6 across, smaller logos (max 180px)
Partners: 6-7 across, smallest logos (max 150px)

Logo Container:
- Background: white
- Padding: 24px
- Border-radius: 12px
- Border: 1px solid var(--gray-200)
- Transition: transform 0.3s, box-shadow 0.3s
- Hover: translateY(-4px) + shadow

Logo Image:
- Max-width: [tier max size]
- Max-height: 80px
- Object-fit: contain
- Filter: grayscale(100%)
- Hover: grayscale(0%)
- Transition: filter 0.3s

Sponsor CTA:
- Centered below all tiers
- Button: "Become a Sponsor"
- Style: Outlined with primary-blue
- Margin-top: 64px
```

### 12. Call to Action Section

**Style**: Bold, full-width CTA banner

```
Container:
- Background: var(--primary-blue) or gradient
- Padding: 80px vertical, 80px horizontal
- Text-align: center
- Position: relative
- Overflow: hidden

Background Effect:
- Optional: Subtle pattern, geometric shapes
- Or: Background image with overlay

Content:
- Max-width: 800px
- Centered
- Z-index: 1

Heading:
- Font: 'Poppins', 700 weight, 48px (desktop), 32px (mobile)
- Color: white
- Line-height: 1.2
- Margin-bottom: 20px

Subheading:
- Font: 'Inter', 18px
- Color: rgba(255, 255, 255, 0.9)
- Max-width: 600px
- Margin: 0 auto 40px

CTA Buttons:
- Two buttons side by side
- Primary: "Register Now" - white background, primary-blue text
- Secondary: "Submit Abstract" - outlined white

Button styling:
- Height: 56px
- Padding: 0 48px
- Font: 'Poppins', 600 weight, 17px
- Border-radius: 12px
- Gap: 20px
- Box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15)
```

### 13. Venue & Location Section

**Style**: Map integration with venue details

```
Container:
- Background: var(--gray-50)
- Padding: 100px vertical, 80px horizontal

Layout:
- Two columns: 50% map / 50% details (desktop)
- Single column on mobile

Map Section:
- Embedded Google Maps iframe
- Border-radius: 20px
- Height: 500px
- Box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12)

Venue Details Section:
- Padding-left: 60px (desktop)

Eyebrow:
- "Venue"
- Font: 'Poppins', 700 weight, 14px
- Color: var(--primary-blue)
- Text-transform: uppercase
- Letter-spacing: 0.12em

Venue Name:
- Font: 'Poppins', 700 weight, 36px
- Color: var(--gray-900)
- Margin: 12px 0 20px

Address:
- Font: 'Inter', 18px
- Color: var(--gray-600)
- Line-height: 1.6
- Margin-bottom: 32px

Quick Info Cards:
- Background: white
- Padding: 20px
- Border-radius: 12px
- Border-left: 4px solid var(--primary-blue)
- Margin-bottom: 16px

Info Card Icon:
- Size: 24px
- Color: var(--primary-blue)
- Float left or inline

Info Card Text:
- Font: 'Inter', 16px
- Color: var(--gray-700)

Items:
- Accommodation options
- Transportation/Parking
- Nearby airports
- Getting around

CTA Button:
- "Get Directions"
- Style: Outlined
- Icon: Map pin or external link
- Margin-top: 32px

Accommodation Note:
- Font: 'Inter', 15px, italic
- Color: var(--gray-500)
- Margin-top: 24px
- "Information about conference hotels and transportation - To Be Announced"
```

### 14. Stay Updated / Newsletter Section

**Style**: Simple, focused email capture

```
Container:
- Background: white
- Padding: 80px vertical, 80px horizontal
- Text-align: center
- Border-top: 1px solid var(--gray-200)

Heading:
- Font: 'Poppins', 700 weight, 36px
- Color: var(--gray-900)
- Margin-bottom: 16px

Subheading:
- Font: 'Inter', 18px
- Color: var(--gray-600)
- Max-width: 600px
- Margin: 0 auto 40px

Email Form:
- Max-width: 540px
- Margin: 0 auto
- Display: flex (desktop), stack (mobile)
- Gap: 12px

Email Input:
- Flex: 1
- Height: 54px
- Padding: 0 24px
- Font: 'Inter', 16px
- Border: 2px solid var(--gray-300)
- Border-radius: 10px
- Background: var(--gray-50)
- Focus: border-color primary-blue, background white

Submit Button:
- Height: 54px
- Padding: 0 40px
- Font: 'Poppins', 600 weight, 16px
- Background: var(--primary-blue)
- Color: white
- Border-radius: 10px
- Border: none
- Cursor: pointer
- Transition: background 0.3s
- Hover: darker primary-blue

Privacy Note:
- Font: 'Inter', 13px
- Color: var(--gray-500)
- Margin-top: 16px
```

### 15. Footer

**Style**: Comprehensive footer with organized sections

```
Structure:
- Background: var(--gray-900)
- Color: white
- Padding: 80px horizontal, 64px top, 32px bottom

Layout:
- 4 columns (desktop), 2 columns (tablet), 1 column (mobile)
- Gap: 48px

Conference Logo/Branding:
- First column
- Logo (white version)
- Tagline
- Margin-bottom: 24px

Column Headings:
- Font: 'Poppins', 600 weight, 18px
- Color: white
- Margin-bottom: 20px
- Text-transform: uppercase
- Letter-spacing: 0.05em

Links:
- Font: 'Inter', 16px
- Color: rgba(255, 255, 255, 0.7)
- Line-height: 2.2
- Hover: white
- Transition: color 0.2s

Column Content:

Quick Links:
- Home, About, Agenda
- Speakers, Registration
- Venue, FAQs

Important Info:
- Call for Papers
- Accommodation
- Sponsorship
- Contact

Contact:
- Email (clickable)
- Phone (clickable)
- Address
- Icons with text

Social Media:
- Size: 44px
- Background: rgba(255, 255, 255, 0.1)
- Border-radius: 10px
- Color: white
- Display: inline-flex, gap 12px
- Hover: var(--primary-blue) background
- Transition: background 0.3s

Bottom Bar:
- Border-top: 1px solid rgba(255, 255, 255, 0.1)
- Padding-top: 32px
- Margin-top: 64px
- Display: flex, justify-between
- Font: 'Inter', 14px
- Color: rgba(255, 255, 255, 0.5)

Bottom Bar Left:
- Copyright notice
- Conference name & year

Bottom Bar Right:
- Privacy Policy link
- Terms & Conditions link
- Separator: |
```

---

## Animation & Transitions

### Page Load Animations
```css
/* Hero fade in */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Counter animation for stats */
@keyframes countUp {
  from { opacity: 0; }
  to { opacity: 1; }
}

/* Section reveal on scroll */
.fade-in-section {
  opacity: 0;
  transform: translateY(40px);
  transition: opacity 0.8s ease, transform 0.8s ease;
}

.fade-in-section.is-visible {
  opacity: 1;
  transform: translateY(0);
}
```

### Micro-interactions
```css
/* Button hover */
transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

/* Card lift */
transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);

/* Color transitions */
transition: color 0.2s ease-in-out, background-color 0.2s ease-in-out;
```

### Scroll Animations
- Stats counters: Trigger on viewport intersection
- Cards: Staggered fade-in (0.1s delay between)
- Images: Parallax effect (optional, subtle)
- Sections: Fade up on scroll into view

### Hover States
- Buttons: Lift + shadow enhancement + scale(1.05)
- Cards: Lift (translateY(-12px)) + stronger shadow
- Images: Scale(1.05) + filter adjustments
- Links: Color change + underline slide-in
- Logos: Grayscale to color

---

## Responsive Behavior

### Desktop (1280px+)
- Full multi-column layouts
- Large typography
- All animations enabled
- Side-by-side content sections

### Tablet (768px - 1279px)
- Reduced columns (3 → 2, 4 → 3)
- Slightly smaller typography
- Maintained spacing
- Hamburger menu optional

### Mobile (< 768px)
- Single column stacking
- Compressed typography (but still readable)
- Hamburger navigation required
- Reduced padding (24px sides)
- Hero height: 70vh minimum
- Cards: Full width
- Touch-friendly tap targets (min 44px)
- Statistics: 2 across or stacked
- Agenda: Simplified timeline view

---

## Image Guidelines

### Hero Images
- Dimensions: 1920x1080px minimum
- Format: WebP with JPG fallback
- Compression: 80% quality
- Content: Conference venue, past attendees, keynote moments
- Overlay: Always use gradient for text legibility

### Speaker Photos
- Dimensions: 600x800px (3:4 ratio)
- Format: WebP with JPG fallback
- Background: Professional, preferably neutral
- Lighting: Even, professional
- Style: Consistent across all speakers

### Section Images
- Various aspect ratios: 16:9, 4:3, 1:1
- Format: WebP with JPG fallback
- Lazy loading: Enabled for below-fold
- Alt text: Descriptive

### Icons
- Style: Line icons or solid, consistent style
- Library: Lucide Icons, Heroicons, or Feather Icons
- Size: 24px standard, 48-56px for features
- Color: Match brand colors

---

## Accessibility Requirements

### Color Contrast
- Body text: Minimum 4.5:1 contrast
- Large text: Minimum 3:1 contrast
- Interactive elements: Minimum 3:1 contrast
- Test all color combinations

### Keyboard Navigation
- All interactive elements keyboard accessible
- Visible focus states (3px outline, primary-blue)
- Logical tab order
- Skip to main content link

### Screen Readers
- Semantic HTML5 (header, nav, main, section, article, footer)
- Proper heading hierarchy (h1 → h2 → h3, no skips)
- Alt text for all images
- ARIA labels where needed
- Form labels associated with inputs

### Motion
- Respect prefers-reduced-motion
- Provide controls for auto-playing content
- Animations enhance, not hinder

---

## Technical Implementation

### Performance
- Minimize JavaScript dependencies
- CSS animations over JS
- Lazy load images
- Optimize images (WebP, proper sizing)
- Use CSS Grid and Flexbox
- Defer non-critical JS
- Minify CSS/JS

### SEO
- Semantic HTML markup
- Meta titles and descriptions
- Open Graph tags
- Schema.org markup for events
- Sitemap.xml
- robots.txt

### Browser Support
- Modern browsers (Chrome, Firefox, Safari, Edge)
- IE11 graceful degradation (if required)
- iOS Safari and Android Chrome testing

### Fonts
Load from Google Fonts:
```html
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@700;800&display=swap" rel="stylesheet">
```

---

## Content Sections (In Order)

1. **Navigation Bar** (sticky)
2. **Hero Section** (conference intro, key details, countdown)
3. **Key Stats** (numbers that matter)
4. **About Conference** (overview, mission, theme)
5. **Who Attends** (audience demographics)
6. **Conference Tracks** (theme areas)
7. **Keynote Speakers** (featured speakers)
8. **Speakers** (all speakers grid)
9. **Agenda** (schedule timeline)
10. **Registration/Pricing** (ticket types)
11. **Announcements** (news, updates, special info)
12. **Abstract Submission Info** (if accepting papers)
    - Status: "130 abstracts received, reviewed and accepted"
    - "More have been received, awaiting review"
13. **Venue & Location** (map, hotel info TBA)
14. **Sponsors/Partners** (sponsor logos)
15. **Call to Action** (bold registration push)
16. **Newsletter Signup** (stay updated)
17. **Footer** (comprehensive links)

---

## Special Features

### Abstract Submission Status
Create a dedicated section or banner:
```
Container:
- Background: var(--accent-teal) or gradient
- Padding: 60px
- Text-align: center

Icon:
- Document/paper icon
- Size: 64px
- Color: white
- Margin-bottom: 20px

Heading:
- "Call for Papers - Status Update"
- Font: 'Poppins', 700 weight, 32px
- Color: white

Stats:
- Display: Flex, justify-center, gap 48px
- Margin: 32px 0

Stat Item:
- Number: 130+ (large, bold)
- Label: "Abstracts Accepted"
- Color: white

Status Text:
- "More abstracts have been received and are currently under review"
- Font: 'Inter', 18px
- Color: rgba(255,255,255,0.95)
- Margin-bottom: 32px

CTA:
- "Submit Your Abstract"
- White button with teal text
- Or: Outlined white button
```

### Hotel & Transportation (TBA)
```
In Venue section, add:

Info Card with Icon (alert/info icon):
- Background: rgba(251, 176, 59, 0.1)
- Border-left: 4px solid var(--accent-gold)
- Padding: 20px
- Border-radius: 12px

Text:
- "Conference Hotels & Transportation"
- "Information will be announced soon. Check back for updates!"
- Font: 'Inter', 16px
- Color: var(--gray-700)
```

### Countdown Timer (Optional but recommended)
```
Position: In hero or as sticky banner
Style: Digital flip cards or simple number display

Structure:
- Display: flex, gap 24px
- Centered

Time Unit:
- Background: rgba(255, 255, 255, 0.15)
- Border-radius: 16px
- Padding: 20px 24px
- Backdrop-filter: blur(10px)
- Text-align: center

Number:
- Font: 'Space Grotesk', 800 weight, 48px
- Color: white
- Line-height: 1

Label:
- Font: 'Inter', 14px
- Color: rgba(255, 255, 255, 0.8)
- Text-transform: uppercase
- Margin-top: 8px

Units: Days, Hours, Minutes
```

---

## Key Design Principles

1. **Bold & Confident**: Use large typography and strong color blocks
2. **Organized**: Clear information hierarchy, scannable content
3. **Energetic**: Vibrant colors, dynamic photos, engaging layouts
4. **Professional**: Academic credibility maintained throughout
5. **Action-Oriented**: Multiple clear CTAs guiding to registration
6. **Informative**: All essential conference details easily accessible
7. **Mobile-First**: Fully responsive with excellent mobile UX

---

## Brand Personality

- **Professional** and academically credible
- **Modern** and forward-thinking
- **Energetic** and engaging
- **Organized** and easy to navigate
- **Inclusive** and welcoming
- **Action-driven** with clear next steps

---

## Color Psychology & Usage

- **Primary Blue**: Trust, professionalism, stability (main brand)
- **Teal**: Innovation, creativity, modern thinking (accents)
- **Orange**: Energy, action, urgency (CTAs)
- **Magenta**: Bold, memorable, highlight (special items)
- **Gold**: Premium, value, recognition (awards/featured)

---

This design creates a professional conference website that balances academic credibility with modern event excitement. The bold typography, vibrant colors, and organized layouts make information easy to find while maintaining visual interest. The generous whitespace and clear hierarchy ensure attendees can quickly find registration, agenda, and speaker information.
