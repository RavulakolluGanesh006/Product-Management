
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Jewellery from './routing/jewellery/Jewellery';
import Mens from './routing/mens/Mens';

import Womens from './routing/womens/Womens';
import Navbar from './component/Navbar';
import Electronics from './routing/electronics/Electronics';
import Home from './routing/Home';

import PageNotFound from './component/pagenotfound/PageNotFound';
import ProductDetails from './component/productDetails/ProductDetails';
function App() {
  return (
    <BrowserRouter>
    
    <div className="App">
      <Navbar/>
      <Routes>
     <Route path={'/'}  element={<Home/>}/>
     <Route path={'/electronics'} element={<Electronics/>}/>
     <Route path={'/jewelery'} element={<Jewellery/>}/>
     <Route path={'/mens'} element={<Mens/>}/>
     <Route path={'/womens'} element={<Womens/>}/>
     <Route path={"/productdetails"} element={<ProductDetails/>} />
     <Route path={"*"} element={<PageNotFound />} />
     </Routes>
    </div>
   
    </BrowserRouter>
  );
}

export default App;
