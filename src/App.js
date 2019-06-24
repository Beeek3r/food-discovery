import React from 'react'
import Navbar from './components/layout/Navbar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css'
import Home from './components/pages/Home'
import GlobalState from './context/GlobalState'
import SearchRecipes from './components/pages/SearchRecipes'
import Meal from './components/pages/Meal'
import NutritionEstimator from './components/pages/NutritionEstimator'
import NutritionBasics from './components/pages/NutritionBasics'

function App() {
  return (
    <GlobalState>
      <Router>
        <div className="app">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/searchrecipes" component={SearchRecipes} />
            <Route exact path="/searchfoods/:foodID" component={Meal} />
            <Route exact path="/nutritionestimator" component={NutritionEstimator} />
            <Route exact path="/nutritionbasics" component={NutritionBasics} />
            {/* <Route exact path="/searchrecipes/:recipeID" component={Meal} /> */}
          </Switch>
        </div>
      </Router>
    </GlobalState>
  )
}

export default App
