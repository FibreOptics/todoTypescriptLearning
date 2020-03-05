import { ADD_TODO } from "../types/todoActionTypes"
import { Todo } from "../../interfaces/TodoObject"
interface ITodoState {
  todos: Todo[]
}

const initialTodoState: ITodoState = {
  todos: []
}

export const todoReducer = (state = initialTodoState, action: any) => {
  switch (action.type) {
    case ADD_TODO:
      return { ...state, todos: [...state.todos, action.payload] }
    default:
      return state
  }
}
