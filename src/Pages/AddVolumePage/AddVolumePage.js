import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { API_URL } from '../../config'
import axios from 'axios'
import { toast } from 'react-toastify'
import Container from '../../Components/Container/Container'
import styles from "./AddVolumePage.module.scss"

const AddVolumePage = () => {

const [title, setTitle] = useState('')
const [book,setBook] = useState([])
const [volumes,setVolumes]= useState([])
const {id}= useParams()


const [titleError, setTitleError]= useState('')
const [invalidForm, setInvalidForm]= useState(false)
useEffect(()=>{
    const fetchData = async()=>{
        const res = await fetch(`${API_URL}/books/${id}?_embed=volumes`)
        const bookData= await res.json()
        setBook(bookData)
        
    }
    fetchData()

    const fetchVolumes = async()=>{
        const res = await fetch(`${API_URL}/volumes?bookId=${id}`)
        const volumesData = await res.json()
        setVolumes(volumesData)
    }
fetchVolumes()

},[id])

const titleHandler = event =>setTitle(event.target.value)

const addNewVolumeHandler = async ()=>{

    setTitleError('')

    let formIsValid = true

    if(!title){
        setTitleError('Title is required')
        formIsValid = false
    } else if (title.length < 5){
        setTitleError('Title must be atleast 5 letters long')
        formIsValid = false
    }
    if (!formIsValid){
        setInvalidForm(true)
        return
    }
    const newVolume = {
        bookId:Number(id),
        title

    }
    const res = await axios.post(`${API_URL}/volumes`, newVolume)
    
    if (res.statusText === 'Created') {
        setVolumes([...volumes, newVolume])
        toast.success(`Volume ${title} was added`)
      
      } else {
        console.error('Something went wrong.')
      }
  
      setTitle('')

}

  return (
    <Container>

    <div>
        <Link to={`/volumes`}>Back</Link>
       <h2>{book.title}</h2>
       <div className={`${styles.formControl} ${titleError && styles.invalid} `}>

        <label htmlFor='volume-name'>Add Volume</label>
        <input 
        type='text' 
        name='volume-name' 
        id='volume-name'
        value={title}
        onChange={titleHandler}
        placeholder='volume title'
        > 
        </input>
        {titleError && <span>{titleError}</span>}
        <button onClick={addNewVolumeHandler}>add</button>
        </div>
    <ul>

        {volumes && volumes.map(volume =>(
            <li key={volume.id}>{volume.title}</li>
            ))}
    </ul>
    </div>
            </Container>
  )
}

export default AddVolumePage