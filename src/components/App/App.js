import React from 'react'
import Recipe from '../Recipe/Recipe'
import RecipeList from '../RecipeList/RecipeList'
import Form from '../Form/Form'
import recipes from '../../recipes'

class App extends React.Component {

    constructor() {
        super();

        this.state = {
            recipes: recipes,
            current: recipes[0],
            writing: false,
            editing: false
        }
    }

    nextId = () => {
        this._nextID = this._nextID || this.state.recipes.length + 1
        return this._nextID ++
    }

    onToggle = (id) => {   
        let current = this.state.recipes.find(item => item.id === id )
        this.setState({ current })
    }

    handleAdd = (recipe) => {
        recipe.id = this.nextId();
        const recipes = [...this.state.recipes, recipe]
        this.setState({recipes, current: recipe})
        this.closeForm();
    }

    handleEdit = (recipe) => {
        const recipes = this.state.recipes
        const index = recipes.findIndex(item => item.id === recipe.id)      
        recipes.splice(index, 1, recipe)
        const current = recipes[index]
        this.setState({ recipes, current })
        this.closeForm()
    }

    handleDelete = (id) => {
        const recipes = this.state.recipes
        const index = this.state.recipes.findIndex(item => item.id === id)       
        recipes.splice(index, 1)
        let newIndex = index > 0 ? (index - 1) : index
        const current = recipes[newIndex] 
        this.setState({recipes, current})
    }

    showForm = (id = null) => {
        this.setState( {writing: true} )
        if (id) {
            let editing = this.state.recipes.find(recipe => recipe.id === id)
            this.setState( {editing} )
        }
    }

    closeForm = () => {
        this.setState( {writing: false, editing: null} )
    }

  render() {
      return (
        <div className="App">
            <div className="container">
                <h1 className="app__title">Recipe Box</h1>
                <RecipeList 
                    recipes={this.state.recipes} 
                    current ={this.state.current}
                    onToggle={this.onToggle} />
                
                <Recipe 
                    recipe={this.state.current} 
                    onAdd={this.showForm}                    
                    onEdit={this.showForm}                    
                    onDelete={this.handleDelete} 
                />
                {this.state.writing ? 
                    <div className = 'app__overlay'>
                    <Form 
                        onAdd={this.handleAdd} 
                        onEdit={this.handleEdit} 
                        onClose={this.closeForm} 
                        data={this.state.editing}
                    />
                    </div> 
                    : 
                    null
                }
            </div>            
        </div>
      )
  }
}

export default App