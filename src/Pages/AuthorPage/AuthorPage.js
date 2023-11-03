import React, { useEffect, useState } from 'react'
import { Link,  useParams } from 'react-router-dom'
import Container from '../../Components/Container/Container'
import { API_URL } from '../../config'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import axios from 'axios'
import AddGenreForm from '../AddGenreForm/AddGenreForm'

const AuthorPage = () => {
    const { id } = useParams()
    const [author , setAuthor]= useState([])
    const [books,setBooks]= useState([])
    const [authorDeleted, setAuthorDeleted]= useState(false)

    const [title ,setTitle] = useState('')
    const [body ,setBody] = useState('')
    const [url, setUrl] = useState('')
    const [photo, setPhoto]= useState('')
   
    const navigate = useNavigate()
    useEffect(()=>{
     async function fetchData() {
        const res = await fetch(`${API_URL}/authors/${id}`)
        const authorData = await res.json()
        setAuthor(authorData.name)
     } 
     fetchData()
    },[id])

    
    useEffect(()=>{

     async function fetchData() {
        const res = await fetch(`${API_URL}/authors/${id}/books?_embed=photos&_embed=genres`)
        const Data = await res.json()
        setBooks(Data)
        
      
     } 
     fetchData()
    },[id])

    const removeGenreHandler = async (genreId) => {
   
      await axios.delete(`${API_URL}/genres/${genreId}`);
    
      
 
    };

    
  
    const booksList = books.map(book =>(
      <div key={book.id} className='book-item'>
      
        <Link
            to={`/books/${book.id}`}
            className='book-link'
            >
              <h3>{book.title}</h3>

                {book.photos.map(Photo => (
                  <img key={Photo.id} src={Photo.url} alt=''></img>
                  ))}
                 <p>{book.body}</p>
   </Link> 
                   {book.genres.map(genre => (
                    <div key={genre.id}>
                          <button onClick={() => removeGenreHandler(genre.id)}>Remove Genre</button>
                            
                           
                          
                            
                     <p >{genre.name}</p>
                    </div>
                       ))}

                        
            

       </div>
    ))

  const deleteAuthorHandler =() =>{
    fetch(`${API_URL}/Authors/${id}`,{
      method:`DELETE`
    })
    setAuthorDeleted(true)
     toast(' Author deleted', {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
     
      theme: "dark",
       })
       navigate(`/authors`)
}

const titleHandler = (event) =>{
  setTitle(event.target.value)

}
const bodyHandler = (event) =>{
  setBody(event.target.value)

}
const photoHandler = (event) =>{
  setUrl(event.target.value)
}
const coverHandler =(event)=>{
    setPhoto(event.target.value)
}

const newBookHandler =  async event =>{
  event.preventDefault()
  const newBook ={
    authorId:Number(id),
    title,
    body
  }
 

  const res = await axios.post(API_URL + '/books', newBook)
 
}
const addCoverHandler = async event =>{
  event.preventDefault()

  
  const newCover={
    bookId:Number(photo),
    url
  }


  const res = await axios.post(API_URL + '/photos', newCover)


}
const coverOption = books.map(option =>(
  <option key={option.id} value={option.id}>{option.title}</option>
))
  

  return (
   <Container>
    {authorDeleted?(
      <></>
    ):
    (
      <div>

       <h2>{author} books</h2> 
        <button onClick={deleteAuthorHandler}>Delete author</button>
        <Link to={`/edit-author/${id}`}>Edit Author</Link>
        <fieldset>
        <legend>Add book</legend>
        <form onSubmit={newBookHandler}>
          <div className='form-control'>
          <label htmlFor='title'>Book title</label>
          <input 
          type='text' 
          name='title' 
          id='title'
          onChange={titleHandler}
          ></input>
          </div>
          <div className='form-control'>
          <label htmlFor='body'>Book synopsis</label>
          <textarea
         
          name='body' 
          id='body'
          onChange={bodyHandler}
          ></textarea>
          </div>
       
          <button type='submit'>add</button>
        </form>
        </fieldset>

      <fieldset>
      <legend>Add cover</legend>
        <form onSubmit={addCoverHandler}>
        <label htmlFor='cover'>Select book</label>
        <select onChange={coverHandler} >
          <option value={''}>Choose book</option>
            {coverOption}
        </select>
        <div className='form-control'>
          <label htmlFor='cover'>Book cover</label>
          <input 
          type='text' 
          name='cover' 
          id='cover'
          onChange={photoHandler}
          ></input>
        
          </div> 
            <button type='submit'>add</button>
          </form>
          </fieldset>

      <AddGenreForm/>


        <div className='books-wrapper'>
            {booksList}

        </div>
      </div>
    )}

       
   </Container>
  )
}

export default AuthorPage