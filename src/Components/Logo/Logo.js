import React from 'react'

import classes from './Logo.css'
import Logo from '../../Assets/Images/burger-logo.png'

const logo = (props) => (
    <div className={classes.Logo}>
        <img src={Logo} alt="MyBurger"/>
    </div>
)

export default logo