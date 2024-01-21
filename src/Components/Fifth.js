import React, {useEffect, useState} from 'react'
import axios from 'axios'
import "./Fifth.css"

/* 
Consigne : appeler l'api : https://jsonplaceholder.typicode.com/todos/ et afficher les todos a l'écran et implémenter une pagination
*/

export const Fifth = () => {
  const [todos, setTodos] = useState([])
  const [todosPerPage, setTodosPerPage] = useState(10)
  const [currentPage, setCurrentPage] = useState(1)

  const numOfTotalPages = Math.ceil(todos.length /todosPerPage)
  const pages  =[...Array(numOfTotalPages +1).keys()].slice(1)

  const indexoffLastTodo= currentPage *todosPerPage; //40
  const indexOffFirstTodo= indexoffLastTodo -todosPerPage; 

  const visibleTodos = todos.slice(indexOffFirstTodo, indexoffLastTodo)

  const prevPageHandler = () =>{
    if (currentPage === 1) {
      return ""
    } else {
      setCurrentPage(currentPage - 1);
    }
  }
  const nextPageHandler = () =>{
    if (currentPage === 20 ) {
      return ""
    } else {
      setCurrentPage(currentPage + 1);
    }
  }



  useEffect(() =>{
    try {
      axios
        .get("https://jsonplaceholder.typicode.com/todos/")
        .then(response => setTodos(response.data));

    } catch (error) {
      console.log(error);
    }
  },[])



  return (
    <div>
      {
        visibleTodos.map((todo) => (
        <p>{todo.title}</p>
        ))}
        <br/>
        <br/>
        <span onClick={prevPageHandler}>Prev</span>
        <p>
          {
            pages.map((page) => (
              <span 
                className={`${currentPage === page ? "active" : ''}`}
                key={page}
                onClick={() => setCurrentPage(page)}
              >{`${page} | `}</span>
          ))}
        </p>
        <span onClick={nextPageHandler}>Next</span>
    </div>
  )
}
