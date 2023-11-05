import axios from 'axios'
import React, { useState } from 'react'
import { API_URL } from '../../config'
import { toast } from 'react-toastify'
import { Link } from 'react-router-dom'
import styles from './AuthorBookItem.module.scss'
const AuthorBookItem = ({data}) => {
  
const {title,body,photos,id}= data
const [genres,setGenres]= useState(data.genres)



const deleteGenreHandler = async(id,name)=>{

    await axios.delete(`${API_URL}/genres/${id}`)
    toast.error(`Genre ${name} was deleted`)
    setGenres((prevState) => prevState.filter((genre) => genre.id !== id))
}
  return (
    <div className={styles.bookItem}>
      <Link className={styles.link} to={`/books/${id}`} >
        <h2 className={styles.h2}>{title}</h2>
        {photos && photos.length >0 &&(
          <img className='image' src={photos[0].url} alt={photos[0].url}></img>   
          )}
          </Link>
      
        <ul className={styles.genres}>
            {genres.map(genre =>(
                <li className={styles.genre} key={genre.id}>{genre.name}  <button className={styles.buttonDesign} onClick={() => deleteGenreHandler(genre.id,genre.name)}>x</button></li>
            ))}
        </ul>
        <Link className={styles.buttonDesign} to={`/add-new-genre/${id}`}> add genre</Link>
        <p>{body}</p>
    </div>
  )
}

export default AuthorBookItem