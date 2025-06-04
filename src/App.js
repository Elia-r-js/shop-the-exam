import './App.css';
import PRODUCT from "./PRODUCT.json";
import Layout from './layout/Layout';
import Product from './Pages/Product/ProductItem/Product'
import { BrowserRouter as Router , Route , Routes} from 'react-router-dom';
import contact from './Pages/contact/contact';
import { BuildRouter } from './Utils/BuildRoutes';
import { routes } from './Routes/Routes';
import ThemeContext from './context/ThemeContext';
import themeConfige from "./config/themeConfig"
import { useState } from 'react';



function App() {
  const [activeTheme,setActiveTheme] = useState('green')
  return (
    <ThemeContext.Provider value={{theme:themeConfige[activeTheme],setActiveTheme}}>
    <div className="App">
      <Router>
      <Layout>
    <Routes>
    {
      BuildRouter(routes)
    }
    </Routes>
      </Layout>
      </Router>
    </div>
    </ThemeContext.Provider>
  );
}

export default App;
