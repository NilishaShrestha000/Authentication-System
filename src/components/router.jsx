import { createBrowserRouter } from "react-router-dom";
{/*pages*/ }
import Home from "@/pages/Home";
import Services from "@/pages/Services";
import ContactUs from "@/pages/ContactUs";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import ForgotPassword from "../pages/ForgotPassword";
import Register from "../pages/Register";
import ResetPassword from "../pages/ResetPassword";
import Yenya from "@/pages/Yenya";
import Detail from "@/pages/Detail";
import Logout from "@/pages/Logout";
import ProtectedRoute from "@/Routes/ProtectedRoute";
import GuestRoute from "@/Routes/GuestRoute";
import Layout from "./Layout";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            { index: true, element: <Yenya /> },
            { path: "home", element: <Home /> },
            { path: "contact", element: <ContactUs /> },
            { path: "services", element: <Services /> },
            { path: "services/:id", element: <Detail /> },
            { path: "forgot-password", element: <ForgotPassword /> },
            { path: "reset-password", element: <ResetPassword /> },
            {
                path: "login",
                element: (
                    <GuestRoute>
                        <Login />
                    </GuestRoute>
                ),
            },

            {
                path: "register",
                element: (
                    <GuestRoute>
                        <Register />
                    </GuestRoute>
                ),
            },

            {
                path: "dashboard",
                element: (
                    <ProtectedRoute>
                        <Dashboard />
                    </ProtectedRoute>
                ),
            },

            {
                path: "logout",
                element: (
                    <ProtectedRoute>
                        <Logout />
                    </ProtectedRoute>
                ),
            },
        ],
    },
]);
export default router;
