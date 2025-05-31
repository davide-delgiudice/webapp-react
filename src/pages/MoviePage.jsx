import React from 'react'

const BookPage = () => {
  return (
    <div className='row'>
        <div className="col-12 col-md-6 col-lg-4">
            <img src="https://picsum.photos/500/300" className='img-fluid' alt="img" />
        </div>
        <div className="col-12 col-md-6 col-lg-4">
            <h1>Titolo</h1>
            <h3 className='text-primary'>Titolo</h3>
            <h4>
              <em>Regista</em>
            </h4>
            <p>Genre</p>
            <p>Anno di uscita</p>
            <p>Sinossi</p>
        </div>
    </div>
  )
}

export default BookPage