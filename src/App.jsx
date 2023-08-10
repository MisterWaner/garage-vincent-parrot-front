import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from "react-router-dom";

import Home from "./pages/Public/Home/Home";
import Contact from "./pages/Public/Contact/Contact";
import Layout from "./pages/Layout/Layout";
import AdminLayout from "./pages/Layout/AdminLayout";
import AccountLayout from "./pages/Layout/AccountLayout";
import Connexion from "./pages/Public/Connexion/Connexion";
import Cars from "./pages/Public/Cars/Cars";
import Dashboard from "./pages/Auth/Admin/Dashboard/Dashboard";
import TestimonialsSettings from "./pages/Auth/Admin/TestimonialsSettings/TestimonialsSettings";
import CarsSettings from "./pages/Auth/Admin/CarsSettings/CarsSettings";
import EmployeesSettings from "./pages/Auth/Admin/EmployeesSettings/EmployeesSettings";
import GlobalSettings from "./pages/Auth/Admin/GlobalSettings/GlobalSettings";
import Mail from "./pages/Auth/Admin/Mail/Mail";
import Account from "./pages/Auth/Employee/Account/Account";

const App = () => {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <>
                <Route path="/" element={<Layout />}>
                    <Route index path="/" element={<Home />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/connexion" element={<Connexion />} />
                    <Route path="/cars" element={<Cars />} />
                </Route>
                <Route path="/admin" element={<AdminLayout />}>
                    <Route index element={<Dashboard />} />
                    <Route path="mails" element={<Mail />} />
                    <Route
                        path="reviews"
                        element={<TestimonialsSettings />}
                    />
                    <Route path="car-park" element={<CarsSettings />} />
                    <Route path="globals" element={<GlobalSettings />} />
                    <Route
                        path="employees"
                        element={<EmployeesSettings />}
                    />
                </Route>
                <Route path="/account/:id" element={<AccountLayout />}>
                    <Route index element={<Account />} />
                    
                </Route>
            </>
        )
    );

    return (
        <>
            <RouterProvider router={router} />
        </>
    );
};

export default App;
