import { createBrowserRouter } from "react-router-dom";
import { Root } from '../Pages/root/root';
import { ROUTES } from "./routes";
import { MainPage } from "../Pages/Main/mainPage";
import { AboutPage } from "../Pages/about/about";
import { StubPage } from "../Pages/stub/stub";
import { Contacts } from "../Pages/contacts/contacts";
import { Payment } from "../Pages/Payment/payment";
import { SliderMain } from '../util/SliderMain/slidermain';
import { Brends } from "../Pages/brends/brends";

export const router = createBrowserRouter ([
    {
        path: ROUTES.Root,
        element: <Root />,
        children: [
            {index: true, element: <MainPage />},
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
            {
                path: ROUTES.contacts,
                element: <Contacts />,
            },
            {
                path: ROUTES.payment,
                element: <Payment />,
            },
            {
                path: ROUTES.brends,
                element: <Brends />,
            },
        ],
    },

]);
