import { useState, useEffect } from "react";
import Api from "@/Api/api";
import { useParams } from "react-router-dom";

const useServiceId = () => {
    const { id } = useParams();
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