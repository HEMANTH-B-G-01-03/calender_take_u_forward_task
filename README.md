# Interactive Wall Calendar

A polished and responsive **frontend-only interactive calendar component** built using **Next.js**, **TypeScript**, and **Tailwind CSS**.  
This project was created as part of a **Frontend Engineering Challenge** and is inspired by the design of a **physical wall calendar**.

It combines a modern UI with useful interactions such as **date range selection**, **integrated notes**, **month navigation**, and **local storage persistence**.

---

## 📸 Project Overview

This calendar component is designed to visually resemble a **wall calendar** with:

- A **hero image section**
- A **monthly calendar grid**
- **Date range selection**
- **Integrated notes section**
- A clean, modern, and responsive interface

---

## ✨ Features

### Core Features
- 📅 **Wall Calendar Aesthetic**
  - Inspired by a physical hanging calendar
  - Includes a large hero image section

- 🗓️ **Month Navigation**
  - Navigate between previous and next months
  - Quick “Today” button to return to current month

- 🔵 **Date Range Selection**
  - Select a **start date** and **end date**
  - Highlights all dates in between

- 📝 **Integrated Notes Section**
  - Add **monthly notes**
  - Add notes for the **selected date range**

- 💾 **Local Storage Persistence**
  - Notes and selected date range are saved in the browser
  - Data remains even after page refresh

- 📱 **Responsive Design**
  - Works across desktop and mobile screens

### UI Enhancements
- Paper-like card layout
- Hanging spiral binding effect
- Smooth transitions and modern styling
- Highlight for the current date

---

## 🛠️ Tech Stack

- **Next.js**
- **React**
- **TypeScript**
- **Tailwind CSS**
- **date-fns**
- **Lucide React**
- **Framer Motion**
- **clsx**

---

## 📂 Project Structure

```bash
interactive-calendar/
├── app/
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── CalendarGrid.tsx
│   ├── HeroSection.tsx
│   ├── MonthNavigator.tsx
│   ├── NotesSection.tsx
│   └── WallCalendar.tsx
├── lib/
│   ├── calendar.ts
│   └── storage.ts
├── public/
│   └── images/
│       └── mountain.jpeg
├── types/
│   └── calendar.ts
├── package.json
└── README.md
