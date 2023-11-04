import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { API_URL } from '../../config'
import axios from 'axios'
import { toast } from 'react-toastify'

const AddNewgenrePage = () => {

const [book, setBook]= useState([])

const [newGenreName ,setNewGenreName]= useState('')

    const {id} = useParams()

    useEffect(()=>{
        const fetchBook = async ()=>{
            const res = await fetch(`${API_URL}/books/${id}?_embed=genres`)
            const bookData = await res.json()
            setBook(bookData)
        }


        fetchBook()
    },[id])

    
const newGenreNameHandler = (event) => setNewGenreName(event.target.value)

const addGenreHandler = async ()=>{

    const newGenre ={
        bookId:Number(id),
        name:newGenreName
    }



    const response = await axios.post(`${API_URL}/genres`, newGenre)
    if (response.statusText === 'Created') {
    
        toast.success(`Genre "${newGenreName}" added successfully`)
        const updatedBookResponse = await fetch(`${API_URL}/books/${id}?_embed=genres`)
        const updatedBookData = await updatedBookResponse.json()
         setBook(updatedBookData)
        setNewGenreName('')
      } else {
        console.error('Failed to create the genre')
      }
}


  return (
    <div>
        <h2>{book.title}</h2>
        <ul>
        {book.genres &&
         book.genres.map(genre =>(
            <li key={genre.id}>{genre.name}</li>
         ))
        }
        </ul>
        <div>
        <input
          type="text"
          value={newGenreName}
          onChange={newGenreNameHandler}
          placeholder="Enter a new genre name"
        />
        <button onClick={addGenreHandler}>Add Genre</button>
      </div>

    </div>
  )
}

export default AddNewgenrePage