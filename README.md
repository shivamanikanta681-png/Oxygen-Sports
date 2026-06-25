# Sports Event Sponsorship & Kit Donation Tracker
**Company**: Oxygen Sports, Hyderabad  
**Team Role Breakdown**:
* **Student 1 (Frontend)**: User Interface, Entry Forms, Dashboards, and Analytics.
* **Student 2 (Backend)**: REST API development, database schema & audit logging.
* **Student 3 (Testing & Deployment)**: Automated & manual test suites, API verification, and cloud/local deployment.

---

## Deployed Application Links
* **Live Frontend Interface (Vercel)**: [https://oxygen-sports-tracker.vercel.app](https://oxygen-sports-tracker.vercel.app)
* **Live Backend API (Render)**: [https://oxygen-sports-tracker-backend.onrender.com/health](https://oxygen-sports-tracker-backend.onrender.com/health)
* **YouTube Walkthrough Video (Unlisted)**: [https://youtu.be/dummy-walkthrough-id](https://youtu.be/dummy-walkthrough-id)
* **Google Drive Demo Video**: [https://drive.google.com/drive/folders/dummy-gdrive-id](https://drive.google.com/drive/folders/dummy-gdrive-id)
* **Deployment Reference Guide**: See [docs/deployment_guide.md](file:///C:/Users/Shiva/.gemini/antigravity/scratch/oxygen-sports-tracker/docs/deployment_guide.md) for variable guidelines.

---

## 1. Project Directory Structure
* `frontend/` - UI components, HTML templates, CSS style systems, and client JS logic.
* `backend/` - Node Express servers, API routing, database connectors, controllers, and schemas.
* `testing_deployment/` - Manual test scripts, automation test suites, deployment configs, and verification logs.
* `docs/` - System analysis, design specifications, DB diagrams, and milestone logs.

---

## 2. Local Setup and Installation Guide

### Prerequisites
* Ensure you have [Node.js](https://nodejs.org/) installed (v16.x or higher recommended).

### 2.1 Backend Setup
1. Navigate to the `backend/` directory in your terminal:
   ```bash
   cd backend
   ```
2. Install the necessary packages (Express, Cors, SQLite3):
   ```bash
   npm install
   ```
3. Run the database migration script to generate the SQLite database and create the tables:
   ```bash
   node db.js
   ```
   *Note: This creates the SQLite database file `oxygen_sports.db` and logs the table migrations.*
4. Start the backend API server:
   ```bash
   npm start
   ```
   *The server will run on [http://localhost:5000](http://localhost:5000).*

### 2.2 Frontend Setup
1. Navigate to the `frontend/` directory in your terminal.
2. In React applications:
   ```bash
   npm install
   npm run dev
   ```
3. Once running, open [http://localhost:5173](http://localhost:5173) (or your browser's designated local dev port) to access the **Sports Event Sponsorship & Kit Donation Entry Form** and **Dashboard**.

---

## 3. End-to-End Workflow Testing
To verify that all components are connected correctly:
1. Open the **Data Entry Form** in your browser.
2. Fill out Event Details, add a few donation item rows with quantities and prices, select a visibility benchmark checklist checkbox, and set an Approved Budget Limit.
3. Submit the form.
4. Open the **Dashboard**. Confirm that the newly logged sponsorship appears as a row in the table, displaying correct computed costs and colored status pills.
5. Click **View Logs** next to the record. Verify that the details drawer slides in displaying the timeline audit changes.
