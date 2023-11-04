import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { API_URL } from '../../config'
import axios from 'axios'
import { toast } from 'react-toastify'

const AddVolumePage = () => {

const [title, setTitle] = useState('')
const [book,setBook] = useState([])
const [volumes,setVolumes]= useState([])
const {id}= useParams()

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
    <div>
       <h2>{book.title}</h2>
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
        <button onClick={addNewVolumeHandler}>add</button>
    <ul>

        {volumes && volumes.map(volume =>(
            <li key={volume.id}>{volume.title}</li>
        ))}
    </ul>
    </div>
  )
}

export default AddVolumePage