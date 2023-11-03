import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { API_URL } from '../../config'
import BookFilter from './BookFilter'

const GenresPage = () => {
 
   
    const [books, setBooks] = useState([])
    const [genres, setGenres] = useState([])
    useEffect(() => {
       
        fetch(`${API_URL}/books?_embed=photos`)
          .then((response) => response.json())
          .then((data) => setBooks(data))
   
        
        fetch(`${API_URL}/genres`)
          .then((response) => response.json())
          .then((data) => setGenres(data))
      }, [])

  return (
    <div className="App">
    <h1>Genres</h1>
    <BookFilter books={books} genres={genres} />
  </div>
  )
}

export default GenresPage
