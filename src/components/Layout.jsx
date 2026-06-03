import { Routes, Route, useLocation } from "react-router-dom"
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import ForgotPassword from "../pages/ForgotPassword";
import Register from "../pages/Register";
import ResetPassword from "../pages/ResetPassword";
import Authenticate from "@/pages/Authenticate";
import Detail from "@/pages/Detail";
import { useState } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

const Layout = () => {
    const location = useLocation();
    const isLoginPage = location.pathname === "/login";
    const isForgotPasswordPage = location.pathname === "/forgot-password";
    const isRegisterPage = location.pathname === "/register";
    const isResetPasswordPage = location.pathname === "/reset-password";
    const hideNavbar = isLoginPage || isForgotPasswordPage || isRegisterPage || isResetPasswordPage
    const [slide, setSlide] = useState(false);



    return (
        <div className="flex min-h-screen w-full overflow-hidden">

            {!hideNavbar && <Sidebar slide={slide} setSlide={setSlide} />}

            <div className="flex flex-col flex-1">

                {!hideNavbar && <Navbar setSlide={setSlide} />}

                <main className="flex-1 overflow-auto ">
                    <Routes>
                        <Route path="/" element={<Authenticate />}></Route>
                        <Route path="/dashboard" element={<Dashboard />}></Route>
                        <Route path="/login" element={<Login />}></Route>
                        <Route path="/forgot-password" element={<ForgotPassword />}></Route>
                        <Route path="/register" element={<Register />}></Route>
                        <Route path="/reset-password" element={<ResetPassword />}></Route>
                        <Route path="/services/:id" element={<Detail />}></Route>
                    </Routes>
                </main>
            </div >
        </div >
    )
}


export default Layout;