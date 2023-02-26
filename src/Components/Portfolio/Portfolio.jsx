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
                <PortfolioCard project_image={certainli_img} title={'certainli title'} description={'description'} />
                <PortfolioCard project_image={mood_img} title={'mood title'} description={'description'} />
                <PortfolioCard project_image={kamaee} title={'kamaee title'} description={'description'} />
            </div>
        </div>
    )
}

export default Portfolio