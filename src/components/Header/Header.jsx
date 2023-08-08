import { useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import Logo from "../../assets/logo-garage.png";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const Header = () => {
    const Links = [
        { name: "Mécanique", link: "/#mecanique" },
        { name: "Carrosserie", link: "/#carrosserie" },
        { name: "Parc automobile", link: "/#auto" },
        { name: "Avis", link: "/#avis" },
        { name: "Contact", link: "/contact" },
        { name: "Accès professionnel", link: "/connexion" },
    ];

    const [open, setOpen] = useState(false);

    const toggleMenu = () => {
        setOpen(!open);
    };

    return (
        <header className="text-yellow-02 w-full fixed z-40 top-0 left-0">
            <nav className="lg:flex items-center justify-between bg-black-02">
                <Link to="/" onClick={() => setOpen(false)}>
                    <img className="w-40" src={Logo} alt="logo-garage" />
                </Link>

                <ul
                    className={`w-full h-fit absolute lg:static transition-all duration-300 ease-in flex flex-col items-center py-5 space-y-5 z-[-1] list-none lg:z-auto lg:flex-row lg:space-y-0 lg:py-0 lg:justify-around ${
                        open
                            ? "top-[155px] backdrop-blur-sm"
                            : "top-[-490px] backdrop-blur-none"
                    }`}
                >
                    {Links.map((item) => (
                        <li
                            key={item.name}
                            className="text-lg lg:text-xl hover:text-white duration-300"
                            onClick={toggleMenu}
                        >
                            <HashLink to={item.link} smooth>
                                {item.name}
                            </HashLink>
                        </li>
                    ))}
                </ul>
                <button
                    onClick={toggleMenu}
                    className="absolute top-16 right-6 border-0 icone-toggle bg-transparent p-1 lg:hidden w-9 h-9"
                >
                    {open ? <XMarkIcon /> : <Bars3Icon />}
                </button>
            </nav>
        </header>
    );
};

export default Header;
