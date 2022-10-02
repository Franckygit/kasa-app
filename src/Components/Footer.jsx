import React from 'react'
import '../Styles/footer.css'
import logo from '../Assets/logo-white.svg'

const Footer = () => {
    return (
        <div className="footer-container">
            <div className="footer">
                <div className="logo-footer">
                    <a href="/">
                        <img src={logo} alt="logo" />
                    </a>
                </div>
                <div className="copyright-text">
                    © 2020 Kasa. All rights reserved
                </div>
            </div>
        </div>
    )
}

export default Footer
