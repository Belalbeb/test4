// import logo from './logo.svg';
// import './App.css';
// import Welcome from './comp/Com';
import Navbar from './components/Navbar';
import Slider from './components/Slider';
import Productlist from './components/productlist';
import { Routes,Route } from 'react-router-dom';
import About from './components/about';
import ProductDetails from './components/productDetails';
function App() {
  return(
    <div className="APP">
      <Navbar />
      <Routes>
        <Route path="/" element={<>
          <Slider /> 
      <Productlist/>

        </>}/>
        <Route path="about" element={<About/>}/>
        <Route path="product/:productId" element={<ProductDetails/>}/>

      
      </Routes>
     

</div>
  )

  
}

export default App;
