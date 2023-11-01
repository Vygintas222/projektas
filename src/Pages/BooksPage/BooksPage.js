import React, { useEffect, useState } from 'react'
import { API_URL } from '../../config'
import BookList from '../../Components/BooksList/BookList'

const BooksPage = () => {

  const [books, setBooks]= useState([])

  useEffect(()=>{

    async function fetchBook() {
       const res = await fetch(`${API_URL}/books?_embed=photos`)
       const authorBooks = await res.json()
       setBooks(authorBooks)
       
  
    } 
    fetchBook()
   },[])

   

  return (
   <BookList books={books}/>
  )
}

export default BooksPage