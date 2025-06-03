import React from 'react'

const ReviewCard = ({ review }) => {
    const { text, vote, name } = review;

  return (
    <div className='col-12'>
        <div className="card p-2">
            <p>{text}</p>
            <p>{vote}</p>
            <p>{name}</p>
        </div>
    </div>
  )
}

export default ReviewCard