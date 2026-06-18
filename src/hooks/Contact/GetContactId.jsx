import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom";
import Api from "@/Api/api";
const GetContactId = () => {
    const [searchParams] = useSearchParams();
    const id = searchParams.get("id");
    const [contactid, setContactId] = useState([]);

    useEffect(() => {
        const fetchcontactid = async () => {
            try {
                const res = await Api.get(`/api/contact/${id}`);
                setContactId(res.data);
            }
            catch (err) {
                console.log(err)
            }
        }
        fetchcontactid();
    }, [id]);

    return { contactid };
}
export default GetContactId;