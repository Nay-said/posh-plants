import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { isAdmin } from './service'
import './styles/App.css';
import Navbar from './components/Layouts/Navbar';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Login from './pages/Login';
import Signup from './pages/Signup';
import AdminPanel from "./pages/Admin/AdminPanel";
import Footer from "./components/Layouts/Footer";
import ProductDetail from "./pages/ProductDetail";
import ScrollToTop from "./assets/ScrollToTop";
import Cart from "./pages/Cart";

function App() {
  const [prodDetail, setProdDetail] = useState({})
  const [cartProds, setCartProds] = useState([])

  useEffect(() => {
    console.log('Cart:', cartProds)
    sessionStorage.setItem('PoshPlantCart', JSON.stringify(cartProds))
  }, [cartProds])

  const redundantIndex = prod => cartProds.findIndex(e => e._id === prod._id)

  const handleAddToCart = prod => {
    const i = redundantIndex(prod)
    const R = () => {
     
      const newData = Object.assign([...cartProds], {
        [i]: {...cartProds[i], quantity: cartProds[i].quantity + 1}
      })
      setCartProds(newData)
    }
    
    i === -1 && setCartProds([...cartProds, prod])
    i !== -1 && R()
  }

  return (
    <div id="wrap">
      <BrowserRouter>
        <Navbar />
        <main>
          <ScrollToTop>
            <Routes>
              <Route path="/" element={<Home setProdDetail={setProdDetail} />} />
              <Route path="/Cart" element={<Cart cartProds={cartProds} />} />
              <Route path="/Shop/*" element={<Shop setProdDetail={setProdDetail} />} />
              <Route path="/Product/:id" element={<ProductDetail productInfo={prodDetail} onAddToCart={handleAddToCart} />} />
              <Route path="/Login" element={<Login />} />
              <Route path="/Signup" element={<Signup />} />
              { isAdmin() && 
                <Route path="/Admin/*" element={<AdminPanel />} />
              }
              <Route path="/Admin" element={<Navigate replace to="/Admin/Dashboard" />} />
              <Route path="/Shop" element={<Navigate replace to="/Shop/All" />} />
              <Route path="*" element={<h6 className="text-center mt-5">404! Not Found</h6>} />
            </Routes>
          </ScrollToTop>
        </main>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;