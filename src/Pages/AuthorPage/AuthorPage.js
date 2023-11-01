import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Container from '../../Components/Container/Container'
import { API_URL } from '../../config'

const AuthorPage = () => {
    const { id } = useParams()
    const [author , setAuthor]= useState([])
    const [books,setBooks]= useState('')

    useEffect(()=>{

     async function fetchData() {
        const res = await fetch(`${API_URL}/authors/${id}`)
        const authorData = await res.json()
        setAuthor(authorData.name)
   
     } 
     fetchData()
    },[id])
    

    

    
  return (
   <Container>

        <h2>{author}</h2>
        <div className='books-wrapper'>
            <div className='book-item'>
                

            </div>

        </div>
   </Container>
  )
}

export default AuthorPage