import React  from 'react'
import chuck from '../images/clipart.png'

import "../components/styles/QouteS.css"

const Quote = (props) => {

    return (
        <div className="quote__box">
            <div className="quote">
            {props.data}
            <img className="chuck-img" src={chuck} alt="Chuck"/>
            </div>
        </div>
    )
}

export default Quote;