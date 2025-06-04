import React from 'react'
import axios from 'axios'

import { useState } from 'react'

const ReviewForm = ({ movie_id, reloadReviews }) => {
    // valori iniziali della form
    const initialData = {name: "", text: "", vote: "" };

    const [formData, setFormData] = useState(initialData);

    // funzione che cambia i valori dei campi input
    const setFieldValue = (e) => {
        const { value, name } = e.target;

        setFormData({ ...formData, [name]: value });
    }

    // metodo per salvare la recensione
    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post(`http://127.0.0.1:3000/movie/${movie_id}/reviews`, formData, 
            {headers: {"Content-Type": "application/json"},
        }).then(() => {
            setFormData(initialData);
            reloadReviews();
        });
    };

  return (
    <div className='card my-4'>
        <div className='card-header'>
            <h2>Aggiungi la tua recensione</h2>
        </div>
        <div className='card-body'>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="" className="control-label">Name</label>
                    <input type="text" className="form-control" name="name" placeholder='Inserisci il tuo nome' value={formData.name} onChange={setFieldValue} required />
                    <label htmlFor="" className="control-label">Voto</label>
                    <input min="0" max="5" type="number" className="form-control" name="vote" placeholder='Inserisci il voto' value={formData.vote} onChange={setFieldValue} required />
                    <div className="form-group">
                        <label htmlFor="" className="control-label">Testo</label>
                        <textarea name="text" id="text" className='form-control' value={formData.text} onChange={setFieldValue}></textarea>
                    </div>
                </div>
                <div className="form-group mt-3">
                    <button className="btn btn-primary" type='submit'>Invia Recensione</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default ReviewForm