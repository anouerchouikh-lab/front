import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Sidebar } from './components/layout/Sidebar';
import { ToastProvider } from './components/ui/Toast';
import { ErrorBoundary } from './components/common/ErrorBoundary';

import { LandingPage } from './pages/LandingPage';
import { LoginPage } from './pages/LoginPage';
import { SignupPage } from './pages/SignupPage';
import { DashboardPage } from './pages/DashboardPage';
import { CoursesPage } from './pages/CoursesPage';
import { AssignmentsPage } from './pages/AssignmentsPage';
import { SessionsPage } from './pages/SessionsPage';
import { CompetitionsPage } from './pages/CompetitionsPage';
import { LeaderboardPage } from './pages/LeaderboardPage';
import { ExamsPage } from './pages/ExamsPage';
import { useAuthStore } from './store/authStore';

const DashboardLayout = () => {
    const { isAuthenticated } = useAuthStore();

    if (!isAuthenticated) {
        return <Navigate to="/login" replace />;
    }

    return (
        <div className="flex min-h-screen bg-background">
            <Sidebar />
            <main className="flex-1 overflow-auto">
                <Routes>
                    <Route path="/" element={<Navigate to="/dashboard" replace />} />
                    <Route path="/dashboard" element={<DashboardPage />} />
                    <Route path="/courses" element={<CoursesPage />} />
                    <Route path="/assignments" element={<AssignmentsPage />} />
                    <Route path="/sessions" element={<SessionsPage />} />
                    <Route path="/competitions" element={<CompetitionsPage />} />
                    <Route path="/leaderboard" element={<LeaderboardPage />} />
                    <Route path="/exams" element={<ExamsPage />} />
                </Routes>
            </main>
        </div>
    );
};

function App() {
    return (
        <ErrorBoundary>
            <ToastProvider>
                <BrowserRouter>
                    <Routes>
                        {/* Public Routes */}
                        <Route path="/landing" element={<LandingPage />} />
                        <Route path="/login" element={<LoginPage />} />
                        <Route path="/signup" element={<SignupPage />} />

                        {/* Dashboard Routes (Protected by checking store in Layout) */}
                        <Route path="/*" element={<DashboardLayout />} />
                    </Routes>
                </BrowserRouter>
            </ToastProvider>
        </ErrorBoundary>
    );
}

export default App;
