import { createBrowserRouter } from "react-router-dom";
import { Root } from '../Pages/root/root';
import { Fresh } from "../Pages/fresh/fresh";
import { ROUTES } from "./routes"

export const router = createBrowserRouter ([
    {
        path: ROUTES.Root,
        element: <Root />,
        children: [
            {index: true, element: <div>Root</div>},
            {
                path: ROUTES.fresh,
                element: <Fresh />,
            },
        ],
    },
    // {
    //     path: ROUTES.Fresh,
    //     element: <Fresh />
    // }
]);
