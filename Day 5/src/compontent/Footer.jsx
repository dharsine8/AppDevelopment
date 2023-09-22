import React from 'react'
import './Footer.css';


function Footer() {
  return (
    <div className='footer-main'>
        <div className='inner-footer-box'>
            <div className='top-box'>
                <div>
                    <p>About</p>
                </div>
                <div>
                    <p>Blog</p>
                </div>
                <div>
                    <p>Privacy</p>
                </div>
                <div>
                    <p>Terms</p>
                </div>
                <div>
                    <p>Help</p>
                </div>
            </div>
            <div className='bottom-box'>
                <p>© 2019-2023 Llama Luna Apps Inc. All Rights Reserved </p>
            </div>
        </div>
    </div>
  )
}

export default Footer;
