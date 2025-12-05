# EduSphere Frontend 🎓

A modern, interactive educational platform built with **React**, **TypeScript**, **Vite**, and **Tailwind CSS**.

This project operates as a **Static Single Page Application (SPA)** using a local **Mock Database** persisted in your browser's Local Storage. No backend server is required to run this application!

## 🚀 Features

-   **Zero-Backend Architecture:** Runs entirely in the browser using a custom `MockDB` implementation.
-   **Local Data Persistence:** Users, Courses, and Gamification data are saved to `localStorage`.
-   **Interactive Gamification:**
    -   Earn XP and level up.
    -   Unlock badges.
    -   View global leaderboards.
-   **Course Management:**
    -   Create and manage courses.
    -   View course materials and progress.
-   **Authentication:**
    -   Functional Login and Signup pages.
    -   Register multiple local users.
    -   Simulated JWT token flow.

## 🛠️ Tech Stack

-   **Framework:** React 19
-   **Build Tool:** Vite
-   **Language:** TypeScript
-   **Styling:** Tailwind CSS (v4)
-   **State Management:** Zustand
-   **Routing:** React Router v7
-   **Icons:** Lucide React
-   **Animations:** Framer Motion

## � Installation & Setup

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/anouerchouikh-lab/front.git
    cd front
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    ```

4.  **Open in Browser:**
    Navigate to `http://localhost:5173` (or the port shown in your terminal).

## 🔑 Default Credentials

The application comes pre-seeded with an Admin user:
-   **Email:** `admin@edusphere.com`
-   **Password:** `admin123`

You can also **Sign Up** to create new users!

## 📂 Project Structure

```
front/
├── src/
│   ├── components/  # Reusable UI components
│   ├── lib/
│   │   └── mock/    # MockDB implementation (src/lib/mock/db.ts)
│   ├── pages/       # Application views
│   ├── services/    # API services (pointing to MockDB)
│   ├── store/       # Zustand state stores
│   └── types/       # TypeScript definitions
├── public/
└── index.html
```

## 🎨 Design System

The UI follows a modern, clean aesthetic using a "Glassmorphism" and "Neubrutalism" inspired design system with consistent tokens for spacing, typography, and colors.

## 🤝 Contributing

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request
