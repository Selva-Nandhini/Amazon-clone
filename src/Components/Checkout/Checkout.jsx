import React from 'react';
import "./Checkout.css";
import Subtotal from './Subtotal';
import { useStateValue } from '../StateProvider';
import CheckoutProduct from './CheckoutProduct';


function Checkout() {
  const [{ basket,user}] = useStateValue();

  return (
    <>
      <div className='checkout'>
       
        <div className='checkout_left'>
          <div  >
            <img className="checkout_add"
            src="https://amz-clone-react-app-0030.web.app/static/media/adds.2bc58ca87461e144dc67.png"
            alt="error" /> 
          </div>
          <h3 style={{textAlign:'center'}}>Hello {user?.email}</h3>
          { basket?.length === 0 ? (
            <div>
              <img className='checkout_img' src="https://m.media-amazon.com/images/G/31/cart/empty/kettle-desaturated._CB424694257_.svg" alt="" />
              <h2 className="checkout_msg">Your Amazon Shopping Cart is Empty</h2>
              <h4 className='checkout_deal'>Shop Today's Deal</h4>
              <button className="paybtn">Sign In to Your account</button> 
              <button className='signup'>Signup Now</button>
            </div>
          ) :(
              <div > 
                <h2 className='checkout_title'>Your Shopping Cart</h2>
                {basket?.map((item) => (
                  <CheckoutProduct
                    id={item.id}
                    image={item.image}
                    title={item.title}
                    price={item.price}
                    rating={item.rating}
                  />
                ))}       
              </div>
             )
          }
        </div>
        <div className='checkout_right'>
          <Subtotal />
        </div>
      </div>
    </>
  )
}

export default Checkout;
