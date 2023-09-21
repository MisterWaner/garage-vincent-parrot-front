/* eslint-disable react/prop-types */
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import Cookies from "js-cookie";
import {
    ArrowRightOnRectangleIcon,
    InboxIcon,
    Cog6ToothIcon,
    UserCircleIcon,
    UserGroupIcon,
    TruckIcon,
    ChatBubbleOvalLeftEllipsisIcon,
    XMarkIcon,
    Bars3Icon,
} from "@heroicons/react/24/solid";

//Component to display the side nav for the admin
const SideNavAdmin = () => {
    //Links data table
    const Links = [
        {
            name: "Accueil administrateur",
            link: `/admin/${Cookies.get("id")}`,
            icon: <UserCircleIcon />,
        },
        { name: "Mail", link: `/admin/mails`, icon: <InboxIcon /> },
        {
            name: "Gestion globale",
            link: `/admin/globals`,
            icon: <Cog6ToothIcon />,
        },
        {
            name: "Gestion des utilisateurs",
            link: `/admin/users`,
            icon: <UserGroupIcon />,
        },
        {
            name: "Gestion des vehicules",
            link: `/admin/car-park`,
            icon: <TruckIcon />,
        },
        {
            name: "Gestion des témoignages",
            link: `/admin/reviews`,
            icon: <ChatBubbleOvalLeftEllipsisIcon />,
        },
    ];

    //State of side nav
    const [open, setOpen] = useState(false);
    const toggleSideNav = () => {
        setOpen(!open);
    };

    const navigate = useNavigate();

    //Logout
    const handleLogout = async () => {
        try {
            Cookies.remove("token");
            Cookies.remove("role");
            Cookies.remove("firstname");
            Cookies.remove("id");

            navigate("/login");

        } catch (error) {
            console.error("Une erreur est survenue", error);
        }
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
                    {/* Mapping through links table to set all links */}
                    <Link
                        onClick={handleLogout}
                        className="flex items-center justify-between w-full gap-4 text-lg lg-text-xl hover:text-white duration-300 mt-6 "
                    >
                        Déconnexion
                        <ArrowRightOnRectangleIcon className="w-9 pl-2" />
                    </Link>
                    {Links.map((item) => (
                        <li key={item.name} className="w-full">
                            <NavLink
                                className="flex items-center justify-between gap-4 text-lg lg-text-xl hover:text-white duration-300"
                                style={({ isActive }) => ({
                                    color: isActive ? "blue" : "",
                                })}
                                to={item.link}
                                end
                            >
                                <span onClick={toggleSideNav}>{item.name}</span>
                                <div className="w-9 pl-2">{item.icon}</div>
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </nav>
        </aside>
    );
};

export default SideNavAdmin;
