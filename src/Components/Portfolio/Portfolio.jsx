import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import './Portfolio.css'
import 'swiper/css'
import Sidebar from '../../img/sidebar.png'
import Ecommerce from '../../img/ecommerce.png'
import Hoc from '../../img/hoc.png'
import certainli1 from '../../img/certainli1.png'
import gagnat_logo from '../../img/gagnat_logo.png'
import nutri from '../../img/Nutri-Food.png'
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
                    <img src={certainli1} alt="" width={80} height={100} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={nutri} alt="svg" width={80} height={100} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={gagnat_logo} alt="svg" width={80} height={100} />
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Portfolio