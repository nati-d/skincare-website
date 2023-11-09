import { Routes, Route } from 'react-router-dom';
import './index.css';
import Home from './pages/Home';
import AllProducts from './pages/AllProducts';
import SkinCare from './pages/SkinCare';
import FaceTools from './pages/FaceTools';
import Navbar from './components/Navbar';
import ProductDetail from './pages/ProductDetail';

function App() {
  return (
    <div className="w-[100%] h-screen px-2 md:px-10 py-3">
          <Navbar/>
    <Routes>
      <Route path= '/' element={<Home/>}/>
      <Route path= '/all' element={<AllProducts/>}/>
      <Route path= '/skin' element={<SkinCare/>}/>
      <Route path= '/face' element={<FaceTools/>}/>
      <Route path= '/productDetail' element={<ProductDetail/>}/>
    </Routes>
    </div>
  );
}

export default App;
