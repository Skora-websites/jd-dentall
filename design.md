# Design Specification: Anti Dental Clinic Landing Page

> Comprehensive UI/UX Design System, Component Anatomy, and Technical Implementation Document based on the reference design specification `jd-dental.jpg`.

---

## 1. Overview & Brand Identity

- **Brand Name**: Anti (Dental Care Clinic)
- **Tagline**: *Advanced Care, Brighter Smiles / Your Smile, Our Passion*
- **Aesthetic**: Premium, Modern Healthcare, High-Trust, Clean Minimalist with Warm Approachability.
- **Visual Style**: Soft rounded corners (`rounded-2xl` to `rounded-full`), generous whitespace, crisp micro-borders, deep forest green accents, refreshing medical teals, and human-centric imagery.

---

## 2. Design System & Design Tokens

### 2.1 Color Palette

```
/* Primary Brand & Accents */
--color-brand-primary:      #0D7A75;  /* Main Teal / CTAs / Highlight Badges */
--color-brand-primary-hover:#095C58;  /* Deep Teal for hover states */
--color-brand-light:        #E6F5F4;  /* Soft Teal / Icon background chips */
--color-brand-lighter:      #F0FDFB;  /* Ultra-light mint background tint */
--color-brand-accent:       #16938D;  /* Vibrant Teal for CTA Banner */

/* Dark Tones / Forest Green (Sections & Footers) */
--color-forest-dark:        #063B36;  /* "Why Choose Us" dark container */
--color-forest-darker:      #052824;  /* Footer background */
--color-forest-surface:     #0A4A44;  /* Card surface inside dark container */

/* Neutral Typography & Backgrounds */
--color-text-primary:       #101828;  /* Headings & dark text */
--color-text-secondary:     #475569;  /* Body copy & descriptions */
--color-text-muted:         #94A3B8;  /* Metadata, dates, secondary labels */
--color-text-inverse:       #FFFFFF;  /* Text on dark/brand backgrounds */

/* Backgrounds & Borders */
--color-bg-page:            #FBFDFC;  /* Main body background (soft off-white) */
--color-bg-card:            #FFFFFF;  /* Solid white cards */
--color-border-subtle:      #E2E8F0;  /* Card borders and dividers */
--color-border-brand:       #A3E3DF;  /* Active card highlight border */

/* Feedback & Ratings */
--color-rating-star:        #F59E0B;  /* Amber / Gold 5-star ratings */
```

### 2.2 Typography Scale

- **Font Family**: Primary: `Inter`, `Plus Jakarta Sans`, or `Outfit`, `sans-serif`
- **Scale Hierarchy**:
  - **H1 (Hero Title)**: `48px`–`56px` (`3rem`–`3.5rem`), Bold (`font-bold`), Line Height `1.15`, Tracking `-0.02em`
  - **H2 (Section Titles)**: `32px`–`40px` (`2rem`–`2.5rem`), Bold (`font-bold`), Line Height `1.2`, Tracking `-0.01em`
  - **H3 (Card / Sub-headings)**: `20px`–`24px` (`1.25rem`–`1.5rem`), SemiBold (`font-semibold`), Line Height `1.3`
  - **H4 (Small Titles / Doctor Names)**: `18px`–`20px` (`1.125rem`–`1.25rem`), SemiBold (`font-semibold`)
  - **Eyebrow / Sub-tag**: `14px` (`0.875rem`), Medium / SemiBold (`font-medium`), Color: `#0D7A75`, Capitalization / Title Case
  - **Body Large (Hero Subtitle)**: `16px`–`18px` (`1rem`–`1.125rem`), Regular (`font-normal`), Line Height `1.6`, Color: `#475569`
  - **Body Standard**: `14px`–`15px` (`0.875rem`–`0.9375rem`), Regular (`font-normal`), Line Height `1.5`, Color: `#475569`
  - **Small / Metadata / Dates**: `12px`–`13px` (`0.75rem`–`0.8125rem`), Regular (`font-normal`), Color: `#94A3B8`
  - **Button Text**: `14px`–`15px` (`0.875rem`–`0.9375rem`), SemiBold (`font-semibold`), Tracking `0.01em`

### 2.3 Spacing, Radii & Shadows

- **Container**: Max width `1280px` (`max-w-7xl`), Horizontal padding `16px` (mobile) / `32px` (tablet) / `48px` (desktop)
- **Section Spacing**: `py-16` (`64px`) to `py-24` (`96px`)
- **Border Radius**:
  - Buttons / Pills / Badges: `9999px` (`rounded-full`)
  - Feature & Service Cards: `20px`–`24px` (`rounded-2xl` / `rounded-3xl`)
  - Inner Badges / Small Cards: `12px`–`16px` (`rounded-xl`)
- **Box Shadows**:
  - `shadow-sm`: `0 1px 3px rgba(0,0,0,0.05)`
  - `shadow-card`: `0 10px 30px -10px rgba(13, 122, 117, 0.08)`
  - `shadow-elevated`: `0 20px 40px -15px rgba(0, 0, 0, 0.1)`

---

## 3. Global Navigation Header

```
+-----------------------------------------------------------------------------------------+
| [🦷 Anti]             Home   Services   About Us   Pages ⌄   Contact   [Book Appointment] |
+-----------------------------------------------------------------------------------------+
```

### 3.1 Specifications
- **Layout**: Fixed / Sticky navbar with transparent or frosted glass backdrop (`backdrop-blur-md bg-white/90`), border bottom `1px solid #F1F5F9`.
- **Left**:
  - **Logo**: Teal Tooth Outline Icon + Brand Name "**Anti**" in bold slate (`#101828`).
- **Center**:
  - Navigation links: `Home`, `Services`, `About Us`, `Pages ⌄` (Dropdown indicator), `Contact`.
  - Font: `15px`, Medium (`font-medium`), Color: `#475569`, Hover: `#0D7A75`.
  - Active state: `#0D7A75` with subtle underline or color fill.
- **Right**:
  - CTA Button: `Book Appointment`
  - Style: Solid teal background (`#0D7A75`), white text, `px-5 py-2.5`, `rounded-lg` / `rounded-full`, hover effect (`bg-[#095C58]`).

---

## 4. Detailed Section Specifications

---

### Section 1: Hero Section

```
+-------------------------------------------------------------+------------------------------------+
|  Advanced Care, Brighter Smiles                             |                                    |
|  Your Smile,                                                |        [ Hero Image:               |
|  Our Passion                                                |          Smiling female patient in |
|                                                             |          dental chair with dental  |
|  Experience world-class dental care with modern technology  |          probe / examination ]     |
|  and a gentle touch. We make every smile healthy and        |                                    |
|  beautiful.                                                 |                                    |
|                                                             |                                    |
|  [Book Appointment]    [Explore Services ▷]                 |                                    |
+-------------------------------------------------------------+------------------------------------+
|  [🩺 Expert Doctors]   [🔬 Advanced Tech]   [🦷 Pain-Free]   [😊 Patient Satisfaction]            |
+--------------------------------------------------------------------------------------------------+
```

#### Content & Copy:
- **Eyebrow Badge**: `"Advanced Care, Brighter Smiles"` (`text-[#0D7A75] font-semibold text-sm`)
- **Main Heading**: `"Your Smile,\nOur Passion"` (`text-5xl lg:text-6xl font-extrabold text-[#101828] leading-tight`)
- **Supporting Paragraph**: `"Experience world-class dental care with modern technology and a gentle touch. We make every smile healthy and beautiful."`
- **CTAs**:
  1. Primary CTA: `Book Appointment` (Solid Teal `#0D7A75`, white text, `rounded-lg`)
  2. Secondary CTA: `Explore Services ▷` (Ghost / White with play/arrow button in circle, `#101828`)
- **Right Hero Image**:
  - High quality portrait of a happy smiling woman in a dental chair with dentist wearing surgical blue gloves holding dental mirror/probe.
  - Mask: Organic rounded container (`rounded-3xl`).
- **Bottom Value Proposition Cards** (4 cards in a single row / horizontal strip):
  1. `[Doctor Icon]` **Expert Doctors**
  2. `[Tech / Cross Icon]` **Advanced Technology**
  3. `[Tooth / Sparkle Icon]` **Pain-Free Treatment**
  4. `[Smile / Patient Icon]` **Patient Satisfaction**
  - Card style: White background, soft border, icon housed in light teal square badge (`bg-[#E6F5F4] text-[#0D7A75]`), `text-sm font-semibold`.

---

### Section 2: Dental Services ("Complete Dental Care Under One Roof")

```
+--------------------------------------------------------------------------------------------------+
|  Our Dental Services                               From routine checkups to advanced             |
|  Complete Dental Care                              treatments — we provide complete care         |
|  Under One Roof                                    for you and your family.         (←) (→)      |
+-------------------+--------------------+--------------------+------------------------------------+
| [ Image: Doctor ] | [ Image: Teeth ]   | [ Image: Implant ] | [ Image: Braces ]                  |
| 🩺 General Checkup| 🦷 Teeth Whitening | ⚙️ Dental Implants  | 🪥 Orthodontics                    |
| Regular checkups  | Brighten your      | Replacement of     | Straighten your teeth              |
| help detect...    | smile safely...    | missing teeth...   | and improve your smile...          |
| Learn More →      | Learn More →       | Learn More →       | Learn More →                       |
+-------------------+--------------------+--------------------+------------------------------------+
```

#### Content & Copy:
- **Header Left**:
  - Eyebrow: `"Our Dental Services"` (`text-[#0D7A75] font-semibold`)
  - Title: `"Complete Dental Care\nUnder One Roof"` (`text-3xl lg:text-4xl font-bold text-[#101828]`)
- **Header Right**:
  - Subtitle: `"From routine checkups to advanced treatments — we provide complete care for you and your family."`
  - Carousel Controls: Circular outlined arrow buttons `(←)` and `(→)`.
- **Service Cards Grid** (4-column responsive grid):
  1. **General Checkup**
     - Image: Female dentist examining patient with mask and loupes.
     - Badge Icon: Stethoscope / Doctor badge.
     - Description: `"Regular checkups help detect problems early and keep your smile healthy."`
     - Link: `"Learn More →"`
  2. **Teeth Whitening**
     - Image: Close-up macro of sparkling clean white teeth and lips.
     - Badge Icon: Tooth sparkle badge.
     - Description: `"Brighten your smile safely with our advanced whitening treatments."`
     - Link: `"Learn More →"`
  3. **Dental Implants**
     - Image: Precision dental implant screw and crown model.
     - Badge Icon: Dental fixture badge.
     - Description: `"Replacement of missing teeth with natural-looking and durable implants."`
     - Link: `"Learn More →"`
  4. **Orthodontics**
     - Image: Smiling patient showing clear/aesthetic dental braces.
     - Badge Icon: Smile alignment badge.
     - Description: `"Straighten your teeth and improve your smile with modern orthodontic care."`
     - Link: `"Learn More →"`
- **Card Anatomy**:
  - Top: High-resolution photographic thumbnail (`h-48 w-full object-cover rounded-t-2xl`).
  - Overlap: Small rounded teal badge icon positioned at bottom-left corner of the image.
  - Body: Card padding `p-6`, H3 title, description in muted slate, and hoverable `Learn More →` text link with animated arrow.

---

### Section 3: Why Choose Us (Dark Green Container & Live Statistics)

```
+--------------------------------------------------------------------------------------------------+
|  [ CONTAINER: Dark Forest Green #063B36 rounded-3xl p-10 lg:p-14 ]                               |
|                                                                                                  |
|  Why Choose Us                  [ CENTER IMAGE ]                 [ RIGHT STATS CARD (White) ]    |
|  We Care for Your               Female doctor in face mask &     +-----------------------------+ |
|  Healthy Smile                  stethoscope smiling with patient |  15+                        | |
|                                 in treatment room                |  Years of Experience        | |
|  Our experienced team combines                                   |  -------------------------  | |
|  expertise with compassion to                                    |  25k+                       | |
|  deliver the best dental...                                      |  Happy Patients             | |
|                                                                  |  -------------------------  | |
|  ✓ Highly Qualified Dentists                                     |  98%                        | |
|  ✓ Modern Equipment                                              |  Satisfaction Rate          | |
|  ✓ Comfortable Environment                                       |  -------------------------  | |
|  ✓ Affordable Pricing                                            |  24/7                       | |
|                                                                  |  Emergency Support          | |
|  [More About Us →]                                               +-----------------------------+ |
+--------------------------------------------------------------------------------------------------+
```

#### Content & Copy:
- **Container Styling**: Dark forest green background (`#063B36`), `rounded-3xl`, text in white / light cyan.
- **Left Column**:
  - Eyebrow: `"Why Choose Us"` (`text-[#A3E3DF] text-sm font-medium`)
  - Title: `"We Care for Your\nHealthy Smile"` (`text-3xl lg:text-4xl font-bold text-white leading-snug`)
  - Paragraph: `"Our experienced team combines expertise with compassion to deliver the best dental experience."` (`text-slate-200 text-sm`)
  - Feature Checklist (4 items with green/white checkmarks):
    - `✓ Highly Qualified Dentists`
    - `✓ Modern Equipment`
    - `✓ Comfortable Environment`
    - `✓ Affordable Pricing`
  - Button: `"More About Us →"` (White pill button, text `#063B36`, `font-semibold px-6 py-3 rounded-full hover:bg-slate-100`)
- **Center Visual**:
  - Portrait of female dentist in scrubs and mask consulting with female patient in modern dental office.
- **Right Column (Floating Stats Card)**:
  - Background: Clean white card (`bg-white rounded-2xl p-6 shadow-xl text-center text-[#101828]`).
  - Stat Item 1: **15+** | `"Years of Experience"` (`text-3xl font-extrabold text-[#101828]`, subtitle `text-xs text-slate-500`)
  - Stat Item 2: **25k+** | `"Happy Patients"`
  - Stat Item 3: **98%** | `"Satisfaction Rate"`
  - Stat Item 4: **24/7** | `"Emergency Support"`
  - Dividers: Subtle horizontal line `border-t border-slate-100` between stat rows.

---

### Section 4: Process Flow ("Simple Steps to a Healthy Smile")

```
+--------------------------------------------------------------------------------------------------+
|  Our Process                                       We make dental care easy and                  |
|  Simple Steps to a                                 comfortable in just a few simple steps.       |
|  Healthy Smile                                                                                   |
+--------------------------------------------------------------------------------------------------+
|      [ 📅 ]                      [ 🔍 ]                      [ 📋 ]                      [ 🛡️ ]     |
|      ( 1 )                       ( 2 )                       ( 3 )                       ( 4 )      |
|  Book Appointment            Dental Checkup              Personalized Plan           Treatment & Care|
|  Schedule your               We examine your teeth       Get a customized treatment  Receive the    |
|  appointment online...       and understand your needs.  plan for your smile.        best treatment.|
+--------------------------------------------------------------------------------------------------+
```

#### Content & Copy:
- **Header**:
  - Eyebrow: `"Our Process"`
  - Title: `"Simple Steps to a\nHealthy Smile"`
  - Subtitle (right aligned): `"We make dental care easy and comfortable in just a few simple steps."`
- **4-Step Horizontal Timeline**:
  - **Step 1**:
    - Icon: Calendar / booking clipboard in circular mint chip (`bg-[#E6F5F4] text-[#0D7A75]`).
    - Number Badge: `1` in small rounded badge.
    - Title: `"Book Appointment"`
    - Description: `"Schedule your appointment online or by phone."`
  - **Step 2**:
    - Icon: Diagnostic dental instruments / magnifying lens.
    - Number Badge: `2`
    - Title: `"Dental Checkup"`
    - Description: `"We examine your teeth and understand your needs."`
  - **Step 3**:
    - Icon: Custom treatment plan sheet / medical chart.
    - Number Badge: `3`
    - Title: `"Personalized Plan"`
    - Description: `"Get a customized treatment plan for your smile."`
  - **Step 4**:
    - Icon: Tooth shield / medical care check.
    - Number Badge: `4`
    - Title: `"Treatment & Care"`
    - Description: `"Receive the best treatment with ongoing care."`
- **Connector**: Dashed horizontal progress line connecting Steps 1 -> 2 -> 3 -> 4.

---

### Section 5: Team / Dentists ("Meet Our Expert Dentists")

```
+--------------------------------------------------------------------------------------------------+
|  Meet Our                                          Our team of skilled and friendly dentists is  |
|  Expert Dentists                                   here to provide the best care for you.        |
+-------------------+--------------------+--------------------+------------------------------------+
| [ Photo: Sarah ]  | [ Photo: Michael ] | [ Photo: Emily ]   | [ Photo: James ]                   |
| Dr. Sarah Johnson | Dr. Michael Brown  | Dr. Emily Davis    | Dr. James Wilson                   |
| Orthodontist      | Implant Specialist | Cosmetic Dentist   | General Dentist                    |
+-------------------+--------------------+--------------------+------------------------------------+
|                                         ( • • • • )                                              |
+--------------------------------------------------------------------------------------------------+
```

#### Content & Copy:
- **Header**:
  - Title: `"Meet Our\nExpert Dentists"` (`text-3xl lg:text-4xl font-bold`)
  - Subtitle: `"Our team of skilled and friendly dentists is here to provide the best care for you."`
- **4 Team Member Cards**:
  1. **Dr. Sarah Johnson**
     - Role: `Orthodontist`
     - Card: White card, rounded top portrait photo, clean typography.
  2. **Dr. Michael Brown** (*Highlighted / Featured Card*)
     - Role: `Implant Specialist`
     - Visual Highlight: Dark teal container card (`bg-[#0D7A75] text-white`) or highlighted border with white typography.
  3. **Dr. Emily Davis**
     - Role: `Cosmetic Dentist`
     - Card: White card, rounded portrait.
  4. **Dr. James Wilson**
     - Role: `General Dentist`
     - Card: White card, rounded portrait.
- **Pagination**: 4 carousel indicator dots below the cards.

---

### Section 6: Testimonials ("Real Stories, Real Smiles")

```
+--------------------------------------------------------------------------------------------------+
|  What Our Patients Say  💬                                                                       |
|  Real Stories, Real Smiles                                                                       |
+-------------------------------------------------------+------------------------------------------+
|  +--------------------------------------------------+ |                                          |
|  |  “                                               | |  [ Image: Happy Woman pointing           |
|  |  The team is amazing! I felt comfortable and     | |    to her clean radiant smile ]          |
|  |  cared for throughout my treatment. Highly       | |                                          |
|  |  recommended.                                    | |                                          |
|  |                                                  | |                                          |
|  |  ★ ★ ★ ★ ★                                       | |                                          |
|  |                                                  | |                                          |
|  |  Jessica P.                                      | |                                          |
|  |  Happy Patient                                   | |                                          |
|  |                                                  | |                                          |
|  |  (←) (→)                                         | |                                          |
|  +--------------------------------------------------+ |                                          |
+-------------------------------------------------------+------------------------------------------+
```

#### Content & Copy:
- **Header**:
  - Eyebrow: `"What Our Patients Say"` + subtle quote/chat bubble graphic.
  - Title: `"Real Stories, Real Smiles"` (`text-3xl lg:text-4xl font-bold`)
- **Left Testimonial Card**:
  - Large decorative teal quote glyph: `“` (`text-[#0D7A75] text-4xl font-serif`)
  - Quote: `"The team is amazing! I felt comfortable and cared for throughout my treatment. Highly recommended."` (`text-slate-700 text-lg leading-relaxed`)
  - Star Rating: 5 gold stars (`★★★★★`, `#F59E0B`)
  - Author: **Jessica P.** (`font-bold text-[#101828]`)
  - Label: `"Happy Patient"` (`text-xs text-slate-500`)
  - Interactive Arrows: `(←) (→)` navigation buttons with carousel dots at bottom.
- **Right Visual**:
  - High-res photo of a woman pointing to her healthy, bright teeth and smile with joy.

---

### Section 7: Pricing Plans ("Affordable Dental Care for Everyone")

```
+--------------------------------------------------------------------------------------------------+
|  Choose Your Plan                                                                                |
|  Affordable Dental Care                                                                          |
|  for Everyone                                                                                    |
+-----------------------------+-------------------------------+------------------------------------+
|       [ 🦷 Basic Care ]      |     [ ⭐ Popular Badge ]      |       [ 👨‍👩‍👧 Family Care ]         |
|                             |     [ 👑 Premium Care ]       |                                    |
|           $49 /month        |           $99 /month          |           $149 /month              |
|                             |                               |                                    |
|   ✓ Regular Checkup         |   ✓ Everything in Basic       |   ✓ Everything in Premium          |
|   ✓ Teeth Cleaning          |   ✓ Teeth Whitening           |   ✓ Family Checkups                |
|   ✓ Basic Consultation      |   ✓ Advanced Consultation     |   ✓ Special Discounts              |
|   ✓ X-Ray (if needed)       |   ✓ Priority Booking          |   ✓ 24/7 Support                   |
|                             |                               |                                    |
|       [ Choose Plan ]       |        [ Choose Plan ]        |         [ Choose Plan ]            |
+-----------------------------+-------------------------------+------------------------------------+
```

#### Content & Copy:
- **Header**:
  - Eyebrow: `"Choose Your Plan"` (`text-[#0D7A75] font-semibold text-sm`)
  - Title: `"Affordable Dental Care\nfor Everyone"` (`text-3xl lg:text-4xl font-bold`)
- **3 Pricing Tiers**:

| Feature / Attribute | Tier 1: Basic Care | Tier 2: Premium Care (*Popular*) | Tier 3: Family Care |
| :--- | :--- | :--- | :--- |
| **Top Badge** | None | `"Popular"` (`bg-[#0D7A75] text-white rounded-full`) | None |
| **Header Icon** | Tooth icon in circle | Crown / Diamond icon in circle | Family / Heart tooth icon |
| **Plan Name** | `Basic Care` | `Premium Care` | `Family Care` |
| **Price** | **$49** ` /month` | **$99** ` /month` | **$149** ` /month` |
| **Feature 1** | ✓ Regular Checkup | ✓ Everything in Basic | ✓ Everything in Premium |
| **Feature 2** | ✓ Teeth Cleaning | ✓ Teeth Whitening | ✓ Family Checkups |
| **Feature 3** | ✓ Basic Consultation | ✓ Advanced Consultation | ✓ Special Discounts |
| **Feature 4** | ✓ X-Ray (if needed) | ✓ Priority Booking | ✓ 24/7 Support |
| **CTA Button** | `Choose Plan` (Teal Button) | `Choose Plan` (Solid Teal / Accent) | `Choose Plan` (Teal Button) |
| **Border / Card** | `border border-slate-200` | `border-2 border-[#0D7A75] shadow-lg` | `border border-slate-200` |

---

### Section 8: Blog & Articles ("Dental Tips & News")

```
+--------------------------------------------------------------------------------------------------+
|  Our Blog                                                                                        |
|  Dental Tips & News                                                                              |
+------------------------------+-------------------------------+-----------------------------------+
| [ Image: Dental hygiene ]    | [ Image: Doctor with child ]  | [ Image: Teeth whitening exam ]   |
| May 05, 2025                 | May 08, 2025                  | May 08, 2025                      |
| 5 Tips for Maintaining       | How Often Should You          | The Benefits of Teeth             |
| Healthy Teeth                | Visit the Dentist?            | Whitening                         |
+------------------------------+-------------------------------+-----------------------------------+
|                                      [ View All Blog ]                                           |
+--------------------------------------------------------------------------------------------------+
```

#### Content & Copy:
- **Header**:
  - Eyebrow: `"Our Blog"`
  - Title: `"Dental Tips & News"`
- **3 Article Cards**:
  1. **Article 1**:
     - Image: Dental hygienist working with patient.
     - Date: `May 05, 2025` (`text-xs text-slate-400 font-medium`)
     - Title: `"5 Tips for Maintaining Healthy Teeth"` (`font-bold text-[#101828] text-base hover:text-[#0D7A75]`)
  2. **Article 2**:
     - Image: Friendly dentist talking with patient in dental clinic.
     - Date: `May 08, 2025`
     - Title: `"How Often Should You Visit the Dentist?"`
  3. **Article 3**:
     - Image: Patient examining sparkling smile in mirror.
     - Date: `May 08, 2025`
     - Title: `"The Benefits of Teeth Whitening"`
- **Bottom CTA**:
  - Button: `"View All Blog"` (`border border-slate-300 text-slate-700 px-6 py-2.5 rounded-full hover:bg-slate-100 font-medium text-sm`)

---

### Section 9: CTA Banner ("Ready for Your Perfect Smile?")

```
+--------------------------------------------------------------------------------------------------+
|  [ BANNER CONTAINER: Vibrant Teal #16938D rounded-3xl p-10 lg:p-12 text-white ]                  |
|                                                                                                  |
|  Ready for Your                                  [ RIGHT IMAGE:                                  |
|  Perfect Smile?                                    Modern state-of-the-art dental clinic         |
|                                                    operatory chair with clinical lighting ]      |
|  Book your appointment today and                                                                 |
|  experience the best dental care.                                                                |
|                                                                                                  |
|  [ Book Appointment ]                                                                            |
+--------------------------------------------------------------------------------------------------+
```

#### Content & Copy:
- **Container Styling**: Vibrant teal background (`#16938D` / `#0D7A75`), `rounded-3xl`, overflow hidden, relative positioning.
- **Left Column**:
  - Title: `"Ready for Your\nPerfect Smile?"` (`text-3xl lg:text-4xl font-bold text-white leading-tight`)
  - Subtitle: `"Book your appointment today and experience the best dental care."` (`text-teal-50 text-sm mt-3 mb-6`)
  - Button: `"Book Appointment"` (`bg-white text-[#0D7A75] font-semibold px-6 py-3 rounded-full hover:bg-slate-100 shadow-md`)
- **Right Column**:
  - Image: Modern ergonomic dental chair with dental lamp, monitors, and modern clinical backdrop.

---

### Section 10: Footer & Legal Bar

```
+--------------------------------------------------------------------------------------------------+
|  [ FOOTER CONTAINER: Deep Forest Green #052824 text-slate-300 pt-16 pb-8 ]                       |
|                                                                                                  |
|  🦷 Anti              Quick Links         Our Services           Contact Us                      |
|                                                                                                  |
|  We provide advanced  • Home              • General Dentistry    📍 123 Dental Street,           |
|  dental care with a   • About Us          • Cosmetic Dentistry      Smile City, SC 12345         |
|  gentle touch. Your   • Services          • Orthodontics         📞 +1 (234) 567 8900            |
|  smile is our top     • Blog              • Dental Implants      ✉️ info@anti.com                |
|  priority.            • Contact           • Teeth Whitening                                      |
|                                                                                                  |
|  [F] [T] [I] [L]                                                                                 |
|                                                                                                  |
|  ----------------------------------------------------------------------------------------------  |
|  © 2025 Anti. All Rights Reserved.                          Privacy Policy  |  Terms & Conditions|
+--------------------------------------------------------------------------------------------------+
```

#### Content & Copy:
- **Column 1 (Brand & Social)**:
  - Logo: White Tooth Outline + `"Anti"` (`text-2xl font-bold text-white`)
  - Description: `"We provide advanced dental care with a gentle touch. Your smile is our top priority."` (`text-slate-300 text-sm leading-relaxed max-w-xs`)
  - Social Links: 4 circular teal buttons `[Facebook] [Twitter / X] [Instagram] [LinkedIn]` (`bg-[#0A4A44] hover:bg-[#0D7A75] text-white p-2.5 rounded-full`)
- **Column 2 (Quick Links)**:
  - Header: `"Quick Links"` (`text-white font-semibold text-base mb-4`)
  - Links: `Home`, `About Us`, `Services`, `Blog`, `Contact`
- **Column 3 (Our Services)**:
  - Header: `"Our Services"` (`text-white font-semibold text-base mb-4`)
  - Links: `General Dentistry`, `Cosmetic Dentistry`, `Orthodontics`, `Dental Implants`, `Teeth Whitening`
- **Column 4 (Contact Us)**:
  - Header: `"Contact Us"` (`text-white font-semibold text-base mb-4`)
  - Items:
    - 📍 `123 Dental Street, Smile City, SC 12345`
    - 📞 `+1 (234) 567 8900`
    - ✉️ `info@anti.com`
- **Bottom Legal Bar**:
  - Divider: `border-t border-slate-800 my-8`
  - Left: `© 2025 Anti. All Rights Reserved.`
  - Right: `Privacy Policy` `|` `Terms & Conditions`

---

## 5. Responsive Behavior & Breakpoints

| Breakpoint | Target Screen Width | Layout Changes |
| :--- | :--- | :--- |
| **Mobile (`< 640px`)** | iPhones, Android phones | 1-column layouts, mobile hamburger menu, stacked cards, full-width buttons. |
| **Tablet (`640px - 1024px`)** | iPads, Tablets | 2-column grids for services, team, and blog; simplified 2-column footer. |
| **Desktop (`> 1024px`)** | Laptops & Desktops | Full 4-column grids, horizontal process timeline, side-by-side hero and split sections. |

---

## 6. Interaction & Micro-Animations

1. **Button Hover States**:
   - Primary Buttons: Subtle scale-up (`scale-[1.02]`) and color deepening (`bg-[#095C58]`).
   - Arrow Links (`Learn More →`): Arrow translates `+4px` on hover (`transition-transform duration-200`).
2. **Card Hover Effects**:
   - Service and Blog Cards: Subtle `translate-y-[-4px]` elevation with enhanced shadow (`shadow-card`).
3. **Carousel / Nav Buttons**:
   - Circular buttons `(←) (→)` invert colors on hover (`bg-[#0D7A75] text-white`).
4. **Accessibility (a11y)**:
   - Contrast Ratio: Minimum 4.5:1 for all text elements.
   - Visible keyboard focus rings (`focus-visible:ring-2 focus-visible:ring-[#0D7A75]`).
   - Semantic HTML5 structure (`<header>`, `<main>`, `<section>`, `<article>`, `<footer>`).

---

## 7. Implementation Checklist

- [x] Extract all typography, color tokens, and visual rules into design tokens.
- [x] Fully document all 10 page sections with exact textual copy, hierarchy, and layout.
- [x] Define card models for Services, Stats, Team, Testimonials, Pricing, and Blog.
- [x] Specify responsive behavior, accessibility guidelines, and hover interactions.
