import useProfile from "@/hooks/useProfile";
import useServices from "@/hooks/useServices";
import ServiceSummary from "@/hooks/ServiceSummary";
import { Link } from "react-router-dom";
import TechStack from "@/hooks/TechStack";
import PostServices from "@/hooks/PostServices";

const style = {
    wrapper: "px-7 py-5 lg:px-13 lg:py-10 min-h-full w-full",
    header: "text-3xl lg:text-5xl font-bold tracking-wide mt-5",
    paragraph: "text-sm text-slate-400 mt-2",
    book: "border border-orange-400/50 hover:border-orange-500 bg-orange-400/50 hover:bg-orange-500/50 rounded px-4 py-1 hover:scale-[1.05] duration-300",
    browse: " border border-gray-500 hover:border-orange-400 hover:bg-orange-500/50 rounded px-2 py-1 hover:scale-[1.05] duration-300",
    border: "flex border border-orange-400/50 bg-orange-400/10 border-l-5 rounded-lg px-5 py-4 justify-between gap-5"
}
const Home = () => {
    const { userName } = useProfile();
    const { data } = useServices();
    return (
        <>
            <div className={style.wrapper}>
                <h1 className={style.header}>Welcome back, {userName}</h1>
                <p className={style.paragraph}>Here's what's happening with your account today.</p>

                <div className="flex flex-row gap-5 text-sm mt-5 ">
                    <a href="https://wa.me/9779863034097" target="_blank" className={style.book}>Book a Free Consulation</a>
                    <Link to="/services" className={style.browse}>Browse Services</Link>
                </div>

                <div className="mt-5">
                    <ServiceSummary />
                </div>

                <div className="mt-5">
                    {data &&
                        (
                            data.filter(d => {
                                const created = new Date(d.createdAt);
                                const now = new Date;
                                return created.getMonth() === now.getMonth() && created.getFullYear() === now.getFullYear();
                            })
                                .map((item) => (

                                    <div key={item} className={style.border}>
                                        <div className="flex flex-col">
                                            <p className="border border-orange-400/50 bg-orange-400/5 text-[12px] w-35 py-1 justify-center flex text-orange-600 rounded-xl">NEW THIS MONTH</p>
                                            <div className=" text-lg lg:text-xl font-semibold mt-3 mb-1">{item.title}</div>
                                            <div className="text-[12px] lg:text-sm text-gray-500 font-medium">{item.shortDescription}</div>
                                        </div>
                                        <div className="items-center flex">
                                            <Link to="/services" className={`${style.book} text-[10px]`}>View details</Link>
                                        </div>
                                    </div>

                                ))
                        )
                    }

                </div >

                <div>
                    <TechStack />
                </div>

                <div className="mt-5">
                    <div className={`${style.border} border-r-5`}>
                        <div>
                            <h1>Ready to start your project?</h1>
                            <p>Let's build something great together.</p>
                        </div>
                        <div>
                            Contact us
                        </div>
                    </div>
                </div>

                <div className="mt-5">
                    <PostServices />
                </div>

            </div >

        </>
    )
}
export default Home;