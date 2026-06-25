# Integration Test Plan & Core Logic Edge Cases (Student 3)

This integration test plan maps 8 end-to-end user scenarios and defines 3 specific logic edge cases with input parameters.

---

## 1. 8 Integration Test Scenarios

### Scenario 1: New Sponsorship Setup & Approval
* **Flow**:
  1. Staff logs sponsorship entry via Form.
  2. Form triggers API POST request.
  3. Database records entry with status "Approved".
* **Verify**: The record immediately appears on the Dashboard displaying blue "Approved" badge.

### Scenario 2: Budget Limit Warning Assertions
* **Flow**:
  1. User inputs item quantities causing cost to exceed budget.
  2. Form blocks action and prints inline warnings showing exceeded margins.
* **Verify**: Server POST API rejects request returning HTTP 400 (BUDGET_OVERFLOW) payload.

### Scenario 3: Equipment Disbursement Update
* **Flow**:
  1. Staff views dashboard and triggers Details Drawer.
  2. Status transitions to "Disbursed".
  3. PUT request logs state update.
* **Verify**: Check database `audit_logs` to ensure a snapshot of old status vs new status is recorded.

### Scenario 4: Campaign Completion Trailing
* **Flow**:
  1. Manager checks banner photos and marks sponsorship status "Completed".
  2. Database saves status changes.
* **Verify**: Dashboard table displays green "Completed" pill and details drawer updates timeline entries.

### Scenario 5: Search Filtering Grid
* **Flow**:
  1. User type keywords into dashboard search.
  2. Dashboard requests filtered GET list.
* **Verify**: Grid items matching criteria render instantly without page refresh.

### Scenario 6: Empty Query State fallbacks
* **Flow**:
  1. User search queries random characters.
  2. Server responds empty payload.
* **Verify**: Frontend displays "No records found" fallback screen.

### Scenario 7: Dynamic Items Row addition
* **Flow**:
  1. Staff edits form adding 5 distinct item rows.
  2. Form totals re-calculate subtotals.
* **Verify**: Sum matches correct multiplication value arrays.

### Scenario 8: Dashboard pagination count
* **Flow**:
  1. Database has 25 logs.
  2. Dashboard requests page 1.
* **Verify**: Grid displays first 20 records and page selectors show "Page 1 of 2".

---

## 2. 3 Core Logic Edge Cases (Exact Parameters)

### Case 1: Minimum Scale Boundary (Value = 1)
* **Inputs**:
  * `budget_limit`: ₹1.00
  * `items_donated`: `[{ "name": "Whistle", "qty": 1, "unitCost": 1.00 }]`
* **Expected Output**: HTTP 201 success; ROI Engine calculates budget utilization as exactly `100%`.

### Case 2: Maximum Scale Boundary (High Budgets)
* **Inputs**:
  * `budget_limit`: ₹99,999,999.00
  * `items_donated`: `[{ "name": "Complete Stadium Set", "qty": 1000, "unitCost": 50000.00 }]` (Total = ₹50,000,000.00)
* **Expected Output**: HTTP 201 success; ROI Engine calculates budget utilization as exactly `50%` without numeric overflow.

### Case 3: Zero Budget Divide Protection
* **Inputs**:
  * `budget_limit`: ₹0.00
  * `items_donated`: `[]` (Empty items list)
* **Expected Output**: API responds HTTP 400 validation error blocking division by zero calculations during logic processing.
