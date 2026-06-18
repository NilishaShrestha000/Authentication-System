import { useEffect, useState } from "react"
import Api from "@/Api/api";
const PatchMyProfile = () => {
    const [patchprofile, setPatchProfile] = useState([]);


    useEffect(() => {
        const handlepatchProfile = async (value) => {
            try {
                const res = await Api.patch("/api/profile/change-password")
                setPatchProfile(res);
            } catch (err) {
                console.log(err.response?.data);
            }
        }
        handlepatchProfile();
    }, []);
    return { patchprofile }
}
export default PatchMyProfile;