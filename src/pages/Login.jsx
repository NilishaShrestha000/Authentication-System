import { Formik, Form } from "formik";
import { FaRegUser } from "react-icons/fa";
import FormInput from "../components/FormInput";
import Checkbox from "../components/Checkbox"
import { Button } from "../components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { TbWorld } from "react-icons/tb";
import { LoginSchema } from "@/validation/authSchema";

const Login = () => {
    const navigate = useNavigate();

    return (
        <>
            <Formik

                initialValues={{
                    email: "",
                    password: "",
                    remember: "",
                }}
                validationSchema={LoginSchema}
                onSubmit={(values) => {
                    navigate("/");
                }} >
                {(formik) => (

                    <div className="p-10 h-screen bg-gray-100 ">

                        <Link to="/" className="text-2xl text-violet-600 hover:text-violet-800"><TbWorld /></Link>

                        <div className="flex h-full  border-3 rounded-2xl">

                            {/*left pannel*/}
                            <div className="bg-violet-600 w-80 flex items-center justify-center text-white tracking-wide px-10 rounded-l-2xl">
                                <div className=" flex flex-col items-center text-center">
                                    <img src="/security.png" className="h-30 w-30 mb-5"></img>
                                    <h1 className="font-semibold text-2xl mb-5">Welcome Back!</h1>
                                    <p className="text-xl">Login to your account to continue to your dashboard.</p>
                                </div>
                            </div>

                            {/*Right pannel*/}
                            <div className="bg-white w-full flex flex-col items-center justify-center rounded-r-2xl">
                                <div className=" flex flex-col items-center text-center gap-4">
                                    <div className="flex text-violet-600 items-center justify-center w-15 h-15  bg-violet-100 rounded-full"><FaRegUser className="text-2xl" /></div>
                                    <h1 className="text-2xl font-bold">Login</h1>
                                    <p className="text-lg text-gray-500">Enter your credentials to access your account</p>
                                </div>

                                <Form className='p-10 w-full mx-auto mt-5'>

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
                                            name="remember"
                                            className="cursor-pointer"
                                        >
                                            Remember me
                                        </Checkbox>
                                        <Link to="/forgotpassword" className="text-violet-600 hover:text-red-500">Forgot password?</Link>
                                    </div>

                                    <div className="mt-5">
                                        <button type="submit" className="w-full bg-violet-600 hover:bg-violet-800 rounded">Login</button>
                                    </div>

                                    <div className="mt-5 flex gap-3 justify-center">
                                        <p>Don't have an account? </p>
                                        <Link to="/register" className="text-violet-600 hover:text-red-500">Register</Link>

                                    </div>


                                </Form>
                            </div>
                        </div>
                    </div >
                )}
            </Formik >
        </>
    )
}
export default Login;