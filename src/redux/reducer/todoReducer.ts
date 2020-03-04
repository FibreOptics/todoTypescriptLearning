import { ADD_TODO } from "../action/actionTypes"

const initialState = {}

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      console.log(action)
      console.log("reduced")
      return {...state, action.payload}
    default:
      return state
  }
}
