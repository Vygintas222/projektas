import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { API_URL } from '../../config'
import { useParams } from 'react-router-dom'

const AddGenreForm = () => {

    const [books,setBooks]= useState([])
    const [bookID ,setBookId]= useState('')
    const [name ,setGenres]= useState([])
    const { id } = useParams()


    
    useEffect(()=>{

        async function fetchData() {
           const res = await fetch(`${API_URL}/authors/${id}/books`)
           const Data = await res.json()
           setBooks(Data)
        } 
        fetchData()
       },[id])





       const textareHandler = (event) =>{
            setGenres(event.target.value)
           
       }

       const getBookId = (event)=>{
            setBookId(event.target.value)
            console.log(event.target.value)
           
       }

    const addCoverHandler = async event =>{
        event.preventDefault()

  
        const newGenres={
            bookId:Number(bookID),
            name
        }
      
      
        const res = await axios.post(`${API_URL}/genres`, newGenres)
      
      
      }

      const BookOption = books.map(option =>(
        <option key={option.id} value={option.id}>{option.title}</option>
      ))

      
  return (
    <fieldset>
        <legend>Add genre</legend>
        <form onSubmit={addCoverHandler}>
            <div className='form-control'>
                <label>Book Title</label>
                <select onChange={getBookId}>
                    <option value={''}>Choose book</option>
                    {BookOption}
                </select>
            </div>
            <div className='form-control'>
                <label htmlFor='genre'>Genres</label>
                <textarea 
                name='genre' 
                id='genre'
                onChange={textareHandler}
                >
                </textarea>

            </div>
            <button type='submit'>Add</button>
        </form>
    </fieldset>
  )
}

export default AddGenreForm