# 🚀 JobTrack Pro - Full-Stack Career Analytics

A centralized, full-stack Single Page Application (SPA) designed to streamline the career search process. This platform features a high-performance Python analytics engine and a responsive React frontend to provide real-time visualizations of the job application funnel.

---

## 🏗️ System Architecture

As the sole architect and developer, I designed a decoupled client-server architecture to handle the full lifecycle of career data, from entry to visualization.

* **Python Logic Layer:** Engineered a backend service in Python to process and structure career data, serving as the "brain" for complex KPI calculations.
* **React State Engine:** Developed a dynamic frontend in React to manage complex application states and ensure real-time UI synchronization.
* **File-Based Persistence:** Implemented a **JSON-based mock database** as a deliberate architectural choice for rapid prototyping. This allowed for immediate iteration on the **Analytics Engine** without the overhead of external cloud dependencies.
* **Data Visualization Logic:** Built custom utility functions to compute and display success metrics (Response/Interview rates) through interactive funnel charts.

---

## 🎯 Core Features

* **📊 Real-time Performance Metrics:** Instant calculation of job search success rates.
* **📈 Funnel Visualization:** A graphical dashboard representing the user's progress from application to offer.
* **🏢 Company-Centric Historical Views:** Aggregated logs to track multiple interactions within a single organization over time.
* **🔍 Status & Source Filtering:** High-speed querying of application data by current hiring stage or job source.

---

## 🛠️ Technical Stack

* **Frontend:** React (Vite),javaScript,Tailwind CSS
* **Backend:** Python (Business Logic & Data Processing)
* **Data Storage:** File-Based JSON Persistence
* **UI Architecture:** Lucide React, Custom CSS Design

---

## 🔍 Future Roadmap & Scalability

I have identified key areas to transition this MVP into a fully automated enterprise platform:

1. **Cloud Persistence Layer:** Planned migration from local JSON to **NoSQL (Firebase/MongoDB)** for global data availability.
2. **Automated Data Ingestion:** Utilizing Python’s powerful ecosystem to integrate the **Gmail API**, automating tracking through email keyword parsing.
3. **User Authentication:** Implementation of **Google OAuth 2.0** or **JWT** to secure user data and enable multi-device synchronization.
4. **Temporal Intelligence:** Implementation of a **Date Persistence Layer** for interview reminders and deadline notifications.

---

## 🚀 Installation & Setup

### 1. Clone & Install Frontend
```bash
git clone [https://github.com/](https://github.com/)[YOUR_USERNAME]/jobtrack-pro.git
cd jobtrack-pro/frontend
npm install
npm run dev
