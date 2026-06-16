import { useEffect, useState } from "react"
import Api from "@/Api/api";


const ContactStats = () => {

    const [stats, setStats] = useState([]);

    useEffect(() => {

        const checkstats = async () => {
            try {
                const res = await Api.get("/api/contact/stats");
                setStats(res.data);
            }
            catch (err) {
                console.log(err)
            }
        }
        checkstats();
    }, []);

    return { stats }
}
export default ContactStats;