import { createBrowserRouter } from "react-router-dom";
import { RootComponent } from '../Pages/root/Root';
import { FreshPage } from "../Pages/fresh/fresh";
import { ROUTES } from "./routes"

export const router = createBrowserRouter [
    {
        path: ROUTES.Root,
        element: <RootComponent />
    },
    {
        path: ROUTES.Fresh,
        element: <FreshPage />
    }
];
