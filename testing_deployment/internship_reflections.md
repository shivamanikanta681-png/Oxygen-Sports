# Internship Reflections & Closing Statements

**Company**: Oxygen Sports, Hyderabad  
**Project**: Sports Event Sponsorship & Kit Donation Tracker  
**Internship Duration**: 26 Days (June 2026)

---

## 1. Student 1 - Frontend Reflections

Over the course of this 26-day internship, I have developed the following core frontend skills:

1. **Premium Glassmorphic Styling**: Mastered HSL-based Tailwind-free Vanilla CSS custom variables, glass container opacity blends, and custom animation keyframes to build a dashboard that feels modern and cohesive.
2. **Dynamic Chart Design using SVG**: Programmed fully responsive Bar and Line charts using raw SVGs. Scaling expenditures over 30 days and dynamically sizing bar heights helped me avoid bulky canvas libraries and ensured perfect cross-device support.
3. **Print Layout Configuration**: Programmed browser-native invoice layouts via CSS `@media print` rules, allowing administrators to generate clean, readable sponsorship PDFs by hiding interactive components during printing.

---

## 2. Student 2 - Backend Reflections

Building the sponsorship tracker backend has provided me with the following key database and system design insights:

1. **Hybrid Database Adapter Architectures**: Coded a multi-db wrapper in [db.js](file:///C:/Users/Shiva/.gemini/antigravity/scratch/oxygen-sports-tracker/backend/db.js) supporting SQLite (for local offline dev) and PostgreSQL (for production). Emulating SQLite's parameter syntax `?` and handling last ID inserts via PostgreSQL's `RETURNING id` clause let me bridge both platforms seamlessly.
2. **API Input Sanitisation**: Implemented a custom Express middleware to strip HTML elements and special characters, preventing script injection and database command execution while maintaining valid serialized JSON arrays.
3. **Automated Validation Enforcements**: Programmed strict endpoint checkers that evaluate physical item unit costs against approved budgets, validating calculations at API entry points before database write loops.

---

## 3. Student 3 - Testing & Deployment Reflections

Working on the testing and deployment workflow has provided me with these specific testing insights:

1. **Master Test Tracker Execution**: Formulated a comprehensive E2E validation matrix containing 53 test cases. Running this on live deployed URLs under diverse status constraints helped identify edge cases (e.g. over-budget editing blocks).
2. **Multi-DB Cloud Provisioning**: Configured hosted PostgreSQL databases on Supabase and Render. Establishing secure environment variables (`DATABASE_URL`, `PORT`, `VITE_API_URL`) taught me how to manage cloud secrets without committing credentials.
3. **Automated Audit Logs Validation**: Tested historical audit log collections, verifying that Express-triggered database entries capture snapshot data accurately on both local and production databases.
