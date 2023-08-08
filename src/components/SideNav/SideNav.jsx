import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

import {
    ArrowRightOnRectangleIcon,
    XMarkIcon,
    Bars3Icon,
} from "@heroicons/react/24/solid";

const SideNav = () => {
    const Links = [
        { name: "Mail", link: "./mails" },
        { name: "Gestion globale", link: "./gestion-globale" },
        { name: "Gestion des employés", link: "./gestion-employes" },
        { name: "Gestion des vehicules", link: "./gestion-vehicules" },
        { name: "Gestion des services", link: "./gestion-services" },
        { name: "Gestion des témoignages", link: "./gestion-temoignages" },
    ];

    const [open, setOpen] = useState(false);
    const toggleSideNav = () => {
        setOpen(!open);
    };

    const navigate = useNavigate();

    const handleSignOut = () => {
        navigate("/");
    };

    return (
        <aside className="text-yellow-02 w-full fixed z-40 top-0 left-0 lg:w-64 lg:h-screen">
            <nav className="items-center justify-between bg-black-02 lg:flex">
                <ul
                    className={`w-full h-full absolute transition-all duration-300 ease-in flex flex-col items-center py-5 space-y-5 z-[-1] list-none lg:z-auto lg:space-y-0 lg:py-0 lg:justify-around ${
                        open
                            ? "top-5 backdrop-blur-sm"
                            : "top-[-490px] backdrop-blur-none"
                    }`}
                >
                    <Link
                        onClick={handleSignOut}
                        className="flex items-center gap-4 text-lg lg-text-xl hover:text-white duration-300"
                    >
                        <ArrowRightOnRectangleIcon className="w-9" />
                        Déconnexion
                    </Link>
                    {Links.map((item) => (
                        <li
                            key={item.name}
                            className="text-lg lg:text-xl hover:text-white duration-300"
                            onClick={toggleSideNav}
                        >
                            <Link to={item.link}>{item.name}</Link>
                        </li>
                    ))}
                </ul>
                <button
                    onClick={toggleSideNav}
                    className="absolute top-5 right-6 border-0 icone-toggle bg-transparent p-1 lg:hidden w-9 h-9"
                >
                    {open ? <XMarkIcon /> : <Bars3Icon />}
                </button>
            </nav>
        </aside>
    );
};

export default SideNav;
