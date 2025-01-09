import React, { useState } from 'react'

import ham from '../img/newham3.svg'
import cross from '../img/times.svg'

function Hambargur() {

    const [newClass,setNewClass] = useState("mobile-nav");

    const openHam = ()=>{
        setNewClass("mobile-nav open")
    }

    const closeHam = ()=>{
        setNewClass("mobile-nav")
    }

  return (
    <div>
        <button onClick={openHam} className="hamberger">
            <img src={ham} alt=""/>
        </button>

        <div className={newClass}>
            <button onClick={closeHam} className="times"><img src={cross} alt=""/></button>
            <ul>
                <li><a  href="#home">Home</a></li>
                <li><a  href="#about">About</a></li>
                <li><a  href="#experience">Experience</a></li>
                <li><a  href="#service">Services</a></li>
                <li><a  href="#work">Work</a></li>
            </ul>
        </div>
    </div>
  )
}

export default Hambargur