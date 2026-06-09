import { Link } from "react-router-dom";

const NavLinks = ({ closeMenu, isMobile }) => {
    const desktopLink = "text-foreground text-lg hover:text-orange-400 font-semibold";
    const mobileLink = "text-foreground text-lg px-6 py-5 border-b border-gray-700 hover:text-orange-400";
    const linkClass = isMobile ? mobileLink : desktopLink;

    return (
        <>
            <Link to="/home" className={linkClass} onClick={() => closeMenu?.()}>
                <span> Home</span>
            </Link>
            <Link to="/services" className={linkClass} onClick={() => closeMenu?.()}>
                <span>Services</span>
            </Link>
            <Link to="/contact" className={linkClass} onClick={() => closeMenu?.()}>
                <span>Contact Us</span>
            </Link>
        </>
    )
};

export default NavLinks;

