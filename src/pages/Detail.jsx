import Api from "@/Api/api";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Detail = () => {
    const { id } = useParams();
    const [service, setService] = useState(null);

    useEffect(() => {
        const fetch = async () => {
            try {
                const res = await Api.get(`/api/services/${id}`)
                setService(res.data);
            } catch (err) {
                console.log(err)
            }
        }
        fetch();
    }, [id]);

    if (!service) return <p>Loading...</p>

    return (
        <div className="p-10">
            <div className="border p-5 lg:flex lg:gap-5">
                <img src={service.imageUrl} ></img>
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
                    <div className="text-lg sm:text-xl mt-2 font-semibold">Booked till now: <span className="font-normal">{service.order}</span></div>
                </div>
            </div>
        </div>

    )
}
export default Detail;