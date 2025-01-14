import React from 'react'
import TodoItem from "../todoitems/TodoItems";
const TodoList = ({tasks,toggleComplete,deleteTodo}) => {
  return <>
    <ul>
      {tasks.map((task)=>(
        <TodoItem 
        key={task.id} 
        task={task}
        deleteTodo={deleteTodo}
        toggleComplete={toggleComplete} />
      ))}
    </ul>
  </>
}

export default TodoList