import { createBrowserRouter } from "react-router-dom";
import { Root } from "../Pages/root/root";
import { ROUTES } from "./routes";
import { MainPage } from "../Pages/Main/mainPage";
import { AboutPage } from "../Pages/about/about";
import { StubPage } from "../Pages/stub/stub";
import { Contacts } from "../Pages/contacts/contacts";
import { Payment } from "../Pages/Payment/payment";
import { SliderMain } from "../util/SliderMain/slidermain";
import { Brends } from "../Pages/brends/brends";
import { Anckers } from "../Pages/fastener/ancker/anckers";
import { Bolts } from "../Pages/fastener/bolt/bolts";
import { Nuts } from "../Pages/fastener/nut/nuts";
import { Vints } from "../Pages/fastener/vint/vints";
import { Burs } from "../Pages/tools/bur/burs";
import { Gaechs } from "../Pages/tools/gaech/gaechs";
import { Otvertki } from "../Pages/tools/otvertk/otvertks";
import { Sverls } from "../Pages/tools/sverl/sverls";
import { createHashRouter } from "react-router-dom";

export const router = createBrowserRouter([
  //из-за раскатки на ГХ сменили роутинг
  // export const router = createHashRouter([
  {
    path: ROUTES.Root,
    element: <Root />,
    children: [
      { index: true, element: <MainPage /> },
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
      {
        path: ROUTES.anckers,
        element: <Anckers />,
      },
      {
        path: ROUTES.bolts,
        element: <Bolts />,
      },
      {
        path: ROUTES.nuts,
        element: <Nuts />,
      },
      {
        path: ROUTES.vints,
        element: <Vints />,
      },
      {
        path: ROUTES.burs,
        element: <Burs />,
      },
      {
        path: ROUTES.gaechs,
        element: <Gaechs />,
      },
      {
        path: ROUTES.otvertki,
        element: <Otvertki />,
      },
      {
        path: ROUTES.sverls,
        element: <Sverls />,
      },
    ],
  },
]);
