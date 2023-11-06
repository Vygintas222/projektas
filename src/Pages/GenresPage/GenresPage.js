import React, { useState, useEffect } from 'react'

import { API_URL } from '../../config'
import BookFilter from './BookFilter'
import Container from '../../Components/Container/Container'

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
    <Container>

    <h1>Genres</h1>
    <BookFilter books={books} genres={genres} />
    </Container>
  
  )
}

export default GenresPage
