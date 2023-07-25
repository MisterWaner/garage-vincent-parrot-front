import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import Logo from "../../assets/logo-garage.png";
import Menu from "../../assets/bars-solid.svg";

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    const toggleNav = () => {
        setToggleMenu(!toggleMenu);
    };

    const toggleItem = () => {
        setToggleMenu(!toggleMenu);
    };

    useEffect(() => {
        const changeWidth = () => {
            setScreenWidth(window.innerWidth);
        };

        window.addEventListener("resize", changeWidth);

        return () => {
            window.removeEventListener("resize", changeWidth);
        };
    }, []);

    const navigate = useNavigate();

    const handleClick = (e) => {
        e.preventDefault();
        navigate("/connexion");
    };

    return (
        <nav className="relative top-0 w-full h-[100px] text-yellow-02 font-bold md:fixed md:flex md:flex-row md:justify-between">
            {(toggleMenu || screenWidth > 768) && (
                <ul className="w-full flex flex-col items-center py-5 space-y-5 z-[3] list-none backdrop-blur-sm md:flex-row md:space-y-0 md:py-0 md:justify-around ">
                    <Link to="/" onClick={toggleItem}>
                        <img className="w-24 " src={Logo} alt="logo-garage" />
                    </Link>
                    <li onClick={toggleItem} className="text-xl lg:text-2xl">
                        <HashLink smooth to="/#mecanique">Mécanique</HashLink>
                    </li>
                    <li onClick={toggleItem} className="text-xl lg:text-2xl">
                        <HashLink smooth to="/#carrosserie">Carrosserie</HashLink>
                    </li>
                    <li onClick={toggleItem} className="text-xl lg:text-2xl">
                        <HashLink smooth to="/#auto">Parc automobile</HashLink>
                    </li>
                    <li onClick={toggleItem} className="text-xl lg:text-2xl">
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li className="font-racer text-xl lg:text-2xl">
                        <button onClick={handleClick}>Accès Personnel</button>
                    </li>
                </ul>
            )}

            <button
                onClick={toggleNav}
                className="absolute top-6 right-6 border-0 icone-toggle bg-transparent rounded-md p-1 md:hidden"
            >
                <img className="h-9 w-9" src={Menu} alt="menu icon" />
            </button>
        </nav>
    );
};

export default Navbar;
