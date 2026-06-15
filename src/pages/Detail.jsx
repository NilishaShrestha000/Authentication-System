import Api from "@/Api/api";
import { useNavigate, useParams } from "react-router-dom";
import useServices from "@/hooks/useServices";
import useServiceId from "@/hooks/useServiceId";
import DeleteService from "@/hooks/DeleteService";

const Detail = () => {
    const { id } = useParams();
    const { data } = useServices();
    const { service } = useServiceId();
    const navigate = useNavigate();

    return (
        <div className="p-10">

            {/*selected services*/}
            <div className="border p-5 lg:flex lg:gap-5">
                <img src={`${Api.defaults.baseURL}/public/${service.image}`} className="lg:w-1/2" ></img>
                <div>
                    <div className="font-bold text-wide text-3xl lg:text-4xl sm:mt-2"> {service.title} </div>
                    <div className="text-lg sm:text-xl mt-2">{service.description}</div>
                    <div className="text-lg sm:text-xl mt-2">Price for the course is "{service.price} {service.currency}".</div>
                    <ul>
                        <div className="text-lg sm:text-xl mt-2 font-semibold">Tools & Technology</div>
                        {service.tags && service.tags.map((tags, index) => (
                            <li key={index}>
                                {tags}
                            </li>
                        ))}
                    </ul>
                </div>

            </div>

            {/*explore other services*/}
            <div className={` text-lg lg:text-2xl m-5 text-center font-bold`}>
                Explore more services
            </div>
            <div className="flex gap-4 px-5 py-2 transition-all overflow-scroll scrollbar-none">
                {data.filter(item => item.id !== id).map((item) => (
                    <div key={item.id}
                        onClick={() => navigate(`/services/${item.id}`)}
                        className="group min-w-50 bg-white/10 hover:bg-violet-400/15 border border-gray-500 hover:border-violet-400/60 hover:text-violet-400 rounded-2xl cursor-pointer transition-all duration-300 hover:scale-[1.05] px-4 py-3">
                        <img src={`${Api.defaults.baseURL}/public/${item.image}`} className="w-full"></img>
                        <div className="font-bold text-base">{item.title}</div>
                        <p className="text-sm text-slate-400">{item.shortDescription}</p>
                        <div className="text-xs text-slate-500 group-hover:text-violet-400 pt-2 flex items-center gap-1">
                            View Details
                        </div>
                    </div>
                ))}
            </div>
        </div>

    )
}
export default Detail;