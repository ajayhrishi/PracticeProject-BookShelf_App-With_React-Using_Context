import {useContext} from 'react';

import CreateBook from './components/CreateBook'
import BookShelf from './components/BookShelf'


import BookContext from './Contexts/book'


import './Component_style/CreateBook.css'


function App(){
    const {fetchBooks} = useContext(BookContext);
    return(
   <div className='BodyM'>
        
        <CreateBook/>
        <BookShelf/>
        
    </div>
    )
}

export default App;

/*    

import BookContext from './Contexts/book'
const {Books,AddBook,DeleteBooks,EditBooks,fetchBooks}= useContext(BookContext);
         */