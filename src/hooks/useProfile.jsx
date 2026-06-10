import { useEffect, useState } from "react";
import Api from "@/Api/api";
import { useAuth } from "@/context/AuthContext";

const useProfile = () => {

    const [userName, setUserName] = useState("Guest");
    const { isAuthenticated } = useAuth();

    useEffect(() => {
        if (isAuthenticated) {
            const fetchProfile = async () => {
                try {
                    const res = await Api.get("/api/auth/profile");
                    setUserName(res.data.fullName)
                } catch (err) {
                    console.log(err);
                }
            }
            fetchProfile();
        }
    }, [isAuthenticated]);

    return { userName }
}

export default useProfile;