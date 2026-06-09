import { useState, useEffect } from "react";
import Api from "@/Api/api";
import { useParams } from "react-router-dom";

const useServices = () => {
    const { id } = useParams();
    const [data, setData] = useState([]);
    const [service, setService] = useState([]);

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

    return { data, service };
}
export default useServices;