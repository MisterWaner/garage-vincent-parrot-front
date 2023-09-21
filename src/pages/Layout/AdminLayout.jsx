import { Outlet } from "react-router-dom";
import SideNavAdmin from "../../components/SideNav/SideNavAdmin";
import AdminRouteGuard from "../Auth/AuthGuard/AdminRouteGuard";

// Component to display the admin layout
const AdminLayout = () => {
    return (
        <AdminRouteGuard>
            <SideNavAdmin />
            <Outlet />
        </AdminRouteGuard>
    );
};

export default AdminLayout;
