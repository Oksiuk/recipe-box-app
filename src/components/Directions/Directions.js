import React from 'react'
import PropTypes from 'prop-types'

function Directions({directions}) {
    return (
        <section className='recipe__directions'>
            <h3 className='recipe__subtitle'>Directions</h3>
            <ol className='recipe__directions-list'>
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