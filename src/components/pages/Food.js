import React, { Fragment, useContext, useState } from 'react'
import GlobalContext from '../../context/globalContext'

// Template
const Food = () => {
  // Using context API
  const globalContext = useContext(GlobalContext)
  const {} = globalContext

  return (
    <Fragment>
      <div className="container mt-5">
        <div className="row">
          <div className="col-12">
            <h1 className="text-center">Black Butter Chicken</h1>
          </div>
        </div>
        <hr />

        <div className="row " style={{ marginTop: '20px' }}>
          <div className="col-lg-4 mt-5 text-center">
            <img src="https://www.edamam.com/web-img/e42/e42f9119813e890af34c259785ae1cfb.jpg" style={{ borderRadius: '150px' }} />
          </div>
          <div className="col-lg-8 mt-5">
            {/* New Row */}
            <div className="row m-2">
              <div className="col-12 p-3" style={{ border: '1px solid #D3D3D3', borderRadius: '10px' }}>
                <h3 className="text-center mb-3">General</h3>
                <ul className="list-group text-center">
                  <li className="list-group-item" style={{ border: 'none' }}>
                    <i class="far fa-clock mr-2" />
                    30 Minutes
                  </li>
                  <li className="list-group-item" style={{ border: 'none' }}>
                    <i class="fas fa-utensils mr-2" />2 Servings
                  </li>
                  <li className="list-group-item" style={{ border: 'none' }}>
                    <i class="fas fa-weight mr-2" />
                    200 Calories
                  </li>
                </ul>
              </div>
            </div>

            {/* New Row */}
            <div className="row m-2 mt-4">
              <div className="col-12 p-3" style={{ border: '1px solid #D3D3D3', borderRadius: '10px' }}>
                <h3 className="text-center mb-3">Nutrition</h3>

                <table class="table table-sm text-center table-striped mt-4 table-hover" style={{ borderRadius: '1px' }}>
                  <thead className="thead-dark">
                    <tr>
                      <th scope="col">Calories</th>
                      <th scope="col"> Carbohydrates</th>
                      <th scope="col">Proteins</th>
                      <th scope="col"> Fats</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>50g</td>
                      <td>50g</td>
                      <td>50%</td>
                      <td>50g</td>
                    </tr>
                  </tbody>
                </table>

                <table class="table table-sm text-center table-striped mt-4 table-hover">
                  <thead className="thead-dark">
                    <tr>
                      <th scope="col">Saturated Fats</th>
                      <th scope="col">Trans Fats</th>
                      <th scope="col">Sodium</th>
                      <th scope="col">Sugar</th>
                      <th scope="col">Fiber</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>50g</td>
                      <td>50g</td>
                      <td>50%</td>
                      <td>50g</td>
                      <td>60%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        {/* New Big Row */}
        <div className="row p-4 ">
          <div className="col-12 p-3" style={{ border: '1px solid #D3D3D3', borderRadius: '10px' }}>
            <h3 className="text-center mb-3">Cooking</h3>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Food
