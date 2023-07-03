import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Card from './Card';

export default function SliderFP1() {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 10
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 6
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
    return (
        <div className="SliderFP1">
            <h2>Explore new collections from stores near you</h2>
            <Carousel responsive={responsive}>
                <Card image = "https://m.media-amazon.com/images/I/81+hR2y+eTL._AC_SY200_.jpg" />
                <Card image = "https://m.media-amazon.com/images/I/61V6nxyR+pL._AC_SY200_.jpg"  />
                <Card image = "https://m.media-amazon.com/images/I/61Gra1ZbB9L._AC_SY200_.jpg" />
                <Card image = "https://m.media-amazon.com/images/I/61yDg0Az6HL._AC_SY200_.jpg" />
                <Card image = "https://m.media-amazon.com/images/I/51okUi-zIWL._AC_SY200_.jpg" />
                <Card image = "https://m.media-amazon.com/images/I/51RI7uO476L._AC_SY200_.jpg" />
                <Card image = "https://m.media-amazon.com/images/I/51+iUnLTz5L._AC_SY200_.jpg"  />
                <Card image = "https://m.media-amazon.com/images/I/51fkAmO+wFL._AC_SY200_.jpg" />
                <Card image = "https://m.media-amazon.com/images/I/71cx0Kg71BL._AC_SY200_.jpg" />
                <Card image = "https://m.media-amazon.com/images/I/611cP4JDTwL._AC_SY200_.jpg"  />
                <Card image = "https://m.media-amazon.com/images/I/71Uv18BVNgL._AC_SY200_.jpg" />
                <Card image = "https://m.media-amazon.com/images/I/71n3K1OQvZL._AC_SY200_.jpg" />
            </Carousel>
        </div>
    )
    
}