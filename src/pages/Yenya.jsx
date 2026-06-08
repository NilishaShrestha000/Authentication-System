import Api from "@/Api/api";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import { LuLayoutDashboard } from "react-icons/lu";
import { FaRegCircleCheck } from "react-icons/fa6";
import { TiDocumentDelete } from "react-icons/ti";
import { IoRocketOutline } from "react-icons/io5";

const style = {
    wrapper: " px-7 py-5 lg:px-13 lg:py-10 min-h-full w-full",
    header: "text-3xl lg:text-5xl font-bold tracking-wide",
    paragraph: "text-sm lg:text-lg tracking-wide",
    flashservicelist: "grid grid-cols-4 gap-4 lg:gap-6 mt-3",
    border: " border border-gray-500 hover:border-violet-400/60 shadow-lg hover:shadow-2xl items-center rounded-lg p-2 bg-white/10 hover:bg-violet-400/15",
    icon: "text-xl lg:text-2xl text-violet-400",
    text: "font-bold text-xl lg:text-2xl mt-2 mb-2",
    names: "lg:text-lg text-[10px]",
    services: "group bg-white/5 group-hover:bg-violet-400/15 border border-gray-500 hover:border-violet-400/60 hover:text-violet-400 rounded-2xl cursor-pointer transition-all duration-300 hover:scale-[1.05] px-4 py-3"

}

const Yenya = () => {

    const navigate = useNavigate();
    const { isAuthenticated } = useAuth();

    const [data, setData] = useState(null);

    useEffect(() => {
        const fetch = async () => {
            try {
                const res = await Api.get("/api/services");
                setData(res.data)
            }
            catch (err) {
                console.log(err)
            }
        }
        fetch()
    }, []);

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

            <div className={`${style.paragraph} mt-5 `}>
                List of Services
            </div>

            <div className="grid lg:grid-cols-4 grid-cols-2 gap-4 transition-all mt-3">
                {data && data.map((item) => (
                    <div key={item.id}
                        onClick={() => navigate(`/services/${item.id}`)}
                        className={style.services}>
                        <div className="w-2 h-2 rounded-full bg-slate-500 group-hover:bg-violet-400 transition-all duration-300" />
                        <img src={`http://127.0.0.1:3000/public/medias/7c37c2a2-ca97-4c3f-b8c2-b2324d6c35a1.png`} className="w-full"></img>
                        <div className="font-bold text-base">{item.title}</div>
                        <p className="text-sm text-slate-400 leading-relaxed">{item.shortDescription}</p>
                        <div className="text-xs text-slate-500 group-hover:text-violet-400 pt-2 flex items-center gap-1">
                            View Details
                        </div>
                    </div>
                ))}
            </div>
        </div >

    )
}
export default Yenya;