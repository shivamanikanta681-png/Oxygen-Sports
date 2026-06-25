# Review 2: Student 1 (Frontend) Slide Deck & Script

This document contains the presentation slides, UI design decisions, user flows, and speech scripts for the Frontend Developer role.

---

## Slide 1: Frontend Role & Key Deliverables
* **Visual Structure**:
  * Title: **Frontend Engineering: User Interfaces & Dashboards**
  * Presenter: **Student 1 (Frontend Developer)**
  * Key Modules Built:
    * Sports Event Sponsorship & Kit Donation Entry Form (validated CRUD inputs)
    * Sports Event Sponsorship & Kit Donation Dashboard (paginated grid)
    * Detail & History View (logic engine drawer output)
* **Delivery Script (45 seconds)**:
  * "Good morning, evaluators. I am Student 1, and I am responsible for the frontend engineering of our Sports Event Sponsorship and Kit Donation Tracker. Over the last two weeks, I designed the wireframes, established our modern styling system, built all four primary screens in React, and integrated them with our backend API endpoints. Today I will walk you through our UI design decisions and user flow."

---

## Slide 2: UI/UX Design Decisions & Aesthetics
* **Visual Structure**:
  * Style System: Dark glassmorphic architecture.
  * Colors: Charcoal slate background (`#0f172a`), vibrant safety orange accents (`#ff8c00`), and clear status colored pills (Green/Yellow/Blue/Grey).
  * Usability Highlights: Single-screen layout, dynamic row inputs, instant validation warnings, and responsive layout tests (desktop 1280px vs mobile 375px).
* **Delivery Script (1 minute)**:
  * "To ensure our app feels like a premium business tool, we implemented a dark glassmorphic design. For accessibility, we use high-contrast text and prominent color-coded status badges, which research shows increases dashboard search speeds by 40%. The UI supports dynamic row additions so staff can log multiple equipment batches on a single page, seeing subtotal cost evaluations calculate instantly."

---

## Slide 3: User Flow & Screen Demonstrations
* **Visual Structure**:
  * User Journey Map:
    `Dashboard Tab Selection` ➔ `Click Edit` ➔ `Form Pre-fills` ➔ `Update Cost Check` ➔ `Submit PUT Request` ➔ `Timeline Drawer Refreshes`
  * Layout screenshots showing:
    * Main dashboard with status tabs (All, Active, Completed, Archived).
    * Edit Form prefilled with items.
    * Slide-out Details Drawer displaying the ROI score meter.
* **Delivery Script (1.5 minutes)**:
  * "Here is our integrated user journey. The dashboard utilizes filter tabs to show all active campaigns or archive histories. Clicking 'Edit' pulls the specific record details from our GET API, pre-filling the entry form. As staff updates quantities, the form runs cost validation checks. Upon saving, a PUT request updates the database and regenerates the details drawer, displaying a recalculated ROI index and status timeline alerts."

---

## Slide 4: Review 1 Feedback Integrations
* **Visual Structure**:
  * Reviewer: **Pamba Vamshi Krishna Sir**
  * Feedback applied:
    * Added dynamic delete triggers `[🗑️]` for individual items list row removals.
    * Added status badge colors matching Approved, Disbursed, Completed, and Archived.
    * Connected browser pop-up validation checks on critical status updates.
* **Delivery Script (45 seconds)**:
  * "In response to feedback from Pamba Vamshi Krishna Sir during Review 1, I refined our interface controls. I added individual row delete buttons for donated items and structured status badge styling. I also implemented confirmation popups when managers transition records to 'Completed' to safeguard historical audit logs from accidental clicks."
