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
                        toast("Link sent")
                        setTimeout(() => { window.location.href = res.data.resetLink }, 1000)
                    } catch (err) {
                        toast.error(err.response?.data?.message || "Not valid")
                    }
                }}>
                {(formik) => (
                    <div className="bg-gray-100 h-screen">
                        <div className="md:px-30 md:py-10 lg:px-80 lg:py-20 h-screen transition-all">
                            <div className="bg-white md:rounded-2xl md:border h-full flex">

                                {/*left pannel*/}

                                <div className=" w-full flex flex-col items-center justify-center rounded-r-2xl">

                                    <div className=" flex flex-col items-center text-center gap-4">
                                        <div className="flex text-violet-600 items-center justify-center w-15 h-15  bg-violet-100 rounded-full">< FaLock className="text-2xl" /></div>
                                        <h1 className="text-2xl font-bold">Forgot Password?</h1>
                                        <p className="text-lg text-gray-500">Enter your email address <span className="hidden md:block">and we will send you a link to reset your password.</span></p>
                                    </div>


                                    <Form className='p-10 w-full md:w-3/4 mx-auto mt-5 '>

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
                                            <Button className=" w-full bg-violet-600 hover:bg-violet-800">Send Reset Link</Button>
                                            <ToastContainer />
                                        </div>

                                        <div className="mt-5 justify-center flex">
                                            <Link to="/login" className="text-violet-600 hover:text-red-500">Back to Login</Link>
                                        </div>

                                    </Form>
                                </div>



                                {/*right pannel*/}
                                <div className="hidden md:block">
                                    <div className="w-80 flex bg-violet-50 items-center justify-center">
                                        <div className="items-center">
                                            <img src="/forgot.png"></img>
                                        </div>
                                    </div>
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