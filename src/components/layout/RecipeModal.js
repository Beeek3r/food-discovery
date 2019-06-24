import React, { useContext } from 'react'
import GlobalContext from '../../context/globalContext'
import Spinner from './Spinner'

const RecipeModal = () => {
  // Using context API
  const globalContext = useContext(GlobalContext)
  const { recipe, loadingModal } = globalContext
  const { label, ingredientLines, totalTime, url, totalNutrients, calories } = recipe

  if (loadingModal) {
    return (
      <div className="modal fade" id="recipe-modal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <Spinner />
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div className="modal fade" id="recipe-modal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-body">
              <div className="col-12 p-3 mb-4 mt-2" style={{ border: '1px solid #D3D3D3', borderRadius: '10px' }}>
                <h5 className="text-center mb-3">{label}</h5>
                <ul className="list-group text-center">
                  <li className="list-group-item" style={{ border: 'none' }}>
                    <i className="far fa-clock mr-2" />
                    {`${totalTime} Mintes`}
                  </li>
                  <li className="list-group-item" style={{ border: 'none' }}>
                    <i className="fas fa-utensils mr-2" />
                    {`${recipe.yield} Servings`}
                  </li>
                  <li className="list-group-item" style={{ border: 'none' }}>
                    <i className="fas fa-weight mr-2" />
                    {`${Math.round(calories)} Total Calories`}
                  </li>
                </ul>
              </div>
              <div className="col-12 p-3 mb-4" style={{ border: '1px solid #D3D3D3', borderRadius: '10px' }}>
                <h5 className="text-center mb-3">Nutrition</h5>

                <table className="table table-sm text-center table-striped mt-4 table-hover" style={{ borderRadius: '1px' }}>
                  <thead className="thead-dark">
                    <tr>
                      <th scope="col">Calories</th>
                      <th scope="col">Carbohydrates</th>
                      <th scope="col">Proteins</th>
                      <th scope="col">Fats</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{Math.round(totalNutrients.ENERC_KCAL.quantity)}g</td>
                      <td>{Math.round(totalNutrients.CHOCDF.quantity)}g</td>
                      <td>{Math.round(totalNutrients.PROCNT.quantity)}g</td>
                      <td>{Math.round(totalNutrients.FAT.quantity)}g</td>
                    </tr>
                  </tbody>
                </table>

                <table className="table table-sm text-center table-striped mt-4 table-hover">
                  <thead className="thead-dark">
                    <tr>
                      <th scope="col" style={{ valign: 'baseline' }}>
                        Saturated Fats
                      </th>
                      <th scope="col">Trans Fats</th>
                      <th scope="col">Sodium</th>
                      <th scope="col">Sugar</th>
                      {/* <th scope="col">Fiber</th> */}
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{totalNutrients.FASAT === undefined ? 'n/a' : `${Math.round(totalNutrients.FASAT.quantity)}g`}</td>
                      <td>{totalNutrients.FATRN === undefined ? 'n/a' : `${Math.round(totalNutrients.FATRN.quantity)}g`}</td>
                      <td>{totalNutrients.NA === undefined ? 'n/a' : `${Math.round(totalNutrients.NA.quantity)}g`}</td>
                      <td>{totalNutrients.SUGAR === undefined ? 'n/a' : `${Math.round(totalNutrients.SUGAR.quantity)}g`}</td>
                      {/* <td>{totalNutrients.FIBTG === undefined ? 'n/a' : `${Math.round(totalNutrients.FIBTG.quantity)}g`}</td> */}
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="col-12 p-3 mb-4" style={{ border: '1px solid #D3D3D3', borderRadius: '10px' }}>
                <h5 className="text-center mb-4">Ingredients</h5>
                <ul className="list-group list-group-flush">
                  {ingredientLines.map(x => (
                    <li className="list-group-item p-1">{x}</li>
                  ))}
                  <li className="list-group-item" />
                </ul>
              </div>

              <div className="col-12 p-3" style={{ border: '1px solid #D3D3D3', borderRadius: '10px' }}>
                <h5 className="text-center mb-4">Directions</h5>
                <p>Unfortunately, the Edamam API operates as a search engine for recipes. The full content itself is owned by the publisher and should be accessed there.</p>
              </div>
            </div>

            <div className="modal-footer" style={{ border: 'none' }}>
              {/* <button type="button" class="btn btn-info" data-dismiss="modal">
                Full Recipe
              </button> */}
              <a href={url} className="btn btn-info" role="button">
                Full Recipe
              </a>
              <button type="button" className="btn btn-secondary" data-dismiss="modal">
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default RecipeModal
