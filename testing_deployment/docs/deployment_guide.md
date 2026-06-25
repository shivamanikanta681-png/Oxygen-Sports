# Deployment Guide - Sports Event Sponsorship & Kit Donation Tracker

This guide outlines deployment steps for production, environment variables, and PostgreSQL configuration instructions.

## 1. Database Deployment (Supabase / Railway)
Our system uses a hybrid adapter supporting PostgreSQL in production.

1. **Provision Database**:
   - Create a PostgreSQL database on [Supabase](https://supabase.com) or [Railway](https://railway.app).
   - Copy the database connection URL (`postgres://...`).
2. **Environment Variable Configuration**:
   - Expose the connection string as `DATABASE_URL` in your backend environment variables.
   - Migrations are fully automated; the backend schema executes automatically on boot.

## 2. Backend Deployment (Render / Railway)
Deploy the Node/Express backend from your Git repository.

1. **Build Configuration**:
   - Build command: `npm install`
   - Start command: `npm start`
2. **Environment Variables**:
   - `DATABASE_URL`: Connection string of your remote PostgreSQL database.
   - `PORT`: Server listener port (e.g. `5000` or dynamically assigned).

## 3. Frontend Deployment (Vercel)
Deploy the Vite React client linking your client branch repository.

1. **Vercel Settings**:
   - Framework preset: `Vite`
   - Build command: `npm run build`
   - Output directory: `dist`
2. **Environment Variables**:
   - `VITE_API_URL`: The public HTTPS URL of your deployed backend service (e.g., `https://oxygen-sports-api.onrender.com`).

---

## Environment Variables Summary Reference Table

| Variable Name | Required Scope | Description | Sample Value |
| :--- | :---: | :--- | :--- |
| `DATABASE_URL` | Backend | Connection string to production PostgreSQL instance. | `postgres://user:password@db-host.supabase.co:5432/postgres` |
| `PORT` | Backend | Port number standard Express listener binds to. | `5000` |
| `VITE_API_URL` | Frontend | Target API domain of deployed backend. | `https://oxygen-sports-api.onrender.com` |
