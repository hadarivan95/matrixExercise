
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { persistor, store } from './store/store';
import { Provider } from 'react-redux';
import { Suspense, useState } from 'react';
import Layout from './Layout';
import { PersistGate } from 'redux-persist/integration/react';
import { Button, CssBaseline, ThemeProvider, createTheme } from '@mui/material';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const darkTheme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
    },
  });

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={darkTheme}>
          <CssBaseline enableColorScheme/>
          <Button onClick={toggleDarkMode}>{darkMode ? 'Light Mode' : 'Dark Mode'}</Button>
          <BrowserRouter>
            <Suspense fallback={<div>Loading...</div>}>
              <Routes>
                <Route path="/" element={<Layout />} />
              </Routes>
            </Suspense>
          </BrowserRouter>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
