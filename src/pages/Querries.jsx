import { Button } from "@/components/ui/button";
import GetContact from "@/hooks/GetContact"
import { useNavigate } from "react-router-dom";
import PatchContact from "@/hooks/PatchContact";
import { useEffect, useState } from "react";

const style = {
    wrapper: "px-7 py-5 lg:px-13 lg:py-10 min-h-full w-full",
    header: "text-3xl lg:text-5xl font-bold tracking-wide mt-5",
    paragraph: "text-sm text-slate-400 mt-2",
    book: "border border-orange-400/50 hover:border-orange-500 bg-orange-400/50 hover:bg-orange-500/50 rounded px-4 py-1 hover:scale-[1.05] duration-300",
    new: " border border-green-500  bg-green-400/10 text-green-400 rounded px-1 py-1 text-sm ",
    border: " border border-orange-400/50 bg-orange-400/10 hover:bg-orange-500/30 hover:scale-[1.05] rounded-lg px-5 py-4  m-5 overflow-hidden cursor-pointer duration-300"
}

const Querries = () => {
    const { data } = GetContact();
    const navigate = useNavigate();
    const { markasRead } = PatchContact();
    const [message, setMessage] = useState(null);

    useEffect(() => {
        if (data)
            setMessage(data)
    }, [data]);

    const handleMarkAsRead = async (e, id) => {
        e.stopPropagation();
        await markasRead(id);
        setMessage((prev) =>
            prev.map((msg) => msg.id === id ? { ...msg, isRead: true } : msg));
    }

    return (
        <div className={style.wrapper}>

            <div className={style.header}>Contact Messages</div>


            {message && message.map((msg) => (
                <div key={msg.id}
                    className={style.border}
                    onClick={() => navigate(`/querry/${msg.id}`)}>
                    <div className="justify-between flex">
                        <div>
                            <p className="font-semibold">{msg.name} ({msg.email})</p>
                            <p className="text-sm text-gray-500">{msg.subject}</p>
                            <p>{msg.message}</p>
                        </div>
                        <div className="text-gray-500  flex sm:flex-col gap-2 md:flex-row">

                            <p> {!msg.isRead && <span className={style.new}>New</span>}</p>
                            <p> {new Date(msg.createdAt).toLocaleDateString()}</p>

                        </div>


                    </div>
                    <div className="border border-b m-2" />
                    <div className="flex flex-row gap-5">

                        <button type="submit" className="border bg-gray-300"> Send and Email</button>
                        {!msg.isRead && <button type="button" onClick={(e) => handleMarkAsRead(e, msg.id)}>Mark as Read</button>}

                    </div>
                </div>
            ))
            }

        </div >
    )
}
export default Querries;