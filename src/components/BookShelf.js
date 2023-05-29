import Book from './Book'
import '../Component_style/Book.css'
import '../Component_style/BookShelf.css'

import BookContext from '../Contexts/book'
import { useContext } from 'react'


function BookShelf (){


    const {Books}= useContext(BookContext);
    /*------------------*/

    const Books_as_jsx = Books.map((Open_Book,id) => {
      return <div key={id}><Book one_book={Open_Book}/></div>}
   ); /*key is a special prop that can be used while rendering with the map function 
   using the react*/
    /*------------------*/

    

    return <div className='BookShelf'>
            {Books_as_jsx}
    </div>
}

export default BookShelf;

/**
 * 
 * 
 * 
 *  */