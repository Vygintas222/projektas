
import AuthorBookItem from '../AuthorBookItem/AuthorBookItem'
import styles from './AuthorBookList.module.scss'

const AuthorBooksList = ({books}) => {

   
 



  return (
    <>
   
    <div className={styles.bookWrapper}>
     
    {books.map((book)=> <AuthorBookItem key={book.id} data={book}/>)}
    
    </div>
    </>
    
  )
}

export default AuthorBooksList