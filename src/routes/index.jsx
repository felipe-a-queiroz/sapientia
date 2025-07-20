import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';

import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import SettingsPage from '../pages/SettingsPage';
import { ProtectedRoute } from './ProtectedRoute';
import { AdminRoute } from './AdminRoute';
import ManageUsersPage from '../pages/ManageUsersPage';
import ProfilePage from '../pages/ProfilePage';

function Logout() {
    React.useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            fetch(`${import.meta.env.VITE_API_URL}/auth/logout`, {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }).finally(() => {
                localStorage.removeItem('token');
                window.location.href = '/login';
            });
        } else {
            window.location.href = '/login';
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
                <Route element={<AdminRoute />}>
                    <Route path="/admin/users" element={<ManageUsersPage />} />
                </Route>
                <Route
                    path="/settings"
                    element={
                        <ProtectedRoute>
                            <SettingsPage />
                        </ProtectedRoute>
                    }
                />
                <Route path="/login" element={<LoginPage />} />
                <Route
                    path="/profile"
                    element={
                        <ProtectedRoute>
                            <ProfilePage />
                        </ProtectedRoute>
                    }
                />
                <Route path="/logout" element={<Logout />} />
            </Routes>
        </BrowserRouter>
    );
}
