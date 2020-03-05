import { ADD_TODO } from "../types/todoActionTypes"
import { Todo } from "../../interfaces/TodoObject"

export const todoAdd = (todoObj: Todo) => ({
  type: ADD_TODO,
  payload: todoObj
})
