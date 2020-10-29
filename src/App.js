import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
// import HomePage from "./containers/home/HomePage";
// import AboutPage from "./containers/home/AboutPage";
// import ListMoviePage from "./containers/home/ListMoviePage";
import PageNotFound from "./containers/PageNotFound";
import { routesHome } from "./routes";

import Navbar from "./components/Navbar";

function App() {
  const showMenusHome = routes => {
    if (routes && routes.length > 0) {
      return routes.map((item, index) => {
        return (
          <Route
            key={index}
            exact={item.exact}
            path={item.path}
            component={item.component}
          />
        );
      });
    }
  };

  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        {showMenusHome(routesHome)}

        {/* <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/list-movie" component={ListMoviePage} /> */}

        <Route path="" component={PageNotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
