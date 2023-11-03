import React from 'react'
import BookItem from '../BookItem/BookItem'
import './BookList.css'

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
      <div className='books-wrapper'>
        {books.map((book)=><BookItem key={book.id} data={book}  />)}
        
      </div>
    )
   
  }
  return (
    <div className='books-list-wrapper'>
    
      <h2>Books:</h2>
      {booksElement}
    </div>
  )
}

export default BookList