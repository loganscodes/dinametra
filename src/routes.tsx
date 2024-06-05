import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/home";
import Media from "./pages/media";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Home/>
    },{
        path: '/media',
        element: <Media/>
    }
])