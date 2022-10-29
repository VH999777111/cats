import { lazy } from "react";

const HomePage = lazy(() => import("./pages/Home/Home"));
const AboutPage = lazy(() => import("./pages/About/About"));
const CatsPage = lazy(() => import("./pages/Cats/Cats"));

export const APP_ROUTES = [
  {
    path: "/",
    element: HomePage,
  },
  {
    path: "/about",
    element: AboutPage,
  },
  {
    path: "/cats/:category",
    element: CatsPage,
  },
];
