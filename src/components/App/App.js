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
          writing: true,
          editing: false
      }
  }

  nextId = () => {
      this._nextID = this._nextID || this.state.recipes.length + 1
      return this._nextID++
  }

  onToggle = (id) => {   
    //   console.log(this.state.current ) 
      let c = this.state.recipes.find(item => item.id === id )
      const current = () => {
          return this.setState({current: c})
      }
      current();
    //   console.log(this.state.current ) 
  }

  handleAdd = (recipe) => {
      recipe.id = this.nextId();
      const recipes = [...this.state.recipes, recipe]
      this.setState( {recipes} )
      this.closeForm()
  }

  handleDelete = (id) => {
      const deleteIndex = this.state.recipes.findIndex(item => item.id === id)
      console.log('index: ', deleteIndex)
      
      const recipes = this.state.recipes.filter(recipe => recipe.id !== id)
      console.log('recipes: ', recipes)

      let nextIndex = deleteIndex > 0 ? (deleteIndex - 1) : (deleteIndex + 1)
      const current = this.state.recipes[nextIndex] 
      console.log('current', current)

      this.setState({ recipes, current })
      console.log('this.state ', this.state)

    // const recipes = this.state.recipes
    // recipes.splice(this.state.current.id - 1, 1)
    // this.setState({recipes, current: this.state.recipes[id-1]})
  }

  handleEdit = (recipe) => {
    const recipes = this.state.recipes
    const index = recipe.id - 1
    recipes.splice(index, 1, recipe)
    this.setState({ recipes })
    this.closeForm()
  }

  showForm = (dataId = null) => {
    this.setState( {writing: true} )
    if (dataId) {
        this.setState( {editing: this.state.recipes[dataId - 1]} )
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
                <RecipeList recipes={this.state.recipes} onToggle={this.onToggle} />
                {this.state.current ?
                    <Recipe 
                        recipe={this.state.current} 
                        onDelete={this.handleDelete} 
                        onEdit={this.showForm}
                        onAdd={this.showForm}
                    />
                    :
                    null
                }
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