# Relational Schema & Database Design (Student 2)

This document contains the complete relational schema design, ER diagram structure, and backend database rules for the tracker.

---

## 1. Schema Schema Definitions

### 1.1 Sponsorship & Donation Table
* **Table Name**: `sports_event_sponsorship_kit_donation`
* **Columns**:
  * `id`: `INTEGER PRIMARY KEY AUTOINCREMENT`
  * `event_name`: `VARCHAR(255) NOT NULL`
  * `event_date`: `DATE NOT NULL`
  * `category`: `VARCHAR(50) NOT NULL` (Constraint: School, Tournament, Academy, Club)
  * `budget_limit`: `DECIMAL(10, 2) NOT NULL DEFAULT 0.00`
  * `items_donated`: `TEXT NOT NULL` (JSON array representing itemized names, quantities, unit costs)
  * `brand_visibility_received`: `TEXT NOT NULL` (JSON object listing visibility check statuses)
  * `status`: `VARCHAR(50) NOT NULL DEFAULT 'Approved'` (Constraint: Draft, Approved, Disbursed, Completed)
  * `notes`: `TEXT`
  * `total_cost`: `DECIMAL(10, 2) NOT NULL DEFAULT 0.00`
  * `created_at`: `TIMESTAMP DEFAULT CURRENT_TIMESTAMP`
  * `updated_at`: `TIMESTAMP DEFAULT CURRENT_TIMESTAMP`

### 1.2 Audit Logs Table
* **Table Name**: `audit_logs`
* **Columns**:
  * `id`: `INTEGER PRIMARY KEY AUTOINCREMENT`
  * `sponsorship_id`: `INTEGER NOT NULL` (Foreign Key referencing `sports_event_sponsorship_kit_donation(id)`)
  * `items_donated`: `TEXT` (JSON snapshot of items during status change)
  * `brand_visibility_received`: `TEXT` (JSON snapshot of visibility assets during status change)
  * `status`: `VARCHAR(50) NOT NULL` (New status changed to)
  * `changed_by`: `VARCHAR(100) NOT NULL DEFAULT 'System/Staff'`
  * `created_at`: `TIMESTAMP DEFAULT CURRENT_TIMESTAMP`
  * `updated_at`: `TIMESTAMP DEFAULT CURRENT_TIMESTAMP`

---

## 2. Entity-Relationship Diagram (ERD)
```
  +--------------------------------------------+
  | sports_event_sponsorship_kit_donation      |
  +--------------------------------------------+
  | PK  id: INTEGER                            |
  |     event_name: VARCHAR(255)               |
  |     event_date: DATE                       |
  |     category: VARCHAR(50)                  |
  |     budget_limit: DECIMAL                  |
  |     items_donated: TEXT (JSON)             |
  |     brand_visibility_received: TEXT (JSON) |
  |     status: VARCHAR(50)                    |
  |     notes: TEXT                            |
  |     total_cost: DECIMAL                    |
  |     created_at: TIMESTAMP                  |
  |     updated_at: TIMESTAMP                  |
  +---------------------+----------------------+
                        |
                        | (1) has
                        |
                        | (0..*) generates
  +---------------------v----------------------+
  | audit_logs                                 |
  +--------------------------------------------+
  | PK  id: INTEGER                            |
  | FK  sponsorship_id: INTEGER                |
  |     items_donated: TEXT (JSON)             |
  |     brand_visibility_received: TEXT (JSON) |
  |     status: VARCHAR(50)                    |
  |     changed_by: VARCHAR(100)               |
  |     created_at: TIMESTAMP                  |
  |     updated_at: TIMESTAMP                  |
  +--------------------------------------------+
```
* **Cardinality**: `1` record in `sports_event_sponsorship_kit_donation` can map to `0` or `many` entries in `audit_logs` (1:N relationship).

---

## 3. Validation Logic & Edge Cases

1. **Items Cost Edge Case**: When processing the items array:
   $$\text{Total Cost} = \sum (\text{item.qty} \times \text{item.unitCost})$$
   If any row quantity is $\le 0$, the server must reject it.
2. **Budget Threshold Checks**: The logic compares calculated `total_cost` against `budget_limit`. If cost matches limit exactly, validation passes (Happy boundary). If cost exceeds by as little as 0.01, the system blocks the query.
3. **Audit Log Hook**: On every execution of a status change (PUT query), the transaction must first verify status transitions. If status transitions from `Disbursed` to `Completed`, an automated database entry records the full state snapshot into the logs table.
