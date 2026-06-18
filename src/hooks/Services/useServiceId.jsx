import { useState, useEffect } from "react";
import Api from "@/Api/api";
import { useSearchParams } from "react-router-dom";

const useServiceId = () => {
    const [searchParams] = useSearchParams();
    const id = searchParams.get("id");
    const [service, setService] = useState([]);


    useEffect(() => {
        const fetchid = async () => {
            try {
                const res = await Api.get(`/api/services/${id}`)
                setService(res.data);
            } catch (err) {
                console.log(err)
            }
        }
        fetchid();
    }, [id]);



    if (!service) return <p>Loading...</p>

    return { service };
}
export default useServiceId;