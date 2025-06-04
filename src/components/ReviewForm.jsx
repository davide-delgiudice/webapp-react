import React from 'react'
import axios from 'axios'

import { useState } from 'react'

const ReviewForm = () => {
    // valori iniziali della form
    const initialData = {name: "", text: "", vote: "" };

    const [formData, setFormData] = useState(initialData);

    // funzione che cambia i valori dei campi input

  return (
    <div className='card'>
        <div className='card-header'>
            <h2>Aggiungi la tua recensione</h2>
        </div>
        <div className='card-body'>
            <form>
                <div className="form-group">
                    <label htmlFor="" className="control-label">Name</label>
                    <input type="text" className="form-control" name="name" placeholder='Inserisci il tuo nome' required value={formData.name}/>
                    <label htmlFor="" className="control-label">Voto</label>
                    <input min="0" max="5" type="number" className="form-control" name="vote" placeholder='Inserisci il voto' required value={formData.vote}/>
                    <div className="form-group">
                        <label htmlFor="" className="control-label">Testo</label>
                        <textarea name="text" id="text" className='form-comtrol' value={formData.text}></textarea>
                    </div>
                </div>
            </form>
        </div>
    </div>
  )
}

export default ReviewForm