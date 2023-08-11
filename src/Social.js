import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Social.css";

import { Pagination, Navigation } from "swiper";

import pi1 from "./images/cmnt1.JPG";
import pi2 from "./images/cmnt2.JPG";
import pi3 from "./images/cmnt3.JPG";
import pi4 from "./images/cmnt4.JPG";
import pi5 from "./images/cmnt5.JPG";

function Social() {
  const [swiperRef, setSwiperRef] = useState(null);

  let appendNumber = 5;
  let prependNumber = 1;

  const prepend2 = () => {
    swiperRef.prependSlide([
      '<div class="swiper-slides">Slide ' + --prependNumber + "</div>",
      '<div class="swiper-slides">Slide ' + --prependNumber + "</div>",
    ]);
  };

  const prepend = () => {
    swiperRef.prependSlide(
      '<div class="swiper-slides">Slide ' + --prependNumber + "</div>"
    );
  };

  const append = () => {
    swiperRef.appendSlide(
      '<div class="swiper-slides">Slide ' + ++appendNumber + "</div>"
    );
  };

  const append2 = () => {
    swiperRef.appendSlide([
      '<div class="swiper-slides">Slide ' + ++appendNumber + "</div>",
      '<div class="swiper-slides">Slide ' + ++appendNumber + "</div>",
    ]);
  };

  return (
    <div className="social">
      <div className="consocial">
        <Swiper
          onSwiper={setSwiperRef}
          slidesPerView={4}
          centeredSlides={true}
          spaceBetween={30}
          pagination={{
            type: "fraction",
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide className="sscart">
            <img src={pi1} />
          </SwiperSlide>
          <SwiperSlide className="sscart"><img src={pi2} /></SwiperSlide>
          <SwiperSlide className="sscart"><img src={pi3} /></SwiperSlide>
          <SwiperSlide className="sscart"><img src={pi4} /></SwiperSlide>
          <SwiperSlide className="sscart"><img src={pi5} /></SwiperSlide>
          
        </Swiper>
      </div>
    </div>
  );
}

export default Social;
