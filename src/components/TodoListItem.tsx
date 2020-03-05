import React from "react"
import { Todo } from "../interfaces/TodoObject"

interface Props {
  todo: Todo
}

const TodoListItem: React.FC<Props> = ({ todo }) => {
  return (
    <li>
      {todo.task} | status: {todo.finished ? "done" : "pending"}
    </li>
  )
}

export default TodoListItem
