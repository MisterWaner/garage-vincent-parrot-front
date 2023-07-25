import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
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
        <nav className="fixed top-0 z-[4] w-full h-[100px] text-yellow-02 backdrop-blur-sm">
            <Link to="/">
                <img className="w-24" src={Logo} alt="logo-garage" />
            </Link>
            {(toggleMenu || screenWidth > 768) && (
                <ul className="flex flex-col items-center py-5 space-y-5 z-[3] list-none backdrop-blur-sm border border-b-black md:flex-row md:space-y-0 md:py-0 md:justify-around ">
                    <li onClick={toggleItem}>
                        <Link to="#mecanique">
                            Mécanique
                        </Link>
                    </li>
                    <li onClick={toggleItem}>
                        <Link to="#carrosserie">
                            Carrosserie
                        </Link>
                    </li>
                    <li onClick={toggleItem}>
                        <Link to="#auto">
                            Parc automobile
                        </Link>
                    </li>
                    <li onClick={toggleItem}>
                        <Link to="/contact">
                            Contact
                        </Link>
                    </li>
                    <li>
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
