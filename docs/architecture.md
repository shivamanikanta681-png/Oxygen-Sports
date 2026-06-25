# System Architecture Diagram & Frontend Scope (Student 1)

This document diagrams the system components and plans the remaining user interface screens.

---

## 1. System Architecture Diagram

```mermaid
graph TD
    subgraph Frontend Client (React)
        EntryForm[Donation Entry Form]
        Dashboard[Dashboard Grid]
        DetailsDrawer[Details & History Drawer]
        ReportsPanel[Reports & Analytics Dashboard]
    end

    subgraph REST API Server (Node.js & Express)
        Router[API Routing Controller]
        LogicEngine[Core Business Logic Processing Engine]
        Validation[Request Parameter Validation Middleware]
    end

    subgraph Database Layer (SQLite)
        SponsorshipTable[(sports_event_sponsorship_kit_donation)]
        AuditLogsTable[(audit_logs)]
    end

    %% API Connections
    EntryForm -->|POST /api/sports_event_sponsorship_kit_donati| Router
    Dashboard -->|GET /api/sports_event_sponsorship_kit_donati| Router
    DetailsDrawer -->|GET /api/sports_event_sponsorship_kit_donati/:id| Router
    DetailsDrawer -->|GET /api/sports_event_sponsorship_kit_donati/:id/engine_analysis| Router
    ReportsPanel -->|GET /api/sports_event_sponsorship_kit_donati/summary| Router

    %% Logic to Database
    Router --> Validation
    Validation --> LogicEngine
    LogicEngine -->|INSERT / SELECT / UPDATE| SponsorshipTable
    LogicEngine -->|INSERT Trigger / Hook| AuditLogsTable
    SponsorshipTable -.->|Foreign Key constraints| AuditLogsTable
```

---

## 2. Frontend Scope Remaining Plan

To deliver a premium business tool, the following interface panels are planned for implementation in the next phase:
1. **Sponsorship Edit Form**:
   * *Features*: Pre-fills values using GET `/api/sports_event_sponsorship_kit_donati/:id` and updates database properties via PUT.
2. **Audit Logs Management Panel**:
   * *Features*: Accesses logs directly via GET `/api/audit_logs` to show complete transaction changes across all events.
3. **Reports & Trend Charts**:
   * *Features*: Fetches metrics from the summary route and renders interactive category distributions and expense bars.
