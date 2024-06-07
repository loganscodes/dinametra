import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "./pages/home";
import MediaPage from "./pages/media";
import MapsPage from './pages/maps';
import PatentPage from "./pages/patent";
import VidiosPage from "./pages/vidios";
import GrapicPage from "./pages/graphic";

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
        path: '/vidios',
        element: <VidiosPage/>
    },
    {
        path: '/patent',
        element: <PatentPage/>
    },
    {
        path: '/maps-meteors',
        element: <MapsPage/>
    },
    {
        path: '/graphic',
        element: <GrapicPage />
    }
])