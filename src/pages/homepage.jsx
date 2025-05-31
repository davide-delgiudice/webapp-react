import React from 'react'

const homepage = () => {
  return (
    <>
        <h1 className='text-primary'>Bool Books</h1>
        <h2>
            <i>The nerdest book community</i>
        </h2>
        <div className='row'>
            <div className="col-12 col-md-6 col-lg-4">
              <div className="card">
                <div className="card-image-top">
                  <img src="https://picsum.photos/200/300" alt="img" />
                </div>
              </div>
            </div>
        </div>
    </>
  )
}

export default homepage