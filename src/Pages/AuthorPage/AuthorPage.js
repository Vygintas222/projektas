import React, { useEffect, useState } from 'react'
import { Link,  useParams } from 'react-router-dom'
import Container from '../../Components/Container/Container'
import { API_URL } from '../../config'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import axios from 'axios'
import AuthorBooksList from '../../Components/AuthorBooksList/AuthorBooksList'
import styles from './AuthorPage.module.scss'

const AuthorPage = () => {
    const { id } = useParams()
 
    const [books,setBooks]= useState([])
    const [authorDeleted, setAuthorDeleted]= useState(false)

    const navigate = useNavigate()

    
    useEffect(()=>{

     async function fetchData() {
        const res = await fetch(`${API_URL}/authors/${id}/books?_embed=photos&_embed=genres`)
        const Data = await res.json()
        setBooks(Data)
     
        
     } 
     fetchData()
    },[id])


    
  
   
 

  const deleteAuthorHandler = async() =>{
    await axios.delete(`${API_URL}/authors/${id}`)
      
    
    setAuthorDeleted(true)
     toast(' Author deleted', {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,  
      theme: "dark",
       })
       navigate(`/authors`)
}




  return (
 
    <div className={styles.container}>

    {authorDeleted?(
      <></>
      ):
      (
        <div className={styles.PageWrapper}>

      <div className={styles.buttonsWrapper}>
        <div className={styles.buttonElements}>

        <button className={styles.buttonDesign} onClick={deleteAuthorHandler}>Delete author</button>
        <Link className={styles.buttonDesign} to={`/edit-author/${id}`}>Edit Author</Link>
        <Link className={styles.buttonDesign} to={`/add-new-book/${id}`}>add new book</Link>
        </div>
      </div>


      


        
         <AuthorBooksList books={books}/>

        
      </div>
    )}

       
    </div>
  
  )
}

export default AuthorPage