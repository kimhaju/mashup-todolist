import React from 'react';
import './TodoTemplate.css'

const TodoTemplate = ({children}) =>{
  return (
    <main className="todo-list-template">
      {children}
      </main>
  )

}

export default TodoTemplate;