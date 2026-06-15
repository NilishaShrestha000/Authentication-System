import GetContact from "@/hooks/GetContact";
import { useNavigate, useParams } from "react-router-dom"
import GetContactId from "@/hooks/GetContactId";
import { Link } from "react-router-dom";


const QuerryDetail = () => {

    const { contactid } = GetContactId();
    const navigate = useNavigate();

    const getInitials = (name) => {
        if (!name) return "?";
        const parts = name.trim().split(" ");
        if (parts.length === 1) return parts[0][0];
        return (parts[0][0] + parts[parts.length - 1][0]);
    }

    return (
        <div className="p-10">

            <p>
                <Link to="/admin/queries" className="border border-orange-400 bg-orange-400/10 hover:bg-orange-500/50 hover:scale-[1.05] duration-300 mb-3 p-2 rounded-lg"> Back to Messages</Link>
            </p>

            <div className="border border-gray-500 px-5 py-4 m-5">

                <div>{getInitials(contactid.name)}</div>

                <div className="font-bold text-2xl">
                    Name:
                    <span className="font-normal"> {contactid.name}</span>
                </div>
                <div className="font-bold text-2xl">
                    Email:
                    <span className="font-normal"> {contactid.email}</span>
                </div>
                <div className="font-bold text-2xl">
                    Phone:
                    <span className="font-normal"> {contactid.phone}</span>
                </div>
                <div className="font-bold text-2xl">
                    Subject:
                    <span className="font-normal"> {contactid.subject}</span>
                </div>
                <div className="font-bold text-2xl">
                    Message:
                    <span className="font-normal"> {contactid.messgae}</span>
                </div>
                <div className="font-bold text-2xl">
                    Sent at:
                    <span className="font-normal"> {new Date(contactid.createdAt).toLocaleString()}</span>
                </div>
            </div>
        </div >
    )
}

export default QuerryDetail;