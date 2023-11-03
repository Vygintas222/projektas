
import React, { useEffect, useState } from 'react'
import { API_URL } from '../../config'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'


const EditBook = () => {

const [title,setTitle]= useState('')
const [body ,setBody]= useState('')
const [genres,setGenres]=useState('')

const [AuthorId,setAuthorId]= useState('')


const {id} = useParams()
const navigate = useNavigate()
useEffect(()=>{

    const fetchData = async () => {
        const res = await fetch(`${API_URL}/books/${id}`)
        const bookData = await res.json()

        setTitle(bookData.title)
        setBody(bookData.body)
        setGenres(bookData.genres)
        setAuthorId(bookData.authorId)
    }
    fetchData()
},[id])

    const titleHandler =event=> setTitle(event.target.value)
    const bodyHandler =event=> setBody(event.target.value)
    
  

    const EditBookHandler =(event)=>{



        const editedBook={
            authorId:Number(AuthorId),
            id:Number(id),
            title,
            body,
            genres

        }
    

        fetch(API_URL + '/books/' + id, {
            method: 'PUT',
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify(editedBook)
          })
            .then(res => res.json())
            .then(data => {
            
            })
                navigate('/books/' + id)
                toast.success('Book Edited')

    }



  return (
    <div>

  <fieldset>
    <legend>Edit book</legend>

    <form onSubmit={EditBookHandler}>
        <div className='form-control'>
            <label htmlFor='title'>Title</label>
            <input 
            type='text' 
            value={title}
            onChange={titleHandler}
            > 
            </input>
        </div>
        <div className='form-control'>
            <label htmlFor='body'>Synopsis</label>
            <textarea 
            name='body' 
            value={body}
            onChange={bodyHandler}
            >
            </textarea>
        </div>
        <button type='submit'>Edit</button>
    </form>
  </fieldset>

                </div>
  )
}

export default EditBook