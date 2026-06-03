import { useEffect, useState } from "react";
import Api from "@/Api/api";
import { FaRegFolderClosed } from "react-icons/fa6";
import { FaRegCheckCircle } from "react-icons/fa";
import { LuMessageCircleMore } from "react-icons/lu";
import { IoMdTrendingUp } from "react-icons/io";
import { IoNotificationsOutline } from "react-icons/io5";

const Dashboard = () => {
    const [contact, setContact] = useState(null);

    useEffect(() => {
        const fetchContacts = async () => {
            try {
                const res = await Api.get("/api/services");
                console.log(res);
                setContact(res.data);
            } catch (err) {
                console.log(err);
            }
        }
        fetchContacts();
    }, []);
    return (
        <>
            <div className="p-15">
                <h1 className="font-bold text-5xl tracking-wide">Welcome back, John Doe! 👋</h1>
                <p className="mt-5 text-xl">Here's what's happening with your account today.</p>

                <div className="mt-5">
                    {contact && (
                        <div className=" grid md:grid-cols-4 grid-cols-2 gap-5 text-center ">

                            <div className="border border-gray-500 shadow-lg hover:shadow-2xl gap-5 rounded-xl px-10 py-3 justify-between items-center flex overflow-hidden">
                                <div>
                                    <div>Total Projects</div>
                                    <div className="font-bold md:text-xl">{contact[3].price}</div>
                                </div>
                                <div className=" text-violet-400 text-2xl hidden md:block"><FaRegFolderClosed /></div>
                            </div>

                            <div className="border border-gray-500 shadow-lg hover:shadow-2xl gap-5 rounded-xl  px-10 py-3 justify-between items-center flex overflow-hidden">
                                <div>
                                    <div>Currrently Active</div>
                                    <div className="font-bold md:text-xl">{contact[3].order}</div>
                                </div>
                                <div className=" text-green-400 text-2xl hidden md:block"><FaRegCheckCircle /></div>
                            </div>


                            <div className="border border-gray-500 shadow-xl hover:shadow-2xl gap-5 rounded-xl  px-10 py-3 justify-between items-center flex overflow-hidden">
                                <div>
                                    <div>Notifications</div>
                                    <div className="font-bold md:text-xl">{contact[2].order}</div>
                                </div>

                                <div className=" text-yellow-400 text-2xl hidden md:block"><IoNotificationsOutline /></div>
                            </div>

                            <div className="border border-gray-500 shadow-lg hover:shadow-2xl gap-5 rounded-xl  px-10 py-3 justify-between items-center flex overflow-hidden">
                                <div>
                                    <div>In Market</div>
                                    <div className="font-bold md:text-xl">{contact[3].icon}</div>
                                </div>
                                <div className=" text-red-400 text-2xl hidden md:block"><IoMdTrendingUp /></div>
                            </div>
                        </div>
                    )}
                </div>

            </div >

        </>
    )
}
export default Dashboard;