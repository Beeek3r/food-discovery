import React, { Fragment, useContext, useState } from 'react'
import GlobalContext from '../../context/globalContext'

// Template
const NutritionEstimator = () => {
  // Using context API
  const globalContext = useContext(GlobalContext)
  const { foods, GetRecipeEstimate } = globalContext

  // State
  const [values, setValues] = useState({
    customRecipe: ''
  })

  // Handle input changes
  const handleChange = event => {
    const { name, value } = event.target
    setValues({ ...values, [name]: value })
    // NOTE: setValues({[name]: value}) doesn't work because you need to use the spread operator to yeet out the rest
  }

  const handleSubmit = event => {
    event.preventDefault()
    if (values.customRecipe === '') {
      console.log('bad', values.customRecipe)
    } else {
      GetRecipeEstimate(values.customRecipe)
    }
  }

  const calories = Math.round(
    foods.reduce((acc, curr) => {
      return acc + curr.nf_calories
    }, 0)
  )

  const totalFat = Math.round(
    foods.reduce((acc, curr) => {
      return acc + curr.nf_total_fat
    }, 0)
  )

  const satFat = Math.round(
    foods.reduce((acc, curr) => {
      return acc + curr.nf_saturated_fat
    }, 0)
  )

  const cholesterol = Math.round(
    foods.reduce((acc, curr) => {
      return acc + curr.nf_cholesterol
    }, 0)
  )

  const sodium = Math.round(
    foods.reduce((acc, curr) => {
      return acc + curr.nf_sodium
    }, 0)
  )

  const potassium = Math.round(
    foods.reduce((acc, curr) => {
      return acc + curr.nf_potassium
    }, 0)
  )

  const carbohydrate = Math.round(
    foods.reduce((acc, curr) => {
      return acc + curr.nf_total_carbohydrate
    }, 0)
  )

  const fiber = Math.round(
    foods.reduce((acc, curr) => {
      return acc + curr.nf_dietary_fiber
    }, 0)
  )

  const protein = Math.round(
    foods.reduce((acc, curr) => {
      return acc + curr.nf_protein
    }, 0)
  )
  const sugars = Math.round(
    foods.reduce((acc, curr) => {
      return acc + curr.nf_sugars
    }, 0)
  )

  return (
    <Fragment>
      <div className="container mt-5 p-2 p-md-0">
        {/* Start of Row (Header) */}
        <div className="row justify-content-md-center">
          <div className="col-12">
            <h1 className="text-center">Nutrition Estimator</h1>
          </div>
        </div>
        <hr />

        <div className="row mt-5 justify-content-md-center" style={{ marginTop: '20px' }}>
          <div className="col-8 m-auto">
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <input type="text" className="form-control" name="customRecipe" placeholder="Recipe Name" onChange={handleChange} />
              </div>
              <div className="form-row mt-2">
                <input className="btn btn-info mr-md-2 mb-2 mb-md-0 w-30" type="submit" value="Estimate Recipe Nutrition" />
                <input className="btn btn-secondary w-30" type="button" data-toggle="modal" data-target="#help" value="How does this work?" />
                {/* data-toggle="modal" data-target="#exampleModal" */}
                <div className="modal fade" id="help" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div className="modal-dialog" role="document">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">
                          How does this work?
                        </h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div className="modal-body">
                        <p>Get a detailed nutrient breakdown by entering the ingredients of your recipe (or indvidual food) along with the weight. Seperate each ingredient with a comma.</p>
                        <p>For example, "100g Chicken Breast, 150g Rice, 1 Apple".</p>
                        <p>
                          <small className="text-muted">NOTE: Other weight measurements such as oz, litres and cups are also supported but it is recommended to use grams for a more accurate nutrient breakdown.</small>
                        </p>
                      </div>
                      <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">
                          Close
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="form-row mt-2">{/* // <input className="btn btn-secondary w-100" type="button" onClick={clearRecipes} value="Clear" /> */}</div>
            </form>
          </div>
        </div>

        <div className="row mt-5 justify-content-center" style={{ marginTop: '20px' }}>
          <div className="col-8 col-md-6">
            <table className="table table-sm text-center mt-4 table-hover" style={{ borderRadius: '200px', border: '2px solid #000' }}>
              <thead className="thead-dark">
                <tr>
                  <th scope="col display-3" style={{ fontSize: '40px' }}>
                    Nutrition Facts
                  </th>
                </tr>
              </thead>
              <tbody className="" style={{ textAlign: 'left' }}>
                <tr className="text-left">
                  <td className=" pl-2">
                    <strong>Calories</strong> {`${calories}g`}
                  </td>
                </tr>

                <tr className="text-left">
                  <td className="pl-2">
                    <strong>Total Fat</strong> {`${totalFat}g`}
                  </td>
                </tr>
                <tr className="text-left">
                  <td className=" pl-4">Saturated Fat {`${satFat}g`}</td>
                </tr>
                <tr className="text-left">
                  <td className="pl-2">
                    <strong>Cholesterol</strong> {`${cholesterol}g`}
                  </td>
                </tr>
                <tr className="text-left">
                  <td className="pl-2">
                    <strong>Sodium</strong> {`${sodium}g`}
                  </td>
                </tr>
                <tr className="text-left">
                  <td className="pl-2">
                    <strong>Sugar</strong> {`${sugars}g`}
                  </td>
                </tr>
                <tr className="text-left">
                  <td className="pl-2">
                    <strong>Potassium</strong> {`${potassium}g`}
                  </td>
                </tr>
                <tr className="text-left">
                  <td className="pl-2">
                    <strong>Total Carbohydrates </strong> {`${carbohydrate}g`}
                  </td>
                </tr>
                <tr className="text-left">
                  <td className="pl-4">Dietary Fiber {`${fiber}g`} </td>
                </tr>
                <tr className="text-left">
                  <td className="pl-2">
                    <strong>Protein</strong> {`${protein}g`}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default NutritionEstimator
