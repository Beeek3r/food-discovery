import React, { useReducer } from 'react'
import GlobalContext from './globalContext'
import GlobalReducer from './globalReducer'
import { SET_LOADING, SEARCH_RECIPES, GET_RECIPE, CLEAR_RECIPES, SET_LOADING_MODAL, GET_FOODS } from './types'

const APP_ID = '5209f154'
const APP_KEY = 'df42fadab7626d5615c10137304269cc'

const GlobalState = props => {
  // App Level State
  const initialState = {
    recipes: [],
    testing: 'yeah nah',
    loading: false,
    recipe: {},
    loadingModal: true,
    foods: []
  }

  // Use Reducer
  const [state, dispatch] = useReducer(GlobalReducer, initialState)
  const { recipes, loading, recipe, loadingModal, foods } = state

  // Set Loading
  const setLoading = () => {
    dispatch({
      type: SET_LOADING
    })
  }

  // Set Modal Loading (Need somewhat fixing)
  const setLoadingModal = () => {
    dispatch({
      type: SET_LOADING_MODAL
    })
  }

  // Search Recipes & Checking Paramters
  const searchRecipes = values => {
    const { recipeName, dietType, ingredientLimit, calorieLimit, cookingTime } = values
    let url = `https://api.edamam.com/search?q=${recipeName}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=64`

    if (dietType !== 'no-value') url += `&diet=${dietType}`
    if (ingredientLimit !== 'no-value') url += `&ingr=${ingredientLimit}`
    if (calorieLimit !== 'no-value') url += `&calories=${calorieLimit}`
    if (cookingTime !== 'no-value') url += `&time=${cookingTime}`

    setLoading()

    fetch(url, { method: 'GET' })
      .then(response => response.json())
      .then(data => dispatch({ type: SEARCH_RECIPES, payload: data.hits }))
      .catch(error => console.log(error))
  }

  // Set Single Recipe To State
  const getRecipe = recipeObject => {
    setLoadingModal()
    dispatch({ type: GET_RECIPE, payload: recipeObject })
  }

  // Clear all Recipes
  const clearRecipes = () => dispatch({ type: CLEAR_RECIPES })

  // GetRecipeEstimate
  const GetRecipeEstimate = recipeQuery => {
    fetch(`https://trackapi.nutritionix.com/v2/natural/nutrients`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'x-app-id': 'fde48f5c', 'x-app-key': '55eba24e2e42800cd72cc8dc2bff0eaf', 'x-remote-user-id': '0' },
      body: JSON.stringify({ query: recipeQuery })
    })
      .then(response => response.json())
      .then(data => dispatch({ type: GET_FOODS, payload: data.foods }))
      .catch(error => console.log(error))
  }

  // Return
  return (
    <GlobalContext.Provider
      value={{
        setLoading,
        setLoadingModal,
        loading,
        loadingModal,
        recipe,
        recipes,
        searchRecipes,
        getRecipe,
        clearRecipes,
        GetRecipeEstimate,
        foods
      }}>
      {props.children}
    </GlobalContext.Provider>
  )
}

export default GlobalState
