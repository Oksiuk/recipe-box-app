import React from 'react'
import PropTypes from 'prop-types'

import Ingredients from '../Ingredients/Ingredients'
import Button from '../Button/Button'
import Directions from '../Directions/Directions'

import edit from '../../assets/img/edit.svg'
import clear from '../../assets/img/clear.svg'
import plus from '../../assets/img/plus.svg'

function Recipe(props) {
    return (
        <div className='recipe'>
            <header className='recipe__header'>
                <h2 className='recipe__title'>{ props.recipe.name }</h2>
                <div className='recipe__options'>
                    <Button 
                        className='recipe__options-btn button'
                        icon = {clear}
                        alt = 'delete'
                        onClick = {()=> props.onDelete(props.recipe.id)}
                    />
                    <Button 
                        className='recipe__options-btn button'
                        icon = {edit}  
                        alt='edit'
                        onClick={()=>props.onEdit(props.recipe.id)} 
                    />
                </div>
            </header>
            <main className='recipe__desc'>
                <Ingredients ingredients={props.recipe.ingredients}/>
                <Directions directions={props.recipe.directions}/>
            </main>           
            <footer className='recipe__footer'>
                <Button 
                    className='recipe__options-btn button'
                    icon= {plus}
                    alt='add'
                    onClick={()=> props.onAdd()}
                />
            </footer>            
        </div>
    )
}

Recipe.propTypes = {
    recipe: PropTypes.object,
    onDelete: PropTypes.func.isRequired,
    onEdit: PropTypes.func,
    onAdd: PropTypes.func
}

export default Recipe