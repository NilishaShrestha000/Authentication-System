
import { Link } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import NavLinks from "./NavLinks";
import { useTheme } from "@/context/ThemeContext";
import { useRef, useState } from "react";

const style = {
    wrapper: "bg-background text-foreground h-16 w-full shadow-lg px-2 flex justify-between items-center border dark:border-b-gray-700",
    text: "flex text-foreground hover:text-orange-400 font-semibold items-center cursor-pointer border border-gray-300 hover:border-orange-400 rounded-2xl px-4 py-5 h-10",
    button: "flex text-foreground hover:text-orange-400 font-semibold items-center cursor-pointer border border-gray-300 hover:border-orange-400 rounded-2xl px-4 py-5 h-10 lg:hidden",
    dropdownMenu: "absolute right-0 mt-2 w-44 bg-background border border-gray-300 rounded-xl shadow-lg flex flex-col overflow-hidden z-50",
    dropdownItem: "px-4 py-2 text-sm text-foreground hover:bg-orange-400/15 hover:text-orange-400 cursor-pointer"
}

const Navbar = ({ setSlide }) => {

    const { isAuthenticated } = useAuth();
    const { theme, toggleTheme } = useTheme();
    const [menuopen, setMenuOpen] = useState(false);
    const menuRef = useRef(null);

    return (
        <>
            <div className={style.wrapper}>

                <Link to="/" className="flex items-center ">
                    <img src="/yenya.png" />
                </Link>

                <div className="hidden lg:flex gap-6">
                    <NavLinks />
                </div>

                <button className={style.button} onClick={() => setSlide(true)}>Menu</button>


                <div className="flex gap-2 lg:gap-5">
                    <button onClick={toggleTheme} className="text-foreground hover:text-orange-400">
                        {theme === 'dark' ? "☀️" : "🌑"}
                    </button>

                    {!isAuthenticated ?
                        (<Link to="/login" className={style.text}>Sign In</Link>)
                        :
                        (
                            <>
                                <div className="relative" ref={menuRef}>
                                    <button onClick={() => setMenuOpen((prev) => !prev)} className={style.text}>
                                        Account
                                    </button>

                                    {menuopen && (
                                        <>
                                            <div className={style.dropdownMenu}>
                                                <Link to="/reset-password" onClick={() => setMenuOpen(false)} className={style.dropdownItem}> Settings</Link>
                                                <Link to="/admin/queries" onClick={() => setMenuOpen(false)} className={style.dropdownItem}> View Queries </Link>
                                                <Link to="/logout" onClick={() => setMenuOpen(false)} className={style.dropdownItem}>Logout</Link>
                                            </div>
                                        </>
                                    )}


                                </div>
                            </>)
                    }

                </div>
            </div>

        </>
    )
}

export default Navbar;