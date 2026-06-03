import { Link } from "react-router-dom"
import NavLinks from "./NavLinks"


const Sidebar = ({ slide, setSlide }) => {

    return (
        <>
            <aside className="hidden  md:flex w-80 bg-slate-800 min-h-full text-white flex-col gap-8 items-center text-xl font-semibold">

                <div className="flex items-center justify-between w-full mt-4 px-7">
                    <Link to="/" className="flex items-center">
                        <img src="/dash.png" className="h-10 w-10" />
                        <div className='font-bold text-white text-2xl'>Authenticate</div>
                    </Link>
                </div>

                <div className="w-full mt-5 px-4">
                    <nav className='flex flex-col gap-2 w-full '>
                        <NavLinks />
                    </nav>
                </div>

            </aside >

            {/* for small screen*/}

            <aside className={` md:hidden fixed top-0 left-0 w-80  bg-slate-800 h-full text-white flex flex-col gap-8 items-center  text-xl font-semibold z-50 transform transition-transform duration-300
                 ${slide ? "translate-x-0" : "-translate-x-full"}`}>

                <div className="flex items-center justify-between w-full mt-4 px-7">
                    <Link to="/" onClick={() => setSlide(false)} className="flex items-center">
                        <img src="/dash.png" className="h-10 w-10" />
                        <div className='font-bold text-white text-2xl'>Authenticate</div>
                    </Link>
                </div>

                <div className="w-full mt-5 px-4">
                    <nav className='flex flex-col gap-2 w-full '>
                        <NavLinks closeSideBar={() => setSlide(false)} />
                    </nav>
                </div>

            </aside >
        </>
    )
}

export default Sidebar;