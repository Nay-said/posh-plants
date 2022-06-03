import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { isAdmin } from './service'
import './styles/App.css';
import Navbar from './components/Layouts/Navbar';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ProductDetail from './pages/ProductDetail'
import AdminPanel from "./pages/Admin/AdminPanel";
import Footer from "./components/Layouts/Footer";

function App() {
  return (
    <div id='wrap'>
      <BrowserRouter>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Shop/*" element={<Shop />} />
            <Route path="/Product/:id" element={ <ProductDetail /> } />
            <Route path="/Login" element={<Login />} />
            <Route path="/Signup" element={<Signup />} />
            { isAdmin() && 
              <Route path="/Admin/*" element={<AdminPanel />} />
            }
            <Route path="*" element={<h6 className="text-center mt-5">404! Not Found</h6>} />
            <Route path="/Admin" element={<Navigate replace to="/Admin/Dashboard" />} />
            <Route path="/Shop" element={<Navigate replace to="/Shop/All" />} />
          </Routes>
        </main>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;