import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import "./Benefit.css";
import { Pagination } from "swiper";

import video from "./video/vid-1.mp4";
import per from "./icons/percent.svg";
import sl from "./icons/slash.svg";
import nsl from "./icons/noslash.svg";
import dn from "./icons/download.svg";

// nimport { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function benefit() {
  return (
    <div className="containbenefit">
      <div className="benefit">
        <div className="leftSide">
          <Swiper
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="slide1">
                <h2 className="tit-s1">بلو؛ بانک ولی دوست داشتنی</h2>
                <p className="txt-s1-be">
                  بلو، پلتفرمی تمام دیجیتال است که همه‌ی عملیات بانکداری روی
                  اپلیکیشن موبایل و کاملا آنلاین انجام می‌شود. به زبان ساده،
                  بانکی است که همیشه همراه شما خواهد بود.
                </p>
                <button className="btn-s1">
                  {/* <FontAwesomeIcon
                    icon="fa-sharp fa-solid fa-down-to-bracket"
                    style={{ color: "#ffffff" }}
                  /> */}
                  دانلود اپلیکیشن
                </button>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card-s2-con">
                <div className="card-s2">
                  <img src={nsl}></img>
                  <div className="card-s2-bg">
                    <h3>بدون حداقل موجودی حساب </h3>
                    <p>
                      در بلو برای بازکردن حساب، نیاز به حتی یک ریال موجودی نیست.
                    </p>
                  </div>
                </div>

                <div className="card-s2">
                  <img src={sl}></img>
                  <div className="card-s2-bg">
                    <h3>بدون کارمزد بازکردن حساب </h3>
                    <p>
                      در بلو بازکردن حساب کاملا رایگان است و نیاز به پرداخت هیچ
                      کارمزدی ندارد.
                    </p>
                  </div>
                </div>

                <div className="card-s2">
                  <img src={per}></img>
                  <div className="card-s2-bg">
                    <h3> ۵ درصد سود سپرده </h3>
                    <p>
                      در بلو برای حداقل مانده موجودی در ماه، سود سالیانه ۵ درصد
                      به صورت ماه‌شمار پرداخت می‌شود.
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              
              <div className="slide3">
                <h3>
                حفاظت از سرمایه مشتریان
                </h3>
                <ul>
                  <li>
                  مبالغ سپرده‌های مشتریان در چارچوب ضوابط قانونی و تا سقف قانونی تعیین شده، مورد تضمین صندوق ضمانت سپرده‌های بانک مرکزی است.
                  </li>
                  <li>
                  ما همه‌ی اطلاعات حساب‌ها و مدارک هویتی مشتریان خود را محرمانه تلقی کرده و متعهد می‌شویم تحت هر شرایطی جز در موارد قانونی از انتشار آن جلوگیری کرده و مسئولیت این موضوع را به طور کامل می‌پذیریم.
                  </li>
                </ul>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="rightSide">
          <video src={video} type="video/mp4" autoPlay loop muted></video>
        </div>
      </div>
    </div>
  );
}

export default benefit;
