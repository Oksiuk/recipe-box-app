import React from 'react'
import PropTypes from 'prop-types'
import Ingredients from './Ingredients'
import Button from './Button'
import Directions from './Directions'
import edit from '../assets/img/edit.svg'
import clear from '../assets/img/clear.svg'

function Recipe(props) {
    return (
        <div className='recipe'>
            <header className='recipe__header'>
                <h2 className='recipe__title'>{ props.recipe.name }</h2>
                <div className='recipe__options'>
                    {/* <Button 
                        className='recipe__options-btn btn-delete'
                        icon = {clear}
                        alt = 'delete'
                        onClick = {()=> props.handleDelete(props.recipe.id)}
                    /> */}
                    <button className='recipe__options-btn btn-delete' onClick={()=> props.handleDelete(props.recipe.id)}>
                        <img src = {clear} alt='delete'/>
                    </button>
                    <button className='recipe__options-btn btn-edit' onClick={()=>props.handleEdit(props.recipe.id)}>
                        <img src = {edit} alt='edit'/>
                    </button>
                </div>
            </header>
            <main className='recipe__desc'>
                <Ingredients ingredients={props.recipe.ingredients}/>
                <Directions directions={props.recipe.directions}/>
            </main>            
        </div>
    )
}

Recipe.propTypes = {
    recipe: PropTypes.object.isRequired,
    handleDelete: PropTypes.func.isRequired,
    handleEdit: PropTypes.func.isRequired
}

export default Recipe








//const bg =`url('${clear}')`;
// const styles = {
//     btn: {
//         backgroundImage: `url('${edit}')`,
//         backgroundSize: 'contain',
//         backgroundColor: 'pink',
//         width: '35px',
//         height: '35px'
//     }
// }