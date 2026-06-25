# Presentation Slides - Sports Event Sponsorship & Kit Donation Tracker

**Company**: Oxygen Sports, Hyderabad  
**Academic / Project Iteration**: Review 2 Final Delivery  
**Authors**: Student 1 (Frontend), Student 2 (Backend), Student 3 (Testing & Deployment)

---

## Slide 1: Project Title & Team
- **Project Name**: Sports Event Sponsorship & Kit Donation Tracker
- **Target Enterprise**: Oxygen Sports, Hyderabad
- **Team Roles**:
  - **Student 1 (Frontend)**: User Interface, Entry Forms, Dashboards, and Analytics.
  - **Student 2 (Backend)**: REST API development, database schema & audit logging.
  - **Student 3 (Testing & Deployment)**: Automated & manual test suites, API verification, and cloud/local deployment.
- **Production Status**: Deployed & fully integrated on Live URLs.

---

## Slide 2: Problem Statement & Industrial Context
- **Manual Spreadsheet Limitations**: Oxygen Sports previously logged CSR and marketing sponsorships via excel files, resulting in double-allocation and data discrepancies.
- **Budget Overruns**: Lack of automated controls allowed physical kit estimates to exceed budget limits unnoticed.
- **ROI Inefficiencies**: No mechanism existed to measure visibility placement returns (banners, logo space) against donation expenditures.

---

## Slide 3: Proposed Solution Specifications
- **Centralized Tracker**: A unified web console logging all sports sponsorship contracts, recipients, and items.
- **Automated Validation**: strict endpoint checks comparing item costs against approved limits before persistence.
- **Dynamic Metrics Indexing**: Real-time evaluation of ROI visibility index ratios.
- **Workflow Audit Trails**: Auto-generated timeline logs tracking every state transition.

---

## Slide 4: System Architecture Schema
- **Frontend Layer**: React + Vite + CSS styles. A premium glassmorphic dark-mode interface.
- **Backend API Layer**: Express server handling REST routing and ROI logic evaluations.
- **Database Layer**: SQLite configuration for offline local development, migrating automatically to a production PostgreSQL database when deployed on cloud services.

---

## Slide 5: SQLite/PostgreSQL Hybrid Database Layer
- **Multi-DB Portability**: Custom database mapping engine in [db.js](file:///C:/Users/Shiva/.gemini/antigravity/scratch/oxygen-sports-tracker/backend/db.js).
- **Auto Parameter Translation**: Maps standard SQLite parameterized query markers (`?`) to PostgreSQL indexed binds (`$1`, `$2`).
- **Last ID Emulation**: Intercepts insertions returning pg rows to capture generated IDs via `RETURNING id` filters.

---

## Slide 6: Core ROI Indexing Engine Math
- **Brand placement Exposure ($E$)**:
  - `visibilityCount * 25` (up to 4 checked visibility assets)
- **Budget Savings Factor ($S$)**:
  - `Math.max(0, 100 - budgetUtilization)`
- **Final Computed ROI Score Index**:
  - \[ROI\_Score = (E \times 0.6) + (S \times 0.4)\]

---

## Slide 7: UI Forms & Interactive Prints
- **Entry Form**: Dynamic repeater list for adding/removing items, automatic cost calculations, and live warnings on limit breaches.
- **Native Print Layouts**: Custom `@media print` CSS overrides that hide UI navigation buttons, side drawers, and background slates, outputting clean, professional invoices.

---

## Slide 8: UI Dashboard & Glassmorphic Aesthetics
- **Premium Themes**: Slate cards, glass panels, color status badge pills.
- **UX Helpers**: Spinning loading indicators during async fetches, custom empty states on search filter misses.
- **Metrics Widget**: Sticky metrics overview cards displaying spends, active counts, and critical warning flags.

---

## Slide 9: Reports & SVG Dynamic Charts
- **Analytics Dashboard**: Dynamic metrics summaries filtered by From/To dates.
- **Category Spend Bar Graph**: Dynamic SVG bar heights rendering relative spends per target category.
- **Time-Series Expenditures**: SVG line charts tracking daily CSR allocations over the last 30 days.

---

## Slide 10: Test Execution Tracker Matrix
- **Testing Scope**: Unit checks, REST validations, CRUD pipelines, logic thresholds, and database resets.
- **Overall Scores**: 53 Master test cases executed and passed on live URL.
  - **Pass Rate**: **100% (53 / 53 passed)**
- **Bug Resolution**: Resolved SQL binding crashes under postgres, Express parser crashes on malformed bodies, and print overrides.

---

## Slide 11: Production Cloud Deployment
- **Database**: PostgreSQL database instance deployed on **Supabase**.
- **Backend Service**: Express backend hosted on **Render** (linked with Postgres).
- **Client Hosting**: React single page application built and deployed on **Vercel**.
- **Secure Environment Variables**: `DATABASE_URL` (Postgres connections), `PORT`, and `VITE_API_URL` (Client-to-Server path).

---

## Slide 12: Conclusion & Future Enhancements
- **Project Achievements**: Standardized physical inventory flows, blocked all overbudget attempts, and automated investment reviews.
- **Future Enhancements**:
  1. **Image Recognition**: Automatically verify banners/jerseys via image analysis.
  2. **Push Notification Alerts**: Coded status updates triggering real-time SMS/emails.
  3. **Predictive Allocations**: ML recommendations matching budget limits.
