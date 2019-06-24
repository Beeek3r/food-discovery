import React, { Fragment } from 'react'
import HomeCard from '../layout/HomeCard'

// Template
const Home = () => {
  return (
    <Fragment>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-12">
            <h1 className="text-center">Welcome to Food Discovery</h1>
          </div>
        </div>

        <hr />

        <div className="row p-4 p-lg-0 mt-5">
          <div className="col-lg-4 p-5 p-lg-4 " style={{ justifyContent: 'center' }}>
            <HomeCard card={card1} />
          </div>
          <div className="col-lg-4 p-5 p-lg-4">
            <HomeCard className="m-auto" card={card2} />
          </div>
          <div className="col-lg-4 p-5 p-lg-4">
            <HomeCard className="m-auto" card={card3} />
          </div>
        </div>
      </div>
    </Fragment>
  )
}

// Card Props
const card1 = {
  title: 'Search new recipes',
  description: 'Disover new recipes to cook for your friends and family',
  image: './foods.jpg',
  url: '/searchrecipes'
}

const card2 = {
  title: 'Nutrition Estimator',
  description: 'Esimates the nutrition for your own custom recipe',
  image: './nutrition.jpg',
  url: '/nutritionestimator'
}

const card3 = {
  title: 'Food Wiki',
  description: 'Disover new recipes to cook for your friends and family',
  image: './wiki.jpg',
  url: '/nutritionestimator'
}

export default Home
