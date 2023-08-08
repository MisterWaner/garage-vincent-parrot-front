import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

import {
    ArrowRightOnRectangleIcon,
    InboxIcon,
    Cog6ToothIcon,
    UserGroupIcon,
    TruckIcon,
    AdjustmentsHorizontalIcon,
    ChatBubbleOvalLeftEllipsisIcon,
    XMarkIcon,
    Bars3Icon,
} from "@heroicons/react/24/solid";

const SideNav = () => {
    const Links = [
        { name: "Mail", link: "./mails", icon: <InboxIcon /> },
        {
            name: "Gestion globale",
            link: "./gestion-globale",
            icon: <Cog6ToothIcon />,
        },
        {
            name: "Gestion des employés",
            link: "./gestion-employes",
            icon: <UserGroupIcon />,
        },
        {
            name: "Gestion des vehicules",
            link: "./gestion-vehicules",
            icon: <TruckIcon />,
        },
        {
            name: "Gestion des services",
            link: "./gestion-services",
            icon: <AdjustmentsHorizontalIcon />,
        },
        {
            name: "Gestion des témoignages",
            link: "./gestion-temoignages",
            icon: <ChatBubbleOvalLeftEllipsisIcon />,
        },
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
        <aside className="h-screen min-h-full bg-red-02 fixed top-0 left-0 z-40 text-yellow-02">
            <nav className="flex flex-col h-full w-60">
                <button
                    onClick={toggleSideNav}
                    className="absolute top-6 right-6 border-0 icone-toggle bg-transparent p-1 w-9 h-9"
                >
                    {open ? <XMarkIcon /> : <Bars3Icon />}
                </button>
                <ul className="w-full h-full absolute transition-all duration-300 ease-in flex flex-col items-center justify-around px-4 py-5 space-y-5 ">
                    <Link
                        onClick={handleSignOut}
                        className="flex items-center justify-between w-full gap-4 text-lg lg-text-xl hover:text-white duration-300"
                    >
                        Déconnexion
                        <ArrowRightOnRectangleIcon className="w-9" />
                    </Link>
                    {Links.map((item) => (
                        <li className="flex items-center justify-between w-full gap-4" key={item.name}>
                            <Link to={item.link} onClick={toggleSideNav}>
                                {item.name}
                            </Link>
                            <div className="w-9">{item.icon}</div>
                        </li>
                    ))}
                </ul>
            </nav>
        </aside>
    );
};

export default SideNav;
