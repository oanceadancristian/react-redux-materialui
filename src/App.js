import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthContextProvider } from './Context/Auth/AuthContext';
import { CartContextProvider } from './Context/Cart/CartContext';
import Homepage from './Pages/Homepage';
import Login from './Pages/Login';
import Products from './Pages/Products';
import ProductDetails from './Pages/ProductDetails';
import Cart from './Pages/Cart';
import PageNotFound from './Pages/PageNotFound';

export default function App() {
  return (
    <AuthContextProvider>
      <CartContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:productId" element={<ProductDetails />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
      </CartContextProvider>
    </AuthContextProvider>
  );
}
