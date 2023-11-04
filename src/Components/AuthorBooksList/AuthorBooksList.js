import React from 'react'
import AuthorBookItem from '../AuthorBookItem/AuthorBookItem'

const AuthorBooksList = ({books}) => {
   
  return (
    <div>

    {books.map((book)=> <AuthorBookItem key={book.id} data={book}/>)}
    </div>
    
  )
}

export default AuthorBooksList