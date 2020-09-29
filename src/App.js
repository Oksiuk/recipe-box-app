import React from 'react'
import Recipe from './components/Recipe/Recipe'
import RecipeList from './components/RecipeList/RecipeList'
import Form from './components/Form/Form'
import recipes from './recipes'

class App extends React.Component {

  constructor() {
      super();
      
      this.state = {
          recipes: recipes,
          current: recipes[0],
          writing: false,
          editing: null
      }
  }

  nextId = () => {
      this._nextID = this._nextID || this.state.recipes.length + 1
      console.log(this._nextID)
      return this._nextID++
  }

  getCurrent(id) {
      return this.state.recipes[id - 1];
  }

  onToggle = (id) => {   
      console.log(this.state.current ) 
    //   console.log(id) 
      const current = () => {
          return this.state.recipes.find(item => item.id === id )
      }
      console.log(current())

      this.setState({current: current()})

      console.log(this.state.current ) 
  }

  handleAdd = (recipe) => {
      recipe.id = this.nextId();
      const recipes = [...this.state.recipes, recipe]
      this.setState( {recipes} )
  }

  handleDelete = (id) => {
      const recipes = this.state.recipes.filter(recipe => recipe.id !== id);
      this.setState({ recipes, current: this.state.recipes[id+1] });
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
                <h1 className="title">Recipe Box</h1>
                <RecipeList recipes={this.state.recipes} onToggle={this.onToggle} />
                <Recipe 
                    recipe={this.state.current} 
                    onDelete={this.handleDelete} 
                    onEdit={this.showForm}
                    onAdd={this.showForm}
                />
                {this.state.writing ? 
                    <Form 
                        onAdd={this.handleAdd} 
                        onEdit={this.handleEdit} 
                        onClose={this.closeForm} 
                        data={this.state.editing}/> 
                    : 
                    null
                }
            </div>            
        </div>
      )
  }
}

export default App