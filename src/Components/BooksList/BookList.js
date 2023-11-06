import React from 'react'
import BookItem from '../BookItem/BookItem'
import styles from './BookList.module.scss'

const BookList = ({books}) => {

  // const deleteBookHandler = () =>{

  //   fetch(API_URL + '/books/' + books.id, {
  //     method: 'DELETE',
  //   })
  // }



  
   console.log(books.genres)
  let booksElement = <p>no books...</p>

  if(books.length >0){
    booksElement = (
      <>
        {books.map((book)=><BookItem key={book.id} data={book}  />)}
      </>
        
     
    )
   
  }
  return (
   
    
  <div className={styles.booksWrapper}>

      {booksElement}
  </div>
   
  )
}

export default BookList