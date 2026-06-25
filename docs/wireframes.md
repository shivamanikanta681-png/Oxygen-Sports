# Review 1: Wireframe Designs (Student 1)

This document contains updated text-based wireframe designs for the four frontend screens of the **Sports Event Sponsorship & Kit Donation Tracker** for Oxygen Sports, incorporating feedback from Pamba Vamshi Krishna Sir.

---

## 1. Sports Event Sponsorship & Kit Donation Entry Form (Updated)
* **Feedback Applied**: Added interactive dynamic indicators `[🗑️]` for individual row deletions and `[+ Add Another Item]` action options, with dynamic calculations computed instantly.

```
+----------------------------------------------------------------------------+
|  OXYGEN SPORTS  |  Sponsorship & Donation Entry Form                       |
+----------------------------------------------------------------------------+
|                                                                            |
|  [!] Enter new event sponsorship or kit donation details below.            |
|                                                                            |
|  1. EVENT DETAILS                                                          |
|  * Event Name / School Name: [__________________________________________ ] |
|  * Event Date / Period:     [ YYYY-MM-DD ] to [ YYYY-MM-DD ]               |
|  * Target Audience:         ( ) School   ( ) Tournament                    |
|                             ( ) Academy  ( ) Club                          |
|                                                                            |
|  2. ITEMS DONATED (KIT DETAILS) - [Dynamic Row Manipulation]               |
|  * Item List:                                                              |
|    [ Item Name        ] [ Quantity ] [ Unit Cost ] [ Subtotal (Auto) ]     |
|    [ Cricket Bats     ] [ 10       ] [ 1200      ] [ ₹12,000         ] [🗑️] |
|    [ Leather Balls    ] [ 20       ] [  250      ] [ ₹5,000          ] [🗑️] |
|                                                                            |
|    [+ Add Another Item]                                                    |
|                                                                            |
|  3. BRAND VISIBILITY SECURED (Must select at least one)                    |
|  * Visibility Type:         [x] Banner Placement  [ ] Jersey Branding      |
|                             [x] Social Media Post [ ] Prize Speech         |
|  * Visibility Notes:        [ Expected banner positions at boundaries... ] |
|                                                                            |
|  4. BUDGET & STATUS                                                        |
|  * Created Date:            [ 2026-06-15 ] (Default Today)                 |
|  * Approved Budget Limit:   [ 20000      ] (₹)                             |
|  * Status:                  ( ) Draft  (*) Approved                        |
|                             ( ) Disbursed  ( ) Completed                   |
|                                                                            |
|  5. NOTES / REMARKS                                                        |
|  * Internal Notes:          [ Mention sponsorship requirements here...   ] |
|                                                                            |
|  +-----------------------------------------------------------------------+ |
|  | [ Save Log Entry ]                                 [ Reset Form ]     | |
|  +-----------------------------------------------------------------------+ |
+----------------------------------------------------------------------------+
```

---

## 2. Sports Event Sponsorship & Kit Donation Dashboard (Updated)
* **Feedback Applied**: Added distinct color indicators for status badges (Green, Yellow, Red) and immediate text search responsiveness indicator.

```
+----------------------------------------------------------------------------+
|  OXYGEN SPORTS  |  Donation Tracker Dashboard                              |
+----------------------------------------------------------------------------+
|  QUICK STATS:                                                              |
|  Total Spends: ₹1,45,000 | Pending Shipments: 3 | Visibility Achieved: 85% |
|                                                                            |
|  FILTERS: (Immediate Client-Side Processing)                               |
|  Search: [ Search Event Name...   ]  Status: [ All ]  Category: [ All ]    |
|                                                                            |
|  SPONSORSHIPS & DONATIONS LIST:                                            |
|  +----+------------------+------------+-----------+-------------+--------+ |
|  | ID | Event/School Name| Total cost | Category  | Status      | Actions| |
|  +----+------------------+------------+-----------+-------------+--------+ |
|  | 01 | Peerzadiguda High| ₹17,000    | School    | [Completed] | [View] | |
|  |    |                  |            |           |  *(Green)*  |        | |
|  | 02 | Summer Cup T20   | ₹45,000    | Tournament| [Disbursed] | [View] | |
|  |    |                  |            |           | *(Yellow)*  |        | |
|  | 03 | Elite Football Ac| ₹30,000    | Academy   | [Approved]  | [View] | |
|  |    |                  |            |           |  *(Orange)* |        | |
|  +----+------------------+------------+-----------+-------------+--------+ |
|                                                                            |
|  [+ Log New Sponsorship]                                [Export Report]    |
+----------------------------------------------------------------------------+
```

---

## 3. Detail & History View (Drawer/Modal)
```
+----------------------------------------------------------------------------+
|  SPONSORSHIP DETAIL: ID #01 (Peerzadiguda High School)                [ X ]|
+----------------------------------------------------------------------------+
|                                                                            |
|  Status: [ Completed ] | Created Date: 2026-06-01 | Total Cost: ₹17,000    |
|  Recipient Type: School  | Approved Budget Limit: ₹20,000                  |
|                                                                            |
|  ITEMS DONATED:                                                            |
|  - 10 Cricket Bats @ ₹1,200 = ₹12,000                                      |
|  - 20 Leather Balls @ ₹250 = ₹5,000                                        |
|                                                                            |
|  VISIBILITY SECURED:                                                       |
|  - Banner Placement (Verified - photo uploaded)                            |
|  - Social Media Post (Pending - check with coordinator)                    |
|                                                                            |
|  AUDIT LOG HISTORY:                                                        |
|  - 2026-06-01 10:00 AM: Created by Admin (Status: Approved)                |
|  - 2026-06-03 02:00 PM: Updated by Inventory Staff (Status: Disbursed)     |
|  - 2026-06-05 04:30 PM: Marked Completed by Manager (Status: Completed)    |
|                                                                            |
+----------------------------------------------------------------------------+
```

---

## 4. Reports & Analytics Dashboard
```
+----------------------------------------------------------------------------+
|  OXYGEN SPORTS  |  Reports & Analytics                                     |
+----------------------------------------------------------------------------+
|  TIMELINE SELECTOR: [ Past 30 Days v ]                                    |
|                                                                            |
|  +-----------------------------------+  +--------------------------------+ |
|  | SPENDING BY CATEGORY (Pie Chart)   |  | SPEND VS BUDGET TREND (Bar)    | |
|  |                                   |  |                                | |
|  |   [#] School: 35%                 |  |   50k|       _                | |
|  |   [@] Tournament: 45%             |  |   25k|  _   | |               | |
|  |   [$] Academy: 20%                |  |    0k| | |  | |               | |
|  |                                   |  |      +-+-+-+-+-               | |
|  |                                   |  |       May  Jun                | |
|  +-----------------------------------+  +--------------------------------+ |
|                                                                            |
|  +-----------------------------------------------------------------------+ |
|  | BRAND VISIBILITY SUCCESS RATES                                        | |
|  | - Banner Visibility: 90% Success (9/10 events)                         | |
|  | - Jersey Logo placement: 75% Success (3/4 events)                     | |
|  +-----------------------------------------------------------------------+ |
+----------------------------------------------------------------------------+
```
