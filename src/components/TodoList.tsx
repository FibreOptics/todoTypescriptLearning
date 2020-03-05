import React from "react"
import TodoListItem from "./TodoListItem"
import { Todo } from "../interfaces/TodoObject"

interface Props {
  todos: Todo[]
}

const TodoList: React.FC<Props> = ({ todos }: Props) => {
  return (
    <ul>
      {/* <TodoListItem todo={{ task: "go Home", finished: false }} /> */}
      {todos.map(({ task, finished }) => (
        <TodoListItem todo={{ task: task, finished: finished }} />
      ))}
    </ul>
  )
}

export default TodoList
