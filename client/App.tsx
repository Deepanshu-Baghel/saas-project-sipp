import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import RoleSelector, { UserRole } from "@/components/RoleSelector";
import Sidebar from "@/components/Sidebar";
import LandingPage from "@/pages/LandingPage";
import LoginPage from "@/pages/LoginPage";
import RegisterPage from "@/pages/RegisterPage";
import StudentDashboard from "@/pages/StudentDashboard";
import TeacherDashboard from "@/pages/TeacherDashboard";
import PrincipalDashboard from "@/pages/PrincipalDashboard";
import AddStudentPage from "@/pages/AddStudentPage";
import FeesPortalPage from "@/pages/FeesPortalPage";
import AssignTeacherPage from "@/pages/AssignTeacherPage";
import AnalyticsPage from "@/pages/AnalyticsPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

function DashboardLayout() {
  const [currentView, setCurrentView] = useState<
    "landing" | "login" | "register" | "roleSelector" | "dashboard"
  >("landing");
  const [userRole, setUserRole] = useState<UserRole | null>(null);
  const [currentPage, setCurrentPage] = useState("dashboard");

  const handleLogin = () => {
    setCurrentView("login");
  };

  const handleRegister = () => {
    setCurrentView("register");
  };

  const handleLoginSuccess = () => {
    setCurrentView("roleSelector");
  };

  const handleRegisterSuccess = () => {
    setCurrentView("roleSelector");
  };

  const handleRoleSelect = (role: UserRole) => {
    setUserRole(role);
    setCurrentPage("dashboard");
    setCurrentView("dashboard");
  };

  const handleBackToLanding = () => {
    setCurrentView("landing");
    setUserRole(null);
    setCurrentPage("dashboard");
  };

  const handleLogout = () => {
    setUserRole(null);
    setCurrentPage("dashboard");
    setCurrentView("roleSelector");
  };

  if (currentView === "landing") {
    return <LandingPage onLogin={handleLogin} onRegister={handleRegister} />;
  }

  if (currentView === "login") {
    return (
      <LoginPage
        onBackToLanding={handleBackToLanding}
        onLoginSuccess={handleLoginSuccess}
      />
    );
  }

  if (currentView === "register") {
    return (
      <RegisterPage
        onBackToLanding={handleBackToLanding}
        onRegisterSuccess={handleRegisterSuccess}
      />
    );
  }

  if (currentView === "roleSelector") {
    return (
      <RoleSelector
        onRoleSelect={handleRoleSelect}
        onBackToLanding={handleBackToLanding}
      />
    );
  }

  const renderDashboardContent = () => {
    switch (userRole) {
      case "student":
        switch (currentPage) {
          case "dashboard":
            return <StudentDashboard />;
          case "homework":
            return (
              <div className="flex items-center justify-center h-96">
                <div className="text-center">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    Homework Page
                  </h2>
                  <p className="text-gray-600">Coming soon...</p>
                </div>
              </div>
            );
          case "schedule":
            return (
              <div className="flex items-center justify-center h-96">
                <div className="text-center">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    Schedule Page
                  </h2>
                  <p className="text-gray-600">Coming soon...</p>
                </div>
              </div>
            );
          case "grades":
            return (
              <div className="flex items-center justify-center h-96">
                <div className="text-center">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    Grades Page
                  </h2>
                  <p className="text-gray-600">Coming soon...</p>
                </div>
              </div>
            );
          case "video-class":
            return (
              <div className="flex items-center justify-center h-96">
                <div className="text-center">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    Video Classes Page
                  </h2>
                  <p className="text-gray-600">Coming soon...</p>
                </div>
              </div>
            );
          case "announcements":
            return (
              <div className="flex items-center justify-center h-96">
                <div className="text-center">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    Announcements Page
                  </h2>
                  <p className="text-gray-600">Coming soon...</p>
                </div>
              </div>
            );
          default:
            return <StudentDashboard />;
        }
      case "teacher":
        switch (currentPage) {
          case "dashboard":
            return <TeacherDashboard />;
          case "classes":
            return (
              <div className="flex items-center justify-center h-96">
                <div className="text-center">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    My Classes Page
                  </h2>
                  <p className="text-gray-600">Coming soon...</p>
                </div>
              </div>
            );
          case "assignments":
            return (
              <div className="flex items-center justify-center h-96">
                <div className="text-center">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    Assignments Page
                  </h2>
                  <p className="text-gray-600">Coming soon...</p>
                </div>
              </div>
            );
          case "submissions":
            return (
              <div className="flex items-center justify-center h-96">
                <div className="text-center">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    Submissions Page
                  </h2>
                  <p className="text-gray-600">Coming soon...</p>
                </div>
              </div>
            );
          case "schedule":
            return (
              <div className="flex items-center justify-center h-96">
                <div className="text-center">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    Schedule Page
                  </h2>
                  <p className="text-gray-600">Coming soon...</p>
                </div>
              </div>
            );
          case "messages":
            return (
              <div className="flex items-center justify-center h-96">
                <div className="text-center">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    Messages Page
                  </h2>
                  <p className="text-gray-600">Coming soon...</p>
                </div>
              </div>
            );
          default:
            return <TeacherDashboard />;
        }
      case "principal":
        switch (currentPage) {
          case "dashboard":
            return <PrincipalDashboard />;
          case "overview":
            return <AddStudentPage />;
          case "users":
            return <FeesPortalPage />;
          case "approvals":
            return <AssignTeacherPage />;
          case "analytics":
            return <AnalyticsPage />;
          case "settings":
            return (
              <div className="flex items-center justify-center h-96">
                <div className="text-center">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    Settings Page
                  </h2>
                  <p className="text-gray-600">Coming soon...</p>
                </div>
              </div>
            );
          default:
            return <PrincipalDashboard />;
        }
      default:
        return <StudentDashboard />;
    }
  };

  return (
    <div className="flex h-screen bg-background">
      <Sidebar
        userRole={userRole}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
        onLogout={handleLogout}
        onBackToLanding={handleBackToLanding}
      />
      <main className="flex-1 overflow-auto">
        <div className="p-8">{renderDashboardContent()}</div>
      </main>
    </div>
  );
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DashboardLayout />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
