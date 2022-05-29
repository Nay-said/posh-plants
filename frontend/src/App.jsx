import { BrowserRouter, Routes, Route } from "react-router-dom";
import './styles/App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ProductDetail from './pages/ProductDetail'

function App() {
  return (
    <div id='wrap'>
      <Navbar />
      <main>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Shop/*" element={<Shop />} />
          <Route path='/Product/:id' element={ <ProductDetail /> } />
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
      </main>
    </div>
  );
}

export default App;