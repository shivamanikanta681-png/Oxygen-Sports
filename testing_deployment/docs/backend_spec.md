# Backend System Specification & Abstract (Student 2)

## Problem Statement (Data & Logic Perspective)
From a database and business logic perspective, the manual tracking of sponsorships at Oxygen Sports causes severe data integrity issues. Because information resides in flat files, chat histories, or paper registers, there is no relational validation or constraint checking. This lack of centralized data storage allows duplicate donation logs, incorrect currency and value calculations, and unmatched sponsorship-to-event relationships. There is no automated transaction auditing or logging, meaning edits or deletions go unmonitored. Consequently, compiling reports is a slow, manual query process that is highly susceptible to human error, and there is no reliable way to run automated analytical summaries.

---

## 3 Critical Business Rules
To enforce business rules and maintain data integrity, the backend engine must validate and compute:
1. **Donation Value Validation**: The calculated total monetary value of items in any single kit donation must not exceed the approved budget of the corresponding sponsorship transaction.
2. **Mandatory Visibility Fields & Quality Score**: Every donation transaction must log at least one primary visibility type (e.g., banner, logo, social media) to compute a visibility ROI score. The system will enforce a validation check where a sponsorship cannot be marked as "Completed" unless the visibility status is explicitly logged as "Fully Received" or "Partially Received".
3. **Audit Logging Enforcement**: Any state changes in the database (e.g., status changes from `Approved` to `Disbursed` or `Completed`) must write an immutable record into the `audit_logs` table detailing who performed the change, the timestamp, the previous status, and the new status.

---

## Technical Abstract
The backend of the Sports Event Sponsorship & Kit Donation Tracker is engineered as a RESTful API built on **Node.js** and **Express.js**, backed by a relational database schema (**PostgreSQL/MySQL**). 

The database contains two core tables:
* `sports_event_sponsorship_kit_donation`: Stores event details (name, date, target audience), items list (serialized JSON or related items table), budget, and visibility tracking.
* `audit_logs`: Keeps a strict log of operations to ensure traceability of data entry and status modifications.

The processing engine handles validation middleware (checking parameters and budget ranges) and implements business rules to calculate ROI scores. The API serves JSON responses to the frontend client, enabling real-time UI rendering and dynamic search filtering.
