# System Test Cases Suite (Student 3)

This document contains 17 detailed test cases mapped across the frontend views and core API integrations, including boundary test parameters.

---

## 1. Sports Event Sponsorship & Kit Donation Entry Form

### Test Case TC-FORM-001: Form Entry Happy Path
* **Objective**: Verify that valid input values save successfully.
* **Steps**:
  1. Fill "Event Name" with "Peerzadiguda School Championship".
  2. Add item: "Cricket Bats", Qty: 5, Unit Price: 1000. Set Budget: 10000.
  3. Select Brand Visibility check: "Banner Placement". Set status: "Approved".
  4. Click "Save Log Entry".
* **Expected Result**: Form validation passes, request payload matches POST format, item subtotal calculates to ₹5,000, and a success banner is shown.

### Test Case TC-FORM-002: Validation Error - Budget Exceeded
* **Objective**: Assert form prevents submission if donation cost exceeds budget limits.
* **Steps**:
  1. Input "Budget Limit" as ₹5,000.
  2. Add item: "Football Goal Post Set", Qty: 2, Unit Price: 3000 (Total = ₹6,000).
  3. Click "Save Log Entry".
* **Expected Result**: Validation alert fires stating "Donation total ₹6,000 exceeds allowed limit of ₹5,000." Submission is blocked.

### Test Case TC-FORM-003: Edge Case - Negative Quantities
* **Objective**: Check that quantity fields reject negative integers.
* **Steps**:
  1. Set Item Quantity to `-5`.
  2. Try to click "Save Log Entry".
* **Expected Result**: Frontend field-level check fires, warning that quantities must be 1 or higher.

### Test Case TC-FORM-004: Boundary Case - Value Equals Budget Limit (Feedback Update)
* **Objective**: Verify that form succeeds when the sum of donation item costs exactly matches the budget limit.
* **Steps**:
  1. Set Approved Budget Limit: ₹10,000.
  2. Add item: "Goal Posts", Qty: 2, Unit Cost: ₹5,000.
  3. Attempt Form Submission.
* **Expected Result**: Submission passes without errors.

### Test Case TC-FORM-005: Boundary Case - Value Exceeds Budget Limit by ₹1 (Feedback Update)
* **Objective**: Assert that form blocks submission when value exceeds budget limit by exactly ₹1.
* **Steps**:
  1. Set Approved Budget Limit: ₹10,000.
  2. Add item: "Custom Rackets", Qty: 1, Unit Cost: ₹10,001.
  3. Attempt Form Submission.
* **Expected Result**: Submission fails immediately, displaying budget warning error highlighting ₹1 over-expenditure.

---

## 2. Sports Event Sponsorship & Kit Donation Dashboard

### Test Case TC-DASH-001: Filter Listings by Status
* **Objective**: Verify that dashboard displays only records matching the selected status.
* **Steps**:
  1. Navigate to Dashboard.
  2. Select "Completed" from the status filter dropdown.
* **Expected Result**: Dashboard lists only rows with the green status badge "Completed".

### Test Case TC-DASH-002: Live Text Search
* **Objective**: Verify immediate filter changes on query typing.
* **Steps**:
  1. Enter "Elite" in the Search input.
* **Expected Result**: Table lists only records where recipient name contains the substring "Elite".

### Test Case TC-DASH-003: Edge Case - No Records Found
* **Objective**: Ensure a fallback UX state when search matches nothing.
* **Steps**:
  1. Enter "XYZNonExistentSchool" in Search.
* **Expected Result**: Table hides rows and displays a centered info text: "No sponsorship records matching criteria found."

---

## 3. Detail & History View (Drawer/Modal)

### Test Case TC-DTL-001: Toggle View Activation
* **Objective**: Verify details drawer triggers on row selection.
* **Steps**:
  1. Click the "View" action button next to Sponsorship record #01.
* **Expected Result**: Drawer glides in from the right edge showing detailed parameters.

### Test Case TC-DTL-002: Audit Timeline Chronology
* **Objective**: Ensure that audit timestamps are sorted in chronological order.
* **Steps**:
  1. Open details view for record #01.
  2. Examine Audit History timeline segment.
* **Expected Result**: Log items are organized from oldest to newest status changes with timestamp and user tags.

### Test Case TC-DTL-003: Edge Case - Missing Visibility Attachments
* **Objective**: Verify fallback indicator for empty visibility notes.
* **Steps**:
  1. Open a record with no visibility notes or proofs.
* **Expected Result**: Under Brand Visibility segment, label shows "No visibility remarks or proof files uploaded".

---

## 4. Reports & Analytics Dashboard

### Test Case TC-ANL-001: Data Categorization Chart Accuracy
* **Objective**: Confirm that category pie slices match logged entry classifications.
* **Steps**:
  1. Add a new School donation of ₹10,000.
  2. Navigate to Reports screen.
* **Expected Result**: The School category slice segment recalculates to include the new donation value.

### Test Case TC-ANL-002: Budget VS Spend Trend Chart
* **Objective**: Ensure bar chart height renders in proportion to database values.
* **Steps**:
  1. View Spend vs Budget comparison bar charts.
* **Expected Result**: Bar charts display visual differences matching actual database numeric arrays.

### Test Case TC-ANL-003: Edge Case - No Data Initial State
* **Objective**: Verify analytics dashboard state when database is empty.
* **Steps**:
  1. Purge all records from database.
  2. Access Reports Dashboard.
* **Expected Result**: Charts show placeholder patterns (e.g. gray circles/bars) with a text alert "No donation data available to display trends".

---

## 5. Backend Endpoints (Integration/API Checks)

### Test Case TC-API-001: API Post Validations
* **Objective**: Verify API returns HTTP 201 for correct payloads.
* **Steps**:
  1. Trigger POST endpoint with valid JSON sponsorship inputs.
* **Expected Result**: Response matches HTTP 201 with returned database ID key.

### Test Case TC-API-002: Health Check Integrity
* **Objective**: Verify GET /health handles basic operational queries.
* **Steps**:
  1. Execute GET `/health`.
* **Expected Result**: Returns status 200 with standard health indicators.

### Test Case TC-API-003: DB Audit Hook Verification
* **Objective**: Confirm database auto-creates audit entries on status updates.
* **Steps**:
  1. Send PUT request modifying record ID #01 status to "Completed".
  2. Perform query check on database `audit_logs` table.
* **Expected Result**: An entry matching ID #01 is inserted in `audit_logs` documenting status transition from "Disbursed" to "Completed".
