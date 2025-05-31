import React from 'react'

import { Link } from 'react-router-dom'

const NotFoundPage = () => {
  return (
    <div className='d-flex flex-column align-items-center justify-content-center'>
        <h2>Page not found</h2>
        <p className='mt-3'>La pagina che cerchi non esiste</p>
        <Link to="/" className='btn btn-primary'>Torna alla home</Link>
    </div>
  )
}

export default NotFoundPage