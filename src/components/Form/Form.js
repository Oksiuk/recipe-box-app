import React from 'react'
import PropTypes from 'prop-types'
import Button from '../Button/Button'

class Form extends React.Component {
    constructor(props) {
        super()

        let { name, ingredients, directions } = ''
        let submit = 'add'

        if (props.data) {
           ({ name, ingredients, directions } = props.data)
           submit = 'save'
        }
        
        this.state = { name, ingredients, directions, submit }
    }

    handleInputChange = (event) => {
        const name = event.target.name
        const value = event.target.value

        this.setState({
            [name]: value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()

        const recipe = {
            name: this.state.name,
            ingredients: this.state.ingredients,
            directions: this.state.directions
        }

        recipe.id = this.props.data ? this.props.data.id : undefined

        this.state.submit === 'add' ? 
            this.props.onAdd(recipe) 
            : 
            this.props.onEdit(recipe)

        this.setState({
            name: '',
            ingredients: '',
            directions: '' 
        })
    }

    render() {
        return (
            <form className = 'recipe__form form' onSubmit={this.handleSubmit}>
                <h3 className='form__title'>Add a Recipe</h3>
                <div className='form__wrap'>
                    <label htmlFor='recipe-name' className='form__label'>Recipe</label>
                    <input                         
                        type='text' 
                        id='recipe-name'
                        className='form__input' 
                        name='name'
                        placeholder='Recipe name'
                        value = {this.state.name}
                        onChange={this.handleInputChange}
                    />
                </div>
                <div className='form__wrap'>
                    <label htmlFor='ingredients' className='form__label'>Ingredients</label>
                    <textarea                        
                        type='text'
                        id='ingredients'
                        className='form__input'
                        name='ingredients'
                        placeholder='Separate each ingredient:'
                        value = {this.state.ingredients}
                        onChange={this.handleInputChange}
                    />
                </div>
                <div className='form__wrap'>
                    <label htmlFor='directions' className='form__label'>Directions</label>
                    <textarea 
                        type='text' 
                        id='directions'
                        className='form__input'
                        name='directions' 
                        placeholder='Separate each step:'
                        value={this.state.directions}
                        onChange={this.handleInputChange}
                    />
                </div>
                <div className='form__wrap'>
                    <Button className='form__button' type='submit'>{this.state.submit}</Button>
                    <Button className='form__button' onClick={() => this.props.onClose()}>Close</Button>
                </div>
            </form>
        )
    }

}

Form.propTypes = {
    onAdd: PropTypes.func,
    onClose: PropTypes.func
}

export default Form