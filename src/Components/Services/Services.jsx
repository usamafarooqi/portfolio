import React from 'react'
import './Services.css'
import HeartEmoji from '../../img/heartemoji.png'
import Glasses from '../../img/glasses.png'
import Humble from '../../img/humble.png'
import Card from '../Card/Card'
import Resume from './resume.pdf'
import { motion } from 'framer-motion'
const Services = () => {
    const transition = { duration: 2, type: 'spring' }
    return (
        <div className="services" id='Service'>
            {/* left side */}
            <div className="awesome">
                <span>My Awesome</span>
                <span>services</span>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit<br />
                    dolore delectus id enim alias nemo?</span>
                <a href={Resume} download>
                    <button className="button s-button">Download CV</button>
                </a>
                <div className="blur s-blur" style={{
                    background: '#ABF1FF94'
                }}></div>
                <div className="blur s-blur2" style={{
                    background: 'var(--purple)'
                }}></div>
            </div>
            {/* right side */}
            <div className="cards">
                <motion.div
                    initial={{ left: '19rem' }}
                    whileInView={{ left: '14rem' }}
                    transition={transition}
                    style={{
                        left: '14rem'
                    }}>
                    <Card
                        emoji={HeartEmoji}
                        heading={'Backend Developer'}
                        detail={'Laravel, Nestjs'}
                    />
                </motion.div>
                {/* 2nd card */}
                <motion.div
                    initial={{ left: '-9rem' }}
                    whileInView={{ left: '-4rem' }}
                    transition={transition}
                    style={{
                        marginTop: '12rem',
                        left: '-4rem'
                    }}>
                    <Card
                        emoji={Glasses}
                        heading={'Frontend Developer'}
                        detail={'React JS, React Native, Laravel'}
                    />
                </motion.div>
                <motion.div
                    initial={{ margin: '24rem 0rem 0rem 0rem' }}
                    whileInView={{ margin: '19rem 0rem 0rem 0rem' }}
                    transition={transition}
                    style={{
                        marginTop: '19rem',
                        left: '12rem'
                    }}>
                    <Card
                        emoji={Humble}
                        heading={'Design'}
                        detail={'Figma, Adobe XD'}
                    />
                </motion.div>
            </div>
        </div>
    )
}

export default Services