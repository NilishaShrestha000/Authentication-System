import { useState } from "react"
import Api from "@/Api/api"

const PostContact = () => {
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);


    const fetch = async (values) => {

        setError(false);
        setSuccess(false);

        try {
            const res = await Api.post("/api/contact", values)
            setSuccess(true)

            return res.data;

        }
        catch (err) {
            console.log(err);
            setError(err);
        }
    }

    return { fetch, success, error }
}


export default PostContact;


