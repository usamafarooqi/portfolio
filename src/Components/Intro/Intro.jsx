import React from 'react'
import './Intro.css'
import Github from '../../img/github.png'
import LinkedIn from '../../img/linkedin.png'
import Instagram from '../../img/instagram.png'
import Vector1 from '../../img/Vector1.png'
import Vector2 from '../../img/Vector2.png'
import me from '../../img/me.png'
import thumbup from '../../img/thumbup.png'
import Crown from '../../img/crown.png'
import glassesimoji from '../../img/glassesimoji.png'
import FloatingDiv from '../FloatingDiv/FloatingDiv'
import { motion } from 'framer-motion'
import { Link } from 'react-scroll'

const Intro = () => {
    const transition = { duration: 2, type: 'spring' }
    return (
        <div className="intro" id='Intro'>
            <div className="i-left">
                <div className="i-name">
                    <span>Hy! I Am </span>
                    <span>Usama Farooqi </span>
                    <span>
                        Full Stack developer with high level of experience in
                        web designing and development, producing the Quality work
                    </span>
                </div>
                <Link spy={true} to='Contact' smooth={true} activeClass='activeClass' >

                    <button className="button i-button">Hire me</button>
                </Link>
                <div className="i-icons">
                    <img src={Github} alt="" />
                    <img src={LinkedIn} alt="" />
                    <img src={Instagram} alt="" />
                </div>
            </div>
            <div className="i-right">
                <img src={Vector1} alt="" />
                <img src={Vector2} alt="" />
                <img src={me} alt="" width={260} height={260} />
                <motion.img
                    initial={{ left: '-36%' }}
                    whileInView={{ left: '-24%' }}
                    transition={transition}
                    src={glassesimoji} alt="" />
                <motion.div
                    initial={{ top: '-12%' }}
                    whileInView={{ top: '-4%' }}
                    transition={transition}
                    style={{
                        top: '-4%',
                        left: '65%'
                    }}>
                    <FloatingDiv
                        image={Crown} txt1='Web' txt2='Development' />
                </motion.div>
                <motion.div
                    initial={{ top: '22rem' }}
                    whileInView={{ top: '18rem' }}
                    transition={transition}
                    style={{
                        top: '18rem',
                        left: '0rem'
                    }}>
                    <FloatingDiv image={thumbup} txt1='Best Design' txt2='Award' />
                </motion.div>
                {/* blur divs */}
                <div className="blur" style={{
                    background: 'rgb(238 210 255)'
                }}>
                    <div className="blur" style={{
                        background: '#C1F5FF',
                        top: '19rem',
                        width: '21rem',
                        height: '11rem',
                        left: '-30rem',
                    }}></div>
                </div>
            </div>
        </div>
    )
}

export default Intro