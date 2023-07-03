import React from 'react'
import { Link } from 'react-router-dom'
import "./NavCard1.css";

const NavCard1 = () => {
  return (
   <>
        {/* ROW 1 */}
        <div className="home_row_1 first_row">
            <div className="list_product">
                <h2 className='list_product_heading'>Gaming Accessories</h2>
                <div className="list_product_image"> 
                    <img src="https://m.media-amazon.com/images/I/51GXfkEfsML._AC_UY327_FMwebp_QL65_.jpg"  alt="ERROR"   />
                </div>
                <p className='see'>See More</p>
            </div> 

            <div className='list_product'>
                <h3 className='list_product_heading'>Shop Laptops & Tablets</h3>
                <div className='list_product_image'>
                    <img src="https://amz-clone-react-app-0030.web.app/static/media/rip2.6d93ceff9ecb42ce84c0.jpg"  alt="error" />
                </div>
                    <p className='see'>Shop Now</p>
            </div>

            <div className='list_product'>
                <h3 className='list_product_heading'>Dresses</h3>
                <div className='list_product_image'>
                    <img src="https://amz-clone-react-app-0030.web.app/static/media/r1p3.dfa64d890047a2699351.jpg"  alt="error" />
                </div>
                    <p className='see'>Shop Now</p>
            </div>

            <div className='list_product last'>
                <h3 className='list_product_heading'>Sign in for the best experience</h3>
                    <Link to="/login">
                        <button type='submit' className='btn'>Sign InSecurely </button>
                    </Link>

                <div className='list_product_image'>
                    <img src="https://amz-clone-react-app-0030.web.app/static/media/r1p4.f2d956acbddc6e7a7955.jpg" style={{ height: '78%', width: '100%' }} alt='Error' />
                </div>
            </div>
        </div>
        {/* ROW 2 */}
        <div className="home_row_2">
            <div className="list_product">
                <h2 className='list_product_heading'>Get Fit at Home</h2>
                <div className="list_product_image">
                    <img src="https://amz-clone-react-app-0030.web.app/static/media/r2p1.9c62006c9541d4d82547.jpg" alt="" />
                </div>
                <p className="see">Explore Now</p>
            </div>

            <div className="list_product">
                <h2 className='list_product_heading'>Beauty Picks</h2>
                <div className="list_product_image">
                    <img src="https://amz-clone-react-app-0030.web.app/static/media/r2p2.2d1d73188dc4ebfccc4a.jpg" alt="" />
                </div>
                <p className="see">Shop Now</p>
            </div>

            <div className="list_product">
                <h2 className='list_product_heading'>Health and Personal Care</h2>
                <div className="list_product_image">
                    <img src="data:image/jpeg;base64,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" alt="" />
                </div>
                <p className="see">Shop Now</p>
            </div>

            <div className="list_product">
                <h2 className='list_product_heading'>Easy Returns</h2>
                <div className="list_product_image">
                    <img src="https://amz-clone-react-app-0030.web.app/static/media/r2p4.e5d231df2d110ed5626c.jpg" alt="" />
                </div>
                <p className="see">Shop Now</p>
            </div>
        </div>   
    </>
  )
}

export default NavCard1