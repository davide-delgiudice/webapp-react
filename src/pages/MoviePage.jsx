import React from 'react'
import ReviewCard from '../components/ReviewCard'
import axios from 'axios'
import StarRating from '../components/StarRating'

import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const MoviePage = () => {
  const { id } = useParams();

  const [movie, setMovie] = useState(null);

  const fetchMovies = () => {
    axios.get(`http://127.0.0.1:3000/movie/${id}`).then((resp) => {
      console.log("Dati film ricevuti:", resp.data);
      setMovie(resp.data);
    })
    .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  if (!movie) {
    return <p>Caricamento in corso...</p>;
  }

  return (
    <>
      <div className='row'>
          <div className="col-12 col-md-6 col-lg-4">
              <img src={movie.image} className='img-fluid' alt="img" />
          </div>
          <div className="col-12 col-md-6 col-lg-4">
              <h1>{movie.title}</h1>
              <h3 className='text-primary'>Titolo</h3>
              <h4>
                <em>{movie.director}</em>
              </h4>
              <p>{movie.genre}</p>
              <p>{movie.release_year}</p>
              <p>{movie.abstract}</p>
              <p className='fst-italic'>Tutte le valutazioni: {renderStars(movie.average_vote)}</p>
          </div>
      </div>
      <div className="row">
        <div className='col-12'>
          <div className="d-flex justify-content-between">
            <h3>Recensioni Film</h3>
          </div>
        </div>
        {movie.reviews.map((review) => (
          <div className="row gy-2" key={`review-${review.id}`}>
            <ReviewCard review={review} />
          </div>
        ))}
      </div>
    </>
  )
}

export default MoviePage