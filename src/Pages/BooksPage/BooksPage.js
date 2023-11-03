import React, { useEffect, useState } from 'react'
import { API_URL } from '../../config'
import BookList from '../../Components/BooksList/BookList'
import Container from '../../Components/Container/Container'

const BooksPage = () => {

  const [books, setBooks]= useState([])
  
  useEffect(()=>{

    async function fetchBook() {
       const res = await fetch(`${API_URL}/books?_embed=photos&_embed=genres`)
       const authorBooks = await res.json()
       setBooks(authorBooks)

  
    } 
    fetchBook()
   },[])

console.log(books)

  return (
    <Container>
  
   <BookList books={books}/>
    </Container>
  )
}

export default BooksPage