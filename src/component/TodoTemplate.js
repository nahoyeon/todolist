import React from 'react';
import '../css/TodoTemplate.css';

const TodoTemplate = ({children, todoLength}) => {
    return(
        <div className = "TodoTemplate">
            <div className = "app-title">일정관리({todoLength})</div>
            <div className = "content">{children}</div>
        </div>

    )
}   
export default TodoTemplate;