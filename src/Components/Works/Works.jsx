import React from 'react'
import './Works.css'
import Upwork from '../../img/Upwork.png'
import Fiverr from '../../img/fiverr.png'
import Amazon from '../../img/amazon.png'
import Shopify from '../../img/Shopify.png'
import Facebook from '../../img/Facebook.png'
const Works = () => {
    return (
        <div className="Works">
            {/* left side  */}
            <div className="awesome">
                <span>Work for All these</span>
                <span>Brands & Clients</span>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit<br />
                    dolore delectus id enim alias nemo? <br />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit <br />
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore, harum.
                </span>
                <button className="button s-button">Hire me</button>
                <div className="blur s-blur" style={{
                    background: '#ABF1FF94'
                }}></div>
                <div className="blur s-blur2" style={{
                    background: 'var(--purple)'
                }}></div>
            </div>
            {/* right side  */}
            <div className="w-right">
                <div className="w-mainCircle">
                    <div className="w-secCircle">
                        <img src={Upwork} alt="" />
                    </div>
                    <div className="w-secCircle">
                        <img src={Fiverr} alt="" />
                    </div>
                    <div className="w-secCircle">
                        <img src={Amazon} alt="" />
                    </div>
                    <div className="w-secCircle">
                        <img src={Shopify} alt="" />
                    </div>
                    <div className="w-secCircle">
                        <img src={Facebook} alt="" />
                    </div>
                </div>
                {/* background circles */}
                <div className="w-backCircle blueCircle"></div>
                <div className="w-backCircle yellowCircle"></div>
            </div>
        </div>
    )
}

export default Works