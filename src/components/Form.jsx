import React from 'react'

class Form extends React.Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <form className = 'recipe__form form'>
                <h3 className='form__title'>Add a Recipe</h3>
                <div className='fieldset'>
                    <label htmlFor='recipe-name'>Recipe</label>
                    <input id='recipe-name' type='text' placeholder='Recipe name' />
                </div>
                <div className='fieldset'>
                    <label htmlFor='ingredients'>Ingredients</label>
                    <input id='ingredients' type='text' placeholder='Separate each ingredient:'/>
                </div>
                <div className='fieldset'>
                    <label htmlFor='directions'>Directions</label>
                    <input id='directions' type='text' placeholder='Separate each step:'/>
                </div>
            </form>
        )
    }

}