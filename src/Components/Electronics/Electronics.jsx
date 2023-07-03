import React from 'react'
import Product from '../Home/Product/Product'

function Electronics() {
  return (
   <>
    <div className='iteams__container'>
        
        <div className='pro_iteam_row row1'>
            <Product 
                id="123451"
                title='boAt Airdopes 141 Bluetooth Truly Wireless in Ear Headphones with 42H Playtime'
                price={1999}
                rating={5}
                image="https://m.media-amazon.com/images/I/41nzykE3sIL._SX300_SY300_QL70_FMwebp_.jpg"
            />

            <Product 
                id="123452"
                title='boAt Xtend Call Plus Smart Watch with 1.91" HD Display, Advanced BT Calling'
                price={2999}
                rating={5}
                image="https://m.media-amazon.com/images/I/41ZAvL+l4RL._SY300_SX300_.jpg"
            />

            <Product 
                id="123459"
                title='atomberg Renesa 1200mm BLDC Motor 5 Star Rated Ceiling Fans for Home with Remote Control | '
                price={3680}
                rating={4}
                image="https://m.media-amazon.com/images/I/31r1ERIW9+L._SY300_SX300_.jpg"
            />

        </div>

        <div className='pro_iteam_row row3'>
            <Product 
                id="123456"
                title='Canon EOS 5D Mark IV 30.4 MP Digital SLR Camera (Black) + EF 24-105mm is II USM Lens Kit '
                price={289990}
                rating={4}
                image="https://images-eu.ssl-images-amazon.com/images/I/712TSdtX2rL._AC_UL160_SR160,160_.jpg"
            />

            <Product 
                id="123457"
                title='HP Laptop 15s, Intel Celeron N4500, 15.6 inch(39.6cm) HD Laptop'
                price={30490}
                rating={4}
                image="https://m.media-amazon.com/images/I/41WaRoAeieL._SX300_SY300_QL70_FMwebp_.jpg"
            />

            <Product 
                id="123458"
                title='GOVO GOSURROUND 920 | 200W Soundbar, 2.1 Channel Home Theatre, 6.5” Wireless Subwoofer'
                price={7599}
                rating={4}
                image="https://m.media-amazon.com/images/I/31XhRxMvTOL._SX300_SY300_QL70_FMwebp_.jpg"
            />
        </div> 
    </div>
 
   
   
   
   
   
   
   </>
  )
}

export default Electronics