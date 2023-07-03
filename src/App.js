import Header from "./Components/Header/Header.jsx"
import Home from "./Components/Home/Home.jsx";
import NavCard1 from "./Components/Home/HomeNavCards/NavCard1.jsx";
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductSlider from "./Components/Home/ProductSlider/ProductSlider.jsx";
import ProductInfo from "./Components/Home/Product/ProductInfo.jsx"
import ProductsPurchased from "./Components//Home/ProductSlider/ProductsPurchased.jsx"
import ProductFP from "./Components/Home/ProductSlider/ProductFP.jsx"
import Footer from "./Components/Footer.jsx";
import Login from "./Components/Login/Login.js";
import Checkout from "./Components/Checkout/Checkout.jsx";
import Electronics from "./Components/Electronics/Electronics.jsx";
import Mobiles from "./Components/Mobiles/Mobiles.jsx"


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={[
              <Header /> , 
              <Home />, 
              <NavCard1 />, 
              <ProductSlider />, 
              <ProductInfo />,
              <ProductsPurchased />,
              <ProductFP />,
              <Footer />
          ]}></Route>

          <Route path="/Login" element={[<Login />]}> </Route>
          <Route path="/Checkout" element={[<Header />, <Checkout />, <Footer />]}></Route>
          <Route path="/Mobiles" element={[<Header />, <Mobiles /> , <Footer />]}></Route>
          <Route path="/Electronics" element={[<Header />, <Electronics /> , <Footer />]}></Route>
        
        </Routes>
      </Router>
    
    </>
  );
}

export default App;
