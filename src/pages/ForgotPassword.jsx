import { Formik, Form } from "formik";
import { FaLock } from "react-icons/fa";
import FormInput from "../components/FormInput";
import { Button } from "../components/ui/button";
import { Link } from "react-router-dom"
import { TbWorld } from "react-icons/tb";
import { ForgotSchema } from "@/validation/authSchema";
import { ToastContainer, toast } from "react-toastify";
import Api from "@/Api/api";

const ForgotPassword = () => {

    return (
        <>
            <Formik
                initialValues={{
                    email: ""
                }}
                validationSchema={ForgotSchema}
                onSubmit={async (values) => {
                    try {
                        const res = await Api.post("/api/auth/forgot-password", {
                            email: values.email
                        })
                        toast("You can change your password now.")
                        setTimeout(() => { window.location.href = res.data.resetLink }, 2000)
                    } catch (err) {
                        toast.error(err.response?.data?.message || "Not valid")
                    }
                }}>
                {(formik) => (
                    <div className=" h-screen">
                        <div className="flex items-center justify-center h-screen transition-all">
                            <div className=" w-full h-full md:h-3/4 md:w-3/5 md:rounded-2xl md:border border-gray-500 flex">

                                {/*left pannel*/}

                                <div className=" w-full flex flex-col items-center justify-center rounded-r-2xl">

                                    <div className=" flex flex-col items-center text-center gap-4">
                                        <div className="flex text-violet-600 items-center justify-center w-15 h-15  bg-violet-400/50 rounded-full">< FaLock className="text-2xl" /></div>
                                        <h1 className="text-2xl font-bold">Change Password?</h1>
                                        <p className="text-lg text-gray-500">Enter your email address <span className="hidden md:block">and we will allow you to reset your password.</span></p>
                                    </div>


                                    <Form className='md:p-5 p-4 w-full md:w-3/4 mx-auto mt-5 '>

                                        <div>
                                            <FormInput
                                                label="Email"
                                                type="email"
                                                name="email"
                                                placeholder="Enter your email"
                                                className="mt-2">
                                            </FormInput>
                                        </div>
                                        <div className="mt-5 ">
                                            <Button className=" w-full bg-violet-600/50 hover:bg-violet-800 text-white">Send Reset Link</Button>
                                            <ToastContainer />
                                        </div>

                                        <div className="mt-5 justify-center flex">
                                            <Link to="/login" className="text-violet-600 hover:text-red-500">Back to Login</Link>
                                        </div>

                                    </Form>
                                </div>



                                {/*right pannel*/}
                                <div className="hidden md:flex bg-violet-400/50 w-1/2  items-center justify-center rounded-r-2xl">

                                    <img src="/forgot.png"
                                        className="h-100"></img>
                                </div>


                            </div>
                        </div>
                    </div>
                )}
            </Formik >
        </>
    )
}
export default ForgotPassword;