import React from 'react'

import { Link } from 'react-router-dom'

const MovieCard = ({ movie }) => {
    const { id, image, title, director, genre, release_year } = movie;

    return (
        <div className="col-12 col-md-6 col-lg-4">
            <div className="card">
                <div className="card-image-top">
                    <img src={image} className='img-fluid' alt="img" />
                </div>
                <div className='card-body'>
                    <h3 className='text-primary'>{title}</h3>
                    <h4>
                        <em>{director}</em>
                    </h4>
                    <p>{genre}</p>
                    <p>{release_year}</p>
                    <Link className='btn btn-primary' to={`/movies/${id}`}>Dettaglio Film</Link>
                </div>
            </div>
        </div>
    )
}

export default MovieCard