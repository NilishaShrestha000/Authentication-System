import { IoMenuSharp, IoSettingsOutline } from "react-icons/io5";
import { IoMdNotificationsOutline, IoIosTimer } from "react-icons/io";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineKeyboardArrowDown, MdLogout } from "react-icons/md";
import { GoHome } from "react-icons/go";
import { TbMessage2 } from "react-icons/tb";
import { Link, BrowserRouter, Routes, Route, useLocation, NavLink } from "react-router-dom"
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import ForgotPassword from "../pages/ForgotPassword";
import Register from "../pages/Register";
import ResetPassword from "../pages/ResetPassword";
import Authenticate from "@/pages/Authenticate";
import Detail from "@/pages/Detail";
import { useState } from "react";

const Layout = () => {
    const location = useLocation();
    const isLoginPage = location.pathname === "/login";
    const isForgotPasswordPage = location.pathname === "/forgot-password";
    const isRegisterPage = location.pathname === "/register";
    const isResetPasswordPage = location.pathname === "/reset-password";
    const hideNavbar = isLoginPage || isForgotPasswordPage || isRegisterPage || isResetPasswordPage
    const [slide, setSlide] = useState(false);

    const NavLinks = () => (
        <>
            <Link to="/dashboard" onClick={() => setSlide(false)} className="hover:bg-slate-600 px-4 rounded-lg py-5 flex gap-10 items-center">
                <GoHome /><span>Dashboard</span>
            </Link>
            <div className="hover:bg-slate-600 px-4 rounded-lg py-5 flex gap-10 items-center"><FaRegUser />Profile</div>
            <Link to="/reset-password" onClick={() => setSlide(false)} className="hover:bg-slate-600 px-4 rounded-lg py-5 flex gap-10 items-center">
                <IoSettingsOutline />Settings</Link>
            <div className="hover:bg-slate-600 px-4 rounded-lg py-5 flex gap-10 items-center"><TbMessage2 />Messages</div>
            <div className="hover:bg-slate-600 px-4 rounded-lg py-5 flex gap-10 items-center"><IoIosTimer />Activity</div>
            <Link to="/login" onClick={() => setSlide(false)} className="hover:bg-slate-600 px-4 rounded-lg py-5 flex gap-10 items-center">
                <MdLogout /><span>Logout</span>
            </Link>
        </>
    );

    return (
        <div className="h-screen w-screen flex overflow-hidden">

            {/*Sidebar for desktop*/}
            {!hideNavbar && (
                <aside className="hidden w-80 bg-slate-800 h-full text-white md:flex flex-col gap-8 items-center overflow-hidden text-xl font-semibold">

                    <div className="hidden md:flex items-center justify-between w-full mt-4 px-7">
                        <Link to="/" className="flex items-center">
                            <img src="/dash.png" className="h-10 w-10" />
                            <div className='font-bold text-white text-2xl'>Authenticate</div>
                        </Link>
                    </div>

                    <div className="w-full mt-5 px-4">
                        <nav className='flex flex-col gap-2 w-full '>
                            <NavLinks />
                        </nav>
                    </div>

                </aside >
            )}

            {/*Slidebar for mobile*/}
            {!hideNavbar && (
                <aside className={` md:hidden fixed top-0 left-0 w-80  bg-slate-800 h-full text-white flex flex-col gap-8 items-center overflow-hidden text-xl font-semibold transform transition-transform duration-300  ${slide ? "translate-x-0" : "-translate-x-full"}`}>

                    <div className="flex items-center justify-between w-full mt-4 px-7">
                        <Link to="/" onClick={() => setSlide(false)} className="flex items-center">
                            <img src="/dash.png" className="h-10 w-10" />
                            <div className='font-bold text-white text-2xl'>Authenticate</div>
                        </Link>
                    </div>

                    <div className="w-full mt-5 px-4">
                        <nav className='flex flex-col gap-2 w-full '>
                            <NavLinks />
                        </nav>
                    </div>

                </aside >
            )}

            <div className="flex flex-col flex-1 overflow-hidden">
                {/*Navbar*/}

                {!hideNavbar && (
                    <div className="top  bg-white h-17 w-full shadow-lg p-7">

                        <div className="justify-between flex items-center md:text-right h-full">

                            {/*Menu*/}
                            <div className="text-gray-500 hover:text-gray-700 cursor-pointer text-3xl md:hidden" onClick={() => setSlide(true)}><IoMenuSharp /></div>

                            {/*Noti & profile*/}
                            <div className="flex gap-10 items-center">
                                {/*Notification*/}
                                <div className="text-gray-500 hover:text-gray-700 cursor-pointer text-3xl flex items-center"><IoMdNotificationsOutline /></div>
                                {/*Profile*/}
                                <div className="flex gap-3 group items-center justify-center">
                                    <div className="flex text-gray-500 hover:text-gray-700 cursor-pointer items-center justify-center w-10 h-10 border border-black rounded-full"><FaRegUser className="text-lg" /></div>
                                    <div className="flex text-black  hover:text-gray-700 font-semibold cursor-pointer text-xl gap-2">Profile Name
                                        <span className=" flex items-center justify-center" ><MdOutlineKeyboardArrowDown /></span>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                )}

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
            </div>
        </div >
    )
}

const Navbar = () => {
    return (
        <>
            <BrowserRouter>
                <Layout />
            </BrowserRouter>
        </>
    )
}
export default Navbar;