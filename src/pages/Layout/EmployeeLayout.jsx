import { Outlet } from "react-router-dom";
import SideNavEmployee from "../../components/SideNav/SideNavEmployee";
import EmployeeRouteGuard from "../Auth/AuthGuard/EmployeeRouteGuard";

const EmployeeLayout = () => {
    

    return (
        <EmployeeRouteGuard>
            <SideNavEmployee />
            <Outlet />
        </EmployeeRouteGuard>
    );
};

export default EmployeeLayout;
