import { useState } from "react"
import Api from "@/Api/api";

const PatchContact = () => {

    const [error, setError] = useState(false);
    const markasRead = async (id) => {
        setError(false);
        try {
            const res = await Api.patch(`/api/contact/${id}/read`, { isRead: true });
            return res.data;
        }
        catch (err) {
            console.log(err);
        }
    }

    return { markasRead, error }

}


export default PatchContact;