import React from 'react'
import './Services.css'
import HeartEmoji from '../../img/heartemoji.png'
import Glasses from '../../img/glasses.png'
import Humble from '../../img/humble.png'
import Card from '../Card/Card'
import Resume from './resume.pdf'
const Services = () => {
    return (
        <div className="services">
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
                <div style={{
                    left: '14rem'
                }}>
                    <Card
                        emoji={HeartEmoji}
                        heading={'Design'}
                        detail={'Figma, Sketch, Photoshop, Adobe'}
                    />
                </div>
                {/* 2nd card */}
                <div style={{
                    marginTop: '12rem',
                    left: '-4rem'
                }}>
                    <Card
                        emoji={Glasses}
                        heading={'Developer'}
                        detail={'Html, React JS, React Native, Laravel'}
                    />
                </div>
                <div style={{
                    marginTop: '19rem',
                    left: '12rem'
                }}>
                    <Card
                        emoji={Humble}
                        heading={'UI/UX'}
                        detail={'lorem apsum dummy text'}
                    />
                </div>
            </div>
        </div>
    )
}

export default Services