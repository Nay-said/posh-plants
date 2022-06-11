import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
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

function App() {
  const [prodDetail, setProdDetail] = useState({})

  return (
    <div id='wrap'>
      <BrowserRouter>
        <Navbar />
        <main>
          <ScrollToTop>
            <Routes>
              <Route path="/" element={<Home setProdDetail={setProdDetail} />} />
              <Route path="/Shop/*" element={<Shop setProdDetail={setProdDetail} />} />
              <Route path="/Product/:id" element={<ProductDetail productInfo={prodDetail} />} />
              <Route path="/Login" element={<Login />} />
              <Route path="/Signup" element={<Signup />} />
              { isAdmin() && 
                <Route path="/Admin/*" element={<AdminPanel />} />
              }
              <Route path="*" element={<h6 className="text-center mt-5">404! Not Found</h6>} />
              <Route path="/Admin" element={<Navigate replace to="/Admin/Dashboard" />} />
              <Route path="/Shop" element={<Navigate replace to="/Shop/All" />} />
            </Routes>
          </ScrollToTop>
        </main>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;