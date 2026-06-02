import { Formik, Form } from "formik";
import { FaRegUser } from "react-icons/fa";
import FormInput from "../components/FormInput";
import Checkbox from "../components/Checkbox"
import { Button } from "../components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { TbWorld } from "react-icons/tb";
import { LoginSchema } from "@/validation/authSchema";
import { ToastContainer, toast } from "react-toastify";
import Api from "@/Api/api";

const Login = () => {
    const navigate = useNavigate();
    // const notify = () => toast("Conpleted Login");
    return (
        <>
            <Formik

                initialValues={{
                    email: "",
                    password: "",
                    rememberMe: "",
                }}
                validationSchema={LoginSchema}
                onSubmit={async (values) => {
                    try {
                        const res = await Api.post("/api/auth/login", {
                            email: values.email,
                            password: values.password,
                        });
                        localStorage.setItem("token", res.data.token);
                        toast("Conpleted Login");
                        setTimeout(() => navigate("/"), 2000);
                    } catch (err) {
                        toast.error(err.response?.data?.message || "Not valid")
                    }
                }} >
                {(formik) => (
                    <>
                        <div className="bg-gray-100 ">

                            <div className=" md:px-30 md:py-10  h-screen transition-all">

                                <div className="flex h-full  md:border-3 rounded-2xl">

                                    {/*left pannel*/}
                                    <div className="hidden md:block">
                                        <div className="bg-violet-600  flex h-full items-center justify-center text-white tracking-wide px-10 rounded-l-2xl ">
                                            <div className=" flex flex-col items-center text-center">
                                                <img src="/security.png" className="h-30 w-30 mb-5"></img>
                                                <h1 className="font-semibold text-2xl mb-5">Welcome Back!</h1>
                                                <p className="text-xl">Login to your account to continue to your dashboard.</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/*Right pannel*/}
                                    <div className="bg-white w-full flex flex-col items-center justify-center rounded-r-2xl">
                                        <div className=" flex flex-col items-center text-center gap-4">
                                            <div className="flex text-violet-600 items-center justify-center w-15 h-15  bg-violet-100 rounded-full"><FaRegUser className="text-2xl" /></div>
                                            <h1 className="text-2xl font-bold">Login</h1>
                                            <p className="text-lg text-gray-500">Enter your credentials <span className="hidden sm:block">to access your account</span></p>
                                        </div>

                                        <Form className='p-10 w-full md:w-3/4 mx-auto mt-5'>

                                            <div>
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
                                                    label="Password"
                                                    name="password"
                                                    type="password"
                                                    placeholder="Enter your password"
                                                    className="mt-2"
                                                >
                                                </FormInput>
                                            </div>

                                            <div className="mt-5 justify-between flex">
                                                <Checkbox
                                                    name="rememberMe"
                                                    className="cursor-pointer"
                                                >
                                                    Remember Me
                                                </Checkbox>
                                                <Link to="/forgot-password" className="text-violet-600 hover:text-red-500">Forgot password?</Link>
                                            </div>

                                            <div className="mt-5">
                                                <Button type="submit" className="w-full bg-violet-600 hover:bg-violet-800">Login</Button>
                                                <ToastContainer />
                                            </div>

                                            <div className="mt-5 flex gap-3 justify-center">
                                                <p>Don't have an account? </p>
                                                <Link to="/register" className="text-violet-600 hover:text-red-500">Register</Link>

                                            </div>

                                        </Form>
                                    </div>
                                </div>
                            </div>
                        </div >
                    </>
                )}
            </Formik >
        </>
    )
}
export default Login;