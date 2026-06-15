import Api from "@/Api/api"
import { useEffect, useState } from "react"


const GetContact = () => {
    const [contact, SetContact] = useState(null);

    useEffect(() => {
        const fetchContact = async () => {
            try {
                const res = await Api.get("/api/contact")

                SetContact(res.data)
            }
            catch (err) {
                console.log(err)
            }
        }
        fetchContact();
    }, []);

    return { data: contact }
}

export default GetContact;