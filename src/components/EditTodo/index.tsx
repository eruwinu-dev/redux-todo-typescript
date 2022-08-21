import React, { FormEvent, MouseEvent, useState } from "react"
import { useDispatch } from "react-redux"
import { AppDispatch } from "../../app/store"
import { editTodo, selectTodo } from "../../app/todoSlice"
import { TodoType } from "../../models/Todo"

type Props = {
	todo: TodoType
}

const EditTodo = ({ todo }: Props) => {
	const [title, setTitle] = useState<string>(todo.title)

	const dispatch = useDispatch<AppDispatch>()

	const changeTitleHandler = (event: FormEvent<HTMLInputElement>): void => {
		event.preventDefault()
		setTitle(event.currentTarget.value)
	}

	const deSelectTodoHandler = (event: MouseEvent): void => {
		dispatch(selectTodo(null))
	}

	const editTodoHandler = (event: MouseEvent): void => {
		if (!title) return
		dispatch(editTodo(title))
		setTitle("")
	}

	return (
		<div className="edit-todo-container">
			<input type="text" placeholder="Edit Todo" value={title} onChange={changeTitleHandler} />
			<div>
				<button className="edit-todo-button" type="button" onClick={editTodoHandler}>
					Save
				</button>
				<button className="cancel-todo-button" type="button" onClick={deSelectTodoHandler}>
					Cancel
				</button>
			</div>
		</div>
	)
}

export default EditTodo

