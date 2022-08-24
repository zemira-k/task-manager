import { useEffect } from 'react';
import { dataService } from './services/generalService/dataService';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppHeader } from './cmps/layout/AppHeader';
import { routes } from './routes.js';
import { Sidebar } from './cmps/Sidebar';

export const App = () => {
  useEffect(() => {
    dataService.removeData();
    dataService.initData();
  }, []);

  return (
    <div className="App">
      <Router>
        <main className="main-content relative flex">
          <header>
            <AppHeader />
          </header>
          <section className="main-view relative">
            <Routes>
              {routes.map(route => (
                <Route
                  key={route.path}
                  element={route.element}
                  path={route.path}
                />
              ))}
            </Routes>
          </section>
        </main>
        <Sidebar />
      </Router>
    </div>
  );
};
