# ANDRZEJ_ŚLESZYŃSKI // ARCHIVE_01

**System Version:** 1.10 (Final Stable)
**Aesthetic:** High-Contrast Minimalism / Technical Wiki

---

## 01_Visual_Dictionary

| Element        | Value           | Hex / Spec          |
| :------------- | :-------------- | :------------------ |
| **Background** | Concrete        | `#EBEBEB`           |
| **Text**       | Pitch Black     | `#000000`           |
| **Accent 01**  | Cobalt Blue     | `#2E48FF`           |
| **Accent 02**  | Tangerine       | `#FF3E00`           |
| **Typography** | SF Mono / Menlo | Monospace System    |
| **Favicon**    | &/              | Inline SVG (Cobalt) |

---

## 02_Directory_Structure

root/
├── index.html # Main Dashboard & Linear Intro
├── design.html # Visual Systems Archive
├── music.html # Sonic Landscapes (witbezkacy)
├── bio.html # Identification & Background
├── impro-kapciu.html # Case Study: Social Identity
├── style.css # Global Logic (V1.10)
└── photo.jpg # Square Profile Photo (300x300px)

---

## 03_System_Logic (Responsive Behavior)

This system uses a **Hybrid Grid** approach to balance information density and mobile usability:

### Desktop (Mac/Widescreen)

- **Linear Header:** Navigation and Breadcrumbs stay in a single unified block.
- **Intro:** Text on the left, Square Photo on the right.
- **Grids:** All content uses `auto-fill` grids (2-4 columns) to maximize screen real estate.

### Mobile (Phone)

- **Vertical Stack:** The `wiki-grid` and `intro-wrap` stack elements vertically for a natural scroll.
- **Hero Scroll:** Sections using the `.featured-grid` class (like Featured Music) switch to a **horizontal snap-scroll**. This prevents "infinite vertical scroll" and allows users to swipe through primary highlights.
- **Table Wrapper:** Tables are swipeable to prevent horizontal layout breaks.

---

## 04_Maintenance_Workflow

### Adding a Design Project:

1. Create a new `.html` file using `impro-kapciu.html` as a structural template.
2. Update the `path` in the `context-bar` to reflect the new project name.
3. In `design.html`, add a new `.wiki-entry` to the `.wiki-grid`.

### Updating Music (witbezkacy):

1. Add the latest release to the `archive-table` in `music.html`.
2. For featured releases, add a `.wiki-entry` to the `.featured-grid` to enable the mobile horizontal scroll.

---

Built with intentionality by Andrzej Śleszyński.
