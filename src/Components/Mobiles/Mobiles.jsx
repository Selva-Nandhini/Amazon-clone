import React from 'react'
import Product from '../Home/Product/Product'

function Mobiles() {
  return (
    <div className='iteams__container'>

        <div className='pro_iteam_row row2'>
            <Product 
                id="123453"
                title='Apple iPhone 14 Pro (128 GB) - Space Black'
                price={70000}
                rating={4}
                image="https://m.media-amazon.com/images/I/31irWzsdLsL._SY445_SX342_QL70_FMwebp_.jpg"
            />

            <Product 
                id="123454"
                title='Samsung Galaxy S22 5G (Green, 8GB, 128GB Storage) with No Cost EMI/Additional Exchange Offers'
                price={6999}
                rating={4}
                image="https://m.media-amazon.com/images/I/41ZIcSihDEL._SX300_SY300_QL70_FMwebp_.jpg"
            /> 

             <Product 
                id="123455"
                title='Redmi 12C (Mint Green, 4GB RAM, 64GB Storage) | High Performance Mediatek Helio G85 | Big 17cm(6.71) HD+ Display with 5000mAh(typ) Battery'
                price={8799}
                rating={4}
                image="https://m.media-amazon.com/images/I/81YEyQqHjPL._AC_UL480_QL65_.jpg"
            /> 
            </div>

            <div className='pro_iteam_row row2'>
            <Product 
                id="123455"
                title='Samsung Galaxy S22 5G (Green, 8GB, 128GB Storage) with No Cost EMI/Additional Exchange Offers'
                price={62999}
                rating={4}
                image="https://m.media-amazon.com/images/I/41ZIcSihDEL._SX300_SY300_QL70_FMwebp_.jpg"
            /> 

            <Product 
                id="123455"
                title='Oppo A17 (Sunlight Orange, 4GB RAM, 64GB Storage) with No Cost EMI/Additional Exchange Offers'
                price={12499}
                rating={4}
                image="https://m.media-amazon.com/images/I/41EWN6EqiuL._SX300_SY300_QL70_FMwebp_.jpg"
            /> 

            <Product 
                id="123455"
                title='Redmi A2 (Sea Green, 2GB RAM, 32GB Storage) | Powerful Octa Core G36 Processor | Upto 7GB RAM | Large 16.5 cm HD+ Display with Massive 5000mAh Battery | 2 Years Warranty [Limited time Offer]'
                price={5899}
                rating={4}
                image="https://m.media-amazon.com/images/I/41zxerd4OJL._SX300_SY300_QL70_FMwebp_.jpg"
            /> 

            <Product 
                id="123455"
                title='realme narzo N53 (Feather Gold, 6GB+128GB) 33W Segment Fastest Charging | Slimmest Phone in Segment | 90 Hz Smooth Display'
                price={10999}
                rating={4}
                image="https://m.media-amazon.com/images/I/41dEcQR7UnL._SX300_SY300_QL70_FMwebp_.jpg"
            /> 
        </div>  
    </div>
  )
}

export default Mobiles