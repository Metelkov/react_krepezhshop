import { createBrowserRouter } from "react-router-dom";
import { Root } from '../Pages/root/root';
import { ROUTES } from "./routes"
import { MainPage } from "../Pages/Main/mainPage";
import { Fresh } from "../Pages/fresh/fresh";
import { AboutPage } from "../Pages/about/about";
import { StubPage } from "../Pages/stub/stub";
import { SliderMain } from '../util/SliderMain/slidermain'

export const router = createBrowserRouter ([
    {
        path: ROUTES.Root,
        element: <Root />,
        children: [
            {index: true, element: <MainPage />},
            {
                path: ROUTES.fresh,
                element: <Fresh />,
            },
            {
                path: ROUTES.stub,
                element: <StubPage />,
            },            
            {
                path: ROUTES.about,
                element: <AboutPage />,
            },
            {
                path: ROUTES.slidermain,
                element: <SliderMain />,
            },
            // {
            //     path: ROUTES.price,
            //     element: <Price />,
            // },
        ],
    },

]);
