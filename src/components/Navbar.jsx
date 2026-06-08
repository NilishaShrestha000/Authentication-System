
import { Link } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import NavLinks from "./NavLinks";
import { useTheme } from "@/context/ThemeContext";

const style = {
    wrapper: "bg-background text-foreground h-16 w-full shadow-lg px-6 flex justify-between items-center border dark:border-b-gray-700",
    text: "flex text-foreground hover:text-orange-400 font-semibold items-center cursor-pointer border border-border rounded-2xl px-4 py-5 h-10",
    button: "flex text-foreground hover:text-orange-400 font-semibold items-center cursor-pointer border border-border rounded-2xl px-4 py-5 h-10 lg:hidden"
}

const Navbar = ({ setSlide }) => {

    const { isAuthenticated } = useAuth();
    const { theme, toggleTheme } = useTheme();

    return (
        <>
            <div className={style.wrapper}>

                <Link to="/" className="flex items-center">
                    <img src="/yenya.png" />
                </Link>

                <div className="hidden lg:flex gap-6">
                    <NavLinks />
                </div>

                <button className={style.button} onClick={() => setSlide(true)}>Menu</button>


                <div className="flex gap-5">
                    <button onClick={toggleTheme} className="text-foreground hover:text-orange-400">
                        {theme === 'dark' ? "☀️" : "🌑"}
                    </button>

                    {!isAuthenticated ?
                        (<Link to="/login" className={style.text}>Sign In</Link>)
                        :
                        (<Link to="/logout" className={style.text}>Logout</Link>)
                    }
                </div>
            </div>

        </>
    )
}

export default Navbar;