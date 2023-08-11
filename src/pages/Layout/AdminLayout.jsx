import { Outlet } from "react-router-dom";
import SideNavAdmin from "../../components/SideNav/SideNavAdmin";

const AdminLayout = () => {
    return (
        <>
            <SideNavAdmin />
            <Outlet />
        </>
    );
};

export default AdminLayout;
