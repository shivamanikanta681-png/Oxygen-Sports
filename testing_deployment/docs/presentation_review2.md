# Review 2: Presentation Slides & Script (Day 14 - 16 June 2026)

This document contains the slide structure, visual highlights, and speaker scripts for Review 2.

---

## Slide 1: Review 2 Title & Status Overview
* **Visual Highlights**: 
  * Title: **Sports Event Sponsorship & Kit Donation Tracker**
  * Evaluator: **Pamba Vamshi Krishna Sir**
  * Status: Database successfully migrated, CRUD APIs integrated, Frontend forms & dynamic dashboard built.
* **Speaker Script (Student 1 - 30 seconds)**: 
  * "Good morning evaluators. Today we are presenting Review 2 for the Oxygen Sports tracker. Since Review 1, our database has been successfully initialized, all endpoint schemas completed, and our React frontend pages are fully connected to live APIs."

---

## Slide 2: Literature Survey Highlights (Student 3)
* **Visual Highlights**:
  * Citations table listing References 1-5.
  * Bullet links: Cognitive impact of status badges (Ref 4), Transaction security of API audit logs (Ref 5).
* **Speaker Script (Student 3 - 2 minutes)**:
  * "For our literature survey, we analyzed 5 core academic works. References 1 and 2 justify the business need for visibility and audit trailing. Reference 3 validates core validation checks on request parsing. Reference 4 proves that color status pills boost user search speed by 40% on dashboards. Finally, Reference 5 shows that API-driven audit snapshots in Node minimize data discrepancies."

---

## Slide 3: Existing System Analysis & Gap Report (Student 3)
* **Visual Highlights**:
  * Benchmarking grid matching: OpenSponsorship, CSRBOX, vs. Oxygen Sports Tracker.
  * Structural gap points (Rigid forms, lack of budget calculation hooks).
* **Speaker Script (Student 3 - 2 minutes)**:
  * "Existing systems are built for external matchmaking or heavy corporate compliance. They lack interactive data entry and instant budget overflow validation flags. The Oxygen Sports tracker fills this gap by offering single-screen dynamic entries and localized relational checks tailored for immediate retail operation."

---

## Slide 4: Proposed System UI Flow (Student 1)
* **Visual Highlights**:
  * Graphic illustrating screen layout components.
  * Entry Form field list: `items donated`, `brand visibility received`, `status`, `created_date`, `notes`.
  * Dashboard features: Status colored pills, instant keyword search, and loading spinner controls.
* **Speaker Script (Student 1 - 2 minutes)**:
  * "Our proposed UI flow starts at the Entry Form. The form calculates subtotals on key-press and evaluates budget limits. The Dashboard displays these logs dynamically, letting managers filter records by status and search item parameters. We added a loading spinner and an empty state handler to ensure smooth UX."

---

## Slide 5: System Database Schema & ERD (Student 2)
* **Visual Highlights**:
  * Entity-Relationship schema diagram.
  * Primary Keys, Foreign Keys, 1:N cardinality connection.
  * SQLite JSON columns representation details.
* **Speaker Script (Student 2 - 2 minutes)**:
  * "We implemented our database in SQLite to support relational constraints. The `sports_event_sponsorship_kit_donation` table stores serialization strings of items and visibility options. A 1-to-many relationship links records to the `audit_logs` table, which automatically takes metadata snapshots when status updates are triggered."

---

## Slide 6: Core Business Logic Processing Engine (Student 2)
* **Visual Highlights**:
  * Business rules pipeline diagram.
  * Utilization check formula, ROI weight scoring, and trend warning flags rules.
* **Speaker Script (Student 2 - 2 minutes)**:
  * "Our core logic processing engine evaluates transaction efficiency. It calculates budget utilization ratios and counts secured visibility assets. It uses a weighted formula to compute an ROI score index. The engine automatically tags status warnings (e.g. 'High Cost, Low Exposure') to help managers identify underperforming sponsorships."

---

## Slide 7: API Summary & Testing Metrics (Student 3)
* **Visual Highlights**:
  * REST API routing list.
  * Test progress tracker summary showing 10 PASS results.
* **Speaker Script (Student 3 - 1.5 minutes)**:
  * "We have configured standard POST and GET routes, including the logic engine analysis endpoint. Our QA verified endpoints against 10 test parameters. Validation checks successfully identify missing fields, quantities, and budget overflows, returning clean JSON errors to the client form. We are prepared to proceed with the final analytics implementation."
