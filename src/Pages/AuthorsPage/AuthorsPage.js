import React, { useEffect, useState } from 'react'
import { API_URL } from '../../config'
import AuthorsList from '../../Components/AuthorList/AuthorsList'
import Container from '../../Components/Container/Container'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import styles from './AuthorsPage.module.scss'

const AuthorsPage = () => {
    
    const [authors , setAuthors] = useState([])
    
    const [name ,setName] = useState('')
    const navigate = useNavigate()
    useEffect(()=>{

        async function fetchAuthors(){
            const res = await fetch(`${API_URL}/authors?_embed=books`)
            const authorsData = await res.json()
            setAuthors(authorsData)
        }

        fetchAuthors()
    },[])
console.log(authors)

const nameHandler =(event)=>{
  setName(event.target.value)
}
const newAuthorHandler = async event=>{
  event.preventDefault()

  const newAuthor ={
    name
  }
  const res = await axios.post(`${API_URL}/authors`, newAuthor)
  

  if (res.statusText === 'Created') {
    navigate('/authors/' + res.data.id)
  } else {
    console.error('Something went wrong.')
  }
}
  return (
    <Container>
<fieldset>
<legend>Add new Author</legend>
    <form onSubmit={newAuthorHandler}>
      <div className={styles.formControl}> 
        <label htmlFor='name'>Author name</label>
        <input 
        typeof='text' 
        name='name' 
        id='name'
        onChange={nameHandler}
        >
        </input>
        <button type='submit'>Add</button>
      </div>

    </form>
</fieldset>
    <AuthorsList authors={authors}/>
    </Container>
  )
}

export default AuthorsPage