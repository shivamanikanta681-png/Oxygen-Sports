# Project Objectives

## Student 1: Frontend User Perspective Objectives
1. **Seamless Data Entry**: Implement the **Sports Event Sponsorship & Kit Donation Entry Form** to capture all event details, kit donation items, and brand visibility requirements with real-time field-level validation (e.g., preventing empty fields or negative currency inputs) within a single, intuitive screen.
2. **Interactive Live Dashboard**: Build the **Sports Event Sponsorship & Kit Donation Dashboard** that displays all logged sponsorship transactions dynamically, supporting instant search filtering by recipient name and category dropdowns (School, Tournament, Academy, Club).
3. **Comprehensive History Drawer**: Create the **Detail & History View** component to display the lifecycle history of any selected donation, displaying status changes and visibility check status on demand.
4. **ROI Visualizations**: Develop the **Reports & Analytics Dashboard** integrating charts (using Chart.js/Recharts) to show visual distribution of donation categories, total expenses vs. budget, and visibility performance trends.
5. **Responsive and Accessible Layout**: Design the entire user interface to be fully responsive, ensuring optimal viewing, sorting, and editing capabilities on standard desktop, tablet, and mobile screens.

---

## Student 2: Backend and Data Perspective Objectives
1. **Robust REST API**: Build structured RESTful endpoints (under `/api/sponsorships`) using Node.js and Express to handle POST requests for entry submission and GET requests for dashboard listings.
2. **Core Business Logic Validation Engine**: Code the core validation engine to enforce key business rules, including checking that total donation item costs do not exceed the approved sponsorship budget, returning a 400 Bad Request if violated.
3. **Secure Relational Storage**: Schema-design database tables (`sports_event_sponsorship_kit_donation` and `audit_logs`) with proper key constraints, field limits, and relationships to prevent orphaned data.
4. **Immutable Audit Trails**: Implement database triggers or backend hooks to automatically log all insertions, status updates, or record deletions into the `audit_logs` table with user and timestamp data.
5. **Fast Data Aggregation Endpoints**: Build optimized database queries and endpoints to serve aggregated JSON statistics (e.g., total funds spent, count of visibility items achieved) for rendering frontend charts.

---

## Student 3: Testing & Deployment Objectives
1. **Health Verification**: Implement automated test cases to confirm API service availability, starting with verification of the `/health` route returning a success code.
2. **Business Logic Calculation Accuracy**: Develop integration tests to verify the accuracy of the backend business logic engine, ensuring correct arithmetic summation of item values and budget limits.
3. **Validation Error Assertions**: Create a comprehensive suite of edge-case tests asserting that the API correctly rejects incomplete requests (e.g., missing contact numbers, invalid dates, negative budgets).
4. **Local & Cloud Deployment Scripts**: Set up configuration environment variables and startup scripts to allow the frontend and backend apps to launch locally with a single command and deploy smoothly.
5. **Regression Coverage**: Maintain a test execution spreadsheet/tracker to log manual and Postman test runs, confirming that new feature rollouts do not break existing CRUD endpoints.
