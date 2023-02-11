import React from 'react'
import Wave from "../../img/wave.png"
import "./Footer.css"
import Facebook from "@iconscout/react-unicons/icons/uil-facebook"
import Linkedin from "@iconscout/react-unicons/icons/uil-linkedin"
import Github from "@iconscout/react-unicons/icons/uil-github"
const Footer = () => {
    return (
        <div className='footer-wrapper'>
            <img src={Wave} alt="" />
            <div className='f-contant'>
                <span>usamafarooqi168@gmail.com</span>
                <div className="f-icon">

                    <Linkedin size={50} onClick={() => window.location.href = "https://www.linkedin.com/in/usama-farooqi-886580167/"} />

                    <Github size={50} onClick={() => window.location.href = "https://github.com/usamafarooqi"} />
                    <Facebook size={50} onClick={() => window.location.href = "https://www.facebook.com/usamafarooqi168"} />

                </div>
            </div>
        </div>
    )
}

export default Footer