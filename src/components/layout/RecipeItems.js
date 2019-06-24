import React, { useContext } from 'react'
import RecipeModal from './RecipeModal'
import GlobalContext from '../../context/globalContext'

const RecipeItems = props => {
  const { label, calories, image, totalTime, uri } = props.recipe
  const servings = props.recipe.yield

  // Using context API
  const globalContext = useContext(GlobalContext)
  const { getRecipe } = globalContext

  const servingCalories = Math.round(calories / servings)

  const handleModalInfo = event => {
    event.preventDefault(uri)
    getRecipe(props.recipe)
  }

  return (
    <div className="row p-4 p-sm-3 mb-3 justify-content-center" style={{ border: '1px solid #D3D3D3', borderRadius: '10px', alignItems: 'center' }}>
      <div className="col-md-3 p-5 p-md-0">
        <img className="img-fluid w-100" src={image} alt={`${label}`} style={{ borderRadius: '10px' }} />
      </div>
      <div className="col-md-9">
        <div className="row m-2 mt-4 m-md-2 justify-content-center">
          <h4 className="text-center">{label}</h4>
        </div>
        <div className="row m-2 mt-0 justify-content-center">
          <div className="col-md-4 p-2">
            <p className="text-center mb-0">
              <i className="fas fa-weight mr-2" />
              {servingCalories}
            </p>
          </div>
          <div className="col-md-4 p-2">
            <p className="text-center mb-0">
              <i className="fas fa-utensils mr-2" />
              {`${servings} Servings`}
            </p>
          </div>
          <div className="col-md-4 p-2">
            <p className="text-center mb-0">
              <i className="far fa-clock mr-2" />
              {totalTime === 0 ? 'N/A' : `${totalTime} Mins`}
            </p>
          </div>
        </div>
        <div className="row m-3 justify-content-center">
          <button className="btn btn-info btn-sm pl-4 pr-4" onClick={handleModalInfo} type="button" data-toggle="modal" data-target="#recipe-modal">
            Learn more
          </button>
          {}
          <RecipeModal />
        </div>
      </div>
    </div>
  )
}

export default RecipeItems
