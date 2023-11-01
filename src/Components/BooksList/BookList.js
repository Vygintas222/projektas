import React from 'react'
import BookItem from '../BookItem/BookItem'


const BookList = ({books}) => {

  // const deleteBookHandler = () =>{

  //   fetch(API_URL + '/books/' + books.id, {
  //     method: 'DELETE',
  //   })
  // }


  let booksElement = <p>no books...</p>

  if(books.length >0){
    booksElement = (
      <div>
        {books.map((book)=><BookItem key={book.id} data={book} />)}
      </div>
    )
   
  }
  return (
    <div>
      <h2>Books:</h2>
      {booksElement}
    </div>
  )
}

export default BookList