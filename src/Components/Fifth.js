import React, {useEffect, useState} from 'react'
import axios from 'axios'

/* 
Consigne : appeler l'api : https://jsonplaceholder.typicode.com/todos/ et afficher les todos a l'écran et implémenter une pagination
*/

export const Fifth = () => {
  const [todos, setTodos] = useState([])
  const [todosPerPage, setTodosPerPage] = useState(10)
  const [currentPage, setCurrentPage] = useState(1)

  const numOfTotalPages = Math.ceil(todos.length /todosPerPage)
  const pages  =[...Array(numOfTotalPages +1).keys()].slice(1)

  const indexofLastTodo= currentPage *todosPerPage; //40


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
        todos.map((todo) => (
        <p>{todo.title}</p>
        ))}
        <br/>
        <br/>
        <span>Prev</span>
        <p>
          {
            pages.map((page) => (
              <span key={page}>{`${page} | `}</span>
          ))}
        </p>
        <span>Next </span>
    </div>
  )
}
