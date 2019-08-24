import React from 'react'

import Backdrop from '../Backdrop/Backdrop'
import Aux from '../../../hoc/Aux'
import classes from './Modal.css'

const modal = (props) => {
    return(
        <Aux>
            <Backdrop show={props.modalOpen} close={props.modalClose}/>
            <div className={classes.Modal}
                style={{
                    transform: props.modalOpen? 'TranslateY(0)': 'TranslateY(-100vh)',
                    opacity: props.modalOpen? '1': '0'
                }}>
                {props.children}
            </div>
        </Aux>
    )
}

export default modal