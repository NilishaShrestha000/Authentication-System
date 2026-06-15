import { createBrowserRouter } from "react-router-dom";
{/*pages*/ }
import Home from "@/pages/Home";
import Services from "@/pages/Services";
import ContactUs from "@/pages/ContactUs";
import Login from "../pages/Login";
import ForgotPassword from "../pages/ForgotPassword";
import Register from "../pages/Register";
import ResetPassword from "../pages/ResetPassword";
import Yenya from "@/pages/Yenya";
import Detail from "@/pages/Detail";
import Logout from "@/pages/Logout";
import ProtectedRoute from "@/Routes/ProtectedRoute";
import GuestRoute from "@/Routes/GuestRoute";
import Layout from "./Layout";
import PatchServives from "@/pages/PatchServices";

import ErrorPage from "@/hooks/ErrorPage";
import Querries from "@/pages/Querries";
import QuerryDetail from "@/pages/QuerryDetail";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [
            { index: true, element: <Yenya /> },
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
                path: "home",
                element: (
                    <ProtectedRoute>
                        <Home />
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


            {
                path: "admin/services/:id/patch",
                element: (
                    <ProtectedRoute>
                        <PatchServives />
                    </ProtectedRoute>)
            },


            {
                path: "admin/queries",
                element: (
                    <ProtectedRoute>
                        <Querries />
                    </ProtectedRoute>
                )
            },

            {
                path: "/querry/:id",
                element: (
                    <ProtectedRoute>
                        <QuerryDetail />
                    </ProtectedRoute>
                )
            }
        ],
    },
]);
export default router;
