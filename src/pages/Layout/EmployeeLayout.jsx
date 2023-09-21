import { Outlet } from "react-router-dom";
import SideNavEmployee from "../../components/SideNav/SideNavEmployee";
import EmployeeRouteGuard from "../Auth/AuthGuard/EmployeeRouteGuard";

// Component to display the employee layout
const EmployeeLayout = () => {
    return (
        <EmployeeRouteGuard>
            <SideNavEmployee />
            <Outlet />
        </EmployeeRouteGuard>
    );
};

export default EmployeeLayout;
