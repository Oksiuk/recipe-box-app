import React from 'react'
import PropTypes from 'prop-types'

function Directions({directions}) {
    return (
        <section className='recipe__directions'>
            <ol>
                <h3>Directions</h3>
                { directions.map((direction, index) => {
                    return <li key={index}>{ direction }</li>
                })}
            </ol>
        </section>
    )
}

Directions.propTypes = {
    // directions: PropTypes.array
}

export default Directions