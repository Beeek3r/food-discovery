import { SET_LOADING, SEARCH_RECIPES, GET_RECIPE, CLEAR_RECIPES, SET_LOADING_MODAL, GET_FOODS } from './types'

export default (state, action) => {
  // Set Loading to true
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: true
      }

    case SET_LOADING_MODAL:
      return {
        ...state,
        loadingModal: true
      }

    case GET_FOODS:
      return {
        ...state,
        foods: action.payload
      }

    //  Search for recipes
    case SEARCH_RECIPES:
      return {
        ...state,
        recipes: action.payload,
        loading: false
      }

    // Get a single recipe
    case GET_RECIPE:
      return {
        ...state,
        recipe: action.payload,
        loadingModal: false
      }

    // Clear all meals

    case CLEAR_RECIPES:
      return {
        ...state,
        recipes: []
      }

    default:
      return state
  }
}
