import React from 'react'

import "./PortfolioCard.css"
const PortfolioCard = (props) => {
    return (
        <div className="main-card">
            <div className="project-logo">
                <img src={props.project_image} alt="gagnat" />
            </div>
            <div className="detail">
                <h3>project title</h3>
                <p>description</p>
            </div>
        </div>
    )
}

export default PortfolioCard