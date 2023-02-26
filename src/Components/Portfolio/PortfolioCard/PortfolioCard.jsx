import React from 'react'

import "./PortfolioCard.css"
const PortfolioCard = (props) => {
    return (
        <div className="main-card">
            <div className="project-logo">
                <img src={props.project_image} alt="gagnat" />
            </div>
            <div className="detail">
                <h3>{props.title}</h3>
                <p>{props.description}</p>
            </div>
        </div>
    )
}

export default PortfolioCard