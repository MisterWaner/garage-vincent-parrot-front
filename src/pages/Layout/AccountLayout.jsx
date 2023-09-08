import { Outlet, useParams } from "react-router-dom";
import SideNavEmployee from "../../components/SideNav/SideNavEmployee";
import EmployeeRouteGuard from "../Auth/AuthGuard/EmployeeRouteGuard";

const AccountLayout = () => {
    const { id } = useParams();

    return (
        <EmployeeRouteGuard>
            <SideNavEmployee id={id} />
            <Outlet />
        </EmployeeRouteGuard>
    );
};

export default AccountLayout;
