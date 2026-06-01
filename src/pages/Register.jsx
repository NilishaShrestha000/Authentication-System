import { Formik, Form } from "formik";
import { FaRegUser } from "react-icons/fa";
import FormInput from "../components/FormInput";
import Checkbox from "../components/Checkbox"
import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";
import { TbWorld } from "react-icons/tb";
import { RegisterSchema } from "@/validation/authSchema";


const Register = () => {
    return (
        <>
            <Formik
                initialValues={{
                    name: "",
                    email: "",
                    phonenumber: "",
                    password: "",
                    confirmpassword: "",
                }}
                validationSchema={RegisterSchema}
                onSubmit={(values) => {
                    alert("Registration completed!");
                }}>

                <div className="p-10 h-screen bg-gray-100">

                    <Link to="/" className="text-2xl text-violet-600 hover:text-violet-800"><TbWorld /></Link>

                    <div className="bg-white h-full w-full flex flex-col items-center justify-center rounded border-3">

                        <div className=" flex flex-col items-center text-center gap-4">
                            <div className="flex text-violet-600 items-center justify-center w-15 h-15  bg-violet-100 rounded-full"><FaRegUser className="text-2xl" /></div>
                            <h1 className="text-2xl font-bold">Create Account</h1>
                            <p className="text-lg text-gray-500">Fill in the details to create your account</p>
                        </div>

                        <Form className='p-10 w-full mx-auto mt-5'>
                            <div className=" grid grid-cols-2 gap-5">

                                <div className="mt-5">
                                    <FormInput
                                        label="Full Name"
                                        name="name"
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
                                        name="phonenumber"
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
                                        name="confirmpassword"
                                        type="password"
                                        placeholder="Confirm your password"
                                        className="mt-2"
                                    >
                                    </FormInput>
                                </div>
                            </div>


                            <div className="mt-5">
                                <Button className="w-full bg-violet-600 hover:bg-violet-800">Register</Button>
                            </div>

                            <div className="mt-5 flex gap-3 justify-center">
                                <p>Already have an account? </p>
                                <Link to="/login" className="text-violet-600 hover:text-red-500">Login</Link>

                            </div>


                        </Form>
                    </div>
                </div>
            </Formik >
        </>

    )
}
export default Register;