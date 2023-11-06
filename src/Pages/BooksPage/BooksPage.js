import React, { useEffect, useState } from 'react'
import { API_URL } from '../../config'
import BookList from '../../Components/BooksList/BookList'
import Container from '../../Components/Container/Container'
import styles from './BooksPage.module.scss'
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



  return (
    <Container>
  <div className={styles.pageName}>
  <h1>Books</h1>
  </div>
   <BookList books={books}/>
    </Container>
  )
}

export default BooksPage