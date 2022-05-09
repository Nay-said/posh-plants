import './styles/App.css';
import { Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Shop from './pages/Shop';

function App() {
  return (
    <>
      <div id='wrap'>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Shop" element={<Shop />} />
          </Routes>
        </main>
      </div>
    </>
  );
}

export default App;