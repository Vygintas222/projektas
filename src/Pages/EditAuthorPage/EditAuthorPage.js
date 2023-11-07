import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { API_URL } from '../../config'
import { toast } from 'react-toastify'
import styles from './EditAuthorPage.module.scss'
const EditAuthorPage = () => {
    const {id} = useParams()
    const navigate = useNavigate()
  
    const [name, setName]= useState('')

    const [nameError, setNameError]= useState('')

    const [formIsInvalid,setFormIsInvalid]= useState(false)
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




let formIsValid = true

      if(!name){
        setNameError('Invalid author name')
        formIsValid = false
      }else if (name.length < 5){
        setNameError('Name must be atleast 5 letters long')
        formIsValid= false
      }
      if(!formIsValid){
        setFormIsInvalid(true)
        return
      }





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
            
              if(formIsInvalid){

                navigate('/authors/')
                toast.success('Author Edited')
              }
            })
           
    }

  return (
    <fieldset className={styles.fieldset}>
        <legend>Edit author</legend>
        <form onSubmit={editedAuthorHandler}>
            <div  className={`${styles.formControl} ${nameError && styles.invalid} `}>
                <label htmlFor='name'>Name</label>
                <input 
                type='text' 
                name='name' 
                value={name} 
                onChange={nameHandler}
                >
                </input>
                {nameError && <span className={styles.spanInvalid}>{nameError}</span>}
                <button className={styles.buttonDesign} type='submit'>Edit</button>
            </div>


        </form>
    </fieldset>
  )
}

export default EditAuthorPage