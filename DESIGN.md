# Design System: The Scholarly Prestige

## 1. Overview & Creative North Star
**The Creative North Star: "The Curated Authority"**

This design system is not a digital interface; it is a high-end editorial publication. Moving away from the frantic "software-as-a-service" aesthetic, we embrace **The Curated Authority**. This approach treats every screen like a spread in a premium journal—unhurried, confident, and deeply intentional.

The system breaks the "template" look by utilizing extreme vertical breathing room (6-8rem padding), asymmetric typography, and a signature "Gold Italic" emphasis. By pairing the scholarly weight of `Instrument Serif` with the modern utility of `DM Sans`, we bridge the gap between academic prestige and industry-ready employment.

---

## 2. Colors
Our palette is rooted in heritage and excellence. The interaction between Deep Navy and Warm Cream creates a high-contrast, prestigious environment, while the Gold serves as a surgical accent to guide the eye.

### Palette Mapping
- **Surface (Background):** `#FAF7F2` (Warm Cream) – The foundation of the editorial feel.
- **Primary:** `#0B1628` (Deep Navy) – Used for high-authority headings and primary actions.
- **Secondary:** `#132035` (Mid Navy) – For secondary containers and deep-tone sections.
- **Accent:** `#C8942A` (Gold) – Reserved for the signature 'i' in the logo, italicized emphasis, and primary CTA highlights.
- **Body Text:** `#3D4F6B` – Carefully chosen for optimal legibility against the cream background.
- **Muted Text:** `#8A9AB5` – Used for meta-data and secondary labels.

### The "No-Line" Rule
To maintain a refined look, designers are prohibited from using 1px solid dark borders for structural sectioning. Boundaries must be defined through:
1.  **Tonal Shifts:** Moving from `surface` (#FAF7F2) to a slightly deeper `surface-container-low` (#F6F3EE).
2.  **The Ghost Border:** A 1px border using `rgba(200, 148, 42, 0.15)` is permitted only on light sections to provide a "suggestion" of a boundary without closing off the layout.

### Signature Textures
- **The Hero Glow:** A subtle radial gradient (`#F5E6C2` at 20% opacity) must be placed behind primary hero typography to create a "halo" effect, suggesting the warmth of a spotlight on a stage.
- **Flat Surface Integrity:** Avoid glassmorphism. Surfaces should feel like heavy cardstock or matte-finished paper.

---

## 3. Typography
The typographic system is the heartbeat of this editorial experience. It relies on the tension between the serif's grace and the sans-serif's efficiency.

### Headings: Instrument Serif
- **Character:** Elegant, authoritative, and timeless.
- **The Signature Rule:** In any `display` or `headline` level, key words (e.g., "Employment") should be set in **Italic Gold** (`#C8942A`). This mimics hand-annotated manuscripts of high value.

### Body/UI: DM Sans
- **Character:** Modern, clean, and invisible.
- **Weights:** 300 (Light) for long-form body, 400 (Regular) for standard UI, 500 (Medium) for labels and buttons.

### Scale
- **Display Large (3.5rem):** For hero statements. Letter-spacing: -0.02em.
- **Headline Medium (1.75rem):** For section starts.
- **Body Large (1.0rem):** For core narrative text. Line-height: 1.6 for an "unhurried" reading experience.

---

## 4. Elevation & Depth
In a system that rejects glassmorphism and heavy shadows, depth is achieved through **Tonal Layering**.

- **The Layering Principle:** Imagine the UI as stacked sheets of fine paper. A "card" is not a box with a shadow; it is a `surface-container-lowest` (#FFFFFF) sheet sitting on a `surface` (#FAF7F2) background.
- **Ambient Shadows:** For floating elements (like a "Join Now" sticky bar), use a hyper-diffused shadow: `0px 20px 40px rgba(11, 22, 40, 0.04)`. It should look like a natural shadow cast by soft gallery lighting.
- **Border Radius:** A strict maximum of `16px` for cards and `full` for buttons. This maintains a balance between organic softness and professional structure.

---

## 5. Components

### Buttons
- **Primary:** Deep Navy background, White text. No border. Radius: 999px. Padding: 1rem 2.5rem.
- **Secondary (The Gold Lead):** Ghost Border (Gold 15%) with Gold text. On hover, a subtle gold-pale (#F5E6C2) fill.
- **Tertiary:** Underlined text in DM Sans Medium. The underline should be Gold (#C8942A) and 1px thick.

### Input Fields
- **Style:** Minimalist underline or 3nd-side border.
- **Focus State:** The bottom border transitions from Muted Text to Gold.
- **Label:** Small-caps DM Sans Medium, floating above the input.

### Cards & Lists
- **Forbid Dividers:** Do not use horizontal lines to separate list items. Use 2rem of vertical white space or a subtle background shift between items.
- **The "Insight" Card:** A `surface-container-lowest` background with a 1px Gold Ghost Border. Use 4rem padding inside the card to maintain the editorial feel.

### Hero Radial
- A custom component. A large, soft radial gradient of Gold Pale (#F5E6C2) centered at 50% 50%, with a blur of 120px, set behind the main H1.

---

## 6. Do's and Don'ts

### Do:
- **Use "White Space" as a Feature:** If a section feels crowded, double the padding. Luxury is having the space to breathe.
- **Italicize with Intent:** Only use the Gold Italic for words that carry the emotional weight of the brand (e.g., *immersion*, *future*, *industry*).
- **Maintain Flatness:** Ensure all surfaces feel like physical material. Depth comes from color, not effects.

### Don't:
- **No Heavy Borders:** Never use a 100% opaque dark border. It breaks the "unhurried" editorial flow.
- **No Glassmorphism:** Avoid backdrop blurs and transparency. We are building a brand of "certainty," not "translucency."
- **No Standard Grids:** Occasionally break the grid. Offset an image by 2rem or let a heading bleed into the margin to create a bespoke, custom-designed feel.
- **No Generic Icons:** Use thin-stroke (1px) icons that match the Gold or Navy colors. Never use filled, "bubbly" icons.

---

**Tagline Integration:**
Every footer or major section transition should subtly feature the brand promise:
*educivic. — Not education. **Employment.***