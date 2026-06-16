import Api from "@/Api/api";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import useServices from "@/hooks/Services/useServices";
import useProfile from "@/hooks/useProfile";
import ServiceSummary from "@/hooks/ServiceSummary";
import TechStack from "@/hooks/TechStack";

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
    const { userName } = useProfile();

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

            <ServiceSummary />

            {/* list of services */}
            <div className={` text-lg lg:text-2xl m-5 text-center font-bold text-orange-400`}>
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
            <div>
                <TechStack />
            </div>

        </div>
    )
}
export default Yenya;