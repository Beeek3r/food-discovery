import React, { Fragment, useContext, useState } from 'react'
import Recipes from '../layout/Recipes'
import GlobalContext from '../../context/globalContext'

// Template
const SearchRecipes = () => {
  // Using context API
  const globalContext = useContext(GlobalContext)
  const { searchRecipes, clearRecipes } = globalContext

  // State
  const [values, setValues] = useState({
    recipeName: '',
    dietType: 'no-value',
    ingredientLimit: 'no-value',
    calorieLimit: 'no-value',
    cookingTime: 'no-value'
  })

  // Handle input changes
  const handleChange = event => {
    const { name, value } = event.target
    setValues({ ...values, [name]: value })
    // NOTE: setValues({[name]: value}) doesn't work because you need to use the spread operator to yeet out the rest
  }

  const handleSubmit = event => {
    event.preventDefault()
    if (values.recipeName === '') {
      console.log('bad', values.recipeName)
    } else {
      searchRecipes(values)
    }
  }

  return (
    <Fragment>
      <div className="container mt-5">
        {/* Start of Row (Header) */}
        <div className="row">
          <div className="col-12">
            <h1 className="text-center">Search Recipes</h1>
          </div>
        </div>
        <hr />
        {/* End of Row (Header) */}

        {/* Start of Row */}
        <div className="row" style={{ marginTop: '20px' }}>
          {/* SStart of Column (Search) */}
          <div className="col-lg-5 m-5 m-sm-0 mt-sm-5">
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <input type="text" className="form-control" name="recipeName" placeholder="Recipe Name" onChange={handleChange} />
              </div>
              <div className="form-row mt-2">
                <select defaultValue="no-value" onChange={handleChange} name="dietType" className="form-control" id="inputGroupSelect01">
                  <option value="no-value">Diet</option>
                  <option value="balanced">Balanced</option>
                  <option value="high-protein">High Protein</option>
                  <option value="high-fiber">High Fiber</option>
                  <option value="low-fat">Low Fat</option>
                  <option value="low-carb">Low Carb</option>
                  <option value="low-sodium">Low Sodium</option>
                </select>
              </div>
              <div className="form-row mt-2">
                <select defaultValue="no-value" name="ingredientLimit" onChange={handleChange} className="form-control" id="inputGroupSelect01">
                  <option value="no-value">Ingredient Limit</option>
                  <option value={5}>5</option>
                  <option value={10}>10</option>
                  <option value={20}>20</option>
                </select>
              </div>
              <div className="form-row mt-2">
                <select defaultValue="no-value" name="calorieLimit" onChange={handleChange} className="form-control" id="inputGroupSelect01">
                  <option value="no-value">Calorie Limit</option>
                  <option value={100}>100</option>
                  <option value={250}>250</option>
                  <option value={500}>500</option>
                  <option value={750}>750</option>
                  <option value={1000}>1000</option>
                </select>
              </div>
              <div className="form-row mt-2">
                <select defaultValue="no-value" name="cookingTime" onChange={handleChange} className="form-control" id="inputGroupSelect01">
                  <option value="no-value">Cooking Time</option>
                  <option value={15}>15 Mintues</option>
                  <option value={30}>30 Mintues</option>
                  <option value={60}>60 Mintues</option>
                </select>
              </div>
              <div className="form-row mt-2">
                <input className="btn btn-info w-100" type="submit" value="Search" />
              </div>
              <div className="form-row mt-2">
                <input className="btn btn-secondary w-100" type="button" onClick={clearRecipes} value="Clear" />
              </div>
            </form>
          </div>
          {/* End of Column (Search) */}

          <div className="col-lg-7 m-5 m-sm-0 mt-sm-5 ">
            <Recipes />
          </div>
        </div>
        {/* End of Row */}
      </div>
    </Fragment>
  )
}

export default SearchRecipes
