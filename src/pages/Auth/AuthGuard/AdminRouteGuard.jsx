/* eslint-disable react/prop-types */
import { Navigate } from "react-router-dom";
import Cookies from "js-cookie";

//Employee and visitors cannot access to admin pages
const AdminRouteGuard = ({ children }) => {
    const role = Cookies.get("role");
    if (role !== "Admin") {
        return <Navigate to="/login" />;
    }
    return children;
};

export default AdminRouteGuard;
