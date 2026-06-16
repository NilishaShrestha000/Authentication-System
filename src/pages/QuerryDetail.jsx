
import { useParams } from "react-router-dom"
import GetContactId from "@/hooks/Contact/GetContactId";
import { Link } from "react-router-dom";
import { MdMailOutline } from "react-icons/md";
import { MdOutlineLocalPhone } from "react-icons/md";
import { MdLabelOutline } from "react-icons/md";
import { MdOutlineMessage } from "react-icons/md";
import { IoTimerOutline } from "react-icons/io5";
import DeleteQuerry from "@/hooks/Contact/DeleteQuerry";

const QuerryDetail = () => {
    const { id } = useParams();

    const { contactid } = GetContactId();


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

            <div className="border border-gray-500 rounded-lg bg-orange-400/5   m-5">

                <div className="border bg-white/50 px-5 py-4 rounded-t-lg ">

                    <div className="flex items-center gap-5">

                        <div className="border  border-orange-400 bg-orange-400/50 rounded-full w-10 h-10 items-center flex justify-center ">{getInitials(contactid.name)}</div>

                        <div className="font-bold text-2xl">
                            <span className="font-normal text-lg"> {contactid.name}</span>
                        </div>

                    </div>

                    <div className="border border-b border-gray-500 mt-3 mb-3" />

                    <div>
                        <div className=" text-gray-300 flex items-center gap-2">
                            <MdMailOutline /> Email
                        </div>
                        <p className="font-normal"> {contactid.email}</p>
                    </div>

                    <div className="border border-b border-gray-500 mt-3 mb-3" />

                    <div >
                        <div className=" text-gray-300 flex items-center gap-2">
                            <MdOutlineLocalPhone />Phone:
                        </div>
                        <p className="font-normal"> {contactid.phone}</p>
                    </div>

                    <div className="border border-b border-gray-500 mt-3 mb-3" />

                    <div>
                        <div className=" text-gray-300 flex items-center gap-2">
                            <MdLabelOutline />Subject:
                        </div>
                        <span className="font-normal"> {contactid.subject}</span>
                    </div>

                    <div className="border border-b border-gray-500 mt-3 mb-3" />

                    <div>
                        <div className=" text-gray-300 flex items-center gap-2">
                            <MdOutlineMessage />Message:
                        </div>
                        <span className="font-normal"> {contactid.message}</span>
                    </div>

                    <div className="border border-b border-gray-500 mt-3 mb-3" />

                    <div>
                        <div className=" text-gray-300 flex items-center gap-2">
                            <IoTimerOutline />  SENT AT:
                        </div>
                        <span className="font-normal"> {new Date(contactid.createdAt).toLocaleString()}</span>
                    </div>
                </div>

                <div className="p-3 justify-right gap-3 flex ">
                    <div><DeleteQuerry id={id} /></div>
                    <a href={`https://mail.google.com/mail/?view=cm&to=${contactid.email}&su=Re: ${encodeURIComponent(contactid.subject)}`}
                        target="_blank"
                        onClick={(e) => e.stopPropagation()}
                        className="border rounded-md flex items-center gap-2 px-2 py-1 text-md bg-gray-400 hover:bg-green-400/50 hover:scale-[1.05] duration-300"> Send and Email</a>
                </div>
            </div>
        </div >
    )
}

export default QuerryDetail;