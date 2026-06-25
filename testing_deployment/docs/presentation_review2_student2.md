# Review 2: Student 2 (Backend) Slide Deck & Script

This document contains the presentation slides, database schema design, REST APIs, core logic worked examples, and speech scripts for the Backend Developer role.

---

## Slide 1: Backend Role & Architecture
* **Visual Structure**:
  * Title: **Backend Engineering: Express APIs, Relational Database & Core Logic**
  * Presenter: **Student 2 (Backend Developer)**
  * Stack: Node.js, Express, SQLite3, SQL Migrations.
  * System Architecture Map (Node API Broker connecting Client to SQLite DB).
* **Delivery Script (45 seconds)**:
  * "Good morning, evaluators. I am Student 2, responsible for the database engineering and core logic processing backend of the tracker. I initialized our Node/Express REST API, migrated our relational database schema using SQLite, and developed the business logic calculation engine. Today, I will present our schema, REST endpoints, and the calculation engine outputs."

---

## Slide 2: Database Schema & ERD
* **Visual Structure**:
  * ER Diagram displaying tables:
    * `sports_event_sponsorship_kit_donation` (ID, event_name, event_date, category, budget_limit, items_donated (JSON), brand_visibility_received (JSON), status, total_cost, audit parameters)
    * `audit_logs` (ID, FK sponsorship_id, items snapshot, visibility snapshot, status, changed_by)
  * Constraints: 1:N cardinality, foreign key cascade, serialized JSON columns.
* **Delivery Script (1 minute)**:
  * "We structured our data model into two tables linked by a 1-to-many relationship. The main table stores event details, approved budgets, and serialized JSON fields for kit items and visibility metrics. The audit table logs immutable records of status changes, tracking the history of updates made by users. This design ensures relational safety and prevents orphaned database records."

---

## Slide 3: REST API Endpoints & Routes Summary
* **Visual Structure**:
  * API Endpoint Table:
    * `POST /api/sports_event_sponsorship_kit_donati` (Create record)
    * `GET /api/sports_event_sponsorship_kit_donati` (List with filters & SQL offset pagination)
    * `GET /api/sports_event_sponsorship_kit_donati/:id` (Retrieve detail record)
    * `PUT /api/sports_event_sponsorship_kit_donati/:id` (Full record update)
    * `PATCH /api/sports_event_sponsorship_kit_donati/:id/status` (Status workflow update)
    * `GET /api/audit_logs` (Audit trails)
* **Delivery Script (1 minute)**:
  * "Our API is structured around REST principles. We built creation endpoints with middleware validations, detail queries, and update controllers. To ensure dashboard performance under high load, the list API implements pagination using SQL LIMIT and OFFSET parameters. We also built a status PATCH route that updates workflow flags and inserts history trails automatically."

---

## Slide 4: Core Logic Processing Engine (Worked Example)
* **Visual Structure**:
  * Core Business Logic Rules:
    * Budget Utilization Ratio: $\frac{\text{Total Cost}}{\text{Budget Limit}} \times 100$
    * ROI Score Index: $(0.6 \times \text{Exposure Score}) + (0.4 \times \text{Savings Score})$
  * Worked Example Case:
    * *Sponsorship Budget Limit*: ₹10,000. *Items Cost*: ₹9,000 (90% Utilization).
    * *Secured Visibility count*: 2 assets checked (exposure: 50).
    * *Outputs*: ROI Score Index: `34.00`. Trend Indicator: `"NOTICE: High Budget Utilization"`.
* **Delivery Script (1.15 minutes)**:
  * "Our core business logic processing engine runs automated ROI indexing. In this worked example, the system processes a sponsorship with a budget of ₹10,000 and item values totaling ₹9,000, calculating a 90% budget utilization. With 2 visibility assets checked, it computes an ROI Index of 34 out of 100. It flags the entry as 'High Budget Utilization' so management knows this campaign carries high cost relative to its brand exposure."
