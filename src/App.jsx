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
                <Route path="/admin" element={<AdminLayout />} >
                    <Route index element={<Dashboard />} />
                </Route>
                <Route path="/account/:id" element={<AccountLayout />} >
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
