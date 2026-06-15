import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import Api from "@/Api/api";
const GetContactId = () => {
    const { id } = useParams();
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