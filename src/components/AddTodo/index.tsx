import React, { FormEvent, MouseEvent, useState } from "react"
import { useDispatch } from "react-redux"
import { AppDispatch } from "../../app/store"
import { addTodo } from "../../app/todoSlice"

type Props = {}

const AddTodo = (props: Props) => {
	const [title, setTitle] = useState<string>("")

	const dispatch = useDispatch<AppDispatch>()

	const changeTitleHandler = (event: FormEvent<HTMLInputElement>): void => {
		event.preventDefault()
		setTitle(event.currentTarget.value)
	}

	const addTodoHandler = (event: MouseEvent): void => {
		if (!title) return
		dispatch(addTodo(title))
		setTitle("")
	}

	return (
		<div className="add-todo-container">
			<input type="text" placeholder="Add Todo" value={title} onChange={changeTitleHandler} />
			<button className="add-todo-button" type="button" onClick={addTodoHandler}>
				Add
			</button>
		</div>
	)
}

export default AddTodo

