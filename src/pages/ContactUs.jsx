import { Formik, Form } from "formik";
import { FaWhatsapp, FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { GrPhone } from "react-icons/gr";
import { GrMapLocation } from "react-icons/gr";
import { BiLogoGmail } from "react-icons/bi";
import FormInput from "@/components/FormInput";
import { Button } from "@/components/ui/button";
import PostContact from "@/hooks/PostContact";


const style = {
    wrapper: "px-7 py-5 lg:px-13 lg:py-10 min-h-full w-full",
    text: "text-sm lg:text-md text-orange-400  font-semibold tracking-wide",
    header: "text-3xl lg:text-5xl font-medium tracking-wide mt-5",
    paragraph: "text-sm lg:text-md text-slate-400 mt-2",
    book: "border border-gray-500 hover:border-orange-400 bg-gray-400/15 hover:bg-orange-500/50 rounded px-3 py-2 duration-300",
    services: "group bg-white/10 hover:bg-violet-400/15 border border-gray-500 hover:border-violet-400/60 hover:text-violet-400 rounded-2xl cursor-pointer transition-all duration-300 hover:scale-[1.05] px-4 py-3",
    p: "font-bold text-2xl lg:text-3xl text-orange-400",
    e: "font-semibold ",
    b: "border border-orange-400/50 hover:border-orange-500 bg-orange-400/50 hover:bg-orange-500/50 rounded px-4 py-1 hover:scale-[1.05] duration-300",
    browse: " border border-gray-500 hover:border-orange-400 hover:bg-orange-500/50 rounded px-2 py-1 hover:scale-[1.05] duration-300",
    border: "flex border border-orange-400/10 bg-orange-400/5 rounded-lg px-5 py-4 justify-between gap-5"

}

const ContactUs = () => {

    const { fetch, success, error } = PostContact();
    return (
        <div className={style.wrapper}>

            <div className={style.text}>GET IN TOUCH</div>

            <div className={style.header}> Contact Us</div>

            <div className={style.paragraph}>Have a project in mind? we would love to hear about it. Fill in the form and we will get back to you as soon as possible.</div>

            <div className="items-center justify-center flex mt-10">
                <div className={style.border}>
                    <div className=" flex justify-between gap-15">

                        <div className="flex flex-col">

                            <div className="p-3 rounded-lg bg-orange-300/15">
                                <div className="flex items-center gap-2 px-2">
                                    <div className="bg-red-400/15 rounded-md items-center p-2"><GrPhone /></div>
                                    <div>
                                        <p className="text-sm text-gray-600">Phone</p>
                                        <a href="https://wa.me/9779863034097" target="_blank" >+977 9860000000</a>
                                    </div>
                                </div>

                                <div className="border border-b m-3"></div>

                                <div className="flex items-center gap-2 px-2">
                                    <div className="bg-red-400/15 rounded-md items-center p-2"><  BiLogoGmail /></div>
                                    <div>
                                        <p className="text-sm text-gray-600">Email</p>
                                        <div>yenya@mail.com</div>
                                    </div>
                                </div>

                                <div className="border border-b m-3"></div>

                                <div className="flex items-center gap-2 px-2">
                                    <div className="bg-red-400/15 rounded-md items-center p-2"><GrMapLocation /></div>
                                    <div>
                                        <p className="text-sm text-gray-600">Location</p>
                                        <a href="https://www.google.com/maps/place/YenyaSoft+Private+Limited/@27.6819545,85.3095148,17z/data=!3m1!4b1!4m6!3m5!1s0x39eb1900248d8c65:0x17a8c7b55d87649a!8m2!3d27.6819545!4d85.3095148!16s%2Fg%2F11w247x_39?entry=ttu&g_ep=EgoyMDI2MDYwMy4xIKXMDSoASAFQAw%3D%3D" target="_blank">Sanepa, Lalitpur</a>
                                    </div>
                                </div>
                            </div>

                            <div className="border mt-3 bg-white/5 px-2 py-1 flex items-center gap-2 rounded-md">
                                <div className="rounded-full bg-green-700 h-2 w-2"></div>
                                <div className="text-sm text-gray-700 font-semibold">Available Mon-Fri, 9AM - 6PM</div>
                            </div>

                            <div className="flex flex-col mt-3">
                                <div className="text-sm text-gray-600">Find us on</div>
                                <div className=" flex flex-row gap-2  text-lg mb-5 text-gray-500">
                                    <a href="https://github.com/NilishaShrestha000/Authentication-System" target="_blank" className="border p-2 rounded-lg">< FaGithub /></a>
                                    <a href="https://wa.me/9779863034097" target="_blank" className="border p-2 rounded-lg"><FaWhatsapp /></a>
                                    <a href="https://www.linkedin.com/company/yenya-soft-private-limited/posts/?feedView=all" target="_blank" className="border p-2 rounded-lg"><FaLinkedin /></a>
                                </div >
                            </div>
                        </div>

                        <div className=" flex flex-row">

                            <div className="flex gap-2">

                                <div className="flex flex-col">
                                    <p className="justify-center font-semibold text-orange-400 flex">Fill in the form</p>
                                    <Formik
                                        initialValues={{
                                            name: "",
                                            email: "",
                                            phone: "",
                                            subject: "",
                                            message: ""
                                        }}
                                        onSubmit={async (values, { resetForm }) => {
                                            await fetch(values);

                                            resetForm();
                                        }}
                                    >
                                        <Form>
                                            <FormInput
                                                label="Name"
                                                name="name"
                                                type="text"
                                                placeholder='Enter your Name'
                                            />


                                            <FormInput
                                                label="Email Address"
                                                name="email"
                                                type="email"
                                                placeholder="Enter your Email Address"
                                                className="mt-2"
                                            />

                                            <FormInput
                                                label="Phone Number"
                                                name="phone"
                                                type="number"
                                                placeholder="Enter your Phone Number"
                                                className="mt-2"
                                            />

                                            <FormInput
                                                label="Subject"
                                                name="subject"
                                                type="text"
                                            />

                                            <FormInput
                                                label="message"
                                                name='message'
                                                placeholder='Write why you want to contact us'
                                            />

                                            <Button type="submit" className="mt-2 w-full hover:bg-orange-600 bg-orange-400">Send</Button>
                                        </Form>

                                    </Formik>
                                </div>

                            </div>

                        </div>

                    </div>
                </div>
            </div>



        </div>

    )
}
export default ContactUs;


