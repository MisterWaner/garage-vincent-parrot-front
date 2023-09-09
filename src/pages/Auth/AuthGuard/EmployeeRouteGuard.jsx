/* eslint-disable react/prop-types */
import { Navigate } from "react-router-dom";
import Cookies from "js-cookie";

//Admin and visitors cannot access to employee pages
const EmployeeRouteGuard = ({ children }) => {
    const role = Cookies.get("role");
    if (role !== "Utilisateur") {
        return <Navigate to="/login" />;
    }
    return children;
};

export default EmployeeRouteGuard;
