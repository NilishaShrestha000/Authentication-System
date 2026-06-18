import { useEffect, useState } from "react"
import Api from "@/Api/api";

const GetMyProfile = () => {
    const [getprofile, setGetProfile] = useState([]);

    useEffect(() => {

        const fetchProfile = async () => {
            try {
                const res = await Api.get("/api/profile");
                setGetProfile(res.data);
            }
            catch (err) {
                console.log(err)
            }
        }
        fetchProfile();
    }, []);

    return { getprofile }
}
export default GetMyProfile;