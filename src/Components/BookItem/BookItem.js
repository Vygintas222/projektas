import React from 'react'
import './BookItem.css'
import { Link } from 'react-router-dom'
const BookItem = ({data,deleteButton}) => {


    const {title,body,photos,id} = data
    const randomIndex = Math.floor(Math.random() * photos.length)
    const randomImage = photos[randomIndex]

    const Url = randomImage.url
   
  return (
    <div>
        <Link 
        to={`/books/${id}`}
        className='book-link'
        >
        <h2>{title}</h2>
        <div className='book-wrapper'>
        <img className='image' src={Url} alt=''></img>
        <p>{body}</p>
        </div>
        </Link>
    </div>
  )
}

export default BookItem