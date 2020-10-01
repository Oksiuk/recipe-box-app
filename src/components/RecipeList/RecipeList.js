import React from 'react'
import PropTypes from 'prop-types'

function RecipeList(props) {
    return (
        <div className='recipe-list__wrap'>
            <ul className='recipe-list'> 
                {props.recipes.map(recipe => {
                    return ( 
                        <li className='recipe-list__item'
                            key={recipe.id}
                            onClick={()=> props.onToggle(recipe.id)}
                        >
                            { recipe.name }
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

RecipeList.propTypes = {
    recipes: PropTypes.array.isRequired,
    onToggle: PropTypes.func.isRequired
}

export default RecipeList