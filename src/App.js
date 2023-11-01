// import ContactUsPage from './contactUsPage'

import {Link, Route, Routes } from 'react-router-dom'
import './App.css'
import 'react-toastify/dist/ReactToastify.css'
import HomePage from './Pages/HomePage/HomePage'
import Headerr from './Components/Header/Header'
import AuthorsPage from './Pages/AuthorsPage/AuthorsPage'
import BooksPage from './Pages/BooksPage/BooksPage'
import AuthorPage from './Pages/AuthorPage/AuthorPage'
import BookPage from './Pages/BookPage/BookPage'
import VolumesPage from './Pages/VolumesPage/VolumesPage'
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
        <Route path='/volumes' element={<VolumesPage/>}/>




      </Routes>
   
    </div>
  )
}

export default App