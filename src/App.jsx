import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from "react-router-dom";

//Pages
import Home from "./pages/Public/Home/Home";
import Contact from "./pages/Public/Contact/Contact";
import Carrosserie from "./pages/Public/Carrosserie/Carrosserie";
import Mecanique from "./pages/Public/Mecanique/Mecanique";
import Connexion from "./pages/Public/Connexion/Connexion";
import RgpdPage from "./pages/Public/RGPD/Rgpd";
import Cars from "./pages/Public/Cars/Cars";
import TestimonialsSettings from "./pages/Auth/Admin/TestimonialsSettings/TestimonialsSettings";
import CarsSettings from "./pages/Auth/Admin/CarsSettings/CarsSettings";
import EmployeesSettings from "./pages/Auth/Admin/EmployeesSettings/EmployeesSettings";
import GlobalSettings from "./pages/Auth/Admin/GlobalSettings/GlobalSettings";
import Mail from "./pages/Auth/Admin/Mail/Mail";
import PersonnalSettings from "./pages/Auth/Employee/PersonnalSettings/PersonnalSettings";
import AdminSettings from "./pages/Auth/Admin/AdminSettings/AdminSettings";
import MailEmployee from "./pages/Auth/Employee/MailEmployee/MailEmployee";

//Layouts
import Layout from "./pages/Layout/Layout";
import AdminLayout from "./pages/Layout/AdminLayout";
import EmployeeLayout from "./pages/Layout/EmployeeLayout";

const App = () => {

    const router = createBrowserRouter(
        createRoutesFromElements(
            <>
                {/* Public routes */}
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="carrosserie" element={<Carrosserie />} />
                    <Route path="mecanique" element={<Mecanique />} />
                    <Route path="contact" element={<Contact />} />
                    <Route path="login" element={<Connexion />} />
                    <Route path="cars" element={<Cars />} />
                    <Route path="rgpd" element={<RgpdPage />} />
                </Route>

                {/* Admin routes */}
                <Route path={`/admin`} element={<AdminLayout />}>
                    <Route index element={<AdminSettings />} />
                    <Route path="mails" element={<Mail />} />
                    <Route
                        path="reviews"
                        element={<TestimonialsSettings />}
                    />
                    <Route path="car-park" element={<CarsSettings />} />
                    <Route path="globals" element={<GlobalSettings />} />
                    <Route
                        path="users"
                        element={<EmployeesSettings />}
                    />
                </Route>

                {/* Employee routes */}
                <Route path="/employee" element={<EmployeeLayout />}>
                    <Route index element={<PersonnalSettings />} />
                    <Route path="car-park" element={<CarsSettings />} />
                    <Route path="mails" element={<MailEmployee />} />
                    <Route path="reviews" element={<TestimonialsSettings />} />
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
