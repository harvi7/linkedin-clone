import React from 'react'
import './Widgets.css'
import InfoIcon from '@material-ui/icons/Info'
import { FiberManualRecord } from '@material-ui/icons'

function Widgets() {
    const newsArticle = (heading, subtitle) => {
        return(
            <div className="widgets__article">
                <div className="widgets__articleLeft">
                    <FiberManualRecord />
                </div>
                <div className="widgets__articleRight">
                    <h4>{heading}</h4>
                    <p>{subtitle}</p>
                </div>
            </div>
        )
    }
    return (
        <div className="widgets">
            <div className="widgets__header">
                <h2>LinkedIn News</h2>
                <InfoIcon />
            </div>

            {newsArticle("Linkedin Clone", "Harvitech - 42069 readers")}
            {newsArticle("COVID update", "Vaccine to be distributed soon - 1000 readers")}
            {newsArticle("Tesla hits new highs", "Cars & Auto - 300 readers")}
            {newsArticle("Bitcoin breaks $30k", "Crypto - 8000 readers")}
        </div>

    )
}

export default Widgets
