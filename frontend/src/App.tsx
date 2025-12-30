import React from "react"
import { Route, Routes } from "react-router-dom"
import ProfilePage from "./pages/profile/ProfilePage"
import HomePage from "./pages/hompage/HomePage"
import LoginPage from "./pages/login/LoginPage"
import RegisterPage from "./pages/register/RegisterPage"


export default function App() {
  return (
    <div className="bg-main bg-contain">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </div>
  )
}