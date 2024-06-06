import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "./pages/home";
import MediaPage from "./pages/media";
import MapsPage from './pages/maps';
import PatentPage from "./pages/patent";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <HomePage/>
    },
    {
        path: '/media',
        element: <MediaPage/>
    },
    {
        path: '/patent',
        element: <PatentPage/>
    },
    {
        path: '/maps-meteors',
        element: <MapsPage/>
    }
])