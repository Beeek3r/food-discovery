import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <Fragment>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={{ backgroundColor: '#D3D3D3' }}>
        <Link className="navbar-brand" to="/">
          <img src="./logo3.png" width="40" height="30" className="d-inline-block align-top mr-2" alt="" />
        </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav ">
            <li className="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
              <Link className="nav-link" to="/searchrecipes">
                Search Recipes
              </Link>
            </li>
            <li className="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
              <Link className="nav-link" to="/nutritionestimator">
                Nutrition Estimator
              </Link>
            </li>
            <li className="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
              <Link className="nav-link" to="/nutritionbasics">
                Nutrition Basics
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </Fragment>
  )
}

export default Navbar
