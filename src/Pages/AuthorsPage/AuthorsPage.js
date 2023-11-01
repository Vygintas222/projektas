import React, { useEffect, useState } from 'react'
import { API_URL } from '../../config'
import AuthorsList from '../../Components/AuthorList/AuthorsList'

const AuthorsPage = () => {
    
    const [authors , setAuthors] = useState([])


    useEffect(()=>{

        async function fetchAuthors(){
            const res = await fetch(`${API_URL}/authors?_embed=books`)
            const authorsData = await res.json()
            setAuthors(authorsData)
        }

        fetchAuthors()
    },[])




  return (
    <AuthorsList authors={authors}/>
  )
}

export default AuthorsPage