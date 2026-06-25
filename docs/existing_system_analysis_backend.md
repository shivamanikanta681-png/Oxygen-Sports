# Existing System Backend & Data Architecture Analysis (Student 2)

This document provides a backend-focused analysis comparing existing database platforms with the proposed **Sports Event Sponsorship & Kit Donation Tracker** for Oxygen Sports.

---

## 1. System Comparison Table

| System Name | Core Backend Features | Technical Limitations / Architecture Gaps | Gap Filled by Oxygen Sports Tracker |
| :--- | :--- | :--- | :--- |
| **OpenSponsorship API** | Matchmaking databases, Stripe integration, Messaging server | Multi-tenant schema adds massive overhead; lacks simple, high-speed API endpoints to aggregate physical kit inventory counts. | Simple, lightweight API routes specifically for CRUD operations on local sports kits and brand visibility metrics. |
| **CSRBOX Impact DB** | Static donation storage, CSV invoice uploads, Basic reporting | Lacks automated audit log triggers on row modifications; no relational budget check constraints applied during API request parsing. | Implements Express.js middleware validating costs against limits, and SQLite triggers recording audit logs automatically on state changes. |

---

## 2. Why Our Tracker is Suited for Oxygen Sports

The **Sports Event Sponsorship & Kit Donation Tracker** backend is uniquely suited to Oxygen Sports because it bridges the operational gap between retail inventory management and brand value tracking. Unlike general ERP software that treats sponsorships as simple expense ledger entries, our backend relational database maps kit items, categories, and promised brand visibility metrics directly to each event. By using local database constraints, the system prevents staff from logging donations that exceed approved budgets, and forces the input of marketing assets (e.g., banners, social media posts). This ensures that every rupee spent on local school tournaments is systematically tracked for audit purposes, generating clean aggregate data that management can immediately query to measure brand equity returns.
