import useServices from "@/hooks/Services/useServices";
import Api from "@/Api/api";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";


const style = {
    wrapper: "px-7 py-5 lg:px-13 lg:py-10 min-h-full w-full",
    text: "text-sm lg:text-md text-orange-400 text-center font-semibold tracking-wide",
    header: "text-3xl lg:text-5xl font-medium tracking-wide mt-5 text-center",
    paragraph: "text-sm lg:text-md text-slate-400 mt-2 text-center",
    book: "border border-gray-500 hover:border-orange-400 bg-gray-400/15 hover:bg-orange-500/50 rounded px-3 py-2 duration-300",
    services: "group bg-white/10 hover:bg-violet-400/15 border border-gray-500 hover:border-violet-400/60 hover:text-violet-400 rounded-2xl cursor-pointer transition-all duration-300 hover:scale-[1.05] px-4 py-3",
    p: "font-bold text-2xl lg:text-3xl text-orange-400",
    e: "font-semibold ",
    b: "border border-orange-400/50 hover:border-orange-500 bg-orange-400/50 hover:bg-orange-500/50 rounded px-4 py-1 hover:scale-[1.05] duration-300",
    browse: " border border-gray-500 hover:border-orange-400 hover:bg-orange-500/50 rounded px-2 py-1 hover:scale-[1.05] duration-300",
    border: "flex border border-orange-400/50 bg-orange-400/10 border-l-5 rounded-lg px-5 py-4 justify-between gap-5"

}

const Services = () => {
    const { data } = useServices();

    const navigate = useNavigate();
    return (
        <div className={style.wrapper}>
            <p className={style.text}>WHAT WE OFFER</p>
            <h1 className={style.header}>Our Services</h1>
            <p className={style.paragraph}>We build fast, scalable, and responsive products — from web apps to mobile experiences.</p>

            <div className="mt-10 flex flex-row gap-10 items-center justify-center">
                <div className="flex flex-col gap-2 text-center">
                    <p className={style.p}>
                        {data && (
                            <div>
                                {[...new Set(data.flatMap(d => d.id))].length}
                            </div>
                        )}
                    </p>
                    <p className={style.e}> Offered Services</p>
                </div>
                <div className="flex flex-col gap-2 text-center">
                    <p className={style.p}>
                        {data && (
                            <div>
                                {[...new Set(data.flatMap(d => d.tags))].length}
                            </div>
                        )}
                    </p>
                    <p className={style.e}>Total Tools & Technologies</p>
                </div>
                <div className="flex flex-col gap-2 text-center">
                    <p className={style.p}>
                        {/* {data && (

                            data.filter(d => {
                                const created = new Date(d.createdAt);
                                const now = new Date;
                                return created.getMonth() === now.getMonth() && created.getFullYear() === now.getFullYear();
                            })
                        )} */}
                    </p>
                    <p className={style.e}>New Services</p>
                </div>
            </div>

            <div className="mt-5 justify-center flex">
                <Link to="/contact" className={style.book}>
                    Contact us
                </Link>
            </div>

            <div className="border border-b mt-5 mb-5"></div>

            <div className="grid lg:grid-cols-4 grid-cols-2 gap-4 transition-all mt-5">
                {data.map((item) => (
                    <>
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

                    </>
                ))}



                <div className="mt-5">
                    <div className={`${style.border} border-r-5`}>
                        <div>
                            <h1>Ready to start your project?</h1>
                            <p>Want to inquire about anything?</p>
                        </div>
                        <a href="https://wa.me/9779863034097" target="_blank" className={`${style.b} text-[10px] items-center flex h-7`} > Contact us</a>

                    </div>
                </div>

            </div>
        </div>
    )
}
export default Services;