import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { API_URL } from '../../config'
import { toast } from 'react-toastify'

const EditAuthorPage = () => {
    const {id} = useParams()
    const navigate = useNavigate()
  
    const [name, setName]= useState('')

    useEffect(()=>{

        const fetchData =async()=>{
            const res = await fetch(`${API_URL}/authors/${id}`)
            const data = await res.json()
            setName(data.name)

        }

        fetchData()

    },[id])
    
    const nameHandler = event =>setName(event.target.value)
    const editedAuthorHandler = (event)=>{
        event.preventDefault()

        const editedAuthor = {
            id:id,
            name
        }

        fetch(API_URL + '/authors/' + id, {
            method: 'PUT',
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify(editedAuthor)
          })
            .then(res => res.json())
            .then(data => {
            
            })
            navigate('/authors/' + id)
            toast.success('Author Edited')
    }

  return (
    <fieldset>
        <legend>Edit author</legend>
        <form onSubmit={editedAuthorHandler}>
            <div className='form-control'>
                <label htmlFor='name'>Name</label>
                <input 
                type='text' 
                name='name' 
                value={name} 
                onChange={nameHandler}
                >
                </input>
                <button type='submit'>Edit</button>
            </div>


        </form>
    </fieldset>
  )
}

export default EditAuthorPage