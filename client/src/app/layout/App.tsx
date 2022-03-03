import { Container, CssBaseline } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useState } from 'react';
import { Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { AboutPage } from '../../features/about/AboutPage';
import { Catalog } from '../../features/catalog/Catalog';
import { HomePage } from '../../features/catalog/home/HomePage';
import { ProductDetails } from '../../features/catalog/ProductDetails';
import { ContactPage } from '../../features/contact/ContactPage';
import { Header } from './Header';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const paletteType = darkMode ? 'dark' : 'light';
  const theme = createTheme({
    palette: {
      mode: paletteType,
      background: {
        default: paletteType === 'light' ? '#ededed' : '#121212',
      },
    },
  });

  function handleThemeChange() {
    setDarkMode(!darkMode);
  }

  return (
    <ThemeProvider theme={theme}>
      <ToastContainer position='bottom-right' hideProgressBar theme='colored' />
      <CssBaseline />
      <Header darkMode={darkMode} handleThemeChange={handleThemeChange} />
      <Container>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/catalog' component={Catalog} />
        <Route path='/catalog/:id' component={ProductDetails} />
        <Route path='/about' component={AboutPage} />
        <Route path='/contact' component={ContactPage} />
      </Container>
    </ThemeProvider>
  );
}

export default App;
