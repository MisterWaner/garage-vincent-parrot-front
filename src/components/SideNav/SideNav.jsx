import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

import {
    ArrowRightOnRectangleIcon,
    InboxIcon,
    Cog6ToothIcon,
    UserGroupIcon,
    TruckIcon,
    ChatBubbleOvalLeftEllipsisIcon,
    XMarkIcon,
    Bars3Icon,
} from "@heroicons/react/24/solid";

const SideNav = () => {
    const Links = [
        { name: "Mail", link: "/admin/mails", icon: <InboxIcon /> },
        {
            name: "Gestion globale",
            link: "/admin/globals",
            icon: <Cog6ToothIcon />,
        },
        {
            name: "Gestion des employés",
            link: "/admin/employees",
            icon: <UserGroupIcon />,
        },
        {
            name: "Gestion des vehicules",
            link: "/admin/car-park",
            icon: <TruckIcon />,
        },
        {
            name: "Gestion des témoignages",
            link: "/admin/reviews",
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
        <aside className="h-screen min-h-full  fixed top-0 left-0 z-40 text-yellow-02">
            <nav
                className={`flex flex-col h-full absolute transition-all duration-300 ease-in w-60 border border-r-yellow-02 ${
                    open ? "left-0 bg-red-02/60 " : "left-[-180px] bg-red-02"
                }`}
            >
                <button
                    onClick={toggleSideNav}
                    className="absolute z-40 top-2 right-4 border-0 icone-toggle bg-transparent pl-2 w-9 h-9 hover:text-white duration-300"
                >
                    {open ? <XMarkIcon /> : <Bars3Icon />}
                </button>
                <ul
                    className={` w-full h-full absolute  flex flex-col items-center justify-around px-4 py-5 space-y-5 `}
                >
                    <Link
                        onClick={handleSignOut}
                        className="flex items-center justify-between w-full gap-4 text-lg lg-text-xl hover:text-white duration-300 mt-6"
                    >
                        Déconnexion
                        <ArrowRightOnRectangleIcon className="w-9 pl-2" />
                    </Link>
                    {Links.map((item) => (
                        <li
                            className="flex items-center justify-between w-full gap-4 text-lg lg-text-xl hover:text-white duration-300"
                            key={item.name}
                        >
                            <Link to={item.link} onClick={toggleSideNav}>
                                {item.name}
                            </Link>
                            <div className="w-9 pl-2" onClick={toggleSideNav}>{item.icon}</div>
                        </li>
                    ))}
                </ul>
            </nav>
        </aside>
    );
};

export default SideNav;
