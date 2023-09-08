import { Outlet, useParams } from "react-router-dom";
import SideNavAdmin from "../../components/SideNav/SideNavAdmin";
import AdminRouteGuard from "../Auth/AuthGuard/AdminRouteGuard";

const AdminLayout = () => {
    let { id } = useParams();
    return (
        <AdminRouteGuard>
            <SideNavAdmin id={id} />
            <Outlet />
        </AdminRouteGuard>
    );
};

export default AdminLayout;
