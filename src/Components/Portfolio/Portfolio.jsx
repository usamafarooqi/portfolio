import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import './Portfolio.css'
import 'swiper/css'
import Sidebar from '../../img/sidebar.png'
import Ecommerce from '../../img/ecommerce.png'
import Hoc from '../../img/hoc.png'
import Musicpp from '../../img/musicapp.png'
const Portfolio = () => {
    return (
        <div className="portfolio" id='Portfolio'>
            <span>Recent Project</span>
            <span>Portfolio</span>
            <Swiper
                spaceBetween={30}
                slidesPerView={3}
                grabCursor={true}
                className='portfolio-slider'
            >
                <SwiperSlide>
                    <img src={Sidebar} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Ecommerce} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Hoc} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Musicpp} alt="" />
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Portfolio