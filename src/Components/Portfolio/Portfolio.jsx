import React from 'react'
import './Portfolio.css'
import 'swiper/css'
import gagnat_logo from '../../img/gagnat_logo.png'
import mood_img from '../../img/Mood_img.png'
import certainli_img from '../../img/certainli_img_1.png'
import kamaee from '../../img/Kamaee.png'
import PortfolioCard from './PortfolioCard/PortfolioCard'
const Portfolio = () => {
    return (
        <div className="portfolio" id='Portfolio'>
            <span>Recent Project</span>
            <span>Portfolio</span>

            <div className='p-card'>
                <PortfolioCard project_image={gagnat_logo} title={'Co-circle'} description={"Relocate your belongings? Don't worry, just take a deep breath. Co-circle will take your headache.We take the hassle out of moving with our professional team and streamlined process.We offer customized solutions to meet your unique needs and budget.Trust Co-Circle to make your move stress-free and seamless."} />
                <PortfolioCard project_image={certainli_img} title={'Cirtainli'} description={'Finding resources for functional assessment of components for your product is easy. But acquiring the component compliance documentation you need to get your product certified is a hassle. Certainli is here to change that.We are committed to delivering exceptional customer service.'} />
                <PortfolioCard project_image={mood_img} title={'Mood Social'} description={'Mood delivers fun activities and experiences in your area entirely based on your interests. Truly get to know your city by meeting friends and people nearby who enjoy the same activities as you! Discover what to do in your city, where to go, and what to visit.'} />
                <PortfolioCard project_image={kamaee} title={'kamaee title'} description={'At Kamaee, we believe that every woman deserves the opportunity to earn a living and achieve financial independence.Our platform is designed to provide a safe and supportive environment for women to grow their businesses and achieve their goal.'} />
            </div>
        </div>
    )
}

export default Portfolio