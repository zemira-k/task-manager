import { useEffect } from "react";
import { dataService } from "./services/generalService/dataService";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AppHeader } from "./cmps/layout/AppHeader"
import { routes } from "./routes.js";
import { Sidebar } from "./cmps/Sidebar";

export const App = () => {
  useEffect(() => {
    dataService.removeData();
    dataService.initData();
  }, [])

  return (
    <div className="App">
      <Router>
        <header>
          <AppHeader />
        </header>
        <Sidebar />
        <main>
          <Routes>
            {
              routes.map(route => <Route key={route.path} element={route.element} path={route.path} />)
            }
          </Routes>
        </main>
      </Router>
    </div>
  );
}

