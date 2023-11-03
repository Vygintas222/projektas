// import ContactUsPage from './contactUsPage'

import {Link, Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import './App.css'
import 'react-toastify/dist/ReactToastify.css'
import HomePage from './Pages/HomePage/HomePage'
import Headerr from './Components/Header/Header'
import AuthorsPage from './Pages/AuthorsPage/AuthorsPage'
import BooksPage from './Pages/BooksPage/BooksPage'
import AuthorPage from './Pages/AuthorPage/AuthorPage'
import BookPage from './Pages/BookPage/BookPage'
import VolumesPage from './Pages/VolumesPage/VolumesPage'
import EditBook from './Pages/EditBook/EditBook'
import GenresPage from './Pages/GenresPage/GenresPage'
import EditAuthorPage from './Pages/EditAuthorPage/EditAuthorPage'

function App() {
  return (
    <div>
   

    <Headerr></Headerr>

      <Routes>
        <Route path='/home' element={<HomePage/>}/>
        <Route path='/authors' element={<AuthorsPage/>}/>
        <Route path='authors/:id' element={<AuthorPage/>}/>
        <Route path='/books' element={<BooksPage/>}/>
        <Route path='/books/:id' element={<BookPage/>}/>
        <Route path='/edit-book/:id' element={<EditBook/>}/>
        <Route path='/volumes' element={<VolumesPage/>}/>
        <Route path='/edit-author/:id' element={<EditAuthorPage/>}/>
        <Route path='/genres' element={<GenresPage/>}/>
    



      </Routes>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
/>
    </div>
  )
}

export default App