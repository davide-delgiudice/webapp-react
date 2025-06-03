import React from 'react'

import { Link } from 'react-router-dom'
import { useState } from 'react'

const initialMovies = [
  {
    id: 1,
    title: "titolo 1",
    director: "regista 1",
    genre: "genere 1",
    release_year: "anno uscita 1",
    image: "https://picsum.photos/500/300"
  },
  {
    id: 2,
    title: "titolo 2",
    director: "regista 2",
    genre: "genere 2",
    release_year: "anno uscita 2",
    image: "https://picsum.photos/500/300"
  },
  {
    id: 3,
    title: "titolo 3",
    director: "regista 3",
    genre: "genere 3",
    release_year: "anno uscita 3",
    image: "https://picsum.photos/500/300"
  },
  {
    id: 4,
    title: "titolo 4",
    director: "regista 4",
    genre: "genere 4",
    release_year: "anno uscita 4",
    image: "https://picsum.photos/500/300"
  },
  {
    id: 5,
    title: "titolo 5",
    director: "regista 5",
    genre: "genere 5",
    release_year: "anno uscita 5",
    image: "https://picsum.photos/500/300"
  },
]

const homepage = () => {
    const [movies, setMovies] = useState(initialMovies);

  return (
    <>
      <h1 className='text-primary'>Bool Movies</h1>
      <h2>
        <i>The nerdest movie community</i>
      </h2>
      <div className='row gy-4'>
        {movies.map((movie) => {
          return(
          <div className="col-12 col-md-6 col-lg-4" key={`movie-${movie.id}`}>
            <div className="card">
              <div className="card-image-top">
                <img src={movie.image} className='img-fluid' alt="img" />
              </div>
              <div className='card-body'>
                <h3 className='text-primary'>{movie.title}</h3>
                <h4>
                  <em>{movie.director}</em>
                </h4>
                <p>{movie.genre}</p>
                <p>{movie.release_year}</p>
                <Link className='btn btn-primary' to={`/movies/${movie.id}`}>Dettaglio Film</Link>
              </div>
            </div>
          </div>
          )
        })}
      </div>
    </>
  )
}

export default homepage