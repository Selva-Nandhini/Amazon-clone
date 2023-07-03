import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import "./SubHeader.css"
import { Link } from 'react-router-dom';

const SubHeader = () => {
  return (
    <>
        <div className="headerBottom">
        
        <div className="headerbottom_Navbar">
        <div className="headerLeftNav">
          <MenuIcon /> 
        </div>
        <span>Amazon MiniTV</span>
        <span>Sell</span>
        <span>Best Sellers</span>
        <Link to="/Mobiles">
          <span>Mobiles</span>
        </Link>
        
        <span>Today Deal's</span>
        <span>Customer Service</span>
        <span>New Releases</span>
        <Link to="/Electronics">
        <span>Electronics</span>
        </Link>
        
        <span>Prime</span>
        <span>Home & Kitchen</span>
        <span>Fashion</span>
        <span>Amazon Pay</span>
        <span>Shopping made easy | Download the app</span>
        </div>
      </div>
      {/* NAVBAR BOTTOM */}
    
    
    </>
  )
}

export default SubHeader