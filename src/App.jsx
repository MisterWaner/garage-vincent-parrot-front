import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from "react-router-dom";

import Home from "./pages/Home/Home";
import Layout from "./pages/Layout/Layout";

const App = () => {

    const router = createBrowserRouter(
        createRoutesFromElements(
            <>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home/> } />
                    
                </Route>
            </>
        )
    )

    return (
        <>
            <RouterProvider router={router} />
        </>
    );
};

export default App;
