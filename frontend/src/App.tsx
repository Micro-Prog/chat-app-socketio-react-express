import React from "react"
import { Route, Routes } from "react-router-dom"
import ProfilePage from "./pages/profile/ProfilePage"
import HomePage from "./pages/hompage/HomePage"
import AuthPage from './pages/auth/AuthPage';
import RegisterPage from "./pages/register/RegisterPage"


export default function App() {
  return (
    <div className="bg-main bg-contain">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </div>
  );
}