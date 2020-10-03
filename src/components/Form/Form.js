import React from 'react'
import PropTypes from 'prop-types'
import Button from '../Button/Button'

class Form extends React.Component {
    constructor(props) {
        super()

        let { name, ingredients, directions } = ''
        let submit = 'add'

        if (props.data) {
           name = props.data.name
           ingredients = props.data.ingredients.join('\\')
           directions =  props.data.directions.join('\\')
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

        if ( !this.validateForm() ) {
            alert( 'Invalid form inputs' )
            return
        }

        const name = this.state.name
        const ingredients =  this.state.ingredients.split('\\')
        const directions = this.state.directions.split('\\')

        const recipe = { name, ingredients, directions }

        recipe.id = this.props.data ? this.props.data.id : undefined

        this.state.submit === 'add' ? 
            this.props.onAdd(recipe) 
            : 
            this.props.onEdit(recipe)

       this.clearForm()
    }

    validateForm() {
        let { name, directions, ingredients } = this.state

        if (!name || !directions || !ingredients ) {
            return false
        }

        return true
    }
    
    clearForm = () => {
        this.setState({
            name: '',
            ingredients: '',
            directions: '' 
        })
    }

    render() {
        return (
            <form className = 'app__form form' onSubmit={this.handleSubmit} onReset={this.props.onClose}>
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
                        required
                    />
                </div>
                <div className='form__wrap'>
                    <label htmlFor='ingredients' className='form__label'>Ingredients</label>
                    <textarea                        
                        type='text'
                        id='ingredients'
                        className='form__input'
                        name='ingredients'
                        placeholder='Separate each ingredient with "\" '
                        value = {this.state.ingredients}
                        rows='5'
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
                        placeholder='Separate each step with "\" '
                        value={this.state.directions}
                        rows='5'
                        onChange={this.handleInputChange}
                    />
                </div>
                <div className='form__wrap'>
                    <Button className='form__button button' type='submit'>{this.state.submit}</Button>
                    <Button className='form__button button' type='reset'>Close</Button>
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