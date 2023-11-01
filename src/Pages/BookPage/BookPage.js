import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { API_URL } from '../../config'
import './bookWrapper.css'

const BookPage = () => {

    const {id} = useParams()
    const [book ,setBook] = useState([])
    const [photo,setPhoto] = useState([])
    // const [element ,setElement]= useState([])

    



    useEffect(()=>{
        async function fetchBook(){

            const res= await fetch(`${API_URL}/books/${id}?_embed=volumes`)
            const bookData = await res.json()
            setBook(bookData)
        }
        fetchBook()

        async function fetchPhotos(){
            const res =await fetch(`${API_URL}/books/${id}/photos`)
            const photoData = await res.json()
            setPhoto(photoData)
        }
        fetchPhotos()

     
        
    },[id])

   
   console.log(book)

    const imageElement = photo.map(image =>(
        <img className='image' key={image.id} src={image.url} alt=''></img>
        
    ))
 

  
  return (
   <div className='book-wrapper'>
    <h2>{book.title}</h2>
    {imageElement}
    <p>{book.body}</p>
    <h2>Volumes</h2>
  

   </div>
  )
}

export default BookPage