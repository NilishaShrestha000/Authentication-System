import { Formik, Form } from "formik";
import { FaRegUser } from "react-icons/fa";
import FormInput from "../components/FormInput";
import { Button } from "../components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { RegisterSchema } from "@/validation/authSchema";
import { ToastContainer, toast } from "react-toastify";
import Api from "@/Api/api";
import { useAuth } from "@/context/AuthContext";

const Register = () => {
    const navigate = useNavigate();
    const { login } = useAuth();
    return (
        <>
            <Formik
                initialValues={{
                    fullName: "",
                    email: "",
                    phone: "",
                    password: "",
                    confirmPassword: "",
                }}
                validationSchema={RegisterSchema}
                onSubmit={async (values) => {
                    try {

                        const res = await Api.post("/api/auth/register", {
                            fullName: values.fullName,
                            email: values.email,
                            phone: values.phone,
                            password: values.password,
                            confirmPassword: values.confirmPassword
                        });
                        login(res.data.ascessToken);
                        toast("Registration completed!");
                        setTimeout(() => navigate("/login"), 2000);
                    } catch (err) {
                        toast.error(err.response?.data?.message || "registration Failed");
                    }
                }}>
                {(formik) => (
                    <div className=" sm:min-h-screen">
                        <div className="flex items-center justify-center min-h-screen transition-all p-5">

                            <div className=" h-full w-full md:h-3/4 md:w-3/5 flex flex-col items-center justify-center md:rounded-2xl md:border-3 p-5">

                                <div className=" flex flex-col items-center text-center md:gap-4">
                                    <div className="flex text-violet-600 items-center justify-center w-15 h-15  bg-violet-400/50 rounded-full"><FaRegUser className="text-2xl" /></div>
                                    <h1 className="text-2xl font-bold">Create Account</h1>
                                    <p className="text-lg text-gray-500">Fill in the details <span className="hidden md:block">to create your account</span></p>
                                </div>

                                <Form className='md:p-10 p-4 w-full mx-auto mt-5'>
                                    <div className=" grid md:grid-cols-2 gap-5">

                                        <div className="mt-5">
                                            <FormInput
                                                label="Full Name"
                                                name="fullName"
                                                type="text"
                                                placeholder="Enter your full name"
                                                className="mt-2"
                                            >
                                            </FormInput>
                                        </div>

                                        <div className="mt-5">
                                            <FormInput
                                                label="Email"
                                                name="email"
                                                type="email"
                                                placeholder="Enter your email"
                                                className="mt-2"
                                            >
                                            </FormInput>
                                        </div>

                                        <div className="mt-5">
                                            <FormInput
                                                label="Phone Number"
                                                name="phone"
                                                type="text"
                                                placeholder="Enter your phone number"
                                                className="mt-2"
                                            >
                                            </FormInput>
                                        </div>

                                        <div className="mt-5">
                                            <FormInput
                                                label="Password"
                                                name="password"
                                                type="password"
                                                placeholder="Enter your password"
                                                className="mt-2"
                                            >
                                            </FormInput>
                                        </div>

                                        <div className="mt-5">
                                            <FormInput
                                                label=" Confirm Password"
                                                name="confirmPassword"
                                                type="password"
                                                placeholder="Confirm your password"
                                                className="mt-2"
                                            >
                                            </FormInput>
                                        </div>
                                    </div>


                                    <div className="mt-5">
                                        <Button type="submit" className="w-full bg-violet-600/50 hover:bg-violet-800 text-white">Register</Button>
                                        <ToastContainer />
                                    </div>

                                    <div className="mt-5 flex gap-3 justify-center">
                                        <p>Already have an account? </p>
                                        <Link to="/login" className="text-violet-600 hover:text-red-500">Login</Link>

                                    </div>


                                </Form>
                            </div>
                        </div>
                    </div>
                )}
            </Formik >
        </>

    )
}
export default Register;