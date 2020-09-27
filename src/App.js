import React from 'react'
import Recipe from './components/Recipe'
import RecipeList from './components/RecipeList'
import recipes from './recipes'

class App extends React.Component {

  constructor() {
      super();
      
      this.state = {
          recipes: recipes,
          current: recipes[0]
      }
  }

  onToggle = (id) => {
      const current = this.state.recipes.find(item => item.id === id )
      this.setState({ current })
  }

  handleDelete = (id) => {
      const recipes = this.state.recipes.filter(recipe => recipe.id !== id);
      this.setState({ recipes, current: this.state.recipes[id+1] });
  }

  handleEdit = (id) => {
      
  }

  render() {
      return (
        <div className="App">
            <div className="container">
                <h1 className="title">Recipe Box</h1>
                <RecipeList recipes={this.state.recipes} onToggle={this.onToggle} />
                <Recipe recipe={this.state.current} handleDelete={this.handleDelete} handleEdit={this.handleEdit}/>
            </div>            
        </div>
      )
  }
}

export default App