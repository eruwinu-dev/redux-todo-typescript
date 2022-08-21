import React, { FormEvent, MouseEvent } from "react"
import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "../../../app/store"
import { deleteTodo, selectTodo, toggleTodo } from "../../../app/todoSlice"
import { TodoType } from "../../../models/Todo"
import EditTodo from "../../EditTodo"

type Props = {
	todo: TodoType
}

const TodoItem = ({ todo }: Props) => {
	const selectedTodoId = useSelector((state: RootState) => state.selectedTodoId)
	const dispatch = useDispatch<AppDispatch>()

	const toggleTodoHandler = (event: FormEvent<HTMLInputElement>): void => {
		dispatch(toggleTodo(todo.id))
	}

	const deleteTodoHandler = (event: MouseEvent): void => {
		dispatch(deleteTodo(todo.id))
	}

	const selectTodoHandler = (event: MouseEvent): void => {
		dispatch(selectTodo(todo.id))
	}

	if (todo.id === selectedTodoId) return <EditTodo todo={todo} />

	return (
		<div className="todo-item">
			<div>
				<input type="checkbox" checked={todo.completed} onChange={toggleTodoHandler} />
				<span className={todo.completed ? "completed-todo-text" : ""}>{todo.title}</span>
			</div>
			<div>
				<button className="select-todo-button" type="button" onClick={selectTodoHandler}>
					Edit
				</button>
				<button className="delete-todo-button" type="button" onClick={deleteTodoHandler}>
					Delete
				</button>
			</div>
		</div>
	)
}

export default TodoItem

