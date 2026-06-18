import GetMyProfile from "@/hooks/Profile/GetMyProfile";

const Profile = () => {

    const { getprofile } = GetMyProfile();

    return (
        <>
            <div>view profile</div>
            {
                getprofile && (
                    <>
                        <div>{getprofile.id}</div>
                        <div>{getprofile.fullName}</div>
                        <div>{getprofile.email}</div>
                        <div>{getprofile.phone}</div>
                        <div>{getprofile.password}</div>
                        <div>{getprofile.role}</div>
                        <div>{getprofile.createdAt}</div>
                    </>
                )

            }


        </>
    )
}
export default Profile;