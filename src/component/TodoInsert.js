import React from 'react'
import '../css/TodoInsert.css'
import {MdAdd} from 'react-icons/md';
import { useState } from 'react'
import { useCallback } from 'react';
import {fetchCreate} from '../util/api';

const TodoInsert = () => {
    const [input, setInput] = useState('')

    const onChange = useCallback(e => {
        setInput(e.target.value); 
    }, []);

    // const onSubmit = useCallback(
    //     e => {
    //         onInsert(input);
    //         setInput('');
    //         e.preventDefault();
    //     },
    //     [onInsert, input],
        
    // )

    const onSubmit = (e) => {
        if(input.length > 0){

            setInput('');
            e.preventDefault();
        }
        else{
            setInput('')
            e.preventDefault();
        }
    }
    const createTodo = (e) => {
        e.preventDefault();
        let data = {
            "text" : input,
            "checked" : false
        }
        fetchCreate("http://localhost:3003/todolist", data)
    }

    return (
        <form className = "TodoInsert">
            <input placeholder = "할 일을 입력하세요" value = {input} onChange = {onChange} />
                <button type = "submit" onClick = {createTodo}>
                    <MdAdd />
                </button>
        </form>
    )
}
export default TodoInsert;
