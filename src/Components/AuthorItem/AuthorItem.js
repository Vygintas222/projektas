import React from 'react'
import { Link } from 'react-router-dom'
import './AuthorItem.css'
const AuthorItem = ({data}) => {
    const {name,id,books} =data
    
    const booksWritten = books.length

  return (
   
    <li className='author-item'><Link className='link' to={`/authors/${id}`}>{name}</Link><span>Books Written : {booksWritten}</span></li>
    
    
  )
}

export default AuthorItem