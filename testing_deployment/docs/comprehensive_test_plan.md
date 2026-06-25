# Comprehensive Test Plan: 24 Test Cases (Student 3)

This test plan defines verification points mapping the user interface elements and backend database fields.

---

## Module 1: Data Entry Form Validation (Form Inputs)

### TC-VAL-001: Event Name Input Null Verification
* **Type**: Validation Error
* **Step**: Leave Event Name empty and click Submit.
* **Expected Result**: Block submit, display "Event name is required."

### TC-VAL-002: Category Dropdown Standard Ranges
* **Type**: Happy Path
* **Step**: Select Academy from Category options. Submit log.
* **Expected Result**: Row recorded with category value "Academy".

### TC-VAL-003: Category Constraint Override Protection
* **Type**: Edge Case
* **Step**: Submit HTTP request with category "CorporateEvent".
* **Expected Result**: API returns status 400 validation error.

### TC-VAL-004: Quantities Range Boundary (value = 1)
* **Type**: Happy Path
* **Step**: Set Qty to 1. Submit.
* **Expected Result**: Submission succeeds.

### TC-VAL-005: Quantities Range Boundary (value = 0)
* **Type**: Validation Error
* **Step**: Set Qty to 0. Attempt Submit.
* **Expected Result**: Blocks entry. Quantity must be 1 or higher.

### TC-VAL-006: Subtotal Calculations Accuracy
* **Type**: Logic Check
* **Step**: Add 5 bats @ ₹2,000 and 10 balls @ ₹500.
* **Expected Result**: Calculated Total Cost matches ₹15,000.

---

## Module 2: Budget Limit Validations

### TC-BGT-001: Total Cost Below Limit
* **Type**: Happy Path
* **Step**: Total items cost: ₹8,000. Approved limit: ₹10,000.
* **Expected Result**: Validation passes, database returns ID.

### TC-BGT-002: Total Cost Exactly Equals Limit
* **Type**: Boundary Path
* **Step**: Total items cost: ₹10,000. Approved limit: ₹10,000.
* **Expected Result**: Validation passes, database returns ID.

### TC-BGT-003: Total Cost Exceeds Limit by ₹1
* **Type**: Boundary Path
* **Step**: Total items cost: ₹10,001. Approved limit: ₹10,000.
* **Expected Result**: Blocks submission, returns HTTP 400 with detail of overflow.

---

## Module 3: Brand Visibility Constraints

### TC-VIS-001: Empty Checklist Selection
* **Type**: Validation Error
* **Step**: Leave all visibility options unchecked. Attempt Submit.
* **Expected Result**: Validation fails; alert states "At least one brand visibility type must be checked".

### TC-VIS-002: Single Check Validation
* **Type**: Happy Path
* **Step**: Check Banner. Submit.
* **Expected Result**: Row logs with Visibility Banner marked true.

### TC-VIS-003: Detailed Note Logging
* **Type**: Happy Path
* **Step**: Write 200 characters detailing placement sizes.
* **Expected Result**: Field saves text details to database notes column.

---

## Module 4: Dashboard Grid, Search, & Filters

### TC-DSH-001: List All Records
* **Type**: Happy Path
* **Step**: Load dashboard view.
* **Expected Result**: Displays list matching active entries in SQL table.

### TC-DSH-002: Dynamic Text Filtering
* **Type**: Happy Path
* **Step**: Search "Secunderabad".
* **Expected Result**: Dynamic matches filter row count instantly.

### TC-DSH-003: Filter by Category Dropdown
* **Type**: Happy Path
* **Step**: Select Academy filter.
* **Expected Result**: Table shows only entries containing Academy category.

### TC-DSH-004: Filter by Status Dropdown
* **Type**: Happy Path
* **Step**: Select Completed filter.
* **Expected Result**: Grid shows only rows where status value matches Completed.

### TC-DSH-005: Sort Columns by Value Low-High
* **Type**: Happy Path
* **Step**: Click Price sort filter.
* **Expected Result**: Records reorder sorting from lowest cost to highest.

### TC-DSH-006: Empty Search Results Feedback
* **Type**: Edge Case
* **Step**: Search non-matching characters.
* **Expected Result**: Shows text: "No sponsorship records matching criteria found."

---

## Module 5: Details View & Audit Logs

### TC-AUD-001: Toggle Drawer Open
* **Type**: Happy Path
* **Step**: Click row action button.
* **Expected Result**: Detail panel pulls out, matching entry keys.

### TC-AUD-002: Database Trigger on Insert
* **Type**: Happy Path
* **Step**: Add new Approved sponsorship entry. Check logs.
* **Expected Result**: New entry matches initial setup state inside `audit_logs`.

### TC-AUD-003: Database Trigger on Update
* **Type**: Happy Path
* **Step**: PUT status to Disbursed. Check logs.
* **Expected Result**: Log displays state transition log entry correctly.

---

## Module 6: Reports & System API

### TC-SYS-001: Health Endpoint Returns Standard Keys
* **Type**: Happy Path
* **Step**: GET `/health`.
* **Expected Result**: Returns status 200 with ok response.

### TC-SYS-002: Category Chart Distribution Sums
* **Type**: Logic Check
* **Step**: Calculate category percentage distributions.
* **Expected Result**: Sum of percentages equals 100%.

### TC-SYS-003: Empty Database Chart State
* **Type**: Edge Case
* **Step**: Clear database and open Reports screen.
* **Expected Result**: Shows gray placeholder charts with "No data available" tags.
