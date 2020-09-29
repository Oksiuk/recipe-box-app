import React from 'react'
import PropTypes from 'prop-types'

const styles = {
    ul: {
        listStyle: 'none',
        padding: 0
    }
}

function RecipeList(props) {
    return (
        <ul className='recipe-list' style={styles.ul}> 
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
    )
}

RecipeList.propTypes = {
    recipes: PropTypes.array.isRequired,
    onToggle: PropTypes.func.isRequired
}

export default RecipeList