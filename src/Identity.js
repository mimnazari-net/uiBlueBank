import React from "react";
import './Identity.css';
import idvid from './video/vid-2.mp4'

function Identity() {
  return (
    <div className="Identity">
      

      <div className="vididnty">
        <video src={idvid} autoPlay loop muted ></video>
      </div>

      <div className="txtidnty">
        <h3>شناسایی هویت</h3>
        <p>
          “اینجانب مهرداد اندامی با کد ملی ۱۲۳۴۵۶۷۸۹۰ درخواست بازکردن حساب در
          بلو را دارم.” یک ویدیو ۴۵ ثانیه‌ای با عبارت خواسته مشابه نمونه بالا
          ضبط و ارسال کنید.
        </p>
      </div>

    </div>
  );
}

export default Identity;
