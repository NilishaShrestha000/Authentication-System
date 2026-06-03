import { Link } from "react-router-dom";
import { IoSettingsOutline } from "react-icons/io5";
import { IoIosTimer } from "react-icons/io";
import { FaRegUser } from "react-icons/fa";
import { MdLogout } from "react-icons/md";
import { GoHome } from "react-icons/go";
import { TbMessage2 } from "react-icons/tb";

const NavLinks = ({ closeSideBar }) => {
    return (
        <>
            <Link to="/dashboard" onClick={() => closeSideBar?.()} className="hover:bg-slate-600 px-4 rounded-lg py-5 flex gap-10 items-center">
                <GoHome /><span>Dashboard</span>
            </Link>
            <div className="hover:bg-slate-600 px-4 rounded-lg py-5 flex gap-10 items-center"><FaRegUser />Profile</div>
            <Link to="/reset-password" onClick={() => closeSideBar?.()} className="hover:bg-slate-600 px-4 rounded-lg py-5 flex gap-10 items-center">
                <IoSettingsOutline />Settings</Link>
            <div className="hover:bg-slate-600 px-4 rounded-lg py-5 flex gap-10 items-center"><TbMessage2 />Messages</div>
            <div className="hover:bg-slate-600 px-4 rounded-lg py-5 flex gap-10 items-center"><IoIosTimer />Activity</div>
            <Link to="/login" onClick={() => closeSideBar?.()} className="hover:bg-slate-600 px-4 rounded-lg py-5 flex gap-10 items-center">
                <MdLogout /><span>Logout</span>
            </Link>
        </>
    )
};

export default NavLinks;

