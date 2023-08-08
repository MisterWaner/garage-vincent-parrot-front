import { Outlet } from "react-router-dom";
import SideNav from "../../components/SideNav/SideNav";

const AdminLayout = () => {
    return (
        <>
            <SideNav />
            <Outlet />
        </>
    );
};

export default AdminLayout;
