# Existing System UI Analysis (Student 1 - Frontend)

This document provides a frontend-focused evaluation comparing existing market platforms with the proposed **Sports Event Sponsorship & Kit Donation Tracker** for Oxygen Sports.

---

## 1. UI Evaluation of Benchmark Systems

### Benchmark 1: OpenSponsorship (UI/UX Review)
* **Design Pattern**: Large-scale athlete-sponsor matchmaking portal.
* **UI Features**: Offers highly complex multi-stage registration Wizards and brand filters.
* **Limitations for Oxygen Sports**: The interface is designed for global enterprise campaigns. It lacks a simplified quick-entry interface for store staff loading physical inventory batches (like balls, bats, and guards). The dashboards are cluttered with marketing analytics, billing logs, and messaging channels that are irrelevant to a local sports retail shop.

### Benchmark 2: CSRBOX Platform (UI/UX Review)
* **Design Pattern**: Large social responsibility impact tracking dashboard.
* **UI Features**: Features static form panels to submit donation invoices and upload photos of community distribution events.
* **Limitations for Oxygen Sports**: The data entry forms are rigid, non-interactive, and do not provide real-time budget limit alerts as items are typed. Furthermore, the dashboard lacks quick-filter search boxes suited to look up rapid local event requests.

---

## 2. Comparison: Why Our Tracker is Better for Oxygen Sports (300 Words)

The primary differentiator of the **Sports Event Sponsorship & Kit Donation Tracker** lies in its absolute simplification of the user journey, tailored precisely to retail operations. Platforms like *OpenSponsorship* or *CSRBOX* are built for external stakeholders and corporate compliance, resulting in heavy navigation paths, complex registration structures, and cluttered tables. In contrast, our system is designed specifically for fast internal logging by store staff who may not be tech-savvy. 

First, our **Entry Form** features a single-screen layout with interactive dynamic rows. Instead of navigating separate inventory tables and budget wizards, staff can add, edit, or delete kit items and unit costs in real time on a single page, seeing subtotal updates instantly. 

Second, the validation feedback is immediate. While other systems require backend processing and full page reloads to flag validation violations, our frontend calculates costs on key-press, warning staff if they exceed budget limits *before* clicking submit. 

Third, our **Dashboard** prioritizes immediate operational clarity by utilizing high-contrast, status-colored pills (Green for Completed, Yellow for Disbursed, Orange for Approved) which are scannable at a glance, unlike the monotone text fields in legacy spreadsheets. 

By stripping away global matchmaking tools and corporate accounting modules, our tracker delivers a clean, responsive layout focused strictly on capturing local school and tournament sponsorships, making it faster to use and far more effective for local store administration.
