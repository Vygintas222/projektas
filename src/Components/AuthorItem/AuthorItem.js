import React from 'react'
import { Link } from 'react-router-dom'
import './AuthorItem.css'
const AuthorItem = ({data}) => {
    const {name,id,books} =data
    
    const booksWritten = books.length

  return (
    <div>

    <li className='author-item'><Link className='link' to={`/authors/${id}`}>{name}</Link></li>
    <span>Books Written : {booksWritten}</span>
    </div>
  )
}

export default AuthorItem