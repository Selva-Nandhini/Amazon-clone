import React from 'react'
import { useEffect } from 'react';
import "./ImgSlider.css"


const ImgSlider = () => {
  useEffect(() => Slider(0), [])
  return (
    <>
      <div className="home">
        <div className="homeContainer">
          <div className="homeSlideContainer">
            <div className="homeSlide">
              <img className='homeImg' src="https://images-eu.ssl-images-amazon.com/images/G/31/img2020/img21/apparelGW/junatf23/unrecapay/MA_3000._CB603210873_.jpg" alt="" />
            </div>

            <div className="homeSlide">
              <img className='homeImg' src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2023/BAU2023/ATFGW/Home_mela_June_Unrec_3000x1200._CB602117230_.jpg" alt="" />
            </div>

            <div className="homeSlide">
              <img className='homeImg' src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Toys/GW/Amazon_GRD_DesktopHero_Template_3000x1200-STEAM._CB602034387_.jpg" alt="" />
            </div>

            <div className="homeSlide">
              <img className='homeImg' src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/Shreyansh/BAU/Unrexc/D70978891_INWLD_BAU_Unrec_Uber_PC_Hero_3000x1200._CB594707876_.jpg" alt="" />
            </div>

            <div className="homeSlide">
              <img className='homeImg' src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Fashion/GW/Jun/Unrec-PFF-3000-1200._CB603212230_.jpg" alt="" />
            </div>

            <div className="homeSlide">
              <img className='homeImg' src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2023/BAU2023/ATFGW/Drying_rack_2_Desk_3000x1200_Unrec._CB602117230_.jpg" alt="" />
            </div>

            <div className="homeSlide">
              <img className='homeImg' src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/WLA/October/GW/Unrec/D60755841_PC_3000x1200de._CB606447388_.jpg" alt="" />
            </div>


          </div>

          
        </div>
      </div>

    
    
    </>
  )
}



//For the slider

function Slider(Counter) {
  const Slides = document.querySelectorAll(".homeImg");
  Slides.forEach((slide, index) => {
    if(index !== Counter) {
      slide.style.visibility = `hidden`;
      slide.classList.add(`image-$(index)`)
    }
  })
  moveCaurosal(Counter, Slides, Slides.length)
}

function moveCaurosal(Counter, Slides, len) {
  if(Slides) {
    if(Counter >= len - 1) Counter = 0;
    else Counter += 1;
    Slides.forEach((slide, index) => {
      if(index === Counter) {
        slide.style.visibility = `visible`;
      }else {
        slide.style.visibility = `hidden`;
      }
  })
}
  setTimeout(() => {
    moveCaurosal(Counter, Slides, len)
  }, 4000)
}

export default ImgSlider