import React from 'react';
import {useState, useCallback, useRef, useEffect} from 'react';
import TodoTemplate from './component/TodoTemplate'
import TodoInsert from './component/TodoInsert';
import TodoList from './component/TodoList';

function App() {
  const [edit, setEdit] = useState(false);
  const [todos, setTodos] = useState([])

  useEffect(() => {
    fetch("http://localhost:3003/todolist")
    .then((res) =>{
      return res.json();
    })
    .then((data) => {
      console.log(data)
      setTodos(data)
    })
  },[])

  const nextId = useRef(4);

  const onRemove = useCallback(
    id => {
      setTodos(todos.filter(todo => todo.id !== id));
    }
  )

  const onToggle = useCallback(
    id => {
      setTodos(
        todos.map(todo => 
          todo.id === id ? {...todo, checked: !todo.checked}: todo,
        ),
      );
    },
    [todos],
  )

  
  const onEdit = (id, text) => {
    setEdit(true);
    setTodos(todos.map((todo) => todo.id === id ? {...todo, text} : todo))
  }
  


  return (
    <>
      <TodoTemplate todoLength = {todos.length}>
        <TodoInsert />
        <TodoList todos = {todos} onRemove = {onRemove} onEdit = {onEdit} onToggle = {onToggle}/>
      </TodoTemplate>
    </>
  );
}

export default App;
