import React from 'react'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import "./Footer.css"

const Footer = () => {
    const Scto = () => {
        window.scrollTo(0, 0)
    }
  return (
    <>
    <div className="Footer">
        <a onClick={Scto}>
        <div className="FooterBottomToTop">
            <KeyboardArrowUpIcon /> 
        </div>
        </a>

        <div className="FooterVerRow">
            <div className="FooterVerCol">
                <div className="FooterVerColHead">
                    Get To Know Us
                </div>
                <ul>
                    <li>About Us</li>
                    <li>Careers</li>
                    <li>Press Release</li>
                    <li>Amazon Science</li>
                </ul>

            </div>

            <div className="FooterVerCol">
                <div className="FooterVerColHead">
                    Connect With Us
                </div>
                <ul>
                    <li>Facebook</li>
                    <li>Twitter</li>
                    <li>Instagram</li>
                </ul>
            </div>

            <div className="FooterVerCol">
                <div className="FooterVerColHead">
                   Make Money with us
                </div>
                <ul>
                    <li>Sell On Amazon</li>
                    <li>Sell Under Amazon Accelerator</li>
                    <li>Protect and Build your Brand</li>
                    <li>Amazon Global Selling </li>
                    <li>Becam an Affilate</li>
                    <li>Fulfilment By Amazon</li>
                    <li>Advertise your brand</li>
                    <li>Amazon Pay On Merchants</li>
                </ul>
            </div>

            <div className="FooterVerCol">
                <div className="FooterVerColHead">
                    Let Us Help You
                </div>
                <ul>
                    <li>COVID-19 and Amazon </li>
                    <li>Your Account </li>
                    <li>Returns Center </li>
                    <li>100% Purchase Protection </li>
                    <li>Amazon App Download </li>
                    <li>Help </li>
                </ul>
            </div>
        </div>
        <hr />
            <div className="FooterLast">
                <span className="FooterMsg">
                    Amazon Clone &copy; Selvanandhini
                </span>
            </div>
    </div>
    
    
    
    </>
  )
}

export default Footer