import React from 'react'
import PropTypes from 'prop-types'

function Button(props) {
    return (
        <button className={props.className} onClick={props.onClick} {...props}>
            {props.icon ?
                <img src = {props.icon} alt={props.alt} className='button__icon'/>
                :
                props.children
            }
            
        </button>
    )
}

Button.propTypes = {
    className: PropTypes.string,
    icon: PropTypes.string,
    onClick: PropTypes.func,
    children: PropTypes.node
}

export default Button;