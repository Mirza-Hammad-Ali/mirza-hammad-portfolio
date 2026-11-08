# Mirza Hammad Ali — MERN Stack Developer Portfolio

A component-based React + Tailwind CSS frontend and separate Express + MongoDB backend.

## Requirements
- Node.js 20+
- MongoDB local instance or MongoDB Atlas connection string

## 1. Frontend
```bash
cd frontend
npm install
npm run dev
```
Vite runs at http://localhost:5173.

## 2. Backend
In another terminal:
```bash
cd backend
cp .env.example .env
```
Set `MONGODB_URI` in `backend/.env`, then:
```bash
npm install
npm run dev
```
The API runs at http://localhost:5000.

The frontend `.env` is optional; by default it calls `http://localhost:5000/api`.

## Contact form
Messages are validated by the backend and stored in MongoDB. If `EMAIL_USER` and `EMAIL_PASS` are configured, Nodemailer also sends a notification to `CONTACT_RECEIVER` (defaults to Mirza's email). For Gmail, use an App Password, not your normal account password.

## Resume
The uploaded CV is included at `frontend/public/Mirza-Hammad-CV.pdf` and is downloadable from the navbar and hero section.

## Avatar
The supplied avatar image is included at `frontend/src/assets/mirza-avatar.png`.

## Personal details and content
Edit:
- `frontend/src/data/projects.js` to add real project repository/live URLs.
- `frontend/src/data/skills.js` to change skills.
- `frontend/src/data/experience.js` to update internship details.
- `frontend/src/data/education.js` to update education.

Only the GitHub and LinkedIn profile URLs supplied by Mirza are linked by default. Project-level repository/live URLs are left unset unless verified.
