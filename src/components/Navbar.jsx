
import { Form, Formik } from "formik";
import { IoMenuSharp } from "react-icons/io5";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FaRegUser } from "react-icons/fa";
import { toast } from "react-toastify";
import GuestRoute from "@/Routes/GuestRoute";
import { Link } from "react-router-dom";
import ProtectedRoute from "@/Routes/ProtectedRoute";
import { useAuth } from "@/context/AuthContext";


const Navbar = ({ setSlide }) => {

    const { isAuthenticated } = useAuth();
    return (
        <>
            <Formik
                initialValues={{
                    profile: "",
                }}
                onSubmit={() => toast("Profile View")
                }
            >

                <div className="bg-white h-16 w-full shadow-lg px-6 flex justify-between items-center  ">

                    {/*Menu*/}
                    <div className="text-gray-500 hover:text-gray-700 cursor-pointer text-3xl md:hidden" onClick={() => setSlide(true)}><IoMenuSharp /></div>

                    {/*Noti & profile*/}
                    <div className="flex gap-10 items-center">
                        {/*Notification*/}
                        <IoMdNotificationsOutline className="text-gray-500 hover:text-gray-700 cursor-pointer text-3xl" />
                        {/*Profile*/}

                        {!isAuthenticated ?
                            (
                                <>
                                    <Link to="/register">Sign Up</Link>
                                    <Link to="/login" >Sign In</Link>
                                </>
                            )
                            :
                            (<Link to="/logout">Logout</Link>)}


                    </div>
                </div>

            </Formik >
        </>
    )
}

export default Navbar;