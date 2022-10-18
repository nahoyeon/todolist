import React from "react";
import '../css/TodoList.css';
import TodoListitem from "./TodoListitem";

const TodoList = ({todos, onRemove, onToggle, onEdit}) => {
    return(
        <div className = "TodoList">
            {todos.map((todo) => (<TodoListitem todo = {todo} key = {todo.id} onRemove = {onRemove} onEdit = {onEdit} onToggle = {onToggle}/>))}
        </div>
    )
}
export default TodoList;