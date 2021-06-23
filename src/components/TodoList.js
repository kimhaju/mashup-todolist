import React from 'react';
import './TodoList.css'
import TodoItem from './TodoItem';
import { useTodoState } from '../TodoContext'


const TodoList= function() {
  const todos = useTodoState();
  return (
    <div className="todo-list">
      {todos.map(todo=>(
        <TodoItem 
          key={todo.id}
          id={todo.id}
          text= {todo.text}
          done={todo.done}
        />
      ))} 
    </div>
  )
}
export default TodoList;