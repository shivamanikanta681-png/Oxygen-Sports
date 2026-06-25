# Remaining Backend Work Plan (Student 2)

This document outlines the scheduled developments for remaining API endpoints and data analysis query hooks.

---

## 1. Remaining API Routes Specification

### 1.1 Complete Sponsorship Update
* **Route**: `PUT /api/sports_event_sponsorship_kit_donati/:id`
* **Purpose**: Updates all fields of a specific log entry. Evaluates validation checks (e.g. if updated item quantities exceed updated budget).
* **Database Action**: Updates `sports_event_sponsorship_kit_donation` and logs change parameters into `audit_logs`.

### 1.2 Status State Transition
* **Route**: `PATCH /api/sports_event_sponsorship_kit_donati/:id/status`
* **Purpose**: Specifically transitions the workflow status (Draft -> Approved -> Disbursed -> Completed).
* **Validation**: Ensures status transitions are logical (cannot transition backward once Completed).

### 1.3 Audit History Retrieval
* **Route**: `GET /api/audit_logs`
* **Purpose**: Retrieves all audit trace logs across the entire system.
* **Filters**: Supports filtering logs by target `sponsorship_id`.

---

## 2. Analytics & Summaries Routes

### 2.1 Aggregated Summaries
* **Route**: `GET /api/sports_event_sponsorship_kit_donati/summary`
* **Purpose**: Generates high-speed statistics for the analytics charts.
* **Returned Calculations**:
  * Total funds spent vs. budget arrays (organized by Category and Month).
  * Brand visibility achievements ratio.
  * System alerts summaries.
