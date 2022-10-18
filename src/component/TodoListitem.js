import React from 'react'
import { MdCheckBoxOutlineBlank, MdCheckBox, MdRemoveCircleOutline, MdAutoFixHigh } from "react-icons/md";
import '../css/TodoListitem.css'
import { fetchDelete, fetchPatch } from '../util/api';


const TodoListitem = ({todo, onRemove, onToggle, onEdit}) => {

    const {id, text, checked} = todo;

    console.log(todo)

    const updataTodo = () => {
        const data = {
            ...todo,
            "checked": !checked
        }
        fetchPatch("http://localhost:3003/todolist", id, data)
    }
    
    const deleteTodo = () => {
        fetchDelete("http://localhost:3003/todolist", id)
    }
    return (
        <div className = "TodoListItem">
            <div className = {`checkbox ${checked ? 'checked' : ""}`}>
                {checked ? (
                <MdCheckBox onClick={updataTodo}/>
                ) : (
                <MdCheckBoxOutlineBlank onClick={updataTodo}/>
                )}
                <div className = "text">{text}</div>
            </div>
            <div className = "fix" onClick = {() => onEdit(id)}>
                <MdAutoFixHigh />
            </div>
            
            <div className = "remove" onClick = {deleteTodo}>
                <MdRemoveCircleOutline />
            </div>
        </div>
    )
}
export default TodoListitem;
