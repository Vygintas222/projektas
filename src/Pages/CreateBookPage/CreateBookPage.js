import axios from 'axios'
import React, { useState } from 'react'
import { API_URL } from '../../config'
import { useNavigate, useParams } from 'react-router-dom'
import styles from './CreateBookPage.module.scss'
import Container from '../../Components/Container/Container'

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

const [invalidForm,setInvalidForm]= useState(false)

const [titleError, setTitleError] = useState('')
const [synopsisError, setSynopsisError] = useState('')
const [coverError, setCoverError] = useState('')
const [coverTitleError,setCoverTitleError] = useState('')

const handleAddItem = async (event) =>{
event.preventDefault()






let formIsValid = true

if(!title){
  setTitleError('Title is required')
  formIsValid = false
} else if (title.length < 5){
  setTitleError('Title must be atleast 5 letters long')
  formIsValid = false
}else{
  setTitleError('')
}


if(body.length <10){
  setSynopsisError('Synopsis must be atleast 10 letters long')
  formIsValid = false
}else if (!body){
  setSynopsisError('Synopsis is required')
  formIsValid =false
}else{
  setSynopsisError('')
}

if(!photos){
  setCoverError('Cover is required')
  formIsValid = false
}else{
  setCoverError('')
}
if (!photoTitle){
  setCoverTitleError('Cover title is required')
  formIsValid = false
} else if (photoTitle.length < 5 ){
  setCoverTitleError('Cover title must be atleast 5 letters long')
  formIsValid = false
}else {
  setCoverTitleError('')
}



if (!formIsValid){
  setInvalidForm(true)
  return
}


const newBook ={
    authorId:Number(id),
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
    <Container>

  <fieldset>
    <form onSubmit={handleAddItem}>
    <div className={`${styles.formControl} ${titleError && styles.invalid} `}>
      <label htmlFor='title'>Book title</label>
      <input
        type='text'
        name='title'
        id='title'
        onChange={titleHandler}
        ></input>
         {titleError && <span className={styles.invalid}>{titleError}</span>}
    </div>
    <div className={`${styles.formControl} ${synopsisError && styles.invalid} `}>
      <label htmlFor='body'>Book synopsis</label>
      <textarea
        name='body'
        id='body'
        onChange={bodyHandler}
        maxLength={300}
        ></textarea>
        {synopsisError && <span className={styles.invalid}>{synopsisError}</span>}
    </div>
    <div className={`${styles.formControl} ${coverError && styles.invalid} `}>
      <label htmlFor='cover'>Book cover</label>
      <input
        type='text'
        name='cover'
        id='cover'
        onChange={photoHandler}
        ></input>
        {coverError && <span className={styles.spanInvalid}>{coverError}</span>}
    </div>
    <div className={`${styles.formControl} ${coverTitleError && styles.invalid} `}>
    <label htmlFor='cover-title'>Cover title</label>
    <input
    type='text'
    name='cover-title'
    id='cover-title'
    onChange={coverTitleHandler} 
    >
    </input>
    {coverTitleError && <span className={styles.invalid}>{coverTitleError}</span>}
    </div>
    <button className={styles.buttonDesign} type='submit'>Add</button>
 </form>
        </fieldset>

      </Container>
  )
}

export default CreateBookPage