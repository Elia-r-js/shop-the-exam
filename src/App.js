import './App.css';
import PRODUCT from "./PRODUCT.json";
import Layout from './layout/Layout';
import Product from './Pages/Product/ProductItem/Product'
import { BrowserRouter as Router , Route , Routes} from 'react-router-dom';
import contact from './Pages/contact/contact';
import { BuildRouter } from './Utils/BuildRoutes';
import { routes } from './Routes/Routes';



function App() {
  console.log("product", PRODUCT)
  return (
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
  );
}

export default App;
