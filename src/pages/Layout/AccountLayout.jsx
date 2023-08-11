import { Outlet } from "react-router-dom";
import SideNavEmployee from "../../components/SideNav/SideNavEmployee";

const AccountLayout = () => {
    return (
        <>
            <SideNavEmployee />
            <Outlet />
        </>
    );
};

export default AccountLayout;
