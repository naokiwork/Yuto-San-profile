# UI/UX QA Checklist (Apple.com Style)

This checklist ensures the portfolio website meets the specified Apple.com-grade UI/UX, accessibility, and performance standards across various browsers and devices.

## General
- [ ] No API / ENV related errors or warnings in console.
- [ ] Content structure is preserved; no data loss or accidental deletions.
- [ ] Load time is fast and animations are smooth (unless reduced motion is enabled).

## Design System & Styling
- [ ] **Color Palette:**
    - [ ] `primary`, `secondary`, `text`, `muted`, `border`, `card`, `accent` colors are consistent with Apple-like light theme.
    - [ ] Dark mode (via `prefers-color-scheme`) uses defined dark theme tokens.
    - [ ] Contrast ratios meet WCAG AA standards (text >= 4.5:1, large text >= 3:1).
- [ ] **Typography:**
    - [ ] System font stack is used across the site.
    - [ ] `display`, `h1`, `h2`, `h3`, `body`, `caption` font sizes are correctly applied according to the defined scale.
    - [ ] Line heights for body text (1.6-1.8) and headings (1.05-1.15) are correct.
    - [ ] Paragraphs enforce max text width (60-72ch).
- [ ] **Spacing & Grid:**
    - [ ] Sections (`<Module>` component) use consistent vertical padding (`py-16 md:py-24`).
    - [ ] Content is constrained to `max-w-[1120px] mx-auto px-6`.
    - [ ] Elements within components have consistent internal spacing.
- [ ] **Border Radius:** `sm`, `md`, `lg` radii are applied correctly (e.g., cards, buttons).

## Layout & Components

### Navigation
- [ ] **Global Header:**
    - [ ] Sticky top navigation with blur backdrop (`backdrop-filter`).
    - [ ] Fallback for `backdrop-filter` (solid background color) works in unsupported browsers.
    - [ ] "Yuto Asai" brand link to `#overview`.
- [ ] **Tab Navigation (`TabNav`):**
    - [ ] Tabs: `Overview`, `Research`, `Publications`, `Projects`, `Code`, `Contact`.
    - [ ] `IntersectionObserver` correctly highlights the active tab on scroll.
    - [ ] Active tab has an underline and stronger text color.
    - [ ] Keyboard navigation (Tab key) works for all tabs.

### Hero Section
- [ ] **Layout:** Left text block + Right abstract gradient card.
- [ ] **Content:**
    - [ ] Kicker chip: "Systems & Control / Robotics / Aerospace".
    - [ ] Headline: "Control theory → real systems." (large, bold, accent color on arrow).
    - [ ] Subhead: concise, 1-2 lines maximum.
    - [ ] CTA1: "View Projects" (primary button).
    - [ ] CTA2: "Contact" (secondary button).
- [ ] **Trust Strip (under Hero):**
    - [ ] Awards, Papers, Open-source repos counts (placeholders are fine).
    - [ ] 3-column layout on desktop, stacked on mobile.

### Research Focus
- [ ] Converts bullets into 3 "focus cards".
- [ ] Each card has: Title, 1-line claim, 3 keywords (chips), "Read" link (anchor).

### Publications
- [ ] Clean list component with publications grouped by year.
- [ ] Each publication shows: Title, Venue, Links (Paper/Abstract/External), Tags.
- [ ] Filters (`All`, `Journal`, `Conference`, `Preprint`) work correctly.

### Project Gallery
- [ ] "Featured Projects" converted to Apple-like product grid (2-up desktop, 1-up mobile).
- [ ] **ProjectCard:**
    - [ ] Title, outcome line, stack chips, 2 actions (Live / Story).
    - [ ] Consistent card height.
    - [ ] Image aspect ratio maintained.
    - [ ] "Project Image" / `project.alt` used for missing `imageUrl`. No "(Placeholder)" text.
    - [ ] External link icon present.
- [ ] **Project Filter:** `All`, `Research`, `Web`, `Tools` filters work client-side.
- [ ] **Sort:** `Most recent | Most relevant` (static ordering) functionality confirmed.

### Open-Source Contributions
- [ ] Renders list of repositories.
- [ ] **RepositoryItem:**
    - [ ] Repo name (link), description (if available), language dot, stars (optional), updated text.
    - [ ] "View on GitHub" button.

### Get In Touch
- [ ] Clear call to action and contact information.
- [ ] Social links (`Email`, `GitHub`, `LinkedIn`) are visible and functional.
- [ ] `AcademicIDList` is properly styled and functional.

## Micro-interactions & Motion
- [ ] **Hover Effects:**
    - [ ] Cards: subtle `translateY(1-2px)` lift + shadow change.
    - [ ] Links: subtle underline or color change.
- [ ] **Scroll Reveal (`Reveal`):**
    - [ ] Fade + `translateY(8px)` animation with duration `400ms`.
    - [ ] Disabled when `prefers-reduced-motion` is enabled (test in OS settings).
- [ ] **Button Press Feedback:** `scale 0.98`, `120ms` transition.
- [ ] **Focus Ring:**
    - [ ] `focus-visible` ring is consistently applied (2px solid `var(--accent)`, `outline-offset: 2px`).
    - [ ] Focus ring has `border-radius: var(--radius-sm)`.

## Accessibility (A11y)
- [ ] **Semantic HTML:**
    - [ ] `<h1>` used once per page.
    - [ ] Correct heading order (`h1`, `h2`, `h3`, etc.).
    - [ ] `main` landmark exists and is correctly identified (`id="main-content"`).
    - [ ] `SkipToContent` link works.
- [ ] **Keyboard Navigation:**
    - [ ] All interactive elements are reachable via `Tab` key.
    - [ ] `Shift + Tab` allows backward navigation.
    - [ ] Focus order is logical.
- [ ] **Images:** All meaningful images (including `ProjectCard` images) have descriptive `alt` text.
- [ ] **Links:**
    - [ ] All external links have `target="_blank" rel="noopener noreferrer"`.
    - [ ] `aria-label` used for buttons/links where text content isn't fully descriptive (e.g., icons only).
- [ ] **Reduced Motion:** Animation is disabled when `prefers-reduced-motion` is active.

## Performance & Loading
- [ ] **Lighthouse Scores (local):**
    - [ ] Performance >= 90.
    - [ ] Accessibility >= 95.
    - [ ] Best Practices >= 90.
- [ ] **Image Optimization:**
    - [ ] Hero images (if any) use `next/image` with `priority`.
    - [ ] Below-fold images use `loading="lazy"`.
- [ ] **Bundle Size:** No excessive JavaScript or CSS.
- [ ] **Critical CSS/JS:** Critical assets load first.

## Browser Compatibility
- [ ] **Safari (iOS/Desktop):**
    - [ ] `backdrop-filter` (if used) works or fallback is applied.
    - [ ] `100dvh` (if used) correctly renders viewport height.
    - [ ] Sticky navigation works.
    - [ ] Font rendering is correct.
- [ ] **Chrome:** All features render as expected.
- [ ] **Firefox:** Font rendering is correct.
- [ ] **Edge:** Contrast and layout render as expected.
- [ ] **CSS Features:** No unsupported CSS properties without fallbacks (`@supports`).
- [ ] **Meta Tags:** `viewport`, `color-scheme`, `theme-color` meta tags are present and correct.
