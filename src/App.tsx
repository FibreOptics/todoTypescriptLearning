import React, { useState, FormEvent, ChangeEvent } from "react"
import TodoList from "./TodoList"
import TodoForm from "./TodoForm"
import { Todo } from "./interfaces/Todo"

const App: React.FC = () => {
  const [todos, setTodos] = useState<Array<Todo>>([])
  const [todoInput, setTodoInput] = useState("")
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    /* setTodos(previousTodos => [
      ...previousTodos,
      { task: todoInput, finished: false }
    ]) */
    setTodos([...todos, { task: todoInput, finished: false }])
    setTodoInput("")
  }
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTodoInput(event.currentTarget.value)
  }

  return (
    <React.Fragment>
      <h1>To do .ts</h1>
      <TodoList todos={todos} />
      <TodoForm
        inputValue={todoInput}
        onSubmit={handleSubmit}
        onInputChange={handleChange}
      />
    </React.Fragment>
  )
}

export default App
