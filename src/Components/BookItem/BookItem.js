import React from 'react'
import styles from'./BookItem.module.scss'
import { Link } from 'react-router-dom'
const BookItem = ({data}) => {


    const {title,body,photos,id,genres} = data
    


   
    const photoElement = photos.map(photo =>(
      <img key={photo.id} className={styles.IMG} src={photo.url} alt=''></img>
    ))
  return (
   
        <Link 
        to={`/books/${id}`}
        className={styles.bookWrapper}
        >
        <div className={styles.book}>

        <h2 className={styles.bookTitle}>{title}</h2>
        {photoElement}
        <p>{body}</p>
        <ul className={styles.genresList}>
        {genres.map(genre =>(
          <li key={genre.id}>{genre.name}</li>
          ))}
          </ul>
          </div>
     
        
        </Link>
 
  )
}

export default BookItem