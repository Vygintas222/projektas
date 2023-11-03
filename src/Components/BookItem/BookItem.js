import React from 'react'
import './BookItem.css'
import { Link } from 'react-router-dom'
const BookItem = ({data}) => {


    const {title,body,photos,id,genres} = data
    
console.log(data.genres)

   
    const photoElement = photos.map(photo =>(
      <img key={photo.id} className='image' src={photo.url} alt=''></img>
    ))
  return (
    <div className='book-item-wrapper'>
        <Link 
        to={`/books/${id}`}
        className='book-link'
        >
        <h2>{title}</h2>
        <div className='book-wrapper'>
        {photoElement}
        <p>{body}</p>
        {genres.map(genre =>(
          <p key={genre.id}>{genre.name}</p>
        ))}
        </div>
        
        </Link>
    </div>
  )
}

export default BookItem