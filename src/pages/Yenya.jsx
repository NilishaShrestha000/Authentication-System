import Api from "@/Api/api";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import { LuLayoutDashboard } from "react-icons/lu";
import { FaRegCircleCheck } from "react-icons/fa6";
import { TiDocumentDelete } from "react-icons/ti";
import { IoRocketOutline } from "react-icons/io5";
import useServices from "@/components/useServices";

const style = {
    wrapper: " px-7 py-5 lg:px-13 lg:py-10 min-h-full w-full",
    header: "text-3xl lg:text-5xl font-bold tracking-wide mt-5",
    paragraph: "text-[12px] lg:text-lg tracking-wide text-orange-400",
    flashservicelist: "grid grid-cols-4 gap-4 lg:gap-6 mt-3",
    border: " border border-gray-500 hover:border-violet-400/60 shadow-lg hover:shadow-2xl items-center rounded-lg p-2 bg-white/10 hover:bg-violet-400/15",
    icon: "text-xl lg:text-2xl text-violet-400",
    text: "font-bold text-xl lg:text-2xl mt-2 mb-2",
    names: "lg:text-lg text-[10px]",
    services: "group bg-white/10 hover:bg-violet-400/15 border border-gray-500 hover:border-violet-400/60 hover:text-violet-400 rounded-2xl cursor-pointer transition-all duration-300 hover:scale-[1.05] px-4 py-3",
    circle: "w-2 h-2 rounded-full bg-violet-400 inline-block",
    techborder: "border border-gray-500 hover:border-violet-400/60 shadow-lg hover:shadow-2xl items-center rounded-md px-5 bg-white/10 hover:bg-violet-400/15 flex gap-2"
}

const Yenya = () => {

    const navigate = useNavigate();
    const { data } = useServices();
    const { isAuthenticated } = useAuth();

    const [userName, setUserName] = useState('Guest')

    useEffect(() => {
        if (isAuthenticated) {
            const fetchProfile = async () => {
                try {
                    const res = await Api.get("/api/auth/profile");
                    setUserName(res.data.fullName)
                } catch (err) {
                    console.log(err);
                }
            }
            fetchProfile();
        }
    }, [isAuthenticated]);

    return (
        <div className={style.wrapper}>

            <div className={style.header}>
                Welcome, {userName}
            </div>

            <div className="text-sm text-slate-400 mt-2">
                Explore our services and find the right solution for your project
            </div>

            <div className={`${style.paragraph} mt-5 `}>
                HERE'S WHAT WE OFFER
            </div>

            {data && <div className={style.flashservicelist}>
                <div className={style.border}>
                    <div className={style.icon}>< LuLayoutDashboard /></div>
                    <div className={style.text}>{data.length}</div>
                    <div className={style.names}>TOTAL SERVICES</div>
                </div>
                <div className={style.border}>
                    <div className={style.icon}>< FaRegCircleCheck /></div>
                    <div className={style.text}>{data.length}</div>
                    <div className={style.names}>AVAILABLE NOW</div>
                </div>
                <div className={style.border}>
                    <div className={style.icon}>< TiDocumentDelete /></div>
                    <div className={style.text}>{[...new Set(data.flatMap(d => d.tags))].length}</div>
                    <div className={style.names}>TOTAL TECH STACK</div>
                </div>
                <div className={style.border}>
                    <div className={style.icon}>< IoRocketOutline /></div>
                    <div className={style.text}>
                        {data.filter(d => {
                            const created = new Date(d.createdAt);
                            const now = new Date();
                            return created.getMonth() === now.getMonth() && created.getFullYear() === now.getFullYear();
                        }).length}
                    </div>
                    <div className={style.names}>NEW THIS MONTH</div>
                </div>
            </div>}


            {/* list of services */}
            <div className={` text-lg lg:text-2xl m-5 text-center font-bold`}>
                List of Services
            </div>

            <div className="grid lg:grid-cols-4 grid-cols-2 gap-4 transition-all mt-3">
                {data.map((item) => (
                    <div key={item.id}
                        onClick={() => navigate(`/services/${item.id}`)}
                        className={style.services}>
                        <img src={`${Api.defaults.baseURL}/public/${item.image}`} className="w-full"></img>
                        <div className="font-bold text-base">{item.title}</div>
                        <p className="text-sm text-slate-400">{item.shortDescription}</p>
                        <div className="text-xs text-slate-500 group-hover:text-violet-400 pt-2 flex items-center gap-1">
                            View Details
                        </div>
                    </div>
                ))}
            </div>


            {/* List of tech stack */}
            <div className="border border-gray-500 shadow-lg hover:shadow-xl items-center rounded-xl p-2 bg-white/10 mt-10">
                {data && (
                    <div >
                        <div className="flex justify-between mt-5 px-5">
                            <div className="text-lg lg:text-2xl font-bold">Tech Stack</div>
                            <div className="text-sm lg:text-xl text-orange-400 font-medium">
                                {[...new Set(data.flatMap(d => d.tags))].length} technologies
                            </div>
                        </div>

                        <div className="flex gap-4 transition-all flex-wrap p-9">
                            {[...new Set(data.flatMap(d => d.tags))].map((tag, index) => (
                                <div
                                    key={index}
                                    className={style.techborder}>
                                    <span className={style.circle}></span>
                                    <div className=" text-md lg:text-xl">{tag} </div>
                                </div>
                            ))}

                        </div>
                    </div>
                )}


            </div>
        </div>
    )
}
export default Yenya;