import { Formik, Form } from "formik";
import { FaLock } from "react-icons/fa";
import FormInput from "../components/FormInput";
import { Button } from "../components/ui/button";
import { Link, useNavigate } from "react-router-dom"
import { ResetSchema } from "@/validation/authSchema";
import { ToastContainer, toast } from "react-toastify";
import Api from "@/Api/api";

const ResetPassword = () => {
    const navigate = useNavigate();
    const param = new URLSearchParams(window.location.search);
    const token = param.get("token");
    return (
        <>
            <Formik
                initialValues={{
                    newPassword: "",
                    confirmPassword: "",
                }}
                validationSchema={ResetSchema}
                onSubmit={async (values) => {
                    try {
                        if (!token) {
                            toast.error("You need token to reset/update passwword")
                            return
                        };
                        const res = await Api.post("/api/auth/reset-password", {
                            token: token,
                            newPassword: values.newPassword,
                            confirmPassword: values.confirmPassword
                        });
                        toast("Paasword updated!")
                        navigate("/dashboard")

                    } catch (err) {
                        toast.error(err.response?.data?.message || "Not valid")
                    }
                }}>

                {(formik) => (
                    <div className=" bg-gray-100 min-h-screen">
                        <div className="flex items-center justify-center h-screen transition-all">

                            <div className="flex w-full h-full md:h-3/4 md:w-3/5  md:border-3 rounded-2xl">

                                {/*left pannel*/}
                                <div className=" w-full h-full flex flex-col items-center justify-center md:rounded-r-2xl">

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
                                                name="newPassword"
                                                placeholder="Enter new password"
                                                className="mt-2">
                                            </FormInput>
                                        </div>

                                        <div className="mt-5">
                                            <FormInput
                                                label="Confirm Password"
                                                type="password"
                                                name="confirmPassword"
                                                placeholder="Confirm new password"
                                                className="mt-2">
                                            </FormInput>
                                        </div>

                                        <div className="mt-5">
                                            <Button className="w-full bg-violet-600 hover:bg-violet-800">Reset Password</Button>
                                            <ToastContainer />
                                        </div>

                                        <div className="mt-5  flex justify-between">
                                            <Link to="/login" className="text-violet-600 hover:text-red-500">Back to Login</Link>
                                            <Link to="/forgot-password" className="text-violet-600 hover:text-red-500">Click here to get the Reset Password Token</Link>
                                        </div>

                                    </Form>
                                </div>



                                {/*right pannel*/}
                                <div className="hidden md:block">
                                    <div className="w-80 h-full flex bg-violet-50 items-center justify-center">
                                        <div className="items-center">
                                            <img src="/forgot.png"></img>
                                        </div>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>
                )}
            </Formik>
        </>
    )
}
export default ResetPassword;