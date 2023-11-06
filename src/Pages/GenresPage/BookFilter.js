
import React, { useState, useEffect } from 'react';
import styles from './BookFilter.module.scss'
import { Link } from "react-router-dom"
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

  

  return (
    <div className={styles.pageWrapper}>
     
     <div className={styles.selectGenres}>

      <select className={styles.selectElement} onChange={(event) => setSelectedGenre(event.target.value)}>
        <option value="">All Genres</option>
        {genres.map((genre) => (
          <option key={genre.id} value={genre.name}>
            {genre.name}
          </option>
        ))}
      </select>
        </div>
      <div className={styles.booksWrapper} >
        {filteredBooks.map((book) => (
          <div key={book.id} className={styles.books}>
            <Link to={`/books/${book.id}`}>
            <h3>{book.title}</h3>
            {book.photos[0] && <img className='image' src={book.photos[0].url} alt={book.photos[0].title}></img>}
            <p>{book.body}</p>
            <ul className={styles.genresList}>
            {genres
                .filter((genre) => genre.bookId === book.id)
                .map((genre) => (
                  <li key={genre.id}>{genre.name}</li>
                  ))}
            </ul>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default BookFilter
