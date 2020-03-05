import React, { useState, FormEvent, ChangeEvent } from "react"
import TodoList from "./components/TodoList"
import TodoForm from "./components/TodoForm"
import { Todo } from "./interfaces/TodoObject"
//Redux
import { useSelector, useDispatch } from "react-redux"
import { todoAdd } from "./redux/actions/todoActions"

const App: React.FC = () => {
  const dispatch = useDispatch()
  const todos: Todo[] = useSelector((state: any) => state.todoReducer.todos)
  console.log(todos)
  const [todoInput, setTodoInput] = useState("")
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    /* setTodos(previousTodos => [
      ...previousTodos,
      { task: todoInput, finished: false }
    ]) */
    dispatch(todoAdd({ task: todoInput, finished: false }))
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
