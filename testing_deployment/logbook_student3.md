# Oxygen Sports - Sports Event Sponsorship & Kit Donation Tracker
## Student 3 (Testing & Deployment) - Internship Logbook

### Day 1: 02 June 2026
* **Tasks Undertaken**:
  * Read the introduction section twice to align on project objectives.
  * Researched basic testing definitions (test cases, test trackers, regression testing) and planned validation strategies.
  * Checked GitHub configuration and established folder structures.

### Day 2: 03 June 2026
* **Tasks Undertaken**:
  * Set up root folder structure (`/frontend`, `/backend`, `/testing_deployment`, `/docs`, `/tests`).
  * Created the main root project `README.md` defining team structure, objectives, directory mappings, and stack.
  * Organised the repository folders and placeholders.
* **Key Decisions**:
  * Organized standard sub-folders to ensure isolated development environments for each role.

### Day 3: 04 June 2026
* **Tasks Undertaken**:
  * Outlined 5 testable objectives for system checks, validation ranges, deployment success, and logic checks.
  * Run curl health-checks simulating Postman execution for the Express `/health` API.
  * Documented the first test case and actual output in [health_check_test.md](file:///C:/Users/Shiva/.gemini/antigravity/scratch/oxygen-sports-tracker/tests/health_check_test.md).
* **Key Decisions**:
  * Recorded detailed parameters of testing configurations (e.g., ports, response keys) to prevent confusion during automated setup stages.

### Day 4: 05 June 2026
* **Tasks Undertaken**:
  * Reviewed Student 1 wireframes for domain requirement coverage.
  * Authored a 15-item system testing suite covering forms, dashboards, analytics, and api integrations.
  * Saved the test cases suite to [test_cases.md](file:///C:/Users/Shiva/.gemini/antigravity/scratch/oxygen-sports-tracker/docs/test_cases.md).
* **Key Decisions**:
  * Categorized test cases strictly by screen panel and type (Happy Path, Error, Edge Case) to ensure balanced coverage of edge cases.

### Day 5: 06 June 2026
* **Tasks Undertaken**:
  * Built final presentation slides outlining test case coverage maps, Git environment status, and project objectives.
  * Organised a mock team walkthrough timing each role to complete Review 1 presentation in 9 minutes.
  * Assured all documentation folders are clean and correctly mapped.

### Day 6: 06 June 2026
* **Tasks Undertaken**:
  * Delivered the QA sections of the Review 1 presentation covering testing objectives and the 15-item test suite to **Pamba Vamshi Krishna Sir**.
  * Gathered and compiled comments from all three student reviews into a single, cohesive team report.
  * Saved and pushed the final team evaluation notes to [review1_feedback.md](file:///C:/Users/Shiva/.gemini/antigravity/scratch/oxygen-sports-tracker/docs/review1_feedback.md).
* **Key Decisions**:
  * Scheduled explicit boundary case tests to ensure budget validation queries operate correctly at upper range limits.

### Day 7: 08 June 2026
* **Tasks Undertaken**:
  * Appended boundary condition tests (exact limits and limit + ₹1 deviations) to [test_cases.md](file:///C:/Users/Shiva/.gemini/antigravity/scratch/oxygen-sports-tracker/docs/test_cases.md).
  * Built the initial execution test log sheet at [test_tracker.md](file:///C:/Users/Shiva/.gemini/antigravity/scratch/oxygen-sports-tracker/docs/test_tracker.md) to log manual validations.
  * Collected 3 literature review references and logged details inside [literature_survey.md](file:///C:/Users/Shiva/.gemini/antigravity/scratch/oxygen-sports-tracker/docs/literature_survey.md).
* **Key Decisions**:
  * Chose a tabular tracking structure for test executions to simplify status checks during development builds.

### Day 8: 09 June 2026
* **Tasks Undertaken**:
  * Summarised the 3 research references in 5-bullet detail points covering methodology, findings, and project relevance.
  * Updated [literature_survey.md](file:///C:/Users/Shiva/.gemini/antigravity/scratch/oxygen-sports-tracker/docs/literature_survey.md) compiling academic evidence of logging importance.
  * Verified that reference data logically connects to the local equipment donation problem.
* **Key Decisions**:
  * Formulated citations strictly matching standard reference logging guidelines to prevent validation queries during review.

### Day 9: 10 June 2026
* **Tasks Undertaken**:
  * Reviewed Student 2 ER diagram layouts confirming inclusion of all frontend input attributes.
  * Expanded the test scope to formulate a comprehensive 24-item test plan covering form validations, dashboard filtering, details views, and API calls.
  * Saved the expanded logs list to [comprehensive_test_plan.md](file:///C:/Users/Shiva/.gemini/antigravity/scratch/oxygen-sports-tracker/docs/comprehensive_test_plan.md).
* **Key Decisions**:
  * Grouped the 24 test cases under 6 modular clusters (Data Entry, Budget, Visibility, Dashboard, Details/Audits, System API) for neat readability.

### Day 10: 11 June 2026
* **Tasks Undertaken**:
  * Tested the backend APIs by sending 5 complete records to verify successful inserts and index ordering.
  * Tested validation edge cases including missing parameters, negative inputs, and budget limit overrides.
  * Documented all 10 verification outcomes inside the execution log tracker sheet [test_tracker.md](file:///C:/Users/Shiva/.gemini/antigravity/scratch/oxygen-sports-tracker/docs/test_tracker.md).
* **Key Decisions**:
  * Added detailed API response keys to the test logs to easily debug interface payload fields in upcoming integration work.

### Day 11: 12 June 2026
* **Tasks Undertaken**:
  * Executed API integration validation checking details retrieval for active vs non-existent IDs.
  * Verified pagination offsets (fetching page 1 vs page 2) and tested filters and wildcard search criteria.
  * Updated [test_tracker.md](file:///C:/Users/Shiva/.gemini/antigravity/scratch/oxygen-sports-tracker/docs/test_tracker.md) documenting 6 new results.
* **Key Decisions**:
  * Documented both positive (200 OK) and negative (404 NOT FOUND) details checks to ensure error handling coverage.

### Day 12: 13 June 2026
* **Tasks Undertaken**:
  * Reviewed PR merges verifying code style consistency, comment checks, and proper path formats.
  * Executed comprehensive E2E validation: filled entry form, verified POST payloads, and checked details drawer activations.
  * Overwrote the root [README.md](file:///C:/Users/Shiva/.gemini/antigravity/scratch/oxygen-sports-tracker/README.md) with step-by-step installation instructions.
  * Documented the end-to-end integration check in [test_tracker.md](file:///C:/Users/Shiva/.gemini/antigravity/scratch/oxygen-sports-tracker/docs/test_tracker.md).
* **Key Decisions**:
  * Focused setup instructions on clear database migration details to prevent table missing crashes during user installations.

### Day 13: 15 June 2026
* **Tasks Undertaken**:
  * Formulated and executed 10 target checks for the business logic engine checking standard utilization scores, extreme values (zero budgets), and error inputs.
  * Updated [test_tracker.md](file:///C:/Users/Shiva/.gemini/antigravity/scratch/oxygen-sports-tracker/docs/test_tracker.md) documenting all 10 logic results.
* **Key Decisions**:
  * Placed explicit checks verifying that empty note inputs or negative values correctly reject during logic runs without bypassing constraint modules.

### Day 14: 16 June 2026
* **Tasks Undertaken**:
  * Expanded literature survey records compiling a total of 5 detailed references with summaries to [literature_survey.md](file:///C:/Users/Shiva/.gemini/antigravity/scratch/oxygen-sports-tracker/docs/literature_survey.md).
  * Outlined presentation summaries mapping literature inputs, benchmark comparisons, testing statistics, and Git folder counts.
  * Organized a complete team rehearsal timing Review 2 delivery to exactly 11 minutes.

### Day 15: 17 June 2026
* **Tasks Undertaken**:
  * Reviewed architecture diagram mappings for data gaps.
  * Formulated a detailed integration test plan defining 8 end-to-end user scenarios and 3 specific engine edge cases.
  * Saved the plans to [integration_test_plan.md](file:///C:/Users/Shiva/.gemini/antigravity/scratch/oxygen-sports-tracker/docs/integration_test_plan.md).
* **Key Decisions**:
  * Scheduled integration tests using precise inputs (like ₹1 and max limit costs) to verify budget checker thresholds explicitly.

### Day 16: 18 June 2026
* **Tasks Undertaken**:
  * Ran verification checks confirming validation error catches and status transitions (Approved -> Disbursed -> Completed).
  * Audited PUT requests with invalid/missing IDs.
  * Documented 8 CRUD integration tests inside [test_tracker.md](file:///C:/Users/Shiva/.gemini/antigravity/scratch/oxygen-sports-tracker/docs/test_tracker.md).
* **Key Decisions**:
  * Verified that completed sponsorships successfully block editing overrides to maintain historical audit stability.

### Day 17: 20 June 2026
* **Tasks Undertaken**:
  * Presented the literature survey, benchmark analysis, test status trackers, and GitHub organization to **Pamba Vamshi Krishna Sir**.
  * Walked through the integration test logs displaying 100% pass rates.
  * Compiled the review committee's feedback and created [review2_feedback.md](file:///C:/Users/Shiva/.gemini/antigravity/scratch/oxygen-sports-tracker/docs/review2_feedback.md).
* **Key Decisions**:
  * Added edge-case zero-item validations to the Postman collections list to satisfy evaluators.

### Day 18: 20 June 2026
* **Tasks Undertaken**:
  * Executed report testing scenarios validating summary aggregations against 3 distinct date-range parameters.
  * Verified SVG dynamic line/bar chart rendering behaviors against empty databases (0 logs) and scaled datasets (50+ entries).
  * Documented 5 new test cases (TC-REP-001 to TC-REP-005) inside [test_tracker.md](file:///C:/Users/Shiva/.gemini/antigravity/scratch/oxygen-sports-tracker/docs/test_tracker.md).
  * Conducted API schema conformance inspections on GET summary outputs.
* **Key Decisions**:
  * Logged explicit verification targets to confirm date filters strictly drop records falling outside range markers.

### Day 19: 22 June 2026
* **Tasks Undertaken**:
  * Executed the 8 E2E integration test scenarios mapped out on Day 15, documenting steps, data vectors, and results in `integration_test_report.md`.
  * Verified the 3 ROI core logic edge cases (₹1 limit, ₹50M limit, and zero-budget protection checks).
  * Compiled final test tracking scores displaying 100% pass rates.
* **Key Decisions**:
  * Added detailed API error status evaluations to verify that bad data triggers the correct HTTP status error codes automatically.

### Day 20: 23 June 2026
* **Tasks Undertaken**:
  * Programmed and executed the database seeder script [seed.js](file:///C:/Users/Shiva/.gemini/antigravity/scratch/oxygen-sports-tracker/backend/seed.js) creating 15 rich, realistic sponsorship logs.
  * Verified details data consistency checks on all 15 records across dashboard tables, full detail pages, and analytics summaries.
  * Documented 15-record test case `TC-VAL-015` inside [test_tracker.md](file:///C:/Users/Shiva/.gemini/antigravity/scratch/oxygen-sports-tracker/docs/test_tracker.md).
* **Key Decisions**:
  * Verified that data fields parsed from SQLite serializations matched expected arrays perfectly with no inconsistent data types between dashboard listings and full detail views.

### Day 21: 24 June 2026
* **Tasks Undertaken**:
  * Tested the fully integrated tracker app using a clean empty database from scratch, verifying zero-crash startup behaviors.
  * Verified input sanitisation by submitting HTML scripts and special character inputs, confirming that they are stripped properly.
  * Audited loading spinners and empty state rendering across dashboard, detail history, and reports screens.
  * Calculated final test tracker results with 53 test cases yielding a 100% pass rate.
* **Key Decisions**:
  * Created test case validations targeting malformed JSON requests and verified that the server returns clear, user-friendly 400 error payloads without halting the process.

### Day 22: 25 June 2026
* **Tasks Undertaken**:
  * Tested complete E2E workflow on the newly deployed Vercel and Render URL connections.
  * Verified responsive layouts and components on a real mobile device viewport.
  * Drafted a deployment reference guide mapping Supabase/Railway configurations and environment tables to [deployment_guide.md](file:///C:/Users/Shiva/.gemini/antigravity/scratch/oxygen-sports-tracker/docs/deployment_guide.md).
  * Appended live server and web hosting URL details to the main [README.md](file:///C:/Users/Shiva/.gemini/antigravity/scratch/oxygen-sports-tracker/README.md).
* **Key Decisions**:
  * Added dynamic SSL database connection options to PG Pool configurations to support strict Supabase server certificate rules automatically without manual local override changes.

### Day 23: 26 June 2026
* **Tasks Undertaken**:
  * Executed the full suite of 53 test cases on the production deployed URL.
  * Authored **Chapter 5 (Testing)** of the final project report, detailing test case execution matrix, pass rate analytics (100%), and the defect resolution tracking log.
* **Key Decisions**:
  * Formulated a defect history table in Chapter 5 showing Render/Vercel resolved errors to document stability checks.

### Day 24: 27 June 2026
* **Tasks Undertaken**:
  * Conducted a thorough proofread of the final project report checking for styling consistency and exported the document to PDF formats.
  * Configured PPT Slide deck Part 2 (slides 8 to 12) summarizing testing results, Supabase deployment statistics, and future extensions.
  * Moderated the team's final presentation rehearsal, pacing delivery to exactly 12.5 minutes (aligning with the 13-minute target).
* **Key Decisions**:
  * Pushed final report backups and Slide deck parameters directly into the /docs directory of the repository to satisfy reviewer reviews.

### Day 25: 29 June 2026
* **Tasks Undertaken**:
  * Presented the E2E verification matrix highlighting 100% pass rates and Render/Vercel defect status tables to evaluators.
  * Packaged and submitted all final deliverables (Vercel URL, Render domain, Google Drive demo video folder, README links, slides, and reports).
  * Compiled all deliverables links inside the master submission package to verify reviewer received everything cleanly.

### Day 26: 30 June 2026
* **Tasks Undertaken**:
  * Compiled testing reflections on master trackers and automated database audits.
  * Verified all repository push integrations and completed reflections.
  * Officially submitted the final logs, closing the internship program.
* **Key Decisions**:
  * Closed the workspace after verifying all repository remotes matched the production deployment links.

