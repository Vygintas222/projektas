import React from 'react'
import AuthorItem from '../AuthorItem/AuthorItem'
import './AuthorList.css'
const AuthorsList = ({authors}) => {


let authorElement = <p>no Authors...</p>

  if (authors.length > 0) {
   authorElement = (
      <ul>
         {authors.map((author)=><AuthorItem key={author.id} data={author}/>)}
      </ul>
    )
  }
  return (
    <div className='authors-wrapper'>
      <h2>Authors</h2>
        
            {authorElement}
       
    </div>
  )
}

export default AuthorsList