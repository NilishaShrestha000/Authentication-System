import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import ForgotPassword from "../pages/ForgotPassword";
import Register from "../pages/Register";
import ResetPassword from "../pages/ResetPassword";
import Authenticate from "@/pages/Authenticate";
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
            { index: true, element: <Authenticate /> },
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
