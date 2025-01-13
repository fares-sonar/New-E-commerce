import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from "./pages/products/Products";
import Home from "./pages/home/Home";
import CheckOut from "./pages/check/CheckOut";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Cart from "./pages/cart/Cart";
import Header from "./pages/header/Header";
import Footer from "./pages/footer/Footer";
import Store from "./store/Store";

function App() {
  return (
    <>
      <Store>
        <BrowserRouter basename="/New-E-Commerce/">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/check-out" element={<CheckOut />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </Store>
    </>
  );
}

export default App;
