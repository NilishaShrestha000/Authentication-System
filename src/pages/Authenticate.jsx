import Api from "@/Api/api";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Authenticate = () => {

    const [data, setData] = useState(null);
    const navigate = useNavigate();

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

    return (
        <div className="min-h-full w-full">
            <div className="text-black grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-4 p-10 transition-all">
                {data && data.map((item) => (
                    <div key={item.id} onClick={() => navigate(`/services/${item.id}`)} className="border border-gray-500 shadow-xl hover:shadow-2xl rounded-lg p-2 cursor-pointer">
                        <div className="font-bold text-center">{item.title}</div>
                        <p className="text-center mt-">{item.shortDescription}</p>
                    </div>
                ))}
            </div>
        </div>

    )
}
export default Authenticate;