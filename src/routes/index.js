import HomePage from "../containers/home/HomePage";
import AboutPage from "../containers/home/AboutPage";
import ListMoviePage from "../containers/home/ListMoviePage";
import DetailPage from "../containers/home/DetailPage";

const routesHome = [
  {
    exact: true,
    path: "/",
    component: HomePage
  },
  {
    exact: false,
    path: "/about",
    component: AboutPage
  },
  {
    exact: false,
    path: "/list-movie",
    component: ListMoviePage
  },
  {
    exact: false,
    path: "/detail/:id",
    component: DetailPage
  }
];

export { routesHome };
