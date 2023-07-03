import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Card from './Card';

export default function ProductSlider() {
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
        <div className="ProductSlider">
            <h2>Popular Electronic Items</h2>
            <Carousel responsive={responsive}>
                <Card image="https://m.media-amazon.com/images/I/61LB+d0vheL._AC_UL480_QL65_.jpg" />
                <Card image = "https://m.media-amazon.com/images/G/31/img22/Electronics/Page/Revamp/Maximize/Buying/Guide/laptop1_390x498._CB614449697_.png"  />
                <Card image = "https://m.media-amazon.com/images/G/31/img22/Electronics/Page/Revamp/Maximize/Buying/Guide/headphones_390x498._CB614449697_.png" />
                <Card image = "https://m.media-amazon.com/images/G/31/img22/Electronics/Page/Revamp/Maximize/Buying/Guide/wearable_390x498._CB614449697_.png" />
                <Card image = "https://m.media-amazon.com/images/G/31/img22/Electronics/Page/Revamp/Maximize/Buying/Guide/camera_390x498._CB614449697_.png" />
                <Card image = "https://m.media-amazon.com/images/G/31/img22/Electronics/Page/Revamp/Maximize/Buying/Guide/printer_390x498._CB614449697_.png" />
                <Card image = "https://m.media-amazon.com/images/G/31/img22/Electronics/Page/Revamp/Maximize/Buying/Guide/monitors_390x498._CB614449697_.png"  />
                <Card image = "https://m.media-amazon.com/images/G/31/img22/Electronics/Page/Revamp/Maximize/Buying/Guide/homeTheatre_390x498._CB614449697_.png" />
                <Card image = "https://m.media-amazon.com/images/G/31/img22/Electronics/Page/Revamp/Maximize/Buying/Guide/SecurityCam_390x498._CB614449697_.png" />
                <Card image = "https://images-eu.ssl-images-amazon.com/images/I/41rwffmOj9L._AC_SX184_.jpg"  />
                <Card image = "https://m.media-amazon.com/images/I/410JwTm0NqL._AC._SR240,240.jpg" />
                <Card image = "https://m.media-amazon.com/images/I/31Jn+yn1EZL._AC._SR360,460.jpg" />
            </Carousel>
        </div>
    )
    
}