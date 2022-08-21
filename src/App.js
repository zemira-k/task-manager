import { useEffect } from "react";
import { dataService } from "./services/generalService/dataService";
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import { AppHeader } from "./cmps/layout/AppHeader"
import { AppFooter } from "./cmps/layout/AppFooter"
import { routes } from "./routes.js";
export const App = () => {
  useEffect(() => {
    dataService.removeData()
    dataService.initData();
  }, [])

  return (
    <div className="App">
      <Router>
        <header>
          <AppHeader />
        </header>
        <main>
          <Switch>
            {
              routes.map(route => <Route key={route.path} component={route.component} path={route.path} />)
            }
          </Switch>
        </main>
        <footer>
          <AppFooter />
        </footer>
      </Router>
    </div>
  );
}

