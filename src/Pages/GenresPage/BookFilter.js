// BooksFilter.js
import React, { useState, useEffect } from 'react';

const BookFilter = ({ books, genres }) => {
  const [selectedGenre, setSelectedGenre] = useState('');
  const [filteredBooks, setFilteredBooks] = useState([]);

  useEffect(() => {
    if (selectedGenre) {
      const filteredBooks = books.filter((book) => {
        return genres.some((genre) => genre.bookId === book.id && genre.name === selectedGenre);
      })
      setFilteredBooks(filteredBooks)
    } else {
      setFilteredBooks(books)
    }
  }, [selectedGenre, books, genres])

  
console.log(books)
  return (
    <div>
     
      <select onChange={(event) => setSelectedGenre(event.target.value)}>
        <option value="">All Genres</option>
        {genres.map((genre) => (
          <option key={genre.id} value={genre.name}>
            {genre.name}
          </option>
        ))}
      </select>
      <div className="books">
        {filteredBooks.map((book) => (
          <div key={book.id} className="book">
            <h3>{book.title}</h3>
            {book.photos[0] && <img className='image' src={book.photos[0].url} alt={book.photos[0].title}></img>}
            <p>{book.body}</p>
            <ul>
            {genres
                .filter((genre) => genre.bookId === book.id)
                .map((genre) => (
                  <li key={genre.id}>{genre.name}</li>
                ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}

export default BookFilter
