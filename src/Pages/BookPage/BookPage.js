import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { API_URL } from '../../config'
import './bookWrapper.css'
import axios from 'axios'
import { toast } from 'react-toastify'

const BookPage = () => {

    const {id} = useParams()
    const [book ,setBook] = useState([])
    const [photo,setPhoto] = useState([])
    const [element ,setElement]= useState([])
    const [genres,setGenres]= useState([])

    const navigate =useNavigate()


    useEffect(()=>{
        async function fetchData(){
            const res =await fetch(`${API_URL}/books/${id}?_embed=photos&_embed=volumes&_embed=genres`)
            const data = await res.json()
            setPhoto(data.photos)
            setElement(data.volumes)
            setBook(data)
            setGenres(data.genres)
            // console.log(data)
        }
        fetchData()
    },[id])
  
    const volumesElement = element.map(volume =>(
        <li key={volume.id}>{volume.title}</li>
    ))

    const imageElement = photo.map(image =>(
        <img className='image' key={image.id} src={image.url} alt=''></img>
        
    ))

    const genresElement = genres.map(genre => (
        <p key={genre.id}>{genre.name}</p>
    ) ) 
        
   
    const deleteBookHandler = () =>{

        axios.delete(`${API_URL}/books/${id}`)
        setBook(prevState =>prevState.filter(book=>book.id !==id))

        toast.error('Book removed')
        navigate(`/authors/${book.authorId}`)
      }


  
  return (
    
   <div className='book-wrapper'>
    <Link to={`/edit-book/${book.id}`}>Edit Book</Link>
  
    <button onClick={deleteBookHandler}>Delete book</button>

    <h2>{book.title}</h2>
    
    {imageElement}
    <div className='genres'>
    <span>Genres:</span>
    {genresElement}
    </div>
    <p>{book.body}</p>
    <h2>Volumes</h2>
    <ul>
        {volumesElement}
    </ul>

   </div>

  )
}

export default BookPage