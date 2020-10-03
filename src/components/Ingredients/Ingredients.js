import React from 'react' 
import PropTypes from 'prop-types'

function Ingredients({ingredients}) {

    return (
        <section className='recipe__ingredients'>
            <h3 className='recipe__subtitle'>Ingredients</h3>
            <ul  className='recipe__ingredients-list'>
                { ingredients.map((igredient, index) => {
                    return <li key={index}>{ igredient }</li>
                })}
            </ul>               
        </section>
    ) 
}

Ingredients.propTypes = {
    ingredients: PropTypes.array.isRequired
}

export default Ingredients