import { useState, useEffect } from "react";
import Api from "@/Api/api";

const useServices = () => {
    const [data, setData] = useState([]);

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


    return { data };
}
export default useServices;