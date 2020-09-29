import React from 'react' 
import PropTypes from 'prop-types'

function Ingredients({ingredients}) {
    return (
        <section className='recipe__ingredients'>
            <ul>
                <h3>Ingredients</h3>
                { ingredients.map((igredient, index) => {
                    return <li key={index}>{ igredient }</li>
                })}
            </ul>               
        </section>
    ) 
}

Ingredients.propTypes = {
    // ingredients: PropTypes.array.isRequired
}

export default Ingredients