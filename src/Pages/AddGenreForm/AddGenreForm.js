import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { API_URL } from '../../config'
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify'

const AddGenreForm = ({genre}) => {

    const [books,setBooks]= useState([])
    const [bookID ,setBookId]= useState('')
    const [name ,setName]= useState('')
    const [genres,setGenres] = useState(genre.genres||[])
    const { id } = useParams()


    
    useEffect(()=>{

        async function fetchData() {
           const res = await fetch(`${API_URL}/authors/${id}/books`)
           const Data = await res.json()
           setBooks(Data)
        } 
        fetchData()
       },[id])



   
      

       const nameHandler = (event) =>{
            setName(event.target.value)
           
       }

       const getBookId = (event)=>{
            setBookId(event.target.value)
            console.log(event.target.value)
           
       }

    const addGenreHandler = async event =>{
        event.preventDefault()

      
        const newGenres={
            bookId:Number(bookID),
            name
        }
      
      
        const res = await axios.post(`${API_URL}/genres`, newGenres)
      
        if (res.statusText === 'Created') {
            setGenres((prevGenres) => [...prevGenres, genres])
            toast.success(`Genre ${name} was added`)
          } else {
            console.error('Something went wrong.')
          }
      
          setName('')
      }

      const BookOption = books.map(option =>(
        <option key={option.id} value={option.id}>{option.title}</option>
      ))

      
  return (
    <fieldset>
        <legend>Add genre</legend>
        <form onSubmit={addGenreHandler}>
            <div className='form-control'>
                <label>Book Title</label>
                <select onChange={getBookId}>
                    <option value={''}>Choose book</option>
                    {BookOption}
                </select>
            </div>
            <div className='form-control'>
                <label htmlFor='genre'>Genres</label>
                <input 
                type='text'
                name='genre' 
                id='genre'
                value={name}
                onChange={nameHandler}
                >
                </input>

            </div>
            <button type='submit'>Add</button>
        </form>
    </fieldset>
  )
}

export default AddGenreForm