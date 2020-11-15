import React from "react"
import "./Recipe.css"

class Recipe extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            recipes : []
        }
    }
    componentDidMount() {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
          
          fetch("https://api.edamam.com/search?q=chicken&app_id=32b91a95&app_key=c26da8108a4e22b482d04b108d9a494e", requestOptions)
            .then(response => response.json())
            .then(result => this.setState({recipes:result.hits}))
            .catch(error => console.log('error', error));
    }

    render() {
        return (
        <div>   
            <h1 className = "heading"> Chicken Recipes </h1> 
            {this.state.recipes.map(item => 
            <div> 
                <h2> {item.recipe.label} </h2>
                {item.recipe.ingredients.map(ingredient => 
                   <div className = "ingredientWrapper"> 
                       <img src = {ingredient.image ? ingredient.image: " "} className = "image"/> 
                       {ingredient.text} 
                       {/* {ingredient.weight} */}
                    </div>)}
            </div>)}
        </div>
        )
    }
}
export default Recipe;