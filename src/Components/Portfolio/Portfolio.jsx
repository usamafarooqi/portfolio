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
                <PortfolioCard project_image={gagnat_logo} title={'cocircle title'} description={'description'} />
                <PortfolioCard project_image={certainli_img} title={'Component certificates made easy'} description={'Finding resources for functional assessment of components for your product is easy. But acquiring the component compliance documentation you need to get your product certified is a hassle. Certainli is here to change that'} />
                <PortfolioCard project_image={mood_img} title={'Mood Social'} description={'Mood delivers fun activities and experiences in your area entirely based on your interests. Truly get to know your city by meeting friends and people nearby who enjoy the same activities as you! Discover what to do in your city, where to go, and what to visit.'} />
                <PortfolioCard project_image={kamaee} title={'kamaee title'} description={'description'} />
            </div>
        </div>
    )
}

export default Portfolio