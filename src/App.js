import './App.css';
import PRODUCT from "./PRODUCT.json";
import Layout from './layout/Layout';
import Product from './Product/ProductItem/Product'

function App() {
  console.log("product", PRODUCT)
  return (
    <div className="App">
      <Layout>
      <Product data={PRODUCT}/>
      </Layout>
    </div>
  );
}

export default App;
