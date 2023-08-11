import React from 'react'
import './Blueline.css'

import chat from './images/chat.png'

function Blueline() {
  return (
    <div className='blulin'>
        <div className="bluelinecon">
            <div className="txtblulin">
            <h3>بلولاین؛ همیشه به وقت همه‌جا</h3>
            <p>
            اگر سوالی دارید، در چت اپلیکیشن بلو پیام صوتی و یا متنی بگذارید، یا با شماره ۸۷۶۴۱-۰۲۱ تماس بگیرید. 
            <br/>
            کارشناسان بلولاین همیشه آماده‌ی پاسخ‌گویی و حل مشکلات احتمالی شما هستند.
            </p>
            </div>
            <div className="imgnlulin">
            <img src={chat} ></img>
            </div>
        </div>
    </div>
  )
}

export default Blueline