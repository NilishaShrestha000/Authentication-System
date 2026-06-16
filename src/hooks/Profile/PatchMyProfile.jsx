import { useEffect, useState } from "react"
import Api from "@/Api/api";
const PatchMyProfile = () => {
    const [patchprofile, setPatchProfile] = useState([]);


    useEffect(() => {


        const handlepatchProfile = async (value) => {
            try {
                const formData = new FormData();
                formData.append("fullName", value.fullName);
                formData.append("email", value.email);
                formData.append("phone", value.phone);

                const res = await Api.patch("/api/profile")
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