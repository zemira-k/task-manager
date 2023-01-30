import { useEffect } from 'react';
import { dataService } from './services/generalService/dataService';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { AppHeader } from './cmps/layout/AppHeader';
import { routes } from './routes.js';
import { Sidebar } from './cmps/Sidebar';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import handicap from './assets/icons/handicap.svg';
import Fab from '@mui/material/Fab';

const theme = createTheme({
  typography: {
    fontFamily: 'poppins',
  },
});

export const App = () => {
  useEffect(() => {
    dataService.removeData();
    dataService.initData();
  }, []);

  return (
    <ThemeProvider theme={theme}>
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
      <Fab
        color="secondary"
        aria-label="edit"
        sx={{
          position: 'absolute',
          bottom: '57px',
          right: '41px',
          backgroundColor: '#8724BD',
          boxShadow: '0px 4px 17px rgba(91, 76, 204, 0.25)',
        }}
      >
        <div
          style={{
            backgroundImage: `url(${handicap})`,
            width: '20px',
            height: '25px',
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
          }}
        ></div>
        {/* <EditIcon /> */}
      </Fab>
    </ThemeProvider>
  );
};
