import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { API_URL } from '../../config'
import BookFilter from './BookFilter'

const GenresPage = () => {
 
   
    const [books, setBooks] = useState([])
    const [genres, setGenres] = useState([])
    useEffect(() => {
       const fetchBooks =  async() =>{

        const res = await fetch(`${API_URL}/books?_embed=photos`)
        const data = await res.json()
         setBooks(data)
        }
        fetchBooks()
        const fetchGenres = async()=>{
          const res = await fetch(`${API_URL}/genres`)
          const data = await res.json()
          setGenres(data)
        }
        fetchGenres()
      }, [])

  return (
    <div>
    <h1>Genres</h1>
    <BookFilter books={books} genres={genres} />
  </div>
  )
}

export default GenresPage
