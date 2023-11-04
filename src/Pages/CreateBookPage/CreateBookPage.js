import axios from 'axios'
import React, { useState } from 'react'
import { API_URL } from '../../config'
import { useNavigate, useParams } from 'react-router-dom'

const CreateBookPage = () => {

const [title ,setTile] = useState('')
const [body ,setBody]= useState('')
const [photos,setPhotos]= useState('')
const [photoTitle, setPhotoTitle]= useState('')
const {id} = useParams()

const navigate= useNavigate()

const titleHandler = event =>setTile(event.target.value)
const bodyHandler = event =>setBody(event.target.value)
const photoHandler = event =>setPhotos(event.target.value)
const coverTitleHandler = event => setPhotoTitle(event.target.value)



const handleAddItem = async (event) =>{
event.preventDefault()


const newBook ={
    authorId:id,
    title,
    body
}


const bookResponse = await axios.post(`${API_URL}/books`, newBook)
const newPhoto ={
    bookId:Number(bookResponse.data.id),
    url:photos,
    title:photoTitle
}



     await axios.post(`${API_URL}/photos`, newPhoto)

    navigate(`/authors/${id}`)
}


  return (
  <fieldset>

        <legend>Add new book</legend>
    <form onSubmit={handleAddItem}>
    <div className='form-control'>
      <label htmlFor='title'>Book title</label>
      <input
        type='text'
        name='title'
        id='title'
        onChange={titleHandler}
        ></input>
    </div>
    <div className='form-control'>
      <label htmlFor='body'>Book synopsis</label>
      <textarea
        name='body'
        id='body'
        onChange={bodyHandler}
        ></textarea>
    </div>
    <div className='form-control'>
      <label htmlFor='cover'>Book cover</label>
      <input
        type='text'
        name='cover'
        id='cover'
        onChange={photoHandler}
        ></input>
    </div>
    <div>
    <label htmlFor='cover-title'>Cover title</label>
    <input
    type='text'
    name='cover-title'
    id='cover-title'
    onChange={coverTitleHandler} 
    >
    </input>

    </div>
    <button type='submit'>Add</button>
 </form>
        </fieldset>

  )
}

export default CreateBookPage