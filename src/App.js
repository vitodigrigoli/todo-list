import React, {useState} from 'react'
import './App.css';
import 'bulma/css/bulma.css'
import Navbar from "./components/Navbar";
import {ThemeContext} from "./components/context";
import {data} from "./data/todos";
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";


function App() {

  // Theme
  const [theme, setTheme] = useState( 'light')
  const toggleTheme = () => {
    const newThemeValue = () => theme === 'light'? 'dark' : 'light'
    setTheme( newThemeValue )
  }

  // To do List
  const [todos, setTodos] = useState( data )
  const [newTodo, setNewTodo] = useState({
    id: todos.length,
    title: '',
    description: '',
    priority: ''
  })

  // handler
  const handleSubmit = ( event ) =>{
    event.preventDefault()
    let newTodos = [
      ...todos,
      newTodo
    ]
    setTodos( newTodos )

    // reset controlled component
    const newID = newTodo.id + 1
    setNewTodo({
      ...newTodo,
      id: newID,
      title: '',
      description: '',
      priority: 'high'
    })
  }
  const handleChange = (event) =>{
    event.persist()
    console.log(newTodo.id)

    setNewTodo({
      ...newTodo,
      [event.target.name]: event.target.value
    })
  }

  const handleReset = (event) =>{
    event.persist()
    setNewTodo({
      ...newTodo,
      title: '',
      description: '',
      priority: 'hight'
    })
  }

  const handleRemove = ( todo ) => {

    console.log('remove')
    const newTodos = todos.filter( item => item.id !== todo.id )
    setTodos( newTodos)
  }



  return (
    <div className={`app ${theme}`}>
      <ThemeContext.Provider value={ {value: theme, update: toggleTheme } } >
        <Navbar title={"TODO LIST"}/>
        <TodoList data={todos} handleRemove={handleRemove}/>
        <AddTodo data={newTodo} handleChange={handleChange} handleSubmit={handleSubmit} handleReset={handleReset}/>

      </ThemeContext.Provider>
    </div>

  );
}

export default App;
