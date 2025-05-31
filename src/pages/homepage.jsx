import React from 'react'

import { Link } from 'react-router-dom'

const homepage = () => {
  return (
    <>
        <h1 className='text-primary'>Bool Movies</h1>
        <h2>
            <i>The nerdest movie community</i>
        </h2>
        <div className='row gy-4'>
            <div className="col-12 col-md-6 col-lg-4">
              <div className="card">
                <div className="card-image-top">
                  <img src="https://picsum.photos/500/300" className='img-fluid' alt="img" />
                </div>
                <div className='card-body'>
                  <h3 className='text-primary'>Titolo</h3>
                  <h4>
                    <em>Regista</em>
                  </h4>
                  <p>Genre</p>
                  <p>Anno di uscita</p>
                  <Link className='btn btn-primary' to="/movies/1">Dettaglio Film</Link>
                </div>
              </div>
            </div>
        </div>
    </>
  )
}

export default homepage