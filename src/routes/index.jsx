import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";

import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import { ProtectedRoute } from "./ProtectedRoute";

function Logout() {
  React.useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      fetch("/api/auth/logout", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .finally(() => {
          localStorage.removeItem("token");
          window.location.href = "/login";
        });
    } else {
      window.location.href = "/login";
    }
  }, []);
  return null;
}

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <HomePage />
            </ProtectedRoute>
          }
        />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </BrowserRouter>
  );
}