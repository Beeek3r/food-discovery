import React, { Fragment, useContext } from 'react'
import GlobalContext from '../../context/globalContext'
import Spinner from '../layout/Spinner'
import RecipeItems from './RecipeItems'

const Recipes = () => {
  // Using context API
  const globalContext = useContext(GlobalContext)
  const { recipes, loading } = globalContext

  if (loading) {
    return (
      <Fragment>
        <Spinner />
      </Fragment>
    )
  } else {
    return (
      <Fragment>
        {recipes.map(x => (
          <RecipeItems recipe={x.recipe} key={x.uri} />
        ))}
      </Fragment>
    )
  }
}

export default Recipes
