import React from 'react'
import AuthorItem from '../AuthorItem/AuthorItem'
import  styles from'./AuthorList.module.scss'
import Container from '../Container/Container'
const AuthorsList = ({authors}) => {


let authorElement = <p>no Authors...</p>

  if (authors.length > 0) {
   authorElement = (
      <ul className={styles.authorList}>
         {authors.map((author)=><AuthorItem key={author.id} data={author}/>)}
      </ul>
    )
  }
  return (
    <Container>

      <h2>Authors</h2>
    <div className={styles.authorsWrapper}>
        
            {authorElement}
       
    </div>
    </Container>
  )
}

export default AuthorsList