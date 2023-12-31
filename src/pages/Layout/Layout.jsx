import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";
import { Outlet } from "react-router-dom";

// Component to display the public layout
const Layout = () => {
    return (
        <>
            <Header />
            <Outlet />
            <ScrollToTop />
            <Footer />
        </>
    );
};

export default Layout;
