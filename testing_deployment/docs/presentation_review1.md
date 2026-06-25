# Review 1: Presentation Slides & Script (Day 5 - 05 June 2026)

This document contains the slide structure, visual layout guides, and delivery scripts for the Review 1 presentation.

---

## Slide 1: Title & Team Introduction
* **Visual Structure**: 
  * Title: **Sports Event Sponsorship & Kit Donation Tracker**
  * Client: **Oxygen Sports**, Hyderabad
  * Roles & Presenters:
    * Student 1 (Frontend Developer): User Interfaces & Dashboards
    * Student 2 (Backend Developer): REST API, Database Schema & Core Logic Engine
    * Student 3 (QA & Deployment): Automated Testing & Server Deployment
* **Speaker Script (Student 1 - 30 seconds)**: 
  * "Good morning, respected evaluators. Today, we are presenting our Sports Event Sponsorship and Kit Donation Tracker prototype, custom-engineered for Oxygen Sports in Hyderabad. Our project aims to digitalize and optimize how sports equipment donations and tournament sponsorships translate into measurable brand value."

---

## Slide 2: Company Background & Context
* **Visual Structure**:
  * **Oxygen Sports**: Sports goods retail & wholesale dealer.
  * **Location**: Hyderabad, India.
  * **Operations**: Sponsors local school leagues, youth tournaments, academies, and clubs by donating sports kits (cricket, football, gear) to secure brand exposure.
* **Speaker Script (Student 1 - 30 seconds)**:
  * "Oxygen Sports is a premium sports dealer supplying kits, gear, and footwear across Hyderabad. To build local goodwill and brand presence, they frequently sponsor community tournaments and donate equipment to schools. However, there is currently no structured system to record these investments."

---

## Slide 3: Problem Statement
* **Visual Structure**:
  * **Manual Gaps**: Information scattered across papers, WhatsApp chats, and flat spreadsheets.
  * **Operational Risks**: Double-booking donations, budget overruns, and missing promised visibility items (e.g. forgot boundary banners or logo prints).
  * **Strategic Gap**: Impossible to measure brand visibility and calculate ROI on sponsorships.
* **Speaker Script (Student 1 - 1 minute)**:
  * "Without a central digital system, managing sponsorships and tracking visibility becomes chaotic. Records are scattered, details are lost, and the business cannot answer basic questions like: 'Did we get the promised banner exposure for the kit we donated?' The lack of a validation workflow wastes administrative hours and prevents calculation of marketing ROI."

---

## Slide 4: Frontend Wireframe: Entry Form & Dashboard
* **Visual Structure**:
  * Graphic showing ASCII mockups of:
    * **Entry Form**: Input blocks for Event Details, Kit Items List (Item, Category, Qty, Unit Cost), Visibility checkboxes, and budget limits.
    * **Dashboard**: Search box, filter status selectors, and list table showing sponsorship records.
* **Speaker Script (Student 1 - 1 minute)**:
  * "Our frontend contains four primary screens. The Entry Form captures event details, item costs, and brand visibility requirements with strict frontend validations to block invalid numeric entries. The Dashboard offers managers quick status metrics and immediate filtering to locate specific records dynamically."

---

## Slide 5: Frontend Wireframe: Details Modal & Analytics
* **Visual Structure**:
  * Graphical mockups of:
    * **Details Drawer**: Logs timeline changes showing how the record went from 'Approved' to 'Disbursed' and 'Completed'.
    * **Analytics Screen**: Spend charts (by Category) and visibility success rates.
* **Speaker Script (Student 1 - 30 seconds)**:
  * "To ensure data visibility, the Detail Drawer logs status change histories for every transaction. Lastly, the Analytics Dashboard renders real-time trend charts tracking spending categories and brand visibility returns to help management decide where next to sponsor."

---

## Slide 6: Proposed Solution & Tech Stack (Student 2)
* **Visual Structure**:
  * **Frontend**: HTML5, Vanilla CSS, JavaScript / React
  * **Backend Node Engine**: Express.js server providing routing and validation checks.
  * **Data Layer**: SQLite/PostgreSQL relational database storing sponsorships and audit logs.
  * **Charts**: Chart.js / Recharts for visualizations.
* **Speaker Script (Student 2 - 1 minute)**:
  * "Our solution is a full-stack web application. The frontend communicates with our Node/Express REST API. The backend processes request validation checks, aggregates statistics, and records them in a SQL schema. We chose SQL to maintain strict constraints between sponsorship items and their corresponding audit trails."

---

## Slide 7: Core Logic Engine & APIs (Student 2)
* **Visual Structure**:
  * Diagram of the Validation Pipeline:
    1. Check if total cost of items > approved budget.
    2. Check if brand visibility criteria are logged.
    3. Update main record -> write row in `audit_logs`.
  * API Signature Table:
    * `POST /api/sports_event_sponsorship_kit_donati` (Submit Log)
    * `GET /api/sports_event_sponsorship_kit_donati` (List & Search)
    * `PUT /api/sports_event_sponsorship_kit_donati/:id` (Audit Update)
* **Speaker Script (Student 2 - 2 minutes)**:
  * "We built custom REST routes to process data logs. When staff submits a donation entry, the business logic validates that the calculated item costs do not exceed the approved budget limit. If validation checks pass, it persists data and generates a tracking log entry. Any change in transaction status immediately triggers an automated insert inside our immutable audit log table."

---

## Slide 8: Objectives & Project Abstract (Student 3)
* **Visual Structure**:
  * List of Key Quality Goals:
    * 100% correct calculation of item list costs.
    * Automation of audit entries on status updates.
    * High-accuracy search and status filtering on the dashboard.
* **Speaker Script (Student 3 - 1 minute)**:
  * "As quality assurance, our objectives guarantee that all business rules are verified. The abstract centers on giving Oxygen Sports staff an intuitive form, while providing management with robust, error-free analytics. By deploying this system, we eliminate paperwork errors and automate tracking logs."

---

## Slide 9: Test Plan & Case Breakdown (Student 3)
* **Visual Structure**:
  * **15 Test Cases Coverage**:
    * Entry Form: Valid inputs, negative quantities, budget range violations.
    * Dashboard: Empty search results, status sorting, dropdown filters.
    * API & Security: `/health` route, SQL transaction checks, invalid POST structure.
* **Speaker Script (Student 3 - 2 minutes)**:
  * "We have documented a suite of 15 test cases. Our QA approach verifies both the frontend fields and API inputs. We validate edge cases like negative item entries and budget limit overrides to keep backend processes secure. The GET health route is already operational, and mock presentation times are successfully tested."
