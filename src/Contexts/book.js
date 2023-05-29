import { createContext, useCallback, useState, useEffect } from "react";

import axios from 'axios'

/*------------------------------------*/

/*------------------------------------*/

/*------------------------------------*/


const BookContext = createContext();

const Provider=({children})=>{
    const [Books,updateBooks]= useState([]);
    
        /*-------------------*/ 
  

        /*-------------------*/ 
    
        const fetchBooks = useCallback(async () => {
            try {
              const response = await axios.get('http://localhost:3001/books/');
              const serverData = [...response.data];
              updateBooks(serverData);
            } catch (error) {
              console.error('Error fetching books:', error);
            }
          }, []);
        
          useEffect(() => {
            fetchBooks();
          }, [fetchBooks]);
        /*-------------------*/ 
        const AddBook= async(title)=>{
            const response = await axios.post('http://localhost:3001/books/',
            {title}
            );
            console.log(response.data);
            console.log(`Book '${title}' added and it's ID is :`,response.data.id);
            let id = response.data.id;
            updateBooks([...Books,{id,title}]);   
        };
        /*-------------------*/ 
       const EditBooks= async (id,value)=>{
            await axios.put('http://localhost:3001/books/'+id ,{title:value});
            console.log('Edit Book function triggered with the id',id, `to update to value`, value); 
            const UpdatedBooks = Books.map((element)=>{
                if (element.id===id){
                    element.title=value;
                    return element;
                }
                return element;
            });
            updateBooks(UpdatedBooks);
        };
        /*-------------------*/ 
        const DeleteBooks= async(id)=>{
            await axios.delete('http://localhost:3001/books/'+id); 
            console.log("DeleteBooksfunction trigered with id", id);
            const UpdatedBooks = Books.filter((element)=>{
                return element.id!==id;
            });
            updateBooks(UpdatedBooks);

            
        /*-------------------*/ 
    };
    const data = {Books,fetchBooks,AddBook,EditBooks,DeleteBooks };

    return(
        <BookContext.Provider value={data}>
            {children}
        </BookContext.Provider>
    );

 }


export {Provider};
export default BookContext;