import React, { useState } from "react";
import './Color.css';
 import green from './images/greencart.png';
 import red from './images/redcart.png';
 import blue from './images/bluecart.png';



function Color() {
  const[imgclr , setImgclr]=useState(red);

  return (
    <div className="color">
      <div className="colorcart">
        <div className="carts">
        <img  className="cartsimg" src={imgclr}></img>
        </div>
        <div className="btncolor" >
        <button className="redbtncolor" onClick={()=>{
          setImgclr(red);
        }}></button>
        <button className="greenbtncolor" onClick={()=>{
          setImgclr(green);
        }} ></button>
        <button className="bluebtncolor" onClick={()=>{
          setImgclr(blue);
        }}></button>
        </div>
      </div>
      

      <div className="txtcolor">
        <h3>بلو، فقط آبی نیست ...</h3>
        <ul className="listcolors">
          <li>
            <i></i>عضو سامانه شتاب بانک مرکزی
          </li>
          <li>
            <i></i>ارسال رایگان کارت بانکی به آدرس دلخواه شما در کمتر از ۵ روز
            کاری در تهران و ۱۰ روز کاری در سایر نقاط کشور
          </li>
          <li>
            <i></i>دریافت و فعال‌سازی آنلاین رمزهای کارت از طریق اپلیکیشن بلو
          </li>
          <li>
            <i></i>امکان مسدودکردن کارت از طریق اپلیکیشن بلو
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Color;
