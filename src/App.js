import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer'
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';



function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <Routes>
            <Route exact path="/" element={<ItemListContainer />} />
            <Route exact path="/category/:idCategory" element={<ItemListContainer />} />
            <Route exact path="/item/:idProduct" element={<ItemDetailContainer />} />
            <Route exact path="/cart" element={<Cart />} />
            <Route exact path="/checkout" element={<Checkout />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
