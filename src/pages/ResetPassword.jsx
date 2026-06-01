import { Formik, Form } from "formik";
import { FaLock } from "react-icons/fa";
import FormInput from "../components/FormInput";
import { Button } from "../components/ui/button";
import { Link } from "react-router-dom"
import { TbWorld } from "react-icons/tb";
import { ResetSchema } from "@/validation/authSchema";

const ResetPassword = () => {
    return (
        <>
            <Formik
                initialValues={{
                    newpassword: "",
                    confirmpassword: "",
                }}
                validationSchema={ResetSchema}
                onSubmit={(values) => {
                    alert("Paasword updated!")
                }}>
                <div className="p-10 bg-gray-100 h-screen">

                    <Link to="/" className="text-2xl text-violet-600 hover:text-violet-800"><TbWorld /></Link>

                    <div className="bg-white rounded-2xl border h-full flex">

                        {/*left pannel*/}
                        <div className=" w-full flex flex-col items-center justify-center rounded-r-2xl">

                            <div className=" flex flex-col items-center text-center gap-4">
                                <div className="flex text-violet-600 items-center justify-center w-15 h-15  bg-violet-100 rounded-full">< FaLock className="text-2xl" /></div>
                                <h1 className="text-2xl font-bold">Reset Password</h1>
                                <p className="text-lg text-gray-500">Enter your new password below</p>
                            </div>

                            <Form className='p-10 w-full mx-auto mt-5 '>

                                <div>
                                    <FormInput
                                        label="New Password"
                                        type="password"
                                        name="newpassword"
                                        placeholder="Enter new password"
                                        className="mt-2">
                                    </FormInput>
                                </div>

                                <div className="mt-5">
                                    <FormInput
                                        label="Confirm Password"
                                        type="password"
                                        name="confirmpassword"
                                        placeholder="Confirm new password"
                                        className="mt-2">
                                    </FormInput>
                                </div>

                                <div className="mt-5">
                                    <Button className="w-full bg-violet-600 hover:bg-violet-800">Reset Password</Button>
                                </div>

                                <div className="mt-5 justify-center flex">
                                    <Link to="/login" className="text-violet-600 hover:text-red-500">Back to Login</Link>
                                </div>

                            </Form>
                        </div>



                        {/*right pannel*/}
                        <div className="w-80 flex bg-violet-50 items-center justify-center">
                            <div className="items-center">
                                <img src="/forgot.png"></img>
                            </div>
                        </div>


                    </div>
                </div>
            </Formik>
        </>
    )
}
export default ResetPassword;