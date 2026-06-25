# Review 1 Evaluation & Feedback Report

* **Review Date**: 06 June 2026
* **Evaluator**: **Pamba Vamshi Krishna Sir**
* **Project Title**: Sports Event Sponsorship & Kit Donation Tracker (Oxygen Sports)
* **Team Status**: Completed Review 1 Presentation successfully.

---

## Reviewer Feedback Compiled

### 1. Frontend & Wireframes Feedback (Student 1)
* **Observation**: The screen designs cover the necessary workflow parameters.
* **Feedback**:
  * Ensure that the items list in the **Sports Event Sponsorship & Kit Donation Entry Form** is highly interactive, allowing staff to add or remove item rows dynamically.
  * The **Dashboard** needs prominent, colored visual tags for sponsorship status (e.g., Green for `Completed`, Yellow for `Disbursed`, Red/Orange for `Approved`).
  * Make sure the filters are quick and react immediately without requiring a full page refresh.

### 2. Backend & System Architecture Feedback (Student 2)
* **Observation**: The technical stack (Node.js/Express) and relational database choices are well-justified.
* **Feedback**:
  * Focus heavily on the data structure for the `items_donated` list. If using a JSON column inside SQLite, ensure the schema parser handles key validation checks strictly.
  * The business rule validating that total item expenditures do not exceed approved budgets must return descriptive HTTP API error payloads (e.g. detailed JSON stating by how much the budget was exceeded).
  * Ensure the `audit_logs` record structure captures both the user identifying tag and the precise changes made (old status vs new status).

### 3. Testing & Deployment Feedback (Student 3)
* **Observation**: The 15 test cases provide comprehensive coverage of happy paths and edge cases.
* **Feedback**:
  * In addition to happy path runs, add explicit integration test suites checking for boundary values (e.g., donation value exactly matching budget limits, and donation value exactly ₹1 over limit).
  * Ensure the backend `/health` endpoint outputs database connectivity status along with server status.
  * Keep the GitHub repository folders clean and avoid committing node dependency directories (`node_modules/`).

---

## Action Plan
* **UI/UX**: Implement dynamic row manipulation logic in the entry form.
* **API Engine**: Add robust express middleware handling budget overflow validations.
* **Testing**: Setup unit test assertions using Mocha/Jest or Postman scripting for boundary inputs.
