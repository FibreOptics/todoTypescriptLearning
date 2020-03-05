import React, { HTMLProps, ChangeEvent } from "react"

interface Props extends HTMLProps<HTMLFormElement> {
  onInputChange: (event: ChangeEvent<HTMLInputElement>) => void
  inputValue: string
}

const TodoForm: React.FC<Props> = ({
  onInputChange,
  inputValue,
  ...otherProps
}: Props) => {
  return (
    <form {...otherProps}>
      <input
        value={inputValue}
        onChange={onInputChange}
        placeholder="Feed me tasks!!"
      />
      <button type="submit">Add</button>
    </form>
  )
}

export default TodoForm
