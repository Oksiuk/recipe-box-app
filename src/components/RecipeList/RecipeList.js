import React from 'react'
import PropTypes from 'prop-types'

function RecipeList(props) {
    function renderList() {
        return (
            <ul className='recipe-list'> 
                { props.recipes.map(recipe => {
                    let mod = recipe === props.current ? '-active' : ''
                    return ( 
                        <li className={`recipe-list__item${mod}`}
                            key={recipe.id}
                            onClick={()=> props.onToggle(recipe.id)}
                        >
                            { recipe.name }
                        </li>
                    )
                }) }
            </ul>
        )
    }

    function renderMessage() {
        return (
            <p>You have no recipes. Write the new one</p>
        )
    }

    function isEmpty() {
        return !props.current
    }

    return (
        <div className='recipe-list__wrap'>
            { isEmpty() ? renderMessage() : renderList() }
        </div>
    )
}

RecipeList.propTypes = {
    recipes: PropTypes.array.isRequired,
    onToggle: PropTypes.func.isRequired
}

export default RecipeList