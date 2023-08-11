import React from 'react'
import './Trasform.css'
import trsvid from './video/vid-3.mp4'


function Trasfotm() {
  return (
    <div className='trasfotm'>
         <div className="contrfrm">

         

      <div className="txttrsfrm">
        <h3>انتقال هوشمند پول</h3>
        <p>
        «انتقال هوشمند پول» یعنی راحت و بدون دردسر پولی را که می‌خواهید، جابه جا کنید. در بلو، لازم نیست شما بدانید پایا، ساتنا یا شبا چیست و برای انتقال چه میزان پول از کدامیک از آنها باید استفاده کرد. ما این کار را برای شما انجام می‌دهیم.  </p>
      </div>

      <div className="vidtrsfrm">
        <video src={trsvid} autoPlay loop muted ></video>
      </div>

      </div>
    </div>
  )
}

export default Trasfotm