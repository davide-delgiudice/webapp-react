import React from 'react'
import axios from 'axios'

import { useState } from 'react'

const ReviewForm = () => {
    // valori iniziali della form
    const initialData = {name: "", text: "", vote: "" };

    const [formData, setFormData] = useState(initialData);

    // funzione che cambia i valori dei campi input
    const setFieldValue = (e) => {
        const { value, name } = e.target;

        setFormData({ ...formData, [name]: value });
    }

  return (
    <div className='card'>
        <div className='card-header'>
            <h2>Aggiungi la tua recensione</h2>
        </div>
        <div className='card-body'>
            <form>
                <div className="form-group">
                    <label htmlFor="" className="control-label">Name</label>
                    <input type="text" className="form-control" name="name" placeholder='Inserisci il tuo nome' value={formData.name} onChange={setFieldValue} required />
                    <label htmlFor="" className="control-label">Voto</label>
                    <input min="0" max="5" type="number" className="form-control" name="vote" placeholder='Inserisci il voto' value={formData.vote} onChange={setFieldValue} required />
                    <div className="form-group">
                        <label htmlFor="" className="control-label">Testo</label>
                        <textarea name="text" id="text" className='form-comtrol' value={formData.text} onChange={setFieldValue}></textarea>
                    </div>
                </div>
                <div className="form-group">
                    <button className="btn-btn-main" type='submit'>Invia Recensione</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default ReviewForm