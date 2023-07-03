import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Card from './Card';

export default function SliderFP() {
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
        <div className="SliderFP">
            <h2>Up to 45% off | Furniture from stores near you</h2>
            <Carousel responsive={responsive}>
                <Card image = "https://m.media-amazon.com/images/I/71kODifHzAL._AC_SY200_.jpg" />
                <Card image = "https://m.media-amazon.com/images/I/419sjsYXXaL._AC_SY200_.jpg"  />
                <Card image = "https://m.media-amazon.com/images/I/71s8Nrlh-fS._AC_SY200_.jpg" />
                <Card image = "https://m.media-amazon.com/images/I/71gYyJGdsuS._AC_SY200_.jpg" />
                <Card image = "https://m.media-amazon.com/images/I/61S-eahNDzL._AC_SY200_.jpg" />
                <Card image = "https://m.media-amazon.com/images/I/71FqnBJbzfS._AC_SY200_.jpg" />
                <Card image = "https://m.media-amazon.com/images/I/71qtu0HIT5L._AC_SY200_.jpg"  />
                <Card image = "https://m.media-amazon.com/images/I/61u3gYY3POL._AC_SY200_.jpg" />
                <Card image = "https://m.media-amazon.com/images/I/61iCaM11GrL._AC_SY200_.jpg" />
                <Card image = "https://m.media-amazon.com/images/I/61VgIm1rFTL._AC_SY200_.jpg"  />
                <Card image = "https://m.media-amazon.com/images/I/71sVDHxrMYL._AC_SY200_.jpg" />
                <Card image = "https://m.media-amazon.com/images/I/51JsqdjgzOL._AC_SY200_.jpg" />
            </Carousel>
        </div>
    )
    
}