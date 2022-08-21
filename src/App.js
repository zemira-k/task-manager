import { useEffect } from "react";
import { dataService } from "./services/generalService/dataService";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { AppHeader } from "./cmps/layout/AppHeader";
import { AppFooter } from "./cmps/layout/AppFooter";
import { Members } from "./pages/Members";
import { Task } from "./pages/Task";
import { routes } from "./routes.js";
export const App = () => {
  useEffect(() => {
    dataService.removeData();
    dataService.initData();
  }, []);

  //www.firstProject.com/ => Task
  //www.firstProject.com/Contact => Contact
  return (
    <div className="App">
      <Router>
        <header>
          <AppHeader />
        </header>
        <main>
          <Switch>
            <Route component={Members} path="/" />
            {/* <Route component={Task} path="/" /> */}
            {/* {
              routes.map(route => <Route key={route.path} component={route.component} path={route.path} />)
            } */}
          </Switch>
        </main>
        <footer>
          <AppFooter />
        </footer>
      </Router>
    </div>
  );
};
