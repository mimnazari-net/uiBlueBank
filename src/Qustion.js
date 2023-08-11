import React from "react";
import "./Question.css";

function qustion() {
  return (
    <div className="qustion">
      <div className="conques">
        <div className="titqus">
          <h2>سوالات متداول</h2>
        </div>
        <div className="listqus">
          <div className="itemqus">
            <button className="cirbtnqus">?</button>
            <h4>چگونه می‌توانم حساب بازکنم؟</h4>
          </div>
          <div className="line">
            <hr/>
          </div>

          <div className="itemqus">
            <button className="cirbtnqus">?</button>
            <h4>برای بازکردن حساب چه مدارکی لازم است؟</h4>
          </div>
          <div className="line">
            <hr/>
          </div>


          <div className="itemqus">
            <button className="cirbtnqus">?</button>
            <h4>من کارت ملی هوشمند ندارم و برگه رسید کارت ملی هوشمند را گم کرده‌ام، چطور می‌توانم حساب بازکنم؟</h4>
          </div>
          <div className="line">
            <hr/>
          </div>

          <div className="itemqus">
            <button className="cirbtnqus">?</button>
            <h4>مراحل بازکردن حساب چقدر زمان می‌برد؟</h4>
          </div>
          <div className="line">
            <hr/>
          </div>

          <div className="qusmor">سوالات بیشتر ...</div>

            <div className="buttomqus" >
                <h3>خط ارتباطی برای پاسخ به سوالات شما</h3>
                <button className="btnlin" > بلولاین </button>
            </div>

        </div>
      </div>
    </div>
  );
}

export default qustion;
