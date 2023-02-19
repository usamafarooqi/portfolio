import React from 'react'
import { Link } from 'react-scroll'
import './Navbar.css'
const Navbar = () => {
    return (
        <div className="n-wrapper" id='Navbar'>
            <div className="n-left">
                <div className="n-name">Usama</div>
            </div>
            <div className="n-right">
                <div className="n-list">
                    <ul style={{ listStyleType: 'none' }}>
                        <Link spy={true} to='Navbar' smooth={true} activeClass='activeClass' >
                            <li className='nav-li'>Home</li>
                        </Link>
                        <Link spy={true} to='Service' smooth={true}>
                            <li className='nav-li'>Services</li></Link>
                        <Link spy={true} to='Experience' smooth={true}>
                            <li className='nav-li'>Experience</li>
                        </Link>
                        <Link spy={true} to='Portfolio' smooth={true}>
                            <li className='nav-li'>Portfolio</li>
                        </Link>
                        {/* <Link spy={true} to='Testimonial' smooth={true}>
                            <li>Testimonial</li>
                        </Link> */}
                    </ul>
                </div>
                <Link spy={true} to='Contact' smooth={true}>

                    <button className="button n-button">Contact</button>
                </Link>
            </div>
        </div>
    )
}

export default Navbar