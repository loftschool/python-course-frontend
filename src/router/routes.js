import { Main } from "../pages/main-page";
import { SearchResults } from "../pages/search-results";
import { ErrorPage } from "../pages/404";

export default [
  {
    path: "/",
    name: "MainPage",
    component: Main,
  },
  {
    path: "/results",
    name: "SearchResults",
    component: SearchResults,
  },
  {
    path: "/404",
    name: "ErrorPage",
    component: ErrorPage,
  },
  {
    path: "/:catchAll(.*)",
    redirect: "/404",
  },
];
