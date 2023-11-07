import React from 'react'
import AuthorItem from '../AuthorItem/AuthorItem'
import './AuthorList.css'
import Container from '../Container/Container'
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
    <Container>

      <h2>Authors</h2>
    <div className='authors-wrapper'>
        
            {authorElement}
       
    </div>
    </Container>
  )
}

export default AuthorsList