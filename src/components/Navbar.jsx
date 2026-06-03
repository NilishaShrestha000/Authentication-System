
import { Form, Formik } from "formik";
import { IoMenuSharp } from "react-icons/io5";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FaRegUser } from "react-icons/fa";
import SelectBox from "./SelectBox";
import { toast } from "react-toastify";


const Navbar = ({ setSlide }) => {
    return (
        <>
            <Formik
                initialValues={{
                    profile: "",
                }}
                onSubmit={() => toast("Profile View")
                }
            >

                {() => (
                    <div className="bg-white h-16 w-full shadow-lg px-6 flex justify-between items-center  ">

                        {/*Menu*/}
                        <div className="text-gray-500 hover:text-gray-700 cursor-pointer text-3xl md:hidden" onClick={() => setSlide(true)}><IoMenuSharp /></div>

                        {/*Noti & profile*/}
                        <div className="flex gap-10 items-center">
                            {/*Notification*/}
                            <IoMdNotificationsOutline className="text-gray-500 hover:text-gray-700 cursor-pointer text-3xl" />
                            {/*Profile*/}
                            <Form className="flex gap-3 group items-center justify-center">
                                <SelectBox
                                    name="profile"
                                >
                                    <option value=""><FaRegUser /></option>
                                    <option value="profile">View Profile</option>
                                    {/* { value: 'settings', label: "Settings" } */}

                                </SelectBox>
                            </Form>
                        </div>
                    </div>
                )}
            </Formik >
        </>
    )
}

export default Navbar;