import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

const HomeCard = props => {
  const { title, description, image, url } = props.card

  return (
    <Fragment>
      <div className="card">
        <img src={image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text" style={{ minHeight: '75px' }}>
            {description}
          </p>
          <Link className="btn btn-info" to={url}>
            Learn more
          </Link>
        </div>
      </div>
    </Fragment>
  )
}

export default HomeCard
