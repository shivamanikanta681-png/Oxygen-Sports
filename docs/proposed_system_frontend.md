# Proposed System Description & Frontend Specification (Student 1)

This document describes the user interfaces, user flows, and operational shifts for the **Sports Event Sponsorship & Kit Donation Tracker**.

---

## 1. Frontend Screen Specifications

### 1.1 Sports Event Sponsorship & Kit Donation Entry Form
* **Purpose**: Allows store staff to input, validate, and submit new sponsorship and donation logs.
* **Actors**: Store Staff, Managers.
* **Inputs**:
  * Event / Recipient Name (Text)
  * Target Category (Dropdown: School, Tournament, Academy, Club)
  * Event Dates (Date range: Start to End)
  * Itemized Kit List (Dynamic table: Item Name, Quantity, Unit Cost)
  * Approved Budget Limit (Numeric)
  * Visibility secured (Checklist: Banners, Jersey Logo, Social Posts, Speeches)
  * Visibility Notes & Admin Remarks (Text fields)
* **Outputs**:
  * Success message / Database reference ID (on validation pass)
  * Budget constraint error flags (describing exceed margins)
  * Field-level validation alerts (for empty fields or negative amounts)

### 1.2 Sports Event Sponsorship & Kit Donation Dashboard
* **Purpose**: Serves as the primary operational workspace to search, filter, and view current sponsorship cases.
* **Actors**: Store Staff, Managers, Business Owners.
* **Inputs**:
  * Text query search matching event name.
  * Category filter select options.
  * Status filter select options.
* **Outputs**:
  * Structured table containing: ID, Recipient Name, Total Value, Category, Colored Status Badges, and "View Details" click triggers.
  * Real-time metrics panel: Total Spends (₹), Pending Shipments count, Visibility Achievement rate.

### 1.3 Detail & History View (Drawer/Modal)
* **Purpose**: Displays full administrative parameters and status logs of a selected sponsorship.
* **Actors**: Store Staff, Managers.
* **Inputs**: Selection click trigger from the dashboard rows.
* **Outputs**:
  * Detailed lists of items donated and visibility commitments.
  * Chronological status audit logs showing historical transitions.

### 1.4 Reports & Analytics Dashboard
* **Purpose**: Renders charts summarizing expenditure patterns and marketing effectiveness.
* **Actors**: Managers, Business Owners.
* **Inputs**: Timeline period selection options (Past 30 Days, Year-to-Date).
* **Outputs**:
  * Expenditure Pie Chart showing category distributions.
  * Budget VS Spend comparisons Bar chart.
  * Quality rate list representing brand visibility targets met.

---

## 2. Process Comparison: Manual VS Digital

| Feature Area | Current Manual Process (Oxygen Sports) | Proposed Digital System (Tracker) |
| :--- | :--- | :--- |
| **Sponsorship Logs** | Recorded in paper logbooks, WhatsApp chats, and personal spreadsheets. | Relational database storage accessible from a single portal. |
| **Budget Validation** | Manual arithmetic done by staff; budget limits verified via memory or email. | Instant calculated subtotals and database boundary checks checking overflows. |
| **Operational Updates** | Staff updates status by verbal notes or text messages; no audit trail. | Integrated status updates with automated triggers logging modifications in an audit table. |
| **ROI Reporting** | Manually calculated and compiled over days for reviews. | Dynamic trend charts displaying spending and visibility metrics on-demand. |
