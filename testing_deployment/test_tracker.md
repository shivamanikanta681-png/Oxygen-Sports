# System Test Execution Tracker (Updated Day 21)

This tracker documents testing iterations, statuses, and validation dates.

## Summary (Day 21)
- **Total Test Cases**: 53
- **Passed**: 53
- **Failed**: 0
- **Pass Rate**: 100%

| Test ID | Module / Component | Description | Expected Result | Actual Result | Status | Execution Date |
| :--- | :--- | :--- | :--- | :--- | :---: | :--- |
| `TC-HEALTH-001` | Backend API | GET `/health` verification | HTTP 200 with ok status | HTTP 200 with ok status | **PASS** | 04 June 2026 |
| `TC-POST-001` | Backend POST API | Post Record 1: Peerzadiguda Govt School (School) | DB insertion returns ID, status 210 | Submits successfully, ID 1 returned | **PASS** | 11 June 2026 |
| `TC-POST-002` | Backend POST API | Post Record 2: Kamala Nagar T20 Cup (Tournament) | DB insertion returns ID, status 210 | Submits successfully, ID 2 returned | **PASS** | 11 June 2026 |
| `TC-POST-003` | Backend POST API | Post Record 3: Elite Football Academy (Academy) | DB insertion returns ID, status 210 | Submits successfully, ID 3 returned | **PASS** | 11 June 2026 |
| `TC-POST-004` | Backend POST API | Post Record 4: Boduppal Sports Club (Club) | DB insertion returns ID, status 210 | Submits successfully, ID 4 returned | **PASS** | 11 June 2026 |
| `TC-POST-005` | Backend POST API | Post Record 5: Uppal High School Sports (School) | DB insertion returns ID, status 210 | Submits successfully, ID 5 returned | **PASS** | 11 June 2026 |
| `TC-ERR-001` | Backend POST API | Missing required fields validation check | HTTP 400 validation error (MISSING_REQUIRED_FIELDS) | HTTP 400 validation error (MISSING_REQUIRED_FIELDS) | **PASS** | 11 June 2026 |
| `TC-ERR-002` | Backend POST API | Negative items quantity check | HTTP 400 validation error (INVALID_ITEM_VALUES) | HTTP 400 validation error (INVALID_ITEM_VALUES) | **PASS** | 11 June 2026 |
| `TC-ERR-003` | Backend POST API | Over-expenditure validation check (exceeds limit) | HTTP 400 budget overflow error (BUDGET_OVERFLOW) | HTTP 400 budget overflow error (BUDGET_OVERFLOW) | **PASS** | 11 June 2026 |
| `TC-GET-001` | Backend GET API | Fetch all dashboard items | List of 5 items sorted by date DESC | 5 items returned matching DB models in DESC order | **PASS** | 11 June 2026 |
| `TC-DETAIL-001`| Backend GET /:id | Retrieve valid record details (ID 1) | HTTP 200 returning entire matching JSON record | Returns data matching Peerzadiguda Govt School | **PASS** | 12 June 2026 |
| `TC-DETAIL-002`| Backend GET /:id | Retrieve non-existent record details (ID 999) | HTTP 404 with error message (RECORD_NOT_FOUND) | Returns HTTP 404, message "Record was not found" | **PASS** | 12 June 2026 |
| `TC-PAG-001`   | Backend GET API | Pagination: Request page 1 with limit 2 | Returns first 2 items with totalCount in metadata | Successfully lists first 2 rows, count: 5 | **PASS** | 12 June 2026 |
| `TC-PAG-002`   | Backend GET API | Pagination: Request page 2 with limit 2 | Returns items 3 and 4 with page state indicator | Successfully lists next 2 rows, page: 2 | **PASS** | 12 June 2026 |
| `TC-FILT-001`  | Backend GET API | Filter query by status 'Approved' | List includes only Approved status logs | Lists records matching status criteria | **PASS** | 12 June 2026 |
| `TC-SRCH-001`  | Backend GET API | Search items string by keyword 'Bats' | List includes only records donating Cricket Bats | Lists rows matching items keyword string | **PASS** | 12 June 2026 |
| `TC-E2E-001`   | Full Integration | Fill entry form, submit successfully, list on dashboard, trigger details view | Record saves to DB, fetches immediately on grid, and displays details in timeline drawer | Complete flow executed successfully without validation block issues | **PASS** | 13 June 2026 |
| `TC-LOGIC-001` | Logic Engine | Typical Case 1: High utilization, low assets count (ID 1) | ROI calculated, triggers critical override warning | Utilization: 98%, Assets: 1. Warning triggered. | **PASS** | 15 June 2026 |
| `TC-LOGIC-002` | Logic Engine | Typical Case 2: Mid utilization, mid assets count (ID 2) | ROI calculated, normal status logged | Utilization: 80%, Assets: 2. Normal triggered. | **PASS** | 15 June 2026 |
| `TC-LOGIC-003` | Logic Engine | Typical Case 3: Low utilization, high assets count (ID 3) | ROI calculated, optimal efficiency status logged | Utilization: 60%, Assets: 3. Optimal triggered. | **PASS** | 15 June 2026 |
| `TC-LOGIC-004` | Logic Engine | Boundary Case: Zero utilization (ID 4) | Utilization calculated as 0%, ROI scaled | Utilization: 0%. ROI computed without division error. | **PASS** | 15 June 2026 |
| `TC-LOGIC-005` | Logic Engine | Boundary Case: Max utilization (ID 5) | Utilization calculated as 100%, ROI scaled | Utilization: 100%. ROI index computed. | **PASS** | 15 June 2026 |
| `TC-LOGIC-006` | Logic Engine | Boundary Case: Zero visibility assets achieved | ROI calculated, zero visibility warning triggered | Visibility assets count: 0. ROI scaled. Warning triggered. | **PASS** | 15 June 2026 |
| `TC-LOGIC-007` | Logic Engine | Error Case: Analysis request for invalid record | Returns HTTP 404 (RECORD_NOT_FOUND) | Returns HTTP 404, message "ID not found" | **PASS** | 15 June 2026 |
| `TC-LOGIC-008` | Logic Engine | Error Case: JSON parsing error snapshot DB corruption | Returns HTTP 500 error key | Successfully returns HTTP 500 parse alert response | **PASS** | 15 June 2026 |
| `TC-LOGIC-009` | Logic Engine | Regression Case: Multi-item sum check | Item subtotal math does not interfere with budget checks | Sum math processed properly on POST checks | **PASS** | 15 June 2026 |
| `TC-LOGIC-010` | Logic Engine | Regression Case: Empty note check | Empty notes do not bypass constraint validations | Validations execute normally with null/empty notes | **PASS** | 15 June 2026 |
| `TC-CRUD-001`  | CRUD Integration| Create sponsorship and verify listed | Record is logged and index lists it on dashboard grid | Works successfully, listed on main grid view | **PASS** | 16 June 2026 |
| `TC-CRUD-002`  | CRUD Integration| Edit sponsorship and verify saved | PUT edits parameters; check updates on retrieve details | Works, edits save correctly to DB rows | **PASS** | 16 June 2026 |
| `TC-CRUD-003`  | CRUD Integration| Archive sponsorship and verify removed from active | PATCH status to 'Archived' removes from Active filter | Row status updates; hidden when Active tab clicked | **PASS** | 16 June 2026 |
| `TC-CRUD-004`  | CRUD Integration| Transition: Approved to Disbursed state | State changes to Disbursed, generates audit log | Status updates, verify timeline has update note | **PASS** | 16 June 2026 |
| `TC-CRUD-005`  | CRUD Integration| Transition: Disbursed to Completed state | State changes to Completed, generates audit log | Status updates, verify timeline has update note | **PASS** | 16 June 2026 |
| `TC-CRUD-006`  | CRUD Integration| Transition: Completed status modification blocks | Prevent PUT edit overrides when record is Completed | API blocks modifications returning constraint error | **PASS** | 16 June 2026 |
| `TC-CRUD-007`  | CRUD Integration| PUT request check with invalid ID parameter | Returns HTTP 404 error (RECORD_NOT_FOUND) | Returns HTTP 404 "Record not found" | **PASS** | 16 June 2026 |
| `TC-CRUD-008`  | CRUD Integration| Test audit history retrieval for edited ID | GET `/api/audit_logs?sponsorship_id=X` returns logs | Audits array returns matching snapshot parameters | **PASS** | 16 June 2026 |
| `TC-REP-001`  | Reports API      | GET `/api/reports/summary` validation | HTTP 200 containing status counts and time series | Returns correct totals and 30-day data points | **PASS** | 20 June 2026 |
| `TC-REP-002`  | Reports API      | Reports Filter: Date range filtering checks | Counts and spends match matching date parameters | Summary filters data accurately by date ranges | **PASS** | 20 June 2026 |
| `TC-REP-003`  | Reports UI       | Reports Chart: Rendering with empty database | Charts render empty indicators without crashes | SVGs render zero columns and blank line trends | **PASS** | 20 June 2026 |
| `TC-REP-004`  | Reports UI       | Reports Chart: Rendering with 50+ records scale | Charts scale and render responsive paths | SVGs display correct scaling ratios for large spends | **PASS** | 20 June 2026 |
| `TC-REP-005`  | Reports Export   | Reports Export: CSV export formatting API | HTTP 200 returning valid comma-separated text attachment | CSV downloads correctly with correct quotes escaping | **PASS** | 20 June 2026 |
| `TC-VAL-015`  | Full Integration | 15-Record consistency and detail view verification | 15 seeded logs verified across dashboard, details, and print outputs | Verified all 15 entries displaying matched fields and history trails | **PASS** | 23 June 2026 |
| `TC-VAL-016`  | Input Sanitisation | POST payload containing HTML tags (e.g. `<b>School Name</b>`) | HTML tags are stripped from `event_name` before saving | Saved as `School Name` | **PASS** | 24 June 2026 |
| `TC-VAL-017`  | Input Sanitisation | POST payload containing special chars (e.g. `Event ; Name`) | Special characters like `;` are stripped | Saved as `Event  Name` | **PASS** | 24 June 2026 |
| `TC-VAL-018`  | Error Handling | Send malformed JSON payload to server | Server responds with standard error envelope `400` | Responds HTTP 400 with "Malformed JSON payload: Parsing failed." | **PASS** | 24 June 2026 |
| `TC-VAL-019`  | Empty States | Filter list screen so zero matching records returned | UI displays custom glassmorphic empty state element | Shows "No Sponsorship Records Found" empty state | **PASS** | 24 June 2026 |
| `TC-VAL-020`  | Responsive Layout | View application at 375px, 768px, 1280px viewports | Layout wraps, grids stack, nav is readable | Verified responsive grid stacking and button sizes | **PASS** | 24 June 2026 |
| `TC-VAL-021`  | Clean DB Setup | Spin up server with clean empty SQLite DB | Database tables successfully auto-created; site runs cleanly | Database initialized on startup; dashboard displays empty state | **PASS** | 24 June 2026 |

